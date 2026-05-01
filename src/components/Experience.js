import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

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
      icon: '🚛'
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
      icon: '🏥'
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
      icon: '🔒'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey in software development, from mobile apps to enterprise systems
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>

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
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-900 z-10">
                <div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping opacity-25"></div>
              </div>

              {/* Content card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">{exp.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <h4 className="text-lg text-cyan-400 mb-2">{exp.company}</h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;