import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { ArrowRight, Code2, Server, Cpu, Cloud } from 'lucide-react';
    import Layout from '../components/Layout';
    import SectionHeading from '../components/SectionHeading';
    import ProjectCard, { Project } from '../components/ProjectCard';
    import ExperienceCard, { Experience } from '../components/ExperienceCard';

    const featuredProjects: Project[] = [
      {
        id: '1',
        title: 'Distributed Cache Engine',
        description: 'A high-performance, distributed in-memory cache with consistent hashing and automatic failover.',
        tags: ['Go', 'Redis', 'gRPC'],
        stars: 342,
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&h=400&fit=crop',
      },
      {
        id: '2',
        title: 'Real-time Analytics Pipeline',
        description: 'Event streaming pipeline processing 2M+ events/sec with sub-second latency for live dashboards.',
        tags: ['Kafka', 'Rust', 'ClickHouse'],
        stars: 218,
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=400&fit=crop',
      },
      {
        id: '3',
        title: 'Kubernetes Operator Framework',
        description: 'Declarative CRD-based operator for managing stateful workloads with automated scaling and recovery.',
        tags: ['Kubernetes', 'Python', 'Operator SDK'],
        stars: 156,
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=640&h=400&fit=crop',
      },
    ];

    const recentExperience: Experience[] = [
      {
        id: '1',
        role: 'Senior Software Engineer',
        company: 'Cloud Systems Inc.',
        period: '2023 — Present',
        description: 'Leading the platform infrastructure team building next-gen cloud orchestration tools.',
        achievements: [
          'Reduced deployment time by 70% through pipeline optimization',
          'Designed multi-region failover system handling 50M+ users',
        ],
        stack: ['Go', 'Kubernetes', 'AWS', 'Terraform'],
      },
      {
        id: '2',
        role: 'Backend Engineer',
        company: 'DataFlow Labs',
        period: '2020 — 2023',
        description: 'Built core data processing infrastructure for real-time analytics platform.',
        achievements: [
          'Scaled event pipeline to 2M+ events per second',
          'Implemented circuit breaker pattern reducing cascading failures by 90%',
        ],
        stack: ['Rust', 'Kafka', 'PostgreSQL', 'gRPC'],
      },
    ];

    const skills = [
      { icon: Code2, label: 'Backend Systems', value: 'Go · Rust · TypeScript' },
      { icon: Server, label: 'Infrastructure', value: 'K8s · Docker · Terraform' },
      { icon: Cpu, label: 'Performance', value: 'Profiling · Optimization' },
      { icon: Cloud, label: 'Cloud Platforms', value: 'AWS · GCP · Azure' },
    ];

    const Home: React.FC = () => {
      return (
        <Layout>
          {/* Hero */}
          <section className="relative overflow-hidden py-24 md:py-32">
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--accent))]/5 to-transparent" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[hsl(var(--muted-foreground))] mb-6">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Available for new opportunities
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
                  Engineering systems that{' '}
                  <span className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--chart-3))] bg-clip-text text-transparent">
                    scale.
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] leading-relaxed mb-8 max-w-2xl">
                  Software engineer specializing in distributed systems, cloud
                  infrastructure, and high-performance backend architecture.
                  Building the backbone of products used by millions.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[hsl(var(--accent))] text-white font-semibold hover:scale-105 transition-transform"
                  >
                    View Projects
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-white font-semibold hover:bg-white/5 transition-colors"
                  >
                    About Me
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Skills */}
          <section className="py-16 md:py-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-[hsl(var(--card))] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                      <skill.icon className="w-5 h-5 text-[hsl(var(--accent))]" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {skill.label}
                    </h3>
                    <p className="text-xs font-mono text-[hsl(var(--muted-foreground))]">
                      {skill.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="py-16 md:py-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex items-end justify-between mb-12">
                <SectionHeading
                  eyebrow="Selected Work"
                  title="Featured Projects"
                  description="A selection of systems and tools I've designed and built."
                />
                <Link
                  to="/projects"
                  className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(var(--accent))] hover:gap-2.5 transition-all"
                >
                  View All <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProjects.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </div>
            </div>
          </section>

          {/* Experience Preview */}
          <section className="py-16 md:py-24 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <SectionHeading
                eyebrow="Career"
                title="Recent Experience"
                description="Roles where I've made significant impact."
              />
              <div>
                {recentExperience.map((exp, i) => (
                  <ExperienceCard key={exp.id} experience={exp} index={i} />
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(var(--accent))] hover:gap-2.5 transition-all"
                >
                  View Full History <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="contact" className="py-16 md:py-24 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[hsl(var(--card))] to-[hsl(var(--background))] border border-white/10 p-8 md:p-12 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--accent))]/10 to-transparent" />
                <div className="relative">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Let's build something robust.
                  </h2>
                  <p className="text-[hsl(var(--muted-foreground))] mb-8 max-w-lg mx-auto">
                    Open to senior engineering roles, consulting, and interesting
                    open-source collaborations.
                  </p>
                  <a
                    href="mailto:hello@example.com"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[hsl(var(--accent))] text-white font-semibold hover:scale-105 transition-transform"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </Layout>
      );
    };

    export default Home;