import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiQuote, FiHeart, FiStar, FiChevronLeft, FiChevronRight } = FiIcons;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Seaman Recruit Johnson',
      division: 'Division 047',
      year: '2024',
      message: 'Chief Rivera changed my life. I came to boot camp scared and unsure of myself. She saw something in me that I didn\'t even know existed. Her tough love and unwavering belief pushed me to become the Sailor I am today.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 2,
      name: 'Petty Officer 3rd Class Martinez',
      division: 'Division 032',
      year: '2023',
      message: 'I wanted to quit so many times during boot camp. Chief Rivera never let me give up on myself. She taught me that strength isn\'t about being fearless - it\'s about pushing through the fear. I\'ll carry her lessons with me forever.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b25d0e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 3,
      name: 'Seaman Williams',
      division: 'Division 023',
      year: '2022',
      message: 'Chief Rivera was more than an RDC - she was a mentor, a mother figure, and a leader all rolled into one. She taught us that being a Sailor means more than wearing the uniform. It means carrying yourself with pride and integrity.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 4,
      name: 'Petty Officer 2nd Class Thompson',
      division: 'Division 018',
      year: '2021',
      message: 'Years later, I still hear Chief Rivera\'s voice in my head when I face challenges. She didn\'t just train us to pass boot camp - she trained us for life. Her impact goes far beyond those 10 weeks at Great Lakes.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 5,
      name: 'Seaman Recruit Davis',
      division: 'Division 041',
      year: '2024',
      message: 'Chief Rivera saw potential in me when I couldn\'t see it in myself. She pushed me harder than anyone ever had, but it came from a place of love and belief. I graduated because she never gave up on me.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-rose-light dark:bg-navy-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-primary dark:text-white mb-4">
            Letters from the Recruits
          </h2>
          <p className="text-xl text-steel-gray dark:text-white/80 max-w-3xl mx-auto font-dm-sans">
            The voices of those whose lives were forever changed — testimonies of transformation, growth, and gratitude.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-navy-secondary rounded-2xl shadow-2xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-gold-command"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-command rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiStar} className="w-4 h-4 text-navy-primary" />
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-4">
                    <SafeIcon icon={FiQuote} className="w-8 h-8 text-gold-command mx-auto md:mx-0" />
                  </div>
                  
                  <blockquote className="text-lg md:text-xl font-dm-sans text-steel-gray dark:text-white/90 mb-6 leading-relaxed">
                    {testimonials[currentIndex].message}
                  </blockquote>

                  <div className="space-y-2">
                    <div className="font-bold text-navy-primary dark:text-white font-dm-sans">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-steel-gray dark:text-white/70 font-dm-sans">
                      {testimonials[currentIndex].division} • {testimonials[currentIndex].year}
                    </div>
                    
                    {/* Star Rating */}
                    <div className="flex justify-center md:justify-start space-x-1 mt-3">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-gold-command fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-navy-secondary rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 group"
          >
            <SafeIcon icon={FiChevronLeft} className="w-6 h-6 text-navy-primary dark:text-white group-hover:text-gold-command transition-colors duration-200" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-navy-secondary rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 group"
          >
            <SafeIcon icon={FiChevronRight} className="w-6 h-6 text-navy-primary dark:text-white group-hover:text-gold-command transition-colors duration-200" />
          </button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-gold-command scale-125'
                  : 'bg-gray-300 dark:bg-navy-accent hover:bg-gray-400 dark:hover:bg-navy-primary'
              }`}
            />
          ))}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: FiHeart, number: '2,800+', label: 'Lives Changed' },
            { icon: FiStar, number: '47', label: 'Divisions Graduated' },
            { icon: FiQuote, number: '500+', label: 'Thank You Letters' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white dark:bg-navy-secondary rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold-command to-gold-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={stat.icon} className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-navy-primary dark:text-white font-playfair mb-2">
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

export default Testimonials;