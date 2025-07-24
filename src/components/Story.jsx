import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiShield, FiTarget, FiStar } = FiIcons;

const Story = () => {
  return (
    <section id="story" className="py-20 bg-rose-light dark:bg-navy-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-primary dark:text-white mb-4">
            Why I Became an RDC
          </h2>
          <p className="text-xl text-steel-gray dark:text-white/80 max-w-3xl mx-auto font-dm-sans">
            The calling to transform civilians into Sailors — a mission of heart, discipline, and unwavering belief.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Chief Rivera with her division"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-dm-sans italic">
                  "Every recruit has potential. My job is to help them find it."
                </p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold-command rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-rose-accent rounded-full animate-pulse delay-1000" />
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiHeart} className="w-6 h-6 text-rose-accent" />
                <h3 className="text-xl font-bold text-navy-primary dark:text-white font-dm-sans">
                  The Call to Lead
                </h3>
              </div>
              <p className="text-steel-gray dark:text-white/80 font-dm-sans leading-relaxed">
                I didn't choose to become an RDC — it chose me. After years of watching young people struggle to find their direction, I knew I had to be part of the solution. The Navy gave me structure, purpose, and pride. I wanted to give that same gift to others.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiShield} className="w-6 h-6 text-navy-primary dark:text-gold-command" />
                <h3 className="text-xl font-bold text-navy-primary dark:text-white font-dm-sans">
                  Transformation Through Discipline
                </h3>
              </div>
              <p className="text-steel-gray dark:text-white/80 font-dm-sans leading-relaxed">
                People think being an RDC is about being tough. It's not. It's about being fair, consistent, and believing in someone even when they don't believe in themselves. Every harsh word, every extra push-up, every moment of correction — it all comes from a place of love and belief in their potential.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiTarget} className="w-6 h-6 text-gold-command" />
                <h3 className="text-xl font-bold text-navy-primary dark:text-white font-dm-sans">
                  Seeing Them Become Sailors
                </h3>
              </div>
              <p className="text-steel-gray dark:text-white/80 font-dm-sans leading-relaxed">
                There's no greater honor than watching a scared 18-year-old transform into a confident, capable Sailor. The moment they earn their Navy ball cap, when they stand tall with pride — that's when you know every sleepless night, every difficult conversation, every moment of doubt was worth it.
              </p>
            </div>

            {/* Quote Box */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-navy-secondary p-6 rounded-lg shadow-lg border-l-4 border-gold-command"
            >
              <blockquote className="text-lg font-playfair italic text-navy-primary dark:text-white mb-2">
                "I don't just train Sailors. I help young people discover who they're meant to be. That's not just a job — that's a calling."
              </blockquote>
              <div className="text-steel-gray dark:text-white/70 font-dm-sans">
                — Chief Rivera
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: FiHeart,
              title: 'Compassionate Leadership',
              description: 'Leading with both strength and understanding, knowing when to push and when to support.',
            },
            {
              icon: FiShield,
              title: 'Unwavering Standards',
              description: 'Never compromising on excellence because our Sailors deserve the best training.',
            },
            {
              icon: FiStar,
              title: 'Transformative Impact',
              description: 'Believing in the potential of every recruit and helping them achieve greatness.',
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white dark:bg-navy-secondary rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold-command to-gold-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={value.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-primary dark:text-white mb-3 font-dm-sans">
                {value.title}
              </h3>
              <p className="text-steel-gray dark:text-white/80 font-dm-sans">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Story;