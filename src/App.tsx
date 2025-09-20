import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { AnimatedBackground } from './components/AnimatedBackground';
import { HeroSection } from './components/HeroSection';
import { RegistrationForm } from './components/RegistrationForm';
import AdminDashboard from './components/AdminDashboard';
import DataViewer from './components/DataViewer';
import { motion } from 'motion/react';
import { Sparkles, Star, Zap, Settings, Home, Database } from 'lucide-react';
import { Button } from './components/ui/button';

const MainPage = () => {
  return (
    <>
      {/* Hero section */}
      <HeroSection />
      
      {/* Registration section */}
      <div className="relative z-20 px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              className="text-5xl md:text-6xl mb-8"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
            >
              <span
                className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                style={{ backgroundSize: '200% 200%' }}
              >
                Start Your Journey Today
              </span>
            </motion.h2>
            
            <motion.p
              className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8"
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              Join hundreds of students and professionals who are already part of our thriving tech community. 
              Register now for exclusive access to workshops, resources, and networking opportunities.
            </motion.p>
            
            {/* Decorative elements */}
            <div className="flex justify-center items-center gap-6 mb-12">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-8 h-8 text-yellow-400" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-10 h-10 text-violet-400" />
              </motion.div>
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-8 h-8 text-cyan-400" />
              </motion.div>
            </div>
          </motion.div>
          
          <RegistrationForm />
        </div>
      </div>
    </>
  );
};

// Navigation removed - clean main website with no admin/data access buttons

export default function App() {
  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden">
        {/* Enhanced animated background */}
        <AnimatedBackground />
        
        {/* Navigation removed for clean main website */}
        
        {/* Main content */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={
              <>
                <MainPage />
                {/* Enhanced Footer */}
                <footer className="relative z-20 py-16 px-4 border-t border-white/20">
                  <div className="max-w-6xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="text-center mb-12"
                    >
                      <motion.h3
                        className="text-3xl md:text-4xl mb-4"
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                        }}
                      >
                        <span
                          className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                          style={{ backgroundSize: '200% 200%' }}
                        >
                          Pixel Plus Tech Community
                        </span>
                      </motion.h3>
                      <motion.p
                        className="text-white/80 text-lg"
                        animate={{
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                      >
                        Empowering the next generation of tech innovators
                      </motion.p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                      >
                        <h4 className="text-white mb-4 text-xl bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">What We Offer</h4>
                        <ul className="text-white/80 space-y-2">
                          <li className="hover:text-violet-400 transition-colors duration-300">🔧 Interactive Workshops</li>
                          <li className="hover:text-cyan-400 transition-colors duration-300">💻 Coding Bootcamps</li>
                          <li className="hover:text-pink-400 transition-colors duration-300">🎤 Tech Talks & Seminars</li>
                          <li className="hover:text-emerald-400 transition-colors duration-300">🤝 Project Collaborations</li>
                        </ul>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <h4 className="text-white mb-4 text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technologies</h4>
                        <ul className="text-white/80 space-y-2">
                          <li className="hover:text-blue-400 transition-colors duration-300">⚛️ React & Next.js</li>
                          <li className="hover:text-yellow-400 transition-colors duration-300">🐍 Python & AI/ML</li>
                          <li className="hover:text-purple-400 transition-colors duration-300">🔗 Web3 & Blockchain</li>
                          <li className="hover:text-green-400 transition-colors duration-300">📱 Mobile Development</li>
                        </ul>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-center md:text-right"
                      >
                        <h4 className="text-white mb-4 text-xl bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">Community Benefits</h4>
                        <ul className="text-white/80 space-y-2">
                          <li className="hover:text-pink-400 transition-colors duration-300">🌐 Networking Opportunities</li>
                          <li className="hover:text-orange-400 transition-colors duration-300">📈 Career Guidance</li>
                          <li className="hover:text-teal-400 transition-colors duration-300">🔓 Open Source Contributions</li>
                          <li className="hover:text-indigo-400 transition-colors duration-300">🏢 Industry Connections</li>
                        </ul>
                      </motion.div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="text-center pt-8 border-t border-white/20"
                    >
                      <motion.div
                        className="text-white/70 text-sm mb-4"
                        animate={{
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                      >
                        © 2024 Pixel Plus Tech Community. All rights reserved.
                      </motion.div>
                      
                      <motion.div
                        className="flex justify-center gap-4"
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                      >
                        <span className="text-2xl">🚀</span>
                        <span className="text-2xl">💫</span>
                        <span className="text-2xl">⭐</span>
                      </motion.div>
                    </motion.div>
                  </div>
                </footer>
              </>
            } />
          </Routes>
        </div>

      </div>

      {/* Enhanced Toast notifications */}
      <Toaster 
        position="top-right"
        theme="dark"
        richColors
        expand={true}
        toastOptions={{
          style: {
            background: 'rgba(15, 23, 42, 0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
          },
        }}
      />
    </Router>
  );
}