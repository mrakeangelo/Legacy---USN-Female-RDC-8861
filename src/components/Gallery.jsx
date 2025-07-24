import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiChevronLeft, FiChevronRight, FiUsers, FiAward, FiCamera, FiHeart } = FiIcons;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      caption: 'Division 047 Graduation Ceremony - "They did it!"',
      category: 'ceremonies',
      quote: 'Watching them receive their Navy ball caps never gets old.',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caption: 'Morning PT with Division 032',
      category: 'training',
      quote: 'Every morning starts with purpose and determination.',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caption: 'Holiday Routine - Christmas at RTC',
      category: 'moments',
      quote: 'Even during the holidays, we take care of our own.',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1580904816849-0b28b5b9e15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caption: 'Division 023 Battle Stations',
      category: 'training',
      quote: 'This is where boys and girls become Sailors.',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caption: 'Family Day - Meeting the loved ones',
      category: 'ceremonies',
      quote: 'The pride in their families\' eyes says it all.',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
      caption: 'Behind the Scenes - Late night counseling',
      category: 'moments',
      quote: 'Sometimes the most important conversations happen after lights out.',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Photos', icon: FiCamera },
    { id: 'training', label: 'Training', icon: FiUsers },
    { id: 'ceremonies', label: 'Ceremonies', icon: FiAward },
    { id: 'moments', label: 'Moments', icon: FiHeart },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-navy-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-primary dark:text-white mb-4">
            Legacy Gallery
          </h2>
          <p className="text-xl text-steel-gray dark:text-white/80 max-w-3xl mx-auto font-dm-sans">
            Moments that define a career — from the drill deck to graduation day, capturing the transformation of tomorrow's Sailors.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-dm-sans font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gold-command text-navy-primary shadow-lg'
                  : 'bg-gray-100 dark:bg-navy-primary text-steel-gray dark:text-white hover:bg-gray-200 dark:hover:bg-navy-accent'
              }`}
            >
              <SafeIcon icon={filter.icon} className="w-5 h-5" />
              <span>{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white dark:bg-navy-primary"
                onClick={() => openLightbox(item)}
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-dm-sans font-semibold mb-1">{item.caption}</h3>
                  <p className="text-sm font-playfair italic opacity-90">{item.quote}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                  <h3 className="text-xl font-dm-sans font-semibold mb-2">{selectedImage.caption}</h3>
                  <p className="font-playfair italic">{selectedImage.quote}</p>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-colors duration-200"
                >
                  <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
                </button>
                
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-colors duration-200"
                >
                  <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
                </button>

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors duration-200"
                >
                  <SafeIcon icon={FiX} className="w-6 h-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;