import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sliders, Cpu, Gauge } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const OriginAndGrind: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      index: '01',
      title: 'Whole Bean Selection',
      subtitle: '100% High-Altitude Arabica',
      description: 'Slow-grown at 1,850m elevation. Carefully inspected and batch-roasted to preserve essential aromatic oils before tumbling into the transparent hopper.',
      image: '/assets/selected/05-pouring-coffee-beans-hopper.jpg',
      specs: [
        { label: 'Origin', value: 'Ethiopia Yirgacheffe' },
        { label: 'Altitude', value: '1,850m ASL' },
        { label: 'Process', value: 'Washed / Sun-Dried' },
        { label: 'Roast Profile', value: 'Medium-Light (Agtron 65)' },
      ],
      icon: <Sliders className="w-5 h-5 text-coffee-300" />,
    },
    {
      index: '02',
      title: 'Digital Calibration',
      subtitle: 'Capacitive Precision Activation',
      description: 'The barista selects single-dose timing calibrated to the exact milligram on the digital interface, preventing heat transfer and grounds oxidation.',
      image: '/assets/selected/06-grinder-touch-activation.jpg',
      specs: [
        { label: 'Dose Target', value: '18.0g ± 0.05g' },
        { label: 'Burr Speed', value: '1,400 RPM' },
        { label: 'Interface', value: 'Capacitive Digital HUD' },
        { label: 'Retention', value: '< 0.1g Zero Waste' },
      ],
      icon: <Cpu className="w-5 h-5 text-coffee-300" />,
    },
    {
      index: '03',
      title: 'On-Demand Dosing',
      subtitle: 'Fluffy 250-Micron Particle Distribution',
      description: 'Freshly pulverized coffee grounds stream directly into the commercial chrome portafilter, releasing intoxicating floral and cocoa aromatics.',
      image: '/assets/selected/07-fresh-grounds-dosing.jpg',
      specs: [
        { label: 'Burr Geometry', value: '83mm Flat Titanium' },
        { label: 'Grind Size', value: '250 Microns' },
        { label: 'Dose Time', value: '5.2 Seconds' },
        { label: 'Aroma Release', value: 'Immediate Volatiles' },
      ],
      icon: <Gauge className="w-5 h-5 text-coffee-300" />,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin container and update active step based on scroll progression
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=160%',
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress < 0.33) {
            setActiveStep(0);
          } else if (progress < 0.66) {
            setActiveStep(1);
          } else {
            setActiveStep(2);
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="craft"
      className="relative w-full h-screen bg-coffee-950 flex items-center justify-center overflow-hidden py-12"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        {/* Section Mini Header */}
        <div className="flex items-center justify-between border-b border-coffee-800/80 pb-4 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-coffee-300">
              02 / The Genesis
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-coffee-50 font-normal">
              Origin, Mill &amp; Grind
            </h2>
          </div>
          <div className="flex items-center space-x-2 font-mono text-xs text-coffee-400">
            <span>Step {steps[activeStep].index}</span>
            <span>/</span>
            <span>03</span>
          </div>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 min-h-0">
          {/* Left: Dynamic Image Showcase with Crossfade */}
          <div className="lg:col-span-7 h-[46vh] lg:h-[62vh] relative rounded-2xl overflow-hidden shadow-2xl border border-coffee-800/80 bg-coffee-900">
            {steps.map((step, idx) => (
              <div
                key={step.index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  idx === activeStep
                    ? 'opacity-100 scale-100 pointer-events-auto'
                    : 'opacity-0 scale-105 pointer-events-none'
                }`}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/20 to-transparent" />
                <div className="absolute top-4 left-4 glass-pill px-3 py-1.5 rounded-full flex items-center space-x-2 text-xs font-mono text-coffee-300">
                  {step.icon}
                  <span>{step.subtitle}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Technical Narrative & Live Telemetry */}
          <div className="lg:col-span-5 flex flex-col justify-between h-[46vh] lg:h-[62vh] py-2">
            {/* Active Step Content */}
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-md bg-coffee-800/80 text-coffee-300 text-xs font-mono border border-coffee-700/50">
                Phase {steps[activeStep].index} / 03
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-coffee-50 font-normal">
                {steps[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-coffee-100/80 leading-relaxed font-light">
                {steps[activeStep].description}
              </p>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-2 gap-3 pt-3">
                {steps[activeStep].specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-3 rounded-xl bg-coffee-900/80 border border-coffee-800/60"
                  >
                    <span className="block text-[11px] font-mono text-coffee-400 uppercase tracking-wider">
                      {spec.label}
                    </span>
                    <span className="block text-xs sm:text-sm font-semibold text-coffee-200 mt-0.5">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step Selection Tabs */}
            <div className="pt-6 border-t border-coffee-800/60">
              <div className="flex items-center space-x-3">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                      idx === activeStep
                        ? 'bg-coffee-300 shadow-md shadow-coffee-300/40'
                        : 'bg-coffee-800/60 hover:bg-coffee-700'
                    }`}
                    aria-label={`Jump to stage ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="flex justify-between items-center text-[11px] font-mono text-coffee-400 mt-2">
                <span>Scroll to step through</span>
                <span className="text-coffee-300">Phase {activeStep + 1} of 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
