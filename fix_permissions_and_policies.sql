-- COMPREHENSIVE FIX FOR PERMISSIONS
-- Run this entire script in the Supabase SQL Editor

-- 1. Grant permissions to the 'authenticated' role (Users who are logged in)
GRANT ALL ON TABLE public.gallery TO authenticated;
GRANT ALL ON TABLE public.news TO authenticated;

-- 2. Grant permissions to the 'service_role' (Backend/Admin API)
GRANT ALL ON TABLE public.gallery TO service_role;
GRANT ALL ON TABLE public.news TO service_role;

-- 3. Grant usage on sequences so new IDs can be generated
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO service_role;

-- 4. Re-apply Delete Policies for Gallery
DROP POLICY IF EXISTS "Enable delete for authenticated users only" ON public.gallery;
CREATE POLICY "Enable delete for authenticated users only"
ON public.gallery FOR DELETE
TO authenticated
USING (true);

-- 5. Re-apply Delete Policies for News
DROP POLICY IF EXISTS "Enable delete for authenticated users only" ON public.news;
CREATE POLICY "Enable delete for authenticated users only"
ON public.news FOR DELETE
TO authenticated
USING (true);

-- 6. Verify Policy Existence (Optional, just ensures they are enabled)
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
