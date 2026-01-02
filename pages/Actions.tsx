import React from 'react';
import { ArrowRight, Users, GraduationCap, Heart, CheckCircle } from 'lucide-react';

const Actions: React.FC = () => {
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
              <div key={idx} className="flex flex-col items-center sm:items-start gap-3 rounded-xl p-6 bg-white shadow-sm border border-gray-100">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-1">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-3xl font-bold leading-tight text-text-main">{stat.val}</p>
                  <p className="text-text-muted font-medium">{stat.sub}</p>
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
          <div className="flex flex-wrap gap-3 pb-2 border-b border-gray-100">
            <button className="flex h-10 items-center justify-center gap-x-2 rounded-full bg-primary px-5 transition-colors">
              <p className="text-[#0d1b12] text-sm font-bold">Tout</p>
            </button>
            {["Jeunesse & Formation", "Droits des Femmes", "Aide Sociale", "Santé"].map(filter => (
              <button key={filter} className="flex h-10 items-center justify-center gap-x-2 rounded-full bg-white border border-gray-200 hover:border-primary/50 hover:bg-gray-50 px-5 transition-all">
                <p className="text-text-main text-sm font-medium">{filter}</p>
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { tag: "Formation", title: "Jeunesse & Centre Horizon", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIlnOdsnnUh10Pw9qNeyQW-tS7mFDemY2ws8evWDHkhgHFSBC__7HwFBwvjTMZhddyc7xP286L0tp4Rx26-aFkCpSaXZQuOEu1W1bfMiAO6ehQaIqlzV_WCW5GVR9dMKJBrILqAqe5-tuU8h7rKe2OiOhcsrfEcfFuNpQ-guc9DEdEp_Q_C0MY_dy2bmeqgKp10wZKh8H6h9jNYQrtQlnjBIJh0_YgJq4BimK-Xap-NrT7ze2DOE8lWhmerMiHvDpouMrisICBIRc", desc: "Organisation de formations et d'échanges éducatifs pour la jeunesse, notamment en partenariat avec le Centre Horizon." },
              { tag: "Droits des Femmes", title: "Égalité & Non-Violence", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtDIwSOyOHBvdqylxGsOWh4zGG7DbsdmYbDpII2MLa3imyqsFAiG3a8aFxdPD3qHhdJJyf6GvHS8Q4NlJxrxYW_-5NPylBkDuo_2gMYhmICONojSbgGDfcg7rsRCuZl62Yh52Y17aL-WXoq1rcOfOHfRuUEcFLX1zpP7mXwT1-3Qh_hV1PlbGP0l06jK3CuZwy-HLeQr8fCEGjqcwt-Qr3VV_EUYaE6xrF0X5S3tTfZq9JisDP6ZAtjeHogKzGEJGNZpErrKrXofo", desc: "Promotion active de l'égalité des genres et actions concrètes pour mettre fin aux violences faites aux femmes au Tchad." },
              { tag: "Aide Sociale", title: "Soutien aux Défavorisés", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVrN3BB0mH3_gmfG8a0WU6ghf0oD7gKpwtA5ZdGqGMNB3OLLf47KBeRHXLUlMXzH5dVJ8VBBHgVAkNhSJN5d5i8ANMVyee9B2Ww_M2vLKTIFP4_ea9P_2l3hLchsJ6ii5IXwjSmfc0uAsguy9gSzU_kOLUM50EatEW2fXSyLtVCXYG59SGBREc0LRQV00piH_mNpta-N7cI8N_hOf_GuSAZVQzh7ILwCDiY__H8r05HYNNssdQ5R7tG6_13IqbVugw5dCIrg-wDjU", desc: "Missions humanitaires visant à améliorer le quotidien des personnes défavorisées par la solidarité et l'entraide." },
              { tag: "Santé", title: "Campagnes de Santé", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDew5rOUHBhgf0MeR2W9TUArv02-NuJB1_i7G7OuxvJbi3rbBIKgzJXTMUIAJm6rFrBFKJ7WdNcQoB8hSwT9JMFhPA8ZBOmfuNmUDxrZKXw7avBsD7ptImRQl8yl-V4K5XJRgmAeFcTDtgo8VSht5VMDTOex1Y65ruJS2CrjrK2FyGeR2KRwYlWIGUaTYExDyxcoYBKH4MpbEcW_gtrqlEp1xJSTWDMPTUCrf_eQ5jshZIjP4klj0_wu-24HE4z4Lqfu4O9NXvhTh0", desc: "Consultations médicales et prévention des maladies dans les zones rurales isolées pour garantir la santé pour tous." },
              { tag: "Eau & Hygiène", title: "Accès à l'Eau", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyBKrQfWJNzrPeuVkRg6J1F_qacoXKsoFOoldUfWoJNLMS-UoTXUzYNdCDxe-ysVmskZW45_ynOprX7bOm_A7qVcc2e3Nne5qMPqsMmwSwH6ONS6Ce9LQdlor8aj7vcOPmfwYQTd4bfZ4j9h59t6XlFq5n_ddHHO_X-MToIIMpsaFz2WapJbCnYOBtd2bwhlVKIWmVawCvALQyd1V5uXyj2NxafU4bYe37PlccLbmgNGlvyS8aASiwnouUba_BMh_xsVRNYb_V0TI", desc: "Construction de puits et forages pour garantir un accès durable à l'eau potable dans les villages reculés." },
              { tag: "International", title: "Échanges Africains", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6nexX6Zzm2iY0fLJ7UADf3zBrgxCZvQSYCAvuJEieE-RUFcPTx-2yacXm6qYiaCN3-2uvYs_c6JRn8PhvstCsi0xLlgAC06qFDyhdvJjn5pXkpqgBiHJULtG0qHbC-LuFVYXeF7ObFUjY4JPjEimniU7CgjGcqg_tIQ5CfGy4FhfAbWFor1wMh9p6vtoomEeTBhPrWgXS5-F4zc-Gl36gK_J5mAsI0ZCHuHrwlCqiCERm8-BI-_rg959Pz1ZyeHQ0EX28cxl9o2Y", desc: "Publication d'actualités éducatives et programmes impliquant la jeunesse de plusieurs pays africains." }
            ].map((card, idx) => (
              <article key={idx} className="flex flex-col gap-0 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow group border border-gray-100">
                <div className="w-full aspect-video bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url("${card.img}")` }}></div>
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{card.tag}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="text-text-main text-xl font-bold leading-tight">{card.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed flex-1">{card.desc}</p>
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