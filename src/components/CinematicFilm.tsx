import React, { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Volume2, VolumeX } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 175;

interface CinematicFilmProps {
  onChapterChange?: (chapter: number) => void;
}

const CHAPTER_TITLES: Record<number, string> = {
  1: 'The Entrance',
  2: 'The Atmosphere',
  3: 'The Genesis',
  4: 'Tactile Precision',
  5: 'The Extraction',
  6: 'The Texture',
  7: 'The Artistry',
  8: 'The Savor',
};

export const CinematicFilm: React.FC<CinematicFilmProps> = ({ onChapterChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  // Chapter visibility states (1 to 8)
  const [activeChapter, setActiveChapter] = useState(1);
  const activeChapterRef = useRef(1);

  // Stable callback refs to ensure ScrollTrigger context is never torn down mid-scroll
  const onChapterChangeRef = useRef(onChapterChange);
  useEffect(() => {
    onChapterChangeRef.current = onChapterChange;
  }, [onChapterChange]);

  // Render a specific frame onto the canvas with cover sizing
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;

    // Image aspect ratio cover math
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = cw / ch;

    let drawWidth: number;
    let drawHeight: number;
    let offsetX: number;
    let offsetY: number;

    if (canvasRatio > imgRatio) {
      drawWidth = cw;
      drawHeight = cw / imgRatio;
      offsetX = 0;
      offsetY = (ch - drawHeight) / 2;
    } else {
      drawWidth = ch * imgRatio;
      drawHeight = ch;
      offsetX = (cw - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    currentFrameRef.current = index;
  }, []);

  const renderFrameRef = useRef(renderFrame);
  useEffect(() => {
    renderFrameRef.current = renderFrame;
  }, [renderFrame]);

  // Resize canvas to match display resolution
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    renderFrameRef.current(currentFrameRef.current);
  }, []);

  // Preload sequence frames
  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const numStr = String(i).padStart(4, '0');
      img.src = `/sequence/frame_${numStr}.jpg`;

      img.onload = () => {
        loadedCount++;
        const pct = Math.round((loadedCount / TOTAL_FRAMES) * 100);
        setLoadProgress(pct);

        if (i === 1) {
          handleResize();
          renderFrameRef.current(0);
          ScrollTrigger.refresh();
        }

        if (loadedCount >= 20 && !isLoaded) {
          setIsLoaded(true);
        }
      };

      imgs.push(img);
    }

    imagesRef.current = imgs;
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, isLoaded]);

  // GSAP ScrollTrigger Setup: Mounts once and stays rock-solid (no mid-scroll re-renders)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: '+=900%', // 900vh (~9,000px) for deliberate, cinematic pacing
        pin: true,
        pinSpacing: true,
        scrub: 0.9,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollPct(Math.round(progress * 100));

          // Compute target frame index (0 to 174)
          const frameIndex = Math.min(
            TOTAL_FRAMES - 1,
            Math.floor(progress * (TOTAL_FRAMES - 1))
          );
          renderFrameRef.current(frameIndex);

          // Pacing-tuned chapter thresholds
          let currentChapter = 1;
          if (progress < 0.12) {
            currentChapter = 1; // Opening facade & threshold
          } else if (progress < 0.25) {
            currentChapter = 2; // Walking into cafe & greeting
          } else if (progress < 0.38) {
            currentChapter = 3; // Beans hopper & on-demand grinding
          } else if (progress < 0.52) {
            currentChapter = 4; // Leveling & 15kg tamping
          } else if (progress < 0.68) {
            currentChapter = 5; // 9-bar espresso extraction & crema
          } else if (progress < 0.78) {
            currentChapter = 6; // Milk steaming & whirlpool vortex
          } else if (progress < 0.88) {
            currentChapter = 7; // Rosetta latte art bloom
          } else {
            currentChapter = 8; // Serving tray & customer savor
          }

          // Only dispatch state updates when the chapter actually changes
          if (currentChapter !== activeChapterRef.current) {
            activeChapterRef.current = currentChapter;
            setActiveChapter(currentChapter);
            onChapterChangeRef.current?.(currentChapter);
          }
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-coffee-950 overflow-hidden select-none max-w-full"
    >
      {/* Fullscreen Video Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block will-change-transform"
      />

      {/* Subtle cinematic letterbox vignette & 35mm lens vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(12,10,9,0.55)_100%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-coffee-950/70 via-coffee-950/20 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-coffee-950/80 via-coffee-950/25 to-transparent pointer-events-none" />

      {/* Loading Progress Bar (Before Initial Cache) */}
      {!isLoaded && (
        <div className="absolute inset-0 z-50 bg-coffee-950 flex flex-col items-center justify-center space-y-4">
          <div className="text-coffee-300 font-serif text-2xl tracking-[0.3em] uppercase animate-pulse">
            THE CAFÉ
          </div>
          <div className="w-48 h-[1.5px] bg-coffee-900 rounded-full overflow-hidden">
            <div
              className="h-full bg-coffee-300 transition-all duration-300 ease-out"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-coffee-400">
            Initializing Film Experience {loadProgress}%
          </span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* FLOATING CINEMATIC NARRATIVE OVERLAYS (Art-Directed Editorial Film Subtitles) */}
      {/* ========================================================================= */}

      {/* Act 1: The Glass Threshold — Frameless Cinematic Masterpiece */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-700 pointer-events-none ${
          activeChapter === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.45em] text-coffee-300 mb-4 block drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            Chapter I &bull; The Entrance
          </span>
          <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] text-coffee-50 font-normal tracking-tight leading-none drop-shadow-[0_8px_36px_rgba(0,0,0,0.98)]">
            THE CAFÉ
          </h1>
          <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-coffee-100/90 mt-5 sm:mt-6 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)]">
            A sanctuary for quiet craft, single origins, and unhurried mornings.
          </p>
        </div>

        {/* Cinematic Scroll Cue — Anchored at viewport bottom */}
        <div className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-[9px] font-mono uppercase tracking-[0.35em] text-coffee-300/90 mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            Scroll to step inside
          </span>
          <ChevronDown className="w-4 h-4 text-coffee-300/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]" />
        </div>
      </div>

      {/* Act 2: Step Inside & Atmosphere */}
      <div
        className={`absolute inset-0 flex flex-col justify-end p-8 sm:p-16 lg:p-24 transition-all duration-700 pointer-events-none pb-20 sm:pb-28 ${
          activeChapter === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-xl">
          <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-coffee-300/90 block mb-2">
            Chapter II — The Atmosphere
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-coffee-50 font-normal leading-tight drop-shadow-xl">
            Where warmth welcomes you.
          </h2>
          <p className="font-serif italic text-base sm:text-xl text-coffee-200/90 mt-3 font-light leading-relaxed drop-shadow">
            Exposed brick, ambient Edison glow, and the comforting hum of an artisanal coffee bar.
          </p>
        </div>
      </div>

      {/* Act 3: Whole Beans & The Mill */}
      <div
        className={`absolute inset-0 flex flex-col justify-end items-end p-8 sm:p-16 lg:p-24 text-right transition-all duration-700 pointer-events-none pb-20 sm:pb-28 ${
          activeChapter === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-xl">
          <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-coffee-300/90 block mb-2">
            Chapter III — The Genesis
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-coffee-50 font-normal leading-tight drop-shadow-xl">
            Single-origin micro-lots, <br />
            <span className="italic font-light text-coffee-300 font-serif">ground on demand.</span>
          </h2>
          <p className="font-mono text-xs text-coffee-200/80 mt-3 font-light tracking-wider drop-shadow">
            High-altitude Ethiopian Arabica tumbled into the hopper • 250-micron micrometric burr calibration.
          </p>
        </div>
      </div>

      {/* Act 4: Leveling & 15 kg Tamp (Vertically centered with generous breathing room) */}
      <div
        className={`absolute inset-0 flex flex-col justify-center items-start p-8 sm:p-16 lg:p-24 transition-all duration-700 pointer-events-none ${
          activeChapter === 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-xl">
          <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-coffee-300/90 block mb-2">
            Chapter IV — Tactile Precision
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-coffee-50 font-normal leading-tight drop-shadow-xl">
            The Calibrated Tamp
          </h2>
          <p className="font-serif italic text-base sm:text-xl text-coffee-200/90 mt-3 font-light leading-relaxed drop-shadow">
            Planar distribution and 15 kilograms of perpendicular force, sealing the coffee puck for 9 atmospheres.
          </p>
        </div>
      </div>

      {/* Act 5: 9-Bar Espresso Extraction */}
      <div
        className={`absolute inset-0 flex flex-col justify-center items-start p-8 sm:p-16 lg:p-24 transition-all duration-700 pointer-events-none ${
          activeChapter === 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-2xl">
          <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-coffee-300 block mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            Chapter V &bull; The Extraction
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-coffee-50 font-normal leading-tight drop-shadow-[0_6px_24px_rgba(0,0,0,0.98)]">
            9 Bar Liquid Gold
          </h2>
          <p className="font-serif italic text-base sm:text-xl md:text-2xl text-coffee-200/95 mt-3 font-light leading-relaxed drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            Twin syrupy streams pooling into warm porcelain, building an elastic, micro-bubbled amber crema.
          </p>
          <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-coffee-300/25 font-mono text-xs text-coffee-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            <span>93.5°C PID Temp</span>
            <span className="text-coffee-600">•</span>
            <span>18g In / 36g Out</span>
            <span className="text-coffee-600">•</span>
            <span>28s Extraction</span>
          </div>
        </div>
      </div>

      {/* Act 6: Milk Texture & Whirlpool Vortex */}
      <div
        className={`absolute inset-0 flex flex-col justify-end p-8 sm:p-16 lg:p-24 transition-all duration-700 pointer-events-none pb-20 sm:pb-28 ${
          activeChapter === 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-xl">
          <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-coffee-300/90 block mb-2">
            Chapter VI — The Texture
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-coffee-50 font-normal leading-tight drop-shadow-xl">
            The Whirlpool Vortex
          </h2>
          <p className="font-serif italic text-base sm:text-xl text-coffee-200/90 mt-3 font-light leading-relaxed drop-shadow">
            Dry saturated steam spinning cold milk into glossy, micro-textured velvet at 65°C. Zero coarse bubbles.
          </p>
        </div>
      </div>

      {/* Act 7: The Rosetta Bloom */}
      <div
        className={`absolute inset-0 flex flex-col justify-end items-end p-8 sm:p-16 lg:p-24 text-right transition-all duration-700 pointer-events-none pb-20 sm:pb-28 ${
          activeChapter === 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-xl">
          <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-coffee-300/90 block mb-2">
            Chapter VII — The Artistry
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-coffee-50 font-normal leading-tight drop-shadow-xl">
            The Handcrafted Rosetta
          </h2>
          <p className="font-serif italic text-base sm:text-xl text-coffee-200/90 mt-3 font-light leading-relaxed drop-shadow">
            Gentle wrist oscillations blooming white microfoam waves across the golden crema canvas.
          </p>
        </div>
      </div>

      {/* Act 8: The Savor & Hospitality — Frameless Cinematic Climax */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-700 pointer-events-none ${
          activeChapter === 8 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.45em] text-coffee-300 mb-4 block drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            Chapter VIII &bull; The Experience
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-coffee-50 font-normal tracking-tight leading-tight drop-shadow-[0_8px_36px_rgba(0,0,0,0.98)]">
            Your Table Awaits
          </h2>
          <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-coffee-100/95 mt-5 max-w-2xl font-light leading-relaxed drop-shadow-[0_4px_20px_rgba(0,0,0,0.98)]">
            A hot porcelain cup, a fresh flaky butter croissant, and the peace of a morning well spent.
          </p>
          <div className="mt-10 flex items-center justify-center space-x-2 text-coffee-300 font-mono text-xs uppercase tracking-widest drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            <span>Scroll for Offerings &amp; Reservations</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Elegant, Restrained Film HUD Chapter Indicator */}
      <div className="absolute top-20 sm:top-24 left-6 sm:left-8 z-20 flex items-center space-x-2.5 pointer-events-none">
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg transition-colors duration-500 border bg-coffee-950/60 text-coffee-200/90 border-coffee-800/50">
          Scene 0{activeChapter} &bull; {CHAPTER_TITLES[activeChapter]}
        </span>
      </div>

      {/* Minimalist Floating Sound Toggle */}
      <div className="absolute top-20 sm:top-24 right-6 sm:right-8 z-20">
        <button
          onClick={toggleSound}
          className="px-3 py-1.5 rounded-full flex items-center space-x-2 text-xs font-mono transition-colors shadow-lg border backdrop-blur-md bg-coffee-950/60 text-coffee-300 border-coffee-800/50 hover:text-coffee-50 hover:border-coffee-300"
          title="Toggle Ambient Audio"
        >
          {soundEnabled ? (
            <Volume2 className="w-3.5 h-3.5 text-coffee-200" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-coffee-400" />
          )}
          <span className="text-[9px] uppercase tracking-wider font-medium">
            {soundEnabled ? 'Ambiance On' : 'Silent Film'}
          </span>
        </button>
      </div>

      {/* Minimalist Bottom Timeline Progress Bar (Bounded, overflow-safe) */}
      <div className="absolute bottom-4 left-0 right-0 max-w-xl mx-auto px-6 z-20 flex items-center justify-between text-[10px] font-mono text-coffee-400/80 pointer-events-none">
        <span className="shrink-0 tracking-wider">Arrival</span>
        <div className="flex-1 mx-4 h-[1px] bg-coffee-800/80 relative overflow-hidden rounded-full">
          <div
            className="h-[2px] bg-coffee-300 absolute top-[-0.5px] left-0 transition-all duration-75 ease-out rounded-full shadow-sm shadow-coffee-300/40"
            style={{ width: `${scrollPct}%` }}
          />
        </div>
        <span className="shrink-0 tracking-wider">The Savor</span>
      </div>
    </div>
  );
};
