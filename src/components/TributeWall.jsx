import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiSend, FiUser, FiMail, FiMessageCircle } = FiIcons;

const TributeWall = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    relationship: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const existingTributes = [
    {
      id: 1,
      name: 'Captain Johnson',
      relationship: 'Commanding Officer',
      message: 'Chief Rivera exemplifies everything we want in a leader. Her dedication to our recruits and her unwavering standards have made her one of our most respected RDCs.',
      timestamp: '2024-01-15',
    },
    {
      id: 2,
      name: 'Sarah Martinez',
      relationship: 'Navy Spouse',
      message: 'As a fellow Navy spouse, I admire Chief Rivera\'s ability to balance her demanding role with being a loving mother. She\'s an inspiration to all of us.',
      timestamp: '2024-01-12',
    },
    {
      id: 3,
      name: 'Petty Officer Davis',
      relationship: 'Former Recruit',
      message: 'Chief Rivera changed my life. I was lost when I arrived at boot camp, but she saw potential in me and never gave up. I\'m now a proud Sailor because of her.',
      timestamp: '2024-01-10',
    },
    {
      id: 4,
      name: 'Master Chief Williams',
      relationship: 'Fellow RDC',
      message: 'Working alongside Chief Rivera has been an honor. She brings out the best in everyone - recruits and fellow staff alike. Her legacy will live on in every Sailor she\'s trained.',
      timestamp: '2024-01-08',
    },
    {
      id: 5,
      name: 'Jennifer Rivera',
      relationship: 'Sister',
      message: 'I\'ve watched my sister pour her heart into the Navy and into every recruit she\'s trained. She\'s not just a great RDC - she\'s a great person who makes everyone around her better.',
      timestamp: '2024-01-05',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', relationship: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

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
            Public Tribute Wall
          </h2>
          <p className="text-xl text-steel-gray dark:text-white/80 max-w-3xl mx-auto font-dm-sans">
            Share your memories, gratitude, and stories about Chief Rivera's impact on your life or the lives of others.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tribute Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-navy-secondary rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gold-command rounded-full flex items-center justify-center">
                <SafeIcon icon={FiHeart} className="w-6 h-6 text-navy-primary" />
              </div>
              <h3 className="text-2xl font-bold text-navy-primary dark:text-white font-playfair">
                Leave a Tribute
              </h3>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiSend} className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-navy-primary dark:text-white mb-2 font-dm-sans">
                  Thank You!
                </h4>
                <p className="text-steel-gray dark:text-white/80 font-dm-sans">
                  Your tribute has been submitted and will be reviewed before being added to the wall.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-navy-primary dark:text-white font-dm-sans font-medium mb-2">
                      Your Name *
                    </label>
                    <div className="relative">
                      <SafeIcon icon={FiUser} className="absolute left-3 top-3 w-5 h-5 text-steel-gray dark:text-white/60" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-navy-accent rounded-lg focus:ring-2 focus:ring-gold-command focus:border-transparent bg-white dark:bg-navy-primary text-navy-primary dark:text-white font-dm-sans"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-navy-primary dark:text-white font-dm-sans font-medium mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <SafeIcon icon={FiMail} className="absolute left-3 top-3 w-5 h-5 text-steel-gray dark:text-white/60" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-navy-accent rounded-lg focus:ring-2 focus:ring-gold-command focus:border-transparent bg-white dark:bg-navy-primary text-navy-primary dark:text-white font-dm-sans"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-navy-primary dark:text-white font-dm-sans font-medium mb-2">
                    Relationship to Chief Rivera
                  </label>
                  <select
                    name="relationship"
                    value={formData.relationship}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-navy-accent rounded-lg focus:ring-2 focus:ring-gold-command focus:border-transparent bg-white dark:bg-navy-primary text-navy-primary dark:text-white font-dm-sans"
                  >
                    <option value="">Select relationship</option>
                    <option value="Former Recruit">Former Recruit</option>
                    <option value="Fellow RDC">Fellow RDC</option>
                    <option value="Navy Family">Navy Family</option>
                    <option value="Friend">Friend</option>
                    <option value="Family Member">Family Member</option>
                    <option value="Shipmate">Shipmate</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-navy-primary dark:text-white font-dm-sans font-medium mb-2">
                    Your Message *
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiMessageCircle} className="absolute left-3 top-3 w-5 h-5 text-steel-gray dark:text-white/60" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-navy-accent rounded-lg focus:ring-2 focus:ring-gold-command focus:border-transparent bg-white dark:bg-navy-primary text-navy-primary dark:text-white font-dm-sans resize-none"
                      placeholder="Share your tribute, memory, or message..."
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gold-command hover:bg-gold-dark text-navy-primary font-dm-sans font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-navy-primary" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <SafeIcon icon={FiSend} className="w-5 h-5" />
                      <span>Submit Tribute</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Existing Tributes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-rose-accent rounded-full flex items-center justify-center">
                <SafeIcon icon={FiMessageCircle} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-primary dark:text-white font-playfair">
                Recent Tributes
              </h3>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {existingTributes.map((tribute, index) => (
                <motion.div
                  key={tribute.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-navy-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold-command to-gold-dark rounded-full flex items-center justify-center flex-shrink-0">
                      <SafeIcon icon={FiHeart} className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-navy-primary dark:text-white font-dm-sans">
                          {tribute.name}
                        </h4>
                        <span className="text-xs text-steel-gray dark:text-white/60 font-dm-sans">
                          {new Date(tribute.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-gold-command font-dm-sans mb-2">
                        {tribute.relationship}
                      </p>
                      <p className="text-steel-gray dark:text-white/80 font-dm-sans text-sm leading-relaxed">
                        {tribute.message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TributeWall;