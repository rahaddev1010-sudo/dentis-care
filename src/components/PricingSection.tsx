/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, X, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { PRICING_PLANS } from '../data';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  return (
    <section className="py-24 bg-light-bg" id="pricing-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider bg-accent-500/10 border border-accent-500/20 text-accent-500 uppercase font-sans">
            ✦ Our Pricing
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-900 mt-3 tracking-tight">
            Simple, Transparent Dental Pricing
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-3 font-sans leading-relaxed">
            No hidden costs. We provide comprehensive written invoices upfront. Accept all major insurance and 0% financing installment options.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto select-none">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between border relative ${
                plan.isPopular
                  ? 'border-accent-500 shadow-2xl scale-[1.02] md:scale-[1.03] z-10'
                  : 'border-primary-50 hover:border-primary-100 shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-500 text-white font-sans text-xs font-bold px-4 py-1.5 rounded-full flex items-center space-x-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  <span>MOST POPULAR</span>
                </div>
              )}

              {/* Header Info */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-xl text-dark-900 leading-none">
                  {plan.name}
                </h3>
                <div className="flex items-baseline space-x-1 pt-1">
                  <span className="text-3xl sm:text-4xl font-display font-extrabold text-dark-900 tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs text-gray-400 font-sans">
                    / visit session
                  </span>
                </div>
                <p className="text-[11px] font-medium text-gray-400 font-sans uppercase tracking-widest pt-2">
                  Included Features
                </p>

                {/* Features list */}
                <ul className="space-y-3.5 pt-1 text-xs">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2.5">
                      {feat.included ? (
                        <div className="bg-emerald-50 text-emerald-500 p-0.5 rounded-full shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <div className="bg-rose-50 text-rose-400 p-0.5 rounded-full shrink-0">
                          <X className="w-3.5 h-3.5" />
                        </div>
                      )}
                      <span className={`leading-normal ${feat.included ? 'text-dark-800 font-medium' : 'text-gray-400'}`}>
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action Button */}
              <div className="pt-8">
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3 px-5 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                    plan.isPopular
                      ? 'bg-accent-500 hover:bg-accent-600 text-white shadow-accent-500/10'
                      : 'bg-primary-500 hover:bg-primary-600 text-white'
                  }`}
                >
                  Book Session Under {plan.name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
