import React from 'react';
import { MapPin, Phone, Mail, User, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A2540] text-white pt-20 pb-10 border-t-4 border-primary relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-12 rounded-full bg-primary text-[#0A2540]">
                <span className="font-black text-xl">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight text-white">AAPT</h3>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">Association Actions Pour Tous</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Paix, Solidarité, Développement
              <br/>
              <span className="text-xs opacity-70 block mt-2">Autorisation : N°0109/PR/MATD/DGGCN'DJ/SG/2024</span>
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/profile.php?id=61556211401837" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center size-10 rounded-full bg-white/10 hover:bg-primary hover:text-[#0A2540] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(57,224,121,0.5)] transition-all duration-300 group">
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="flex items-center justify-center size-10 rounded-full bg-white/10 hover:bg-primary hover:text-[#0A2540] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(57,224,121,0.5)] transition-all duration-300 group">
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="flex items-center justify-center size-10 rounded-full bg-white/10 hover:bg-primary hover:text-[#0A2540] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(57,224,121,0.5)] transition-all duration-300 group">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="flex items-center justify-center size-10 rounded-full bg-white/10 hover:bg-primary hover:text-[#0A2540] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(57,224,121,0.5)] transition-all duration-300 group">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 group-hover:scale-110 transition-transform">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-primary/30 pb-2 inline-block">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-primary hover:translate-x-2 transition-all duration-300 flex items-center gap-2">Accueil</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary hover:translate-x-2 transition-all duration-300 flex items-center gap-2">À propos de nous</Link></li>
              <li><Link to="/actions" className="text-gray-300 hover:text-primary hover:translate-x-2 transition-all duration-300 flex items-center gap-2">Nos Actions</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-primary hover:translate-x-2 transition-all duration-300 flex items-center gap-2">Actualités</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-primary hover:translate-x-2 transition-all duration-300 flex items-center gap-2">Faire un don</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-primary/30 pb-2 inline-block">Nous Contacter</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Siège National</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">Quartier N’djari / ECRB,<br/>N'Djamena, Tchad</p>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="text-primary shrink-0" size={18} />
                <div className="flex flex-col">
                  <a href="tel:+23566098931" className="text-gray-300 text-sm hover:text-white transition-colors font-medium">+235 66 09 89 31</a>
                  <a href="tel:+23560037953" className="text-gray-300 text-sm hover:text-white transition-colors font-medium">+235 60 03 79 53</a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="text-primary shrink-0" size={18} />
                <a href="mailto:associationactionspourtous@gmail.com" className="text-gray-300 text-sm hover:text-white transition-colors">associationactionspourtous@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 group">
                <User className="text-primary shrink-0" size={18} />
                <span className="text-gray-300 text-sm">Représentant: Abakar Saleh Mahamat</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-primary/30 pb-2 inline-block">Restez informés</h4>
            <p className="text-gray-300 text-sm mb-4">Recevez les dernières nouvelles de nos actions humanitaires.</p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-500"
                placeholder="Votre email"
              />
              <button className="w-full bg-primary hover:bg-primary-hover text-[#0A2540] font-bold py-2 px-4 rounded text-sm transition-colors">
                S'abonner
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 Association Actions Pour Tous (AAPT). Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-primary transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;