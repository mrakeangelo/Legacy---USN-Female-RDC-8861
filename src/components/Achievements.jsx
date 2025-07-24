import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiShield, FiTrendingUp, FiStar, FiInfo, FiX } = FiIcons;

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const achievements = [
    {
      id: 1,
      name: 'Navy Achievement Medal',
      description: 'For exceptional performance as RDC',
      icon: FiAward,
      color: 'bg-gold-command',
      details: 'Awarded for outstanding performance in training over 2,800 recruits with exceptional graduation rates and minimal setbacks.',
      year: '2023',
      category: 'Medal',
    },
    {
      id: 2,
      name: 'Navy Commendation Medal',
      description: 'For sustained superior performance',
      icon: FiStar,
      color: 'bg-rose-accent',
      details: 'Recognized for sustained superior performance and innovative training methods that improved recruit confidence and readiness.',
      year: '2022',
      category: 'Medal',
    },
    {
      id: 3,
      name: 'Good Conduct Medal',
      description: 'Four consecutive awards',
      icon: FiShield,
      color: 'bg-navy-primary',
      details: 'Awarded four consecutive Good Conduct Medals, demonstrating exemplary behavior and professionalism throughout her career.',
      year: '2008-2024',
      category: 'Service',
    },
    {
      id: 4,
      name: 'RTC Training Excellence',
      description: 'Outstanding RDC Performance',
      icon: FiTrendingUp,
      color: 'bg-gold-dark',
      details: 'Recognized for achieving the highest graduation rates and lowest attrition in her training group for three consecutive years.',
      year: '2021-2023',
      category: 'Training',
    },
    {
      id: 5,
      name: 'Red Rope Recognition',
      description: 'Master Training Specialist',
      icon: FiAward,
      color: 'bg-rose-accent',
      details: 'Selected as a Red Rope, the highest honor for RDCs, recognizing exceptional leadership and training excellence.',
      year: '2021',
      category: 'Recognition',
    },
    {
      id: 6,
      name: 'National Defense Service Medal',
      description: 'Service during national emergency',
      icon: FiShield,
      color: 'bg-navy-accent',
      details: 'Awarded for service during a period of national emergency, demonstrating dedication to country and mission.',
      year: '2020',
      category: 'Service',
    },
  ];

  const rankProgression = [
    { rank: 'E-1', name: 'Seaman Recruit', year: '2008' },
    { rank: 'E-2', name: 'Seaman Apprentice', year: '2009' },
    { rank: 'E-3', name: 'Seaman', year: '2010' },
    { rank: 'E-4', name: 'Petty Officer 3rd Class', year: '2012' },
    { rank: 'E-5', name: 'Petty Officer 2nd Class', year: '2015' },
    { rank: 'E-6', name: 'Petty Officer 1st Class', year: '2018' },
    { rank: 'E-7', name: 'Chief Petty Officer', year: '2021' },
  ];

  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
  };

  const closeModal = () => {
    setSelectedAchievement(null);
  };

  return (
    <section id="legacy" className="py-20 bg-white dark:bg-navy-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-primary dark:text-white mb-4">
            Medals, Ribbons & Recognition
          </h2>
          <p className="text-xl text-steel-gray dark:text-white/80 max-w-3xl mx-auto font-dm-sans">
            A distinguished record of service, leadership, and excellence — honors earned through dedication and unwavering commitment.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-navy-primary rounded-lg shadow-lg p-6 cursor-pointer group hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(achievement)}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 rounded-full ${achievement.color} flex items-center justify-center flex-shrink-0 group-hover:animate-glow`}>
                  <SafeIcon icon={achievement.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-navy-primary dark:text-white mb-2 font-dm-sans">
                    {achievement.name}
                  </h3>
                  <p className="text-steel-gray dark:text-white/80 font-dm-sans text-sm mb-3">
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-gold-light dark:bg-navy-accent text-navy-primary dark:text-white px-2 py-1 rounded-full font-dm-sans">
                      {achievement.category}
                    </span>
                    <SafeIcon icon={FiInfo} className="w-4 h-4 text-steel-gray dark:text-white/60 group-hover:text-gold-command transition-colors duration-200" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Rank Progression */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-rose-light to-white dark:from-navy-primary dark:to-navy-secondary rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-3xl font-playfair font-bold text-navy-primary dark:text-white mb-8 text-center">
            Rank Progression
          </h3>
          
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-navy-primary to-gold-command" />
            
            {rankProgression.map((rank, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-center mb-8 last:mb-0"
              >
                {/* Rank Indicator */}
                <div className="w-16 h-16 bg-gold-command rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-navy-primary font-bold font-dm-sans text-sm">
                    {rank.rank}
                  </span>
                </div>
                
                {/* Rank Info */}
                <div className="ml-6 bg-white dark:bg-navy-primary rounded-lg p-4 shadow-md flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-navy-primary dark:text-white font-dm-sans">
                        {rank.name}
                      </h4>
                      <p className="text-steel-gray dark:text-white/80 font-dm-sans text-sm">
                        {rank.rank}
                      </p>
                    </div>
                    <span className="text-gold-command font-bold font-dm-sans">
                      {rank.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Modal */}
        <AnimatePresence>
          {selectedAchievement && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-navy-primary rounded-xl p-8 max-w-md w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-full ${selectedAchievement.color} flex items-center justify-center`}>
                    <SafeIcon icon={selectedAchievement.icon} className="w-8 h-8 text-white" />
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-navy-accent transition-colors duration-200"
                  >
                    <SafeIcon icon={FiX} className="w-6 h-6 text-steel-gray dark:text-white" />
                  </button>
                </div>
                
                <h3 className="text-2xl font-bold text-navy-primary dark:text-white mb-2 font-playfair">
                  {selectedAchievement.name}
                </h3>
                
                <p className="text-steel-gray dark:text-white/80 mb-4 font-dm-sans">
                  {selectedAchievement.details}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="bg-gold-light dark:bg-navy-accent text-navy-primary dark:text-white px-3 py-1 rounded-full text-sm font-dm-sans">
                    {selectedAchievement.category}
                  </span>
                  <span className="text-gold-command font-bold font-dm-sans">
                    {selectedAchievement.year}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Achievements;