import React from 'react';
import { MapPin, Phone, Mail, Facebook, Send, Twitter, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="flex-grow bg-[#F8F9FA]">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-100 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black text-[#0d1b12] mb-6">Contactez l'AAPT</h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl font-light leading-relaxed">
            Nous sommes à votre écoute pour toute question, partenariat ou besoin d'assistance. Ensemble, agissons pour tous.
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-[#0d1b12] mb-8">Nos Coordonnées</h2>
              <div className="space-y-6">
                {/* Address Card */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start gap-5 hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#E6F4EA] flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d1b12] text-lg mb-1">Siège Social</h3>
                    <p className="text-gray-500 leading-relaxed">Quartier Moursal,<br/>N'Djamena, Tchad</p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start gap-5 hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#E6F4EA] flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d1b12] text-lg mb-1">Téléphone</h3>
                    <p className="text-gray-500 font-medium">+235 66 09 89 31</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start gap-5 hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#E6F4EA] flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d1b12] text-lg mb-1">Email</h3>
                    <p className="text-gray-500">contact@aapt-tchad.org</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h2 className="text-2xl font-bold text-[#0d1b12] mb-6">Suivez-nous</h2>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded-full font-bold hover:opacity-90 transition-opacity">
                  <Facebook size={20} />
                  Page Facebook
                </a>
                <a href="#" className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full hover:opacity-80 transition-opacity">
                   {/* Simulating X logo with generic close/X icon or text, using Twitter icon as fallback if specific SVG not available, or just styled text */}
                   <span className="font-black text-lg">X</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-bold hover:opacity-90 transition-opacity">
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10">
              <h2 className="text-3xl font-bold text-[#0d1b12] mb-2">Envoyez-nous un message</h2>
              <p className="text-gray-500 mb-8">Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les plus brefs délais.</p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0d1b12]">Votre nom</label>
                    <input 
                      type="text" 
                      placeholder="Nom complet" 
                      className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0d1b12]">Votre email</label>
                    <input 
                      type="email" 
                      placeholder="exemple@email.com" 
                      className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0d1b12]">Sujet</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none text-gray-600">
                      <option>Demande d'information</option>
                      <option>Devenir bénévole</option>
                      <option>Partenariat</option>
                      <option>Presse</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0d1b12]">Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Comment pouvons-nous vous aider ?"
                    className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                <button className="w-full sm:w-auto px-8 py-4 bg-primary text-[#0d1b12] font-bold rounded-lg hover:bg-primary-hover shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  <Send size={18} />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="relative h-[400px] w-full bg-gray-200 overflow-hidden">
        {/* Placeholder Map Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-60 hover:grayscale-0 transition-all duration-700"
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDw77O667VvJ3_t5r2q7o_Dk64zE4qGv-vXyLg_wXg7PzT5n9xW-hGq3vE9tK4j2B8rL1s5yN6mQ9c4z3b8v7x-9_0l6k2m5n8p4q7r3s9t2v1wX6y5z8A4b7C9d0e1f2g3h4i5j6k7l8m9n0o')` }} 
        ></div>
        {/* If no specific map image, use a generic map pattern or Unsplash */}
        <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply"
            alt="Map Background"
        />
        
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#E6F4EA] rounded-full flex items-center justify-center mx-auto mb-4 text-primary animate-bounce-subtle">
              <MapPin size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#0d1b12] mb-2">Trouvez-nous</h3>
            <p className="text-gray-500 mb-6 text-sm">
              Notre bureau est situé au cœur du quartier Moursal, accessible facilement depuis l'avenue principale.
            </p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="block w-full py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all"
            >
              Ouvrir dans Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;