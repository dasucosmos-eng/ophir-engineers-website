'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Layers, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const highlights = [
  {
    icon: Award,
    title: 'Technical Excellence',
    description:
      'Our team of experienced engineers delivers designs and solutions backed by deep technical knowledge, industry best practices, and the latest engineering tools.',
  },
  {
    icon: ShieldCheck,
    title: 'Code Compliance',
    description:
      'Every project strictly adheres to Indian (IS) and international standards (IEC, IEEE, NEC), ensuring safety and regulatory compliance.',
  },
  {
    icon: Layers,
    title: 'End-to-End Solutions',
    description:
      'From initial concept and load calculations to final commissioning and testing, we provide comprehensive turnkey solutions across the entire project lifecycle.',
  },
  {
    icon: Globe,
    title: 'Industry Expertise',
    description:
      'With experience across residential, commercial, industrial, healthcare, data centers, and renewable energy sectors, we bring versatile domain knowledge to every engagement.',
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

export default function AboutSection() {
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            Precision-engineered solutions for a powered future
          </motion.p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-6 text-gray-600 leading-relaxed text-base lg:text-lg">
              <p>
                <strong className="text-[#0C2340]">Ophir Engineers and Consultants (OPC) Private Limited</strong> is a premier Electrical Engineering Consultancy and EPC (Engineering, Procurement, and Construction) firm based in Hyderabad, Telangana. We are dedicated to delivering precise, reliable, and code-compliant electrical engineering solutions across a wide range of industries.
              </p>
              <p>
                We provide detailed designs, comprehensive reports, and end-to-end project execution services tailored to the functional and technical requirements of every project. Our expertise spans from initial load calculations and system design to the final commissioning of high-voltage substations, ensuring your infrastructure is safe, efficient, and future-ready.
              </p>
              <p>
                With a team led by experienced electrical engineers, we combine deep technical knowledge with practical field experience. Our approach is rooted in precision, safety, and strict adherence to Indian and international codes (IS, IEC, IEEE, NEC). We leverage industry-leading tools like ETAP for power system studies to deliver excellence on every engagement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0C2340] mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our commitment to quality, safety, and innovation sets us apart.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto bg-[#0C2340] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-8 w-8 text-[#D4A843]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0C2340] mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-[#D4A843]/10 text-[#D4A843] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Our Mission
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0C2340] mb-6">
              Engineering a Safer, Smarter Future
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Our mission is to empower organizations with precise, code-compliant, and
              forward-looking electrical engineering solutions. We strive to be the trusted
              partner that transforms complex engineering challenges into safe, efficient, and
              sustainable infrastructure—delivering value at every stage, from concept to
              commissioning.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
