/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Sparkles, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 text-gray-300 font-sans border-t border-dark-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand and About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-primary-500 p-2 rounded-xl text-white">
                <Sparkles className="w-5 h-5 text-accent-500" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Bright<span className="text-accent-500">Smile</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Providing exceptional dental care with modern technology and a compassionate team. Your smile is our greatest achievement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-lg bg-dark-800 hover:bg-primary-500 hover:text-white flex items-center justify-center transition-all duration-300" aria-label="Facebook">
                <span className="text-sm font-semibold">Fb</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-dark-800 hover:bg-primary-500 hover:text-white flex items-center justify-center transition-all duration-300" aria-label="Twitter">
                <span className="text-sm font-semibold">Tw</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-dark-800 hover:bg-primary-500 hover:text-white flex items-center justify-center transition-all duration-300" aria-label="LinkedIn">
                <span className="text-sm font-semibold">In</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-dark-800 hover:bg-primary-500 hover:text-white flex items-center justify-center transition-all duration-300" aria-label="Instagram">
                <span className="text-sm font-semibold">Ig</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold text-base mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-accent-500">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Our Services' },
                { id: 'faq', label: 'Frequently Asked' },
                { id: 'blog', label: 'Oral Health Blog' },
                { id: 'contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-accent-500 text-gray-400 hover:translate-x-1.5 transition-all duration-300 focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-white font-display font-semibold text-base mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-accent-500">
              Dental Services
            </h3>
            <ul className="space-y-3.5 text-sm">
              {[
                { label: 'Teeth Whitening', tab: 'services' },
                { label: 'Root Canal Treatment', tab: 'services' },
                { label: 'Dental Implants', tab: 'services' },
                { label: 'Orthodontics & Braces', tab: 'services' },
                { label: 'Dental Crowns & Bridges', tab: 'services' },
                { label: 'Oral Surgery', tab: 'services' }
              ].map((srv, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(srv.tab)}
                    className="hover:text-accent-500 text-gray-400 hover:translate-x-1.5 transition-all duration-300 text-left focus:outline-none"
                  >
                    {srv.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-white font-display font-semibold text-base mb-1 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-accent-500">
              Newsletter
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Subscribe for oral health tips, special offers, and clinic updates from our dental experts.
            </p>
            
            {subscribed ? (
              <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-3 flex items-center space-x-2 text-emerald-400 text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400 animate-bounce" />
                <span>Thank you! You have successfully subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex relative">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-dark-800 text-white text-xs px-4 py-3 rounded-xl border border-dark-700 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all pr-12"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3.5 bg-accent-500 hover:bg-accent-600 rounded-lg text-white transition-all flex items-center justify-center cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-4 border-t border-dark-800 space-y-3.5 text-xs">
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                <span>123 Medical Avenue, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 text-accent-500 shrink-0" />
                <span>+880 1700-000000</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Clock className="w-4 h-4 text-accent-500 shrink-0" />
                <span>Mon–Fri: 8AM–6PM | Sat: 9AM–4PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>© 2025 BrightSmile Dental Clinic. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-accent-500 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-accent-500 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
