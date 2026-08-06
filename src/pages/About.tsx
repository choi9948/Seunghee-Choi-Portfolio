import React from 'react';
    import { motion } from 'framer-motion';
    {/* eslint-disable-next-line */}
    import { Github, Linkedin, Mail, Download, Cpu, BookOpen, Award } from 'lucide-react';
    import Layout from '../components/Layout';
    import SectionHeading from '../components/SectionHeading';

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

    const About: React.FC = () => {
      return (
        <Layout>
          <section className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <SectionHeading
                eyebrow="About Me"
                title="Engineer, Builder, Problem Solver"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="prose prose-invert max-w-none mb-16"
              >
                <div className="space-y-4 text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <p>
                    I'm a software engineer with 8+ years of experience building
                    distributed systems, cloud infrastructure, and high-performance
                    backend services. My work focuses on the intersection of
                    reliability, scalability, and developer experience.
                  </p>
                  <p>
                    Currently, I lead the platform infrastructure team at Cloud
                    Systems Inc., where we build the orchestration tools that power
                    our multi-region cloud platform. Previously, I built real-time
                    data pipelines at DataFlow Labs that processed billions of
                    events daily.
                  </p>
                  <p>
                    When I'm not designing systems or writing code, you'll find me
                    contributing to open source, writing about engineering at scale,
                    or exploring the latest in systems programming with Rust and Go.
                  </p>
                </div>
              </motion.div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-[hsl(var(--card))] border border-white/5 text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[hsl(var(--muted-foreground))]">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Values */}
              <div className="mb-16">
                <h3 className="text-xl font-bold text-white mb-6">
                  What I value
                </h3>
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
                      <h4 className="text-sm font-semibold text-white mb-2">
                        {value.title}
                      </h4>
                      <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
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
                  <Download className="w-4 h-4" />
                  Download Resume
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