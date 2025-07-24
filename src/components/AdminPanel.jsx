import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiUser, FiEye, FiEyeOff, FiHome, FiUpload, FiEdit, FiMessageSquare, FiClock } = FiIcons;

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple demo login (in real app, use proper authentication)
    if (loginData.email === 'admin@navy.mil' && loginData.password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Use admin@navy.mil / admin123');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ email: '', password: '' });
  };

  const LoginForm = () => (
    <div className="min-h-screen bg-navy-primary flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl p-8 shadow-2xl max-w-md w-full"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gold-command rounded-full flex items-center justify-center mx-auto mb-4">
            <SafeIcon icon={FiLock} className="w-8 h-8 text-navy-primary" />
          </div>
          <h2 className="text-2xl font-bold text-navy-primary font-playfair">
            Admin Access
          </h2>
          <p className="text-steel-gray font-dm-sans mt-2">
            Secure access to tribute management
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-navy-primary font-dm-sans font-medium mb-2">
              Email
            </label>
            <div className="relative">
              <SafeIcon icon={FiUser} className="absolute left-3 top-3 w-5 h-5 text-steel-gray" />
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-command focus:border-transparent font-dm-sans"
                placeholder="Enter admin email"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-navy-primary font-dm-sans font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <SafeIcon icon={FiLock} className="absolute left-3 top-3 w-5 h-5 text-steel-gray" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={loginData.password}
                onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-command focus:border-transparent font-dm-sans"
                placeholder="Enter password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-steel-gray hover:text-navy-primary"
              >
                <SafeIcon icon={showPassword ? FiEyeOff : FiEye} className="w-5 h-5" />
              </button>
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gold-command hover:bg-gold-dark text-navy-primary font-dm-sans font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Access Admin Panel
          </motion.button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-steel-gray hover:text-navy-primary font-dm-sans text-sm flex items-center justify-center space-x-2"
          >
            <SafeIcon icon={FiHome} className="w-4 h-4" />
            <span>Back to Tribute Site</span>
          </button>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-steel-gray font-dm-sans text-center">
            Demo Credentials:<br />
            Email: admin@navy.mil<br />
            Password: admin123
          </p>
        </div>
      </motion.div>
    </div>
  );

  const AdminDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy-primary text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold font-playfair">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/')}
              className="bg-gold-command text-navy-primary px-4 py-2 rounded-lg font-dm-sans font-medium hover:bg-gold-dark transition-colors duration-200"
            >
              View Site
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg font-dm-sans font-medium hover:bg-red-700 transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: FiHome },
              { id: 'gallery', label: 'Gallery', icon: FiUpload },
              { id: 'story', label: 'Story', icon: FiEdit },
              { id: 'testimonials', label: 'Testimonials', icon: FiMessageSquare },
              { id: 'timecapsule', label: 'Time Capsule', icon: FiClock },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-4 font-dm-sans font-medium border-b-2 transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-gold-command text-gold-command'
                    : 'border-transparent text-steel-gray hover:text-navy-primary'
                }`}
              >
                <SafeIcon icon={tab.icon} className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto p-8">
        {activeTab === 'dashboard' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Total Divisions', value: '47', icon: FiUser, color: 'bg-blue-500' },
                { title: 'Sailors Trained', value: '2,800+', icon: FiUser, color: 'bg-green-500' },
                { title: 'Testimonials', value: '156', icon: FiMessageSquare, color: 'bg-purple-500' },
                { title: 'Gallery Photos', value: '89', icon: FiUpload, color: 'bg-orange-500' },
              ].map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <div className={`${stat.color} p-3 rounded-full text-white mr-4`}>
                      <SafeIcon icon={stat.icon} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy-primary font-playfair">{stat.value}</h3>
                      <p className="text-steel-gray font-dm-sans">{stat.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-navy-primary font-playfair mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <SafeIcon icon={FiMessageSquare} className="w-5 h-5 text-blue-500" />
                  <span className="font-dm-sans text-steel-gray">New testimonial submitted by Seaman Johnson</span>
                  <span className="text-sm text-steel-gray">2 hours ago</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <SafeIcon icon={FiUpload} className="w-5 h-5 text-green-500" />
                  <span className="font-dm-sans text-steel-gray">Gallery photo uploaded</span>
                  <span className="text-sm text-steel-gray">1 day ago</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <SafeIcon icon={FiEdit} className="w-5 h-5 text-purple-500" />
                  <span className="font-dm-sans text-steel-gray">Story section updated</span>
                  <span className="text-sm text-steel-gray">3 days ago</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'gallery' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-navy-primary font-playfair mb-4">Gallery Management</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <SafeIcon icon={FiUpload} className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-steel-gray font-dm-sans">Drag and drop photos here or click to browse</p>
                <button className="mt-4 bg-gold-command text-navy-primary px-6 py-2 rounded-lg font-dm-sans font-medium hover:bg-gold-dark transition-colors duration-200">
                  Choose Files
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'story' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-navy-primary font-playfair mb-4">Edit Story Content</h3>
              <textarea
                rows="10"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-command focus:border-transparent font-dm-sans"
                placeholder="Edit the story content here..."
                defaultValue="I didn't choose to become an RDC — it chose me. After years of watching young people struggle to find their direction, I knew I had to be part of the solution..."
              />
              <div className="mt-4 flex justify-end">
                <button className="bg-gold-command text-navy-primary px-6 py-2 rounded-lg font-dm-sans font-medium hover:bg-gold-dark transition-colors duration-200">
                  Save Changes
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'testimonials' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-navy-primary font-playfair mb-4">Testimonial Moderation</h3>
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-navy-primary font-dm-sans">Seaman Johnson</h4>
                    <div className="flex space-x-2">
                      <button className="bg-green-500 text-white px-3 py-1 rounded text-sm font-dm-sans">Approve</button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded text-sm font-dm-sans">Reject</button>
                    </div>
                  </div>
                  <p className="text-steel-gray font-dm-sans text-sm">
                    "Chief Rivera changed my life. I came to boot camp scared and unsure..."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'timecapsule' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-navy-primary font-playfair mb-4">Time Capsule Control</h3>
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-navy-primary font-dm-sans">To Division 047</h4>
                      <p className="text-steel-gray font-dm-sans text-sm">Unlock Date: Dec 31, 2024</p>
                    </div>
                    <button className="bg-gold-command text-navy-primary px-4 py-2 rounded-lg font-dm-sans font-medium hover:bg-gold-dark transition-colors duration-200">
                      Unlock Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );

  return isLoggedIn ? <AdminDashboard /> : <LoginForm />;
};

export default AdminPanel;