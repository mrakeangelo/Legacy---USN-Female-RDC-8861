import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiHome, FiStar, FiUsers } = FiIcons;

const PersonalLife = () => {
  return (
    <section className="py-20 bg-rose-light dark:bg-navy-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-primary dark:text-white mb-4">
            Beyond the Uniform
          </h2>
          <p className="text-xl text-steel-gray dark:text-white/80 max-w-3xl mx-auto font-dm-sans">
            Behind every great leader is a story of balance, sacrifice, and the love that fuels their dedication to service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiHeart} className="w-6 h-6 text-rose-accent" />
                <h3 className="text-2xl font-bold text-navy-primary dark:text-white font-playfair">
                  Mother, Leader, Mentor
                </h3>
              </div>
              <p className="text-steel-gray dark:text-white/80 font-dm-sans leading-relaxed">
                Being an RDC means more than training recruits — it means being away from your own family to help build Navy families. Chief Rivera's dedication to her role never wavered, even when it meant missing bedtime stories and family dinners.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiHome} className="w-6 h-6 text-navy-primary dark:text-gold-command" />
                <h3 className="text-2xl font-bold text-navy-primary dark:text-white font-playfair">
                  Balancing Two Worlds
                </h3>
              </div>
              <p className="text-steel-gray dark:text-white/80 font-dm-sans leading-relaxed">
                The challenge of being a mother and an RDC is immense. Every day, she showed her own children what it means to serve others, to lead with compassion, and to never give up on those who need guidance. Her family understood that their sacrifice helped thousands of young people find their way.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiStar} className="w-6 h-6 text-gold-command" />
                <h3 className="text-2xl font-bold text-navy-primary dark:text-white font-playfair">
                  Teaching Through Example
                </h3>
              </div>
              <p className="text-steel-gray dark:text-white/80 font-dm-sans leading-relaxed">
                Her children learned that service to others is one of life's greatest honors. They watched their mother pour her heart into shaping young lives, teaching them that true strength comes from lifting others up. This lesson became the foundation of their own character.
              </p>
            </div>
          </motion.div>

          {/* Family Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Main Family Photo */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Chief Rivera with her family"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-playfair italic text-lg">
                  "My greatest accomplishment isn't the divisions I've trained — it's the family that supports me through it all."
                </p>
              </div>
            </div>

            {/* Family Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-navy-secondary p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-rose-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <SafeIcon icon={FiHeart} className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy-primary dark:text-white font-playfair">
                  2
                </div>
                <div className="text-steel-gray dark:text-white/80 font-dm-sans text-sm">
                  Children
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-navy-secondary p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-gold-command rounded-full flex items-center justify-center mx-auto mb-3">
                  <SafeIcon icon={FiUsers} className="w-6 h-6 text-navy-primary" />
                </div>
                <div className="text-2xl font-bold text-navy-primary dark:text-white font-playfair">
                  16
                </div>
                <div className="text-steel-gray dark:text-white/80 font-dm-sans text-sm">
                  Years Married
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Family Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-white dark:bg-navy-secondary rounded-xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-playfair font-bold text-navy-primary dark:text-white mb-4">
              A Message from Her Family
            </h3>
            <div className="w-16 h-1 bg-gold-command mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto">
            <blockquote className="text-xl font-playfair italic text-navy-primary dark:text-white text-center mb-6 leading-relaxed">
              "We are so proud of Mom for the incredible impact she's had on so many lives. She taught us that true service means putting others before yourself, and that love can be both gentle and strong. Every recruit she trained became part of our extended family, and we're honored to share her with the Navy family."
            </blockquote>
            <div className="text-center">
              <p className="text-steel-gray dark:text-white/80 font-dm-sans">
                — The Rivera Family
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalLife;