import React, { useState } from 'react';
import { PlayCircle, Image as ImageIcon, X, ZoomIn, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { useNavigate } from 'react-router-dom';

type MediaType = 'image' | 'video';

interface GalleryItem {
  id: number;
  type: MediaType;
  category: string;
  src: string;
  title: string;
  location: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: 'image',
    category: 'Sur le terrain',
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop',
    title: 'Distribution de vivres',
    location: 'Quartier N\'Djari'
  },
  {
    id: 2,
    type: 'image',
    category: 'Éducation',
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop',
    title: 'Classe en plein air',
    location: 'Zone Rurale'
  },
  {
    id: 3,
    type: 'image',
    category: 'Santé',
    src: 'https://images.unsplash.com/photo-1576091160550-217358c7e618?q=80&w=2070&auto=format&fit=crop',
    title: 'Consultation pédiatrique',
    location: 'Dispensaire Mobile'
  },
  {
    id: 4,
    type: 'image',
    category: 'Sur le terrain',
    src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop',
    title: 'Rencontre communautaire',
    location: 'Village de Gassi'
  },
  {
    id: 5,
    type: 'image',
    category: 'Éducation',
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop',
    title: 'Formation des jeunes filles',
    location: 'Centre Horizon'
  },
  {
    id: 6,
    type: 'video',
    category: 'Événements',
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop', // Placeholder for video thumb
    title: 'Conférence annuelle 2023',
    location: 'N\'Djamena'
  },
  {
    id: 7,
    type: 'image',
    category: 'Santé',
    src: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2032&auto=format&fit=crop',
    title: 'Campagne de vaccination',
    location: 'Nord Tchad'
  },
  {
    id: 8,
    type: 'image',
    category: 'Sur le terrain',
    src: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=2080&auto=format&fit=crop',
    title: 'Accès à l\'eau potable',
    location: 'Puits villageois'
  },
  {
    id: 9,
    type: 'image',
    category: 'Événements',
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop',
    title: 'Gala de charité',
    location: 'Hôtel Radisson'
  }
];

const categories = ["Tout", "Sur le terrain", "Éducation", "Santé", "Événements"];

const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("Tout");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeFilter === "Tout" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="flex-grow bg-[#F8F9FA]">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[450px] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1559586616-361e18714958?q=80&w=2070&auto=format&fit=crop" 
            alt="Gallery Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0d1b12]/80 mix-blend-multiply"></div>
        </motion.div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <AnimatedSection>
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
              Notre Médiathèque
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Immersion au cœur de nos actions
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed max-w-2xl mx-auto">
              Explorez en images et en vidéos l'impact de nos projets sur le terrain. Des sourires, de l'espoir et du changement concret.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${
                  activeFilter === cat 
                  ? "text-[#0d1b12]" 
                  : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {cat}
                {activeFilter === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20 min-h-[500px]">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={item.id} 
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl bg-gray-200"
                onClick={() => setSelectedImage(item)}
              >
                <motion.img 
                  layoutId={`image-${item.id}`}
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-primary text-[#0d1b12] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                        {item.category}
                      </span>
                      {item.type === 'video' ? (
                        <PlayCircle className="text-white" size={24} />
                      ) : (
                        <ZoomIn className="text-white" size={20} />
                      )}
                    </div>
                    <h3 className="text-white font-bold text-xl leading-tight mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                      {item.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Aucun élément trouvé dans cette catégorie.</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 border-t border-gray-100">
        <AnimatedSection className="mx-auto max-w-4xl px-4 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <Heart size={32} className="fill-current" />
          </div>
          <h2 className="text-3xl font-black text-[#0d1b12] mb-4">Ces images témoignent de votre impact</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Chaque action menée est rendue possible grâce à la générosité de nos donateurs. Rejoignez-nous pour continuer à écrire cette histoire.
          </p>

          <motion.button 
            onClick={() => navigate('/donate')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-[#0d1b12] font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-lg"
          >
            Faire un don maintenant
          </motion.button>
        </AnimatedSection>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0 }}
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>
            
            <motion.div 
              layoutId={`image-${selectedImage.id}`}
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl bg-black">
                  {selectedImage.type === 'video' ? (
                     <div className="aspect-video w-full bg-black flex items-center justify-center group cursor-pointer relative">
                        <img src={selectedImage.src} className="w-full h-full object-cover opacity-60" alt={selectedImage.title} />
                        <PlayCircle size={64} className="text-white absolute z-10" />
                     </div>
                  ) : (
                    <motion.img 
                      src={selectedImage.src} 
                      alt={selectedImage.title} 
                      className="w-full h-full object-contain max-h-[85vh]"
                    />
                  )}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-center"
              >
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">{selectedImage.category}</span>
                <h2 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h2>
                <p className="text-gray-400">{selectedImage.location}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
