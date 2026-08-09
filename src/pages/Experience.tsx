import React from 'react';
    import Layout from '../components/Layout';
    import SectionHeading from '../components/SectionHeading';
    import ExperienceCard, { Experience } from '../components/ExperienceCard';

    const experiences: Experience[] = [
      {
        id: '1',
        role: 'Lean Performance Systems Assistant',
        company: 'S&C Electric Ltd.',
        period: 'May 2026 — Aug 2026',
        description: 'Optimized manufacturing workflows and quality controls while digitizing continuous improvement operations.',
        achievements: [
          'Collected time study data and developed FlexSim process simulations for welding operations, optimizing workstation layouts to increase weekly manufacturing thorughput by 50%',
          'Collaborated with QA teams and paint line operators to establish 3 SOPs for colour changeovers and coating applications for electrostatic paint guns, conducting trials that reduced TA% powder paint waste by 26%',
          'Implemented quality control protocols, including measurement systems analysis for Elcometer thickness guages, scale calibration, drop and scratch testing, and visual defect inspections',
          'Designed a 9-form Lean Six Sigma Project Registry using Power Apps, Power Automate, and Azure, integrating JSON parsing, relational data tracking, automated PDF document generation, and Outlook workflows for user updates',
          'Developed an Excel VBA reward calculation tool, migrating the logic to a Power Apps and SharePoint interface with custom UI design and automated financial calculations',
        ],
        stack: ['FlexSim', 'VBA', 'Power Apps', 'Power Automate', 'JSON', 'Azure'],
      },
      {
        id: '2',
        role: 'Mechanical Team Member',
        company: 'University of Toronto Human Powered Vehicles Design Team',
        period: 'May 2026 — Aug 2026',
        description: 'Designed, fabricated, and repaired composite structures and mechanical subsystems for high-performance human-powered vehicles.',
        achievements: [
          'Diagnosed composite delamination in pontoon structures due to poor layer adhesion and rebuilt damaged sections',
          'Reverse-engineered a vehicle lid using an epoxy-bonded male foam mold, sanding refinement, and carbon fiber layup',
          'Built carbon fiber backrest panels with quasi-isotropic layups for stifness, fatigue resistance, and load distribution',
          'Troubleshot vacuum pump failures by identifying bearing defects and restoring operation through part replacement',
          'Tested recumbent human-powered vehicle designs to evaluate ergonomics, handling, and aerodynamic performance',
        ],
        stack: [],
      },
      {
        id: '3',
        role: 'Mechanical Designer',
        company: 'WATurbine',
        period: 'Jan 2026 — May 2026',
        description: 'Designed and structurally optimized wind turbine mechanical component using advanced CAD modeling and finite element analysis.',
        achievements: [
          'Designed a wind turbine blade mount in SolidWorks using skeleton and master modeling to improve load distribution',
          'Incorporated reinforced clamps, ribs and threaded holes to secure hollow fiberglass blades and reduce deformation',
          'Performed FEA in SolidWorks to optimize strength-to-weight ratio within manufacturing and budget constraints',
          'Analyzed stress and deformation in Ansys to refine 3D-printed components and aluminum plates for optimal thickness',
        ],
        stack: ['SolidWorks', 'Ansys'],
      },
      {
        id: '4',
        role: 'Robotics Captain & Member',
        company: 'LanceBotics',
        period: 'Sep 2022 — Jun 2025',
        description: 'Directed end-to-end robotics development, mechanical prototyping, and C++ autonomous controls while scaling team membership and engineering operations.',
        achievements: [
          'Devised a range of subsystems tailored to distinct tasks such as intake, launching, climbing, and claw mechanisms',
          'Evaluated H-drive, X-drive, and tank drivetrains to determine optimal configuration and gear ratios for 11-watt motors',
          'Refined mobile-goal clamp prototypes to minimize pneumatic air consumption through angle-based force analysis',
          'Optimized drive controls and autonomous routines in C++ to participate in VEX Robotics Competitions',
          'Led a team of 5, expanding to 15 members across all divisions of design, build, programming, and documentation',
        ],
        stack: ['C++', 'VEX V5'],
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
