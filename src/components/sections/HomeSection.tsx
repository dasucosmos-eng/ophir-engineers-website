'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
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
  Shield,
  Timer,
  Award,
  ArrowRight,
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
  },
  {
    icon: BarChart3,
    title: 'Specialized Power Studies',
    description:
      'Using industry-leading tools like ETAP, we conduct critical safety analysis — including Short Circuit Studies, Relay Coordination, and Arc Flash Analysis — to protect your assets and personnel.',
  },
  {
    icon: Wrench,
    title: 'Turnkey EPC Solutions',
    description:
      "We don't just design; we deliver. Our team manages the procurement, installation (erection), and testing of HT/LT Panels, Transformers, and Switchgear for seamless project execution.",
  },
  {
    icon: Sun,
    title: 'Renewable Energy Integration',
    description:
      'We provide specialized consultancy for Solar PV systems, focusing on design optimization, net metering, and grid connectivity.',
  },
];

const stats = [
  { value: 4, suffix: '+', label: 'Years Experience', icon: Timer },
  { value: 50, suffix: '+', label: 'Projects Delivered', icon: Award },
  { value: 100, suffix: '%', label: 'Code Compliance', icon: Shield },
  { value: 24, suffix: 'hrs', label: 'Response Time', icon: Zap },
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

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function HomeSection({ setActiveSection }: HomeSectionProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#060D1A] via-[#0C2340] to-[#1B3A5C] overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-[500px] h-[500px] border border-white/[0.03] rounded-full float-animation" />
          <div className="absolute bottom-10 right-10 w-[600px] h-[600px] border border-white/[0.03] rounded-full float-animation-delay" />
          <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] border border-[#F6DCAA]/[0.06] rounded-full pulse-ring" />
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
          {/* Gold accent gradient */}
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-[#F6DCAA]/[0.03] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-2"
            >
              <Zap className="h-4 w-4 text-[#F6DCAA]" />
              <span className="text-[#F6DCAA] text-xs font-semibold tracking-[0.15em] uppercase">
                Engineering Excellence Since 2022
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[3.5rem] xl:text-6xl font-bold text-white leading-[1.1] mb-6"
            >
              OPHIR ENGINEERS{' '}
              <br className="hidden sm:block" />
              AND CONSULTANTS{' '}
              <span className="text-gold-gradient">(OPC)</span>{' '}
              <br className="hidden sm:block" />
              PRIVATE LIMITED
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl lg:text-2xl text-gray-300 font-light mb-4"
            >
              Engineering Reliability, Delivering Excellence.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 text-base lg:text-lg leading-relaxed mb-10 max-w-2xl"
            >
              We are a premier Electrical Engineering Consultancy and EPC firm dedicated to
              delivering precise and reliable electrical engineering solutions. From initial
              load calculations to the final commissioning of high-voltage substations, we
              provide end-to-end technical support to ensure your infrastructure is safe,
              efficient, and future-ready.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => setActiveSection('services')}
                className="bg-[#F6DCAA] hover:bg-[#FFF2BB] text-[#0C2340] font-semibold px-8 py-6 text-base rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#F6DCAA]/20 group"
              >
                Our Services
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button
                onClick={() => setActiveSection('contact')}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 px-8 py-6 text-base rounded-xl transition-all duration-200"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-10 lg:py-12">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon className="h-4 w-4 text-[#F6DCAA]" />
                  <span className="text-2xl lg:text-3xl font-bold text-[#0C2340]">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                </div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-[#F6DCAA] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              What We Do
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0C2340] mb-4">
              Our Core Expertise
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base lg:text-lg">
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
              <motion.div key={index} variants={fadeUp} transition={{ duration: 0.5 }}>
                <Card className="h-full border border-gray-100 shadow-sm hover:shadow-xl card-glow group rounded-2xl overflow-hidden">
                  <CardContent className="p-7">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0C2340] to-[#1B3A5C] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-[#0C2340]/10">
                      <card.icon className="h-7 w-7 text-[#F6DCAA]" />
                    </div>
                    <h3 className="text-[17px] font-bold text-[#0C2340] mb-2.5">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="py-20 lg:py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0C2340] via-[#0F2B4D] to-[#1B3A5C] rounded-3xl p-8 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#F6DCAA]/[0.04] rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#F6DCAA]/[0.03] rounded-full translate-y-1/2 -translate-x-1/3" />

            <div className="relative">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Let&apos;s Build Something Reliable
              </h2>
              <p className="text-gray-400 mb-4 text-base">
                Get in touch with our engineering team for your next project.
              </p>
              <a
                href="mailto:office@ophirengineers.com"
                className="inline-flex items-center gap-2 text-[#F6DCAA] hover:text-[#FFF2BB] transition-colors text-lg font-medium"
              >
                <Mail className="h-5 w-5" />
                office@ophirengineers.com
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 relative">
              <Button
                onClick={() => setActiveSection('contact')}
                className="bg-[#F6DCAA] hover:bg-[#FFF2BB] text-[#0C2340] font-semibold px-7 py-5 rounded-xl transition-all duration-200 hover:shadow-lg group"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <a
                href="https://wa.me/918464842267"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5C] text-white px-7 py-5 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#25D366]/20"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About the Founder Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <span className="inline-block text-[#F6DCAA] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Leadership
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0C2340]">
                Meet Our Founder
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 max-w-5xl mx-auto">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl bg-gradient-to-br from-[#0C2340] to-[#1B3A5C] flex items-center justify-center shadow-2xl shadow-[#0C2340]/20">
                    <User className="h-20 w-20 lg:h-24 lg:w-24 text-[#F6DCAA]/70" />
                  </div>
                  {/* Gold accent bar */}
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 border-2 border-[#F6DCAA]/30 rounded-2xl -z-10" />
                </div>
              </div>

              {/* Bio */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#0C2340] mb-1">
                  Rakshana Ophir
                </h3>
                <p className="text-[#F6DCAA] font-semibold mb-6 text-sm tracking-wide">
                  Founder, Director &amp; Chief Engineer
                </p>
                <div className="space-y-4 text-gray-600 leading-[1.8]">
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
