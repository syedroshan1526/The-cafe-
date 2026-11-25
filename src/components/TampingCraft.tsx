import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Lock, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const TampingCraft: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      num: '01',
      title: 'Even Distribution',
      subtitle: 'Eliminating Channeling Before Compression',
      desc: 'The barista gently distributes the ground coffee mound across the 58mm basket rim to eliminate air pockets and guarantee uniform water density.',
      image: '/assets/selected/08-ground-coffee-leveling.jpg',
      statLabel: 'Bed Level',
      statValue: '100% Planar',
      icon: <Activity className="w-5 h-5 text-coffee-300" />,
    },
    {
      num: '02',
      title: '15 kg Calibrated Tamp',
      subtitle: 'Perpendicular Downward Pressure',
      desc: 'With a flat stainless steel tamper, exactly 15 kilograms (33 lbs) of perpendicular force is applied, followed by a slight polish to create a solid puck.',
      image: '/assets/selected/09-tamping-coffee-puck.jpg',
      statLabel: 'Tamping Force',
      statValue: '15 kg / 33 lbs',
      icon: <Target className="w-5 h-5 text-coffee-300" />,
    },
    {
      num: '03',
      title: 'Group Head Lock',
      subtitle: 'Pre-Infusion Chamber Sealed',
      desc: 'The loaded portafilter is locked tightly into the brass group head with a firm mechanical stroke, ready for 93.5°C water at 9 atmospheres.',
      image: '/assets/selected/10-portafilter-grouphead-lock.jpg',
      statLabel: 'Seal Pressure',
      statValue: '9 Atmospheres',
      icon: <Lock className="w-5 h-5 text-coffee-300" />,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const p = self.progress;
          if (p < 0.33) {
            setActiveStage(0);
          } else if (p < 0.66) {
            setActiveStage(1);
          } else {
            setActiveStage(2);
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-coffee-950 flex items-center justify-center overflow-hidden py-10"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-coffee-800/80 pb-4 mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-coffee-300">
              03 / The Preparation
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-coffee-50 font-normal">
              Distribution &amp; Calibrated Tamp
            </h2>
          </div>
          <div className="font-mono text-xs text-coffee-400">
            Precision Stage {stages[activeStage].num} / 03
          </div>
        </div>

        {/* 3-Stage Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 min-h-0">
          {/* Main Visual Display */}
          <div className="lg:col-span-8 h-[44vh] lg:h-[60vh] relative rounded-2xl overflow-hidden shadow-2xl border border-coffee-800/80 bg-coffee-900">
            {stages.map((st, idx) => (
              <div
                key={st.num}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  idx === activeStage
                    ? 'opacity-100 scale-100 pointer-events-auto'
                    : 'opacity-0 scale-105 pointer-events-none'
                }`}
              >
                <img
                  src={st.image}
                  alt={st.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/20 to-transparent" />

                {/* Floating telemetry tag */}
                <div className="absolute bottom-6 left-6 glass-pill px-4 py-2 rounded-xl flex items-center space-x-3">
                  {st.icon}
                  <div>
                    <span className="block text-[10px] font-mono text-coffee-400 uppercase tracking-widest">
                      {st.statLabel}
                    </span>
                    <span className="text-sm font-mono font-semibold text-coffee-300">
                      {st.statValue}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Narrative Cards */}
          <div className="lg:col-span-4 flex flex-col justify-between h-[44vh] lg:h-[60vh] py-2">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-md bg-coffee-900 border border-coffee-700/60 text-coffee-300 text-xs font-mono">
                {stages[activeStage].subtitle}
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-coffee-50 font-normal">
                {stages[activeStage].title}
              </h3>

              <p className="text-sm sm:text-base text-coffee-100/80 leading-relaxed font-light">
                {stages[activeStage].desc}
              </p>
            </div>

            {/* Stage Selector Pills */}
            <div className="space-y-3 pt-6 border-t border-coffee-800/80">
              <span className="text-[11px] font-mono text-coffee-400 uppercase tracking-wider block">
                Preparation Workflow
              </span>
              <div className="grid grid-cols-3 gap-2">
                {stages.map((st, i) => (
                  <button
                    key={st.num}
                    onClick={() => setActiveStage(i)}
                    className={`p-2.5 rounded-xl text-center border transition-all ${
                      i === activeStage
                        ? 'bg-coffee-800 border-coffee-300 text-coffee-50 shadow-md'
                        : 'bg-coffee-900/60 border-coffee-800/60 text-coffee-400 hover:text-coffee-200'
                    }`}
                  >
                    <span className="block text-[10px] font-mono text-coffee-400">Step {st.num}</span>
                    <span className="text-xs font-semibold truncate block mt-0.5">{st.title.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
