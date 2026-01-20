import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaPaintBrush, FaRocket } from 'react-icons/fa';

export default function Experience() {
  const experienceData = [
    {
      title: "Frontend Developer",
      type: "Project-Based Development",
      period: "Present",
      icon: <FaLaptopCode />,
      color: "#0f2147",
      description: "Building responsive and dynamic web interfaces through academic coursework and self-initiated projects. Specializing in modern frontend technologies with a focus on user experience and performance.",
      highlights: [
        "Developed multiple responsive web applications using HTML, CSS, JavaScript, and React",
        "Implemented smooth animations and transitions using GSAP and Framer Motion",
        "Created interactive UI components with Swiper.js and Locomotive Scroll",
        "Applied modern frontend best practices including component-based architecture",
        "Focused on clean, maintainable code and pixel-perfect design implementation"
      ]
    },
    {
      title: "Self-Directed Learning",
      type: "Continuous Skill Development",
      period: "Ongoing",
      icon: <FaRocket />,
      color: "#1a3a6b",
      description: "Committed to staying current with evolving web technologies through hands-on projects and continuous learning.",
      highlights: [
        "Built portfolio projects demonstrating proficiency in React ecosystem",
        "Explored advanced animation libraries and modern CSS techniques",
        "Practiced responsive design principles across various devices",
        "Experimented with UI/UX design patterns and accessibility standards",
        "Engaged with developer communities and open-source contributions"
      ]
    }
  ];

  const skills = [
    { name: "Responsive Design", icon: <FaCode />, color: "#61DAFB" },
    { name: "UI/UX Focus", icon: <FaPaintBrush />, color: "#88CE02" },
    { name: "Modern Frameworks", icon: <FaLaptopCode />, color: "#E34F26" },
    { name: "Best Practices", icon: <FaRocket />, color: "#F7DF1E" }
  ];

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
        className="absolute top-20 left-1/4 w-96 h-96 bg-[#0f2147] rounded-full blur-3xl"
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
        className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#0f2147] rounded-full blur-3xl"
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
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f2147] to-[#f5f3f0]">
              Experience
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#f5f3f0] opacity-80 text-lg max-w-2xl mx-auto"
          >
            Practical frontend development experience through projects and continuous learning
          </motion.p>
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
              className="bg-gradient-to-br from-[#0f2147]/30 to-[#1a1a1a]/50 backdrop-blur-sm rounded-xl p-4 border border-[#0f2147]/40 shadow-lg hover:border-[#0f2147] transition-all duration-300 text-center"
            >
              <div className="text-3xl mb-2" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <p className="text-[#f5f3f0] text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="bg-gradient-to-br from-[#0f2147]/30 to-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#0f2147]/40 shadow-xl hover:border-[#0f2147] transition-all duration-500 group"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex-shrink-0"
                    >
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl text-[#f5f3f0] shadow-lg"
                        style={{ backgroundColor: exp.color }}
                      >
                        {exp.icon}
                      </div>
                    </motion.div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-[#f5f3f0] mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-[#f5f3f0] opacity-80 font-medium">
                        {exp.type}
                      </p>
                    </div>
                  </div>

                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-[#f5f3f0]"
                    style={{ backgroundColor: exp.color }}
                  >
                    {exp.period}
                  </motion.span>
                </div>

                {/* Description */}
                <p className="text-[#f5f3f0] opacity-80 text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3">
                  <h4 className="text-[#f5f3f0] font-semibold text-lg mb-3">
                    Key Achievements & Focus Areas:
                  </h4>
                  {exp.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div
                        className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                        style={{ backgroundColor: exp.color }}
                        whileHover={{ scale: 1.5 }}
                      />
                      <p className="text-[#f5f3f0] opacity-70 text-sm md:text-base leading-relaxed">
                        {highlight}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative accent line */}
                <motion.div
                  className="mt-8 h-1 rounded-full"
                  style={{ backgroundColor: exp.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                />

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${exp.color}08, transparent 70%)`
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}