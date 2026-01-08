import React, { useState, useEffect } from 'react';
import { X, Upload, Check, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NewsTranslation } from '../../../types';
import { storageService } from '../../../services/storageService';

interface AddEditNewsModalProps {
    isOpen: boolean;
    onClose: () => void;
    article?: NewsTranslation | null;
    onSave: (article: Partial<NewsTranslation>) => void;
}

const AddEditNewsModal: React.FC<AddEditNewsModalProps> = ({ isOpen, onClose, article, onSave }) => {
    const { t } = useTranslation();
    const [isUploading, setIsUploading] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [formData, setFormData] = useState<Partial<NewsTranslation>>({
        title: '',
        category: 'event',
        date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        type: 'article',
        excerpt: '',
        linkKey: 'more',
        image: ''
    });

    useEffect(() => {
        if (article) {
            setFormData(article);
            setPreviewUrl(article.image || null);
        } else {
            setFormData({
                title: '',
                category: 'event',
                date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
                type: 'article',
                excerpt: '',
                linkKey: 'more',
                image: ''
            });
            setPreviewUrl(null);
        }
    }, [article, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        try {
            // Create a temporary preview
            const objectUrl = URL.createObjectURL(file);
            setPreviewUrl(objectUrl);

            // Upload to Supabase (using 'news' folder convention)
            const publicUrl = await storageService.uploadFile(file, 'news');
            setFormData(prev => ({ ...prev, image: publicUrl }));
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Failed to upload image. Please try again.');
            setPreviewUrl(formData.image || null); // Revert
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
                    <h2 className="text-xl font-bold text-gray-900">
                        {article ? t('admin.news.edit_title') : t('admin.news.add_title')}
                    </h2>
                    <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Media Upload */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Cover Image
                        </label>
                        
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 transition-colors hover:border-primary/50 hover:bg-primary/5 group text-center cursor-pointer relative">
                            <input 
                                type="file" 
                                accept="image/*"
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                disabled={isUploading}
                            />
                            
                            {isUploading ? (
                                <div className="flex flex-col items-center text-primary">
                                    <Loader2 className="animate-spin mb-2" size={32} />
                                    <span className="font-medium">Uploading...</span>
                                </div>
                            ) : previewUrl ? (
                                <div className="relative inline-block w-full max-w-[200px] aspect-video rounded-lg overflow-hidden shadow-sm">
                                    <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <p className="text-white font-medium text-sm flex items-center gap-1">
                                            <Upload size={16} /> Change Image
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center text-gray-400 group-hover:text-primary transition-colors">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/10">
                                        <Upload size={24} />
                                    </div>
                                    <p className="font-medium text-gray-900">Click to upload cover image</p>
                                    <p className="text-xs mt-1">SVG, PNG, JPG or GIF (max 5MB)</p>
                                </div>
                            )}
                        </div>
                        {/* Hidden input */}
                        // Make image optional to not block saving text-only news if needed, but form usually requires visuals
                        // We'll keep it as simple hidden input management
                    </div>

                    {/* Title */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Title
                        </label>
                        <input 
                            type="text" 
                            required
                            value={formData.title}
                            onChange={e => setFormData({...formData, title: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="Article Title"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Category */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Category
                            </label>
                            <select 
                                value={formData.category}
                                onChange={e => setFormData({...formData, category: e.target.value})}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                            >
                                <option value="event">Event</option>
                                <option value="solidarity">Solidarity</option>
                                <option value="health">Health</option>
                                <option value="social_cohesion">Social Cohesion</option>
                                <option value="society">Society</option>
                            </select>
                        </div>

                         {/* Type */}
                         <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Content Type
                            </label>
                            <select 
                                value={formData.type}
                                onChange={e => setFormData({...formData, type: e.target.value})}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                            >
                                <option value="article">Article</option>
                                <option value="video">Video</option>
                                <option value="document">Document (PDF)</option>
                            </select>
                        </div>
                    </div>

                    {/* Excerpt */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Excerpt / Summary
                        </label>
                        <textarea 
                            required
                            rows={4}
                            value={formData.excerpt}
                            onChange={e => setFormData({...formData, excerpt: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                            placeholder="Brief description of the article..."
                        />
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                        <button 
                            type="button" 
                            onClick={onClose}
                            className="px-6 py-2.5 rounded-lg font-bold text-gray-500 hover:bg-gray-100 transition-colors"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            disabled={isUploading}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold shadow-lg transition-all
                                ${isUploading 
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                                    : 'bg-primary text-white hover:bg-primary-hover shadow-primary/20'
                                }
                            `}
                        >
                            <Check size={18} />
                            Save Article
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEditNewsModal;
