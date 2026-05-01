import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, LinkIcon, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sandeep.k.utti@gmail.com',
      href: 'mailto:sandeep.k.utti@gmail.com'
    },
    {
      icon: GitBranch,
      label: 'GitHub',
      value: 'github.com/sandeep111020',
      href: 'https://github.com/sandeep111020'
    },
    {
      icon: LinkIcon,
      label: 'LinkedIn',
      value: 'Sandeep Kumar Utti',
      href: 'https://www.linkedin.com/in/sandeep-kumar-utti-3183461b8'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Build Something Impactful
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            I'm always excited to work on challenging projects and collaborate with innovative teams.
            Let's connect and discuss how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>

            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg group-hover:shadow-lg transition-shadow duration-300">
                  <info.icon size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm font-medium">{info.label}</div>
                  <div className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {info.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Why Work With Me?</h3>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-white font-semibold mb-1">Full-Stack Expertise</div>
                    <div className="text-gray-400 text-sm">Mobile (React Native, Flutter) + Backend (Spring Boot, Node.js)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-white font-semibold mb-1">Enterprise Experience</div>
                    <div className="text-gray-400 text-sm">3+ years building scalable systems for Fortune 500 companies</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-white font-semibold mb-1">DevOps & Cloud</div>
                    <div className="text-gray-400 text-sm">Docker, Kubernetes, AWS, Azure deployment experience</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-white font-semibold mb-1">Problem Solver</div>
                    <div className="text-gray-400 text-sm">Hackathon winner with innovative solutions and rapid learning</div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6 text-center"
            >
              <div className="text-2xl font-bold text-cyan-400 mb-2">Ready to Collaborate</div>
              <div className="text-gray-400">
                Available for freelance projects, full-time opportunities, and technical consultations
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;