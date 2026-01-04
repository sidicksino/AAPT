import React from 'react';
import { ArrowRight, Users, GraduationCap, Globe, Calendar, Heart, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import Counter from '../components/Counter';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 scale-105"
        >
           <motion.div 
             initial={{ scale: 1.1 }}
             animate={{ scale: 1 }}
             transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
             className="w-full h-full bg-cover bg-center"
             style={{
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/images/facebook/teams1.jpeg")`
             }}
           />
        </div>

        <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl space-y-8"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block rounded-full bg-primary/20 px-6 py-2 text-sm font-bold text-primary backdrop-blur-md border border-primary/30 shadow-[0_0_15px_rgba(57,224,121,0.3)]"
            >
              Pays / Ndjamena / Tchad
            </motion.span>
            
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-sm"
            >
              Association Actions Pour Tous <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover relative inline-block">
                Tchad
                <motion.svg
                  viewBox="0 0 200 9"
                  className="absolute -bottom-2 left-0 w-full"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                >
                  <path d="M0,5 Q100,10 200,5" fill="none" stroke="#39E079" strokeWidth="4" />
                </motion.svg>
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants} 
              className="mx-auto max-w-3xl text-xl font-medium text-gray-200 sm:text-2xl leading-relaxed"
            >
              Association Humanitaire à But Non Lucratif.
            </motion.p>
            
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
            >
              <button 
                onClick={() => navigate('/donate')}
                className="group relative flex h-14 min-w-[200px] items-center justify-center overflow-hidden rounded-full bg-primary px-8 text-lg font-bold text-[#0d1b12] shadow-[0_4px_20px_rgba(57,224,121,0.4)] transition-all hover:scale-105 hover:shadow-[0_6px_25px_rgba(57,224,121,0.5)] active:scale-95"
              >
                <span className="relative z-10">S'engager</span>
                <div className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-0" />
              </button>
              
              <button 
                onClick={() => navigate('/about')}
                className="group flex h-14 min-w-[200px] items-center justify-center rounded-full bg-white/5 px-8 text-lg font-bold text-white backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
              >
                <span className="group-hover:translate-x-1 transition-transform">En savoir plus</span>
                <ArrowRight className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" size={20} />
              </button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-10 z-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {[
              { val: 2, label: "Années d'action", suffix: " +" },
              { val: 500, label: "Femmes & Jeunes aidés", suffix: "+" },
              { val: 30, label: "Bénévoles engagés", suffix: "+" },
              { val: 1, label: "Pays impacté", suffix: "" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-4 border-b md:border-b-0 md:border-r last:border-0 border-gray-100">
                <p className="text-4xl md:text-5xl font-black text-primary">
                  <Counter value={stat.val} suffix={stat.suffix} duration={2} />
                </p>
                <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missions Section */}
      <section className="py-20 sm:py-32 bg-soft-blue/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-4xl font-black text-text-main sm:text-5xl mb-6">Nos Missions Prioritaires</h2>
            <p className="mx-auto max-w-2xl text-xl text-text-muted leading-relaxed">
              Nous nous engageons sur le terrain pour promouvoir l'égalité, protéger les plus vulnérables et former les leaders de demain.
            </p>
          </AnimatedSection>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Heart className="size-8"/>, title: "Droits des Femmes", desc: "Lutte active contre les violences basées sur le genre et promotion de l'autonomisation des femmes tchadiennes.", color: "bg-pink-50 text-pink-500" },
              { icon: <GraduationCap className="size-8"/>, title: "Jeunesse & Formation", desc: "Organisation de formations et d'échanges avec des partenaires comme le 'Centre Horizon' pour l'avenir de la jeunesse.", color: "bg-blue-50 text-blue-500" },
              { icon: <Globe className="size-8"/>, title: "Solidarité", desc: "Actions humanitaires concrètes : distributions de vivres, campagnes de santé et soutien aux orphelins.", color: "bg-green-50 text-green-500" }
            ].map((mission, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="group relative flex h-full flex-col gap-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl hover:border-primary/20">
                  <div className={`flex size-16 items-center justify-center rounded-2xl ${mission.color} transition-transform group-hover:scale-110 duration-300`}>
                    {mission.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-main group-hover:text-primary transition-colors">{mission.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-text-muted">{mission.desc}</p>
                  </div>
                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center text-sm font-bold text-text-main group-hover:translate-x-2 transition-transform cursor-pointer">
                      En savoir plus <ArrowRight size={16} className="ml-2 text-primary" />
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="bg-[#e7f3eb] py-20 sm:py-32 relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/20 to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="font-bold text-primary tracking-wider uppercase">Actualités</span>
              <h2 className="text-4xl font-black text-text-main mt-2">Dernières Actions</h2>
            </div>
            <button onClick={() => navigate('/news')} className="group flex items-center gap-2 text-base font-bold text-text-main hover:text-primary transition-colors bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md">
              Voir toute la galerie
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </AnimatedSection>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                title: "1 An au service de l'action humanitaire", 
                date: "Mars 2024", 
                img: "/assets/images/facebook/anniversary.png",
                desc: "L'Association Actions Pour Tous célèbre sa première année d'existence. Une année riche en émotions et en actions concrètes."
              },
              { 
                title: "Partage du Dîner Communautaire", 
                date: "Février 2024", 
                img: "/assets/images/facebook/dinner.png",
                desc: "Retour en images sur notre grand dîner de charité. Plus de 200 repas distribués dans une ambiance de fraternité."
              },
              { 
                title: "Assainissement Centre de Santé", 
                date: "Novembre 2023", 
                img: "/assets/images/facebook/sanitation.png",
                desc: "Nos bénévoles se sont mobilisés pour une journée de nettoyage et de désinfection au centre de santé SOS N'Djari."
              }
            ].map((news, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.15}>
                <article className="group h-full flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-2">
                  <div className="relative overflow-hidden aspect-video w-full">
                    <img 
                      src={news.img}
                      alt={news.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                        <Calendar size={14} />
                        {news.date}
                      </div>
                      <h3 className="text-xl font-bold text-text-main leading-tight group-hover:text-primary transition-colors">{news.title}</h3>
                      <p className="mt-3 text-sm text-text-muted leading-relaxed line-clamp-3">
                        {news.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <button onClick={() => navigate('/news')} className="inline-flex items-center text-sm font-bold text-text-main group-hover:text-primary transition-colors">
                        Lire l'article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      {/* Partners Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-center mb-12 text-[#0d1b12]">Nos Partenaires</h2>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {["CEFPAMS", "CHODEP", "AMINA Security Informatique", "MALIKA TCHAD", "UNICEF", "ATEFE", "ADI STARTUP", "ONG Konoum Toullo", "SOFT", "BALADI INFOS", "ALWIHDA INFOS", "ALWATAN MÉDIAS", "ONG ASHAD"].map((partner, idx) => (
                    <span key={idx} className="text-xl font-bold text-gray-400 hover:text-primary transition-colors cursor-default">{partner}</span>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-warm-green py-24 sm:py-32">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -right-20 -top-20 size-[600px] rounded-full bg-primary/5 blur-3xl dashed-border"
        ></motion.div>
        
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 z-10">
          <AnimatedSection>
            <h2 className="mb-6 text-4xl font-black text-white sm:text-5xl">Rejoignez le mouvement solidaire</h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-200">
              Sous le leadership d'Abakar Saleh Mahamat, nous bâtissons un avenir plus juste. Votre soutien fait la différence pour les femmes et les jeunes du Tchad.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button onClick={() => navigate('/donate')} className="h-14 w-full rounded-full bg-primary px-10 text-lg font-bold text-[#0d1b12] shadow-lg hover:bg-primary-hover hover:scale-105 transition-all sm:w-auto">
                Faire un don maintenant
              </button>
              <button className="flex h-14 w-full items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-transparent px-10 text-lg font-bold text-white hover:bg-white/10 hover:border-white/40 transition-all sm:w-auto">
                <Mail size={20} />
                S'inscrire à la newsletter
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;