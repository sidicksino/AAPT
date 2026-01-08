import { supabase } from '../lib/supabase';
import { NewsTranslation } from '../types';

export interface NewsArticle extends NewsTranslation {
    id: number;
    image?: string;
    created_at?: string;
}

export const newsService = {
    // Fetch all news articles
    async getAll() {
        const { data, error } = await supabase
            .from('news')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data as NewsArticle[];
    },

    // Get single article by ID
    async getById(id: number) {
        const { data, error } = await supabase
            .from('news')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data as NewsArticle;
    },

    // Create new article
    async create(article: Omit<NewsArticle, 'id'>) {
        const { data, error } = await supabase
            .from('news')
            .insert([article])
            .select()
            .single();

        if (error) throw error;
        return data as NewsArticle;
    },

    // Update existing article
    async update(id: number, updates: Partial<NewsArticle>) {
        const { data, error } = await supabase
            .from('news')
            .update(updates)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data as NewsArticle;
    },

    // Delete article
    async delete(id: number) {
        const { error } = await supabase
            .from('news')
            .delete()
            .eq('id', id);

        if (error) throw error;
    }
};
