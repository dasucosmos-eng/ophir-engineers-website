'use client';

import { motion } from 'framer-motion';
import {
  Cpu,
  FileCheck,
  ClipboardCheck,
  HardHat,
  Zap,
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
      staggerChildren: 0.12,
    },
  },
};

export default function ServicesSection() {
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            End-to-end electrical engineering solutions for every project need
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Service Overview Cards */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16"
          >
            {services.map((service, index) => (
              <motion.div key={service.id} variants={fadeUp}>
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                  <CardContent className="p-5 text-center">
                    <div className="w-12 h-12 mx-auto bg-[#0C2340] rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-[#D4A843]" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0C2340] leading-tight">
                      {service.title}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Service Accordion */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0C2340] mb-8 text-center">
              Detailed Service Breakdown
            </h2>
            <Accordion type="multiple" className="space-y-4">
              {services.map((service) => (
                <AccordionItem
                  key={service.id}
                  value={service.id}
                  className="border border-gray-200 rounded-xl px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#0C2340] rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="h-5 w-5 text-[#D4A843]" />
                      </div>
                      <div className="text-left">
                        <span className="text-lg font-bold text-[#0C2340]">
                          {service.title}
                        </span>
                        <p className="text-sm text-gray-500 mt-0.5 hidden sm:block">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="ml-13">
                      <p className="text-gray-500 text-sm mb-4 sm:hidden">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-600 text-sm"
                          >
                            <span className="w-1.5 h-1.5 bg-[#D4A843] rounded-full mt-2 flex-shrink-0" />
                            {item}
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
