/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Award,
  Heart,
  Smile,
  CheckCircle2,
  PhoneCall,
  X,
  ShieldCheck,
  Building,
  Target,
  BadgeAlert,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink
} from 'lucide-react';

// Sub-components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageHero from './components/PageHero';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import SmileGallery from './components/SmileGallery';
import Testimonials from './components/Testimonials';
import DoctorsSection from './components/DoctorsSection';
import PricingSection from './components/PricingSection';
import FAQAccordion from './components/FAQAccordion';
import BlogGrid from './components/BlogGrid';
import SafeImage from './components/SafeImage';
import AppointmentForm from './components/AppointmentForm';

// Data
import { SERVICES, BONUS_SERVICES, BLOG_POSTS } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedDoctorName, setSelectedDoctorName] = useState('');
  const [selectedPlanName, setSelectedPlanName] = useState('');
  const [selectedServiceName, setSelectedServiceName] = useState('');

  // Handle plan and doctor booking flow
  const handleSelectPlan = (planName: string) => {
    setSelectedPlanName(planName);
    setIsBookingModalOpen(true);
  };

  const handleSelectDoctor = (doctorName: string) => {
    setSelectedDoctorName(doctorName);
    setIsBookingModalOpen(true);
  };

  // Close booking modal and reset selections
  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
    setSelectedDoctorName('');
    setSelectedPlanName('');
    setSelectedServiceName('');
  };

  // Hero button configurations to avoid nested brace JSX parser conflicts
  const homeHeroButtons = [
    { text: 'Book an Appointment', icon: 'calendar' as const, style: 'primary' as const, onClick: () => setIsBookingModalOpen(true) },
    { text: 'Watch Our Story', icon: 'video' as const, style: 'ghost' as const, onClick: () => {
        setActiveTab('faq');
        window.scrollTo({ top: 400, behavior: 'smooth' });
      }
    }
  ];

  const aboutHeroButtons = [
    { text: 'Book Consultation', icon: 'calendar' as const, style: 'primary' as const, onClick: () => setIsBookingModalOpen(true) },
    { text: 'View Clinic Facilities', icon: 'explore' as const, style: 'ghost' as const, onClick: () => {
        const el = document.getElementById('facilities-checklist');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  ];

  const servicesHeroButtons = [
    { text: 'Book Free Consultation', icon: 'calendar' as const, style: 'primary' as const, onClick: () => setIsBookingModalOpen(true) },
    { text: 'Browse Bonus List', icon: 'explore' as const, style: 'ghost' as const, onClick: () => {
        const el = document.getElementById('bonus-services-row');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white text-dark-900 flex flex-col font-sans selection:bg-accent-500 selection:text-white antialiased">
      {/* Sticky Navigation menu */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            {/* =======================================
                PAGE 1: HOME
                ======================================= */}
            {activeTab === 'home' && (
              <>
                <PageHero
                  badgeText="✦ Trusted Dental Care Since 2010"
                  headline={
                    <>
                      Modern Dentistry for a<br />
                      <span className="text-accent-500">Brighter, Healthier</span> Smile
                    </>
                  }
                  subheadline="Experience world-class dental care with our team of certified specialists. From routine checkups to advanced cosmetic procedures — your smile is our priority."
                  imageUrl="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920"
                  buttons={homeHeroButtons}
                  floatingBadges={[
                    { type: 'rating', text: '4.9/5 Patient Rating', subText: 'Based on 1,200+ reviews' },
                    { type: 'experience', text: '12,000+ Happy Patients', subText: 'Smiles transformed daily' }
                  ]}
                />

                <StatsBar />

                <AboutSection onNavigateToAbout={() => setActiveTab('about')} />

                {/* Services Grid Preview */}
                <section className="py-20 bg-light-bg relative">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                      <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider bg-accent-500/10 border border-accent-500/20 text-accent-500 uppercase font-sans">
                        ✦ Our Services
                      </span>
                      <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-900 mt-3 tracking-tight">
                        Comprehensive Dental Services for Every Need
                      </h2>
                      <p className="text-sm text-gray-500 mt-3 font-sans leading-relaxed">
                        From preventive care to complex restorative procedures, we offer complete dental solutions under one roof.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                      {SERVICES.slice(0, 6).map((srv) => (
                        <div
                          key={srv.id}
                          className="bg-white border border-primary-50 hover-lift rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
                        >
                          <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-500 flex items-center justify-center font-bold">
                              <Sparkles className="w-5 h-5 text-accent-500 animate-pulse" />
                            </div>
                            <h3 className="font-display font-bold text-lg text-dark-900 tracking-tight leading-snug">
                              {srv.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed line-clamp-3">
                              {srv.description}
                            </p>
                          </div>
                          <div className="pt-6 border-t border-primary-50/50 mt-6 flex justify-between items-center">
                            <span className="text-[11px] font-mono font-bold text-accent-500 bg-accent-500/5 px-2.5 py-1 rounded-md">
                              Starting {srv.startingPrice}
                            </span>
                            <button
                              onClick={() => setActiveTab('services')}
                              className="text-xs font-bold text-primary-500 hover:text-primary-600 flex items-center space-x-1 hover:translate-x-1 transition-all cursor-pointer"
                            >
                              <span>Explore Details</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center pt-12">
                      <button
                        onClick={() => {
                          setActiveTab('services');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm px-7 py-3 rounded-xl shadow-lg shadow-primary-500/10 hover:scale-[1.02] transition-all cursor-pointer"
                      >
                        View All Services →
                      </button>
                    </div>
                  </div>
                </section>

                <WhyChooseUs />

                <SmileGallery onNavigateToContact={() => setActiveTab('contact')} />

                <Testimonials />

                <DoctorsSection onSelectDoctor={handleSelectDoctor} />

                <PricingSection onSelectPlan={handleSelectPlan} />

                {/* FAQ Preview (Home) */}
                <FAQAccordion limit={3} />

                {/* Blog Highlights on Home */}
                <section className="py-20 bg-light-bg border-t border-b border-primary-50/50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                      <div>
                        <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider bg-accent-500/10 border border-accent-500/20 text-accent-500 uppercase font-sans">
                          ✦ Blog & News
                        </span>
                        <h2 className="font-display font-bold text-2xl sm:text-3xl text-dark-900 mt-3 tracking-tight">
                          Everything You Need to Know About Oral Health
                        </h2>
                      </div>
                      <button
                        onClick={() => {
                          setActiveTab('blog');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-xs sm:text-sm font-bold text-primary-500 hover:text-primary-600 flex items-center space-x-1 hover:translate-x-1.5 transition-all cursor-pointer mt-4 md:mt-0"
                      >
                        <span>View All Articles</span>
                        <ArrowRight className="w-4.5 h-4.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {BLOG_POSTS.slice(1, 4).map((post) => (
                        <div
                          key={post.id}
                          onClick={() => {
                            setActiveTab('blog');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="bg-white border border-primary-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary-100 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                        >
                          <div className="relative aspect-video">
                            <SafeImage
                              src={post.imageUrl}
                              alt={post.title}
                              fallbackType="blog"
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute left-3 top-3 bg-accent-500 text-white font-sans text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                              {post.category}
                            </span>
                          </div>
                          <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                            <div className="space-y-1.5">
                              <h4 className="font-display font-bold text-sm text-dark-900 hover:text-primary-500 transition-colors line-clamp-2">
                                {post.title}
                              </h4>
                              <p className="text-xs text-gray-500 font-sans line-clamp-2 leading-relaxed">
                                {post.excerpt}
                              </p>
                            </div>
                            <span className="text-[10px] font-mono font-semibold text-gray-400 block pt-2 border-t border-primary-50/50">
                              By {post.author} • {post.readTime}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Ready to Transform Your Smile Home CTA strip */}
                <section className="bg-gradient-to-br from-primary-700 to-primary-600 text-white py-16 relative overflow-hidden select-none">
                  {/* Background flare */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
                  <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
                    <span className="bg-accent-500 text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                      ✦ Start Your Makeover Today
                    </span>
                    <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                      Ready to Transform Your Smile?
                    </h2>
                    <p className="text-sm sm:text-base text-gray-100 max-w-2xl mx-auto leading-relaxed">
                      Book a free consultation today and take the first step toward better oral health. Meet our board-certified surgeons and smile design technicians in Gulshan, Dhaka.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 pt-2">
                      <button
                        onClick={() => setIsBookingModalOpen(true)}
                        className="bg-accent-500 hover:bg-accent-600 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-xl shadow-accent-500/10 hover:scale-[1.03] transition-all cursor-pointer"
                      >
                        Schedule Appointment
                      </button>
                      <a
                        href="tel:+8801700000000"
                        className="border border-white/25 hover:border-white hover:bg-white/10 text-white font-semibold text-sm px-6 py-3 rounded-xl backdrop-blur-sm transition-all"
                      >
                        Call Now: +880 1700-000000
                      </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 text-xs text-gray-200 border-t border-white/10 max-w-2xl mx-auto">
                      <div>
                        <span className="block font-bold text-white">Mon–Fri:</span>
                        <span>8:00 AM – 6:00 PM</span>
                      </div>
                      <div>
                        <span className="block font-bold text-white">Saturday:</span>
                        <span>9:00 AM – 4:00 PM</span>
                      </div>
                      <div>
                        <span className="block font-bold text-white">Sunday:</span>
                        <span className="text-accent-500 font-semibold">24/7 Emergency Only</span>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* =======================================
                PAGE 2: ABOUT
                ======================================= */}
            {activeTab === 'about' && (
              <>
                <PageHero
                  badgeText="About Brightwell Dentis"
                  headline={
                    <>
                      More Than a Dental Clinic —<br />
                      We're Your Lifelong Oral Health Partner
                    </>
                  }
                  subheadline="Founded in 2010, Brightwell Dentis has grown from a single-chair practice into a multi-specialty dental center trusted by over 15,000 patients across Bangladesh. Our story is built on compassion, innovation, and a relentless commitment to exceptional care."
                  imageUrl="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1920"
                  buttons={aboutHeroButtons}
                />

                {/* Our Story detailed segment */}
                <section className="py-20 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                      <div className="lg:col-span-7 space-y-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-accent-500/15 text-accent-600 uppercase">
                          Our Journey
                        </span>
                        <h2 className="font-display font-bold text-3xl text-dark-900 tracking-tight leading-tight">
                          How Brightwell Dentis Began
                        </h2>
                        <div className="font-sans text-sm sm:text-base text-gray-500 space-y-4 leading-relaxed">
                          <p>
                            Dr. James Carter opened Brightwell Dentis in 2010 with a single mission: to make high-quality dental care accessible, affordable, and anxiety-free for every patient. What started as a small neighborhood clinic has grown into a full-service dental center with 10 specialized departments and a team of 25+ expert professionals.
                          </p>
                          <p>
                            Over the years, we've expanded our services, upgraded our technology, and welcomed patients from across the country. But one thing has never changed — our commitment to treating every patient like family.
                          </p>
                          <p>
                            Today, Brightwell Dentis is proud to be one of the region's most trusted names in dental healthcare, combining the latest advancements in dental science with a warm, personalized approach.
                          </p>
                        </div>
                      </div>

                      {/* Side Photo Frame with graphics */}
                      <div className="lg:col-span-5 relative">
                        <div className="rounded-3xl overflow-hidden aspect-4/3 shadow-2xl border-4 border-white">
                          <SafeImage
                            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                            alt="Surgeons in operations Dhaka"
                            fallbackType="clinic"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Mission, Vision & Core Values */}
                <section className="py-20 bg-light-bg border-t border-b border-primary-50/50 relative">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                      <div className="bg-white rounded-3xl p-8 shadow-md border border-primary-50 space-y-4 flex flex-col justify-between">
                        <div className="space-y-3">
                          <div className="w-12 h-12 rounded-2xl bg-accent-500/10 text-accent-500 flex items-center justify-center">
                            <Target className="w-6 h-6 text-accent-500" />
                          </div>
                          <h3 className="font-display font-bold text-xl text-dark-900 tracking-tight">Our Mission</h3>
                          <p className="text-sm text-gray-500 font-sans leading-relaxed">
                            To deliver exceptional, compassionate dental care that improves lives — one smile at a time. We prioritize patients comfort above all, ensuring pain-free dental interventions.
                          </p>
                        </div>
                        <span className="text-[10px] font-mono text-gray-400 block pt-4 uppercase font-bold tracking-widest border-t border-primary-50">
                          Primary Clinic Objective
                        </span>
                      </div>

                      <div className="bg-white rounded-3xl p-8 shadow-md border border-primary-50 space-y-4 flex flex-col justify-between">
                        <div className="space-y-3">
                          <div className="w-12 h-12 rounded-2xl bg-accent-500/10 text-accent-500 flex items-center justify-center">
                            <Building className="w-6 h-6 text-accent-500" />
                          </div>
                          <h3 className="font-display font-bold text-xl text-dark-900 tracking-tight">Our Vision</h3>
                          <p className="text-sm text-gray-500 font-sans leading-relaxed">
                            To be the most trusted dental clinic in South Asia, where every patient leaves healthier and more confident than when they arrived. Establishing benchmarks of excellence.
                          </p>
                        </div>
                        <span className="text-[10px] font-mono text-gray-400 block pt-4 uppercase font-bold tracking-widest border-t border-primary-50">
                          Long-term Clinic Vision
                        </span>
                      </div>
                    </div>

                    {/* Core Values Bento-grid */}
                    <div className="text-center max-w-xl mx-auto mb-10">
                      <h3 className="font-display font-bold text-2xl text-dark-900 tracking-tight">Our Core Clinical Values</h3>
                      <p className="text-xs text-gray-500 mt-1.5 font-sans">
                        Five guiding principles defining our day-to-day dental surgeries and diagnostic services.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                      {[
                        { title: 'Excellence', desc: 'We never compromise on dental quality, materials, or surgical technique.' },
                        { title: 'Compassion', desc: 'Every patient deserves medical empathy, patience, and complete respect.' },
                        { title: 'Innovation', desc: 'We continuously invest in the latest global dental equipment and research.' },
                        { title: 'Integrity', desc: 'Honest pricing structure, clear diagnosis breakdown, and no surprises.' },
                        { title: 'Community', desc: 'We actively give back through free dental camps and school oral healthcare programs.' }
                      ].map((val, i) => (
                        <div key={i} className="bg-white rounded-2xl p-5 border border-primary-50 shadow-sm text-center space-y-2">
                          <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-500 flex items-center justify-center mx-auto text-xs font-bold">
                            {i + 1}
                          </div>
                          <h4 className="font-display font-bold text-sm text-dark-900">{val.title}</h4>
                          <p className="text-[10px] text-gray-500 font-sans leading-relaxed">{val.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Achievements Segment */}
                <section className="py-20 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-xl mx-auto mb-12">
                      <h3 className="font-display font-bold text-2xl text-dark-900 tracking-tight">Our Historic Achievements</h3>
                      <p className="text-xs text-gray-500 mt-1.5 font-sans">
                        Acknowledging over a decade of verified dental excellence and service.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                      {[
                        { title: 'Best Dental Clinic of the Year', desc: 'Awarded by Healthcare Awards 2023 for modern standards.' },
                        { title: 'ISO 9001:2015 Certification', desc: 'Internationally approved clinical sanitation and patient security guidelines.' },
                        { title: 'Bangladesh Dental Society Member', desc: 'Affiliated with senior dental associations and expert councils.' },
                        { title: '3 International Affiliations', desc: 'Direct technical links with advanced European cosmetic dentistry laboratories.' },
                        { title: '5,000+ Free Treatments', desc: 'Completed through community outreach campaigns for under-privileged families.' }
                      ].map((ach, idx) => (
                        <div key={idx} className="bg-primary-50/20 border border-primary-50 rounded-2xl p-5 space-y-2 flex flex-col justify-between">
                          <div className="space-y-2">
                            <h4 className="font-display font-bold text-sm text-dark-900">{ach.title}</h4>
                            <p className="text-xs text-gray-500 font-sans leading-relaxed">{ach.desc}</p>
                          </div>
                          <span className="text-[10px] text-primary-500 font-bold uppercase font-mono tracking-wide mt-3 block">
                            ✓ Verified accomplishment
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Clinic Facilities checklist Bento-style */}
                <section className="py-20 bg-light-bg border-t border-primary-50/50" id="facilities-checklist">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                      <div className="lg:col-span-5 space-y-5">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wide bg-accent-500/15 text-accent-600 uppercase">
                          Our Workspace
                        </span>
                        <h2 className="font-display font-bold text-2xl sm:text-3xl text-dark-900 tracking-tight leading-tight">
                          Modern Clinical Facilities & Advanced Diagnostics
                        </h2>
                        <p className="text-sm text-gray-500 leading-relaxed font-sans">
                          Brightwell Dentis is fully structured to deliver hospital-grade dental services under strict ISO sanitization laws. Browse our clinical assets:
                        </p>
                      </div>

                      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          '10 Modern Treatment Chairs with Entertainment screens',
                          '3D Cone Beam CT Scanner for precise jaw implants placement',
                          'Digital X-Ray & Intraoral Camera systems with immediate results',
                          'CAD/CAM Same-Day Ceramic Crown technology',
                          'In-House Dental prosthetic Laboratory for color matching',
                          'Sterile & Climate-Controlled micro-surgical rooms',
                          'Comfortable Patient Lounge with WiFi & complimentary refreshments',
                          'Dedicated interactive Kids\' Dental Zone',
                          'Accessible facilities for patients with physical disabilities'
                        ].map((fac, i) => (
                          <div key={i} className="bg-white rounded-xl p-4 border border-primary-50 shadow-sm flex items-start space-x-3 text-xs sm:text-sm text-dark-800">
                            <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                            <span className="font-medium leading-tight">{fac}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* =======================================
                PAGE 3: SERVICES
                ======================================= */}
            {activeTab === 'services' && (
              <>
                <PageHero
                  badgeText="What We Offer"
                  headline={
                    <>
                      Complete Dental Care<br />
                      <span className="text-accent-500">Under One Roof</span>
                    </>
                  }
                  subheadline="From your first checkup to your final restoration, Brightwell Dentis offers comprehensive services for patients of all ages. Explore our full range of dental treatments."
                  imageUrl="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1920"
                  buttons={servicesHeroButtons}
                />

                {/* Detailed Service Cards */}
                <section className="py-20 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
                    {SERVICES.map((srv, idx) => (
                      <div
                        key={srv.id}
                        className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-10 rounded-3xl border border-primary-50 bg-primary-50/10 shadow-sm ${
                          idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                        }`}
                      >
                        {/* Information - Left */}
                        <div className={`lg:col-span-7 space-y-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                          <div className="flex items-center space-x-3.5">
                            <div className="w-11 h-11 bg-primary-500 rounded-xl text-white flex items-center justify-center font-bold shadow-md">
                              <Sparkles className="w-5 h-5 text-accent-500 animate-pulse" />
                            </div>
                            <div>
                              <span className="text-[10px] font-mono tracking-widest text-accent-500 uppercase font-bold">
                                Specialty Treatment
                              </span>
                              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-dark-900 mt-0.5 tracking-tight">
                                {srv.title}
                              </h3>
                            </div>
                          </div>

                          <p className="text-sm sm:text-base text-gray-500 font-sans leading-relaxed">
                            {srv.description}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                            {srv.extendedDescription}
                          </p>

                          {/* Benefits Checklist */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {srv.benefits.map((ben, bIdx) => (
                              <div key={bIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-dark-800 font-sans">
                                <CheckCircle2 className="w-4.5 h-4.5 text-accent-500 shrink-0 mt-0.5" />
                                <span className="font-medium leading-tight">{ben}</span>
                              </div>
                            ))}
                          </div>

                          {/* CTA Row */}
                          <div className="flex items-center space-x-6 pt-4 border-t border-primary-50/50">
                            <div>
                              <span className="block text-[10px] text-gray-400 font-mono tracking-wider uppercase leading-none">Starting from</span>
                              <span className="text-xl sm:text-2xl font-display font-extrabold text-accent-500 tracking-tight block mt-1">{srv.startingPrice}</span>
                            </div>
                            <button
                              onClick={() => {
                                setSelectedServiceName(srv.title);
                                setIsBookingModalOpen(true);
                              }}
                              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold text-xs px-5 py-3 rounded-xl shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                            >
                              Book Under This Service
                            </button>
                          </div>
                        </div>

                        {/* Visual Asset representation - Right */}
                        <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                          <div className="rounded-3xl overflow-hidden aspect-video sm:aspect-4/3 shadow-lg border border-primary-100 bg-white p-2">
                            <SafeImage
                              src={
                                srv.id === 'teeth-whitening' ? 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600' :
                                srv.id === 'root-canal' ? 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600' :
                                srv.id === 'dental-implants' ? 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600' :
                                srv.id === 'orthodontics' ? 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600' :
                                srv.id === 'crowns-bridges' ? 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600' :
                                'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600'
                              }
                              alt={srv.title}
                              fallbackType="service"
                              className="w-full h-full object-cover rounded-2xl"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Bonus Services Tags Row */}
                <section className="py-20 bg-light-bg border-t border-primary-50/50" id="bonus-services-row">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <div className="max-w-xl mx-auto mb-10">
                      <h3 className="font-display font-bold text-2xl text-dark-900 tracking-tight">Additional Clinic Specialties</h3>
                      <p className="text-xs text-gray-500 mt-1.5 font-sans leading-relaxed">
                        We also facilitate multiple auxiliary healthcare services to maintain comprehensive oral hygiene standards.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto select-none">
                      {BONUS_SERVICES.map((srv, i) => (
                        <div key={i} className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-primary-50 text-xs sm:text-sm font-sans font-semibold text-dark-900 flex items-center space-x-2.5">
                          <span className="w-2 h-2 rounded-full bg-accent-500" />
                          <span>{srv}</span>
                        </div>
                      ))}
                    </div>

                    {/* Banner CTA */}
                    <div className="mt-14 max-w-4xl mx-auto bg-primary-500 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                      <div className="space-y-2">
                        <h4 className="font-display font-extrabold text-lg sm:text-xl text-white tracking-tight leading-tight">
                          Not sure which treatment you need?
                        </h4>
                        <p className="text-xs text-gray-100 font-sans max-w-xl leading-relaxed">
                          Book a completely FREE oral health diagnostic session. Our senior surgeons will map your teeth in 3D and recommend tailored treatments.
                        </p>
                      </div>
                      <button
                        onClick={() => setIsBookingModalOpen(true)}
                        className="bg-accent-500 hover:bg-accent-600 text-white font-semibold text-xs px-6 py-3.5 rounded-xl transition-all hover:scale-[1.03] shrink-0"
                      >
                        Book Free Consultation →
                      </button>
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* =======================================
                PAGE 4: FAQ
                ======================================= */}
            {activeTab === 'faq' && (
              <>
                <PageHero
                  badgeText="Got Questions?"
                  headline={
                    <>
                      Frequently Asked<br />
                      <span className="text-accent-500">Medical</span> Questions
                    </>
                  }
                  subheadline="Find answers to the most common questions about our services, treatments, and clinic policies. Still have questions? We're just a call away."
                  imageUrl="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920"
                  buttons={[
                    { text: 'Call Us Anytime', icon: 'phone', style: 'primary', onClick: () => { window.location.href = 'tel:+8801700000000'; } },
                    { text: 'Book Consultation', icon: 'calendar', style: 'ghost', onClick: () => setIsBookingModalOpen(true) }
                  ]}
                />

                <FAQAccordion />
              </>
            )}

            {/* =======================================
                PAGE 5: BLOG
                ======================================= */}
            {activeTab === 'blog' && (
              <>
                <PageHero
                  badgeText="Oral Health Resources"
                  headline={
                    <>
                      Expert Tips, Guides &<br />
                      <span className="text-accent-500">Dental News</span>
                    </>
                  }
                  subheadline="Stay informed with the latest in dental health, treatment innovations, and practical oral care advice from our team of specialists."
                  imageUrl="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920"
                  buttons={[
                    { text: 'Free Diagnostics Visit', icon: 'calendar', style: 'primary', onClick: () => setIsBookingModalOpen(true) }
                  ]}
                />

                <BlogGrid />
              </>
            )}

            {/* =======================================
                PAGE 6: CONTACT
                ======================================= */}
            {activeTab === 'contact' && (
              <>
                <PageHero
                  badgeText="Get In Touch"
                  headline={
                    <>
                      We're Here to<br />
                      <span className="text-accent-500">Help You</span> Smile
                    </>
                  }
                  subheadline="Have a question, want to book an appointment, or just need some advice? Our friendly team in Gulshan-2, Dhaka is ready to assist."
                  imageUrl="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920"
                  buttons={[
                    { text: 'Call Emergency Hotline', icon: 'phone', style: 'primary', onClick: () => { window.location.href = 'tel:+8801800000000'; } }
                  ]}
                />

                {/* Info Cards Row */}
                <section className="py-20 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16 select-none">
                      {[
                        { title: 'Call Us', icon: <Phone className="w-5 h-5 text-accent-500" />, text: '+880 1700-000000', label: 'Mon–Sat, 8AM–6PM' },
                        { title: 'Email Us', icon: <Mail className="w-5 h-5 text-accent-500" />, text: 'hello@brightwelldentis.com', label: 'Response in 2–4 hours' },
                        { title: 'Find Us', icon: <MapPin className="w-5 h-5 text-accent-500" />, text: '123 Medical Avenue, Dhaka', label: 'Near Gulshan Circle 2' },
                        { title: 'Opening Hours', icon: <Clock className="w-5 h-5 text-accent-500" />, text: 'Mon–Sat: 8AM – 6PM', label: 'Sunday: Emergency Only' }
                      ].map((card, i) => (
                        <div key={i} className="bg-primary-50/20 border border-primary-50 rounded-2xl p-5 hover-lift text-center space-y-3 flex flex-col items-center">
                          <div className="w-10 h-10 bg-white border border-primary-50 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                            {card.icon}
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-sm text-dark-900 leading-none">{card.title}</h4>
                            <p className="text-xs font-semibold text-primary-500 font-sans mt-2">{card.text}</p>
                            <p className="text-[10px] text-gray-400 font-sans mt-1">{card.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Main Booking Form & Maps container */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
                      {/* Booking block - left */}
                      <div className="lg:col-span-7">
                        <AppointmentForm inlineMode={true} />
                      </div>

                      {/* Map block - right */}
                      <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                        <div className="space-y-2">
                          <span className="text-[10px] font-mono tracking-widest text-accent-500 uppercase font-bold">
                            Our Coordinates
                          </span>
                          <h3 className="font-display font-bold text-xl text-dark-900 tracking-tight leading-tight">
                            Visit Us — We're Easy to Find
                          </h3>
                          <p className="text-xs text-gray-400 font-sans leading-relaxed">
                            We are located in the heart of Gulshan-2 neighborhood, directly across Dhaka medical complex. Secured parking and ramp access is available.
                          </p>
                        </div>

                        {/* Beautiful Google Map embedded frame */}
                        <div className="w-full flex-grow flex items-center">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.70031201531!2d90.41249718428399!3d23.79458213606677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a15c2ec9e9%3A0x1d36d0130f11c834!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1687823432135!5m2!1sen!2sbd"
                            className="w-full h-72 sm:h-96 lg:h-full rounded-2xl border-2 border-primary-50 shadow-md min-h-[300px]"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Brightwell Dentis Location Map Dhaka"
                          />
                        </div>

                        {/* Emergency Block alert */}
                        <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4.5 flex items-start space-x-3 text-rose-800">
                          <BadgeAlert className="w-5.5 h-5.5 text-rose-500 shrink-0 mt-0.5 animate-bounce" />
                          <div>
                            <h4 className="font-display font-extrabold text-sm leading-tight text-rose-950">
                              🚨 Dental Emergency? Don't Wait.
                            </h4>
                            <p className="text-xs text-rose-700 font-sans mt-1 leading-relaxed">
                              Call our priority triage surgeons immediately. We arrange immediate appointments within 60 minutes.
                            </p>
                            <a
                              href="tel:+8801800000000"
                              className="text-xs font-bold text-rose-900 block mt-2 hover:underline"
                            >
                              Call Emergency line: +880 1800-000000 (24/7)
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Small mini-FAQ block on Contact Page */}
                <section className="py-16 bg-light-bg border-t border-primary-50/50">
                  <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <h3 className="font-display font-bold text-xl text-dark-900 tracking-tight text-center mb-8">
                      Quick Walk-in & Schedule FAQ
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm font-sans leading-relaxed">
                      <div className="bg-white p-5 rounded-2xl border border-primary-50 shadow-sm space-y-1.5">
                        <h4 className="font-bold text-dark-900">Can I walk in without an appointment?</h4>
                        <p className="text-xs text-gray-500">Yes, we welcome walk-ins, though booking in advance guarantees your preferred slot and reduces waiting times.</p>
                      </div>
                      <div className="bg-white p-5 rounded-2xl border border-primary-50 shadow-sm space-y-1.5">
                        <h4 className="font-bold text-dark-900">How long is the first visit?</h4>
                        <p className="text-xs text-gray-500">A new patient diagnostic consultation takes 45–60 minutes including X-rays and full treatment planning.</p>
                      </div>
                      <div className="bg-white p-5 rounded-2xl border border-primary-50 shadow-sm space-y-1.5">
                        <h4 className="font-bold text-dark-900">Can I request a specific doctor?</h4>
                        <p className="text-xs text-gray-500">Absolutely! You can specify your preferred dentist when scheduling online or via phone. We happily accommodate requests.</p>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer component */}
      <Footer setActiveTab={setActiveTab} />

      {/* Global Appointment Booking Modal Frame */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-primary-50 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 bg-primary-50 hover:bg-primary-100 text-gray-500 p-2.5 rounded-full z-10 transition-colors cursor-pointer"
                aria-label="Close booking modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scroller Container */}
              <div className="overflow-y-auto flex-grow">
                {/* Visual Banner */}
                <div className="h-32 bg-gradient-to-r from-primary-700 to-primary-500 flex items-center px-6 sm:px-8 relative text-white">
                  <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-15 overflow-hidden select-none pointer-events-none md:block hidden">
                    <Sparkles className="w-full h-full rotate-12 scale-125 text-white" />
                  </div>
                  <div>
                    <span className="bg-accent-500/20 text-accent-500 text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-accent-500/20">
                      ✦ Clinical Registration
                    </span>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl mt-2 tracking-tight">
                      Brightwell Dentis Consultation Portal
                    </h3>
                  </div>
                </div>

                {/* Predefined custom booking values callouts */}
                {(selectedDoctorName || selectedPlanName || selectedServiceName) && (
                  <div className="mx-6 sm:mx-8 mt-6 bg-accent-500/10 border border-accent-500/20 rounded-2xl p-4 text-xs flex items-center space-x-2.5 text-accent-600 font-sans font-medium">
                    <Sparkles className="w-4.5 h-4.5 text-accent-500 shrink-0" />
                    <div>
                      {selectedDoctorName && (
                        <span>You are scheduling directly with <span className="font-bold">{selectedDoctorName}</span>.</span>
                      )}
                      {selectedPlanName && (
                        <span>You have selected our <span className="font-bold">{selectedPlanName}</span>.</span>
                      )}
                      {selectedServiceName && (
                        <span>You are booking for <span className="font-bold">{selectedServiceName}</span> treatment.</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Form content */}
                <AppointmentForm
                  onSuccessClose={handleCloseModal}
                  inlineMode={false}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
