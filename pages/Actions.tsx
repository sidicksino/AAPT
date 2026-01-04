import React, { useState } from 'react';
import { ArrowRight, Users, GraduationCap, Heart, CheckCircle } from 'lucide-react';

const Actions: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("Tout");

  const cards = [
    { tag: "Aide Humanitaire", title: "Aide humanitaire et sociale", img: "/assets/images/facebook/aide.jpeg", desc: "Distribution de kits alimentaires, vêtements, produits d’hygiène, soutien matériel aux familles et individus vulnérables." },
    { tag: "Éducation", title: "Éducation et appui à la jeunesse", img: "/assets/images/facebook/formation.jpeg", desc: "Distribution de fournitures scolaires, sensibilisation dans les écoles, accompagnement d’enfants vulnérables à l’éducation." },
    { tag: "Santé", title: "Santé et nutrition", img: "/assets/images/facebook/sante.jpeg", desc: "Campagnes de sensibilisation, soutien aux hôpitaux, nutrition infantile, hygiène communautaire." },
    { tag: "Formation", title: "Formation", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6nexX6Zzm2iY0fLJ7UADf3zBrgxCZvQSYCAvuJEieE-RUFcPTx-2yacXm6qYiaCN3-2uvYs_c6JRn8PhvstCsi0xLlgAC06qFDyhdvJjn5pXkpqgBiHJULtG0qHbC-LuFVYXeF7ObFUjY4JPjEimniU7CgjGcqg_tIQ5CfGy4FhfAbWFor1wMh9p6vtoomEeTBhPrWgXS5-F4zc-Gl36gK_J5mAsI0ZCHuHrwlCqiCERm8-BI-_rg959Pz1ZyeHQ0EX28cxl9o2Y", desc: "Ateliers de renforcement de capacités pour jeunes, femmes et communautés locales." },
    { tag: "Sensibilisation", title: "Sensibilisation et mobilisation", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDw77O667VvJ3_t5r2q7o_Dk64zE4qGv-vXyLg_wXg7PzT5n9xW-hGq3vE9tK4j2B8rL1s5yN6mQ9c4z3b8v7x-9_0l6k2m5n8p4q7r3s9t2v1wX6y5z8A4b7C9d0e1f2g3h4i5j6k7l8m9n0o", desc: "Organisation de conférences, débats, journées d’engagement communautaire." },
    { tag: "Environnement", title: "Environnement et dév. communautaire", img: "/assets/images/facebook/eau.jpeg", desc: "Reboisement, assainissement, actions de salubrité et de préservation de l’environnement." }
  ];

  const filteredCards = activeFilter === "Tout" 
    ? cards 
    : cards.filter(card => card.tag === activeFilter);

  const filters = ["Tout", "Aide Humanitaire", "Éducation", "Santé", "Formation", "Sensibilisation", "Environnement"];

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
                Nos Domaines d'Intervention
              </h1>
              <h2 className="text-gray-200 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
                Au cœur de N'Djamena et au-delà, l'AAPT œuvre pour Paix, Solidarité, Développement et l'amélioration des conditions de vie des plus démunis.
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

      {/* Realized Activities List */}
      <section className="w-full px-4 sm:px-10 py-12 bg-gray-50 dark:bg-white/5 flex justify-center">
        <div className="w-full max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#0d1b12] dark:text-white">Activités Réalisées</h2>
            <div className="bg-white dark:bg-[#0d1b12] rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-white/10">
                <ul className="space-y-4">
                    {[
                        "Dons de kits alimentaires à des familles et femmes concasseuses",
                        "Visites dans des orphelinats avec distribution de kits alimentaires, vestimentaires et de jeux",
                        "Appui aux hôpitaux : couches, savons, produits pour nouveau-nés",
                        "Distribution de kits scolaires aux élèves du primaire et secondaire",
                        "Reboisement et actions de salubrité dans des espaces publics",
                        "Assistance aux personnes sinistrées par les inondations"
                    ].map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                            <span className="text-lg text-text-main dark:text-gray-300">{activity}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Actions;