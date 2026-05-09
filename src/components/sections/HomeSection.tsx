'use client';

import { motion } from 'framer-motion';
import {
  Cpu,
  BarChart3,
  Wrench,
  Sun,
  Mail,
  MessageCircle,
  User,
  ChevronRight,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface HomeSectionProps {
  setActiveSection: (section: string) => void;
}

const expertiseCards = [
  {
    icon: Cpu,
    title: 'Engineering & Design',
    description:
      "We specialize in the 'brain work' of electrical systems, including Single Line Diagrams (SLDs), load analysis, cable sizing, and comprehensive earthing & lightning protection designs.",
    color: 'bg-[#0C2340]',
    iconColor: 'text-[#D4A843]',
  },
  {
    icon: BarChart3,
    title: 'Specialized Power Studies',
    description:
      'Using industry-leading tools like ETAP, we conduct critical safety analysis—including Short Circuit Studies, Relay Coordination, and Arc Flash Analysis—to protect your assets and personnel.',
    color: 'bg-[#1B3A5C]',
    iconColor: 'text-[#D4A843]',
  },
  {
    icon: Wrench,
    title: 'Turnkey EPC Solutions',
    description:
      "We don't just design; we deliver. Our team manages the procurement, installation (erection), and testing of HT/LT Panels, Transformers, and Switchgear for seamless project execution.",
    color: 'bg-[#0C2340]',
    iconColor: 'text-[#D4A843]',
  },
  {
    icon: Sun,
    title: 'Renewable Energy Integration',
    description:
      'We provide specialized consultancy for Solar PV systems, focusing on design optimization, net metering, and grid connectivity.',
    color: 'bg-[#1B3A5C]',
    iconColor: 'text-[#D4A843]',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function HomeSection({ setActiveSection }: HomeSectionProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0C2340] via-[#1B3A5C] to-[#0C2340] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 border border-white rounded-full" />
          <div className="absolute bottom-20 right-10 w-96 h-96 border border-white rounded-full" />
          <div className="absolute top-40 right-1/4 w-48 h-48 border border-[#D4A843] rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <Zap className="h-5 w-5 text-[#D4A843]" />
              <span className="text-[#D4A843] text-sm font-semibold tracking-widest uppercase">
                Engineering Excellence
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              OPHIR ENGINEERS AND CONSULTANTS{' '}
              <span className="text-[#D4A843]">(OPC)</span>{' '}
              PRIVATE LIMITED
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-300 font-light mb-6">
              Engineering Reliability, Delivering Excellence.
            </h2>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-10 max-w-3xl">
              We are a premier Electrical Engineering Consultancy and EPC firm dedicated to
              delivering precise and reliable electrical engineering solutions. We provide
              detailed, code-compliant designs and reports tailored to the functional and
              technical requirements of every project. From initial load calculations to the
              final commissioning of high-voltage substations, we provide end-to-end technical
              support to ensure your infrastructure is safe, efficient, and future-ready.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => setActiveSection('services')}
                className="bg-[#D4A843] hover:bg-[#B8922E] text-[#0C2340] font-semibold px-8 py-6 text-base"
              >
                Our Services
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
              <Button
                onClick={() => setActiveSection('contact')}
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 px-8 py-6 text-base"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0C2340] mb-4">
              Our Core Expertise
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Comprehensive electrical engineering solutions spanning design, analysis,
              execution, and renewable energy integration.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {expertiseCards.map((card, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <CardContent className="p-6">
                    <div
                      className={`w-14 h-14 ${card.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <card.icon className={`h-7 w-7 ${card.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-[#0C2340] mb-2">{card.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#0C2340] to-[#1B3A5C] rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6"
          >
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Let&apos;s Build Something Reliable
              </h2>
              <p className="text-gray-300 mb-2">
                Get in touch with our engineering team for your next project.
              </p>
              <a
                href="mailto:office@ophirengineers.com"
                className="flex items-center gap-2 text-[#D4A843] hover:text-[#E8C36A] transition-colors text-lg font-medium"
              >
                <Mail className="h-5 w-5" />
                office@ophirengineers.com
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => setActiveSection('contact')}
                className="bg-[#D4A843] hover:bg-[#B8922E] text-[#0C2340] font-semibold px-6 py-5"
              >
                Contact Us
              </Button>
              <a
                href="https://wa.me/918464842267"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5C] text-white px-6 py-5 rounded-lg font-semibold transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About the Founder Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0C2340] mb-12 text-center">
              Meet Our Founder
            </h2>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              {/* Photo Placeholder */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 lg:w-52 lg:h-52 rounded-full bg-gradient-to-br from-[#0C2340] to-[#1B3A5C] flex items-center justify-center shadow-lg">
                  <User className="h-16 w-16 lg:h-20 lg:w-20 text-[#D4A843]" />
                </div>
              </div>

              {/* Bio */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#0C2340] mb-1">
                  Rakshana Ophir
                </h3>
                <p className="text-[#D4A843] font-semibold mb-6">
                  Founder, Director &amp; Chief Engineer
                </p>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    I am Rakshan Ophir, the Founder, Director, and Chief Engineer of Ophir Engineers and Consultants (OPC) Private Limited, an engineering consultancy committed to delivering reliable and efficient electrical engineering solutions. With over 4 years of experience in the industry, I specialize in electrical system design, HT/LT power distribution, renewable energy systems, and engineering consultancy services for residential, commercial, and industrial projects.
                  </p>
                  <p>
                    My professional journey has been driven by a strong passion for engineering excellence, technical precision, and practical problem-solving. As a Licensed Electrical Supervisor, Chartered Engineer, and Chartered Electrical Safety Engineer, I focus on ensuring that every project is executed with the highest standards of safety, quality, and compliance.
                  </p>
                  <p>
                    I strongly believe that engineering is not just about designing systems, but about creating sustainable, efficient, and future-ready infrastructure that adds long-term value. Through Ophir Engineers and Consultants, I aim to build a technically strong and trusted organization known for professionalism, innovation, and client-focused execution.
                  </p>
                  <p>
                    With a commitment to continuous learning and modern engineering practices, I continue to work towards delivering dependable solutions that contribute to the growth of the electrical and power sector.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
