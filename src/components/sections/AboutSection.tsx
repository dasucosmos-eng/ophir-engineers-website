'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Layers, Globe, Target, Eye, Users, Lightbulb } from 'lucide-react';
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
      staggerChildren: 0.12,
    },
  },
};

const values = [
  { icon: Target, title: 'Precision', description: 'Every calculation, every design — meticulously crafted to meet exacting standards.' },
  { icon: ShieldCheck, title: 'Safety First', description: 'Uncompromising commitment to the safety of people, assets, and infrastructure.' },
  { icon: Users, title: 'Client Focus', description: 'We listen, understand, and deliver solutions tailored to your unique needs.' },
  { icon: Lightbulb, title: 'Innovation', description: 'Embracing modern tools, renewable energy, and forward-thinking engineering practices.' },
];

export default function AboutSection() {
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
            <span className="inline-block text-[#D4A843] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Who We Are
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-white mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto text-base lg:text-lg"
          >
            Precision-engineered solutions for a powered future
          </motion.p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[#D4A843] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Our Story
              </span>
              <div className="space-y-5 text-gray-600 leading-[1.8] text-base">
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

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#0C2340] to-[#1B3A5C] rounded-3xl p-10 lg:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: '24px 24px',
                }} />
                <div className="relative">
                  <Eye className="h-12 w-12 text-[#D4A843] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto">
                    To be a nationally recognized leader in electrical engineering consultancy,
                    setting new benchmarks for quality, innovation, and sustainable infrastructure development.
                  </p>
                </div>
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[#D4A843]/20 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 lg:py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-[#D4A843] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Our Strengths
            </span>
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
              <motion.div key={index} variants={fadeUp} transition={{ duration: 0.5 }}>
                <Card className="h-full border border-gray-100 bg-white shadow-sm hover:shadow-xl card-glow rounded-2xl">
                  <CardContent className="p-7 text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#0C2340] to-[#1B3A5C] rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-[#0C2340]/10">
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

      {/* Core Values */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-[#D4A843] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              What Drives Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0C2340] mb-4">
              Our Core Values
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeUp} transition={{ duration: 0.5 }}>
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-[#D4A843]/20 transition-colors bg-white group">
                  <div className="w-11 h-11 bg-[#D4A843]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4A843]/20 transition-colors">
                    <value.icon className="h-5 w-5 text-[#D4A843]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0C2340] text-sm mb-1">{value.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#0C2340] via-[#0F2B4D] to-[#1B3A5C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-[#D4A843]/10 text-[#D4A843] px-4 py-2 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase border border-[#D4A843]/20">
              Our Mission
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Engineering a Safer, Smarter Future
            </h2>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
              Our mission is to empower organizations with precise, code-compliant, and
              forward-looking electrical engineering solutions. We strive to be the trusted
              partner that transforms complex engineering challenges into safe, efficient, and
              sustainable infrastructure — delivering value at every stage, from concept to
              commissioning.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
