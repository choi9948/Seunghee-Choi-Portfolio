import React, { useState, useEffect } from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Menu, X, Terminal } from 'lucide-react';

    const navItems = [
      { label: 'Home', path: '/' },
      { label: 'Projects', path: '/projects' },
      { label: 'Experience', path: '/experience' },
      { label: 'About', path: '/about' },
    ];

    const Header: React.FC = () => {
      const [scrolled, setScrolled] = useState(false);
      const [mobileOpen, setMobileOpen] = useState(false);
      const location = useLocation();

      useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
      }, []);

      useEffect(() => {
        setMobileOpen(false);
      }, [location.pathname]);

      return (
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
              ? 'bg-[hsl(var(--background))]/80 backdrop-blur-md border-b border-white/5'
              : 'bg-transparent'
          }`}
        >
          <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--chart-3))] flex items-center justify-center transition-transform group-hover:scale-105">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="font-mono text-lg font-bold tracking-tight text-white">
                seungheechoi.portfolio
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      active
                        ? 'text-white'
                        : 'text-[hsl(var(--muted-foreground))] hover:text-white'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 bg-white/5 rounded-lg -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="hidden md:block">
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-[hsl(var(--accent))] text-white text-sm font-semibold hover:scale-105 transition-transform"
              >
                Get in Touch
              </a>
            </div>

            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden bg-[hsl(var(--background))]/95 backdrop-blur-md border-b border-white/5"
              >
                <div className="px-6 py-4 space-y-1">
                  {navItems.map((item) => {
                    const active = location.pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          active
                            ? 'bg-white/5 text-white'
                            : 'text-[hsl(var(--muted-foreground))] hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                  <a
                    href="#contact"
                    className="block px-4 py-3 mt-2 rounded-lg bg-[hsl(var(--accent))] text-white text-sm font-semibold text-center"
                  >
                    Get in Touch
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      );
    };

    export default Header;
