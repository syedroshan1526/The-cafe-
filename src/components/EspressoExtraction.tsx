import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Thermometer, Gauge, Clock, Droplets, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const EspressoExtraction: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const flowImageRef = useRef<HTMLDivElement>(null);
  const cremaImageRef = useRef<HTMLDivElement>(null);
  const [telemetryTime, setTelemetryTime] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=160%',
          pin: true,
          scrub: 0.6,
          onUpdate: (self) => {
            // Count up extraction seconds from 0 to 28s
            const s = Math.round(self.progress * 28);
            setTelemetryTime(s);
          },
        },
      });

      // Crossfade from flow into crema close-up with zoom
      tl.to(flowImageRef.current, {
        scale: 1.15,
        opacity: 0,
        duration: 1,
        ease: 'none',
      }, 0);

      tl.fromTo(
        cremaImageRef.current,
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1.05, duration: 1, ease: 'none' },
        0.2
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="extraction"
      className="relative w-full h-screen bg-coffee-950 flex items-center justify-center overflow-hidden py-8"
    >
      {/* Background Frame Layer 1: Extraction Flow */}
      <div
        ref={flowImageRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: "url('/assets/selected/11-espresso-extraction-flow.jpg')",
        }}
      />

      {/* Background Frame Layer 2: Crema Close-up */}
      <div
        ref={cremaImageRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center will-change-transform opacity-0"
        style={{
          backgroundImage: "url('/assets/selected/12-crema-cup-close-up.jpg')",
        }}
      />

      {/* Atmosphere Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/40 to-coffee-950/70 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between h-full py-12">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-coffee-300/20 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-coffee-300 block mb-1">
              04 / The Alchemy
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-coffee-50 font-normal">
              The 9-Bar Extraction
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-coffee-300 mt-2 sm:mt-0 flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-coffee-300 animate-spin" />
            <span>Target Flow Rate: 1.25 ml / sec</span>
          </p>
        </div>

        {/* Center Editorial Quote */}
        <div className="max-w-xl glass-panel p-6 sm:p-8 rounded-2xl border border-coffee-300/30 my-auto shadow-2xl">
          <span className="text-[11px] font-mono text-coffee-300 uppercase tracking-widest block mb-2">
            Golden Viscosity
          </span>
          <p className="font-serif text-xl sm:text-2xl text-coffee-50 leading-snug mb-3">
            Twin syrupy streams pool into the heavy porcelain cup, crowning the extraction with an elastic, micro-bubbled amber crema.
          </p>
          <p className="text-xs sm:text-sm text-coffee-200/80 font-light leading-relaxed">
            Every drop balances volatile citric brightness with deep roasted chocolate notes, suspended under saturated atmospheric pressure.
          </p>
        </div>

        {/* Bottom Digital Telemetry HUD */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="glass-panel p-3.5 sm:p-4 rounded-xl border border-coffee-300/20">
            <div className="flex items-center space-x-2 text-coffee-300 mb-1">
              <Thermometer className="w-4 h-4" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-coffee-400">Temp</span>
            </div>
            <span className="font-mono text-lg sm:text-xl font-bold text-coffee-50">93.5 °C</span>
            <span className="block text-[10px] text-coffee-400 font-mono mt-0.5">Dual Boiler PID</span>
          </div>

          <div className="glass-panel p-3.5 sm:p-4 rounded-xl border border-coffee-300/20">
            <div className="flex items-center space-x-2 text-coffee-300 mb-1">
              <Gauge className="w-4 h-4" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-coffee-400">Pressure</span>
            </div>
            <span className="font-mono text-lg sm:text-xl font-bold text-coffee-50">9.0 Bar</span>
            <span className="block text-[10px] text-coffee-400 font-mono mt-0.5">Rotary Vane Pump</span>
          </div>

          <div className="glass-panel p-3.5 sm:p-4 rounded-xl border border-coffee-300/20">
            <div className="flex items-center space-x-2 text-coffee-300 mb-1">
              <Droplets className="w-4 h-4" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-coffee-400">Brew Ratio</span>
            </div>
            <span className="font-mono text-lg sm:text-xl font-bold text-coffee-50">1 : 2.0</span>
            <span className="block text-[10px] text-coffee-400 font-mono mt-0.5">18g In → 36g Out</span>
          </div>

          <div className="glass-panel p-3.5 sm:p-4 rounded-xl border border-coffee-300/20 bg-coffee-900/80">
            <div className="flex items-center space-x-2 text-coffee-300 mb-1">
              <Clock className="w-4 h-4 text-coffee-300" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-coffee-400">Timer</span>
            </div>
            <span className="font-mono text-lg sm:text-xl font-bold text-coffee-300">
              {telemetryTime < 10 ? `0${telemetryTime}` : telemetryTime}s / 28s
            </span>
            <span className="block text-[10px] text-coffee-400 font-mono mt-0.5">Peak Crema Body</span>
          </div>
        </div>
      </div>
    </section>
  );
};
