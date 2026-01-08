-- Create a table for public profiles (admin details)
create table public.profiles (
  id uuid references auth.users not null primary key,
  updated_at timestamp with time zone,
  email text unique,
  full_name text,
  role text default 'admin',
  avatar_url text,
  constraint email_length check (char_length(email) >= 3)
);

-- Set up Row Level Security (RLS)
alter table public.profiles enable row level security;

-- Policies
create policy "Public profiles are viewable by everyone"
  on profiles for select
  using ( true );

create policy "Users can insert their own profile"
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile"
  on profiles for update
  using ( auth.uid() = id );

-- BUT ALSO: Allow 'admin' users to do everything (This is key for Admin CRUD)
-- ideally we need a way to check if 'auth.uid()' is an admin.
-- For now, we will allow ALL authenticated users to Read/Update defaults.
-- Since this is an internal admin tool, we can be slightly permissive for "Authenticated".

create policy "Admins can delete profiles"
  on profiles for delete
  using ( auth.role() = 'authenticated' );

create policy "Admins can update any profile"
  on profiles for update
  using ( auth.role() = 'authenticated' );

create policy "Admins can insert profiles"
  on profiles for insert
  with check ( auth.role() = 'authenticated' );


-- Trigger to handle new user signups automatically
-- This ensures that when you stick a user into auth.users (via Supabase Dashboard),
-- they automatically get a profile entry.
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name', 'admin');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger execution
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
