'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import ContactSection from '@/components/sections/ContactSection';

type Section = 'home' | 'about' | 'services' | 'projects' | 'industries' | 'contact';

const sectionComponents: Record<Section, React.ComponentType<{ setActiveSection: (s: string) => void }>> = {
  home: HomeSection,
  about: AboutSection,
  services: ServicesSection,
  projects: ProjectsSection,
  industries: IndustriesSection,
  contact: ContactSection,
};

const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.35, ease: 'easeInOut' },
};

export default function Page() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const handleSetSection = (section: string) => {
    setActiveSection(section as Section);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const ActiveComponent = sectionComponents[activeSection];

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeSection={activeSection} setActiveSection={handleSetSection} />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div key={activeSection} {...pageTransition}>
            {activeSection === 'about' || activeSection === 'industries' ? (
              <ActiveComponent setActiveSection={handleSetSection} />
            ) : (
              <ActiveComponent setActiveSection={handleSetSection} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActiveSection={handleSetSection} />
    </div>
  );
}
