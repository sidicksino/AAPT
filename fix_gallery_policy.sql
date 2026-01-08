-- Re-apply Delete Policy for Gallery
drop policy if exists "Enable delete for authenticated users only" on public.gallery;

create policy "Enable delete for authenticated users only"
on public.gallery for delete
to authenticated
using (true);
