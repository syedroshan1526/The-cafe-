import React from 'react';
import { CAFE_CONFIG } from '../config/cafeConfig';
import { Coffee, ArrowUp, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -30, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-coffee-950 text-coffee-400 py-16 sm:py-20 border-t border-coffee-900/80 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-coffee-900/60">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5 text-coffee-50">
              <div className="w-7 h-7 rounded-full bg-coffee-900 border border-coffee-300/30 flex items-center justify-center text-coffee-300">
                <Coffee className="w-3.5 h-3.5" />
              </div>
              <span className="font-serif text-xl tracking-[0.2em] font-normal uppercase">
                {CAFE_CONFIG.brandName}
              </span>
            </div>
            <p className="text-xs text-coffee-300/75 font-light leading-relaxed max-w-sm">
              {CAFE_CONFIG.storyDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-coffee-300 uppercase tracking-widest block text-[10px] mb-2 font-medium">
              Navigation
            </span>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#film"
                  onClick={(e) => handleLinkClick(e, '#film')}
                  className="hover:text-coffee-200 transition-colors"
                >
                  The Film Experience
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleLinkClick(e, '#menu')}
                  className="hover:text-coffee-200 transition-colors"
                >
                  Seasonal Offerings
                </a>
              </li>
              <li>
                <a
                  href="#visit"
                  onClick={(e) => handleLinkClick(e, '#visit')}
                  className="hover:text-coffee-200 transition-colors"
                >
                  Hours &amp; Location
                </a>
              </li>
              <li>
                <a
                  href="#reservation"
                  onClick={(e) => handleLinkClick(e, '#reservation')}
                  className="hover:text-coffee-200 transition-colors"
                >
                  Table Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* The Morning Dispatch */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-coffee-300 font-mono text-[10px] uppercase tracking-widest block font-medium">
              The Morning Dispatch
            </span>
            <p className="text-xs text-coffee-400 font-light leading-relaxed">
              Quiet notes on weekly micro-lot arrivals, roasting schedules, and brewing workshops.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="your.email@domain.com"
                className="w-full px-4 py-2 rounded-xl bg-coffee-900/60 border border-coffee-800 text-coffee-50 text-xs focus:border-coffee-300 focus:outline-none placeholder:text-coffee-600 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-coffee-200 text-coffee-950 font-medium text-xs uppercase tracking-wider hover:bg-coffee-100 transition-colors shrink-0"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-coffee-400/80 gap-4">
          <p>© {new Date().getFullYear()} {CAFE_CONFIG.brandName}. Single-origin craft and unhurried mornings.</p>

          <div className="flex items-center space-x-6">
            <a
              href={CAFE_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-coffee-200 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={CAFE_CONFIG.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-coffee-200 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 hover:text-coffee-200 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
