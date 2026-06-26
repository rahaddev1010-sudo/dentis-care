/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Doctor, Testimonial, FAQItem, BlogPost, PricingPlan } from './types';

export const SERVICES: Service[] = [
  {
    id: 'teeth-whitening',
    iconName: 'Sparkles',
    title: 'Professional Teeth Whitening',
    description: 'Transform dull, stained teeth into a radiant, camera-ready smile. Our professional whitening treatments are clinically proven to brighten teeth by up to 8–10 shades in a single session.',
    extendedDescription: 'Professional teeth whitening at BrightSmile uses premium, clinically-approved whitening compounds activated by a state-of-the-art cold-light source. Unlike over-the-counter options, our in-office system ensures complete safety, zero enamel erosion, and is calibrated for sensitive teeth to eliminate discomfort. Perfect for weddings, corporate events, or a major confidence boost.',
    benefits: [
      'Visible results in just 60–90 minutes',
      'Long-lasting brightness (up to 2–3 years)',
      'Formulated with desensitizers for maximum comfort',
      'Safe, controlled application prevents enamel damage'
    ],
    startingPrice: '$99'
  },
  {
    id: 'root-canal',
    iconName: 'Activity',
    title: 'Painless Root Canal Therapy',
    description: 'Advanced endodontic therapy to save your natural tooth, eliminate infection, and relieve pain — all with minimal discomfort using modern techniques.',
    extendedDescription: "Don't let fear of root canals prevent you from getting the care you need. Modern endodontic therapy at BrightSmile is exceptionally gentle, utilizing advanced rotary instruments, local micro-anesthesia, and digital diagnostics. We focus on thoroughly cleaning the root canals to eliminate infection, sealing the tooth, and restoring its strength with custom-fit crowns — usually in a single, painless visit.",
    benefits: [
      'Save and preserve your natural tooth structure',
      'Quickly eliminates persistent dental infection & pain',
      'Most advanced micro-rotary instruments for rapid procedure',
      'Exceptional high long-term success rate (95%+)'
    ],
    startingPrice: '$149'
  },
  {
    id: 'dental-implants',
    iconName: 'Anchor',
    title: 'Permanent Tooth Replacement',
    description: 'Permanent, natural-looking tooth replacements anchored directly into your jawbone. Restore your smile, bite, and confidence for life.',
    extendedDescription: 'Dental implants are the ultimate gold standard for replacing missing teeth. A biocompatible titanium post is precision-guided into the jawbone, integrating naturally over a few months to act as a solid root. We then crown it with custom-milled high-strength porcelain that is completely color-matched and structurally identical to your natural teeth. Ideal for full smile rehabilitation and long-term oral structure maintenance.',
    benefits: [
      'Extremely durable — designed to last 20–30+ years',
      'Looks, feels, and functions exactly like a natural tooth',
      'Preserves jawbone health and facial structure integrity',
      'No slipping, speech changes, or food restrictions'
    ],
    startingPrice: '$799'
  },
  {
    id: 'orthodontics',
    iconName: 'Compass',
    title: 'Braces & Clear Aligners',
    description: 'Straighten misaligned teeth with traditional braces or clear aligners. We design personalized treatment plans for teens and adults alike.',
    extendedDescription: 'We specialize in modern orthodontic correction. From standard cosmetic braces to premium Invisalign clear aligners, we combine 3D digital oral scanning with artificial intelligence treatment modeling. You get a precise preview of your smile progression before we even fabricate your trays. Fully customized plans with convenient monthly checkups fit seamlessly into any busy professional or academic schedule.',
    benefits: [
      'Discreet clear aligners and traditional braces options',
      'High-resolution digital treatment outcome previews',
      'Bi-weekly teeth movement monitoring for faster results',
      'Complimentary premium retainer included with treatment'
    ],
    startingPrice: '$1,200'
  },
  {
    id: 'crowns-bridges',
    iconName: 'Shield',
    title: 'Crowns, Bridges & Veneers',
    description: 'Custom-crafted crowns and bridges that restore damaged or missing teeth to full function and natural appearance using high-quality porcelain.',
    extendedDescription: 'Our restorative treatments combine structural engineering with art. We utilize high-strength medical-grade zirconia and lithium disilicate porcelain to craft custom dental crowns, bridges, and thin-shell aesthetic veneers. Whether you need to cover a severely cracked tooth, seal a gap, or undergo a complete cosmetic smile makeover, our dental lab crafts restorations with perfect lifelike translucency.',
    benefits: [
      'Same-day custom CAD/CAM crowns available',
      'Stunning lifelike translucency and natural color matching',
      'Backed by our comprehensive 10-year clinic guarantee',
      'Surgical precision results with minimal tooth reduction'
    ],
    startingPrice: '$199'
  },
  {
    id: 'oral-surgery',
    iconName: 'Scissors',
    title: 'Expert Surgical Dental Care',
    description: 'Expert surgical care including wisdom tooth extraction, bone grafting, and jaw surgery — performed with precision and maximum patient comfort.',
    extendedDescription: 'BrightSmile hosts a highly specialized surgical department equipped for advanced procedures. Led by board-certified oral and maxillofacial surgeons, we provide comfortable wisdom teeth extraction, bone graft reconstruction for dental implants, sinus lifts, and aesthetic gum contouring. Every surgery incorporates advanced sedation options and is conducted in a sterile, modern hospital-grade surgical theater.',
    benefits: [
      'Performed by internationally certified oral surgeons',
      'Surgical navigation guides for minimally invasive procedures',
      'Fully customized conscious sedation for anxiety-free visits',
      'Comprehensive, personalized post-operative recovery support'
    ],
    startingPrice: '$99'
  }
];

