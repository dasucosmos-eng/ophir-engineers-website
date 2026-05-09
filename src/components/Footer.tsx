'use client';

import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

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
  'Electrical Design',
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

  return (
    <footer className="bg-[#0C2340] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#D4A843]">About Ophir</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ophir Engineers and Consultants (OPC) Private Limited is a premier Electrical
              Engineering Consultancy and EPC firm delivering precise, reliable, and
              code-compliant engineering solutions.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#D4A843]">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => handleQuickLinkClick(link.key)}
                    className="text-gray-300 hover:text-[#D4A843] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#D4A843]">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#D4A843]">Contact Info</h3>
            <div className="space-y-3">
              <a
                href="mailto:office@ophirengineers.com"
                className="flex items-center gap-2 text-gray-300 hover:text-[#D4A843] transition-colors text-sm"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>office@ophirengineers.com</span>
              </a>
              <a
                href="tel:+918464842267"
                className="flex items-center gap-2 text-gray-300 hover:text-[#D4A843] transition-colors text-sm"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 8464842267</span>
              </a>
              <div className="flex items-start gap-2 text-gray-300 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <a
                href="https://wa.me/918464842267"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 bg-[#25D366] hover:bg-[#20BA5C] text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-[#1B3A5C]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-700/50 rounded-lg h-48 flex items-center justify-center mb-8">
            <div className="text-center text-gray-400">
              <MapPin className="h-8 w-8 mx-auto mb-2" />
              <p className="font-medium">Our Location</p>
              <p className="text-sm">Hyderabad, Telangana, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-white/10" />
      <div className="max-w-7xl mx-auto px-4 py-4">
        <p className="text-center text-gray-400 text-sm">
          ©2026 Ophir Engineers and Consultants (OPC) Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
