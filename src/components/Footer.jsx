import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiHeart, FiShield, FiArrowUp } = FiIcons;

const Footer = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const quotes = [
    {
      text: "She trained with fire and love.",
      author: "Division 032 Graduate"
    },
    {
      text: "Every recruit was her recruit. Every success was her success.",
      author: "Fellow RDC"
    },
    {
      text: "She didn't just make Sailors. She made leaders.",
      author: "Former Recruit"
    },
    {
      text: "Her legacy lives in every life she touched.",
      author: "Navy Family"
    },
    {
      text: "Tough love, unwavering standards, endless belief.",
      author: "Training Command"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy-primary dark:bg-navy-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <SafeIcon icon={FiStar} className="w-8 h-8 text-gold-command" />
        </div>
        <div className="absolute top-20 right-20">
          <SafeIcon icon={FiShield} className="w-6 h-6 text-gold-command" />
        </div>
        <div className="absolute bottom-20 left-20">
          <SafeIcon icon={FiHeart} className="w-7 h-7 text-gold-command" />
        </div>
        <div className="absolute bottom-10 right-10">
          <SafeIcon icon={FiStar} className="w-5 h-5 text-gold-command" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Quote Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <blockquote className="text-2xl md:text-3xl font-playfair italic text-gold-command leading-relaxed">
                "{quotes[currentQuote].text}"
              </blockquote>
              <div className="text-white/80 font-dm-sans">
                — {quotes[currentQuote].author}
              </div>
            </motion.div>
            
            {/* Quote Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentQuote ? 'bg-gold-command scale-125' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-playfair font-bold text-gold-command mb-4">
              Chief Petty Officer Rivera
            </h3>
            <p className="text-white/80 font-dm-sans leading-relaxed">
              A leader who shaped thousands of lives through discipline, compassion, and unwavering belief in human potential. Her legacy continues in every Sailor she trained.
            </p>
            <div className="flex space-x-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-command font-playfair">47</div>
                <div className="text-xs text-white/60 font-dm-sans">Divisions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-command font-playfair">2,800+</div>
                <div className="text-xs text-white/60 font-dm-sans">Sailors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-command font-playfair">16</div>
                <div className="text-xs text-white/60 font-dm-sans">Years</div>
              </div>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-playfair font-bold text-gold-command mb-4">
              Navy Core Values
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiStar} className="w-5 h-5 text-gold-command" />
                <span className="text-white/80 font-dm-sans">Honor</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiShield} className="w-5 h-5 text-gold-command" />
                <span className="text-white/80 font-dm-sans">Courage</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiHeart} className="w-5 h-5 text-gold-command" />
                <span className="text-white/80 font-dm-sans">Commitment</span>
              </div>
            </div>
            <p className="text-white/60 font-dm-sans text-sm pt-4">
              Values that guided her service and shaped every recruit she trained.
            </p>
          </motion.div>

          {/* Legacy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-playfair font-bold text-gold-command mb-4">
              Her Legacy
            </h3>
            <p className="text-white/80 font-dm-sans leading-relaxed">
              Every Sailor she trained carries forward her lessons of discipline, integrity, and service. Her impact extends far beyond the drill deck, living on in the lives she touched and the leaders she created.
            </p>
            <div className="pt-4">
              <div className="text-white/60 font-dm-sans text-sm italic">
                "Once a Sailor, always a Sailor. Once her recruit, forever her pride."
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gold-command rounded-full flex items-center justify-center">
              <SafeIcon icon={FiShield} className="w-5 h-5 text-navy-primary" />
            </div>
            <div className="text-white/80 font-dm-sans text-sm">
              U.S. Navy • Great Lakes Naval Training Center
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="text-white/60 font-dm-sans text-sm">
              Created with honor and respect
            </div>
            <div className="text-white/40 font-dm-sans text-xs">
              Mrake Agency
            </div>
          </div>
        </motion.div>
      </div>

      {/* Navy Emblem Watermark */}
      <div className="absolute bottom-0 right-0 opacity-5">
        <SafeIcon icon={FiShield} className="w-64 h-64 text-gold-command" />
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0
        }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gold-command hover:bg-gold-dark text-navy-primary rounded-full flex items-center justify-center shadow-lg transition-colors duration-200 z-50"
      >
        <SafeIcon icon={FiArrowUp} className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;