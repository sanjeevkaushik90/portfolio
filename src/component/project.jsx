import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from 'react-icons/fa';

export default function Project() {
  // Add your projects here - just copy the format below
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Framer Motion, showcasing my skills and projects with smooth animations and premium UI/UX design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop", // Replace with your project image
      technologies: ["React", "Framer Motion", "Tailwind CSS", "JavaScript"],
      liveLink: "https://yourportfolio.com", // Add your live project link
      githubLink: "https://github.com/sanjeevkaushik90/portfolio", // Add your GitHub repo link
      featured: true,
      color: "#0f2147"
    },
    // Example template for future projects - just uncomment and fill in your details:
    // {
    //   title: "Your Project Name",
    //   description: "Brief description of what your project does and the problem it solves.",
    //   image: "image-url-here",
    //   technologies: ["React", "Node.js", "MongoDB"],
    //   liveLink: "https://your-live-site.com",
    //   githubLink: "https://github.com/yourusername/project",
    //   featured: false,
    //   color: "#1a3a6b"
    // },
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
    hidden: { opacity: 0, y: 50 },
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
        className="absolute bottom-20 left-1/4 w-80 h-80 bg-[#0f2147] rounded-full blur-3xl"
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
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f2147] to-[#f5f3f0]">
              Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#f5f3f0] opacity-80 text-lg max-w-2xl mx-auto"
          >
            A showcase of my recent work and personal projects
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative bg-gradient-to-br from-[#0f2147]/30 to-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#0f2147]/40 shadow-xl hover:border-[#0f2147] transition-all duration-500"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="absolute top-4 left-4 z-10"
                  >
                    <span className="flex items-center gap-2 bg-[#0f2147] text-[#f5f3f0] px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      <FaRocket />
                      Featured
                    </span>
                  </motion.div>
                )}

                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-60" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#f5f3f0] mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#f5f3f0] opacity-80 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="px-3 py-1 bg-[#0f2147] text-[#f5f3f0] text-xs rounded-full font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 bg-[#0f2147] text-[#f5f3f0] px-4 py-2 rounded-lg font-semibold hover:bg-[#1a3a6b] transition-colors duration-300 shadow-lg"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 bg-transparent border-2 border-[#0f2147] text-[#f5f3f0] px-4 py-2 rounded-lg font-semibold hover:bg-[#0f2147] transition-all duration-300"
                      >
                        <FaGithub className="text-sm" />
                        <span>Code</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${project.color}08, transparent 70%)`
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Coming Soon State */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-20"
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="inline-block text-6xl text-[#0f2147] mb-6"
            >
              <FaCode />
            </motion.div>
            <h3 className="text-3xl font-bold text-[#f5f3f0] mb-4">
              Projects Coming Soon
            </h3>
            <p className="text-[#f5f3f0] opacity-80 max-w-md mx-auto">
              I'm currently working on exciting new projects. Check back soon to see what I've been building!
            </p>
          </motion.div>
        )}

        {/* Add More Projects CTA */}
        {projects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-[#f5f3f0] opacity-70">
              More projects coming soon...
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}