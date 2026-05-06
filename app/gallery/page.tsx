import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pgs, contact } from '@/lib/data';
import PGGalleryGrid from '@/components/PGGalleryGrid';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse photos of every KGrand PG residence — bedrooms, common areas, dining, workspaces, and more.',
};

export default function GalleryPage() {
  const totalImages = pgs.reduce((sum, pg) => sum + pg.galleryImages.length, 0);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[420px] md:h-[480px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0 grid grid-cols-3 gap-0">
          {pgs.map((pg) => (
            <div key={pg.slug} className="relative">
              <Image
                src={pg.heroImage}
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute inset-0 hero-gradient" />

        <div className="relative z-10 max-w-7xl min-[1920px]:max-w-[80%] mx-auto px-4 w-full pb-10 md:pb-14 pt-20">
          <span className="inline-block px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold text-xs tracking-wider uppercase mb-4">
            Image Gallery
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-3">
            Spaces You&apos;ll Love
          </h1>
          <p className="text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed font-light">
            {totalImages} photos across {pgs.length} premium co-living residences in
            Hyderabad&apos;s IT corridor. Get a feel for every room, lounge, and shared
            space before you visit.
          </p>
        </div>
      </section>

      {/* ── Sticky Property Tabs ─────────────────────────────────────────── */}
      <nav
        className="sticky top-16 z-30 bg-surface-container-lowest/95 backdrop-blur-md border-b border-surface-container-high"
        aria-label="Jump to property"
      >
        <div className="max-w-7xl min-[1920px]:max-w-[80%] mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3 scroll-px-4 thin-scrollbar">
            {pgs.map((pg) => (
              <a
                key={pg.slug}
                href={`#${pg.slug}`}
                className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-on-surface-variant bg-surface-container hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    pg.badgeVariant === 'primary'
                      ? 'bg-primary'
                      : pg.badgeVariant === 'secondary'
                      ? 'bg-secondary'
                      : 'bg-tertiary-fixed-dim'
                  }`}
                />
                {pg.name}
                <span className="text-[10px] opacity-60 font-medium">
                  {pg.galleryImages.length}
                </span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Per-PG Gallery Sections ──────────────────────────────────────── */}
      {pgs.map((pg, idx) => (
        <section
          key={pg.slug}
          id={pg.slug}
          className={`scroll-mt-32 py-12 md:py-14 ${
            idx % 2 === 0 ? 'bg-surface' : 'bg-surface-container-low'
          }`}
        >
          <div className="max-w-7xl min-[1920px]:max-w-[80%] mx-auto px-4">
            {/* Section header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div className="flex-1 min-w-0">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 ${
                    pg.badgeVariant === 'primary'
                      ? 'bg-primary text-on-primary'
                      : pg.badgeVariant === 'secondary'
                      ? 'bg-secondary-container text-on-secondary-container'
                      : 'bg-tertiary-fixed text-on-tertiary-fixed'
                  }`}
                >
                  {pg.badge}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight mb-1.5">
                  {pg.name}
                </h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-on-surface-variant">
                  <span className="inline-flex items-center gap-1">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: '16px' }}
                    >
                      location_on
                    </span>
                    {pg.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span
                      className="material-symbols-outlined text-yellow-500"
                      style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="font-semibold text-on-surface">{pg.rating}</span>
                    <span className="opacity-70">({pg.reviewCount})</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: '16px' }}
                    >
                      photo_library
                    </span>
                    {pg.galleryImages.length} photos
                  </span>
                </div>
              </div>

              <Link
                href={`/pgs/${pg.slug}`}
                className="inline-flex items-center justify-center gap-2 bg-surface-container-high text-primary px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-primary hover:text-white transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                View Property
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  arrow_forward
                </span>
              </Link>
            </div>

            <PGGalleryGrid images={pg.galleryImages} pgName={pg.name} />
          </div>
        </section>
      ))}

      {/* ── CTA Strip ────────────────────────────────────────────────────── */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl min-[1920px]:max-w-[80%] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                Want to See It in Person?
              </h2>
              <p className="text-on-primary-container">
                Schedule a guided visit at your preferred property — we&apos;ll show you
                everything in the photos and more.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/enquire"
                className="cta-gradient border border-white/20 text-white px-6 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined">event_available</span>
                Book a Visit
              </Link>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
              >
                <span className="material-symbols-outlined">chat</span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
