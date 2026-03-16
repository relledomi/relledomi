'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { useShop, PRODUCTS } from '@/stores/useShop';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const { addToCart, cart } = useShop();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="font-heading text-3xl text-text-primary mb-4">Product not found</h1>
        <Link href="/shop"><Button variant="outline">Back to Shop</Button></Link>
      </div>
    );
  }

  const handleAdd = () => {
    if (!selectedSize) return;
    addToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const emoji = product.category === 'shoes' ? '👟' : product.category === 'accessories' ? '🎒' : product.category === 'outfits' ? '🔥' : '👕';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-xs font-mono text-text-secondary">
        <Link href="/shop" className="hover:text-text-primary transition-colors">Shop</Link>
        <span>/</span>
        <span className="text-text-primary">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="aspect-square bg-background-surface border border-border rounded-sm flex items-center justify-center">
          <span className="text-8xl">{emoji}</span>
        </div>

        {/* Details */}
        <div>
          <div className="flex items-start gap-3 mb-2">
            {product.badge === 'new' && <Badge variant="live">New</Badge>}
            <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">{product.category}</span>
          </div>

          <h1 className="font-heading text-3xl md:text-4xl text-text-primary tracking-tight mb-3">
            {product.name}
          </h1>

          <p className="text-text-secondary text-sm leading-relaxed mb-6">{product.description}</p>

          <p className="font-heading text-2xl text-text-primary mb-6">${product.price}</p>

          {/* Size selector */}
          <div className="mb-6">
            <p className="font-mono text-xs uppercase tracking-widest text-text-secondary mb-3">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-10 flex items-center justify-center text-xs font-mono font-bold border rounded-sm transition-colors ${
                    selectedSize === size
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border text-text-secondary hover:border-text-secondary'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to cart */}
          <Button
            onClick={handleAdd}
            disabled={!selectedSize}
            className={`w-full ${!selectedSize ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {added ? 'Added!' : selectedSize ? 'Add to Cart' : 'Select a Size'}
          </Button>

          {/* Bundle hint */}
          {product.bundle && (
            <div className="mt-6 p-4 bg-background-surface border border-border rounded-sm">
              <p className="text-xs text-text-secondary font-mono">
                Part of the <span className="text-primary">{product.bundle}</span> lookbook bundle
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
