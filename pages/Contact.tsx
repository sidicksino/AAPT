import React from 'react';
import { MapPin, Phone, Mail, Facebook, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex-grow bg-[#F8F9FA]">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-100 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black text-[#0d1b12] mb-6">{t('contact.hero.title')}</h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl font-light leading-relaxed">
            {t('contact.hero.desc')}
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-[#0d1b12] mb-8">{t('contact.info.title')}</h2>
              <div className="space-y-6">
                {/* Address Card */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start gap-5 hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#E6F4EA] flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d1b12] text-lg mb-1">{t('contact.info.address.title')}</h3>
                    <p className="text-gray-500 leading-relaxed whitespace-pre-line">{t('contact.info.address.value')}</p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start gap-5 hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#E6F4EA] flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d1b12] text-lg mb-1">{t('contact.info.phone.title')}</h3>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                             <a href="tel:+23566098931" className="text-gray-500 font-medium hover:text-primary transition-colors">+235 66 09 89 31</a>
                             <a href="https://wa.me/23566098931" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:scale-110 transition-transform bg-[#25D366]/10 p-1 rounded-full">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                             </a>
                        </div>
                        <a href="tel:+23560037953" className="text-gray-500 font-medium hover:text-primary transition-colors">+235 60 03 79 53</a>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start gap-5 hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#E6F4EA] flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d1b12] text-lg mb-1">{t('contact.info.email.title')}</h3>
                    <p className="text-gray-500">associationactionspourtous@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h2 className="text-2xl font-bold text-[#0d1b12] mb-6">{t('contact.socials.title')}</h2>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.facebook.com/profile.php?id=61556211401837" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded-full font-bold hover:opacity-90 transition-opacity">
                  <Facebook size={20} />
                  {t('contact.socials.facebook')}
                </a>
                <a href="#" className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full hover:opacity-80 transition-opacity">
                   {/* Simulating X logo with generic close/X icon or text, using Twitter icon as fallback if specific SVG not available, or just styled text */}
                   <span className="font-black text-lg">X</span>
                </a>
                <a href="https://wa.me/23566098931" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-bold hover:opacity-90 transition-opacity">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10">
              <h2 className="text-3xl font-bold text-[#0d1b12] mb-2">{t('contact.form.title')}</h2>
              <p className="text-gray-500 mb-8">{t('contact.form.desc')}</p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0d1b12]">{t('contact.form.name')}</label>
                    <input 
                      type="text" 
                      placeholder={t('contact.form.name_placeholder')} 
                      className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0d1b12]">{t('contact.form.email')}</label>
                    <input 
                      type="email" 
                      placeholder={t('contact.form.email_placeholder')} 
                      className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0d1b12]">{t('contact.form.subject.label')}</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none text-gray-600">
                      <option>{t('contact.form.subject.options.info')}</option>
                      <option>{t('contact.form.subject.options.volunteer')}</option>
                      <option>{t('contact.form.subject.options.partnership')}</option>
                      <option>{t('contact.form.subject.options.press')}</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0d1b12]">{t('contact.form.message')}</label>
                  <textarea 
                    rows={6}
                    placeholder={t('contact.form.message_placeholder')}
                    className="w-full px-4 py-3 rounded-lg bg-[#F8F9FA] border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                <button className="w-full sm:w-auto px-8 py-4 bg-primary text-[#0d1b12] font-bold rounded-lg hover:bg-primary-hover shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  <Send size={18} />
                  {t('contact.form.submit')}
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
            <h3 className="text-2xl font-bold text-[#0d1b12] mb-2">{t('contact.map.title')}</h3>
            <p className="text-gray-500 mb-6 text-sm">
              {t('contact.map.desc')}
            </p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="block w-full py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all"
            >
              {t('contact.map.open')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;