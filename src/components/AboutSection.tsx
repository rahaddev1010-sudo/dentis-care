/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Quote, CheckCircle2, Award, Sparkles, ShieldAlert } from 'lucide-react';
import SafeImage from './SafeImage';

export default function AboutSection({ onNavigateToAbout }: { onNavigateToAbout: () => void }) {
  return (
    <section className="py-24 bg-white relative" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image & Award Frame - Left */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-5/6 shadow-2xl border-4 border-white">
              <SafeImage
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                alt="BrightSmile Clinic Interior Dhaka"
                fallbackType="clinic"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 via-transparent to-transparent" />
            </div>

            {/* floating ISO and experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-2xl border border-primary-50 max-w-xs md:block hidden select-none"
            >
              <div className="flex items-center space-x-3.5">
                <div className="bg-primary-500 p-2.5 rounded-xl text-white">
                  <Award className="w-6 h-6 text-accent-500" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-sm text-dark-900 leading-tight">
                    ISO 9001:2015
                  </h4>
                  <p className="text-[10px] text-gray-500 font-sans mt-0.5 leading-none">
                    Certified Clinical Practice
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Area - Right */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider bg-accent-500/10 border border-accent-500/20 text-accent-500 uppercase font-sans">
              ✦ About Us
            </span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-900 tracking-tight leading-tight">
              Advanced Dentistry Meets Compassionate Care
            </h2>

            <p className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
              At BrightSmile Dental Clinic, we combine cutting-edge technology with a warm, patient-centered approach to deliver exceptional oral healthcare. Our team of certified dentists and specialists is dedicated to making every visit comfortable, effective, and stress-free.
            </p>
            <p className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
              We believe that a healthy smile is the foundation of overall well-being. Whether you need a routine cleaning or a full smile makeover, we're here every step of the way.
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
              {[
                'ISO-Certified Dental Clinic',
                'Pain-Free Procedures with Modern Anesthesia',
                'Flexible Appointment Scheduling',
                'Emergency Dental Services Available 24/7'
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-2.5 text-xs sm:text-sm font-sans text-dark-800">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                  <span className="font-medium leading-normal">{point}</span>
                </div>
              ))}
            </div>

            {/* Founder Quote card */}
            <div className="bg-primary-50/40 border border-primary-100 rounded-2xl p-5 relative w-full pt-7">
              <Quote className="w-8 h-8 text-primary-500/15 absolute top-3 left-4 rotate-180" />
              <blockquote className="text-xs sm:text-sm text-dark-900 italic font-sans leading-relaxed relative z-10">
                "Our mission is simple — give every patient a reason to smile with confidence."
              </blockquote>
              <cite className="block text-xs font-semibold text-primary-500 mt-2.5 not-italic font-sans">
                — Dr. James Carter, Founder & Chief Dental Surgeon
              </cite>
            </div>

            <div className="pt-2">
              <button
                onClick={onNavigateToAbout}
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-lg hover:shadow-accent-500/10 transition-all cursor-pointer"
              >
                Learn More About Our Story
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
