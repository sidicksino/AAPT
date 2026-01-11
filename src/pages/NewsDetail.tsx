import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {ArrowLeft, Calendar, Tag, FileText, Image as ImageIcon, Video, Share2} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { newsService } from '../services/newsService';
import { NewsArticle } from '../types';

const NewsDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [article, setArticle] = useState<NewsArticle | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticle = async () => {
            if (!id) return;
            setIsLoading(true);
            try {
                const fetchedArticle = await newsService.getById(parseInt(id));
                setArticle(fetchedArticle);
            } catch (err) {
                console.error('Error fetching article:', err);
                setError('Article not found');
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (error || !article) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h2>
                <button 
                    onClick={() => navigate('/news')}
                    className="flex items-center gap-2 text-primary hover:text-primary-hover font-bold"
                >
                    <ArrowLeft size={20} />
                    Back to News
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Image */}
            <div className="relative h-[400px] md:h-[500px] w-full">
                <img 
                    src={article.image || "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80"} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute top-6 left-4 md:left-8">
                    <button 
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors border border-white/20 font-medium"
                    >
                        <ArrowLeft size={18} />
                        {t('common.back', 'Back')}
                    </button>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative -mt-32 z-10">
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
                    {/* Meta Tags */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-1.5">
                            <Tag size={14} />
                            {t(`news.categories.${article.category}`)}
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-500 text-sm font-medium">
                            <Calendar size={16} />
                            {article.date}
                        </span>
                        {article.type && (
                            <span className="flex items-center gap-1.5 text-gray-500 text-sm font-medium capitalize">
                                {article.type === 'video' && <Video size={16} />}
                                {article.type === 'document' && <FileText size={16} />}
                                {article.type === 'image' && <ImageIcon size={16} />}
                                {article.type === 'article' && <FileText size={16} />}
                                {article.type}
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                        {article.title}
                    </h1>

                    {/* Content */}
                    <div className="prose prose-lg prose-green max-w-none text-gray-600 leading-relaxed">
                        {/* 
                           Since we currently only have 'excerpt', we display it as the main content.
                           If 'content' is added to the data model later, we would render that here.
                        */}
                        <p className="text-xl font-medium text-gray-800 mb-8 border-l-4 border-primary pl-4 italic">
                            {article.excerpt}
                        </p>
                        
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex items-start gap-3 mt-8">
                             <div className="bg-blue-100 p-2 rounded-full text-blue-600 mt-1">
                                <Share2 size={20} />
                             </div>
                             <div>
                                 <h3 className="font-bold text-blue-900 mb-1">Share this story</h3>
                                 <p className="text-blue-700 text-sm">Help us spread the word by sharing this article with your network.</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
