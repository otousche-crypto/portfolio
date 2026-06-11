/*
  # Create Storage Bucket for Images

  1. New Storage Bucket
    - Creates a public bucket named "images" for storing profile images and other site assets
  
  2. Security
    - Enable RLS on storage.objects table
    - Add policy for public read access to all images in the bucket
    - Add policy for authenticated users to upload images to the bucket
  
  3. Notes
    - Images will be publicly accessible via Supabase CDN
    - Only authenticated users can upload new images
    - This provides secure and scalable image storage
*/

-- Create the storage bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'images',
  'images',
  true,
  5242880, -- 5MB limit
  ARRAY['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- Create policy for public read access
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Public read access for images'
  ) THEN
    CREATE POLICY "Public read access for images"
      ON storage.objects
      FOR SELECT
      TO public
      USING (bucket_id = 'images');
  END IF;
END $$;

-- Create policy for authenticated users to upload
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Authenticated users can upload images'
  ) THEN
    CREATE POLICY "Authenticated users can upload images"
      ON storage.objects
      FOR INSERT
      TO authenticated
      WITH CHECK (bucket_id = 'images');
  END IF;
END $$;

-- Create policy for authenticated users to update their uploads
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Authenticated users can update images'
  ) THEN
    CREATE POLICY "Authenticated users can update images"
      ON storage.objects
      FOR UPDATE
      TO authenticated
      USING (bucket_id = 'images');
  END IF;
END $$;

-- Create policy for authenticated users to delete their uploads
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Authenticated users can delete images'
  ) THEN
    CREATE POLICY "Authenticated users can delete images"
      ON storage.objects
      FOR DELETE
      TO authenticated
      USING (bucket_id = 'images');
  END IF;
END $$;