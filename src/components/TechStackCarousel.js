import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
// import anime from 'anime';
import {
  ReactIcon,
  FlutterIcon,
  SpringBootIcon,
  DockerIcon,
  KubernetesIcon,
  FirebaseIcon,
  MySQLIcon,
  MongoDBIcon,
  AndroidIcon,
  NodeIcon,
  PythonIcon,
  KotlinIcon
} from './TechIcons';

const TechStackCarousel = () => {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef(null);
  // const timelineRef = useRef(null);

  const techStack = [
    { name: 'React', Icon: ReactIcon, color: 'from-cyan-400 to-blue-500' },
    { name: 'React Native', Icon: ReactIcon, color: 'from-cyan-400 to-blue-500' },
    { name: 'Flutter', Icon: FlutterIcon, color: 'from-blue-400 to-purple-500' },
    { name: 'Spring Boot', Icon: SpringBootIcon, color: 'from-green-400 to-emerald-500' },
    { name: 'Docker', Icon: DockerIcon, color: 'from-blue-500 to-cyan-400' },
    { name: 'Kubernetes', Icon: KubernetesIcon, color: 'from-blue-600 to-blue-400' },
    { name: 'Firebase', Icon: FirebaseIcon, color: 'from-yellow-500 to-orange-500' },
    { name: 'MySQL', Icon: MySQLIcon, color: 'from-orange-400 to-red-500' },
    { name: 'MongoDB', Icon: MongoDBIcon, color: 'from-green-500 to-emerald-600' },
    { name: 'Android', Icon: AndroidIcon, color: 'from-green-400 to-lime-500' },
    { name: 'Node.js', Icon: NodeIcon, color: 'from-emerald-500 to-green-600' },
    { name: 'Python', Icon: PythonIcon, color: 'from-yellow-400 to-blue-600' },
    { name: 'Kotlin', Icon: KotlinIcon, color: 'from-purple-500 to-pink-500' },
  ];

  // Duplicate the array for infinite loop effect
  const duplicatedStack = [...techStack, ...techStack];

  useEffect(() => {
    if (!carouselRef.current) return;

    // const carousel = carouselRef.current;
    // const itemWidth = 150; // width + gap
    // const totalWidth = itemWidth * techStack.length;

    // Kill previous animation if exists
    if (animationRef.current) {
      animationRef.current.pause();
    }

    // Create continuous animation
    if (!isHovered) {
      // animationRef.current = anime({
      //   targets: carousel,
      //   translateX: -totalWidth,
      //   duration: totalWidth * 50, // Smooth speed
      //   easing: 'linear',
      //   loop: true,
      // });
    } else {
      // Pause animation on hover
      if (animationRef.current) {
        animationRef.current.pause();
      }
    }

    return () => {
      // if (animationRef.current) {
      //   animationRef.current.pause();
      // }
    };
  }, [isHovered, techStack.length]);

  return (
    <section id="tech-stack" className="py-20 bg-gray-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Tech Stack Mastery
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies I use to build high-performance, scalable applications
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left gradient mask */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
          {/* Right gradient mask */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>

          {/* Carousel */}
          <motion.div
            ref={carouselRef}
            className="flex gap-6 py-12 px-4"
            style={{ x: 0 }}
          >
            {duplicatedStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.15, y: -10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                className="flex-shrink-0 w-32 h-32 relative group cursor-pointer"
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-2xl`}
                ></div>

                {/* Card */}
                <div
                  className={`relative w-full h-full bg-gradient-to-br ${tech.color} bg-opacity-5 backdrop-blur-sm border border-opacity-30 rounded-2xl flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:border-opacity-60 overflow-hidden`}
                >
                  {/* Animated border */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  ></motion.div>

                  {/* Icon */}
                  <motion.div
                    animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                    className="relative z-10 mb-2"
                  >
                    <tech.Icon size={48} />
                  </motion.div>

                  {/* Tech name */}
                  <motion.p
                    className="relative z-10 text-center text-sm font-semibold text-gray-200 group-hover:text-white transition-colors duration-300"
                  >
                    {tech.name}
                  </motion.p>

                  {/* Shine effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 rounded-2xl`}
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                    }}
                  ></motion.div>
                </div>

                {/* Floating particles on hover */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 bg-gradient-to-r ${tech.color} rounded-full`}
                    initial={{
                      opacity: 0,
                      x: 0,
                      y: 0,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      x: (Math.random() - 0.5) * 100,
                      y: (Math.random() - 0.5) * 100,
                    }}
                    transition={{
                      duration: 1,
                      delay: i * 0.1,
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
        </div>

        {/* Hover hint */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          🎯 Hover to pause • Drag to explore more
        </motion.p>
      </div>
    </section>
  );
};

export default TechStackCarousel;
