import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Feather, Award, Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const LatteArtSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const pourSteps = [
    {
      num: '01',
      title: 'Setting The Canvas',
      subtitle: 'Pouring High to Sink & Integrate',
      desc: 'The cup is tilted at a 45° angle. A thin, high stream of microfoam dives beneath the crema, establishing a sweet milk foundation while keeping the dark crema canvas immaculate.',
      image: '/assets/selected/15-latte-art-initial-pour.jpg',
      technique: 'High pour (5 cm) • Crema integration',
    },
    {
      num: '02',
      title: 'The Rosetta Bloom',
      subtitle: 'Rhythmic Wrist Oscillations',
      desc: 'The pitcher tip drops within millimeters of the crema surface. Gentle, side-to-side wrist wiggles release white microfoam waves that ripple forward into delicate rosetta leaves.',
      image: '/assets/selected/16-latte-art-rosetta-bloom.jpg',
      technique: 'Surface pour (2 mm) • 12 harmonic ripples',
    },
    {
      num: '03',
      title: 'The Masterpiece',
      subtitle: 'The Central Pull-Through Cut',
      desc: 'The pour finishes with an elevated quick drag through the center line, drawing the symmetrical heart tip and locking the leaf design in crisp white-on-amber contrast.',
      image: '/assets/selected/17-finished-latte-art-cup.jpg',
      technique: 'Lift & strike-through • Flawless symmetry',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=160%',
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const p = self.progress;
          if (p < 0.33) {
            setCurrentStep(0);
          } else if (p < 0.66) {
            setCurrentStep(1);
          } else {
            setCurrentStep(2);
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="latte-art"
      className="relative w-full h-screen bg-coffee-950 flex items-center justify-center overflow-hidden py-10"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-coffee-800/80 pb-4 mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-coffee-300">
              06 / The Artistry
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-coffee-50 font-normal">
              The Handcrafted Rosetta
            </h2>
          </div>
          <div className="flex items-center space-x-2 font-mono text-xs text-coffee-400">
            <Feather className="w-4 h-4 text-coffee-300" />
            <span>Phase {pourSteps[currentStep].num} / 03</span>
          </div>
        </div>

        {/* Dynamic Display Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 min-h-0">
          {/* Main Visual Frame */}
          <div className="lg:col-span-8 h-[44vh] lg:h-[60vh] relative rounded-2xl overflow-hidden shadow-2xl border border-coffee-800/80 bg-coffee-900">
            {pourSteps.map((step, idx) => (
              <div
                key={step.num}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  idx === currentStep
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
                <div className="absolute top-4 left-4 glass-pill px-3.5 py-1.5 rounded-full text-xs font-mono text-coffee-300 flex items-center space-x-2">
                  <Award className="w-3.5 h-3.5" />
                  <span>{step.technique}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Narrative */}
          <div className="lg:col-span-4 flex flex-col justify-between h-[44vh] lg:h-[60vh] py-2">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-md bg-coffee-900 border border-coffee-700/60 text-coffee-300 text-xs font-mono">
                {pourSteps[currentStep].subtitle}
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-coffee-50 font-normal">
                {pourSteps[currentStep].title}
              </h3>

              <p className="text-sm sm:text-base text-coffee-100/80 leading-relaxed font-light">
                {pourSteps[currentStep].desc}
              </p>
            </div>

            {/* Quick Step Switcher */}
            <div className="space-y-3 pt-6 border-t border-coffee-800/80">
              <div className="flex items-center justify-between text-[11px] font-mono text-coffee-400">
                <span>The Pour Progression</span>
                <span className="text-coffee-300 flex items-center space-x-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Interactive Scrub</span>
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {pourSteps.map((st, i) => (
                  <button
                    key={st.num}
                    onClick={() => setCurrentStep(i)}
                    className={`p-2.5 rounded-xl text-center border transition-all ${
                      i === currentStep
                        ? 'bg-coffee-800 border-coffee-300 text-coffee-50 shadow-md'
                        : 'bg-coffee-900/60 border-coffee-800/60 text-coffee-400 hover:text-coffee-200'
                    }`}
                  >
                    <span className="block text-[10px] font-mono text-coffee-400">Stage {st.num}</span>
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
