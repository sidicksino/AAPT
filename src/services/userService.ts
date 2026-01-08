import { supabase } from '../lib/supabase';
import { UserProfile } from '../types';

export const userService = {
    // Fetch all profiles
    async getAll() {
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .order('full_name', { ascending: true });

        if (error) throw error;
        return data as UserProfile[];
    },

    // Get single profile by ID
    async getById(id: string) {
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data as UserProfile;
    },

    // Update existing profile
    async update(id: string, updates: Partial<UserProfile>) {
        const { data, error } = await supabase
            .from('profiles')
            .update(updates)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data as UserProfile;
    },

    // Delete profile
    // Note: Deleting a profile usually shouldn't delete the auth user automatically 
    // unless a database trigger is set up. For now, we allow deleting the profile entry.
    async delete(id: string) {
        const { error, count } = await supabase
            .from('profiles')
            .delete({ count: 'exact' })
            .eq('id', id);

        if (error) throw error;
        if (count === 0) throw new Error('No valid entry found to delete (Check RLS or ID)');
    }
};
