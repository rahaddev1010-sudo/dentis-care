/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Eye, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import SafeImage from './SafeImage';

export default function SmileGallery({ onNavigateToContact }: { onNavigateToContact: () => void }) {
  // Before-After slider simulated percentage
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);

  const handleSliderMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.touches[0].clientX, container);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons === 1 || isResizing) {
      const container = e.currentTarget.getBoundingClientRect();
      handleSliderMove(e.clientX, container);
    }
  };

  return (
    <section className="py-20 bg-light-bg overflow-hidden relative" id="smile-portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider bg-accent-500/10 border border-accent-500/20 text-accent-500 uppercase font-sans">
            ✦ Our Work
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-900 mt-3 tracking-tight">
            Smile Makeovers That Transform Lives
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-3 font-sans leading-relaxed">
            Witness the artistic precision and advanced medical technology of BrightSmile clinic. Explore real before-and-after cases of our patients.
          </p>
        </div>

        {/* Interactive Before/After Split Slider - Main Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 flex flex-col items-center">
            <span className="text-xs font-mono font-bold text-dark-700 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-accent-500" /> Click & Drag To Reveal Before/After
            </span>
            <div
              className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-ew-resize select-none touch-none bg-dark-900"
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onMouseDown={() => setIsResizing(true)}
              onMouseUp={() => setIsResizing(false)}
              onMouseLeave={() => setIsResizing(false)}
            >
              {/* After Image (Full width, sits in background) */}
              <SafeImage
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200"
                alt="Teeth transformation after professional cosmetic care"
                fallbackType="clinic"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute right-4 bottom-4 bg-accent-500/90 text-white font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-md z-20 backdrop-blur-sm shadow-md">
                After
              </div>

              {/* Before Image (Cropped using clip-path) */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <SafeImage
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200"
                  alt="Teeth appearance before treatment"
                  fallbackType="clinic"
                  className="absolute inset-0 w-full h-full object-cover filter grayscale brightness-75 blur-[4px]"
                />
                <div className="absolute left-4 bottom-4 bg-dark-900/90 text-white font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-md z-20 backdrop-blur-sm shadow-md">
                  Before
                </div>
              </div>

              {/* Slider Divider Handle Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-accent-500 hover:bg-accent-600 rounded-full border-2 border-white flex items-center justify-center text-white shadow-xl transition-colors">
                  <span className="font-bold text-xs select-none">↔</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-extrabold text-2xl text-dark-900 tracking-tight leading-tight">
              Artistic Aesthetic Restorations
            </h3>
            <p className="text-sm text-gray-500 font-sans leading-relaxed">
              Every procedure is custom-designed according to your facial structure, lip dynamics, and tooth size proportions. We combine mathematical CAD/CAM guidelines with the hand-crafted art of porcelain staining.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3 text-sm font-sans">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5 font-bold">✓</div>
                <div>
                  <h4 className="font-bold text-dark-900 leading-tight">Biocompatible Materials</h4>
                  <p className="text-xs text-gray-400 mt-1">We utilize metal-free pure porcelain and zirconia which integrate perfectly with natural body tissues.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-sm font-sans">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5 font-bold">✓</div>
                <div>
                  <h4 className="font-bold text-dark-900 leading-tight">Personalized Shade Analysis</h4>
                  <p className="text-xs text-gray-400 mt-1">Our lab technician matches the translucency, texture, and natural ridges of your surrounding teeth.</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={onNavigateToContact}
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm px-6 py-3 rounded-xl flex items-center space-x-2 shadow-lg shadow-primary-500/10 hover:scale-[1.03] transition-all cursor-pointer"
              >
                <span>Request Smile Design Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Smile Gallery Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md border border-primary-50 hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <SafeImage
                  src={item.imageUrl}
                  alt={item.title}
                  fallbackType="service"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-accent-500/90 text-white p-3 rounded-full shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-[10px] font-mono font-bold tracking-widest text-accent-600 uppercase">
                  Featured Treatment Case
                </span>
                <h3 className="font-display font-bold text-lg text-dark-900 mt-1.5 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 font-sans mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
