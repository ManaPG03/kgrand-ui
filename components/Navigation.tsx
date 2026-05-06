'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: "Our PG's", href: '/pgs' },
  { label: 'Our Hotels', href: '/hotels' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About Us', href: '/about' },
  { label: 'Community', href: '/community' },
  { label: 'Support Hub', href: '/support' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass-nav shadow-ambient">
      <nav className="max-w-7xl min-[1920px]:max-w-[80%] mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center">
          <Image
            src="/logo.png"
            alt="Kgrand"
            width={200}
            height={60}
            className="h-18 w-auto object-contain -ml-4 -mr-3"
            priority
          />
          <span className="text-xl font-black text-primary tracking-tight">KGrand</span>
        </Link>

        {/* Center nav - desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  isActive(link.href)
                    ? 'text-primary bg-primary/8 font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right CTA - desktop */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <Link
            href="/enquire"
            className="cta-gradient text-on-primary text-sm font-semibold px-5 py-2.5 rounded-full transition-opacity hover:opacity-90 whitespace-nowrap"
          >
            Enquire Now
          </Link>
        </div>

        {/* Hamburger - mobile */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          onTouchEnd={(e) => { e.preventDefault(); setMenuOpen((v) => !v); }}
          className="lg:hidden relative z-50 flex items-center justify-center w-12 h-12 -mr-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer"
          style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          type="button"
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="pointer-events-none">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="pointer-events-none">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-t border-surface-container shadow-ambient-lg">
          <ul className="flex flex-col py-2 px-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-primary bg-primary/8 font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-7 py-4 border-t border-surface-container">
            <Link
              href="/enquire"
              onClick={() => setMenuOpen(false)}
              className="cta-gradient text-on-primary text-sm font-semibold px-5 py-3 rounded-full w-full flex items-center justify-center transition-opacity hover:opacity-90"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
