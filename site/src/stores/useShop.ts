import { create } from 'zustand';

export interface Product {
  slug: string;
  name: string;
  price: number;
  category: 'outfits' | 'tops' | 'bottoms' | 'shoes' | 'accessories';
  description: string;
  sizes: string[];
  badge?: 'new' | 'sold_out';
  bundle?: string; // lookbook bundle name
}

interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

interface ShopStore {
  cart: CartItem[];
  activeCategory: Product['category'] | 'all';
  setCategory: (category: Product['category'] | 'all') => void;
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (slug: string, size: string) => void;
  cartCount: () => number;
}

export const PRODUCTS: Product[] = [
  // Outfits (bundles)
  { slug: 'street-games-kit', name: 'The Street Games Kit', price: 149, category: 'outfits', description: 'Full competition outfit — jersey, joggers, and headband. Built for the arena.', sizes: ['S', 'M', 'L', 'XL'], badge: 'new', bundle: 'Street Games' },
  { slug: 'commentator-fit', name: 'The Commentator Fit', price: 129, category: 'outfits', description: 'Polo, tailored shorts, and chain. Made for the mic.', sizes: ['S', 'M', 'L', 'XL'], bundle: 'Commentator' },
  { slug: 'crowd-favourite', name: 'Crowd Favourite Set', price: 109, category: 'outfits', description: 'Hoodie and cargo combo. Rep from the sideline.', sizes: ['S', 'M', 'L', 'XL'], bundle: 'Crowd' },

  // Tops
  { slug: 'relledomi-jersey', name: 'Relledomi Jersey', price: 65, category: 'tops', description: 'Breathable competition jersey with embroidered logo.', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
  { slug: 'kanga-hoodie', name: 'Kanga Hoodie', price: 85, category: 'tops', description: 'Heavyweight hoodie in Kanga Pink.', sizes: ['S', 'M', 'L', 'XL'] },
  { slug: 'vox-tee', name: 'Vox Tee', price: 40, category: 'tops', description: 'Minimal tee with tonal Relledomi print.', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },

  // Bottoms
  { slug: 'arena-joggers', name: 'Arena Joggers', price: 70, category: 'bottoms', description: 'Tapered joggers with zip pockets and reflective piping.', sizes: ['S', 'M', 'L', 'XL'] },
  { slug: 'cargo-shorts', name: 'Cargo Shorts', price: 55, category: 'bottoms', description: 'Relaxed cargo shorts, utility pockets.', sizes: ['S', 'M', 'L', 'XL'] },

  // Shoes
  { slug: 'street-runner', name: 'Street Runner', price: 120, category: 'shoes', description: 'Lightweight runner with Kanga Pink sole.', sizes: ['7', '8', '9', '10', '11', '12'] },
  { slug: 'arena-slide', name: 'Arena Slide', price: 45, category: 'shoes', description: 'Embossed slide sandal for post-game.', sizes: ['7', '8', '9', '10', '11', '12'] },

  // Accessories
  { slug: 'competitor-headband', name: 'Competitor Headband', price: 20, category: 'accessories', description: 'Sweat-wicking headband with woven logo.', sizes: ['One Size'] },
  { slug: 'relledomi-chain', name: 'Relledomi Chain', price: 35, category: 'accessories', description: 'Stainless steel pendant on box chain.', sizes: ['One Size'] },
  { slug: 'duffle-bag', name: 'Arena Duffle', price: 75, category: 'accessories', description: 'Water-resistant duffle with shoe compartment.', sizes: ['One Size'] },
];

export const useShop = create<ShopStore>((set, get) => ({
  cart: [],
  activeCategory: 'all',

  setCategory: (category) => set({ activeCategory: category }),

  addToCart: (product, size) => {
    const cart = [...get().cart];
    const existing = cart.find((i) => i.product.slug === product.slug && i.size === size);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ product, size, quantity: 1 });
    }
    set({ cart });
  },

  removeFromCart: (slug, size) => {
    set({ cart: get().cart.filter((i) => !(i.product.slug === slug && i.size === size)) });
  },

  cartCount: () => get().cart.reduce((sum, i) => sum + i.quantity, 0),
}));
