import React from 'react';
import { ArrowRight, Users, GraduationCap, Globe, Calendar, Heart, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="relative flex min-h-[600px] flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 27, 18, 0.6) 0%, rgba(13, 27, 18, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBq5QHgTMlaQmOpbw3ovaatjIatzrtLzAPRBspQFHcGbKpohjbScoiD5LlaZaG-_SPw8-5MO2FXIByRIyhxVnzSrfcOzXRIjJX4EVd7UxNUl0_EtgSsC1CJiadiJqziQ8kYFfuArDHgr9X4F8A2sFOQ3uLMLe5el1S_rpBIkoMmw0feeH9ps8JsV7JcFFhLqRC6JAzLDXYejKZDq-hbIAXxyH6Nt2BWZO1PlB0l8Xnb6i1xxpxAoBtiN7MCahiL1CHnG0DQlCwOMPs")`
          }}
        >
          <div className="max-w-4xl space-y-6">
            <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-bold text-primary backdrop-blur-md border border-primary/30">
              Basé à N'Djamena, Tchad
            </span>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ensemble pour l'égalité, la jeunesse et un Tchad <span className="text-primary">solidaire</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-medium text-gray-200 sm:text-xl">
              L'Association Actions Pour Tous lutte contre la violence faite aux femmes, favorise l'éducation des jeunes et bâtit des ponts de solidarité à travers l'Afrique.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button 
                onClick={() => navigate('/donate')}
                className="flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-[#0d1b12] shadow-lg hover:bg-primary-hover transition-all hover:scale-105"
              >
                S'engager
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-white/10 px-8 text-base font-bold text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
              >
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-[#e7f3eb] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {[
              { val: "5+", label: "Années d'action" },
              { val: "1000+", label: "Femmes & Jeunes aidés" },
              { val: "50+", label: "Bénévoles engagés" },
              { val: "3", label: "Pays impactés" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <p className="text-4xl font-black text-primary">{stat.val}</p>
                <p className="text-sm font-medium uppercase tracking-wide text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missions Section */}
      <section className="py-16 sm:py-24 bg-soft-blue/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-black text-text-main sm:text-4xl">Nos Missions Prioritaires</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Nous nous engageons sur le terrain pour promouvoir l'égalité, protéger les plus vulnérables et former les leaders de demain.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Heart className="size-6"/>, title: "Droits des Femmes", desc: "Lutte active contre les violences basées sur le genre et promotion de l'autonomisation des femmes tchadiennes." },
              { icon: <GraduationCap className="size-6"/>, title: "Jeunesse & Formation", desc: "Organisation de formations et d'échanges avec des partenaires comme le 'Centre Horizon' pour l'avenir de la jeunesse." },
              { icon: <Globe className="size-6"/>, title: "Solidarité Panafricaine", desc: "Publication d'actualités éducatives et initiatives impliquant la jeunesse de plusieurs pays africains." }
            ].map((mission, idx) => (
              <div key={idx} className="group relative flex flex-col gap-4 rounded-xl border border-[#cfe7d7] bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-lg bg-[#e7f3eb] text-[#0d1b12] group-hover:bg-primary group-hover:text-[#0d1b12] transition-colors">
                  {mission.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-main">{mission.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{mission.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="bg-[#e7f3eb] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-black text-text-main">Actions & Actualités</h2>
              <p className="mt-2 text-text-muted">Découvrez l'impact de nos projets et nos partenariats récents.</p>
            </div>
            <button onClick={() => navigate('/news')} className="flex items-center gap-1 text-sm font-bold text-text-main hover:text-primary transition-colors">
              Voir toute la galerie
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                title: "Formation au Centre Horizon", 
                date: "Octobre 2023", 
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCdJZEQzy91lVdYhiaVDyc2MbCjxmJcc3ZjHuzCQnm498gr_1Ahd8W85EYgbl5yfblQn_8c2sHJhXhMbb4w-HXxj48qNCN_egy-Ej_ePAYv9XP0UfJtkK92XwTpw2Dcep8eiBw2k7I7HgGVKT2ULpyWQ0S4jB-ZT_vlFJpanVMAIBRouNz6Xn7M6abXmyfIv3RqgW2W6dtk5MMPw77RblWze2WeDEGIievucTDp1OBqBpdh0NLOPuET0-qiMknKpCV7BPRAg9IMuk",
                desc: "Atelier d'échange et de leadership pour 50 jeunes leaders en partenariat avec le Centre Horizon."
              },
              { 
                title: "Sensibilisation contre la violence", 
                date: "Septembre 2023", 
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlO4tAFx4MvbXX49EXXjmKDrdvycJtY74K8QX240gQRCZunofrZ_KG0ac97DtXASPYWssUIEtr77Xgd4Muc5LJq0C2KgNOI2XgLcZE8_Pb-Qx4eDETcYkRXVEgUnmYjiGayXqzqEiGq8RU9CuRuyQ31iyYmvLbPzvY3Xl5Kf9jVoJmvJyWdQEngbviRKVRc7hhwWhdJCtkfV46c5mDYg_JaKt_OWvvBqlsBU21a2mxOJrpUDPmhzwU6KBlJzXFkuFvjXPkwRD1H_Y",
                desc: "Campagne de quartier pour promouvoir l'égalité et mettre fin aux violences faites aux femmes."
              },
              { 
                title: "Soutien aux orphelins", 
                date: "Août 2023", 
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6h8lq4hHiG6AKWvJ9UdRTJTKRfSq4KAVXiqOPqFLD2-ucc1_4zEUl8eXZ7cTjCZY1wQNlIB0_CSFVdcGojbNjcRr_WtbXlSHc3Rujuh5YwE9gAfTVy9kZXf_gK171UEpbWVWlvU-qMOOYRVv47sDiOWQUIcKSMsCk7KE0lZkJWkl7C58hB8hg25zsYHfLXD9nOf5rL_Naaba3QFSemPY0604V2GUNetvnZAYdCQrgYHroFVHqR4b6vJ5e8TSMnR1JOW1F98yaAjI",
                desc: "Distribution de vivres et accompagnement psychosocial pour les enfants défavorisés de N'Djamena."
              }
            ].map((news, idx) => (
              <article key={idx} className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div 
                  className="aspect-video w-full bg-cover bg-center" 
                  style={{ backgroundImage: `url("${news.img}")` }}
                />
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                      <Calendar size={14} />
                      {news.date}
                    </div>
                    <h3 className="text-lg font-bold text-text-main">{news.title}</h3>
                    <p className="mt-2 text-sm text-text-muted line-clamp-2">
                      {news.desc}
                    </p>
                  </div>
                  <button onClick={() => navigate('/news')} className="mt-4 inline-flex items-center text-sm font-bold text-text-main underline decoration-primary decoration-2 underline-offset-4">
                    Lire plus
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-warm-green py-16">
        <div className="absolute -right-20 -top-20 size-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 size-72 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-black text-white sm:text-4xl">Rejoignez le mouvement solidaire</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
            Sous le leadership d'Abakar Saleh Mahamat, nous bâtissons un avenir plus juste. Votre soutien fait la différence pour les femmes et les jeunes du Tchad.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button onClick={() => navigate('/donate')} className="h-12 w-full rounded-lg bg-primary px-8 text-base font-bold text-[#0d1b12] shadow-lg hover:bg-primary-hover sm:w-auto">
              Faire un don maintenant
            </button>
            <button className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-8 text-base font-bold text-white hover:bg-white/10 sm:w-auto">
              <Mail size={18} />
              S'inscrire à la newsletter
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;