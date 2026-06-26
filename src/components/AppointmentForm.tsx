/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, User, Phone, Mail, FileText, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Appointment } from '../types';

interface AppointmentFormProps {
  onSuccessClose?: () => void;
  inlineMode?: boolean; // If true, rendering directly on the page, else in modal
}

export default function AppointmentForm({ onSuccessClose, inlineMode = false }: AppointmentFormProps) {
  const [formData, setFormData] = useState<Appointment>({
    fullName: '',
    phoneNumber: '',
    email: '',
    date: '',
    timeSlot: 'morning',
    service: 'General Checkup',
    message: '',
    agreeToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const servicesList = [
    'General Checkup',
    'Teeth Whitening',
    'Dental Implants',
    'Orthodontics & Braces',
    'Root Canal Treatment',
    'Dental Crowns & Bridges',
    'Oral Surgery',
    'Pediatric Care',
    'Gum Therapy',
    'Emergency Visit'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) return;

    setIsSubmitting(true);

    // Simulate database write
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      const generatedId = 'BS-' + Math.floor(100000 + Math.random() * 90000);
      setTicketId(generatedId);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      date: '',
      timeSlot: 'morning',
      service: 'General Checkup',
      message: '',
      agreeToTerms: false
    });
    setSubmitSuccess(false);
    if (onSuccessClose) onSuccessClose();
  };

  return (
    <div className={`w-full ${inlineMode ? '' : 'max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl relative'}`}>
      <AnimatePresence mode="wait">
        {!submitSuccess ? (
          <motion.div
            key="booking-form-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className={`p-6 sm:p-8 ${inlineMode ? 'bg-white rounded-3xl shadow-xl border border-primary-50' : ''}`}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-accent-500/10 p-2.5 rounded-xl text-accent-500">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-dark-900 leading-tight">
                  Book Your Appointment
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Complete the form below to secure your consultation slot.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="fullName" className="block text-xs font-semibold text-dark-900">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      id="fullName"
                      required
                      placeholder="e.g. Rahad Hassan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full text-sm bg-primary-50/30 border border-primary-100 rounded-xl py-2.5 pl-10 pr-4 text-dark-900 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="phoneNumber" className="block text-xs font-semibold text-dark-900">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      id="phoneNumber"
                      required
                      placeholder="e.g. +880 1700-000000"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full text-sm bg-primary-50/30 border border-primary-100 rounded-xl py-2.5 pl-10 pr-4 text-dark-900 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all font-sans"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email and Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-xs font-semibold text-dark-900">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="e.g. customer@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-sm bg-primary-50/30 border border-primary-100 rounded-xl py-2.5 pl-10 pr-4 text-dark-900 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="preferredDate" className="block text-xs font-semibold text-dark-900">
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full text-sm bg-primary-50/30 border border-primary-100 rounded-xl py-2.5 px-4 text-dark-900 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all font-sans"
                  />
                </div>
              </div>

              {/* Row 3: Time Slot and Service Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="timeSlot" className="block text-xs font-semibold text-dark-900">
                    Preferred Time Slot <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400 z-10" />
                    <select
                      id="timeSlot"
                      required
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value as 'morning' | 'afternoon' | 'evening' })}
                      className="w-full text-sm bg-primary-50/30 border border-primary-100 rounded-xl py-2.5 pl-10 pr-4 text-dark-900 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all font-sans appearance-none"
                    >
                      <option value="morning">Morning (8:00 AM – 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM – 4:00 PM)</option>
                      <option value="evening">Evening (4:00 PM – 6:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="service" className="block text-xs font-semibold text-dark-900">
                    Service Needed <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400 z-10" />
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full text-sm bg-primary-50/30 border border-primary-100 rounded-xl py-2.5 pl-10 pr-4 text-dark-900 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all font-sans appearance-none"
                    >
                      {servicesList.map((srv, index) => (
                        <option key={index} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message field */}
              <div className="space-y-1">
                <label htmlFor="message" className="block text-xs font-semibold text-dark-900">
                  Additional Notes / Symptoms <span className="text-gray-400">(optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={2}
                  placeholder="Tell us about any specific pain, dental history, or special assistance needed..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-sm bg-primary-50/30 border border-primary-100 rounded-xl py-2.5 px-4 text-dark-900 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all font-sans resize-none"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start space-x-3 pt-1">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  required
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                  className="mt-1 h-4.5 w-4.5 text-accent-500 border-primary-100 focus:ring-accent-500 focus:ring-0 rounded cursor-pointer"
                />
                <label htmlFor="agreeToTerms" className="text-xs text-gray-500 leading-relaxed cursor-pointer select-none">
                  I agree to the <span className="text-primary-500 font-medium">privacy policy</span>. I understand my contact details are stored securely to coordinate dental appointments.
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting || !formData.agreeToTerms}
                className={`w-full mt-2 font-sans font-bold text-sm text-white py-3.5 px-6 rounded-2xl flex items-center justify-center space-x-2.5 shadow-xl transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-primary-500/80 cursor-not-allowed'
                    : formData.agreeToTerms
                    ? 'bg-accent-500 hover:bg-accent-600 shadow-accent-500/10 cursor-pointer hover:scale-[1.01] active:scale-[0.99]'
                    : 'bg-gray-400 cursor-not-allowed shadow-none'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Securing Slot...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-white" />
                    <span>Book Appointment →</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="booking-success-content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="p-8 sm:p-10 text-center flex flex-col items-center justify-center space-y-6"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 shadow-inner">
              <CheckCircle2 className="w-9 h-9 text-emerald-500" />
            </div>

            <div>
              <span className="bg-emerald-50 text-emerald-600 font-mono text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider">
                Appointment Secured
              </span>
              <h3 className="font-display font-extrabold text-2xl text-dark-900 mt-4">
                Thank You, {formData.fullName}!
              </h3>
              <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
                Your consultation has been successfully booked at BrightSmile Dental. Our desk coordinator will reach out via phone or email shortly to confirm your specific hour.
              </p>
            </div>

            {/* Ticket Card Details */}
            <div className="w-full max-w-sm bg-primary-50/50 border border-primary-100/80 rounded-2xl p-5 text-left space-y-3 shadow-sm font-sans">
              <div className="flex justify-between items-center pb-2 border-b border-primary-100/50">
                <span className="text-xs text-gray-400 uppercase tracking-wide font-mono">Reference Ticket</span>
                <span className="text-xs font-mono font-bold text-primary-500">{ticketId}</span>
              </div>
              <div className="grid grid-cols-2 gap-y-3.5 gap-x-2 text-xs">
                <div>
                  <span className="block text-gray-400">Treatment:</span>
                  <span className="font-semibold text-dark-900">{formData.service}</span>
                </div>
                <div>
                  <span className="block text-gray-400">Target Date:</span>
                  <span className="font-semibold text-dark-900">{formData.date}</span>
                </div>
                <div>
                  <span className="block text-gray-400">Scheduled:</span>
                  <span className="font-semibold text-dark-900 capitalize">{formData.timeSlot} slot</span>
                </div>
                <div>
                  <span className="block text-gray-400">Client Contact:</span>
                  <span className="font-semibold text-dark-900">{formData.phoneNumber}</span>
                </div>
              </div>
            </div>

            <button
              onClick={resetForm}
              className="bg-dark-900 hover:bg-dark-800 text-white font-sans font-semibold text-sm px-6 py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              Close Confirmation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
