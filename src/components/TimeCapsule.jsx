import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiClock, FiMail, FiHeart, FiStar } = FiIcons;

const TimeCapsule = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);

  const timeCapsulesLetters = [
    {
      id: 1,
      title: 'To My Future Self',
      description: 'A letter to be opened on retirement day',
      icon: FiMail,
      unlockDate: '2030-01-01',
      isLocked: true,
      preview: 'Dear Future Me, I hope when you read this, you remember why you became an RDC...',
      color: 'from-gold-command to-gold-dark',
    },
    {
      id: 2,
      title: 'To My Children',
      description: 'Words of wisdom for when they become adults',
      icon: FiHeart,
      unlockDate: '2025-12-25',
      isLocked: true,
      preview: 'My dearest children, by the time you read this, you\'ll understand the sacrifices...',
      color: 'from-rose-accent to-rose-soft',
    },
    {
      id: 3,
      title: 'To Division 047',
      description: 'Final message to her last division',
      icon: FiStar,
      unlockDate: '2024-12-31',
      isLocked: false,
      preview: 'To the Sailors of Division 047, you were my final division, but not my final impact...',
      fullLetter: `To the Sailors of Division 047,

You were my final division, but not my final impact. Each of you carries a piece of what I've learned over 16 years of service, and I hope you'll carry those lessons forward.

Remember that being a Sailor isn't just about wearing the uniform — it's about the character you build, the integrity you display, and the way you treat others. The Navy gave me a family of thousands, and you are part of that family forever.

When you face challenges in your career, remember that you have the strength to overcome them. You've already proven that by making it through boot camp. That strength doesn't leave you — it only grows stronger with time.

Take care of each other. Take care of the Navy. Take care of yourselves.

Fair winds and following seas,
Chief Rivera`,
      color: 'from-navy-primary to-navy-accent',
    },
  ];

  const calculateTimeLeft = (unlockDate) => {
    const now = new Date().getTime();
    const unlock = new Date(unlockDate).getTime();
    const difference = unlock - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      
      return { days, hours, minutes, isUnlocked: false };
    }
    
    return { days: 0, hours: 0, minutes: 0, isUnlocked: true };
  };

  const openLetter = (letter) => {
    if (!letter.isLocked) {
      setSelectedLetter(letter);
    }
  };

  const closeLetter = () => {
    setSelectedLetter(null);
  };

  return (
    <section className="py-20 bg-white dark:bg-navy-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-primary dark:text-white mb-4">
            Time Capsule Letters
          </h2>
          <p className="text-xl text-steel-gray dark:text-white/80 max-w-3xl mx-auto font-dm-sans">
            Sealed messages from the heart — words of wisdom, love, and reflection preserved for future moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {timeCapsulesLetters.map((letter, index) => {
            const timeLeft = calculateTimeLeft(letter.unlockDate);
            const canOpen = !letter.isLocked || timeLeft.isUnlocked;

            return (
              <motion.div
                key={letter.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: canOpen ? 1.05 : 1.02 }}
                className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${
                  canOpen ? 'hover:shadow-2xl' : 'opacity-75'
                }`}
                onClick={() => openLetter(letter)}
              >
                <div className={`bg-gradient-to-br ${letter.color} p-8 text-white min-h-80 flex flex-col justify-between`}>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <SafeIcon icon={letter.icon} className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-playfair mb-2">
                      {letter.title}
                    </h3>
                    <p className="text-white/80 font-dm-sans text-sm">
                      {letter.description}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex items-center justify-center">
                    {letter.isLocked && !timeLeft.isUnlocked ? (
                      <div className="text-center">
                        <SafeIcon icon={FiLock} className="w-12 h-12 text-white/60 mx-auto mb-4" />
                        <div className="text-white/80 font-dm-sans text-sm mb-2">
                          Unlocks in:
                        </div>
                        <div className="text-white font-bold font-dm-sans">
                          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
                        </div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <p className="text-white/90 font-dm-sans italic text-sm leading-relaxed">
                          "{letter.preview}"
                        </p>
                        <div className="mt-4 text-white/80 font-dm-sans text-xs">
                          {canOpen ? 'Click to read' : 'Locked'}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 text-white/60 text-sm font-dm-sans">
                      <SafeIcon icon={FiClock} className="w-4 h-4" />
                      <span>
                        {letter.isLocked ? `Unlock: ${new Date(letter.unlockDate).toLocaleDateString()}` : 'Available Now'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-white/20 rounded-full animate-pulse" />
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-1000" />
              </motion.div>
            );
          })}
        </div>

        {/* Letter Modal */}
        {selectedLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={closeLetter}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-navy-primary rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${selectedLetter.color} rounded-full flex items-center justify-center`}>
                    <SafeIcon icon={selectedLetter.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy-primary dark:text-white font-playfair">
                      {selectedLetter.title}
                    </h3>
                    <p className="text-steel-gray dark:text-white/80 font-dm-sans">
                      {selectedLetter.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeLetter}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-navy-accent transition-colors duration-200"
                >
                  <SafeIcon icon={FiLock} className="w-6 h-6 text-steel-gray dark:text-white" />
                </button>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-rose-light dark:bg-navy-secondary p-6 rounded-lg">
                  <pre className="text-navy-primary dark:text-white font-dm-sans whitespace-pre-wrap leading-relaxed">
                    {selectedLetter.fullLetter}
                  </pre>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-steel-gray dark:text-white/80 font-dm-sans text-sm">
                  This letter was opened on {new Date().toLocaleDateString()}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TimeCapsule;