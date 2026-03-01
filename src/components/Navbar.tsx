import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'בית', href: '#home' },
  { name: 'נכסים', href: '#properties' },
  { name: 'יתרונות', href: '#why-us' },
  { name: 'הצוות', href: '#team' },
  { name: 'צור קשר', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isClickScrolling = useRef(false);
  const clickScrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isClickScrolling.current) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-150px 0px -50% 0px' }
    );

    const sections = links.map((link) => document.getElementById(link.href.substring(1))).filter(Boolean);
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    setActiveSection(targetId);

    // Temporarily disable the intersection observer's effect on active section
    isClickScrolling.current = true;
    if (clickScrollTimeout.current) clearTimeout(clickScrollTimeout.current);
    clickScrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    return () => {
      if (clickScrollTimeout.current) clearTimeout(clickScrollTimeout.current);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 flex items-center py-4 px-6 md:px-12 lg:px-24 z-[90] transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 text-gray-900 py-3' : 'bg-transparent text-white'}`}
      >
        <div className="flex-1 flex items-center justify-start gap-3 sm:gap-4">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className={`hidden sm:flex px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm md:text-base font-bold transition-all duration-300 cursor-pointer items-center justify-center border shrink-0 ${isScrolled ? 'bg-accent text-white border-transparent hover:bg-accent-hover shadow-md' : 'bg-white text-gray-900 border-transparent hover:bg-gray-100'}`}
          >
            להשארת פרטים
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-colors backdrop-blur-sm z-50 cursor-pointer lg:hidden shrink-0 ${isScrolled ? 'border-gray-200 hover:bg-gray-100 text-gray-900' : 'border-white/20 hover:bg-white/10 text-white'}`}
            aria-label="פתח תפריט"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className={`hidden lg:flex items-center gap-3 backdrop-blur-md px-3 py-3 rounded-full border transition-colors ${isScrolled ? 'bg-gray-100/50 border-gray-200' : 'bg-black/20 border-white/10'}`}>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 cursor-pointer ${activeSection === link.href.substring(1)
                ? (isScrolled ? 'bg-gray-900 text-white shadow-md' : 'bg-white/20 text-white shadow-sm')
                : (isScrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50' : 'text-white/80 hover:text-white hover:bg-white/10')
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex-1 flex items-center justify-end gap-4 shrink-0">
          <div className={`text-2xl md:text-3xl font-bold tracking-tight z-50 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            יעקובסון נכסים
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-4 left-4 right-4 bg-white rounded-3xl p-6 shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="text-2xl font-bold text-gray-900 tracking-tight">
                  יעקובסון נכסים
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer"
                  aria-label="סגור תפריט"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-6 py-4 rounded-2xl text-lg font-bold transition-all duration-300 cursor-pointer ${activeSection === link.href.substring(1)
                      ? 'bg-accent/10 text-accent'
                      : 'text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="mt-4 px-6 py-4 rounded-2xl text-lg font-bold transition-all duration-300 cursor-pointer bg-accent text-white text-center shadow-lg shadow-accent/20"
                >
                  להשארת פרטים
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

