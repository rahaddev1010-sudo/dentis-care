/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, UserCheck, Award, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { STATS } from '../data';

export default function StatsBar() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users className="w-5 h-5 text-accent-500" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-accent-500" />;
      case 'Award': return <Award className="w-5 h-5 text-accent-500" />;
      case 'Star': return <Star className="w-5 h-5 text-accent-500 fill-current" />;
      default: return null;
    }
  };

  return (
    <section className="relative z-20 py-8 bg-dark-900 border-t border-b border-dark-800 text-white shadow-2xl select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-center">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center justify-center space-x-3 text-center md:text-left"
            >
              <div className="bg-white/5 p-3 rounded-xl border border-white/5 shrink-0 md:block hidden">
                {getIcon(stat.iconName)}
              </div>
              <div>
                <span className="block font-display font-extrabold text-2xl sm:text-3xl text-accent-500 tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="block text-xs sm:text-sm text-gray-400 font-sans mt-1">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
