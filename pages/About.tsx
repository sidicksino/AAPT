import React from 'react';
import { Target, Scale, Users, Heart } from 'lucide-react';
import Image from '../components/Image';

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
                Promouvoir le Vivre-Ensemble et la Solidarité
              </h1>
              <h2 className="text-gray-200 text-base font-normal leading-relaxed sm:text-lg">
                Association Actions Pour Tous — Une année d'engagement pour la cohésion sociale, l'entraide et le développement communautaire au Tchad.
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
              <Image 
                src="/assets/images/facebook/presi1.jpeg" 
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

      {/* Team Section */}
      <section className="flex justify-center py-24 px-4 sm:px-10 lg:px-40 bg-[#f8fcf9] dark:bg-[#0d1b12]">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col gap-16">
            <div className="text-center space-y-4">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-primary">
                Notre Force
              </span>
              <h2 className="text-4xl font-display font-bold text-[#0d1b12] dark:text-white">
                Notre Équipe
              </h2>
              <p className="text-text-muted dark:text-gray-400 max-w-2xl mx-auto text-lg">
                Des passionnés engagés pour bâtir un avenir meilleur au Tchad.
              </p>
            </div>

            {/* President Tier */}
            <div className="flex justify-center -mb-8 relative z-10 text-center">
              <div className="flex flex-col relative group max-w-md w-full">
                <div className="absolute top-0 left-0 w-full h-full bg-blue-50/50 dark:bg-white/5 rounded-2xl -z-10 translate-y-20 pb-20"></div>
                <div className="px-6 flex flex-col items-center">
                  <div className="w-48 h-48 rounded-full border-8 border-white dark:border-[#0d1b12] shadow-xl overflow-hidden mb-6 bg-gray-200">
                    <Image 
                      src="/assets/images/facebook/presi.jpeg" 
                      alt="Abakar Saleh Mahamat" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="pt-2 pb-12">
                    <span className="text-primary font-bold tracking-uppercase uppercase mb-2 block">Président</span>
                    <h3 className="text-3xl font-display font-bold text-[#0d1b12] dark:text-white mb-3">Abakar Saleh Mahamat</h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                      Visionnaire et engagé, il guide l'AAPT avec la conviction que chaque action compte pour un Tchad uni et solidaire.
                    </p>
                    <div className="flex justify-center gap-4 text-gray-400">
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                        <Users size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Board Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 pt-12 border-t border-gray-100 dark:border-white/5">
              {[
                { name: "Ali Kali Mahamat", role: "Vice-président", img: "/assets/images/facebook/VP.jpeg" },
                { name: "Achta Saleh Atche", role: "2ème Vice-présidente", img: "/assets/images/facebook/2VP.jpeg" },
                { name: "Idriss Bichara Hamid", role: "Secrétaire Général", img: "/assets/images/facebook/SG.jpeg" },
                { name: "Maria Bechir Hassaballah", role: "Secrétaire Générale Adjointe", img: "/assets/images/facebook/SGA.jpeg" },
                { name: "Fatime Chahad Ibrahim", role: "Chargé de Communication", img: "/assets/images/facebook/fatime.jpeg" },
                { name: "Abakar Hassan Saleh", role: "Trésorier Général", img: "/assets/images/facebook/TS.jpeg" },
                { name: "Talbey Ali Mahamat", role: "Trésorière Générale Adjointe", img: "/assets/images/facebook/TGA.jpeg" },
                { name: "Mahamat Ousman Mahamat", role: "Chargé Relations Extérieures", img: "/assets/images/facebook/mahamat.jpeg" },
              ].map((member, idx) => (
                <div key={idx} className="flex flex-col relative group">
                  <div className="absolute top-0 left-0 w-full h-full bg-[#f8fcf9] dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl -z-10 translate-y-20 pb-20 transition-colors group-hover:border-primary/20"></div>
                  <div className="px-6 flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full border-4 border-white dark:border-[#0d1b12] shadow-lg overflow-hidden mb-6 bg-gray-200">
                      <Image 
                        src={member.img} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="pt-2 pb-8">
                      <span className="text-primary font-bold text-xs tracking-uppercase uppercase mb-2 block">{member.role}</span>
                      <h3 className="text-xl font-display font-bold text-[#0d1b12] dark:text-white mb-2">{member.name}</h3>
                      <div className="flex justify-center gap-4 text-gray-400 mt-4">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                          <Users size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
                  <p className="text-lg font-bold">Création Officielle</p>
                  <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">2023</span>
                </div>
                <p className="text-text-muted text-base">
                  Lancement de l'Association Actions Pour Tous (AAPT) à N'Djamena avec pour mission principale de promouvoir la cohésion sociale et le vivre-ensemble.
                </p>
              </div>

               {/* Timeline Item 2 */}
               <div className="flex flex-col items-center gap-1 pb-3">
                <div className="w-[2px] bg-[#cfe7d7] h-4"></div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary">
                  <div className="size-3 rounded-full bg-primary"></div>
                </div>
              </div>
              <div className="flex flex-1 flex-col pt-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-lg font-bold">Actions de Terrain</p>
                  <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">2024</span>
                </div>
                <p className="text-text-muted text-base">
                  Multiplication des initiatives : dîners communautaires pour la fraternité, campagnes d'assainissement (SOS N'Djari) et aide aux personnes vulnérables.
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