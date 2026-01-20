import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaShieldAlt, FaCalendarAlt } from 'react-icons/fa';

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      status: "Pursuing",
      startDate: "January, 2026",
      icon: <FaGraduationCap />,
      color: "#0f2147",
      description: "Currently pursuing undergraduate degree in Computer Applications"
    },
    {
      degree: "Web Development & Cybersecurity",
      duration: "1.5 Years",
      startDate: "October 1, 2025",
      icon: <FaShieldAlt />,
      color: "#1a3a6b",
      description: "Comprehensive training in web development and cybersecurity fundamentals",
      status: "In Progress"
    },
    {
      degree: "O-Level Course",
      duration: "1 Year",
      subjects: "HTML, CSS & JavaScript",
      icon: <FaCode />,
      color: "#61DAFB",
      description: "Foundation course covering core web technologies",
      status: "Completed"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
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
        className="absolute top-20 right-1/4 w-96 h-96 bg-[#0f2147] rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
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
            Educational{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f2147] to-[#f5f3f0]">
              Journey
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#f5f3f0] opacity-80 text-lg max-w-2xl mx-auto"
          >
            Building expertise through continuous learning and specialized training
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              variants={cardVariants}
              whileHover={{ 
                x: 10,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="relative"
            >
              {/* Timeline line */}
              {index !== educationData.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute left-6 md:left-8 top-20 w-0.5 bg-gradient-to-b from-[#0f2147] to-transparent"
                  style={{ height: "calc(100% + 2rem)" }}
                />
              )}

              <div className="flex gap-6 md:gap-8">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0"
                >
                  <div 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-3xl text-[#f5f3f0] shadow-lg relative z-10"
                    style={{ backgroundColor: edu.color }}
                  >
                    {edu.icon}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{
                        boxShadow: [
                          `0 0 0px ${edu.color}`,
                          `0 0 20px ${edu.color}80`,
                          `0 0 0px ${edu.color}`
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="flex-1 bg-gradient-to-br from-[#0f2147]/30 to-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#0f2147]/40 shadow-xl hover:border-[#0f2147] transition-all duration-500 group"
                  whileHover={{
                    boxShadow: "0 20px 60px rgba(15, 33, 71, 0.3)"
                  }}
                >
                  {/* Status Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-block mb-3"
                  >
                    <span 
                      className="px-3 py-1 rounded-full text-xs md:text-sm font-semibold text-[#f5f3f0]"
                      style={{ backgroundColor: edu.color }}
                    >
                      {edu.status}
                    </span>
                  </motion.div>

                  {/* Degree Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-[#f5f3f0] mb-3">
                    {edu.degree}
                  </h3>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    {edu.duration && (
                      <div className="flex items-center gap-2 text-[#f5f3f0] opacity-80">
                        <FaCalendarAlt className="text-sm" style={{ color: edu.color }} />
                        <span className="text-sm md:text-base">Duration: {edu.duration}</span>
                      </div>
                    )}
                    {edu.startDate && (
                      <div className="flex items-center gap-2 text-[#f5f3f0] opacity-80">
                        <FaCalendarAlt className="text-sm" style={{ color: edu.color }} />
                        <span className="text-sm md:text-base">Started: {edu.startDate}</span>
                      </div>
                    )}
                    {edu.subjects && (
                      <div className="text-[#f5f3f0] opacity-80">
                        <span className="text-sm md:text-base font-semibold">Focus: </span>
                        <span className="text-sm md:text-base">{edu.subjects}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-[#f5f3f0] opacity-70 text-sm md:text-base leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Decorative accent line */}
                  <motion.div
                    className="mt-6 h-1 rounded-full"
                    style={{ backgroundColor: edu.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 1, 
                      delay: index * 0.2 + 0.4,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  />

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${edu.color}08, transparent 70%)`
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}