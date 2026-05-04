import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Imaginnovate Techsolutions',
      role: 'Software Engineer 3 (Full Stack Developer)',
      period: '2022 - Present',
      location: 'Client: J.B. Hunt - Fortune 500 Logistics',
      description: [
        'Developed React Native mobile applications for transportation logistics',
        'Built scalable Spring Boot microservices with REST APIs',
        'Implemented production monitoring using Grafana and Dynatrace',
        'Promoted to Software Engineer 3 within 1 year for exceptional performance',
        'Led deployment and maintenance of containerized applications on Kubernetes'
      ],
      technologies: ['React Native', 'Spring Boot', 'Docker', 'Kubernetes', 'Grafana', 'Dynatrace'],
      icon: '🚛',
      highlight: true,
      achievements: ['Promotion in 1 year', 'Fortune 500 Impact', 'Microservices Architecture']
    },
    {
      company: 'Curus Healthcare',
      role: 'Flutter Developer',
      period: '2021 - 2022',
      location: 'Healthcare Technology',
      description: [
        'Developed Flutter applications for healthcare management',
        'Designed and implemented backend APIs for patient data management',
        'Integrated Firebase for real-time data synchronization',
        'Collaborated with cross-functional teams for product delivery'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
      icon: '🏥',
      achievements: ['Healthcare Solutions', 'Real-time Sync', 'Cross-platform Development']
    },
    {
      company: 'Indian Cyber Security Solutions',
      role: 'Android Developer',
      period: '2020 - 2021',
      location: 'Cyber Security & ML',
      description: [
        'Built Android applications with machine learning integration',
        'Developed face recognition systems for security applications',
        'Implemented computer vision algorithms for image processing',
        'Contributed to cyber security research projects'
      ],
      technologies: ['Android', 'Java', 'Python', 'Machine Learning', 'OpenCV'],
      icon: '🔒',
      achievements: ['ML Integration', 'Face Recognition', 'Computer Vision']
    }
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

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,212,255,0.05),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From aspiring developer to Fortune 500 engineer — a story of growth, impact, and excellence
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"></div>

          {/* Experience items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot with glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 0 0 rgba(0, 212, 255, 0.4)',
                      '0 0 0 10px rgba(0, 212, 255, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-gray-900 z-20 shadow-lg"
                ></motion.div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 overflow-hidden"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>

                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    ></motion.div>

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-4xl flex-shrink-0"
                        >
                          {exp.icon}
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-1">
                            <div>
                              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                                {exp.role}
                              </h3>
                              <p className="text-lg text-cyan-400 font-semibold mt-1">{exp.company}</p>
                            </div>
                            {exp.highlight && (
                              <motion.span
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full"
                              >
                                ⭐ Featured
                              </motion.span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-cyan-400" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-cyan-400" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((desc, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-2 text-gray-300 text-sm"
                          >
                            <ArrowRight size={14} className="text-cyan-400 flex-shrink-0 mt-1" />
                            <span>{desc}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="mb-4">
                        <p className="text-xs text-gray-400 font-semibold mb-2 uppercase tracking-wider">
                          Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <motion.span
                              key={i}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-xs font-semibold hover:border-cyan-400 transition-all duration-300 cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements badges */}
                      <div className="pt-4 border-t border-gray-700/50">
                        <p className="text-xs text-gray-400 font-semibold mb-2 uppercase tracking-wider">
                          Key Achievements
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.span
                              key={i}
                              whileHover={{ scale: 1.05 }}
                              className="px-2 py-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-full text-green-300 text-xs font-semibold"
                            >
                              ✓ {achievement}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-5 rounded-2xl"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                      }}
                    ></motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;