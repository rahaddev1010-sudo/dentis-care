/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Heart, ShieldAlert, Award } from 'lucide-react';
import { DOCTORS } from '../data';
import { Doctor } from '../types';
import SafeImage from './SafeImage';

interface DoctorsSectionProps {
  onSelectDoctor: (doctorName: string) => void;
}

export default function DoctorsSection({ onSelectDoctor }: DoctorsSectionProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white relative" id="doctors-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider bg-accent-500/10 border border-accent-500/20 text-accent-500 uppercase font-sans">
            ✦ Meet Our Team
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-900 mt-3 tracking-tight">
            Qualified Professionals You Can Trust
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-3 font-sans leading-relaxed">
            Our doctors hold international medical fellowships and undergo advanced clinical training annually to deliver state-of-the-art dental care.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {DOCTORS.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              onMouseEnter={() => setHoveredId(doc.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-primary-50 hover:border-primary-100 transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Doctor Headshot with Overlay details */}
              <div className="relative aspect-square overflow-hidden select-none bg-primary-50">
                <SafeImage
                  src={doc.imageUrl}
                  alt={doc.name}
                  fallbackType="doctor"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                
                {/* Credentials Overlays */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-primary-500 font-sans text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-sm border border-primary-50/50 uppercase tracking-wider flex items-center space-x-1">
                  <Award className="w-3.5 h-3.5 text-accent-500 shrink-0" />
                  <span>{doc.experience}</span>
                </div>

                {/* Smooth Slide-up full description panel on hover */}
                <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark-900 via-dark-900/90 to-transparent p-5 text-white transition-opacity duration-300 flex flex-col justify-end min-h-[50%] ${hoveredId === doc.id ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
                  <p className="text-[11px] text-accent-500 font-mono tracking-widest uppercase font-bold">
                    Specialist Profile
                  </p>
                  <p className="text-[11px] text-gray-300 font-sans leading-relaxed mt-1">
                    {doc.bio}
                  </p>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="font-display font-extrabold text-lg text-dark-900 tracking-tight leading-none group-hover:text-primary-500 transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-xs font-semibold text-accent-500 font-sans">
                    {doc.role}
                  </p>
                  <p className="text-[10px] text-gray-400 font-mono tracking-wide pt-1">
                    {doc.credentials}
                  </p>
                </div>

                {/* Booking call out */}
                <div className="pt-4 border-t border-primary-50 flex items-center justify-between">
                  {/* Social links simulation */}
                  <div className="flex space-x-2">
                    {Object.keys(doc.socials).map((platform) => (
                      <span key={platform} className="w-6.5 h-6.5 rounded-md bg-primary-50 hover:bg-accent-500 text-gray-400 hover:text-white flex items-center justify-center text-[9px] font-bold uppercase transition-colors cursor-pointer select-none">
                        {platform.substring(0, 2)}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectDoctor(doc.name)}
                    className="text-xs font-bold text-primary-500 hover:text-primary-600 flex items-center space-x-1 hover:translate-x-1.5 transition-all cursor-pointer"
                  >
                    <span>Schedule</span>
                    <Calendar className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
