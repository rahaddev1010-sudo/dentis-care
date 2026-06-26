/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sparkles, Activity, Heart, Award, ShieldAlert, User } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  className?: string;
  fallbackType?: 'clinic' | 'doctor' | 'service' | 'blog' | 'general';
}

// A highly reliable curated list of backup Unsplash images for each category.
// If the primary image is blocked, dead, or unavailable in the user's region,
// these will be tried sequentially to ensure a real high-quality photo always displays.
const ALTERNATIVE_UNSPLASH_IMAGES: Record<string, string[]> = {
  doctor: [
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
  ],
  service: [
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
  ],
  clinic: [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
  ],
  blog: [
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
  ],
  general: [
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
  ]
};

export default function SafeImage({
  src,
  alt,
  className = '',
  fallbackType = 'general',
  ...props
}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [fallbackIndex, setFallbackIndex] = useState<number>(-1);
  const [hasFailedAll, setHasFailedAll] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  // Sync state if src changes
  useEffect(() => {
    setCurrentSrc(src);
    setFallbackIndex(-1);
    setHasFailedAll(false);
    setIsLoaded(false);
  }, [src]);

  // Check if image is already cached/loaded
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [currentSrc]);

  const handleError = () => {
    const list = ALTERNATIVE_UNSPLASH_IMAGES[fallbackType] || ALTERNATIVE_UNSPLASH_IMAGES.general;
    const nextIndex = fallbackIndex + 1;

    if (nextIndex < list.length) {
      setFallbackIndex(nextIndex);
      setCurrentSrc(list[nextIndex]);
      setIsLoaded(false);
    } else {
      setHasFailedAll(true);
    }
  };

  // If there's an error loading even after all backup Unsplash alternatives fail,
  // we render an elegant, brand-compliant fallback card with a matching icon and soft gradient.
  if (hasFailedAll || !currentSrc) {
    const getFallbackDetails = () => {
      switch (fallbackType) {
        case 'doctor':
          return {
            gradient: 'from-primary-500/10 via-accent-500/5 to-primary-500/5',
            icon: <User className="w-12 h-12 text-primary-500/60" />,
            label: 'Certified Dentist'
          };
        case 'service':
          return {
            gradient: 'from-accent-500/10 via-primary-500/5 to-accent-500/5',
            icon: <Sparkles className="w-10 h-10 text-accent-500/70 animate-pulse" />,
            label: 'Premium Care'
          };
        case 'blog':
          return {
            gradient: 'from-primary-50/30 via-accent-50/20 to-primary-50/10',
            icon: <Activity className="w-10 h-10 text-primary-500/50" />,
            label: 'Dental Guide'
          };
        case 'clinic':
          return {
            gradient: 'from-primary-600/20 via-accent-600/10 to-primary-600/5',
            icon: <Award className="w-14 h-14 text-accent-500/60" />,
            label: 'BrightSmile Clinic'
          };
        default:
          return {
            gradient: 'from-primary-500/10 via-accent-500/5 to-primary-500/10',
            icon: <Heart className="w-10 h-10 text-accent-500/60" />,
            label: 'BrightSmile Care'
          };
      }
    };

    const details = getFallbackDetails();

    return (
      <div 
        id={`fallback-image-${fallbackType}`}
        className={`w-full h-full min-h-[120px] bg-gradient-to-tr ${details.gradient} flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden ${className}`}
      >
        {/* Abstract background design patterns */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-accent-500/10 rounded-full blur-2xl" />
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-primary-500/10 rounded-full blur-2xl" />

        <div className="relative z-10 flex flex-col items-center space-y-3">
          <div className="p-3 bg-white/85 rounded-2xl shadow-sm border border-primary-50/50 flex items-center justify-center">
            {details.icon}
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-accent-600 bg-accent-500/5 px-2.5 py-1 rounded-md">
              {details.label}
            </span>
            {alt && (
              <p className="text-xs font-semibold text-dark-900/80 line-clamp-1 max-w-[200px] mt-1.5 font-sans">
                {alt}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Soft smooth loading blur placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 via-accent-500/5 to-primary-500/5 animate-pulse" />
      )}
      
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </div>
  );
}
