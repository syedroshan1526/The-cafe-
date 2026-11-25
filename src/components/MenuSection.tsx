import React, { useState } from 'react';
import { MENU_CATEGORIES, MenuItem } from '../config/menuData';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(MENU_CATEGORIES[0].id);

  const activeCategory =
    MENU_CATEGORIES.find((cat) => cat.id === selectedCategory) || MENU_CATEGORIES[0];

  return (
    <section id="menu" className="relative py-28 lg:py-36 bg-coffee-950 text-coffee-50 border-t border-coffee-900/60 scroll-mt-28">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-[10px] font-mono uppercase tracking-[0.45em] text-coffee-300 block mb-3">
            Artisanal Selection
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-coffee-50 font-normal tracking-tight">
            The Seasonal Menu
          </h2>
          <div className="w-10 h-[1px] bg-coffee-300/40 mx-auto mt-5" />
          <p className="font-serif italic text-base sm:text-lg text-coffee-200/80 mt-4 max-w-md mx-auto font-light leading-relaxed">
            Every cup extracted to order with single-origin beans and farm-fresh organic dairy.
          </p>
        </div>

        {/* Minimalist Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4 mb-14">
          {MENU_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 sm:px-4 lg:px-5 py-2 rounded-full text-[11px] sm:text-xs font-mono uppercase tracking-[0.14em] sm:tracking-[0.18em] transition-all duration-300 ${
                  isSelected
                    ? 'bg-coffee-200 text-coffee-950 font-medium shadow-md'
                    : 'text-coffee-300/80 hover:text-coffee-100 hover:bg-coffee-900/60'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Category Subtitle */}
        <div className="mb-10 text-center">
          <span className="text-xs font-mono italic text-coffee-300/80 tracking-wider">
            &mdash; {activeCategory.subtitle} &mdash;
          </span>
        </div>

        {/* Editorial Menu List */}
        <div className="divide-y divide-coffee-900/70">
          {activeCategory.items.map((item: MenuItem) => (
            <div
              key={item.id}
              className="group py-7 sm:py-8 transition-colors duration-300 hover:bg-coffee-900/20 px-3 sm:px-5 -mx-3 sm:-mx-5 rounded-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div className="flex items-center space-x-3">
                  <h3 className="font-serif text-xl sm:text-2xl text-coffee-50 group-hover:text-coffee-200 transition-colors font-normal">
                    {item.name}
                  </h3>
                  {item.badge && (
                    <span className="text-[9px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-coffee-900 text-coffee-300 border border-coffee-700/40 whitespace-nowrap shrink-0">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline space-x-2.5 shrink-0">
                  {item.volume && (
                    <span className="text-[11px] font-mono text-coffee-400/80 tracking-wider">
                      {item.volume}
                    </span>
                  )}
                  <span className="font-mono text-base sm:text-lg font-medium text-coffee-200">
                    {item.priceSample}
                  </span>
                </div>
              </div>

              <p className="font-light text-xs sm:text-sm text-coffee-300/75 mt-2 max-w-2xl leading-relaxed">
                {item.description}
              </p>

              {item.tastingNotes && item.tastingNotes.length > 0 && (
                <div className="flex items-center space-x-2 mt-3 text-[11px] font-mono text-coffee-400/75">
                  <span className="text-coffee-300/90">Notes:</span>
                  <span>{item.tastingNotes.join(' • ')}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tasteful Editorial Note */}
        <div className="mt-16 pt-8 border-t border-coffee-900/60 text-center">
          <p className="text-xs font-serif italic text-coffee-300/70">
            Single-origin micro-lots roasted in-house weekly. Plant-based milks and pour-over brewing available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};
