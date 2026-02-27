import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => link.href.substring(1));
      let current = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 flex items-center justify-between py-6 px-6 md:px-12 lg:px-24 text-white z-50"
      >
        <div className="text-2xl font-bold tracking-tight z-50 relative">
          Breeze
        </div>

        <div className="hidden md:flex items-center gap-2 bg-black/20 backdrop-blur-md px-2 py-2 rounded-full border border-white/10">
          {links.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === link.href.substring(1) 
                  ? 'bg-white/20 text-white shadow-sm' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm z-50 relative"
        >
          <Menu className="w-5 h-5" />
        </button>
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
                  Breeze
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
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
                    className={`px-6 py-4 rounded-2xl text-lg font-bold transition-all duration-300 ${
                      activeSection === link.href.substring(1) 
                        ? 'bg-accent/10 text-accent' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

