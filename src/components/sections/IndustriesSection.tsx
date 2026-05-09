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
  ArrowRight,
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
      staggerChildren: 0.08,
    },
  },
};

export default function IndustriesSection() {
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
              Our Reach
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-white"
          >
            Industries We Serve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 mt-4 max-w-xl mx-auto text-base lg:text-lg"
          >
            Versatile engineering expertise across diverse sectors
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {industries.map((industry, index) => (
              <motion.div key={index} variants={fadeUp} transition={{ duration: 0.5 }}>
                <Card className="h-full border border-gray-100 bg-white shadow-sm hover:shadow-xl card-glow rounded-2xl group cursor-default overflow-hidden">
                  <CardContent className="p-7 relative">
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0C2340]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#0C2340] to-[#1B3A5C] rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:from-[#1B3A5C] group-hover:to-[#2A5078] transition-all duration-300 shadow-md shadow-[#0C2340]/10">
                        <industry.icon className="h-7 w-7 text-[#F6DCAA]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#0C2340] mb-2.5 group-hover:text-[#1B3A5C] transition-colors">
                        {industry.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500 mb-4">Don&apos;t see your industry listed?</p>
            <button
              onClick={() => {
                const event = new CustomEvent('navigate', { detail: 'contact' });
                window.dispatchEvent(event);
              }}
              className="inline-flex items-center gap-2 text-[#0C2340] font-semibold text-sm hover:text-[#1B3A5C] transition-colors group"
            >
              Talk to us about your specific requirements
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
