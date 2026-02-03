
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LogoMark from './LogoMark.tsx';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Archives', path: '/work' },
    { name: 'Approach', path: '/about' },
    { name: 'Inquiry', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[0.16, 1, 0.3, 1] ${scrolled ? 'bg-white/80 backdrop-blur-2xl py-6 border-b border-slate-100 shadow-sm' : 'bg-transparent py-12'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group">
          <LogoMark size={32} className="group-hover:scale-110 transition-transform duration-700" />
          <span className="text-xl font-black tracking-tighter uppercase text-slate-950">FJORD</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-16 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-600' : 'text-slate-400'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="ml-4 px-8 py-3 bg-slate-950 text-white text-[9px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-blue-600 transition-all duration-500 scale-100 active:scale-95 shadow-lg shadow-slate-200">
            Initiate Project
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-slate-950 p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 md:hidden h-screen overflow-hidden"
          >
            <div className="p-12 flex flex-col gap-10">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  >
                    <Link
                        to={link.path}
                        className="text-5xl font-bold tracking-tighter text-slate-950 block"
                    >
                        {link.name}
                    </Link>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
