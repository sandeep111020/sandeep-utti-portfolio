import React from 'react';
import { motion } from 'framer-motion';
import { Mail, GitBranch, LinkIcon, MapPin, Send, Heart, Zap } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sandeep.k.utti@gmail.com',
      href: 'mailto:sandeep.k.utti@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: GitBranch,
      label: 'GitHub',
      value: 'github.com/sandeep111020',
      href: 'https://github.com/sandeep111020',
      color: 'from-gray-500 to-slate-600'
    },
    {
      icon: LinkIcon,
      label: 'LinkedIn',
      value: 'Sandeep Kumar Utti',
      href: 'https://www.linkedin.com/in/sandeep-kumar-utti-3183461b8',
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India 🇮🇳',
      href: '#',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    {
      icon: '⚡',
      title: 'Full-Stack Expertise',
      description: 'Mobile (React Native, Flutter) + Backend (Spring Boot, Node.js) + DevOps'
    },
    {
      icon: '🏢',
      title: 'Enterprise Experience',
      description: '3+ years building scalable systems for Fortune 500 companies'
    },
    {
      icon: '☁️',
      title: 'Cloud Native',
      description: 'Docker, Kubernetes, AWS, Azure - production-ready deployments'
    },
    {
      icon: '🎯',
      title: 'Problem Solver',
      description: 'Hackathon winner with proven track record of innovative solutions'
    },
    {
      icon: '📈',
      title: 'Continuous Learner',
      description: 'Always exploring latest technologies and best practices'
    },
    {
      icon: '🤝',
      title: 'Team Player',
      description: 'Strong communication skills and collaborative approach'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Heart size={32} className="text-red-500" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Let's Build Something Impactful
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm always excited to work on challenging projects and collaborate with innovative teams.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Let's connect and create something extraordinary together.
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
              <Send size={28} className="text-cyan-400" />
              Get In Touch
            </h3>

            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-20 blur-2xl rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative flex items-center gap-4 p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-opacity-100 transition-all duration-300 overflow-hidden">
                  {/* Animated border */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
                  ></motion.div>

                  <div className={`p-4 bg-gradient-to-r ${info.color} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10`}>
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div className="relative z-10 flex-1">
                    <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider">{info.label}</div>
                    <div className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-300 to-blue-400 transition-all duration-300 font-semibold text-lg">
                      {info.value}
                    </div>
                  </div>
                  <div className="relative z-10 text-gray-500 group-hover:text-cyan-400 transition-colors">
                    →
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Why Work With Me */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
              <Zap size={28} className="text-yellow-400" />
              Why Work With Me?
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-cyan-500/50 transition-all duration-300"
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-5 blur-xl rounded-xl transition-opacity duration-300"></div>

                  <div className="relative z-10 flex items-start gap-4">
                    <div className="text-2xl flex-shrink-0 mt-1">{benefit.icon}</div>
                    <div className="flex-1">
                      <div className="font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {benefit.title}
                      </div>
                      <div className="text-gray-400 text-sm mt-1">
                        {benefit.description}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-3xl rounded-3xl"></div>

          <div className="relative bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border-2 border-cyan-500/30 rounded-3xl p-12 text-center overflow-hidden">
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-5"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            ></motion.div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Something Amazing?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Whether you have a specific project in mind or want to explore opportunities, I'm here to help bring your vision to life.
              </p>

              <motion.a
                href="mailto:sandeep.k.utti@gmail.com"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <Mail size={20} />
                Send Me an Email
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </div>

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              animate={{
                opacity: [0, 0.1, 0],
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
              }}
            ></motion.div>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-center text-gray-500 text-sm mt-12"
        >
          ✨ Powered by passion, creativity, and a commitment to excellence
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;