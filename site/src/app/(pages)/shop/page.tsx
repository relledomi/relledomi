'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useShop, PRODUCTS, type Product } from '@/stores/useShop';
import Link from 'next/link';

const CATEGORIES: { value: Product['category'] | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'outfits', label: 'Outfits' },
  { value: 'tops', label: 'Tops' },
  { value: 'bottoms', label: 'Bottoms' },
  { value: 'shoes', label: 'Shoes' },
  { value: 'accessories', label: 'Accessories' },
];

const LOOKBOOKS = [
  { name: 'The Street Games Kit', desc: 'Jersey + Arena Joggers + Competitor Headband. Competition-ready from head to toe.', slugs: ['relledomi-jersey', 'arena-joggers', 'competitor-headband'], emoji: '🔥' },
  { name: 'The Commentator Fit', desc: 'Vox Tee + Cargo Shorts + Relledomi Chain. Mic-side style.', slugs: ['vox-tee', 'cargo-shorts', 'relledomi-chain'], emoji: '🎙️' },
  { name: 'The Crowd Kit', desc: 'Kanga Hoodie + Arena Joggers + Arena Slide. Rep from the sideline in comfort.', slugs: ['kanga-hoodie', 'arena-joggers', 'arena-slide'], emoji: '📣' },
];

export default function ShopPage() {
  const { activeCategory, setCategory } = useShop();

  const filtered = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="mb-16">
        <h1 className="font-heading text-5xl md:text-7xl text-text-primary tracking-tight mb-4">
          SHOP
        </h1>
        <p className="text-text-secondary font-sans text-base md:text-lg max-w-2xl leading-relaxed">
          Relledomi Collection — full outfits, accessories, and shoes. Wear the brand, rep the movement.
        </p>
      </div>

      {/* Lookbook Section */}
      <SectionHeading title="LOOKBOOK" subtitle="Styled outfit bundles — curated head-to-toe fits for every role in the arena." />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {LOOKBOOKS.map((look) => {
          const totalPrice = look.slugs.reduce((sum, slug) => {
            const p = PRODUCTS.find((pr) => pr.slug === slug);
            return sum + (p?.price ?? 0);
          }, 0);

          return (
            <div key={look.name} className="bg-background-surface border border-border rounded-sm overflow-hidden group hover:border-primary/40 transition-colors">
              <div className="aspect-[4/3] bg-background-alt flex items-center justify-center">
                <span className="text-5xl">{look.emoji}</span>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-base text-text-primary group-hover:text-primary transition-colors mb-1">{look.name}</h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-3">{look.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-text-primary">${totalPrice}</span>
                  <span className="text-[10px] font-mono text-text-secondary uppercase">{look.slugs.length} items</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Category Filter */}
      <SectionHeading title="ALL PRODUCTS" />

      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setCategory(cat.value)}
            className={`px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-widest rounded-sm transition-colors ${
              activeCategory === cat.value
                ? 'bg-primary text-primary-foreground'
                : 'bg-background-surface text-text-secondary hover:text-text-primary border border-border'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        {filtered.map((product) => (
          <Link key={product.slug} href={`/shop/${product.slug}`}>
            <Card
              title={product.name}
              subtitle={product.description}
              imagePlaceholder={product.category === 'shoes' ? '👟' : product.category === 'accessories' ? '🎒' : product.category === 'outfits' ? '🔥' : '👕'}
              badge={product.badge === 'new' ? { label: 'New', variant: 'live' } : product.badge === 'sold_out' ? { label: 'Sold Out', variant: 'sold_out' } : undefined}
            >
              <p className="mt-2 font-mono text-sm text-text-primary">${product.price}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
