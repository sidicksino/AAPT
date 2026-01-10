import { supabase } from '../lib/supabase';
import { NewsTranslation, NewsArticle } from '../types';

import { localNews } from '../data/localNews';

export const newsService = {
    // Fetch all news articles (merged local + remote)
    async getAll() {
        const { data: remoteData, error } = await supabase
            .from('news')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        // Merge and sort by created_at descending
        const allNews = [...(remoteData as NewsArticle[]), ...localNews].sort((a, b) => {
            const dateA = new Date(a.created_at || a.date).getTime();
            const dateB = new Date(b.created_at || b.date).getTime();
            return dateB - dateA;
        });

        return allNews;
    },

    // Get single article by ID
    async getById(id: number) {
        // If ID is negative, look in local storage
        if (id < 0) {
            const article = localNews.find(a => a.id === id);
            if (!article) throw new Error('Article not found locally');
            return article;
        }

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
        const { error, count } = await supabase
            .from('news')
            .delete({ count: 'exact' })
            .eq('id', id);

        if (error) throw error;
        if (count === 0) throw new Error('No valid entry found to delete (Check RLS or ID)');
    }
};
