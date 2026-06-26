/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Search, ChevronDown, HelpCircle, Play, Sparkles, X, HeartHandshake } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { FAQItem } from '../types';
import SafeImage from './SafeImage';

export default function FAQAccordion({ limit = 999 }: { limit?: number }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'treatments' | 'pricing'>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  
  // YouTube Ask the Dentist Modal Simulation
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  }).slice(0, limit);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white" id="faq-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header (Only if rendering full FAQ list) */}
        {limit > 10 && (
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider bg-accent-500/10 border border-accent-500/20 text-accent-500 uppercase font-sans">
              ✦ FAQ Center
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-900 mt-3 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-3 font-sans leading-relaxed">
              Find detailed professional answers to common questions regarding dental procedures, health guidelines, pricing plans, and appointment operations.
            </p>
          </div>
        )}

        {/* Search and Filters */}
        <div className="max-w-3xl mx-auto mb-10 space-y-4">
          {/* Search box */}
          <div className="relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search dental topics, e.g. whitening, implant cost, root canal..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-primary-50/20 border border-primary-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-dark-900 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all font-sans"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2.5 justify-center pt-2 select-none">
            {[
              { id: 'all', label: 'All FAQs' },
              { id: 'general', label: 'General / Policies' },
              { id: 'treatments', label: 'Treatments / Comfort' },
              { id: 'pricing', label: 'Cost / Financing' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-primary-500 text-white shadow-md shadow-primary-500/15'
                    : 'bg-primary-50/50 text-dark-700 hover:bg-primary-50 border border-primary-100/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* FAQ Accordion list */}
          <div className="lg:col-span-8 space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <motion.div
                      key={faq.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? 'border-primary-500 bg-primary-50/10 shadow-md shadow-primary-500/5'
                          : 'border-primary-50 hover:border-primary-100 bg-white'
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full text-left px-5 py-4 flex justify-between items-center space-x-4 focus:outline-none cursor-pointer"
                      >
                        <span className="flex items-center space-x-3 text-dark-900 font-sans font-semibold text-sm sm:text-base leading-tight">
                          <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-accent-500' : 'text-gray-400'}`} />
                          <span>{faq.question}</span>
                        </span>
                        <ChevronDown className={`w-4 h-4 shrink-0 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary-500' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                          >
                            <div className="px-5 pb-5 pt-1.5 border-t border-primary-50/50">
                              <p className="text-xs sm:text-sm text-gray-500 font-sans leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              ) : (
                <div className="text-center py-12 bg-primary-50/10 border border-dashed border-primary-100 rounded-3xl">
                  <HelpCircle className="w-12 h-12 text-gray-300 mx-auto" />
                  <p className="text-sm font-medium text-gray-500 mt-3">No matching FAQs found.</p>
                  <button
                    onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                    className="text-xs font-bold text-primary-500 mt-2 hover:underline"
                  >
                    Clear Search Filters
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* YouTube Video Interactive Block */}
          <div className="lg:col-span-4 bg-primary-50/30 border border-primary-100 rounded-3xl p-6 space-y-6">
            <div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wide bg-accent-500/15 text-accent-600 uppercase">
                Featured Video
              </span>
              <h3 className="font-display font-bold text-lg text-dark-900 mt-2 tracking-tight">
                "Ask The Dentist" Session
              </h3>
              <p className="text-xs text-gray-400 mt-1 font-sans">
                Watch Dr. James Carter discuss patient comforts and the safety of modern anesthetics.
              </p>
            </div>

            {/* Video Thumbnail with Play Overlay */}
            <div
              onClick={() => setIsVideoPlaying(true)}
              className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group shadow-lg border border-white"
            >
              <SafeImage
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600"
                alt="Dr. James Carter consulting a patient"
                fallbackType="doctor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Blur backdrop overlay */}
              <div className="absolute inset-0 bg-dark-900/40 group-hover:bg-dark-900/30 transition-colors duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-accent-500 group-hover:bg-accent-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300 animate-pulse">
                  <Play className="w-5.5 h-5.5 fill-current ml-0.5 text-white" />
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-1 border-t border-primary-100/50">
              <div className="flex items-center space-x-2.5 text-xs text-dark-900 font-sans font-medium">
                <HeartHandshake className="w-4 h-4 text-accent-500 shrink-0" />
                <span>Painless Treatment Commitment</span>
              </div>
              <p className="text-[11px] text-gray-400 font-sans leading-relaxed">
                Learn how our clinic uses rotary endodontic files, precise cold-light teeth whitening, and advanced digital scanners to guarantee a pain-free dentistry experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ask the Dentist Video Modal Simulation */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl bg-dark-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 p-2"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full z-10 hover:scale-110 transition-all cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>

              {/* High Fidelity Embedded Clinical Video Placeholder */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black flex flex-col items-center justify-center text-center p-6 space-y-4">
                {/* Background blurred medical frame */}
                <div className="absolute inset-0 opacity-40 select-none">
                  <SafeImage src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" alt="Clinic" fallbackType="clinic" className="w-full h-full object-cover blur-md" />
                </div>
                
                <div className="relative z-10 space-y-4 max-w-md">
                  <div className="w-14 h-14 bg-accent-500 text-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                    <Sparkles className="w-7 h-7 text-white animate-spin" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-white">"Ask the Dentist" Clinical Series</h4>
                    <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                      In this episode, Dr. James Carter and Dr. Priya Nair walk through digital 3D CBCT scans, laser tooth scaling, and conscious sedation options for dental implants.
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center space-x-1.5 text-[10px] font-mono font-bold tracking-widest text-accent-500 bg-accent-500/10 border border-accent-500/20 px-3.5 py-1.5 rounded-full select-none">
                      ● Streaming clinical preview
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
