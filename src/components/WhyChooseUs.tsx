/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronDown, Sparkles, Award, Star, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WHY_CHOOSE_US_ACCORDION } from '../data';

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="why-choose-us">
      {/* Background soft element */}
      <div className="absolute top-1/2 -right-1/4 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content / Image Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider bg-accent-500/10 border border-accent-500/20 text-accent-500 uppercase font-sans">
              ✦ Why Choose Us
            </span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-900 tracking-tight leading-tight">
              Reasons Thousands Trust Brightwell Dentis
            </h2>

            <p className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
              With over a decade of experience serving thousands of families, Brightwell Dentis has earned a reputation for excellence, innovation, and genuine patient care. We invest in the latest dental technology so you receive the most effective treatments available.
            </p>
            <p className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
              Our clinic is designed to be a calm, welcoming space — because we know dental anxiety is real, and we work to make every visit as comfortable as possible.
            </p>

            {/* Treatment Success Badge */}
            <div className="flex items-center space-x-4 pt-4 select-none">
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-2xl p-4 flex items-center space-x-3.5 shadow-sm">
                <div className="bg-emerald-500 text-white p-2.5 rounded-xl">
                  <Activity className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="block font-display font-extrabold text-2xl text-emerald-600 leading-none">
                    98%
                  </span>
                  <span className="block text-[11px] font-sans font-bold text-emerald-800 uppercase tracking-wide mt-1">
                    Treatment Success Rate
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Accordion Column */}
          <div className="lg:col-span-7 space-y-4">
            {WHY_CHOOSE_US_ACCORDION.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? 'border-primary-500 bg-primary-50/10 shadow-md shadow-primary-500/5'
                      : 'border-primary-50 hover:border-primary-100 bg-white'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left px-5 py-4.5 flex justify-between items-center space-x-4 focus:outline-none cursor-pointer"
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-dark-900 leading-tight flex items-center space-x-3">
                      <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-accent-500 animate-ping' : 'bg-primary-500'}`} />
                      <span>{item.title}</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary-500' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-primary-50/40">
                          <p className="text-xs sm:text-sm text-gray-500 font-sans leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
