import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Target, Star, Zap, Crown } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Smart India Hackathon Winner',
      description: 'Won the prestigious Smart India Hackathon, developing innovative solutions for government challenges. Selected for national deployment.',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      year: '2023',
      badge: '🏆 NATIONAL LEVEL AWARD',
      impact: 'Indian Government Recognition'
    },
    {
      title: 'Top 200 Bridgingo Hackathon',
      description: 'Ranked in top 200 participants in Bridgingo Hackathon, showcasing exceptional problem-solving skills and innovation.',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      year: '2022',
      badge: '🎯 TOP PERFORMER',
      impact: 'National Level Competition'
    },
    {
      title: 'Fortune 500 Project Experience',
      description: 'J.B. Hunt, a Fortune 500 logistics company, delivering scalable enterprise solutions impacting thousands.',
      icon: Award,
      color: 'from-purple-500 to-pink-500',
      year: '2022-2024',
      badge: '🏢 ENTERPRISE SCALE',
      impact: '$100M+ Company'
    },
    {
      title: 'Rapid Career Progression',
      description: 'Promoted to Software Engineer 3 within 1 year at Imaginnovate Techsolutions for outstanding performance and leadership.',
      icon: Star,
      color: 'from-green-500 to-emerald-500',
      year: '2023',
      badge: '⭐ FAST-TRACK',
      impact: '1-Year Advancement'
    },{
      title: 'Won Team Player Award 2 times in Imaginnovate',
      description: 'Committed to continuous learning and delivering impactful solutions in mobile and backend development.',
      icon: Zap,
      color: 'from-cyan-500 to-blue-500',
      year: '2023,2025',
      badge: '⚡ Team Player',
      impact: 'Ongoing Growth'
    },
    {
      title: 'Nominated for Beyond the Bar Award',
      description: 'Consistently recognized for excellence in software development, innovation, and teamwork across multiple projects.',
      icon: Crown,
      color: 'from-yellow-400 to-yellow-600',
      year: '2026',
      badge: '👑 Excellence',
      impact: 'Company-wide Recognition'
    }
  ];

  const stats = [
    { label: 'Hackathons Won', value: '1', icon: '🏆', color: 'from-yellow-500 to-orange-500' },
    { label: 'Top Rankings', value: '200+', icon: '🎯', color: 'from-blue-500 to-cyan-500' },
    { label: 'Enterprise Projects', value: '5+', icon: '🚀', color: 'from-purple-500 to-pink-500' },
    { label: 'Career Advancement', value: '2 Levels', icon: '📈', color: 'from-green-500 to-emerald-500' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="achievements" className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,212,255,0.08),transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Crown size={32} className="text-yellow-400" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Milestones that define my career — from national hackathon victories to Fortune 500 enterprise scale
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 rounded-2xl`}
              ></div>

              {/* Animated border */}
              <motion.div
                className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
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
                {/* Header with icon and badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-4 bg-gradient-to-r ${achievement.color} rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <achievement.icon size={28} className="text-white" />
                  </div>
                  <motion.span
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`px-3 py-1 bg-gradient-to-r ${achievement.color} text-white text-xs font-bold rounded-full whitespace-nowrap`}
                  >
                    {achievement.badge}
                  </motion.span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-300 to-blue-400 transition-all duration-300">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {achievement.description}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
                  <span className="text-cyan-400 font-semibold text-sm">{achievement.year}</span>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-1 bg-gradient-to-r ${achievement.color} bg-opacity-10 border border-opacity-30 rounded-full text-transparent bg-clip-text text-xs font-bold`}
                  >
                    {achievement.impact}
                  </motion.span>
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
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 rounded-xl`}
              ></div>

              {/* Animated border */}
              <motion.div
                className={`absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
              ></motion.div>

              <div className="relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="text-4xl mb-2"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-10 blur-2xl rounded-2xl"></div>
          <div className="relative bg-gradient-to-r from-cyan-500/5 to-blue-500/5 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl p-8 text-center">
            <Zap className="mx-auto mb-4 text-yellow-400" size={32} />
            <p className="text-xl text-gray-300 font-semibold mb-2">
              "Excellence is not an act, but a habit." - Aristotle
            </p>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              These achievements represent my commitment to continuous learning, innovation, and delivering exceptional value in every project.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;