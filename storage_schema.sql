-- Create a new public bucket named 'media'
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

-- Allow public access to read files in the 'media' bucket
create policy "Public Access"
on storage.objects for select
using ( bucket_id = 'media' );

-- Allow authenticated users to upload files to 'media' bucket
create policy "Authenticated users can upload"
on storage.objects for insert
to authenticated
with check ( bucket_id = 'media' );

-- Allow authenticated users to update their own files (optional, but good for re-uploads)
create policy "Authenticated users can update"
on storage.objects for update
to authenticated
using ( bucket_id = 'media' );

-- Allow authenticated users to delete files
create policy "Authenticated users can delete"
on storage.objects for delete
to authenticated
using ( bucket_id = 'media' );
