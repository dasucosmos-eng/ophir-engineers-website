'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (key: string) => {
    setActiveSection(key);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={cn('sticky top-0 z-50')}>
      {/* Top Bar */}
      <div className="bg-[#0C2340] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:office@ophirengineers.com"
              className="flex items-center gap-1.5 hover:text-[#D4A843] transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">office@ophirengineers.com</span>
              <span className="sm:hidden">Email Us</span>
            </a>
            <a
              href="tel:+918464842267"
              className="flex items-center gap-1.5 hover:text-[#D4A843] transition-colors"
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
      </div>

      {/* Navigation Bar */}
      <div
        className={cn(
          'bg-white transition-shadow duration-300',
          isScrolled ? 'shadow-md' : 'shadow-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Company Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <Image
              src="/logo.png"
              alt="Ophir Engineers Logo"
              width={48}
              height={48}
              className="h-10 w-10 lg:h-12 lg:w-12 rounded object-contain"
            />
            <div className="flex flex-col">
              <span className="text-[#0C2340] font-bold text-lg lg:text-xl tracking-wide leading-tight">
                OPHIR ENGINEERS
              </span>
              <span className="text-[#D4A843] text-[10px] lg:text-xs tracking-widest uppercase leading-tight">
                & Consultants
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.key)}
                className={cn(
                  'nav-link px-3 py-2 text-sm font-medium text-[#1A1A2E] transition-colors',
                  activeSection === link.key && 'active'
                )}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick('contact')}
              className="ml-3 bg-[#D4A843] hover:bg-[#B8922E] text-[#0C2340] font-semibold text-sm px-5"
            >
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-[#0C2340]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-white p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="bg-[#0C2340] p-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo.png"
                    alt="Ophir Engineers Logo"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded object-contain"
                  />
                  <div>
                    <span className="text-white font-bold text-lg tracking-wide">
                      OPHIR ENGINEERS
                    </span>
                    <p className="text-[#D4A843] text-xs tracking-widest uppercase">
                      & Consultants
                    </p>
                  </div>
                </div>
              </div>
              <nav className="p-4">
                {navLinks.map((link) => (
                  <button
                    key={link.key}
                    onClick={() => handleNavClick(link.key)}
                    className={cn(
                      'w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors mb-1',
                      activeSection === link.key
                        ? 'bg-[#0C2340] text-white'
                        : 'text-[#1A1A2E] hover:bg-gray-100'
                    )}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="mt-4 px-4">
                  <Button
                    onClick={() => handleNavClick('contact')}
                    className="w-full bg-[#D4A843] hover:bg-[#B8922E] text-[#0C2340] font-semibold"
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
  );
}
