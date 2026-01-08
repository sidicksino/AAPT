import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Mail, FileText, Download } from 'lucide-react';

import { NewsArticle, newsService } from '../services/newsService';

const News: React.FC = () => {
    const { t } = useTranslation();
    const [articles, setArticles] = useState<NewsArticle[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeCategoryKey, setActiveCategory] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const categories = [
        { key: "all", label: t('news.categories.all') },
        { key: "social_cohesion", label: t('news.categories.social_cohesion') },
        { key: "health", label: t('news.categories.health') },
        { key: "society", label: t('news.categories.society') },
        { key: "solidarity", label: t('news.categories.solidarity') },
        { key: "event", label: t('news.categories.event') }
    ];

    useEffect(() => {
        const loadArticles = async () => {
            setIsLoading(true);
            try {
                const data = await newsService.getAll();
                // Map DB fields to UI expected fields if necessary, 
                // but NewsArticle should match fairly well.
                // We might need to handle 'linkText' which was computed from translation.
                const enrichedData = data.map(item => ({
                    ...item,
                    linkText: t(`news.links.${item.linkKey || 'more'}`)
                }));
                setArticles(enrichedData);
            } catch (error) {
                console.error("Failed to load news", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadArticles();
    }, [t]);

    const filteredArticles = activeCategoryKey === "all" 
        ? articles 
        : articles.filter(a => a.category === activeCategoryKey);

    const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
    const paginatedArticles = filteredArticles.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const articlesSectionRef = React.useRef<HTMLDivElement>(null);

    // Scroll to top of articles when page changes
    React.useEffect(() => {
        if (currentPage > 1) {
             articlesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentPage]);

    return (
        <div className="flex-grow bg-[#F8F9FA]">
             {/* Hero Section */}
            <section className="relative h-[400px] sm:h-[450px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* Using an illustration style image to match the 'faces' vibe from request */}
                    <img 
                        src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop" 
                        alt="Background" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0d1b12]/70"></div>
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">{t('news.hero.title')}</h1>
                    <p className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed max-w-2xl mx-auto">
                        {t('news.hero.desc')}
                    </p>
                </div>
            </section>
            
            {/* Filter Bar */}
            <div className="bg-white border-b border-gray-100 sticky top-20 z-30 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                         {/* Categories */}
                         <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
                            {categories.map(cat => (
                                <button 
                                    key={cat.key}
                                    onClick={() => setActiveCategory(cat.key)}
                                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                                        activeCategoryKey === cat.key 
                                        ? "bg-primary text-white shadow-md transform scale-105" 
                                        : "bg-[#F3F4F6] text-gray-600 hover:bg-gray-200"
                                    }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                         </div>

                         {/* Sort */}
                         <div className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer hover:text-text-main transition-colors">
                            <span className="font-medium">{t('news.filter.sort_by')}</span>
                            <span className="font-bold text-text-main flex items-center gap-1">
                                {t('news.filter.newest')} <ChevronDown size={14} />
                            </span>
                         </div>
                    </div>
                </div>
            </div>

            {/* Articles Grid */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paginatedArticles.map(article => (
                        <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100/50 hover:-translate-y-1">
                            {article.type === 'document' ? ( // Changed 'report' to 'document' based on data
                                <div className="aspect-[16/10] bg-[#F3F8F5] flex items-center justify-center relative group-hover:bg-[#E6F4EA] transition-colors">
                                     <div className="absolute top-4 left-4">
                                        <span className="bg-white text-primary text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider shadow-sm border border-gray-100">
                                            {t(`news.categories.${article.category}`)}
                                        </span>
                                    </div>
                                    <FileText size={64} className="text-primary opacity-50 group-hover:scale-110 transition-transform duration-300" />
                                </div>
                            ) : (
                                <div className="aspect-[16/10] relative overflow-hidden bg-gray-200">
                                    <img 
                                        src={article.image!} 
                                        alt={article.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white text-primary text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider shadow-sm">
                                            {t(`news.categories.${article.category}`)}
                                        </span>
                                    </div>
                                </div>
                            )}
                            
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-3">
                                    <Calendar size={14} className="text-primary/70" />
                                    <span>{article.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-text-main mb-3 leading-tight group-hover:text-primary transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                    {article.excerpt}
                                </p>
                                <div className="mt-auto pt-4 border-t border-gray-50">
                                    <button className="flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all">
                                        {article.linkText}
                                        {article.linkText.includes('PDF') ? <Download size={16} /> : <ArrowRight size={16} />}
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                
                {filteredArticles.length > itemsPerPage && (
                     <div className="mt-16 flex justify-center items-center gap-4">
                        <button 
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="p-3 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-[#0d1b12]"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div className="flex items-center gap-2">
                            {Array.from({ length: totalPages }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-10 h-10 rounded-full font-bold flex items-center justify-center transition-all ${
                                        currentPage === i + 1
                                            ? "bg-[#4ADE80] text-white shadow-md scale-110" 
                                            : "text-gray-500 hover:bg-gray-100 hover:text-[#0d1b12]"
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>

                        <button 
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="p-3 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-[#0d1b12]"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                )}
            </section>

             {/* Newsletter Section */}
             <section className="bg-[#E6F4EA] py-24 px-4 relative overflow-hidden">
                {/* Decorative background elements if needed */}
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm text-primary animate-bounce-subtle">
                        <Mail size={32} />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#0d1b12] mb-6">{t('news.newsletter.title')}</h2>
                    <p className="text-gray-600 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                        {t('news.newsletter.desc')}
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="email" 
                            placeholder={t('news.newsletter.placeholder')} 
                            className="flex-1 px-6 py-4 rounded-lg border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm text-base outline-none transition-all placeholder-gray-400"
                        />
                        <button className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 whitespace-nowrap">
                            {t('news.newsletter.subscribe')}
                        </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-8">
                        {t('news.newsletter.privacy')}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default News;