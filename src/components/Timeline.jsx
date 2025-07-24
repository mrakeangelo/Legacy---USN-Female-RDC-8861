import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiAward, FiUsers, FiTrendingUp } = FiIcons;

const Timeline = () => {
  const timelineEvents = [
    {
      year: '2008',
      title: 'Enlisted in the U.S. Navy',
      description: 'Began her journey at Great Lakes Naval Training Center as a recruit',
      icon: FiCalendar,
      color: 'bg-navy-primary',
    },
    {
      year: '2015',
      title: 'Advanced to Petty Officer First Class',
      description: 'Demonstrated exceptional leadership and technical expertise',
      icon: FiTrendingUp,
      color: 'bg-gold-command',
    },
    {
      year: '2018',
      title: 'RDC School Graduation',
      description: 'Completed rigorous training to become a Recruit Division Commander',
      icon: FiAward,
      color: 'bg-rose-accent',
    },
    {
      year: '2019',
      title: 'First Division Trained',
      description: 'Division 001 - "The beginning of a legacy"',
      icon: FiUsers,
      color: 'bg-navy-accent',
    },
    {
      year: '2021',
      title: 'Promoted to Chief Petty Officer',
      description: 'Achieved the prestigious rank of Chief, joining the Chiefs Mess',
      icon: FiAward,
      color: 'bg-gold-command',
    },
    {
      year: '2024',
      title: '47 Divisions Completed',
      description: 'Trained over 2,800 recruits who became proud U.S. Navy Sailors',
      icon: FiUsers,
      color: 'bg-navy-primary',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="timeline" className="py-20 bg-white dark:bg-navy-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-primary dark:text-white mb-4">
            Career Timeline
          </h2>
          <p className="text-xl text-steel-gray dark:text-white/80 max-w-3xl mx-auto font-dm-sans">
            A journey of dedication, leadership, and transformation — from recruit to the leader who shapes tomorrow's Sailors.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-navy-primary to-gold-command" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                <div className={`w-16 h-16 rounded-full ${event.color} flex items-center justify-center shadow-lg`}>
                  <SafeIcon icon={event.icon} className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-navy-primary p-6 rounded-lg shadow-lg border border-gray-100 dark:border-navy-accent"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-2xl font-bold text-gold-command font-playfair">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-primary dark:text-white mb-2 font-dm-sans">
                    {event.title}
                  </h3>
                  <p className="text-steel-gray dark:text-white/80 font-dm-sans">
                    {event.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: '47', label: 'Divisions Trained', icon: FiUsers },
            { number: '2,800+', label: 'Sailors Graduated', icon: FiAward },
            { number: '16', label: 'Years of Service', icon: FiCalendar },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-rose-light to-white dark:from-navy-primary dark:to-navy-secondary rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-gold-command rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={stat.icon} className="w-8 h-8 text-navy-primary" />
              </div>
              <div className="text-4xl font-bold text-navy-primary dark:text-white font-playfair mb-2">
                {stat.number}
              </div>
              <div className="text-steel-gray dark:text-white/80 font-dm-sans">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;