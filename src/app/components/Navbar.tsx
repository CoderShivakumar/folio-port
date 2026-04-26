import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/portfolio-data';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[hsl(230,50%,20%)]/95 backdrop-blur-xl shadow-2xl border-b border-[hsl(45,95%,55%)]/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <motion.a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, '#home')}
              whileHover={{ scale: 1.05 }}
              className={`text-3xl font-serif tracking-wide transition-colors ${
                isScrolled ? 'text-[hsl(45,95%,55%)]' : 'text-[hsl(230,50%,30%)]'
              }`}
            >
              SR
            </motion.a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  whileHover={{ y: -2 }}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    isScrolled
                      ? 'text-[hsl(45,40%,95%)] hover:bg-[hsl(45,95%,55%)]/20 hover:text-[hsl(45,95%,55%)]'
                      : 'text-[hsl(230,30%,15%)] hover:bg-[hsl(230,50%,30%)]/10 hover:text-[hsl(230,50%,30%)]'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-[hsl(45,40%,95%)] hover:bg-[hsl(45,95%,55%)]/20'
                  : 'text-[hsl(230,30%,15%)] hover:bg-[hsl(230,50%,30%)]/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-[80px] left-0 right-0 z-40 bg-[hsl(230,50%,20%)]/98 backdrop-blur-xl border-b border-[hsl(45,95%,55%)]/20 shadow-2xl md:hidden"
        >
          <div className="px-6 py-6 space-y-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="block px-4 py-3 text-[hsl(45,40%,95%)] hover:bg-[hsl(45,95%,55%)]/20 hover:text-[hsl(45,95%,55%)] rounded-xl transition-all"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
