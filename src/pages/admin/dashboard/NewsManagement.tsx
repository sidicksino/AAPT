import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Search, Edit2, Trash2, FileText, Image as ImageIcon, Video, RefreshCw } from 'lucide-react';
import { NewsTranslation, NewsArticle } from '../../../types';
import AddEditNewsModal from './AddEditNewsModal.tsx';
import { newsService } from '../../../services/newsService';

const NewsManagement: React.FC = () => {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingArticle, setEditingArticle] = useState<NewsTranslation | null>(null);
    const [articles, setArticles] = useState<NewsArticle[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchArticles = async () => {
        setIsLoading(true);
        try {
            const data = await newsService.getAll();
            setArticles(data);
            setError(null);
        } catch (err) {
            console.error('Error fetching articles:', err);
            setError('Failed to load articles from Supabase');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    const filteredArticles = articles.filter(article => 
        (article.title?.toLowerCase() || '').includes(searchTerm.toLowerCase()) || 
        (article.category?.toLowerCase() || '').includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (id: number) => {
        if(confirm(t('admin.news.delete_confirm'))) {
            console.log(`Attempting to delete article with ID: ${id} (type: ${typeof id})`);
            try {
                await newsService.delete(id);
                 // small delay to ensure propagation
                await new Promise(resolve => setTimeout(resolve, 500));
                await fetchArticles(); // Refresh list
            } catch (err: any) {
                console.error('Error deleting article:', err);
                alert(`Failed to delete article: ${err.message || 'Unknown error'}`);
            }
        }
    };

    const handleEdit = (article: any) => {
        setEditingArticle(article);
        setIsModalOpen(true);
    };

    const handleCreate = () => {
        setEditingArticle(null);
        setIsModalOpen(true);
    };

    const handleSave = async (article: Partial<NewsTranslation>) => {
        try {
            if (editingArticle) {
                await newsService.update(editingArticle.id, article as NewsArticle);
            } else {
                await newsService.create(article as NewsArticle);
            }
            setIsModalOpen(false);
            fetchArticles();
        } catch (err) {
            console.error('Error saving article:', err);
            alert('Failed to save article');
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{t('admin.nav.news')}</h1>
                    <p className="text-gray-500 mt-1">{t('admin.news.subtitle', 'Manage your articles and publications')}</p>
                </div>
                <button 
                    onClick={handleCreate}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg hover:bg-primary-hover transition-colors font-medium"
                >
                    <Plus size={20} />
                    <span>{t('admin.news.add_title')}</span>
                </button>
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center justify-between">
                    <span>{error}</span>
                    <button onClick={fetchArticles} className="flex items-center gap-1 text-sm font-bold underline">
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
                        placeholder="Search articles..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                </div>
            </div>

            {/* Articles List */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                {isLoading ? (
                    <div className="p-12 text-center text-gray-500 flex flex-col items-center">
                        <RefreshCw className="animate-spin mb-2" size={24} />
                        Loading articles...
                    </div>
                ) : (
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Article</th>
                                <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Type</th>
                                <th className="py-4 px-6 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredArticles.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="py-8 text-center text-gray-400">
                                        No articles found. Create one to get started!
                                    </td>
                                </tr>
                            ) : filteredArticles.map((article) => (
                                <tr key={article.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                                                {article.image ? (
                                                    <img src={article.image} alt="" className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                        <FileText size={20} />
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 line-clamp-1">{article.title}</h3>
                                                <p className="text-xs text-gray-500 line-clamp-1">{article.excerpt}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 capitalize">
                                            {t(`news.categories.${article.category}`)}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-sm text-gray-600">
                                        {article.date}
                                    </td>
                                    <td className="py-4 px-6">
                                         <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 capitalize">
                                            {article.type === 'video' && <Video size={14} />}
                                            {article.type === 'image' && <ImageIcon size={14} />}
                                            {article.type === 'article' && <FileText size={14} />}
                                            {article.type || 'Article'}
                                         </div>
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button 
                                                type="button"
                                                onClick={() => handleEdit(article)}
                                                className="p-2 text-gray-500 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                                                title="Edit"
                                            >
                                                <Edit2 size={16} />
                                            </button>
                                            <button 
                                                type="button"
                                                onClick={() => handleDelete(article.id)}
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
                {/* Pagination placeholder */}
                <div className="p-4 border-t border-gray-100 text-center text-xs text-gray-400">
                    Showing {filteredArticles.length} articles
                </div>
            </div>

            <AddEditNewsModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                article={editingArticle}
                onSave={handleSave}
            />
        </div>
    );
};

export default NewsManagement;
