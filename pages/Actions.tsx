import React, { useState } from 'react';
import { ArrowRight, Users, GraduationCap, Heart, CheckCircle } from 'lucide-react';

const Actions: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("Tout");

  const cards = [
    { tag: "Formation", title: "Jeunesse & Centre Horizon", img: "/assets/images/facebook/formation.jpeg", desc: "Organisation de formations et d'échanges éducatifs pour la jeunesse, notamment en partenariat avec le Centre Horizon." },
    { tag: "Droits des Femmes", title: "Égalité & Non-Violence", img: "/assets/images/facebook/femme.jpeg", desc: "Promotion active de l'égalité des genres et actions concrètes pour mettre fin aux violences faites aux femmes au Tchad." },
    { tag: "Aide Sociale", title: "Soutien aux Défavorisés", img: "/assets/images/facebook/aide.jpeg", desc: "Missions humanitaires visant à améliorer le quotidien des personnes défavorisées par la solidarité et l'entraide." },
    { tag: "Santé", title: "Campagnes de Santé", img: "/assets/images/facebook/sante.jpeg", desc: "Consultations médicales et prévention des maladies dans les zones rurales isolées pour garantir la santé pour tous." },
    { tag: "Eau & Hygiène", title: "Accès à l'Eau", img: "/assets/images/facebook/eau.jpeg", desc: "Construction de puits et forages pour garantir un accès durable à l'eau potable dans les villages reculés." },
    { tag: "International", title: "Échanges Africains", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6nexX6Zzm2iY0fLJ7UADf3zBrgxCZvQSYCAvuJEieE-RUFcPTx-2yacXm6qYiaCN3-2uvYs_c6JRn8PhvstCsi0xLlgAC06qFDyhdvJjn5pXkpqgBiHJULtG0qHbC-LuFVYXeF7ObFUjY4JPjEimniU7CgjGcqg_tIQ5CfGy4FhfAbWFor1wMh9p6vtoomEeTBhPrWgXS5-F4zc-Gl36gK_J5mAsI0ZCHuHrwlCqiCERm8-BI-_rg959Pz1ZyeHQ0EX28cxl9o2Y", desc: "Publication d'actualités éducatives et programmes impliquant la jeunesse de plusieurs pays africains." }
  ];

  const filteredCards = activeFilter === "Tout" 
    ? cards 
    : cards.filter(card => {
        if (activeFilter === "Jeunesse & Formation") return card.tag === "Formation";
        return card.tag === activeFilter;
      });

  const filters = ["Tout", "Jeunesse & Formation", "Droits des Femmes", "Aide Sociale", "Santé"];

  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="w-full px-4 sm:px-10 py-6 sm:py-10 flex justify-center">
        <div className="w-full max-w-7xl">
          <div className="flex min-h-[400px] sm:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 sm:p-12 relative overflow-hidden group" 
            style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6nexX6Zzm2iY0fLJ7UADf3zBrgxCZvQSYCAvuJEieE-RUFcPTx-2yacXm6qYiaCN3-2uvYs_c6JRn8PhvstCsi0xLlgAC06qFDyhdvJjn5pXkpqgBiHJULtG0qHbC-LuFVYXeF7ObFUjY4JPjEimniU7CgjGcqg_tIQ5CfGy4FhfAbWFor1wMh9p6vtoomEeTBhPrWgXS5-F4zc-Gl36gK_J5mAsI0ZCHuHrwlCqiCERm8-BI-_rg959Pz1ZyeHQ0EX28cxl9o2Y")`
            }}
          >
            <div className="flex flex-col gap-4 text-center max-w-3xl z-10">
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                Nos Actions Humanitaires
              </h1>
              <h2 className="text-gray-200 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
                Au cœur de N'Djamena et au-delà, l'AAPT œuvre pour l'égalité, l'éducation des jeunes et l'amélioration des conditions de vie des plus démunis.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4 justify-center z-10 mt-2">
              <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary-hover text-[#0d1b12] text-base font-bold transition-transform hover:scale-105">
                <span>Soutenir nos projets</span>
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
              { icon: <Users size={24} />, val: "500+", label: "Familles Aidées", sub: "Familles Aidées" },
              { icon: <GraduationCap size={24} />, val: "Jeunesse", label: "Formations & Centre Horizon", sub: "Formations & Centre Horizon" },
              { icon: <Heart size={24} />, val: "Égalité", label: "Promotion des Droits des Femmes", sub: "Promotion des Droits des Femmes" },
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
            {filters.map(filter => (
              <button 
                key={filter} 
                onClick={() => setActiveFilter(filter)}
                className={`flex h-10 items-center justify-center gap-x-2 rounded-full px-5 transition-all ${
                  activeFilter === filter 
                    ? "bg-primary text-[#0d1b12] font-bold shadow-md" 
                    : "bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-primary/50 text-text-main dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-white/10"
                }`}
              >
                <p className="text-sm">{filter}</p>
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
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{card.tag}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="text-text-main dark:text-white text-xl font-bold leading-tight">{card.title}</h3>
                  <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed flex-1">{card.desc}</p>
                  <a href="#" className="inline-flex items-center gap-1 text-primary text-sm font-bold hover:gap-2 transition-all mt-2">
                    En savoir plus
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Actions;