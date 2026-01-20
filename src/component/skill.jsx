import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNetworkWired } from 'react-icons/fa';
import { SiGreensock } from 'react-icons/si';

export default function Skill() {
  const skillCategories = [
    {
      title: "Core Technologies",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Swiper.js", icon: <FaReact />, color: "#6332F6" },
        { name: "GSAP", icon: <SiGreensock />, color: "#88CE02" },
        { name: "Locomotive", icon: <FaReact />, color: "#0f2147" }
      ]
    },
    {
      title: "Networking & Fundamentals",
      skills: [
        { name: "Networking Fundamentals", icon: <FaNetworkWired />, color: "#0f2147" },
        { name: "Computer Networks", icon: <FaNetworkWired />, color: "#1a3a6b" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.02, 0.04, 0.02]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-[#0f2147] rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.02, 0.03, 0.02]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#0f2147] rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f3f0] mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f2147] to-[#f5f3f0]">
              Arsenal
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#f5f3f0] opacity-80 text-lg max-w-2xl mx-auto"
          >
            Technologies and tools I leverage to build exceptional web experiences
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: categoryIndex * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#f5f3f0] mb-8 text-center md:text-left">
                {category.title}
              </h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ 
                      y: -12,
                      scale: 1.05
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }}
                    className="relative group"
                  >
                    <div className="bg-gradient-to-br from-[#0f2147]/30 to-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#0f2147]/40 shadow-xl group-hover:border-[#0f2147] transition-all duration-500 h-full flex flex-col items-center justify-center text-center">
                      {/* Animated Icon */}
                      <motion.div
                        className="mb-4 relative"
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          className="text-6xl md:text-7xl"
                          style={{ color: skill.color }}
                          animate={{
                            filter: [
                              `drop-shadow(0 0 0px ${skill.color})`,
                              `drop-shadow(0 0 20px ${skill.color}40)`,
                              `drop-shadow(0 0 0px ${skill.color})`
                            ]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {skill.icon}
                        </motion.div>
                        
                        {/* Glow ring */}
                        <motion.div
                          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `radial-gradient(circle, ${skill.color}20, transparent 70%)`,
                            filter: 'blur(20px)'
                          }}
                        />
                      </motion.div>

                      {/* Skill Name */}
                      <h4 className="text-[#f5f3f0] font-semibold text-base md:text-lg">
                        {skill.name}
                      </h4>

                      {/* Decorative line */}
                      <motion.div
                        className="mt-4 h-1 rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '60%' }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.8, 
                          delay: skillIndex * 0.1,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      />

                      {/* Hover gradient overlay */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at center, ${skill.color}08, transparent 70%)`
                        }}
                      />
                    </div>

                    {/* Floating particles on hover */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100"
                      style={{ backgroundColor: skill.color }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}