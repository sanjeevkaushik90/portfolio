import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import logo from '../assets/image/Gemini_Generated_Image_7ctfvi7ctfvi7ctf.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // SEO: Update document metadata
  useEffect(() => {
    // Set page title
    document.title = "Sanjeev Kaushik - Frontend Developer | React, JavaScript, Web Development";
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Sanjeev Kaushik is a passionate frontend developer specializing in React, JavaScript, HTML, CSS, GSAP, and modern web development. Building responsive, user-centric web applications.";
    
    // Set meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = "Sanjeev Kaushik, Frontend Developer, React Developer, JavaScript Developer, Web Developer, HTML CSS JavaScript, GSAP Animation, Swiper.js, Locomotive Scroll, UI/UX Developer, Responsive Web Design, Frontend Engineer, Web Development Portfolio, React Portfolio, Modern Web Development, Computer Networks, BCA Student, Cybersecurity, Web Developer India";
    
    // Set author meta tag
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.name = 'author';
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.content = "Sanjeev Kaushik";

    // Open Graph tags for social media
    const ogTags = [
      { property: 'og:title', content: 'Sanjeev Kaushik - Frontend Developer Portfolio' },
      { property: 'og:description', content: 'Passionate frontend developer specializing in React, JavaScript, and modern web technologies.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: logo }
    ];

    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', tag.property);
        document.head.appendChild(ogTag);
      }
      ogTag.content = tag.content;
    });
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/sanjeevkaushik90",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/sanjeev-kaushik-16aaa13a1/",
      label: "LinkedIn"
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:sanjeevkaushik90684@gmail.com",
      label: "Email"
    }
  ];

  return (
    <>
      {/* SEO: Semantic HTML Header */}
      <header>
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] shadow-lg"
          style={{ backgroundColor: '#1a1a1a' }}
          role="navigation"
          aria-label="Main navigation"
        >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img 
              src={logo} 
              alt="Sanjeev Kaushik Logo" 
              className="w-12 h-12 rounded-full object-cover ring-2 ring-[#0f2147]"
            />
          </motion.div>

          {/* Name & Navigation Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2"
          >
            <h1 className="text-[#f5f3f0] text-lg font-semibold tracking-wide uppercase mr-4">
              Sanjeev Kaushik
            </h1>
            <div className="flex items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  whileHover={{ y: -2 }}
                  className="text-[#f5f3f0] text-sm font-medium hover:text-[#0f2147] transition-colors duration-300 relative group"
                >
                  {link.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0f2147] group-hover:w-full transition-all duration-300"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Name Only for Medium Screens */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:block lg:hidden absolute left-1/2 transform -translate-x-1/2"
          >
            <h1 className="text-[#f5f3f0] text-lg font-semibold tracking-wide uppercase">
              Sanjeev Kaushik
            </h1>
          </motion.div>

          {/* Desktop Social Icons & Resume Button */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.2, color: '#0f2147' }}
                className="text-[#f5f3f0] text-xl transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
            
            {/* Resume Download Button */}
            <motion.a
              href="/path-to-your-resume.pdf"
              download="Sanjeev_Kaushik_Resume.pdf"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(15, 33, 71, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-[#0f2147] text-[#f5f3f0] px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-[#1a3a6b] transition-colors duration-300"
            >
              <FaDownload className="text-sm" />
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#f5f3f0] text-2xl focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-[#0f2147]"
      >
        <div className="px-4 py-6 space-y-4">
          <div className="text-[#f5f3f0] text-center font-semibold text-lg mb-4">
            Sanjeev Kaushik
          </div>
          
          {/* Mobile Navigation Links */}
          <div className="space-y-2 mb-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.95 }}
                className="block text-[#f5f3f0] py-2 px-4 rounded-lg hover:bg-[#1a1a1a] transition-colors duration-300 text-center font-medium"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-[#f5f3f0]/20 my-4"></div>

          {/* Social Links */}
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 text-[#f5f3f0] py-2 px-4 rounded-lg hover:bg-[#1a1a1a] transition-colors duration-300"
            >
              <span className="text-xl">{link.icon}</span>
              <span>{link.label}</span>
            </motion.a>
          ))}
          
          {/* Mobile Resume Button */}
          <motion.a
            href="/path-to-your-resume.pdf"
            download="Sanjeev_Kaushik_Resume.pdf"
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 text-[#f5f3f0] py-3 px-4 rounded-lg bg-[#1a1a1a] font-semibold mt-4"
          >
            <FaDownload className="text-lg" />
            <span>Download Resume</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
   </header>
    </>
  );
}