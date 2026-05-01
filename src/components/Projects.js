import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Drive App',
      description: 'Transportation & Logistics app for J.B. Hunt built with React Native, Spring Boot, Docker & Kubernetes. Features real-time tracking, route optimization, and fleet management.',
      image: '/api/placeholder/400/250', // Placeholder image
      technologies: ['React Native', 'Spring Boot', 'Docker', 'Kubernetes', 'MySQL'],
      github: 'https://github.com/sandeep111020',
      live: '#',
      category: 'logistics'
    },
    {
      title: 'Face Recognition Attendance System',
      description: 'ML-powered attendance system using Python, OpenCV, and computer vision. Integrates with Android app for seamless employee tracking.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'OpenCV', 'Android', 'Machine Learning', 'Firebase'],
      github: 'https://github.com/sandeep111020',
      live: '#',
      category: 'ml'
    },
    {
      title: 'Ecommerce Jewellery App',
      description: 'Full-featured e-commerce platform for jewellery with secure payments, order tracking, and AR try-on features.',
      image: '/api/placeholder/400/250',
      technologies: ['Android', 'Java', 'Firebase', 'Stripe', 'ARCore'],
      github: 'https://github.com/sandeep111020',
      live: '#',
      category: 'ecommerce'
    },
    {
      title: 'NGMA Museum App',
      description: 'Official voice guide app for National Gallery of Modern Art showcasing paintings, sculptures, and art collections with audio narration.',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Audio API'],
      github: 'https://github.com/sandeep111020',
      live: '#',
      category: 'museum'
    },
    {
      title: 'Healthcare Management App',
      description: 'Comprehensive healthcare app for managing patient records, prescriptions, voice-to-text conversion, and health reports.',
      image: '/api/placeholder/400/250',
      technologies: ['Flutter', 'Python', 'Firebase', 'Voice API', 'ML'],
      github: 'https://github.com/sandeep111020',
      live: '#',
      category: 'healthcare'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my work in mobile development, backend systems, and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden shadow-xl hover:shadow-cyan-500/20 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50">{project.category === 'logistics' ? '🚛' : project.category === 'ml' ? '🤖' : project.category === 'ecommerce' ? '💎' : project.category === 'museum' ? '🎨' : '🏥'}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-500/10 border border-gray-500/20 rounded-full text-gray-400 text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm font-medium flex items-center justify-center gap-2 transition-colors duration-300"
                  >
                    <GitBranch size={16} />
                    Code
                  </motion.a>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;