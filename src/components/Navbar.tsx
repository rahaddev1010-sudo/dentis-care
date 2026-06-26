/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, MapPin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBookingModal: () => void;
}

export default function Navbar({ activeTab, setActiveTab, onOpenBookingModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'faq', label: 'FAQ' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-dark-900 text-white text-xs py-2 px-4 transition-all duration-300 md:block hidden">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-sans">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-accent-500 mr-1.5" />
              123 Medical Avenue, Dhaka, Bangladesh
            </span>
            <span className="flex items-center text-gray-300">
              <Phone className="w-3.5 h-3.5 text-accent-500 mr-1.5" />
              +880 1700-000000
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Social:</span>
            <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">Facebook</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">Twitter</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">LinkedIn</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-primary-50'
            : 'bg-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Brand Logo */}
          <button
            onClick={() => handleTabClick('home')}
            className="flex items-center space-x-2 text-left focus:outline-none"
            id="brand-logo"
          >
            <div className="bg-primary-500 p-2.5 rounded-xl shadow-md text-white flex items-center justify-center">
              <Sparkles className="w-6 h-6 animate-pulse text-accent-500" />
            </div>
            <div>
              <span className="block font-display font-bold text-xl tracking-tight text-dark-900 leading-none">
                Bright<span className="text-accent-500">Smile</span>
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-dark-700 uppercase mt-0.5">
                Dental Clinic
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 font-sans">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleTabClick(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-primary-500'
                      : 'text-dark-700 hover:text-primary-500 hover:bg-primary-50/50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+8801700000000"
              className="flex items-center space-x-2 text-dark-900 hover:text-primary-500 transition-colors text-sm font-medium mr-2"
            >
              <div className="bg-primary-50 p-2 rounded-lg">
                <Phone className="w-4 h-4 text-primary-500" />
              </div>
              <span>+880 1700-000000</span>
            </a>
            <button
              id="header-cta"
              onClick={onOpenBookingModal}
              className="bg-accent-500 hover:bg-accent-600 text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-xl shadow-lg hover:shadow-accent-500/20 transition-all duration-300 flex items-center space-x-2 hover:scale-[1.03] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={onOpenBookingModal}
              className="p-2 bg-primary-50 rounded-xl text-primary-500"
              aria-label="Book appointment"
            >
              <Calendar className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-dark-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[57px] md:hidden z-40 bg-white border-b border-primary-100 shadow-xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-primary-500 text-white'
                        : 'text-dark-900 hover:bg-primary-50 hover:text-primary-500'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
                <a
                  href="tel:+8801700000000"
                  className="flex items-center space-x-3 px-4 py-2 text-dark-900 font-medium text-sm"
                >
                  <Phone className="w-5 h-5 text-accent-500" />
                  <span>+880 1700-000000</span>
                </a>
                <div className="px-4 text-xs text-gray-500 flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-accent-500 shrink-0" />
                  <span>123 Medical Avenue, Dhaka, Bangladesh</span>
                </div>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBookingModal();
                  }}
                  className="w-full bg-accent-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment Now</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
