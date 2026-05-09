'use client';

import { Mail, Phone, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

const quickLinks = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About Us' },
  { key: 'services', label: 'Services' },
  { key: 'projects', label: 'Projects' },
  { key: 'industries', label: 'Industries' },
  { key: 'contact', label: 'Contact' },
];

const serviceLinks = [
  'Electrical Design & Engineering',
  'Consultancy & Approvals',
  'Testing & Commissioning',
  'EPC Services',
  'Specialized Services',
];

export default function Footer({ setActiveSection }: FooterProps) {
  const handleQuickLinkClick = (key: string) => {
    setActiveSection(key);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070F1C] text-white">
      {/* CTA Strip */}
      <div className="bg-gradient-to-r from-[#F6DCAA] to-[#D1BB90]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#0C2340] font-semibold text-sm sm:text-base">
            Ready to power your next project?
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleQuickLinkClick('contact')}
              className="bg-[#0C2340] hover:bg-[#1B3A5C] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200"
            >
              Get a Free Quote
            </button>
            <a
              href="https://wa.me/918464842267"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5C] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1 - About (wider) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/oec-logo.png"
                alt="Ophir Engineers Logo"
                width={1000}
                height={1000}
                className="h-9 w-9 rounded-lg object-contain"
              />
              <div>
                <span className="text-white font-bold text-base tracking-wide">
                  OPHIR ENGINEERS
                </span>
                <p className="text-[#F6DCAA] text-[10px] tracking-[0.15em] uppercase">
                  & Consultants
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Ophir Engineers and Consultants (OPC) Private Limited is a premier
              Electrical Engineering Consultancy and EPC firm delivering precise,
              reliable, and code-compliant engineering solutions. From detailed
              electrical designs to substation commissioning, we provide end-to-end
              services focused on safety, efficiency, and long-term performance.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold mb-5 text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => handleQuickLinkClick(link.key)}
                    className="text-gray-400 hover:text-[#F6DCAA] transition-colors text-sm duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold mb-5 text-white uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleQuickLinkClick('services')}
                    className="text-gray-400 hover:text-[#F6DCAA] transition-colors text-sm duration-200 hover:translate-x-1 inline-block"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold mb-5 text-white uppercase tracking-wider">
              Contact Us
            </h3>
            <div className="space-y-3.5">
              <a
                href="mailto:office@ophirengineers.com"
                className="flex items-center gap-2.5 text-gray-400 hover:text-[#F6DCAA] transition-colors text-sm group"
              >
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#F6DCAA]/10 transition-colors">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <span>office@ophirengineers.com</span>
              </a>
              <a
                href="tel:+918464842267"
                className="flex items-center gap-2.5 text-gray-400 hover:text-[#F6DCAA] transition-colors text-sm group"
              >
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#F6DCAA]/10 transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <span>+91 8464842267</span>
              </a>
              <div className="flex items-start gap-2.5 text-gray-400 text-sm">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-[#0C2340] rounded-2xl h-48 flex items-center justify-center border border-white/5">
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-2 text-[#F6DCAA]/60" />
              <p className="text-gray-400 font-medium text-sm">Our Location — Hyderabad, Telangana</p>
              <p className="text-gray-500 text-xs mt-1">Google Maps integration coming soon</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            &copy; 2026 Ophir Engineers and Consultants (OPC) Pvt Ltd. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-500 hover:text-[#F6DCAA] text-xs transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3 w-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
