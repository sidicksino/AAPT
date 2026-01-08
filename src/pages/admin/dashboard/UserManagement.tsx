import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Search, Edit2, Trash2, RefreshCw, User, Shield } from 'lucide-react';
import { userService } from '../../../services/userService';
import { UserProfile } from '../../../types';
import AddEditUserModal from './AddEditUserModal.tsx';

const UserManagement: React.FC = () => {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<UserProfile | null>(null);
    const [users, setUsers] = useState<UserProfile[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUsers = async () => {
        setIsLoading(true);
        try {
            const data = await userService.getAll();
            setUsers(data);
            setError(null);
        } catch (err) {
            console.error('Error fetching users:', err);
            setError('Failed to load users from Supabase');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const filteredUsers = users.filter(user => 
        (user.full_name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) || 
        (user.email?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (user.role?.toLowerCase() || '').includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (id: string) => {
        if(confirm(t('admin.users.delete_confirm'))) {
            console.log(`Attempting to delete user with ID: ${id}`);
            try {
                await userService.delete(id);
                // small delay to ensure propagation
                await new Promise(resolve => setTimeout(resolve, 500));
                await fetchUsers(); // Refresh list
            } catch (err: any) {
                console.error('Error deleting user:', err);
                alert(`Failed to delete user: ${err.message || 'Unknown error'}`);
            }
        }
    };

    const handleEdit = (user: UserProfile) => {
        setEditingUser(user);
        setIsModalOpen(true);
    };

    const handleCreate = () => {
        setEditingUser(null);
        setIsModalOpen(true);
    };

    const handleSave = async (user: Partial<UserProfile>) => {
        try {
            if (editingUser) {
                await userService.update(editingUser.id, user);
            } else {
                 // Note: We cannot create AUTH users from here without an Edge Function or Supabase Admin API.
                 // For now, this will likely fail if we try to insert into 'profiles' with a random ID 
                 // because of the foreign key constraint to auth.users (unless we removed it?).
                 // If the foreign key exists, this 'create' will fail. 
                 // We will catch that error and alert the user.
                 alert("Cannot create new Login Accounts from here (Security Restriction). Please ask the user to Sign Up, or create them in Supabase Auth dashboard. You can only edit existing profiles.");
                 return;
            }
            setIsModalOpen(false);
            fetchUsers();
        } catch (err) {
            console.error('Error saving user:', err);
            alert('Failed to save user');
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{t('admin.nav.users')}</h1>
                    <p className="text-gray-500 mt-1">Manage administrators and team members</p>
                </div>
                {/* 
                <button 
                    onClick={handleCreate}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg hover:bg-primary-hover transition-colors font-medium opacity-50 cursor-not-allowed"
                    title="Please use Supabase Dashboard to add new Auth users"
                >
                    <Plus size={20} />
                    <span>Add User</span>
                </button>
                */}
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center justify-between">
                    <span>{error}</span>
                    <button onClick={fetchUsers} className="flex items-center gap-1 text-sm font-bold underline">
                        <RefreshCw size={14} /> Retry
                    </button>
                </div>
            )}

            {/* Search and Filter Bar */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search users..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                </div>
            </div>

            {/* Users List */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                {isLoading ? (
                    <div className="p-12 text-center text-gray-500 flex flex-col items-center">
                        <RefreshCw className="animate-spin mb-2" size={24} />
                        Loading users...
                    </div>
                ) : (
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">User</th>
                                <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Role</th>
                                <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="py-4 px-6 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredUsers.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="py-8 text-center text-gray-400">
                                        No users found.
                                    </td>
                                </tr>
                            ) : filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                                                {user.full_name ? user.full_name.charAt(0).toUpperCase() : <User size={20} />}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900">{user.full_name || 'Unknown'}</h3>
                                                <p className="text-xs text-gray-500">ID: {user.id.slice(0, 8)}...</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 capitalize">
                                            <Shield size={12} />
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-sm text-gray-600">
                                        {user.email}
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button 
                                                type="button"
                                                onClick={() => handleEdit(user)}
                                                className="p-2 text-gray-500 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                                                title="Edit"
                                            >
                                                <Edit2 size={16} />
                                            </button>
                                            <button 
                                                type="button"
                                                onClick={() => handleDelete(user.id)}
                                                className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                )}
                 <div className="p-4 border-t border-gray-100 text-center text-xs text-gray-400">
                    Showing {filteredUsers.length} users
                </div>
            </div>

            <AddEditUserModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                user={editingUser}
                onSave={handleSave}
            />
        </div>
    );
};

export default UserManagement;
