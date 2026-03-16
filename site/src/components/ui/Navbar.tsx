'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useShop } from '@/stores/useShop';

const NAV_LINKS = [
  { href: '/games', label: 'Games' },
  { href: '/tournament', label: 'Tournament' },
  { href: '/shop', label: 'Shop' },
  { href: '/teams', label: 'Teams' },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = useShop((s) => s.cartCount());

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-main/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Wordmark */}
          <Link href="/" className="font-heading text-lg text-text-primary hover:text-primary transition-colors tracking-tight">
            RELLEDOMI
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-widest rounded-sm transition-colors ${
                    active
                      ? 'text-primary bg-primary/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-background-surface'
                  }`}
                >
                  {link.label}
                  {link.href === '/shop' && cartCount > 0 && (
                    <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 text-[9px] bg-primary text-primary-foreground rounded-full">
                      {cartCount}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1">
              <span className={`block h-px bg-current transition-transform ${menuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
              <span className={`block h-px bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-current transition-transform ${menuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background-main/95 backdrop-blur-md">
          <div className="px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-widest rounded-sm transition-colors ${
                    active
                      ? 'text-primary bg-primary/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-background-surface'
                  }`}
                >
                  {link.label}
                  {link.href === '/shop' && cartCount > 0 && (
                    <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 text-[9px] bg-primary text-primary-foreground rounded-full">
                      {cartCount}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
