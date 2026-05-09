'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Menu, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navLinks = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About Us' },
  { key: 'services', label: 'Services' },
  { key: 'projects', label: 'Projects' },
  { key: 'industries', label: 'Industries' },
  { key: 'contact', label: 'Contact' },
];

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      setShowBackToTop(currentScrollY > 400);
      setTopBarVisible(currentScrollY < 120);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (key: string) => {
    setActiveSection(key);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={cn('sticky top-0 z-50')}>
        {/* Top Bar - hides on scroll */}
        <AnimatePresence>
          {topBarVisible && (
            <motion.div
              initial={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-[#0C2340] text-white text-sm"
            >
              <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <a
                    href="mailto:office@ophirengineers.com"
                    className="flex items-center gap-1.5 hover:text-[#F6DCAA] transition-colors duration-200"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">office@ophirengineers.com</span>
                    <span className="sm:hidden">Email Us</span>
                  </a>
                  <a
                    href="tel:+918464842267"
                    className="flex items-center gap-1.5 hover:text-[#F6DCAA] transition-colors duration-200"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>+91 8464842267</span>
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>Hyderabad, Telangana, India</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Bar with glass effect */}
        <div
          className={cn(
            'transition-all duration-300',
            isScrolled
              ? 'glass-header shadow-lg shadow-black/[0.04] border-b border-white/50'
              : 'bg-white shadow-sm'
          )}
        >
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo / Company Name */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative">
                <Image
                  src="/oec-logo.png"
                  alt="Ophir Engineers Logo"
                  width={1000}
                  height={1000}
                  className="h-9 w-9 lg:h-11 lg:w-11 rounded-lg object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#0C2340] font-bold text-base lg:text-lg tracking-wide leading-tight">
                  OPHIR ENGINEERS
                </span>
                <span className="text-[#F6DCAA] text-[10px] lg:text-xs tracking-[0.2em] uppercase leading-tight font-medium">
                  & Consultants
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => handleNavClick(link.key)}
                  className="nav-link px-3.5 py-2 text-[13px] font-medium text-[#1A1A2E]"
                >
                  {link.label}
                </button>
              ))}
              <div className="ml-4 pl-4 border-l border-gray-200">
                <Button
                  onClick={() => handleNavClick('contact')}
                  className="bg-[#0C2340] hover:bg-[#1B3A5C] text-white font-semibold text-[13px] px-6 h-9 rounded-lg transition-all duration-200 hover:shadow-md"
                >
                  Get Quote
                </Button>
              </div>
            </nav>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-[#0C2340] hover:bg-gray-100">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="bg-gradient-to-br from-[#0C2340] to-[#1B3A5C] p-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/oec-logo.png"
                      alt="Ophir Engineers Logo"
                      width={1000}
                      height={1000}
                      className="h-9 w-9 rounded-lg object-contain"
                    />
                    <div>
                      <span className="text-white font-bold text-lg tracking-wide">
                        OPHIR ENGINEERS
                      </span>
                      <p className="text-[#F6DCAA] text-xs tracking-[0.15em] uppercase">
                        & Consultants
                      </p>
                    </div>
                  </div>
                </div>
                <nav className="p-4 space-y-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.key}
                      onClick={() => handleNavClick(link.key)}
                      className={cn(
                        'w-full text-left px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-200',
                        activeSection === link.key
                          ? 'bg-[#0C2340] text-white shadow-md'
                          : 'text-[#1A1A2E] hover:bg-gray-50'
                      )}
                    >
                      {link.label}
                    </button>
                  ))}
                  <div className="pt-4 px-4">
                    <Button
                      onClick={() => handleNavClick('contact')}
                      className="w-full bg-[#0C2340] hover:bg-[#1B3A5C] text-white font-semibold rounded-xl"
                    >
                      Get Quote
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-[#0C2340] hover:bg-[#1B3A5C] text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
