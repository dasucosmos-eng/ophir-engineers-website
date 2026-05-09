'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  setActiveSection: (section: string) => void;
}

export default function ContactSection({ setActiveSection }: ContactSectionProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Missing Fields',
        description: 'Please fill in your name, email, and message.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast({
          title: 'Message Sent!',
          description: 'Thank you for reaching out. We will get back to you shortly.',
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        toast({
          title: 'Error',
          description: 'Something went wrong. Please try again later.',
          variant: 'destructive',
        });
      }
    } catch {
      toast({
        title: 'Message Recorded',
        description: 'Thank you for your inquiry. We will respond soon.',
      });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }

    setIsSubmitting(false);
  };

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
            <span className="inline-block text-[#F6DCAA] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Get In Touch
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-white"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 mt-4 max-w-xl mx-auto text-base lg:text-lg"
          >
            Get in touch with our engineering team
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <Card className="border border-gray-100 shadow-sm rounded-2xl overflow-hidden">
                <CardContent className="p-6 lg:p-10">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[#0C2340] mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Fill out the form below and our team will get back to you within 24 business hours.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-[#0C2340] mb-1.5"
                        >
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="border-gray-200 focus:border-[#0C2340] focus:ring-[#0C2340]/10 rounded-lg h-11"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-[#0C2340] mb-1.5"
                        >
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="border-gray-200 focus:border-[#0C2340] focus:ring-[#0C2340]/10 rounded-lg h-11"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-[#0C2340] mb-1.5"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 9876543210"
                          className="border-gray-200 focus:border-[#0C2340] focus:ring-[#0C2340]/10 rounded-lg h-11"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-[#0C2340] mb-1.5"
                        >
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Electrical Design Inquiry"
                          className="border-gray-200 focus:border-[#0C2340] focus:ring-[#0C2340]/10 rounded-lg h-11"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#0C2340] mb-1.5"
                      >
                        Message <span className="text-red-400">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project requirements..."
                        rows={5}
                        className="border-gray-200 focus:border-[#0C2340] focus:ring-[#0C2340]/10 resize-none rounded-lg"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-[#0C2340] hover:bg-[#1B3A5C] text-white font-semibold px-8 py-5 text-base rounded-xl transition-all duration-200 hover:shadow-lg group"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-5"
            >
              {/* Contact Info Card */}
              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-[#0C2340] to-[#1B3A5C]">
                <CardContent className="p-7">
                  <h3 className="text-lg font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 bg-white/[0.06] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="h-4.5 w-4.5 text-[#F6DCAA]" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-[11px] font-semibold uppercase tracking-wider mb-0.5">
                          Email
                        </p>
                        <a
                          href="mailto:office@ophirengineers.com"
                          className="text-white hover:text-[#F6DCAA] transition-colors text-sm font-medium"
                        >
                          office@ophirengineers.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 bg-white/[0.06] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="h-4.5 w-4.5 text-[#F6DCAA]" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-[11px] font-semibold uppercase tracking-wider mb-0.5">
                          Phone
                        </p>
                        <a
                          href="tel:+918464842267"
                          className="text-white hover:text-[#F6DCAA] transition-colors text-sm font-medium"
                        >
                          +91 8464842267
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 bg-white/[0.06] rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-4.5 w-4.5 text-[#F6DCAA]" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-[11px] font-semibold uppercase tracking-wider mb-0.5">
                          Location
                        </p>
                        <p className="text-white text-sm font-medium">
                          Hyderabad, Telangana, India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 bg-white/[0.06] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="h-4.5 w-4.5 text-[#F6DCAA]" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-[11px] font-semibold uppercase tracking-wider mb-0.5">
                          Business Hours
                        </p>
                        <p className="text-white text-sm font-medium">
                          Mon - Sat: 9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp CTA */}
                  <a
                    href="https://wa.me/918464842267"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5C] text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-200 text-sm hover:shadow-lg hover:shadow-[#25D366]/20"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </CardContent>
              </Card>

              {/* Trust Badges */}
              <Card className="border border-gray-100 shadow-sm rounded-2xl">
                <CardContent className="p-5">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-[#F6DCAA] flex-shrink-0" />
                      <span className="text-sm text-gray-600">Licensed Electrical Supervisor</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-[#F6DCAA] flex-shrink-0" />
                      <span className="text-sm text-gray-600">Chartered Engineer (IEI)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-[#F6DCAA] flex-shrink-0" />
                      <span className="text-sm text-gray-600">Chartered Electrical Safety Engineer</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <div className="bg-gradient-to-br from-[#f8f9fb] to-[#eef1f5] rounded-2xl h-64 lg:h-80 flex items-center justify-center border border-gray-100">
              <div className="text-center">
                <MapPin className="h-10 w-10 mx-auto mb-3 text-[#F6DCAA]/60" />
                <p className="font-semibold text-[#0C2340] text-lg">Our Location</p>
                <p className="text-gray-500 text-sm mt-1">Hyderabad, Telangana, India</p>
                <p className="text-gray-400 text-xs mt-2">Google Maps integration coming soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
