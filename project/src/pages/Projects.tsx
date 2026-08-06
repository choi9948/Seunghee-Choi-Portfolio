import React, { useState, useMemo } from 'react';
    import { motion } from 'framer-motion';
    import Layout from '../components/Layout';
    import SectionHeading from '../components/SectionHeading';
    import ProjectCard, { Project } from '../components/ProjectCard';

    const allProjects: Project[] = [
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
        tags: ['Rust', 'Kafka', 'ClickHouse'],
        stars: 218,
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=400&fit=crop',
      },
      {
        id: '3',
        title: 'Kubernetes Operator Framework',
        description: 'Declarative CRD-based operator for managing stateful workloads with automated scaling and recovery.',
        tags: ['Kubernetes', 'Python', 'Go'],
        stars: 156,
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=640&h=400&fit=crop',
      },
      {
        id: '4',
        title: 'API Gateway Service',
        description: 'Lightweight API gateway with rate limiting, auth, and request routing built in pure Go.',
        tags: ['Go', 'gRPC', 'Redis'],
        stars: 98,
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=640&h=400&fit=crop',
      },
      {
        id: '5',
        title: 'Database Migration Tool',
        description: 'Zero-downtime schema migration tool with rollback support and dependency analysis.',
        tags: ['Rust', 'PostgreSQL', 'CLI'],
        stars: 74,
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=640&h=400&fit=crop',
      },
      {
        id: '6',
        title: 'Observability Dashboard',
        description: 'Unified metrics, logs, and traces dashboard with custom query language and alerting.',
        tags: ['TypeScript', 'React', 'ClickHouse'],
        stars: 52,
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=400&fit=crop',
      },
    ];

    const allTags = ['All', 'Go', 'Rust', 'Kubernetes', 'TypeScript', 'Python'];

    const Projects: React.FC = () => {
      const [filter, setFilter] = useState('All');

      const filtered = useMemo(() => {
        if (filter === 'All') return allProjects;
        return allProjects.filter((p) => p.tags.includes(filter));
      }, [filter]);

      return (
        <Layout>
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <SectionHeading
                eyebrow="Portfolio"
                title="All Projects"
                description="A collection of engineering projects, from distributed systems to developer tools."
              />

              <div className="flex flex-wrap gap-2 mb-10">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setFilter(tag)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      filter === tag
                        ? 'bg-[hsl(var(--accent))] text-white'
                        : 'bg-[hsl(var(--card))] text-[hsl(var(--muted-foreground))] hover:text-white border border-white/5'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </motion.div>

              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-[hsl(var(--muted-foreground))]">
                    No projects found for this filter.
                  </p>
                </div>
              )}
            </div>
          </section>
        </Layout>
      );
    };

    export default Projects;