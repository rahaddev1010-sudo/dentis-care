/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  iconName: string; // Used to select Lucide icon dynamically
  title: string;
  description: string;
  extendedDescription?: string;
  benefits: string[];
  startingPrice: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  experience: string;
  credentials: string;
  bio: string;
  imageUrl: string;
  socials: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'treatments' | 'pricing';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  imageUrl: string;
  tags: string[];
}

export interface Appointment {
  fullName: string;
  phoneNumber: string;
  email: string;
  date: string;
  timeSlot: 'morning' | 'afternoon' | 'evening';
  service: string;
  message?: string;
  agreeToTerms: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  isPopular?: boolean;
  features: { text: string; included: boolean }[];
}
