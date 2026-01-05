import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const images = {
  1: "/assets/images/facebook/partenair.jpeg",
  2: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2148&auto=format&fit=crop",
  3: "https://images.unsplash.com/photo-1549488497-29532d56a02f?q=80&w=2069&auto=format&fit=crop"
}

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = t('testimonials.items', { returnObjects: true }) as any[];

  return (
    <section className="py-20 bg-background-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-text-main mb-4">{t('testimonials.title')}</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">{t('testimonials.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all relative border border-gray-100"
            >
              <Quote className="absolute top-6 right-6 text-primary/20" size={40} />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                  <img src={images[idx + 1 as keyof typeof images]} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-main">{testimonial.name}</h4>
                  <span className="text-sm text-primary font-semibold">{testimonial.role}</span>
                </div>
              </div>
              
              <p className="text-gray-600 italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
