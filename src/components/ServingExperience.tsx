import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Smile, Sun } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ServingExperience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const gridItem1Ref = useRef<HTMLDivElement>(null);
  const gridItem2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero image zoom
      gsap.fromTo(
        heroImageRef.current,
        { scale: 0.95, y: 40 },
        {
          scale: 1.02,
          y: -20,
          scrollTrigger: {
            trigger: heroImageRef.current,
            start: 'top 85%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      );

      // Grid items staggered reveal
      gsap.fromTo(
        [gridItem1Ref.current, gridItem2Ref.current],
        { y: 50, opacity: 0.7 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: gridItem1Ref.current,
            start: 'top 85%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-24 lg:py-36 bg-coffee-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-coffee-300 block mb-2">
            07 / The Pairing &amp; Table
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-coffee-50 font-normal tracking-tight">
            Served on Handcrafted Timber, <br />
            <span className="italic font-light text-coffee-200">Savored at Leisure</span>
          </h2>
          <p className="text-sm sm:text-base text-coffee-300/80 mt-4 max-w-xl mx-auto font-light">
            More than just coffee — an unhurried pairing of warm porcelain, freshly laminated French pastry, and sunlit mornings.
          </p>
        </div>

        {/* Large Feature: Barista Carrying Wooden Tray */}
        <div
          ref={heroImageRef}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-coffee-800/80 mb-12 lg:mb-16 aspect-[21/10] group bg-coffee-900 will-change-transform"
        >
          <img
            src="/assets/selected/18-barista-serving-tray.jpg"
            alt="Barista carrying wooden tray with hot latte and freshly baked croissant"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between">
            <div className="max-w-md">
              <span className="text-xs font-mono text-coffee-300 uppercase tracking-widest block mb-1">
                The Morning Rite
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-coffee-50 font-normal">
                Pure Arabica &amp; Flaky Pastry
              </h3>
            </div>
            <div className="mt-4 sm:mt-0 glass-pill px-4 py-2 rounded-full text-xs font-mono text-coffee-200">
              Fresh In-House Daily Bake
            </div>
          </div>
        </div>

        {/* 2-Column Story Conclusion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Card 1: Table Service by Window */}
          <div
            ref={gridItem1Ref}
            className="rounded-2xl overflow-hidden glass-panel border border-coffee-800/80 shadow-2xl group flex flex-col will-change-transform"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-coffee-900">
              <img
                src="/assets/selected/19-table-service-customer.jpg"
                alt="Barista delivering tray to smiling customer at window table"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="p-6 lg:p-8 space-y-3">
              <div className="flex items-center space-x-2 text-coffee-300 text-xs font-mono uppercase tracking-wider">
                <Smile className="w-4 h-4" />
                <span>The Human Connection</span>
              </div>
              <h4 className="font-serif text-xl sm:text-2xl text-coffee-50 font-normal">
                Hospitality that Lingers
              </h4>
              <p className="text-xs sm:text-sm text-coffee-300/80 font-light leading-relaxed">
                Whether you arrive to read alone in the window sunlight or share morning plans with friends, our table service makes time pause.
              </p>
            </div>
          </div>

          {/* Card 2: Final Savoring Close-up */}
          <div
            ref={gridItem2Ref}
            className="rounded-2xl overflow-hidden glass-panel border border-coffee-800/80 shadow-2xl group flex flex-col will-change-transform"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-coffee-900">
              <img
                src="/assets/selected/20-coffee-croissant-enjoyment.jpg"
                alt="Hands holding warm coffee cup beside crisp croissant on wooden table"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="p-6 lg:p-8 space-y-3">
              <div className="flex items-center space-x-2 text-coffee-300 text-xs font-mono uppercase tracking-wider">
                <Sun className="w-4 h-4" />
                <span>The Perfect Sip</span>
              </div>
              <h4 className="font-serif text-xl sm:text-2xl text-coffee-50 font-normal">
                Warmth in Every Cup
              </h4>
              <p className="text-xs sm:text-sm text-coffee-300/80 font-light leading-relaxed">
                From the crisp shatter of golden pastry layers to the lingering hazelnut sweetness of the last espresso sip. Welcome home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
