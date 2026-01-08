import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Search, Edit2, Trash2, Image as ImageIcon, Video, RefreshCw, ZoomIn, PlayCircle } from 'lucide-react';
import { galleryService, GalleryItem } from '../../../services/galleryService';
import AddEditGalleryModal from './AddEditGalleryModal.tsx';

const GalleryManagement: React.FC = () => {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
    const [items, setItems] = useState<GalleryItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchItems = async () => {
        setIsLoading(true);
        try {
            const data = await galleryService.getAll();
            setItems(data);
            setError(null);
        } catch (err) {
            console.error('Error fetching gallery items:', err);
            setError('Failed to load gallery items from Supabase');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const filteredItems = items.filter(item => 
        (item.title?.toLowerCase() || '').includes(searchTerm.toLowerCase()) || 
        (item.category?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (item.location?.toLowerCase() || '').includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (id: number) => {
        if(confirm(t('admin.gallery.delete_confirm'))) {
            console.log(`Attempting to delete gallery item with ID: ${id} (type: ${typeof id})`);
            try {
                await galleryService.delete(id);
                // small delay to ensure propagation
                await new Promise(resolve => setTimeout(resolve, 500));
                await fetchItems(); // Refresh list
            } catch (err: any) {
                console.error('Error deleting gallery item:', err);
                alert(`Failed to delete item: ${err.message || 'Unknown error'}`);
            }
        }
    };

    const handleEdit = (item: GalleryItem) => {
        setEditingItem(item);
        setIsModalOpen(true);
    };

    const handleCreate = () => {
        setEditingItem(null);
        setIsModalOpen(true);
    };

    const handleSave = async (item: Partial<GalleryItem>) => {
        try {
            // Ensure type matches the expected union
            const itemToSave = {
                ...item,
                type: item.type as "image" | "video" // definitive cast
            };

            if (editingItem) {
                await galleryService.update(editingItem.id, itemToSave);
            } else {
                await galleryService.create(itemToSave as Omit<GalleryItem, 'id' | 'created_at'>);
            }
            setIsModalOpen(false);
            fetchItems();
        } catch (err) {
            console.error('Error saving gallery item:', err);
            alert('Failed to save gallery item');
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{t('admin.nav.gallery')}</h1>
                    <p className="text-gray-500 mt-1">{t('admin.gallery.subtitle', 'Manage your photo and video gallery')}</p>
                </div>
                <button 
                    onClick={handleCreate}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg hover:bg-primary-hover transition-colors font-medium"
                >
                    <Plus size={20} />
                    <span>{t('admin.gallery.add_title')}</span>
                </button>
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center justify-between">
                    <span>{error}</span>
                    <button onClick={fetchItems} className="flex items-center gap-1 text-sm font-bold underline">
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
                        placeholder="Search gallery items..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                </div>
            </div>

            {/* Gallery Grid/List */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                {isLoading ? (
                    <div className="p-12 text-center text-gray-500 flex flex-col items-center">
                        <RefreshCw className="animate-spin mb-2" size={24} />
                        Loading gallery...
                    </div>
                ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {filteredItems.length === 0 ? (
                        <div className="col-span-full py-12 text-center text-gray-400">
                             No items found. Add one to get started!
                        </div>
                    ) : filteredItems.map((item) => (
                        <div key={item.id} className="relative group bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all">
                             <div className="aspect-video relative overflow-hidden bg-gray-200">
                                {item.type === 'video' ? (
                                    <div className="w-full h-full flex items-center justify-center relative">
                                        <img src={item.src} alt={item.title || ''} className="w-full h-full object-cover opacity-80" />
                                        <PlayCircle size={48} className="text-white absolute z-10 opacity-80" />
                                    </div>
                                ) : (
                                    <img src={item.src} alt={item.title || ''} className="w-full h-full object-cover" />
                                )}
                                <div className="absolute top-2 left-2">
                                     <span className="bg-white/90 backdrop-blur text-gray-800 text-xs font-bold px-2 py-1 rounded shadow-sm capitalize border border-gray-100">
                                        {t(`gallery.filters.${item.category}`)}
                                     </span>
                                </div>
                             </div>
                             
                             <div className="p-4">
                                <h3 className="font-bold text-gray-900 line-clamp-1 mb-1">{item.title}</h3>
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                                        {item.location}
                                    </div>
                                    <span className="capitalize bg-gray-200 px-1.5 py-0.5 rounded text-[10px] text-gray-600 font-medium">
                                        {item.type}
                                    </span>
                                </div>
                             </div>

                             {/* Actions Overlay */}
                             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[1px]">
                                <button 
                                    type="button"
                                    onClick={() => handleEdit(item)}
                                    className="p-3 bg-white text-gray-700 hover:text-primary rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                                    title="Edit"
                                >
                                    <Edit2 size={20} />
                                </button>
                                <button 
                                    type="button"
                                    onClick={() => handleDelete(item.id)}
                                    className="p-3 bg-white text-gray-700 hover:text-red-500 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75"
                                    title="Delete"
                                >
                                    <Trash2 size={20} />
                                </button>
                             </div>
                        </div>
                    ))}
                </div>
                )}
                 <div className="p-4 border-t border-gray-100 text-center text-xs text-gray-400">
                    Showing {filteredItems.length} items
                </div>
            </div>

            <AddEditGalleryModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                item={editingItem}
                onSave={handleSave}
            />
        </div>
    );
};

export default GalleryManagement;
