import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Server, Database, GitBranch, Cloud, Code } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 95 },
        { name: 'Flutter', level: 90 },
        { name: 'Android (Java)', level: 85 },
        { name: 'iOS Development', level: 75 }
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Spring Boot', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'REST APIs', level: 95 },
        { name: 'Microservices', level: 85 }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Azure', level: 80 }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Databases & Tools',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Firebase', level: 90 },
        { name: 'Git', level: 95 }
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to build scalable, production-ready applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} shadow-lg`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} shadow-sm`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Python', 'Java', 'JavaScript', 'TypeScript', 'Dart', 'HTML5', 'CSS3',
              'GraphQL', 'Redis', 'PostgreSQL', 'Jenkins', 'Grafana', 'Prometheus',
              'Machine Learning', 'Computer Vision', 'OpenCV', 'TensorFlow'
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;