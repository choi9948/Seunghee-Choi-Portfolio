import React from 'react';
    import { Link } from 'react-router-dom';
    import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

    const Footer: React.FC = () => {
      return (
        <footer className="border-t border-white/5 bg-[hsl(var(--background))]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-2">
                <Link to="/" className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--chart-3))] flex items-center justify-center">
                    <Terminal className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-mono text-lg font-bold text-white">
                    dev.engineer
                  </span>
                </Link>
                <p className="text-[hsl(var(--muted-foreground))] text-sm max-w-md leading-relaxed">
                  Building robust, scalable systems with a focus on performance,
                  reliability, and clean architecture. Always shipping.
                </p>
                <div className="flex items-center gap-3 mt-6">
                  {[
                    { icon: Github, href: 'https://github.com/choi9948', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/seungheechoi/', label: 'LinkedIn' },
                    { icon: Mail, href: 'mailto:s234choi@uwaterloo.ca', label: 'Email' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-[hsl(var(--muted-foreground))] hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold text-sm mb-4">Navigation</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Home', path: '/' },
                    { label: 'Projects', path: '/projects' },
                    { label: 'Experience', path: '/experience' },
                    { label: 'About', path: '/about' },
                  ].map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className="text-sm text-[hsl(var(--muted-foreground))] hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-sm mb-4">Resources</h3>
                <ul className="space-y-3">
                  {['Resume', 'Blog', 'Open Source', 'Speaking'].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-[hsl(var(--muted-foreground))] hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[hsl(var(--muted-foreground))]">
                © 2026 dev.engineer. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-xs text-[hsl(var(--muted-foreground))] hover:text-white transition-colors">
                  Terms
                </a>
                <a href="#" className="text-xs text-[hsl(var(--muted-foreground))] hover:text-white transition-colors">
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
