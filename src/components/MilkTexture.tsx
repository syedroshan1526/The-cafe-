import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Wind, Flame, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const MilkTexture: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax card slide-in
      gsap.fromTo(
        card1Ref.current,
        { y: 50, opacity: 0.8 },
        {
          y: -20,
          opacity: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        card2Ref.current,
        { y: 80, opacity: 0.8 },
        {
          y: -30,
          opacity: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 10%',
            scrub: 1.2,
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
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-coffee-300 block mb-2">
            05 / The Texture
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-coffee-50 font-normal tracking-tight">
            The Whirlpool Vortex &amp; <br />
            <span className="italic font-light text-coffee-200">Silky Microfoam</span>
          </h2>
          <p className="text-sm sm:text-base text-coffee-300/80 mt-4 max-w-xl mx-auto font-light">
            Controlled steam introduces micro-aeration, spinning the cold milk into a glossy, velvety vortex with zero coarse bubbles.
          </p>
        </div>

        {/* 2-Card Dual Process Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Stage 1: Steam Wand Activation */}
          <div
            ref={card1Ref}
            className="rounded-2xl overflow-hidden glass-panel border border-coffee-800/80 shadow-2xl flex flex-col group will-change-transform"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-coffee-900">
              <img
                src="/assets/selected/13-milk-steaming-start.jpg"
                alt="Barista holding stainless steel milk pitcher under steam wand"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 glass-pill px-3 py-1.5 rounded-full text-xs font-mono text-coffee-300 flex items-center space-x-2">
                <Wind className="w-3.5 h-3.5" />
                <span>Phase 1: Wand Placement &amp; Purge</span>
              </div>
            </div>

            <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-coffee-50 mb-2">
                  Aeration &amp; Steam Introduction
                </h3>
                <p className="text-xs sm:text-sm text-coffee-300/80 font-light leading-relaxed">
                  The stainless steam wand tip is submerged just beneath the surface. Dry steam at 1.5 bar introduces minute air pockets during the first 4 seconds.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-coffee-800/80 text-xs font-mono text-coffee-300">
                <span>Angle: 15° Pitcher Tilt</span>
                <span>Steam: Dry Saturation</span>
              </div>
            </div>
          </div>

          {/* Stage 2: Vortex & Texture */}
          <div
            ref={card2Ref}
            className="rounded-2xl overflow-hidden glass-panel border border-coffee-800/80 shadow-2xl flex flex-col group will-change-transform"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-coffee-900">
              <img
                src="/assets/selected/14-milk-frothing-vortex.jpg"
                alt="Silky milk microfoam spinning in whirlpool vortex"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 glass-pill px-3 py-1.5 rounded-full text-xs font-mono text-coffee-300 flex items-center space-x-2">
                <Flame className="w-3.5 h-3.5" />
                <span>Phase 2: The Emulsifying Vortex</span>
              </div>
            </div>

            <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-coffee-50 mb-2">
                  Glossy Texture at 65°C
                </h3>
                <p className="text-xs sm:text-sm text-coffee-300/80 font-light leading-relaxed">
                  The pitcher is lifted slightly to submerge the wand. The circular whirlpool breaks down remaining air bubbles, achieving wet-paint gloss and peak sweetness.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-coffee-800/80 text-xs font-mono text-coffee-300">
                <span>Sweetness Peak: 65°C / 149°F</span>
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-coffee-300" />
                  <span>Zero Scorching</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
