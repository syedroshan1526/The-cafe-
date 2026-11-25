import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { CinematicFilm } from './components/CinematicFilm';
import { MenuSection } from './components/MenuSection';
import { VisitAndReservation } from './components/VisitAndReservation';
import { Footer } from './components/Footer';
import { SCENE_THEMES, SceneThemeConfig } from './config/sceneThemes';

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [filmChapter, setFilmChapter] = useState(1);
  const [activeSection, setActiveSection] = useState<'film' | 'menu' | 'visit'>('film');

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.85,
    });

    (window as any).__lenis = lenis;

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', () => {
      ScrollTrigger.update();

      // Vanilla active section tracking (avoids competing ScrollTrigger instances)
      const menuEl = document.getElementById('menu');
      const visitEl = document.getElementById('visit');
      const scrollY = window.scrollY;

      if (visitEl && scrollY >= visitEl.offsetTop - 250) {
        setActiveSection((prev) => (prev !== 'visit' ? 'visit' : prev));
      } else if (menuEl && scrollY >= menuEl.offsetTop - 250) {
        setActiveSection((prev) => (prev !== 'menu' ? 'menu' : prev));
      } else {
        setActiveSection((prev) => (prev !== 'film' ? 'film' : prev));
      }
    });

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  const handleChapterChange = React.useCallback((ch: number) => {
    setFilmChapter((prev) => (prev !== ch ? ch : prev));
  }, []);

  // Compute adaptive theme for Navbar based on current film chapter or active section
  const currentThemeConfig: SceneThemeConfig =
    activeSection === 'film'
      ? SCENE_THEMES[filmChapter] || SCENE_THEMES[1]
      : SCENE_THEMES[9];

  return (
    <div className="relative min-h-screen bg-coffee-950 text-coffee-50 selection:bg-coffee-300 selection:text-coffee-950 font-sans">
      {/* Floating Cinematic Adaptive Navbar */}
      <Navbar
        themeConfig={currentThemeConfig}
        activeSection={activeSection}
        onOpenReservation={() => setReservationModalOpen(true)}
      />

      {/* Main Narrative Flow */}
      <main>
        {/* Core Continuous Cinematic Film Experience (All 8 Scenes from Original Video) */}
        <section id="film">
          <CinematicFilm onChapterChange={handleChapterChange} />
        </section>

        {/* Curated Typographic Menu Section */}
        <MenuSection />

        {/* Business Info, Live Hours & Table Reservation */}
        <VisitAndReservation
          reservationModalOpen={reservationModalOpen}
          onCloseReservation={() => setReservationModalOpen(false)}
          onOpenReservation={() => setReservationModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
