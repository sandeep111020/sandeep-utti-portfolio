import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Target, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Smart India Hackathon Winner',
      description: 'Won the prestigious Smart India Hackathon, developing innovative solutions for government challenges.',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      year: '2023'
    },
    {
      title: 'Top 200 Bridgingo Hackathon',
      description: 'Ranked in top 200 participants in Bridgingo Hackathon, showcasing exceptional problem-solving skills.',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      year: '2022'
    },
    {
      title: 'Fortune 500 Project Experience',
      description: 'Led development for J.B. Hunt, a Fortune 500 logistics company, delivering scalable enterprise solutions.',
      icon: Award,
      color: 'from-purple-500 to-pink-500',
      year: '2022-2024'
    },
    {
      title: 'Rapid Career Progression',
      description: 'Promoted to Software Engineer 3 within 1 year at Imaginnovate Techsolutions for outstanding performance.',
      icon: Star,
      color: 'from-green-500 to-emerald-500',
      year: '2023'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Milestones and accomplishments that highlight my dedication to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 overflow-hidden"
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <achievement.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-cyan-400 font-semibold text-sm">{achievement.year}</span>
                  <div className={`w-12 h-1 bg-gradient-to-r ${achievement.color} rounded-full`}></div>
                </div>
              </div>

              {/* Animated border */}
              <div className={`absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r ${achievement.color} p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className="w-full h-full bg-gray-800/50 rounded-xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Hackathons Won', value: '1+' },
            { label: 'Top Rankings', value: '200+' },
            { label: 'Enterprise Projects', value: '5+' },
            { label: 'Years Experience', value: '3+' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;