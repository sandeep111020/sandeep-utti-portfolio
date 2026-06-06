import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CountUpNumber = ({ from = 0, to, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    let animationId = null;

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      setCount(Math.floor(from + (to - from) * progress));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Stats = () => {
  const stats = [
    {
      value: 3,
      suffix: '+',
      label: 'Years Experience',
      icon: '📅',
      description: 'Building impactful solutions',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      value: 10,
      suffix: '+',
      label: 'Projects Delivered',
      icon: '🚀',
      description: 'From MVP to enterprise scale',
      color: 'from-blue-500 to-purple-500'
    },
    {
      value: 1,
      suffix: '',
      label: 'Fortune 500 Client',
      icon: '🏢',
      description: 'Logistics Excellence',
      color: 'from-purple-500 to-pink-500'
    },
    {
      value: 1,
      suffix: '✨',
      label: 'SIH Winner',
      icon: '🏆',
      description: 'Smart India Hackathon Achievement',
      color: 'from-yellow-500 to-orange-500'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="stats" className="py-20 bg-gray-900/50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-blue-900/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Impact by Numbers
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Metrics that reflect my dedication to excellence and innovation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-2xl rounded-2xl transition-opacity duration-300`}
              ></div>

              {/* Card */}
              <div
                className={`relative bg-gradient-to-br ${stat.color} bg-opacity-5 backdrop-blur-sm border border-opacity-30 rounded-2xl p-8 transition-all duration-300 group-hover:border-opacity-60 overflow-hidden`}
              >
                {/* Animated border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
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
                  {/* Icon */}
                  <motion.div
                    animate={
                      index % 2 === 0
                        ? { rotate: [0, 10, -10, 0] }
                        : { scale: [1, 1.1, 1] }
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                    className="text-5xl mb-4 inline-block"
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Main metric */}
                  <div className="mb-2">
                    <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                      <CountUpNumber to={stat.value} duration={2} suffix={stat.suffix} />
                    </div>
                  </div>

                  {/* Label */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.description}
                  </p>

                  {/* Shine effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 rounded-2xl`}
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                    }}
                  ></motion.div>
                </div>
              </div>

              {/* Floating particles on hover */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1 h-1 bg-gradient-to-r ${stat.color} rounded-full`}
                  initial={{
                    opacity: 0,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    x: (Math.random() - 0.5) * 80,
                    y: (Math.random() - 0.5) * 80,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.15,
                    repeat: Infinity,
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                ></motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full">
            <p className="text-gray-300 text-sm">
              <span className="text-cyan-400 font-semibold">💡 Proven Track Record:</span> Consistent delivery of high-impact projects
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
