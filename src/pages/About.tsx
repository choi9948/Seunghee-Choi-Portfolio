import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Cpu, BookOpen, Award, Music, Play, Map, X } from 'lucide-react';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import TravelMap from '../components/TravelMap';

const stats = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Projects Shipped', value: '40+' },
  { label: 'Open Source Stars', value: '1.2K' },
  { label: 'Users Impacted', value: '50M+' },
];

const values = [
  {
    icon: Cpu,
    title: 'Performance First',
    description: 'Every millisecond matters. I profile, optimize, and measure relentlessly.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Technology evolves fast. I stay current through hands-on experimentation.',
  },
  {
    icon: Award,
    title: 'Quality Over Speed',
    description: 'Sustainable velocity comes from clean architecture and solid testing.',
  },
];

interface Passion {
  id: string;
  icon: any;
  title: string;
  description: string;
  image: string;
  embedType?: 'spotify' | 'video';
  embedUrl?: string;
}

const passions: Passion[] = [
  {
    id: 'drumming',
    icon: Play,
    title: 'Drumming',
    description: 'Keeping the rhythm. Precision and timing in drumming mirrors the discipline of clean code.',
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400&h=300&fit=crop',
    embedType: 'video',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
  },
  {
    id: 'music',
    icon: Music,
    title: 'Music Curation',
    description: 'Deep focus sessions powered by curated soundscapes. Music is the ultimate engineering fuel.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop',
    embedType: 'spotify',
    embedUrl: 'https://open.spotify.com/playlist/23SnaWSewvniKLfCmOcux3?si=3dc1ee852f524657', // Placeholder playlist
  },
  {
    id: 'exploration',
    icon: Map,
    title: 'Exploration',
    description: 'Traveling to new places to understand different cultures and engineering challenges across the globe.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
  },
];

const About: React.FC = () => {
  const [activeEmbed, setActiveEmbed] = useState<Passion | null>(null);

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="About Me" title="Engineer, Builder, Problem Solver" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="prose prose-invert max-w-none mb-16"
          >
            <div className="space-y-4 text-[hsl(var(--muted-foreground))] leading-relaxed">
              <p>
                I'm a software engineer with 8+ years of experience building distributed systems, cloud infrastructure, and high-performance backend services. My work focuses on the intersection of reliability, scalability, and developer experience.
              </p>
              <p>
                Currently, I lead the platform infrastructure team at Cloud Systems Inc., where we build the orchestration tools that power our multi-region cloud platform. Previously, I built real-time data pipelines at DataFlow Labs that processed billions of events daily.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-[hsl(var(--card))] border border-white/5 text-center"
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-[hsl(var(--muted-foreground))]">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Values */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-white/10" />
              <h3 className="text-xl font-bold text-white">What I value</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-[hsl(var(--card))] border border-white/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                    <value.icon className="w-5 h-5 text-[hsl(var(--accent))]" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2">{value.title}</h4>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Passions Section */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-white/10" />
              <h3 className="text-xl font-bold text-white">
                Beyond Engineering
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {passions.map((passion, i) => (
                <motion.div
                  key={passion.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  onClick={() => passion.embedUrl && setActiveEmbed(passion)}
                  className={`group relative overflow-hidden rounded-2xl bg-[hsl(var(--card))] border border-white/5 ${
                    passion.embedUrl ? 'cursor-pointer' : ''
                  }`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={passion.image}
                      alt={passion.title}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card))] via-[hsl(var(--card))]/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-8 h-8 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center mb-3">
                      <passion.icon className="w-4 h-4 text-[hsl(var(--accent))]" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{passion.title}</h4>
                    <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
                      {passion.description}
                    </p>
                    {passion.embedUrl && (
                      <span className="inline-block mt-3 text-[10px] font-mono text-[hsl(var(--accent))] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to {passion.embedType === 'spotify' ? 'Listen' : 'Watch'}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Embed Modal */}
          <AnimatePresence>
            {activeEmbed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[hsl(var(--background))]/90 backdrop-blur-md"
                onClick={() => setActiveEmbed(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative w-full max-w-3xl aspect-video bg-[hsl(var(--card))] rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setActiveEmbed(null)}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  {activeEmbed.embedType === 'spotify' ? (
                    <iframe
                      src={activeEmbed.embedUrl}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="w-full h-full"
                    />
                  ) : (
                    <iframe
                      src={activeEmbed.embedUrl}
                      width="100%"
                      height="100%"
                      title={activeEmbed.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Travel Map Section */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-white/10" />
              <h3 className="text-xl font-bold text-white">Travel Log</h3>
            </div>
            <TravelMap />
          </div>

          {/* Contact / Resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[hsl(var(--accent))] text-white font-semibold hover:scale-105 transition-transform"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-lg border border-white/10 flex items-center justify-center text-[hsl(var(--muted-foreground))] hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
