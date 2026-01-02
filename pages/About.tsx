import React from 'react';
import { Target, Scale, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="flex justify-center py-5 px-4 sm:px-10 lg:px-40">
        <div className="w-full max-w-[1200px]">
          <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center relative overflow-hidden" 
            style={{
              backgroundImage: `linear-gradient(rgba(13, 27, 18, 0.6) 0%, rgba(13, 27, 18, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCUq0WyUgRnVzYEdFF6cBDh3R-3KQP4_dQoJPTTph0RcU7_0j9X-m7Ewu54z8_19LN9ddE2qRRQGxbgncUu3jz2HWDFshGr4DslTvY14SUgaotY4fQiPYm1eIyCXn1d2i8qtqtLguOvMipbN5SM91-ibGSCb-MsfSY6ivCDDg8IxV2TYley2FijxVeaJrLv1ObdBM4Y0J-e65zR0OY4TldNUSG2sCihodSVHcUkrFDzNRWG5shXuPCx7wk1qAW0FtbPMJg_8foHzlk")`
            }}
          >
            <div className="flex flex-col gap-4 max-w-[800px] z-10">
              <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Agir pour un avenir meilleur au Tchad
              </h1>
              <h2 className="text-gray-200 text-base font-normal leading-relaxed sm:text-lg">
                Association Actions Pour Tous — Améliorer les conditions de vie des couches défavorisées à travers la solidarité et l'action humanitaire.
              </h2>
            </div>
            <div className="flex gap-4 z-10 pt-4">
              <button className="flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-[#0d1b12] transition hover:scale-105">
                Rejoindre notre cause
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="flex justify-center py-12 px-4 sm:px-10 lg:px-40 bg-white">
        <div className="w-full max-w-[960px]">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4 text-center items-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                Nos Fondations
              </div>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl max-w-[720px]">
                Nos Piliers d'Action
              </h2>
              <p className="text-text-muted text-base max-w-[720px]">
                L'AAPT s'engage quotidiennement à travers des actions concrètes pour soutenir les populations et bâtir une société plus juste.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-5 rounded-xl border border-[#cfe7d7] bg-background-light p-8 flex-col shadow-sm transition hover:shadow-md">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  <Heart size={32} />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold leading-tight">Notre Mission</h3>
                  <p className="text-text-muted leading-relaxed">
                    Nous œuvrons pour améliorer la vie des défavorisés grâce à la solidarité et à des actions humanitaires directes. Notre priorité est de répondre aux besoins essentiels des populations vulnérables.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 rounded-xl border border-[#cfe7d7] bg-background-light p-8 flex-col shadow-sm transition hover:shadow-md">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  <Scale size={32} />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold leading-tight">Notre Vision</h3>
                  <p className="text-text-muted leading-relaxed">
                    Un Tchad solidaire où l'égalité est reine et la violence bannie. Nous visons une société sans violence, particulièrement à l'égard des femmes, et ouverte sur la jeunesse africaine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fields of Action */}
      <section className="flex justify-center py-16 px-4 sm:px-10 lg:px-40">
        <div className="w-full max-w-[960px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-xl transform -rotate-2"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcJbvtAI1jYG9JGt_Y8jm4MOp5-ufQSFjX1KtuK6ZHN778j1LglUf01qYbaFTP69SnWNL44T_UzDy62dQfcsO9W7tCYJI1ywo-VjjxbTDkbe4AIfpEPQQ7tbS06bHwILw957ieKGYlRbVZra1h3hFRSivEiNQ6nu9t7iz_1yzP1uDBnt4WDLN8ksXRR599qVcPtxdjQzUlChWkqAhwFWe9rn9AD3HTgiCKLyKM9U8mkgQbmH8STkezMZtcTm0sRZDvh0mKkf7G5N0" 
                alt="AAPT Team"
                className="relative rounded-xl shadow-lg w-full h-auto object-cover aspect-[4/3] border-4 border-white"
              />
            </div>
            <div className="order-1 md:order-2 flex flex-col gap-6">
              <h2 className="text-3xl font-bold leading-tight">Nos Champs d'Action</h2>
              <p className="text-text-muted text-lg">
                Sous l'impulsion de leaders engagés comme <strong>Abakar Saleh Mahamat</strong>, l'AAPT mobilise la communauté pour un impact durable.
              </p>
              <ul className="flex flex-col gap-4 mt-2">
                {[
                  { icon: <Users size={20} />, title: "Égalité et Protection des Femmes", text: "Promouvoir l'égalité et lutter activement contre toutes les formes de violence faites aux femmes au Tchad." },
                  { icon: <Target size={20} />, title: "Jeunesse et Éducation", text: "Organiser des formations, des échanges (ex: Centre Horizon) et diffuser des actualités éducatives pour la jeunesse." },
                  { icon: <Heart size={20} />, title: "Solidarité et Entraide", text: "Améliorer concrètement le quotidien des plus démunis par des actions humanitaires ciblées." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 text-primary">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-sm text-text-muted">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="flex justify-center py-16 px-4 sm:px-10 lg:px-40 bg-white">
        <div className="w-full max-w-[960px]">
          <div className="flex flex-col gap-8">
            <div className="px-4 pb-3">
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em]">Notre Histoire</h2>
              <p className="mt-2 text-text-muted">Les étapes clés qui ont façonné l'AAPT.</p>
            </div>
            <div className="grid grid-cols-[40px_1fr] gap-x-4 px-4">
               {/* Timeline Item 1 */}
               <div className="flex flex-col items-center gap-1 pt-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary">
                  <div className="size-3 rounded-full bg-primary"></div>
                </div>
                <div className="w-[2px] bg-[#cfe7d7] h-full grow min-h-[40px]"></div>
              </div>
              <div className="flex flex-1 flex-col pb-8 pt-2">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-lg font-bold">Fondation à N'Djamena</p>
                  <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">2015</span>
                </div>
                <p className="text-text-muted text-base">
                  Création officielle de l'association par un groupe de tchadiens visionnaires désireux d'apporter le changement.
                </p>
              </div>

               {/* Timeline Item 2 */}
               <div className="flex flex-col items-center gap-1">
                <div className="w-[2px] bg-[#cfe7d7] h-4"></div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary">
                  <div className="size-3 rounded-full bg-primary"></div>
                </div>
                <div className="w-[2px] bg-[#cfe7d7] h-full grow min-h-[40px]"></div>
              </div>
              <div className="flex flex-1 flex-col pb-8 pt-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-lg font-bold">Lancement des pôles Jeunesse</p>
                  <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">2017</span>
                </div>
                <p className="text-text-muted text-base">
                  Début des collaborations avec des centres éducatifs et lancement des premiers programmes de formation.
                </p>
              </div>

               {/* Timeline Item 3 */}
               <div className="flex flex-col items-center gap-1 pb-3">
                <div className="w-[2px] bg-[#cfe7d7] h-4"></div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary">
                  <div className="size-3 rounded-full bg-primary"></div>
                </div>
              </div>
              <div className="flex flex-1 flex-col pt-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-lg font-bold">Expansion régionale</p>
                  <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">2020</span>
                </div>
                <p className="text-text-muted text-base">
                  L'association étend ses activités aux zones rurales environnantes, touchant désormais des milliers de bénéficiaires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;