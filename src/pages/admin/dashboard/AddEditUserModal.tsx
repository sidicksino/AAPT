import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { UserProfile } from '../../../types';

interface AddEditUserModalProps {
    isOpen: boolean;
    onClose: () => void;
    user?: UserProfile | null;
    onSave: (user: Partial<UserProfile>) => void;
}

const AddEditUserModal: React.FC<AddEditUserModalProps> = ({ isOpen, onClose, user, onSave }) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<Partial<UserProfile>>({
        full_name: '',
        email: '',
        role: 'admin'
    });

    useEffect(() => {
        if (user) {
            setFormData(user);
        } else {
            setFormData({
                full_name: '',
                email: '',
                role: 'admin'
            });
        }
    }, [user, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">
                        {user ? t('admin.users.edit_title') : t('admin.users.add_title')}
                    </h2>
                    <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                             {t('admin.users.modal.name_label')}
                        </label>
                        <input 
                            type="text" 
                            required
                            value={formData.full_name || ''}
                            onChange={e => setFormData({...formData, full_name: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder={t('admin.users.modal.name_placeholder')}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                             {t('admin.users.modal.email_label')}
                        </label>
                         {/* Email is read-only for edits typically, unless we want to allow changing contact email */}
                        <input 
                            type="email" 
                            required
                            disabled={!!user} // Disable email edit for existing users (Auth sync issue prevention)
                            value={formData.email || ''}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                            className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${user ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                            placeholder={t('admin.users.modal.email_placeholder')}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                             {t('admin.users.modal.role_label')}
                        </label>
                        <select 
                            value={formData.role}
                            onChange={e => setFormData({...formData, role: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                        >
                            <option value="admin">Admin</option>
                            <option value="editor">Editor</option>
                            <option value="viewer">Viewer</option>
                        </select>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                        <button 
                            type="button" 
                            onClick={onClose}
                            className="px-6 py-2.5 rounded-lg font-bold text-gray-500 hover:bg-gray-100 transition-colors"
                        >
                            {t('admin.users.modal.cancel')}
                        </button>
                        <button 
                            type="submit" 
                            className="flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all"
                        >
                            <Check size={18} />
                            {t('admin.users.modal.save')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEditUserModal;
