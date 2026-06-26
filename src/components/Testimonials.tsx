/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-20 bg-dark-900 text-white relative overflow-hidden" id="testimonials">
      {/* Background ambient lighting blobs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider bg-accent-500/10 border border-accent-500/20 text-accent-500 uppercase font-sans">
            ✦ Patient Reviews
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 tracking-tight">
            What Our Patients Say About Us
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-3 font-sans leading-relaxed">
            Real feedback from thousands of smiling patients who have experienced our pain-free, premium dental diagnostics and care.
          </p>
        </div>

        {/* Carousel Layout for deep focus on testimonials */}
        <div className="max-w-4xl mx-auto relative px-4">
          
          {/* Big Quote Decorative Icon */}
          <div className="absolute -top-10 left-0 text-white/5 pointer-events-none select-none">
            <Quote className="w-24 h-24 rotate-180" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative backdrop-blur-md"
            >
              {/* Star Ratings */}
              <div className="flex items-center space-x-1.5 mb-6">
                {Array.from({ length: TESTIMONIALS[activeIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-500 fill-current animate-pulse" />
                ))}
              </div>

              {/* Text */}
              <p className="font-sans text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed italic mb-8">
                "{TESTIMONIALS[activeIndex].text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-500 font-display font-bold shadow-inner">
                    {TESTIMONIALS[activeIndex].author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-white">
                      {TESTIMONIALS[activeIndex].author}
                    </h4>
                    <p className="text-xs text-gray-400 font-sans mt-0.5">
                      {TESTIMONIALS[activeIndex].role}
                    </p>
                  </div>
                </div>
                
                <span className="hidden sm:inline-flex items-center space-x-1 text-xs font-mono font-bold text-accent-500 bg-accent-500/10 px-3 py-1 rounded-full border border-accent-500/20 select-none">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" /> Verified patient
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white flex items-center justify-center transition-all duration-300 focus:outline-none cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'w-8 bg-accent-500' : 'w-2.5 bg-white/20'
                  } focus:outline-none cursor-pointer`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white flex items-center justify-center transition-all duration-300 focus:outline-none cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
