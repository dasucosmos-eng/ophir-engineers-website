'use client';

import { motion } from 'framer-motion';
import {
  Cpu,
  FileCheck,
  ClipboardCheck,
  HardHat,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    id: 'electrical-design',
    icon: Cpu,
    title: 'Electrical Design & Engineering',
    description:
      'Comprehensive electrical system design for industrial, commercial, and residential projects.',
    items: [
      'HT/LT Electrical System Design',
      'Load Calculations & Sizing',
      'Single Line Diagrams (SLD)',
      'Cable Sizing & Routing',
      'Earthing & Lightning Protection Design',
      'Transformer & DG Sizing',
      'Panel Design (LT/HT Panels)',
      'Power Distribution Design',
      'Lighting Design (Indoor/Outdoor)',
    ],
  },
  {
    id: 'consultancy',
    icon: FileCheck,
    title: 'Consultancy & Approvals',
    description:
      'Expert electrical consultancy and coordination services for smooth project approvals.',
    items: [
      'Electrical Consultancy for Industrial & Commercial Projects',
      'Tendering & BOQ Preparation',
      'Technical Specification Preparation',
      'Government / DISCOM Coordination Support',
      'Safety Compliance Advisory',
      'Energy Audit Support',
    ],
  },
  {
    id: 'testing',
    icon: ClipboardCheck,
    title: 'Testing, Commissioning & Supervision',
    description:
      'On-site supervision, testing, and commissioning to ensure systems perform as designed.',
    items: [
      'Site Supervision (HT/LT Installations)',
      'Testing & Commissioning of Electrical Systems',
      'Transformer & Panel Testing',
      'Inspection & Quality Assurance',
      'Electrical Safety Audits',
    ],
  },
  {
    id: 'epc',
    icon: HardHat,
    title: 'EPC Services',
    description:
      'Turnkey electrical project execution from procurement to commissioning.',
    items: [
      'Turnkey Electrical Projects (EPC)',
      'HT/LT Installation Works',
      'Substation Installation Support',
      'Industrial Electrification',
      'Commercial Electrical Infrastructure',
    ],
  },
  {
    id: 'specialized',
    icon: Zap,
    title: 'Specialized / High-Value Services',
    description:
      'Advanced engineering services including renewable energy and automation support.',
    items: [
      'Solar Plant Electrical Design',
      'Industrial Automation Support',
      'Power Quality Analysis',
      'Electrical System Optimization',
    ],
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

export default function ServicesSection() {
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
              What We Offer
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-white"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 mt-4 max-w-xl mx-auto text-base lg:text-lg"
          >
            End-to-end electrical engineering solutions for every project need
          </motion.p>
        </div>
      </section>

      {/* Service Overview Cards */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-20"
          >
            {services.map((service, index) => (
              <motion.div key={service.id} variants={fadeUp} transition={{ duration: 0.5 }}>
                <Card className="h-full border border-gray-100 bg-white shadow-sm hover:shadow-lg card-glow rounded-2xl cursor-default">
                  <CardContent className="p-5 text-center">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-[#0C2340] to-[#1B3A5C] rounded-xl flex items-center justify-center mb-3 shadow-md shadow-[#0C2340]/10 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-[#F6DCAA]" />
                    </div>
                    <h3 className="text-[13px] font-bold text-[#0C2340] leading-tight">
                      {service.title}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Service Accordion */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0C2340] mb-2">
                Detailed Service Breakdown
              </h2>
              <p className="text-gray-500 text-sm">
                Click on each service to explore the full scope of our offerings
              </p>
            </motion.div>
            <Accordion type="multiple" className="space-y-3">
              {services.map((service) => (
                <AccordionItem
                  key={service.id}
                  value={service.id}
                  className="border border-gray-100 rounded-2xl px-6 shadow-sm data-[state=open]:shadow-lg data-[state=open]:border-[#F6DCAA]/20 transition-all duration-300 bg-white"
                >
                  <AccordionTrigger className="hover:no-underline py-5 [&>svg]:text-[#F6DCAA]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#0C2340] to-[#1B3A5C] rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                        <service.icon className="h-5 w-5 text-[#F6DCAA]" />
                      </div>
                      <div className="text-left">
                        <span className="text-base font-bold text-[#0C2340]">
                          {service.title}
                        </span>
                        <p className="text-xs text-gray-400 mt-0.5 hidden sm:block">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="ml-[52px]">
                      <p className="text-gray-500 text-sm mb-4 sm:hidden">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-gray-600 text-sm"
                          >
                            <CheckCircle2 className="h-4 w-4 text-[#F6DCAA] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
