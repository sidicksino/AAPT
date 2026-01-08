import React, { useState } from 'react';
import { CreditCard, Smartphone, Check, Lock, Heart, Gift, Users, Mail } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const Donate: React.FC = () => {
    const { t } = useTranslation();
    const [amount, setAmount] = useState('10.000');
    const [frequency, setFrequency] = useState('unique');

    const checks = t('donate.hero.checks', { returnObjects: true }) as string[];
    const impactCards = t('donate.impact.cards', { returnObjects: true }) as any[];

    const icons = [Gift, Heart, Users]; // Order must match translation array

    return (
        <div className="flex-grow font-body">
            {/* Hero & Donation Form Section */}
            <section className="relative w-full py-12 lg:py-24 px-4 sm:px-6 lg:px-8 flex justify-center bg-[#0d1b12]">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
                        alt="Background" 
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b12]/80 via-[#0d1b12]/70 to-[#0d1b12]/90"></div>
                </div>

                <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                    {/* Left Content */}
                    <div className="text-white space-y-8">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-primary text-[#0d1b12] text-xs font-bold uppercase tracking-wider">
                            {t('donate.hero.badge')}
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                            <Trans 
                                i18nKey="donate.hero.title" 
                                components={[<span className="text-primary" key={0} />]} 
                            />
                        </h1>
                        <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                            {t('donate.hero.desc')}
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            {checks.map((text, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Check size={14} className="text-primary" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-200">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 p-6 sm:p-8">
                         <div className="mb-8 text-center">
                            <h3 className="text-2xl font-bold text-gray-900">{t('donate.form.title')}</h3>
                            <p className="text-sm text-gray-500 mt-1">{t('donate.form.subtitle')}</p>
                        </div>

                        {/* Frequency Toggles */}
                        <div className="flex p-1 bg-gray-100 rounded-lg mb-8">
                            <button 
                                onClick={() => setFrequency('unique')}
                                className={`flex-1 py-2.5 text-center text-sm font-bold rounded-md transition-all ${frequency === 'unique' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                {t('donate.form.frequency.unique')}
                            </button>
                            <button 
                                onClick={() => setFrequency('mensuel')}
                                className={`flex-1 py-2.5 text-center text-sm font-bold rounded-md transition-all ${frequency === 'mensuel' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                            >
                                {t('donate.form.frequency.monthly')}
                            </button>
                        </div>

                        {/* Amount Grid */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            {['2.000', '5.000', '10.000', '25.000', '50.000', t('donate.form.other')].map((amt) => (
                                <button 
                                    key={amt} 
                                    onClick={() => setAmount(amt)}
                                    className={`py-4 px-2 border-2 rounded-xl text-sm font-bold transition-all ${
                                        amount === amt 
                                        ? 'border-primary bg-primary/5 text-[#0d1b12]' 
                                        : 'border-gray-100 text-gray-600 hover:border-gray-200 hover:bg-gray-50'
                                    }`}
                                >
                                    {amt} <span className="text-[10px] font-normal block">{amt !== t('donate.form.other') && 'FCFA'}</span>
                                </button>
                            ))}
                        </div>

                         {/* Payment Method */}
                         <div className="space-y-4 mb-8">
                            <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all group">
                                <div className="flex items-center gap-3">
                                    <Smartphone className="text-gray-400 group-hover:text-primary transition-colors" />
                                    <span className="font-bold text-gray-700 group-hover:text-gray-900">{t('donate.form.methods.mobile')}</span>
                                </div>
                                <div className="w-4 h-4 rounded-full border border-gray-300 group-hover:border-primary group-hover:bg-primary transition-all"></div>
                            </button>
                             <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all group">
                                <div className="flex items-center gap-3">
                                    <CreditCard className="text-gray-400 group-hover:text-primary transition-colors" />
                                    <span className="font-bold text-gray-700 group-hover:text-gray-900">{t('donate.form.methods.card')}</span>
                                </div>
                                <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                            </button>
                         </div>

                        <button className="w-full bg-primary hover:bg-primary-hover text-[#0d1b12] font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                            {t('donate.form.submit', { amount: amount !== t('donate.form.other') ? amount : '...' })}
                        </button>
                        
                        <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                            <Lock size={12} /> {t('donate.form.security')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Impact Cards Section */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-black text-[#0d1b12] mb-4">{t('donate.impact.title')}</h2>
                        <p className="text-gray-600 text-lg">
                            {t('donate.impact.desc')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {impactCards.map((card, idx) => {
                            const Icon = icons[idx] || Gift;
                            return (
                                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center group">
                                    <div className="w-16 h-16 rounded-full bg-[#E6F4EA] flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-[#0d1b12] transition-colors text-primary">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <div className="text-primary font-bold text-xl mb-2">{card.amount}</div>
                                    <h3 className="text-xl font-bold text-[#0d1b12] mb-3">{card.title}</h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        {card.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

             {/* Dark CTA Section (Matches Screenshot) */}
             <section className="bg-[#0A2540] py-24 relative overflow-hidden">
                {/* Background decorative blobs similar to screenshot */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">{t('donate.cta.title')}</h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        {t('donate.cta.desc')}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="w-full sm:w-auto px-8 py-4 bg-primary text-[#0d1b12] font-bold rounded-lg hover:bg-primary-hover transition-all shadow-lg hover:shadow-primary/20">
                            {t('donate.cta.donate')}
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-[#1a3324] text-white border border-white/10 font-bold rounded-lg hover:bg-[#254230] transition-all flex items-center justify-center gap-2">
                            <Mail size={18} />
                            {t('donate.cta.newsletter')}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donate;