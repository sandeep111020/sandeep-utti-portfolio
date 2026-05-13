import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, Mail, ArrowRight } from 'lucide-react';
// import anime from 'anime';

const Hero = () => {
  const glowRef = useRef(null);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Floating glow effect
    if (glowRef.current) {
      // anime({
      //   targets: glowRef.current,
      //   rotate: 360,
      //   duration: 20000,
      //   loop: true,
      //   easing: 'linear'
      // });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.15),transparent_70%)]"></div>
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Avatar Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="relative inline-block">
              {/* Rotating glow ring */}
              <div
                ref={glowRef}
                className="absolute inset-0 -m-6 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-50 blur-md"
              ></div>
              
              {/* Avatar container */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1 shadow-2xl shadow-cyan-500/50"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                  <img
                    src="/avatar.jpg"
                    alt="Sandeep Kumar Utti"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Name with glow */}
            <motion.h2
              variants={itemVariants}
              className="mt-8 text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-lg"
            >
              Sandeep Kumar Utti
            </motion.h2>
          </motion.div>

          {/* Main Headline with Neon Glow */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="relative inline-block">
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-30 blur-2xl"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.span>
                <span className="relative bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Building scalable mobile & backend systems
                </span>
              </span>
              <br />
              <span className="text-gray-300">for real-world problems</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            Full-Stack Developer specializing in React Native, Flutter, Spring Boot, and cloud-native architectures.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
              Passionate about creating impactful solutions for Fortune 500 companies.
            </span>
          </motion.p>

          {/* Highlight Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {[
              { label: '3+ Years Experience', color: 'from-cyan-500 to-blue-500' },
              { label: 'Fortune 500 Project', color: 'from-blue-500 to-purple-500' },
              { label: 'SIH Winner', color: 'from-purple-500 to-pink-500' }
            ].map((badge, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`px-6 py-3 bg-gradient-to-r ${badge.color} bg-opacity-10 border border-opacity-30 backdrop-blur-sm rounded-full font-semibold text-sm group cursor-default relative overflow-hidden`}
              >
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                  ✨ {badge.label}
                </span>
                <div className={`absolute inset-0 bg-gradient-to-r ${badge.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.a
              href="https://drive.google.com/file/d/1vVEkdDJJCzKUaKfyIHU0RK5Lisk12UGh/view?usp=sharing"
              download
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </div>
            </motion.a>

            <motion.button
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-lg font-semibold text-cyan-400 overflow-hidden transition-all duration-300 flex items-center gap-2 justify-center border-2 border-cyan-500/50"
            >
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center gap-2">
                <Eye size={20} />
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-lg font-semibold text-blue-400 overflow-hidden transition-all duration-300 flex items-center gap-2 justify-center border-2 border-blue-500/50"
            >
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center gap-2">
                <Mail size={20} />
                Let's Connect
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;