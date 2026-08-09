import React, { useState, useMemo } from 'react';
    import { motion } from 'framer-motion';
    import Layout from '../components/Layout';
    import SectionHeading from '../components/SectionHeading';
    import ProjectCard, { Project } from '../components/ProjectCard';

    const allProjects: Project[] = [
      {
        id: '1',
        title: 'Blade Mount System',
        description: 'A lightweight, high-strength blade mounting assembly designed to securely fasten fiberglass wind turbine blades to the main hub shaft under heavy aerodynamic and centrifugal forces.',
        tags: ['Mechanical', 'SolidWorks', 'Ansys'],
        stars: 342,
        liveUrl: 'https://example.com',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&h=400&fit=crop',
      },
      {
        id: '2',
        title: 'Autonomous Pool-Playing Robot',
        description: 'An omni-directional robot built for pocket billiard play, featuring real-time trajectory calculation, custom 3D-printed chassis, and repeatable motorized actuation.',
        tags: ['Mechanical', 'Software', 'C++', 'SolidWorks', '3D Printing'],
        stars: 218,
        githubUrl: 'https://github.com/choi9948/autonomous-pool-playing-robot',
        liveUrl: 'https://www.youtube.com/watch?v=q3JY4VizYow',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=400&fit=crop',
      },
      {
        id: '3',
        title: 'Trinitro Trouble',
        description: 'A first-person 3D virtual escape room that blends realistic lab mechanics with TNT kinetics and molecular structure puzzles.',
        tags: ['Software', 'Unity', 'C#', 'Git'],
        stars: 156,
        githubUrl: 'https://github.com/choi9948/Chem_Escape_Room',
        liveUrl: 'https://play.unity.com/en/games/18ee9ded-f099-422a-8f58-19072cb0953d/trinitro-trouble',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=640&h=400&fit=crop',
      },
      {
        id: '4',
        title: 'Hoppy Land',
        description: 'An interactive vertical-scrolling platformer game featuring dynamic level progression, custom collision detection, customizable game modes, and local account persistence.',
        tags: ['Software', 'Java', 'Processing'],
        stars: 98,
        githubUrl: 'https://github.com/choi9948/Hoppy_Game',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=640&h=400&fit=crop',
      },
    ];

    const allTags = ['All', 'Mechanical', 'Software'];

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
