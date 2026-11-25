import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Sparkles } from 'lucide-react';
import { CAFE_CONFIG } from '../config/cafeConfig';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const facadeRef = useRef<HTMLDivElement>(null);
  const doorRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create scroll-driven threshold zoom timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // 1. Facade zoom in
      tl.to(facadeRef.current, {
        scale: 1.25,
        filter: 'brightness(0.85) contrast(1.05)',
        duration: 1,
        ease: 'none',
      }, 0);

      // 2. Door opening reveal crossfade
      tl.to(doorRef.current, {
        opacity: 0.95,
        scale: 1.12,
        duration: 0.8,
        ease: 'none',
      }, 0.2);

      // 3. Text fade & lift
      tl.to(contentRef.current, {
        y: -90,
        opacity: 0,
        filter: 'blur(6px)',
        duration: 0.7,
        ease: 'power2.in',
      }, 0.3);

      // 4. Subtle dark vignette transition into the warm interior
      tl.to(overlayRef.current, {
        backgroundColor: 'rgba(12, 10, 9, 0.7)',
        duration: 0.5,
      }, 0.6);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-coffee-950 flex items-center justify-center"
      id="hero"
    >
      {/* Background Layer 1: Exterior Facade */}
      <div
        ref={facadeRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/assets/selected/01-exterior-glass-facade.jpg')",
        }}
      />

      {/* Background Layer 2: Entrance Door Opening Overlay */}
      <div
        ref={doorRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-0 will-change-transform pointer-events-none"
        style={{
          backgroundImage: "url('/assets/selected/02-entrance-door-opening.jpg')",
        }}
      />

      {/* Atmosphere Gradients & Vignette */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/40 to-coffee-950/60 pointer-events-none transition-colors duration-500"
      />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-coffee-950/20 to-coffee-950/80 pointer-events-none" />

      {/* Hero Foreground Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center will-change-transform pt-12"
      >
        {/* Subtle pill tag */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-pill mb-6 text-coffee-300 text-xs sm:text-sm font-mono tracking-widest uppercase animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-coffee-300" />
          <span>Single-Origin Specialty Experience</span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-coffee-50 leading-[1.08] mb-6 drop-shadow-lg">
          A Haven for <br />
          <span className="italic font-light text-coffee-300 font-serif">Pure Craft</span> &amp; Coffee
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-coffee-100/90 font-light leading-relaxed mb-10 drop-shadow">
          {CAFE_CONFIG.subheading}
        </p>

        {/* Interactive CTA Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-coffee-300 text-coffee-950 hover:bg-coffee-200 transition-all duration-300 shadow-xl glow-crema active:scale-95"
          >
            Reserve Your Table
          </button>
          <a
            href="#craft"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider glass-panel text-coffee-100 hover:text-coffee-300 hover:border-coffee-300/40 transition-all duration-300 active:scale-95"
          >
            Experience The Craft
          </a>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none">
        <span className="text-[10px] tracking-[0.25em] uppercase font-mono text-coffee-300/90 mb-2">
          Scroll to Step Inside
        </span>
        <div className="w-6 h-10 rounded-full border border-coffee-300/40 flex items-start justify-center p-1.5 shadow-inner">
          <div className="w-1.5 h-2.5 rounded-full bg-coffee-300 animate-bounce" />
        </div>
        <ChevronDown className="w-4 h-4 text-coffee-300/60 mt-1 animate-pulse" />
      </div>
    </section>
  );
};
