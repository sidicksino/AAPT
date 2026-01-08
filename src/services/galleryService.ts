
import { supabase } from '../lib/supabase';

export interface GalleryItem {
    id: number;
    created_at?: string;
    title: string | null;
    location: string | null;
    category: string;
    type: 'image' | 'video';
    src: string;
}

export const galleryService = {
    async getAll() {
        // Order by created_at descending by default
        const { data, error } = await supabase
            .from('gallery')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data as GalleryItem[];
    },

    async getById(id: number) {
        const { data, error } = await supabase
            .from('gallery')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data as GalleryItem;
    },

    async create(item: Omit<GalleryItem, 'id' | 'created_at'>) {
        const { data, error } = await supabase
            .from('gallery')
            .insert(item)
            .select()
            .single();

        if (error) throw error;
        return data as GalleryItem;
    },

    async update(id: number, item: Partial<GalleryItem>) {
        const { data, error } = await supabase
            .from('gallery')
            .update(item)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data as GalleryItem;
    },

    // Delete gallery item
    async delete(id: number) {
        const { error, count } = await supabase
            .from('gallery')
            .delete({ count: 'exact' })
            .eq('id', id);

        if (error) throw error;
        if (count === 0) throw new Error('No valid entry found to delete (Check RLS or ID)');
    }
};;
