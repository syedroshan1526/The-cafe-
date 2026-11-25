/**
 * Centralized Editable Café Business Configuration
 * Edit these values with your actual business facts.
 */
export interface CafeBusinessConfig {
  brandName: string;
  tagline: string;
  subheading: string;
  storyQuote: string;
  storyDescription: string;
  contact: {
    phone: string;       // Set empty or your real number, e.g., "+1 (555) 234-5678"
    displayPhone: string;
    whatsapp: string;    // Set digits only, e.g., "15552345678", or leave empty if unconfigured
    email: string;
  };
  location: {
    addressLine1: string;
    cityStateZip: string;
    neighborhood: string;
    googleMapsUrl: string; // Direct link to open in Google Maps
  };
  hours: {
    weekdays: string;
    weekends: string;
    roasteryRoastDays: string;
  };
  socials: {
    instagram: string;
    twitter: string;
  };
}

export const CAFE_CONFIG: CafeBusinessConfig = {
  brandName: "THE CAFÉ",
  tagline: "Artisanal Roasters & Specialty Coffee",
  subheading: "Where every morning finds its quiet rhythm and pure craft.",
  storyQuote: "Coffee is not merely an infusion; it is an unhurried communion of origin, heat, water, and human precision.",
  storyDescription: "Founded on the belief that specialty coffee belongs in a tranquil, tactile space, THE CAFÉ sources single-origin lots directly from high-altitude micro-farms. From calibrated on-demand grinding to precise 9-bar extraction and hand-poured rosetta microfoam, every cup is crafted with intentional mastery.",
  contact: {
    phone: "+1 (555) 789-2041",
    displayPhone: "+1 (555) 789-2041",
    whatsapp: "15557892041", // Editable placeholder
    email: "hello@thecafe-artisanal.com"
  },
  location: {
    addressLine1: "142 Grand Heritage Street",
    cityStateZip: "Design District, NY 10013",
    neighborhood: "Historic North Corner",
    googleMapsUrl: "https://maps.google.com/?q=142+Grand+St+New+York"
  },
  hours: {
    weekdays: "Monday – Friday: 7:00 AM – 6:00 PM",
    weekends: "Saturday – Sunday: 8:00 AM – 7:00 PM",
    roasteryRoastDays: "Tuesdays & Thursdays (Fresh Batch Roasting)"
  },
  socials: {
    instagram: "https://instagram.com/thecafe_roasters",
    twitter: "https://twitter.com/thecafe_roasters"
  }
};
