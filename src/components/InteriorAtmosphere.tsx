import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Compass, ShieldCheck } from 'lucide-react';
import { CAFE_CONFIG } from '../config/cafeConfig';

gsap.registerPlugin(ScrollTrigger);

export const InteriorAtmosphere: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageLeftRef = useRef<HTMLDivElement>(null);
  const imageRightRef = useRef<HTMLDivElement>(null);
  const textCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax scroll on left image
      gsap.fromTo(
        imageLeftRef.current,
        { y: 60, scale: 0.95 },
        {
          y: -40,
          scale: 1.02,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      );

      // Parallax scroll on right image
      gsap.fromTo(
        imageRightRef.current,
        { y: 90, scale: 0.92 },
        {
          y: -60,
          scale: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 10%',
            scrub: 1.2,
          },
        }
      );

      // Staggered reveal on text card
      gsap.fromTo(
        textCardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textCardRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative min-h-screen py-24 lg:py-36 bg-coffee-950 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-coffee-300/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coffee-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-coffee-300 block mb-3">
            01 / The Sanctuary
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-coffee-50 font-normal tracking-tight">
            Step off the Avenue, <br />
            <span className="italic font-light text-coffee-200">into the Warmth</span>
          </h2>
          <div className="w-16 h-[1px] bg-coffee-300/40 mx-auto mt-6" />
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Cafe Interior Ambiance */}
          <div className="lg:col-span-7 space-y-6">
            <div
              ref={imageLeftRef}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-coffee-800/80 group will-change-transform aspect-[16/10]"
            >
              <img
                src="/assets/selected/03-cafe-interior-ambiance.jpg"
                alt="Cozy interior ambiance with reclaimed brick and pendant lights"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-coffee-200 font-mono">
                <span className="bg-coffee-950/80 px-3 py-1.5 rounded-full backdrop-blur-md border border-coffee-300/20">
                  Reclaimed Brick &amp; Timber
                </span>
                <span className="text-coffee-300">Ambient Lighting</span>
              </div>
            </div>

            {/* Philosophy Pull-Quote */}
            <blockquote className="p-6 lg:p-8 rounded-2xl glass-panel border border-coffee-300/20">
              <p className="font-serif text-lg sm:text-xl text-coffee-100 italic leading-relaxed mb-4">
                "{CAFE_CONFIG.storyQuote}"
              </p>
              <footer className="text-xs font-mono text-coffee-400 tracking-wider uppercase">
                — Philosophy of {CAFE_CONFIG.brandName}
              </footer>
            </blockquote>
          </div>

          {/* Right Column: Barista Greeting & Hospitality */}
          <div className="lg:col-span-5 space-y-6">
            <div
              ref={imageRightRef}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-coffee-800/80 group will-change-transform aspect-[4/3]"
            >
              <img
                src="/assets/selected/04-barista-greeting-counter.jpg"
                alt="Barista greeting customer at the wooden coffee counter"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono text-coffee-300 uppercase tracking-widest block mb-1">
                  The Welcome
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-coffee-50 font-normal">
                  Hospitality at the Timber Bar
                </h3>
              </div>
            </div>

            {/* Feature Highlights */}
            <div ref={textCardRef} className="space-y-4">
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-coffee-900/60 border border-coffee-800/50 hover:border-coffee-300/30 transition-colors">
                <div className="p-2.5 rounded-lg bg-coffee-800 text-coffee-300 shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-coffee-100 tracking-wide">
                    Direct-Origin Micro-Lots
                  </h4>
                  <p className="text-xs text-coffee-400 mt-1 leading-relaxed">
                    Sourced directly from certified ethical farms in Ethiopia, Colombia, and Guatemala.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-coffee-900/60 border border-coffee-800/50 hover:border-coffee-300/30 transition-colors">
                <div className="p-2.5 rounded-lg bg-coffee-800 text-coffee-300 shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-coffee-100 tracking-wide">
                    Community &amp; Unhurried Living
                  </h4>
                  <p className="text-xs text-coffee-400 mt-1 leading-relaxed">
                    Designed for slow mornings, thoughtful conversations, and quiet creative work.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-coffee-900/60 border border-coffee-800/50 hover:border-coffee-300/30 transition-colors">
                <div className="p-2.5 rounded-lg bg-coffee-800 text-coffee-300 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-coffee-100 tracking-wide">
                    Fresh Small-Batch Roasting
                  </h4>
                  <p className="text-xs text-coffee-400 mt-1 leading-relaxed">
                    Roasted twice weekly to ensure peak aroma, balance, and delicate floral notes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
