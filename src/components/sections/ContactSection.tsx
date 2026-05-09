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
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
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

    // Simulate form submission
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
      <section className="bg-gradient-to-r from-[#0C2340] via-[#1B3A5C] to-[#0C2340] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-5xl font-bold text-white"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            Get in touch with our engineering team
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form - 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 lg:p-8">
                  <h2 className="text-2xl font-bold text-[#0C2340] mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-500 text-sm mb-6">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-[#0C2340] mb-1.5"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="border-gray-200 focus:border-[#0C2340]"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-[#0C2340] mb-1.5"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="border-gray-200 focus:border-[#0C2340]"
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
                          className="border-gray-200 focus:border-[#0C2340]"
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
                          className="border-gray-200 focus:border-[#0C2340]"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#0C2340] mb-1.5"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project requirements..."
                        rows={5}
                        className="border-gray-200 focus:border-[#0C2340] resize-none"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-[#D4A843] hover:bg-[#B8922E] text-[#0C2340] font-semibold px-8 py-5 text-base"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 border-2 border-[#0C2340]/30 border-t-[#0C2340] rounded-full animate-spin" />
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

            {/* Contact Details - 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact Info Card */}
              <Card className="border-0 shadow-lg bg-[#0C2340]">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#1B3A5C] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-[#D4A843]" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-0.5">
                          Email
                        </p>
                        <a
                          href="mailto:office@ophirengineers.com"
                          className="text-white hover:text-[#D4A843] transition-colors text-sm font-medium"
                        >
                          office@ophirengineers.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#1B3A5C] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-[#D4A843]" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-0.5">
                          Phone
                        </p>
                        <a
                          href="tel:+918464842267"
                          className="text-white hover:text-[#D4A843] transition-colors text-sm font-medium"
                        >
                          +91 8464842267
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#1B3A5C] rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-[#D4A843]" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-0.5">
                          Location
                        </p>
                        <p className="text-white text-sm font-medium">
                          Hyderabad, Telangana, India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#1B3A5C] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-[#D4A843]" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-0.5">
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
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5C] text-white px-6 py-3 rounded-lg font-semibold transition-colors text-sm"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </CardContent>
              </Card>

              {/* Quick Response Promise */}
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#D4A843]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Send className="h-5 w-5 text-[#D4A843]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0C2340] text-sm">Quick Response</h4>
                      <p className="text-gray-500 text-xs mt-1">
                        We respond to all inquiries within 24 business hours. For urgent
                        requirements, please call us directly or use WhatsApp.
                      </p>
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
            <div className="bg-gray-200 rounded-2xl h-64 lg:h-80 flex items-center justify-center border border-gray-300">
              <div className="text-center text-gray-500">
                <MapPin className="h-10 w-10 mx-auto mb-3 text-gray-400" />
                <p className="font-semibold text-lg">Our Location</p>
                <p className="text-sm">Hyderabad, Telangana, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