export const BONUS_SERVICES: string[] = [
  'Pediatric Dentistry',
  'Gum Disease Treatment',
  'Emergency Dental Care',
  'Dental X-Rays & Scans',
  'Mouth Guards & Night Guards',
  'Dentures & Partials'
];

export const STATS = [
  { value: '15,000+', label: 'Happy Patients', iconName: 'Users' },
  { value: '25+', label: 'Expert Doctors', iconName: 'UserCheck' },
  { value: '12+', label: 'Years of Excellence', iconName: 'Award' },
  { value: '4.9/5', label: 'Patient Rating', iconName: 'Star' }
];

export const WHY_CHOOSE_US_ACCORDION = [
  {
    title: 'Board-Certified Specialist Team',
    content: "Our doctors hold international certifications (including Harvard and European training affiliations) and undergo continuous training in the latest dental advancements. We have specialists for every niche: Orthodontics, Endodontics, Oral Surgery, and Implantology, meaning you'll never have to go anywhere else."
  },
  {
    title: 'State-of-the-Art Technology',
    content: 'We use premium diagnostic and treatment equipment: 3D Cone Beam CT scanners, digital impressions (no messy clay), laser dentistry for pain-free gum treatment, and CAD/CAM software for same-day digital crowns. This ensures faster diagnostics, pinpoint precision, and extremely comfortable appointments.'
  },
  {
    title: 'Patient-First Comfort Environment',
    content: 'Our clinic is designed to soothe dental anxiety. We feature spa-like waiting lounges, noise-canceling headphones to block sound, overhead smart screens to watch your favorite shows during procedures, warm towels, aromatherapy, and multiple safe sedation choices including nitrous oxide.'
  },
  {
    title: 'Transparent, Affordable Pricing',
    content: 'No hidden fees, ever. We outline detailed cost breakdowns before any treatment starts. We work directly with most major insurance providers and offer flexible payment schemes, including 0% interest monthly installments to keep high-quality dental care within your budget.'
  },
  {
    title: '24/7 Emergency Dental Care',
    content: 'Severe dental trauma or intense pain cannot wait. We maintain a dedicated 24-hour emergency phone line and reserve open slots every single day so that urgent emergency cases (broken teeth, facial swellings, or active bleeding) can be seen within the hour.'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gallery-1',
    title: 'Complete Smile Restoration',
    description: 'Full-mouth rehabilitation with custom veneers and titanium-anchored dental implants.',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gallery-2',
    title: 'Teeth Whitening Results',
    description: 'Before & After transformation: A stunning 8 shades brighter in just a single 75-minute in-office cold-light session.',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gallery-3',
    title: 'Precision Orthodontic Treatment',
    description: 'Complex 18-month misaligned teeth correction using Invisalign modern invisible aligners.',
    imageUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    text: 'I was terrified of the dentist my whole life. BrightSmile completely changed my experience. The team is incredibly gentle, professional, and patient. My new smile has given me so much confidence!',
    author: 'Sarah Mitchell',
    role: 'Marketing Manager',
    rating: 5
  },
  {
    id: 't2',
    text: "I came in for a root canal expecting the worst, but it was surprisingly painless. Dr. Carter explained every step of the process. I've recommended this clinic to my entire family.",
    author: 'David Okonkwo',
    role: 'Software Engineer',
    rating: 5
  },
  {
    id: 't3',
    text: 'The dental implants look and feel completely natural. After years of struggling with missing teeth, I finally feel like myself again. Worth every penny — truly life-changing.',
    author: 'Maria Lopez',
    role: 'Retired Teacher',
    rating: 5
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. James Carter',
    role: 'Implantologist & Oral Surgeon',
    experience: '18 Years Experience',
    credentials: 'BDS, MDS (Oral Surgery) | Harvard-Trained',
    bio: 'Founder & Chief Dental Surgeon. Dr. Carter has successfully performed over 4,000 surgical dental implant placements and specializes in complex full-mouth aesthetic reconstructions.',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600&h=600',
    socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' }
  },
  {
    id: 'd2',
    name: 'Dr. Priya Nair',
    role: 'Orthodontist & Cosmetic Specialist',
    experience: '12 Years Experience',
    credentials: 'BDS, MDS (Orthodontics) | Certified Invisalign Provider',
    bio: 'An expert in Invisalign and modern wire aligners. Dr. Nair blends computer-guided facial aesthetics with advanced orthodontics to craft beautifully aligned smiles for teenagers and adults.',
    imageUrl: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=600&h=600',
    socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' }
  },
  {
    id: 'd3',
    name: 'Dr. Mark Thompson',
    role: 'Endodontist & Restorative Dentist',
    experience: '15 Years Experience',
    credentials: 'BDS, MDS (Endodontics) | Painless Treatment Specialist',
    bio: 'Specializing in saving original teeth, Dr. Thompson is renowned for utilizing micro-endodontic technologies to deliver highly effective, completely painless root canal therapies.',
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600&h=600',
    socials: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' }
  },
  {
    id: 'd4',
    name: 'Dr. Rachel Kim',
    role: 'Pediatric Dental Specialist',
    experience: '8 Years Experience',
    credentials: 'BDS (Pediatric Dentistry) | Child Care Board Certified',
    bio: 'Dr. Kim makes clinic visits enjoyable and stress-free for children aged 2-16. She focuses on pediatric preventive care and early facial growth management in our custom Kids Zone.',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=600',
    socials: { facebook: '#', linkedin: '#', instagram: '#' }
  },
  {
    id: 'd5',
    name: 'Dr. Amir Hassan',
    role: 'Periodontist & Gum Therapist',
    experience: '10 Years Experience',
    credentials: 'BDS, Fellowship (Periodontics) | Bone Reconstruction Expert',
    bio: 'Specializes in gum health restoration, laser periodontics, and advanced dental bone grafting. He is dedicated to curing periodontal diseases and building healthy foundations for implants.',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600&h=600',
    socials: { facebook: '#', twitter: '#', linkedin: '#' }
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: '$79',
    features: [
      { text: 'Comprehensive Oral Examination', included: true },
      { text: 'Digital High-Resolution X-Ray', included: true },
      { text: 'Professional Dental Cleaning', included: true },
      { text: 'Digital Cavity Detection Scan', included: true },
      { text: 'Custom Oral Health Consultation', included: true },
      { text: 'Advanced Cold-Light Whitening', included: false },
      { text: 'Priority Booking & Fast-Track Service', included: false }
    ]
  },
  {
    id: 'standard',
    name: 'Standard Plan',
    price: '$149',
    isPopular: true,
    features: [
      { text: 'Comprehensive Oral Examination', included: true },
      { text: 'Digital High-Resolution X-Ray', included: true },
      { text: 'Professional Dental Cleaning', included: true },
      { text: 'Digital Cavity Detection Scan', included: true },
      { text: 'Professional Teeth Whitening (1 Session)', included: true },
      { text: 'Protective Fluoride Coating Treatment', included: true },
      { text: 'Digital 3D Smile outcome preview', included: true },
      { text: 'Priority Booking & Fast-Track Service', included: true },
      { text: 'Full Cosmetic Consultation', included: false }
    ]
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    price: '$249',
    features: [
      { text: 'Comprehensive Oral Examination', included: true },
      { text: 'Digital High-Resolution X-Ray', included: true },
      { text: 'Professional Dental Cleaning', included: true },
      { text: 'Digital Cavity Detection Scan', included: true },
      { text: 'Professional Teeth Whitening (Full Kit)', included: true },
      { text: 'Protective Fluoride Coating Treatment', included: true },
      { text: 'Digital 3D Smile outcome preview', included: true },
      { text: 'Priority Booking & Fast-Track Service', included: true },
      { text: 'Full Cosmetic & Structural Consultation', included: true },
      { text: '3D High-Res Cone Beam Scan', included: true },
      { text: 'Free 24/7 Emergency Visit (1/year)', included: true },
      { text: 'Dedicated 1-on-1 Patient Coordinator', included: true }
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    category: 'general',
    question: 'How do I book an appointment at BrightSmile?',
    answer: "You can book online through our website's interactive appointment form, call us directly at our patient line +880 1700-000000, or visit our clinic in person. We also accept same-day bookings for emergency dental care. Our convenient online booking engine is fully active 24/7."
  },
  {
    id: 'faq2',
    category: 'general',
    question: 'What are your clinic opening hours?',
    answer: "Our normal hours are Monday through Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 4:00 PM. On Sundays, we are open for emergency dental services only. Our 24/7 emergency hotline (+880 1800-000000) is always monitored."
  },
  {
    id: 'faq3',
    category: 'general',
    question: 'Do you accept dental insurance?',
    answer: "Yes, we work with almost all major national and international insurance providers. Our reception desk will verify your plan's benefits before your dental procedure to give you a complete, honest cost breakdown. For un-covered segments, we offer low-interest in-house financing."
  },
  {
    id: 'faq4',
    category: 'general',
    question: 'Is your clinic child-friendly?',
    answer: "Absolutely! We feature a customized Kids' Dental Zone specifically styled with interactive murals, fun arcade screens, and toys to ease children's dental anxiety. Our specialized pediatric dentists are uniquely trained to provide gentle care for patients aged 2 to 16."
  },
  {
    id: 'faq5',
    category: 'general',
    question: 'Do you offer emergency dental services?',
    answer: "Yes. Intense toothaches, fractured crowns, lost fillings, dental abscesses, and soft tissue mouth injuries are classified as high-priority emergencies. Contact our round-the-clock emergency line at +880 1800-000000 to coordinate immediate care within the hour."
  },
  {
    id: 'faq6',
    category: 'treatments',
    question: 'How often should I visit the dentist for a checkup?',
    answer: "For most healthy children and adults, a comprehensive checkup and professional cleaning is highly recommended every 6 months. Patients with active gum diseases, high cavity histories, diabetes, or those currently with active orthodontic aligners may require visits every 3 to 4 months."
  },
  {
    id: 'faq7',
    category: 'treatments',
    question: 'Is teeth whitening safe?',
    answer: "Professional in-office whitening under professional supervision is 100% safe. We utilize advanced medical-grade cold light with custom-pH bleaching gels that do not damage enamel, cause bleeding, or wear down teeth. We customize the concentrations for sensitive teeth."
  },
  {
    id: 'faq8',
    category: 'treatments',
    question: 'Will root canal treatment hurt?',
    answer: "Not at all. With modern micro-anesthetics and electronic rotary dental files, a root canal is as fast and comfortable as a routine filling. Root canals are designed to resolve severe nerve pain and infection, meaning you will leave our clinic in far greater comfort than you entered."
  },
  {
    id: 'faq9',
    category: 'treatments',
    question: 'How long do dental implants last?',
    answer: "With good oral hygiene (daily brushing, flossing, and professional cleanings twice a year), the titanium implant post fused into your jawbone can last 20–30 years, and often a lifetime. The visible porcelain crown itself can last 10–15 years before natural wear requires minor replacement."
  },
  {
    id: 'faq10',
    category: 'treatments',
    question: 'How long does orthodontic treatment take?',
    answer: "Treatment times differ significantly depending on the alignment complexity. Simple cosmetic corrections can be completed in as little as 6 to 12 months, whereas moderate to complex misalignment therapy with traditional braces or Invisalign clear aligners can take 18 to 36 months."
  },
  {
    id: 'faq11',
    category: 'treatments',
    question: 'Can I get dental work done while pregnant?',
    answer: "Yes, routine dental cleanings, checkups, and necessary emergency procedures (like fillings or root canals to treat active infection) are completely safe and actually highly recommended. Hormonal spikes during pregnancy often increase gum inflammation. We defer elective cosmetic whitening until postpartum."
  },
  {
    id: 'faq12',
    category: 'pricing',
    question: 'How much does a dental implant cost?',
    answer: "Our dental implants start at $799, which covers the primary surgical titanium post, custom abutment, and final color-matched premium porcelain crown. The overall price can change depending on whether bone grafting or tooth extraction is required. We provide complete, clear pricing quotes."
  },
  {
    id: 'faq13',
    category: 'pricing',
    question: 'Do you offer payment plans or financing?',
    answer: "Yes! To ensure dental care is never a financial burden, we offer custom 0% interest payment plans through our local banking and finance partners, allowing you to split large cosmetic or implant treatment costs over comfortable 6, 12, or 24-month cycles."
  },
  {
    id: 'faq14',
    category: 'pricing',
    question: 'Is there a cancellation fee?',
    answer: "We kindly ask for at least 24 hours notice for any appointment rescheduling or cancellation. This enables us to offer the slot to patients waiting for urgent dental care. Late cancellations or missed appointments without notice may incur a small $25 booking fee."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b-featured',
    title: 'The Complete Guide to Dental Implants: Everything You Need to Know in 2025',
    excerpt: 'Thinking about dental implants? This comprehensive guide covers candidacy, the procedure step-by-step, costs, recovery, and long-term care — everything you need to make an informed decision.',
    category: 'Treatments',
    readTime: '8 min read',
    author: 'Dr. James Carter',
    date: 'June 18, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    tags: ['Implants', 'Restoration', 'Oral Health', 'Tech'],
    content: `Dental implants represent the modern peak of restorative dentistry. If you are struggling with missing teeth, gaps, or loose dentures, implants offer a permanent, secure, and natural-looking solution that mimics the biology of your natural teeth.

### What is a Dental Implant?
A dental implant is a small, biocompatible titanium post that acts as an artificial tooth root. It is surgically inserted into your jawbone where it undergoes "osseointegration" — a natural biological process where your bone cells grow directly around the titanium, anchoring it securely in place.

Once fully integrated, our lab installs a customized high-strength porcelain or zirconia crown on top, completely color-matched to your surrounding teeth.

### Why Choose Implants Over Dentures?
1. **Bone Preservation**: Unlike bridges or dentures, implants stimulate your jawbone. This prevents bone resorption (shrinking) and maintains your youthful facial profile.
2. **True Comfort**: Implants never slip, wobble, or click when you eat or speak. They are permanent parts of your jaw.
3. **No Food Boundaries**: You can comfortably eat apples, corn-on-the-cob, and steaks without worrying.
4. **Unmatched Lifespan**: With proper care, they are designed to last a lifetime.

### What Does the Procedure Look Like?
- **Step 1: Diagnostics**: We conduct 3D CBCT scans to analyze bone depth and nerve paths.
- **Step 2: Post Placement**: The titanium post is guided into the bone. Under conscious sedation, this is completely painless.
- **Step 3: Osseointegration**: A healing period of 3-6 months allows the bone to fuse with the post.
- **Step 4: Crown Installation**: We custom-milled and install your stunning porcelain crown.

Schedule a complimentary 3D scan at BrightSmile today to learn if you are a candidate!`
  },
  {
    id: 'b-1',
    title: '10 Foods and Drinks That Are Secretly Destroying Your Teeth',
    excerpt: 'You might be surprised which everyday foods are your biggest enemies. From citrus to crackers, discover what to limit — and which foods actually protect your enamel.',
    category: 'Oral Health Tips',
    readTime: '5 min read',
    author: 'Dr. Priya Nair',
    date: 'June 24, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600',
    tags: ['Diet', 'Enamel', 'Preventive'],
    content: 'While sugar is the most widely criticized dental enemy, several other foods and beverages secretly damage your protective enamel. Acidic citrus fruits erode enamel structure, while sticky dried fruits, starchy potato chips, and crackers cling inside dental crevices, feeding harmful bacteria. Carbonated water and sport drinks carry high acidity levels that gradually soften tooth structures. Learn to balance your diet with enamel-strengthening dairy, leafy greens, and rinse with pure water after snacks.'
  },
  {
    id: 'b-2',
    title: 'Dental Implants vs. Dentures: Which Option Is Right for You?',
    excerpt: 'Missing teeth? We break down the pros, cons, costs, and long-term outcomes of implants versus traditional dentures to help you make the best choice for your lifestyle and budget.',
    category: 'Treatments',
    readTime: '6 min read',
    author: 'Dr. James Carter',
    date: 'June 15, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600',
    tags: ['Implants', 'Dentures', 'Restoration'],
    content: 'Choosing how to restore missing teeth is a massive milestone. While traditional removable dentures are highly affordable upfront and require no surgery, they frequently shift, alter your speaking voice, and fail to prevent jawbone deterioration. Dental implants cost more initially, but they stimulate the jawbone to preserve your natural facial structure, restore full chewing power, and provide a lifetime of maintenance-free comfort. Compare the visual and physical differences in our clinical guide.'
  },
  {
    id: 'b-3',
    title: 'How to Overcome Dental Anxiety: Proven Strategies That Work',
    excerpt: "Dental fear affects 1 in 3 adults. Learn the evidence-based techniques our specialists use to help anxious patients relax — and why modern dentistry is nothing like the horror stories you've heard.",
    category: 'Patient Wellness',
    readTime: '7 min read',
    author: 'Dr. Mark Thompson',
    date: 'June 10, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600',
    tags: ['Anxiety', 'Wellness', 'Comfort'],
    content: 'If dental visits trigger fear, you are not alone. Modern clinics design their systems around physical and psychological patient comfort. We explore evidence-based strategies: diaphragmatic breathing loops, noise-canceling headsets with specialized ambient soundtracks, overhead screens to focus attention elsewhere, and modern sedation dentistry (like light, safe nitrous oxide laughing gas) that keeps you conscious but completely relaxed throughout.'
  },
  {
    id: 'b-4',
    title: 'The Truth About Teeth Whitening: What Actually Works (And What Doesn\'t)',
    excerpt: 'From whitening strips to laser treatments, we separate fact from fiction. A dentist\'s honest guide to safe, effective teeth whitening options at every budget.',
    category: 'Cosmetic Dentistry',
    readTime: '4 min read',
    author: 'Dr. Priya Nair',
    date: 'May 28, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600',
    tags: ['Whitening', 'Cosmetic', 'Enamel'],
    content: 'The teeth whitening market is filled with quick-fix products, charcoal toothpastes, and DIY remedies that can actually strip away your natural enamel. True, safe tooth whitening relies on hydrogen peroxide or carbamide peroxide compounds diffusing deep into dentin tubules. Learn why professional cold-light systems offer faster, safer, and up to ten times brighter outcomes compared to acidic fruit hacks or abrasive store kits.'
  },
  {
    id: 'b-5',
    title: 'Signs You Might Have Gum Disease — And What to Do About It',
    excerpt: 'Gum disease affects 47% of adults over 30, yet most don\'t know they have it. Learn the early warning signs, risk factors, and how modern periodontal treatments can reverse early-stage gum disease.',
    category: 'Preventive Care',
    readTime: '6 min read',
    author: 'Dr. Amir Hassan',
    date: 'May 22, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600',
    tags: ['Gums', 'Gingivitis', 'Preventive'],
    content: 'Gums are the critical foundation of your entire smile. Early-stage gum disease (gingivitis) often manifests quietly: minor bleeding when flossing, red or slightly puffy gum margins, or persistent bad breath. Left untreated, it progresses into periodontitis, destroying the supporting bone and leading to tooth loss. Discover the latest laser cleaning methods that quickly eliminate deep plaque pocket bacteria with virtually zero pain or gum recessions.'
  },
  {
    id: 'b-6',
    title: 'Your Child\'s First Dental Visit: What to Expect and How to Prepare',
    excerpt: 'The American Academy of Pediatric Dentistry recommends a child\'s first dental visit by age 1. Here\'s how to make it a positive experience that sets them up for a lifetime of healthy habits.',
    category: 'Pediatric Dentistry',
    readTime: '5 min read',
    author: 'Dr. Rachel Kim',
    date: 'May 12, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
    tags: ['Pediatric', 'Kids', 'First Visit'],
    content: "Setting your child up for a life of healthy teeth begins early. A toddler's first appointment is all about play, comfort, and positive association. We introduce them to the 'giant magic chair', show them the water tools, and check their growing teeth with maximum fun and patience. Learn how to speak about dental visits at home, foods to avoid, and steps to make tooth brushing an enjoyable daily game."
  }
];
