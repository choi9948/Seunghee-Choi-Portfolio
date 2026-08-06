import React from 'react';
    import Layout from '../components/Layout';
    import SectionHeading from '../components/SectionHeading';
    import ExperienceCard, { Experience } from '../components/ExperienceCard';

    const experiences: Experience[] = [
      {
        id: '1',
        role: 'Senior Software Engineer',
        company: 'Cloud Systems Inc.',
        period: '2023 — Present',
        description: 'Leading the platform infrastructure team building next-gen cloud orchestration tools.',
        achievements: [
          'Reduced deployment time by 70% through pipeline optimization',
          'Designed multi-region failover system handling 50M+ users',
          'Mentored team of 5 engineers on distributed systems best practices',
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
          'Led migration from monolith to event-driven microservices',
        ],
        stack: ['Rust', 'Kafka', 'PostgreSQL', 'gRPC'],
      },
      {
        id: '3',
        role: 'Software Engineer',
        company: 'TechStart Solutions',
        period: '2018 — 2020',
        description: 'Developed and maintained customer-facing APIs and internal tooling.',
        achievements: [
          'Built REST API serving 10K+ requests per second',
          'Automated CI/CD pipeline reducing release cycle from weeks to hours',
          'Introduced integration testing framework adopted across all teams',
        ],
        stack: ['Python', 'Django', 'Docker', 'AWS'],
      },
      {
        id: '4',
        role: 'Junior Developer',
        company: 'WebCraft Agency',
        period: '2016 — 2018',
        description: 'Started career building web applications for various clients.',
        achievements: [
          'Delivered 15+ client projects on time and within budget',
          'Established component library used across all client deliverables',
        ],
        stack: ['JavaScript', 'Node.js', 'React', 'MongoDB'],
      },
    ];

    const ExperiencePage: React.FC = () => {
      return (
        <Layout>
          <section className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <SectionHeading
                eyebrow="Career Path"
                title="Work Experience"
                description="My professional journey building systems at scale."
              />
              <div>
                {experiences.map((exp, i) => (
                  <ExperienceCard key={exp.id} experience={exp} index={i} />
                ))}
              </div>
            </div>
          </section>
        </Layout>
      );
    };

    export default ExperiencePage;