'use client';

import { motion } from 'framer-motion';
import { Building2, Factory, Hammer, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
      staggerChildren: 0.15,
    },
  },
};

export default function ProjectsSection() {
  return (
    <div>
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#0C2340] via-[#1B3A5C] to-[#0C2340] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-5xl font-bold text-white"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            Showcasing our expertise and successful project deliveries
          </motion.p>
        </div>
      </section>

      {/* Projects Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
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
              <motion.div key={index} variants={fadeUp}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group overflow-hidden">
                  <CardContent className="p-0">
                    {/* Project Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-[#0C2340] to-[#1B3A5C] flex items-center justify-center relative">
                      <project.icon className="h-16 w-16 text-white/20" />
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#D4A843] text-[#0C2340] text-xs font-bold px-3 py-1 rounded-full">
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

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-200">
              <h3 className="text-xl font-bold text-[#0C2340] mb-3">
                More Projects Coming Soon
              </h3>
              <p className="text-gray-500 max-w-xl mx-auto">
                We are continuously working on exciting projects across diverse sectors.
                Stay tuned for detailed case studies and project highlights showcasing our
                engineering capabilities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
