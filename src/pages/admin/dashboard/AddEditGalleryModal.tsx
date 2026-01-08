import React, { useState, useEffect } from 'react';
import { X, Upload, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GalleryItem } from '../../../services/galleryService';

interface AddEditGalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    item?: GalleryItem | null;
    onSave: (item: Partial<GalleryItem>) => void;
}

const AddEditGalleryModal: React.FC<AddEditGalleryModalProps> = ({ isOpen, onClose, item, onSave }) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<Partial<GalleryItem>>({
        title: '',
        location: '',
        category: 'field',
        type: 'image',
        src: ''
    });

    useEffect(() => {
        if (item) {
            setFormData(item);
        } else {
            setFormData({
                title: '',
                location: '',
                category: 'field',
                type: 'image',
                src: ''
            });
        }
    }, [item, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
                    <h2 className="text-xl font-bold text-gray-900">
                        {item ? 'Edit Gallery Item' : 'Add Gallery Item'}
                    </h2>
                    <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Title
                        </label>
                        <input 
                            type="text" 
                            required
                            value={formData.title || ''}
                            onChange={e => setFormData({...formData, title: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="Image Title"
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
                                <option value="field">Field</option>
                                <option value="education">Education</option>
                                <option value="health">Health</option>
                                <option value="events">Events</option>
                                <option value="all">All</option>
                            </select>
                        </div>

                         {/* Type */}
                         <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Media Type
                            </label>
                            <select 
                                value={formData.type}
                                onChange={e => setFormData({...formData, type: e.target.value as 'image' | 'video'})}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                            >
                                <option value="image">Image</option>
                                <option value="video">Video</option>
                            </select>
                        </div>
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Location
                        </label>
                        <input 
                            type="text" 
                            value={formData.location || ''}
                            onChange={e => setFormData({...formData, location: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="e.g. N'Djamena, Chad"
                        />
                    </div>
                    
                    {/* Media URL */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Media URL (Image or Video Thumbnail)
                        </label>
                        <input 
                            type="text" 
                            required
                            value={formData.src || ''}
                            onChange={e => setFormData({...formData, src: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="https://example.com/image.jpg"
                        />
                         <p className="text-xs text-gray-500 mt-1">Provide a direct link.</p>
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
                            className="flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all"
                        >
                            <Check size={18} />
                            Save Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEditGalleryModal;
