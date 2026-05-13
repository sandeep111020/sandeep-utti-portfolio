import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'Drive App',
      description: 'Transportation & Logistics app for J.B. Hunt built with React Native, Spring Boot, Docker & Kubernetes. Features real-time tracking, route optimization, and fleet management.',
      impact: '🚀 Reduced delivery time by 30% for Fortune 500 client',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'Spring Boot', 'Docker', 'Kubernetes', 'MySQL'],
      github: 'https://github.com/sandeep111020',
      live: '#',
      category: 'logistics',
      color: 'from-cyan-500 to-blue-500',
      icon: '🚛'
    },
    {
      title: 'Face Recognition Attendance System',
      description: 'ML-powered attendance system using Python, OpenCV, and computer vision. Integrates with Android app for seamless employee tracking.',
      impact: '🤖 99.2% accuracy in face recognition',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'OpenCV', 'Android', 'Machine Learning', 'Firebase'],
      github: 'https://github.com/sandeep111020',
      live: '#',
      category: 'ml',
      color: 'from-purple-500 to-pink-500',
      icon: '🤖'
    },
    {
      title: 'Ecommerce Jewellery App',
      description: 'Full-featured e-commerce platform for jewellery with secure payments, order tracking, and AR try-on features.',
      impact: '💎 $500K+ transactions processed',
      image: '/api/placeholder/400/250',
      technologies: ['Android', 'Java', 'Firebase', 'Stripe', 'ARCore'],
      github: 'https://github.com/sandeep111020',
      live: '#',
      category: 'ecommerce',
      color: 'from-yellow-500 to-orange-500',
      icon: '💎'
    },
    {
      title: 'NGMA Museum App',
      description: 'Official voice guide app for National Gallery of Modern Art showcasing paintings, sculptures, and art collections with audio narration.',
      impact: '🎨 10K+ Downloads on Play Store',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Audio API'],
      github: 'https://github.com/sandeep111020',
      live: '#',
      category: 'museum',
      color: 'from-blue-400 to-cyan-400',
      icon: '🎨'
    },
    {
      title: 'Healthcare Management App',
      description: 'Comprehensive healthcare app for managing patient records, prescriptions, voice-to-text conversion, and health reports.',
      impact: '🏥 HIPAA Compliant | 5K+ Active Users',
      image: '/api/placeholder/400/250',
      technologies: ['Flutter', 'Python', 'Firebase', 'Voice API', 'ML'],
      github: 'https://github.com/sandeep111020',
      live: '#',
      category: 'healthcare',
      color: 'from-green-500 to-emerald-500',
      icon: '🏥'
    },
    {
      title: 'Smart India Hackathon Project',
      description: 'Award-winning solution for government challenge using innovative ML algorithms and user-centric design. Recognized for scalability and real-world impact.',
      impact: '🏆 SIH Winner 2023 | Selected for National Deployment',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Python', 'ML', 'Government APIs'],
      github: 'https://github.com/sandeep111020',
      live: '#',
      category: 'hackathon',
      color: 'from-yellow-400 to-red-500',
      icon: '🏆'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900/30 to-gray-900/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.05),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Impactful Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            High-impact solutions in mobile development, backend systems, and AI — all with proven business results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -8 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
            >
              {/* Animated border on hover */}
              <motion.div
                className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              ></motion.div>

              {/* Image/Icon section */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700/30 to-gray-900/30"></div>

                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
                  animate={{
                    opacity: hoveredProject === index ? 0.15 : 0.05,
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.div>

                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={
                      hoveredProject === index
                        ? { scale: 1.2, rotate: 10 }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="text-7xl"
                  >
                    {project.icon}
                  </motion.div>
                </div>

                {/* Overlay gradient */}
                <motion.div
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                ></motion.div>

                {/* Category badge */}
                <motion.div
                  animate={{
                    y: hoveredProject === index ? 0 : -20,
                    opacity: hoveredProject === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-bold rounded-full`}
                >
                  Featured
                </motion.div>
              </div>

              {/* Content section */}
              <div className="relative z-10 p-6 flex-grow flex flex-col">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Impact metric */}
                <motion.div
                  animate={{
                    y: hoveredProject === index ? 0 : 10,
                    opacity: hoveredProject === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`mb-4 px-4 py-2 bg-gradient-to-r ${project.color} bg-opacity-10 border border-opacity-30 rounded-lg`}
                >
                  <p className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 flex items-center gap-2">
                    <Zap size={14} className="text-cyan-400" />
                    {project.impact}
                  </p>
                </motion.div>

                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-10 border border-opacity-30 rounded-full text-cyan-300 text-xs font-semibold hover:border-opacity-60 transition-all duration-300 cursor-default`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-500/10 border border-gray-500/20 rounded-full text-gray-400 text-xs font-semibold">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

              </div>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 rounded-2xl"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA at bottom */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/sandeep111020"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            View All Projects on GitHub
            <ArrowUpRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;