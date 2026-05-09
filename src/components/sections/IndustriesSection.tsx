'use client';

import { motion } from 'framer-motion';
import {
  Building,
  Building2,
  Factory,
  Hospital,
  Server,
  Sun,
  Warehouse,
  Landmark,
  HardHat,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const industries = [
  {
    icon: Building,
    title: 'Residential Apartments',
    description:
      'Complete electrical design for residential towers, villas, and gated communities including power distribution, safety systems, and energy management.',
  },
  {
    icon: Building2,
    title: 'Commercial Buildings',
    description:
      'Electrical engineering for offices, malls, and mixed-use developments with emphasis on reliability, energy efficiency, and fire safety compliance.',
  },
  {
    icon: Factory,
    title: 'Industrial Plants',
    description:
      'Power distribution, motor control centers, and process electrification for manufacturing units and industrial facilities.',
  },
  {
    icon: Hospital,
    title: 'Hospitals & Healthcare',
    description:
      'Critical power systems design for hospitals including emergency backup, UPS systems, OT/ICU power reliability, and medical-grade safety.',
  },
  {
    icon: Server,
    title: 'Data Centers',
    description:
      'High-reliability electrical design for data centers with redundant power, precision cooling, and Tier-rated infrastructure support.',
  },
  {
    icon: Sun,
    title: 'Solar Plants',
    description:
      'Electrical design for solar PV systems including grid-tied and off-grid configurations, net metering, and power evacuation.',
  },
  {
    icon: Warehouse,
    title: 'Warehouses & Logistics',
    description:
      'Efficient power distribution for warehouses and logistics hubs, including lighting, HVAC, and material handling electrification.',
  },
  {
    icon: Landmark,
    title: 'Government / Public Sector',
    description:
      'Electrical consultancy for government buildings, public infrastructure, and institutional projects with strict compliance and documentation.',
  },
  {
    icon: HardHat,
    title: 'Infrastructure',
    description:
      'Power systems for infrastructure projects including substations, transmission, street lighting, and utility-scale electrical works.',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function IndustriesSection() {
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
            Industries We Serve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            Versatile engineering expertise across diverse sectors
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-gray-500 max-w-3xl mx-auto text-base lg:text-lg">
              Our extensive experience across multiple industries enables us to understand
              the unique electrical engineering challenges each sector presents, and deliver
              tailored solutions that meet specific requirements.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industries.map((industry, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-[#0C2340] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#1B3A5C] transition-all duration-300">
                      <industry.icon className="h-7 w-7 text-[#D4A843]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0C2340] mb-2 group-hover:text-[#1B3A5C] transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
