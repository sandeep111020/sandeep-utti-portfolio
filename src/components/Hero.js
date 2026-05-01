import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_70%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
            <img
              src="/avatar.jpg"
              alt="Sandeep Kumar Utti"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Sandeep Kumar Utti
          </motion.h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Building scalable mobile & backend systems
          </span>
          <br />
          <span className="text-gray-300">for real-world problems</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto"
        >
          Full-Stack Developer specializing in React Native, Flutter, Spring Boot, and cloud-native architectures.
          Passionate about creating impactful solutions for Fortune 500 companies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
            3+ Years Experience
          </span>
          <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
            Fortune 500 Project
          </span>
          <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
            SIH Winner
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 border border-cyan-500/50 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-2"
          >
            <Eye size={20} />
            View Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border border-blue-500/50 rounded-lg font-semibold text-blue-400 hover:bg-blue-500/10 transition-all duration-300 flex items-center gap-2"
          >
            <Mail size={20} />
            Contact Me
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;