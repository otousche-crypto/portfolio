/*
  # Allow Public Uploads to Images Bucket

  1. Changes
    - Drop the existing authenticated-only upload policy
    - Create a new policy that allows public (anon) users to upload to the images bucket
  
  2. Security Note
    - This is appropriate for a personal portfolio site where the owner needs to upload images
    - For production apps with user-generated content, you would want more restrictive policies
*/

-- Drop existing upload policy
DROP POLICY IF EXISTS "Authenticated users can upload images" ON storage.objects;

-- Create new policy for public upload access
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Public can upload images'
  ) THEN
    CREATE POLICY "Public can upload images"
      ON storage.objects
      FOR INSERT
      TO public
      WITH CHECK (bucket_id = 'images');
  END IF;
END $$;

-- Drop existing update policy
DROP POLICY IF EXISTS "Authenticated users can update images" ON storage.objects;

-- Create new policy for public update access
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Public can update images'
  ) THEN
    CREATE POLICY "Public can update images"
      ON storage.objects
      FOR UPDATE
      TO public
      USING (bucket_id = 'images');
  END IF;
END $$;

-- Drop existing delete policy
DROP POLICY IF EXISTS "Authenticated users can delete images" ON storage.objects;

-- Create new policy for public delete access
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Public can delete images'
  ) THEN
    CREATE POLICY "Public can delete images"
      ON storage.objects
      FOR DELETE
      TO public
      USING (bucket_id = 'images');
  END IF;
END $$;