import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiStar } = FiIcons;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.5)), url(https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-primary/20 to-navy-primary/60" />
      </div>

      {/* Decorative Stars */}
      <div className="absolute top-20 left-10 animate-pulse">
        <SafeIcon icon={FiStar} className="w-6 h-6 text-gold-command opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-pulse delay-1000">
        <SafeIcon icon={FiStar} className="w-4 h-4 text-gold-command opacity-40" />
      </div>
      <div className="absolute bottom-40 left-20 animate-pulse delay-2000">
        <SafeIcon icon={FiStar} className="w-5 h-5 text-gold-command opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gold-command w-12 mr-4" />
            <SafeIcon icon={FiStar} className="w-6 h-6 text-gold-command" />
            <div className="h-px bg-gold-command w-12 ml-4" />
          </div>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-4">
            Chief Petty Officer
          </h1>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-gold-command mb-6">
            Samantha Rivera
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-dm-sans mb-2">
            U.S. Navy Recruit Division Commander
          </p>
          <p className="text-lg text-white/80 font-dm-sans">
            Great Lakes Naval Training Center
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <blockquote className="text-xl md:text-2xl font-playfair italic text-white/95 max-w-3xl mx-auto leading-relaxed">
            "I trained them hard — because I believed in who they'd become."
          </blockquote>
          <div className="mt-4 text-white/70 font-dm-sans">
            — Chief Rivera, on shaping the next generation of Sailors
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <motion.a
            href="#timeline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gold-command text-navy-primary font-dm-sans font-semibold rounded-full hover:bg-gold-light transition-colors duration-200 group"
          >
            Explore Her Legacy
            <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.a>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-white/80 font-dm-sans"
          >
            <div className="text-sm">Divisions Trained</div>
            <div className="text-3xl font-bold text-gold-command">47</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;