import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { path: '/',              label: 'Home' },
  { path: '/about',         label: 'About' },
  { path: '/services',      label: 'Services' },
  { path: '/insurance-fees', label: 'Insurance & Fees' },
  { path: '/schedule',      label: 'Schedule' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        solid ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo + Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Nicholas Lofthouse PhD"
              className="h-10 w-auto"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div>
              <p className={`font-serif font-semibold text-sm leading-tight transition-colors ${solid ? 'text-sage-dark' : 'text-white'}`}>
                Nicholas Lofthouse, Ph.D., LLC
              </p>
              <p className={`font-sans text-xs transition-colors ${solid ? 'text-gray-soft' : 'text-white/70'}`}>
                Licensed Child Psychologist
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ path, label }) => {
              const active = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`px-4 py-2 rounded-lg text-sm font-sans font-medium transition-colors duration-200 ${
                    active
                      ? 'text-terracotta'
                      : solid
                      ? 'text-sage-dark hover:text-terracotta'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="ml-3 bg-terracotta text-white px-5 py-2.5 rounded-full text-sm font-sans font-medium hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-6 h-0.5 transition-all duration-300 ${solid ? 'bg-sage-dark' : 'bg-white'} ${
                  i === 0 && menuOpen ? 'rotate-45 translate-y-2' :
                  i === 1 && menuOpen ? 'opacity-0 scale-x-0' :
                  i === 2 && menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-3 py-3 rounded-lg text-sm font-sans font-medium transition-colors ${
                    location.pathname === path
                      ? 'text-terracotta bg-orange-50'
                      : 'text-sage-dark hover:text-terracotta hover:bg-gray-50'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-3 bg-terracotta text-white px-5 py-3 rounded-full text-sm font-sans font-medium text-center"
              >
                Book Now
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
