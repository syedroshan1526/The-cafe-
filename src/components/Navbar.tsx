import React, { useState, useEffect } from 'react';
import { CAFE_CONFIG } from '../config/cafeConfig';
import { SceneThemeConfig } from '../config/sceneThemes';
import { Coffee, Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  themeConfig: SceneThemeConfig;
  activeSection: 'film' | 'menu' | 'visit';
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  themeConfig,
  activeSection,
  onOpenReservation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Experience', href: '#film', section: 'film' },
    { label: 'Seasonal Menu', href: '#menu', section: 'menu' },
    { label: 'Visit & Hours', href: '#visit', section: 'visit' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#' || href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetEl = document.querySelector(href);
    if (targetEl) {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(targetEl, { offset: -30, duration: 1.2 });
      } else {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none">
      <div
        className={`max-w-5xl mx-auto rounded-full border px-4 sm:px-7 py-2.5 sm:py-3 transition-all duration-500 pointer-events-auto shadow-2xl flex items-center justify-between ${
          themeConfig.navBackground
        } ${themeConfig.navBorder} ${hasScrolled ? 'scale-[0.99]' : 'scale-100'}`}
      >
        {/* Brand Logo & Name */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, '#')}
          className="flex items-center space-x-2.5 group shrink-0"
        >
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 border ${themeConfig.logoBg} ${themeConfig.logoBorder} ${themeConfig.logoColor}`}
          >
            <Coffee className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span
            className={`font-serif text-sm sm:text-base font-normal tracking-[0.25em] uppercase transition-colors duration-500 ${themeConfig.logoColor} group-hover:opacity-80`}
          >
            {CAFE_CONFIG.brandName}
          </span>
        </a>

        {/* Desktop Navigation Links (Centered, Elegant Typography) */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
          {navLinks.map((link) => {
            const isActive = activeSection === link.section;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[11px] font-mono uppercase tracking-[0.22em] transition-all duration-300 relative py-1 ${
                  isActive
                    ? `${themeConfig.textColor} font-semibold`
                    : `${themeConfig.textMutedColor} hover:${themeConfig.textColor}`
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[1.5px] rounded-full transition-all duration-500 ${themeConfig.activeIndicatorColor}`}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button (Desktop >= md) */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={onOpenReservation}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-[0.18em] transition-all duration-300 shadow-sm active:scale-95 font-medium ${themeConfig.buttonBg} ${themeConfig.buttonText} ${themeConfig.buttonHoverBg}`}
          >
            <Calendar className="w-3 h-3" />
            <span>Reserve Table</span>
          </button>
        </div>

        {/* Mobile Viewport Toggle & Compact Reserve Action */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={onOpenReservation}
            className={`px-3 py-1.5 rounded-full text-[9px] font-mono uppercase tracking-widest font-medium transition-all ${themeConfig.buttonBg} ${themeConfig.buttonText}`}
          >
            Reserve
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-1.5 rounded-full transition-colors ${themeConfig.textColor} hover:opacity-80`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-sm mx-auto mt-2 rounded-2xl bg-coffee-950/95 backdrop-blur-xl border border-coffee-800/80 p-6 pointer-events-auto shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col space-y-3 font-serif">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-base py-1.5 border-b border-coffee-900/60 transition-colors ${
                  activeSection === link.section ? 'text-coffee-300 font-medium' : 'text-coffee-100 hover:text-coffee-300'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-widest bg-coffee-200 text-coffee-950 font-medium hover:bg-coffee-100 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve a Table</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
