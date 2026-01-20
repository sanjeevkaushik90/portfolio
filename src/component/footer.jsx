import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/sanjeevkaushik90",
      label: "GitHub",
      color: "#f5f3f0"
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/sanjeev-kaushik-16aaa13a1/",
      label: "LinkedIn",
      color: "#0077B5"
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:sanjeevkaushik90684@gmail.com",
      label: "Email",
      color: "#EA4335"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f2147] text-[#f5f3f0] relative overflow-hidden">
      {/* Background decoration */}
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
        className="absolute top-0 right-0 w-96 h-96 bg-[#1a1a1a] rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Sanjeev Kaushik</h3>
            <p className="text-[#f5f3f0] opacity-80 leading-relaxed mb-4">
              Frontend Developer passionate about creating beautiful, responsive web experiences with modern technologies.
            </p>
            <div className="flex items-center gap-2 text-sm opacity-70">
              
             
              
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-[#f5f3f0] opacity-80 hover:opacity-100 hover:text-[#61DAFB] transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="space-y-4">
              <p className="text-[#f5f3f0] opacity-80">
                Let's build something amazing together!
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-xl hover:bg-[#1a3a6b] transition-colors duration-300 shadow-lg"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
              <div className="pt-4">
                <a
                  href="mailto:sanjeevkaushik90684@gmail.com"
                  className="text-[#f5f3f0] opacity-80 hover:opacity-100 hover:text-[#61DAFB] transition-all duration-300"
                >
                  sanjeevkaushik90684@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-[#f5f3f0]/20 mb-6"
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#f5f3f0] opacity-70 text-sm text-center md:text-left"
          >
            © {currentYear} Sanjeev Kaushik. All rights reserved.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -5,
              transition: { type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-2 rounded-full hover:bg-[#1a3a6b] transition-colors duration-300 shadow-lg"
            aria-label="Scroll to top"
          >
            <span className="text-sm font-medium">Back to Top</span>
            <FaArrowUp className="text-sm" />
          </motion.button>
        </div>
      </div>

      {/* Decorative wave at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#61DAFB] to-transparent opacity-50" />
    </footer>
  );
}