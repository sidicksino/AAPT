import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Amina Y.",
    role: "Bénéficiaire",
    content: "Grâce à l'AAPT, j'ai pu suivre une formation en couture et lancer ma petite entreprise. Aujourd'hui, je suis autonome et je peux soutenir ma famille.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2148&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Moussa K.",
    role: "Bénévole",
    content: "Être bénévole à l'AAPT m'a permis de voir directement l'impact de nos actions. Le sourire des enfants lors des distributions est ma plus belle récompense.",
    image: "https://images.unsplash.com/photo-1549488497-29532d56a02f?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Khadja Daniella",
    role: "Partenaire",
    content: "La transparence et l'efficacité de l'AAPT sont remarquables. C'est un partenaire de confiance pour le développement communautaire au Tchad.",
    image: "/assets/images/facebook/partenair.jpeg"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-background-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-text-main mb-4">Témoignages</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">Ils partagent leur expérience et leur espoir.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all relative border border-gray-100"
            >
              <Quote className="absolute top-6 right-6 text-primary/20" size={40} />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
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
