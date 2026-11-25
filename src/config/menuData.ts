/**
 * Centralized Editable Café Menu Data
 * Note: Prices are editable sample placeholders.
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  priceSample: string;
  tastingNotes?: string[];
  volume?: string;
  badge?: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "espresso",
    title: "Espresso & Black",
    subtitle: "Extracted at 9-bar pressure with 18g:36g precision ratio",
    items: [
      {
        id: "single-origin-espresso",
        name: "Single-Origin Double Espresso",
        description: "Twin streams of dense, viscous extraction topped with thick golden hazelnut crema.",
        priceSample: "$4.25",
        tastingNotes: ["Dark Chocolate", "Candied Orange", "Cacao Nibs"],
        volume: "36ml",
        badge: "House Favorite",
        image: "/assets/selected/12-crema-cup-close-up.jpg"
      },
      {
        id: "americano",
        name: "Artisan Americano",
        description: "Double shot of single-origin espresso drawn directly over filtered hot spring water.",
        priceSample: "$4.75",
        tastingNotes: ["Roasted Almond", "Brown Sugar", "Crisp Apple"],
        volume: "240ml"
      },
      {
        id: "espresso-tonic",
        name: "Sparkling Espresso Tonic",
        description: "Chilled fever-tree botanical tonic layered with floating espresso over crystal ice cubes.",
        priceSample: "$6.00",
        tastingNotes: ["Bergamot", "Lime Zest", "Caramel"],
        volume: "300ml",
        badge: "Seasonal"
      }
    ]
  },
  {
    id: "milk-creations",
    title: "Milk & White Creations",
    subtitle: "Silky microfoam hand-poured into balanced espresso foundations",
    items: [
      {
        id: "signature-latte",
        name: "Signature Rosetta Latte",
        description: "Velvety steamed whole farm milk poured with an intricate handcrafted rosetta leaf over espresso.",
        priceSample: "$5.75",
        tastingNotes: ["Vanilla Cream", "Honey", "Toasted Pecan"],
        volume: "300ml",
        badge: "Signpost Craft",
        image: "/assets/selected/17-finished-latte-art-cup.jpg"
      },
      {
        id: "flat-white",
        name: "Melbourne-Style Flat White",
        description: "Double ristretto foundation blanketed with glossy, thin microfoam.",
        priceSample: "$5.25",
        tastingNotes: ["Fudge", "Toffee", "Velvet"],
        volume: "180ml"
      },
      {
        id: "cortado",
        name: "Spanish Cortado",
        description: "Equal 1:1 balance of hot espresso and textured warm milk in a heavy glass beaker.",
        priceSample: "$4.75",
        tastingNotes: ["Warm Hazelnut", "Malt", "Butterscotch"],
        volume: "120ml"
      },
      {
        id: "oat-cappuccino",
        name: "Minor Figures Oat Cappuccino",
        description: "Organic steamed oat milk dusted with single-origin Valrhona 70% cocoa powder.",
        priceSample: "$6.25",
        tastingNotes: ["Oat Sweetness", "Dark Cocoa", "Cardamom"],
        volume: "240ml"
      }
    ]
  },
  {
    id: "filter-slow",
    title: "Pour-Over & Slow Bar",
    subtitle: "Gentle manual drip revealing nuanced terroir and fruit aromatics",
    items: [
      {
        id: "ethiopia-yirgacheffe",
        name: "Ethiopia Yirgacheffe G1",
        description: "Hand-poured V60 extraction highlighting floral jasmine and peach acidity.",
        priceSample: "$7.00",
        tastingNotes: ["Jasmine Flower", "White Peach", "Lemon Verbena"],
        volume: "300ml",
        badge: "Micro-Lot"
      },
      {
        id: "colombia-geisha",
        name: "Colombia Huila Geisha Reserve",
        description: "Ultra-rare washed Geisha with exquisite tea-like elegance and honeysuckle sweetness.",
        priceSample: "$9.50",
        tastingNotes: ["Honeysuckle", "Meyer Lemon", "Bergamot"],
        volume: "300ml",
        badge: "Rare Selection"
      },
      {
        id: "cold-drip-reserve",
        name: "18-Hour Slow Cold Drip",
        description: "Tower-extracted iced elixir served over a hand-carved crystal ice sphere.",
        priceSample: "$6.50",
        tastingNotes: ["Dark Cherry", "Port Wine", "Sweet Cedar"],
        volume: "200ml"
      }
    ]
  },
  {
    id: "bakery-pairings",
    title: "Bakery & Viennoiserie",
    subtitle: "Baked fresh every morning in-house with European cultured butter",
    items: [
      {
        id: "butter-croissant",
        name: "Golden Butter Croissant",
        description: "Traditional 72-layer laminated pastry, crispy golden exterior with honeycombed tender interior.",
        priceSample: "$4.50",
        tastingNotes: ["Cultured Butter", "Fleur de Sel", "Warm Brioche"],
        badge: "Daily Signature",
        image: "/assets/selected/18-barista-serving-tray.jpg"
      },
      {
        id: "pain-au-chocolat",
        name: "Valrhona Pain au Chocolat",
        description: "Double batons of 64% dark chocolate rolled in flaky puff pastry.",
        priceSample: "$5.25",
        tastingNotes: ["Bittersweet Chocolate", "Butter Flakes"]
      },
      {
        id: "cardamom-knot",
        name: "Swedish Cardamom Morning Bun",
        description: "Twisted sourdough brioche spiced with freshly crushed green cardamom and pearl sugar.",
        priceSample: "$4.95",
        tastingNotes: ["Green Cardamom", "Cane Sugar", "Caramelized Crust"]
      }
    ]
  }
];
