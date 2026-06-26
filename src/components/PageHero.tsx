/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Play, Phone, Star, ShieldCheck } from 'lucide-react';
import SafeImage from './SafeImage';

interface HeroButton {
  text: string;
  icon?: 'calendar' | 'video' | 'phone' | 'explore';
  onClick: () => void;
  style: 'primary' | 'ghost' | 'accent';
}

interface PageHeroProps {
  badgeText: string;
  headline: string | React.ReactNode;
  subheadline: string;
  imageUrl: string;
  buttons?: HeroButton[];
  floatingBadges?: {
    type: 'rating' | 'experience' | 'custom';
    text: string;
    subText?: string;
  }[];
  height?: 'large' | 'medium';
}

export default function PageHero({
  badgeText,
  headline,
  subheadline,
  imageUrl,
  buttons = [],
  floatingBadges = [],
  height = 'large'
}: PageHeroProps) {
  return (
    <section 
      className={`relative w-full overflow-hidden flex items-center justify-center bg-dark-900 text-white ${
        height === 'large' ? 'min-h-[85vh] py-20 lg:py-32' : 'min-h-[50vh] py-16 lg:py-24'
      }`}
    >
      {/* Background Image Container with parallax-style smooth zoom transition */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="w-full h-full scale-105"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <SafeImage
            src={imageUrl}
            alt="Dental Clinic background"
            fallbackType="clinic"
            className="w-full h-full opacity-40 select-none object-cover object-center"
          />
        </motion.div>
        {/* Dynamic radial & linear overlay gradients for modern medical premium contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-dark-900/40" />
      </div>

      {/* Hero content container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Area */}
        <div className="lg:col-span-8 flex flex-col items-start space-y-6">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-accent-500/10 border border-accent-500/20 text-accent-500 uppercase font-sans select-none"
          >
            {badgeText}
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]"
          >
            {headline}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-sans text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            {subheadline}
          </motion.p>

          {/* CTA Buttons */}
          {buttons.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              {buttons.map((btn, index) => (
                <button
                  key={index}
                  onClick={btn.onClick}
                  className={`flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer ${
                    btn.style === 'primary'
                      ? 'bg-accent-500 hover:bg-accent-600 text-white shadow-xl shadow-accent-500/20'
                      : btn.style === 'accent'
                      ? 'bg-primary-500 hover:bg-primary-600 text-white shadow-xl shadow-primary-500/10'
                      : 'border border-white/20 hover:border-white hover:bg-white/10 text-white backdrop-blur-sm'
                  }`}
                >
                  {btn.icon === 'calendar' && <Calendar className="w-4.5 h-4.5 shrink-0" />}
                  {btn.icon === 'video' && <Play className="w-4.5 h-4.5 shrink-0 fill-current" />}
                  {btn.icon === 'phone' && <Phone className="w-4.5 h-4.5 shrink-0" />}
                  <span>{btn.text}</span>
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Floating badge side area */}
        {floatingBadges.length > 0 && (
          <div className="lg:col-span-4 flex flex-col space-y-4 lg:items-end justify-center">
            {floatingBadges.map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.15 }}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center space-x-4 max-w-xs shadow-lg hover:bg-white/15 transition-all duration-300 select-none cursor-default"
              >
                <div className="bg-accent-500/20 p-2.5 rounded-xl text-accent-500 shrink-0">
                  {badge.type === 'rating' ? (
                    <Star className="w-5 h-5 text-accent-500 fill-current animate-pulse" />
                  ) : (
                    <ShieldCheck className="w-5 h-5 text-accent-500" />
                  )}
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white leading-tight">
                    {badge.text}
                  </h4>
                  {badge.subText && (
                    <p className="text-xs text-gray-300 mt-0.5">
                      {badge.subText}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Soft Wave SVG Divider to transition cleanly into the next section */}
      <div className="section-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill" />
        </svg>
      </div>
    </section>
  );
}
