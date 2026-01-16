import React, { useState } from 'react';
import { ArrowRight, Users, GraduationCap, Heart, CheckCircle, FileText, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { useNavigate } from 'react-router-dom';

const Actions: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [activeFilter, setActiveFilter] = useState("all");

  const cards = [
    { key: "humanitarian", img: "/assets/images/facebook/3-HOME.jpeg" },
    { key: "education", img: "/assets/images/facebook/formation.jpeg" },
    { key: "health", img: "/assets/images/facebook/sante.jpeg" },
    { key: "training", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6nexX6Zzm2iY0fLJ7UADf3zBrgxCZvQSYCAvuJEieE-RUFcPTx-2yacXm6qYiaCN3-2uvYs_c6JRn8PhvstCsi0xLlgAC06qFDyhdvJjn5pXkpqgBiHJULtG0qHbC-LuFVYXeF7ObFUjY4JPjEimniU7CgjGcqg_tIQ5CfGy5FhfAbWFor1wMh9p6vtoomEeTBhPrWgXS5-F4zc-Gl36gK_J5mAsI0ZCHuHrwlCqiCERm8-BI-_rg959Pz1ZyeHQ0EX28cxl9o2Y" },
    { key: "awareness", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDw77O667VvJ3_t5r2q7o_Dk64zE4qGv-vXyLg_wXg7PzT5n9xW-hGq3vE9tK4j2B8rL1s5yN6mQ9c4z3b8v7x-9_0l6k2m5n8p4q7r3s9t2v1wX6y5z8A4b7C9d0e1f2g3h4i5j6k7l8m9n0o" },
    { key: "environment", img: "/assets/images/facebook/eau.jpeg" }
  ];

  const categories = [
    { key: "all", label: t('actions.categories.all') },
    { key: "humanitarian", label: t('actions.categories.humanitarian') },
    { key: "education", label: t('actions.categories.education') },
    { key: "health", label: t('actions.categories.health') },
    { key: "training", label: t('actions.categories.training') },
    { key: "awareness", label: t('actions.categories.awareness') },
    { key: "environment", label: t('actions.categories.environment') }
  ];

  const filteredCards = activeFilter === "all" 
    ? cards 
    : cards.filter(card => card.key === activeFilter);

  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="w-full px-4 sm:px-10 py-6 sm:py-10 flex justify-center">
        <div className="w-full max-w-7xl">
          <div className="flex min-h-[400px] sm:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 sm:p-12 relative overflow-hidden group" 
            style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("/assets/images/facebook/action.jpeg")`
            }}
          >
            <div className="flex flex-col gap-4 text-center max-w-3xl z-10">
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                {t('actions.hero.title')}
              </h1>
              <h2 className="text-gray-200 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
                {t('actions.hero.desc')}
              </h2>
            </div>
            <div className="flex flex-wrap gap-4 justify-center z-10 mt-2">
              <button onClick={() => navigate('/donate')} className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary-hover text-[#0d1b12] text-base font-bold transition-transform hover:scale-105">
                <span>{t('actions.hero.cta')}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full px-4 sm:px-10 py-5 flex justify-center">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: <Users size={24} />, val: t('actions.stats.families.val'), label: t('actions.stats.families.label'), sub: t('actions.stats.families.sub') },
              { icon: <GraduationCap size={24} />, val: t('actions.stats.youth.val'), label: t('actions.stats.youth.label'), sub: t('actions.stats.youth.sub') },
              { icon: <Heart size={24} />, val: t('actions.stats.equality.val'), label: t('actions.stats.equality.label'), sub: t('actions.stats.equality.sub') },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center sm:items-start gap-3 rounded-xl p-6 bg-white shadow-sm border border-gray-100 dark:bg-[#0d1b12] dark:border-white/10">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-1">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-3xl font-bold leading-tight text-text-main dark:text-white">{stat.val}</p>
                  <p className="text-text-muted dark:text-gray-400 font-medium">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="w-full px-4 sm:px-10 py-10 flex justify-center flex-col items-center gap-8">
        <div className="w-full max-w-7xl flex flex-col gap-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 pb-2 border-b border-gray-100 dark:border-white/10">
            {categories.map(cat => (
              <button 
                key={cat.key} 
                onClick={() => setActiveFilter(cat.key)}
                className={`flex h-10 items-center justify-center gap-x-2 rounded-full px-5 transition-all ${
                  activeFilter === cat.key 
                    ? "bg-primary text-[#0d1b12] font-bold shadow-md" 
                    : "bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-primary/50 text-text-main dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-white/10"
                }`}
              >
                <p className="text-sm">{cat.label}</p>
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCards.map((card, idx) => (
              <article key={idx} className="flex flex-col gap-0 rounded-xl overflow-hidden bg-white dark:bg-[#0d1b12] shadow-sm hover:shadow-md transition-shadow group border border-gray-100 dark:border-white/10">
                <div className="w-full aspect-video bg-gray-200 dark:bg-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url("${card.img}")` }}></div>
                  <div className="absolute top-3 left-3 bg-white/90 dark:bg-[#0d1b12]/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{t(`actions.categories.${card.key}`)}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="text-text-main dark:text-white text-xl font-bold leading-tight">{t(`actions.cards.${card.key}.title`)}</h3>
                  <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed flex-1">{t(`actions.cards.${card.key}.desc`)}</p>
                  <a href="#" className="inline-flex items-center gap-1 text-primary text-sm font-bold hover:gap-2 transition-all mt-2">
                    {t('actions.card_cta')}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="w-full px-4 sm:px-10 py-16 flex justify-center bg-white dark:bg-[#0d1b12]">
        <div className="w-full max-w-5xl flex flex-col items-center">
            <div className="text-center mb-10">
                <span className="font-bold text-primary tracking-wider uppercase text-sm">{t('actions.reports.title')}</span>
                <p className="text-gray-500 mt-2 max-w-xl text-center">{t('actions.reports.desc')}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {[
                    { key: 1, file: "/assets/pdf/Rapport de AAPT-1.pdf" },
                    { key: 0, file: "/assets/pdf/RA (1).pdf" }
                ].map((item, idx) => {
                    const reports = t('actions.reports.items', { returnObjects: true }) as any[];
                    const report = reports[item.key];
                    return (
                        <a 
                            key={idx}
                            href={item.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-xl border border-gray-100 hover:border-primary/20 bg-gray-50 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md group"
                        >
                            <div className="size-12 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <FileText size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-[#0d1b12] text-lg group-hover:text-primary transition-colors">{report.title}</h3>
                                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{report.desc}</p>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold text-primary bg-primary/5 px-4 py-2 rounded-lg group-hover:bg-primary group-hover:text-[#0d1b12] transition-colors mt-4 sm:mt-0">
                                <span>{report.link}</span>
                                <Download size={16} />
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
      </section>
      {/* Realized Activities List */}
      <section className="relative w-full px-4 sm:px-10 py-24 bg-gray-50 dark:bg-[#050a07] flex justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="relative w-full max-w-5xl">
            <div className="text-center mb-16">
                <span className="font-bold text-primary tracking-wider uppercase text-sm">{t('actions.activities.label')}</span>
                <h2 className="text-4xl font-black mt-2 text-[#0d1b12] dark:text-white">{t('actions.activities.title')}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(t('actions.activities.items', { returnObjects: true }) as string[]).map((activity, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-6 bg-white dark:bg-[#0d1b12] rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#0d1b12] transition-colors shrink-0">
                            <CheckCircle size={22} strokeWidth={2.5} />
                        </div>
                        <span className="text-lg font-bold text-[#0d1b12] dark:text-gray-200 group-hover:text-primary transition-colors">{activity}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Actions;