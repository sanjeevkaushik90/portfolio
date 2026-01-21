import { motion } from 'framer-motion';
import { FaCode, FaReact, FaPalette } from 'react-icons/fa';

export default function Hero() {
  const skills = [
    { icon: <FaReact />, text: "React & Modern JS" },
    { icon: <FaCode />, text: "Clean Code" },
    { icon: <FaPalette />, text: "UI/UX Design" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden relative">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.05, 0.03]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-[#0f2147] rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.02, 0.04, 0.02]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-[#0f2147] rounded-full blur-3xl"
      />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 md:order-1 text-center md:text-left"
          >
            <motion.div variants={itemVariants} className="inline-block mb-4">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-[#0f2147] bg-[#f5f3f0] px-4 py-2 rounded-full text-sm font-semibold shadow-lg inline-block"
              >
                Frontend Developer
              </motion.span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f3f0] mb-4"
            >
              Hi, I'm{' '}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f2147] via-[#f5f3f0] to-[#0f2147] inline-block"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: '200% 100%' }}
              >
                Sanjeev Kaushik
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-[#f5f3f0] text-lg md:text-xl mb-6 leading-relaxed opacity-90"
            >
              A passionate frontend developer crafting beautiful, responsive, and user-centric web experiences. I transform ideas into elegant digital solutions using modern technologies and best practices.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.text}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 10px 30px rgba(15, 33, 71, 0.4)"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }}
                  className="flex items-center gap-2 bg-[#0f2147] text-[#f5f3f0] px-4 py-2 rounded-lg shadow-md"
                >
                  <motion.span
                    className="text-xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    {skill.icon}
                  </motion.span>
                  <span className="text-sm font-medium">{skill.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center md:justify-start"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 40px rgba(15, 33, 71, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-[#0f2147] text-[#f5f3f0] px-8 py-3 rounded-lg font-semibold shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#0f2147] to-[#1a3a6b] opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#f5f3f0",
                  color: "#1a1a1a"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-transparent border-2 border-[#f5f3f0] text-[#f5f3f0] px-8 py-3 rounded-lg font-semibold"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="order-1 md:order-2 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              className="relative"
            >
              {/* Glow effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-[#0f2147] to-transparent rounded-full blur-3xl"
              />

              {/* Main image */}
              <motion.img
                src="https://res.cloudinary.com/df2zwofo4/image/upload/v1768880204/WhatsApp_Image_2026-01-04_at_09.32.45_1_slfilr.jpg"
                alt="Sanjeev Kaushik"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover ring-4 ring-[#0f2147] shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />

             

              {/* Floating particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-[#0f2147] rounded-full"
                  style={{
                    top: `${20 + i * 30}%`,
                    right: `${-5 - i * 3}%`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}