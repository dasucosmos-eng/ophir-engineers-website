'use client';

import { motion } from 'framer-motion';
import { Building2, Factory, Wrench, Hammer, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectsSectionProps {
  setActiveSection: (section: string) => void;
}

const placeholderProjects = [
  {
    icon: Building2,
    title: 'Commercial Complex Electrification',
    category: 'Commercial',
    description:
      'Complete HT/LT electrical design and installation for a multi-story commercial building including power distribution, fire alarm systems, and emergency power backup.',
  },
  {
    icon: Factory,
    title: 'Industrial Plant Power Distribution',
    category: 'Industrial',
    description:
      'Design and commissioning of a comprehensive power distribution network for an industrial manufacturing facility with transformer installation and HT panel setup.',
  },
  {
    icon: Wrench,
    title: 'Substation Commissioning',
    category: 'Infrastructure',
    description:
      'Full testing and commissioning of a 33kV/11kV substation including relay coordination, protection system verification, and power quality analysis.',
  },
  {
    icon: Hammer,
    title: 'Residential Township Electrical Infrastructure',
    category: 'Residential',
    description:
      'End-to-end electrical infrastructure design and EPC execution for a large residential township including SLD design, earthing systems, and street lighting.',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ProjectsSection({ setActiveSection }: ProjectsSectionProps) {
  return (
    <div>
      {/* Banner */}
      <section className="relative bg-gradient-to-br from-[#060D1A] via-[#0C2340] to-[#1B3A5C] py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#F6DCAA] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Our Portfolio
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-white"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 mt-4 max-w-xl mx-auto text-base lg:text-lg"
          >
            Showcasing our expertise and successful project deliveries
          </motion.p>
        </div>
      </section>

      {/* Projects Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-gray-500 max-w-3xl mx-auto text-base lg:text-lg leading-relaxed">
              Our project portfolio showcases our expertise across various sectors including
              commercial, industrial, residential, and infrastructure projects. Each project
              reflects our commitment to quality, safety, and engineering excellence.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {placeholderProjects.map((project, index) => (
              <motion.div key={index} variants={fadeUp} transition={{ duration: 0.5 }}>
                <Card className="h-full border border-gray-100 shadow-sm hover:shadow-xl card-glow rounded-2xl group overflow-hidden">
                  <CardContent className="p-0">
                    {/* Project Image Placeholder */}
                    <div className="h-52 bg-gradient-to-br from-[#0C2340] via-[#0F2B4D] to-[#1B3A5C] flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: '20px 20px',
                      }} />
                      <project.icon className="h-16 w-16 text-white/10 group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#F6DCAA] text-[#0C2340] text-[11px] font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#0C2340] mb-2 group-hover:text-[#1B3A5C] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14"
          >
            <div className="bg-gradient-to-br from-[#f8f9fb] to-white rounded-2xl p-8 lg:p-12 border border-gray-100 text-center">
              <h3 className="text-xl font-bold text-[#0C2340] mb-3">
                More Projects Coming Soon
              </h3>
              <p className="text-gray-500 max-w-xl mx-auto mb-6 text-sm">
                We are continuously working on exciting projects across diverse sectors.
                Stay tuned for detailed case studies and project highlights.
              </p>
              <button
                onClick={() => setActiveSection('contact')}
                className="inline-flex items-center gap-2 text-[#0C2340] font-semibold text-sm hover:text-[#1B3A5C] transition-colors group"
              >
                Discuss your project with us
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
