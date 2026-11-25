import React, { useState } from 'react';
import { CAFE_CONFIG } from '../config/cafeConfig';
import { MessageSquare, Phone, ExternalLink, Check, X, MapPin } from 'lucide-react';

interface VisitProps {
  reservationModalOpen: boolean;
  onCloseReservation: () => void;
  onOpenReservation: () => void;
}

export const VisitAndReservation: React.FC<VisitProps> = ({
  reservationModalOpen,
  onCloseReservation,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    guests: '2 Guests',
    date: '2026-11-26',
    time: '10:00 AM',
    note: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setFormData({
      name: '',
      guests: '2 Guests',
      date: '2026-11-26',
      time: '10:00 AM',
      note: '',
    });
    onCloseReservation();
  };

  const renderReservationForm = (isModal: boolean = false) => (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-coffee-300 block mb-1">
            Table Hospitality
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-coffee-50 font-normal">
            Reserve Your Morning
          </h3>
        </div>
        {isModal && (
          <button
            onClick={onCloseReservation}
            className="p-2 rounded-full text-coffee-400 hover:text-coffee-100 hover:bg-coffee-900 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {formSubmitted ? (
        <div className="py-10 text-center space-y-5 animate-in fade-in duration-300">
          <div className="w-12 h-12 rounded-full bg-coffee-800/80 border border-coffee-300/30 flex items-center justify-center text-coffee-300 mx-auto">
            <Check className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h4 className="font-serif text-2xl text-coffee-50 font-normal">
              Reservation Requested
            </h4>
            <p className="font-serif italic text-sm text-coffee-200/80 max-w-sm mx-auto">
              We look forward to welcoming you, {formData.name || 'valued guest'}.
            </p>
          </div>
          <div className="inline-block p-4 rounded-xl bg-coffee-950/60 border border-coffee-800/60 font-mono text-xs text-coffee-300 space-y-1 text-left">
            <div>&bull; Party: {formData.guests}</div>
            <div>&bull; Date: {formData.date} at {formData.time}</div>
            {formData.note && <div>&bull; Note: &ldquo;{formData.note}&rdquo;</div>}
          </div>
          <div>
            <button
              onClick={handleReset}
              className="mt-4 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest bg-coffee-300 text-coffee-950 hover:bg-coffee-200 transition-colors font-medium shadow-md"
            >
              Make Another Booking
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-coffee-300/90 mb-1.5">
              Guest Name
            </label>
            <input
              type="text"
              required
              placeholder="E.g., Clara Jensen"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-coffee-950/70 border border-coffee-800/70 text-coffee-50 text-xs focus:border-coffee-300 focus:outline-none placeholder:text-coffee-600 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-coffee-300/90 mb-1.5">
                Party Size
              </label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-coffee-950/70 border border-coffee-800/70 text-coffee-50 text-xs focus:border-coffee-300 focus:outline-none transition-colors"
              >
                <option value="1 Guest">1 Guest</option>
                <option value="2 Guests">2 Guests</option>
                <option value="3 Guests">3 Guests</option>
                <option value="4 Guests">4 Guests</option>
                <option value="5+ Guests">5+ Guests (Slow Bar)</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-coffee-300/90 mb-1.5">
                Date
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-coffee-950/70 border border-coffee-800/70 text-coffee-50 text-xs focus:border-coffee-300 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-coffee-300/90 mb-1.5">
                Time
              </label>
              <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-coffee-950/70 border border-coffee-800/70 text-coffee-50 text-xs focus:border-coffee-300 focus:outline-none transition-colors"
              >
                <option value="08:00 AM">08:00 AM</option>
                <option value="09:30 AM">09:30 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="01:30 PM">01:30 PM</option>
                <option value="03:00 PM">03:00 PM</option>
                <option value="04:30 PM">04:30 PM</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-coffee-300/90 mb-1.5">
              Special Notes / Seating Preference
            </label>
            <textarea
              rows={2}
              placeholder="E.g., Window sunlight, pour-over slow bar seating"
              value={formData.note}
              onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-coffee-950/70 border border-coffee-800/70 text-coffee-50 text-xs focus:border-coffee-300 focus:outline-none placeholder:text-coffee-600 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full text-xs font-mono uppercase tracking-[0.2em] bg-coffee-200 text-coffee-950 hover:bg-coffee-100 transition-all duration-300 font-medium shadow-md mt-2"
          >
            Confirm Reservation Request
          </button>
        </form>
      )}
    </div>
  );

  return (
    <section id="visit" className="relative py-28 lg:py-40 bg-coffee-950 text-coffee-50 border-t border-coffee-900/60 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column: Hours, Location & Direct Connect */}
          <div className="lg:col-span-6 space-y-12">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.45em] text-coffee-300 block mb-3">
                Atmosphere &amp; Hours
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-coffee-50 font-normal leading-tight">
                Visit THE CAFÉ
              </h2>
              <p className="font-serif italic text-base sm:text-lg text-coffee-200/80 mt-4 font-light leading-relaxed">
                Walk-ins are warmly welcomed throughout the morning. For slow bar tasting flights or quiet group mornings, we invite you to reserve your table.
              </p>
            </div>

            {/* Address & Hours Text Blocks */}
            <div className="space-y-8 font-mono text-xs">
              <div className="space-y-2 border-l-2 border-coffee-300/30 pl-6">
                <span className="text-coffee-300 uppercase tracking-widest block text-[10px]">
                  Address &amp; Neighborhood
                </span>
                <p className="text-base text-coffee-50 font-serif">
                  {CAFE_CONFIG.location.addressLine1}
                </p>
                <p className="text-coffee-400">
                  {CAFE_CONFIG.location.cityStateZip} &bull; {CAFE_CONFIG.location.neighborhood}
                </p>
                <a
                  href={CAFE_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-coffee-300 hover:text-coffee-100 transition-colors pt-2"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>

              <div className="space-y-2 border-l-2 border-coffee-300/30 pl-6">
                <div className="flex items-center space-x-3">
                  <span className="text-coffee-300 uppercase tracking-widest block text-[10px]">
                    Hours of Service
                  </span>
                  <span className="text-[10px] font-mono text-coffee-300/80">
                    Open Today
                  </span>
                </div>
                <p className="text-coffee-200">
                  {CAFE_CONFIG.hours.weekdays}
                </p>
                <p className="text-coffee-200">
                  {CAFE_CONFIG.hours.weekends}
                </p>
                <p className="text-[10px] text-coffee-400/80 italic">
                  {CAFE_CONFIG.hours.roasteryRoastDays}
                </p>
              </div>

              {/* Direct Messaging & Phone */}
              <div className="space-y-2 border-l-2 border-coffee-300/30 pl-6">
                <span className="text-coffee-300 uppercase tracking-widest block text-[10px]">
                  Direct Inquiries &amp; Orders
                </span>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <a
                    href={`https://wa.me/${CAFE_CONFIG.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-coffee-200 hover:text-coffee-50 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-coffee-300" />
                    <span>WhatsApp Concierge</span>
                  </a>

                  <a
                    href={`tel:${CAFE_CONFIG.contact.phone}`}
                    className="inline-flex items-center space-x-2 text-coffee-200 hover:text-coffee-50 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-coffee-300" />
                    <span>{CAFE_CONFIG.contact.displayPhone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: In-page Reservation Form */}
          <div
            id="reservation"
            className="lg:col-span-6 bg-coffee-900/40 p-8 sm:p-10 rounded-3xl border border-coffee-800/80 shadow-2xl backdrop-blur-sm scroll-mt-24"
          >
            {renderReservationForm(false)}
          </div>
        </div>
      </div>

      {/* Floating Modal Reservation (Triggered via Navbar button) */}
      {reservationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-coffee-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-coffee-900/95 border border-coffee-700/60 p-8 rounded-3xl shadow-2xl animate-in zoom-in-95 duration-200">
            {renderReservationForm(true)}
          </div>
        </div>
      )}
    </section>
  );
};
