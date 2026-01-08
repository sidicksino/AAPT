
import { supabase } from '../lib/supabase';

export const storageService = {
    /**
     * Uploads a file to the 'media' bucket
     * @param file The file to upload
     * @param path Optional path within the bucket (default: 'uploads')
     * @returns The public URL of the uploaded file
     */
    async uploadFile(file: File, path: string = 'uploads'): Promise<string> {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
        const filePath = `${path}/${fileName}`;

        const { error: uploadError } = await supabase.storage
            .from('media')
            .upload(filePath, file);

        if (uploadError) {
            throw uploadError;
        }

        const { data } = supabase.storage
            .from('media')
            .getPublicUrl(filePath);

        return data.publicUrl;
    }
};
