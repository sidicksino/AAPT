import React, { useState } from 'react';
import { Calendar, ArrowRight, ChevronDown, Mail, FileText, Download } from 'lucide-react';

const categories = ["Tout", "Actualités", "Formations", "Événements"];

const articles = [
  {
    id: 1,
    title: "Lutte contre les violences faites aux femmes au Tchad",
    category: "ÉGALITÉ & DROITS",
    date: "08 Mars 2024",
    type: "article",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop", 
    excerpt: "L'AAPT renforce son engagement pour mettre fin aux violences basées sur le genre. Une série de conférences et d'ateliers a été organisée à N'Djamena.",
    linkText: "Lire la suite"
  },
  {
    id: 2,
    title: "Partenariat avec le \"Centre Horizon\"",
    category: "JEUNESSE & FORMATION",
    date: "25 Fév 2024",
    type: "article",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    excerpt: "Lancement de nouvelles sessions de formation et d'échanges pour la jeunesse tchadienne. Un programme ambitieux pour l'avenir professionnel.",
    linkText: "Lire la suite"
  },
  {
    id: 3,
    title: "Échanges Jeunesse Afrique : Un dialogue éducatif",
    category: "INTERNATIONAL",
    date: "15 Fév 2024",
    type: "article",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Des jeunes de plusieurs pays africains se réunissent pour partager des actualités éducatives et bâtir des ponts culturels durables.",
    linkText: "Découvrir"
  },
  {
    id: 4,
    title: "Mission Humanitaire : L'eau pour la vie",
    category: "SOLIDARITÉ",
    date: "20 Jan 2024",
    type: "article",
    image: "https://images.unsplash.com/photo-1541976844346-718b7d280358?q=80&w=1974&auto=format&fit=crop",
    excerpt: "Sous la supervision de nos équipes, de nouveaux points d'eau potable sont inaugurés pour améliorer les conditions sanitaires des villages reculés.",
    linkText: "Lire la suite"
  },
  {
    id: 5,
    title: "Visite de terrain avec Abakar Saleh Mahamat",
    category: "SUR LE TERRAIN",
    date: "10 Jan 2024",
    type: "article",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Notre leader Abakar Saleh Mahamat rencontre les bénéficiaires de nos programmes de santé pour évaluer l'impact réel de nos actions.",
    linkText: "Lire la suite"
  },
  {
    id: 6,
    title: "Rapport d'activité AAPT 2023",
    category: "RAPPORT",
    date: "05 Jan 2024",
    type: "report",
    image: null,
    excerpt: "Consultez le bilan de nos actions humanitaires, nos avancées sur l'égalité des genres et l'impact de nos programmes éducatifs durant l'année écoulée.",
    linkText: "Télécharger le PDF"
  }
];

const News: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState("Tout");

    const filteredArticles = activeCategory === "Tout" 
        ? articles 
        : articles.filter(a => {
            if (activeCategory === "Actualités") return a.category !== "RAPPORT"; // Mapping simplified for demo
            if (activeCategory === "Formations") return a.category.includes("FORMATION");
            if (activeCategory === "Événements") return a.category === "INTERNATIONAL" || a.category === "SOLIDARITÉ";
            return true;
        });

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
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Actualités & Événements</h1>
                    <p className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed max-w-2xl mx-auto">
                        Découvrez nos actions pour l'égalité, nos formations pour la jeunesse et nos initiatives solidaires au Tchad et en Afrique.
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
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                                        activeCategory === cat 
                                        ? "bg-primary text-white shadow-md transform scale-105" 
                                        : "bg-[#F3F4F6] text-gray-600 hover:bg-gray-200"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                         </div>

                         {/* Sort */}
                         <div className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer hover:text-text-main transition-colors">
                            <span className="font-medium">Trier par:</span>
                            <span className="font-bold text-text-main flex items-center gap-1">
                                Plus récent <ChevronDown size={14} />
                            </span>
                         </div>
                    </div>
                </div>
            </div>

            {/* Articles Grid */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map(article => (
                        <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100/50 hover:-translate-y-1">
                            {article.type === 'report' ? (
                                <div className="aspect-[16/10] bg-[#F3F8F5] flex items-center justify-center relative group-hover:bg-[#E6F4EA] transition-colors">
                                     <div className="absolute top-4 left-4">
                                        <span className="bg-white text-primary text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider shadow-sm border border-gray-100">
                                            {article.category}
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
                                            {article.category}
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
                
                {filteredArticles.length > 0 && (
                     <div className="mt-16 flex justify-center">
                        <button className="px-10 py-3 bg-white border border-gray-200 text-text-main font-bold rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                            Charger plus
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
                    <h2 className="text-3xl sm:text-4xl font-black text-[#0d1b12] mb-6">Restez informé de nos actions</h2>
                    <p className="text-gray-600 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                        Inscrivez-vous à notre newsletter pour recevoir les dernières nouvelles sur nos projets humanitaires et les événements à venir directement dans votre boîte mail.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="email" 
                            placeholder="Votre adresse email" 
                            className="flex-1 px-6 py-4 rounded-lg border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm text-base outline-none transition-all placeholder-gray-400"
                        />
                        <button className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 whitespace-nowrap">
                            S'inscrire
                        </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-8">
                        Nous respectons votre vie privée. Désabonnement à tout moment.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default News;