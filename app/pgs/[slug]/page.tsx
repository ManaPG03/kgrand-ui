import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pgs, contact } from '@/lib/data';
import GalleryLightbox from '@/components/GalleryLightbox';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return pgs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pg = pgs.find((p) => p.slug === slug);
  if (!pg) return { title: 'Not Found' };
  return {
    title: pg.name,
    description: `${pg.name} - premium co-living PG in ${pg.location}. Starting from ${pg.pricePerMonth}/mo.`,
  };
}

export default async function PGDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pg = pgs.find((p) => p.slug === slug);

  if (!pg) {
    notFound();
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src={pg.heroImage}
          alt={pg.heroAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-gradient" />

        <div className="absolute bottom-0 left-0 right-0 pb-4 md:pb-6">
          <div className="max-w-7xl mx-auto px-4">
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
            <h1 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">
              {pg.name}
            </h1>
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1.5 text-slate-200 text-sm">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                  location_on
                </span>
                {pg.location}
              </span>
              <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                <span
                  className="material-symbols-outlined text-yellow-400"
                  style={{ fontSize: '14px', fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span className="text-white text-sm font-bold">{pg.rating}</span>
                <span className="text-white/70 text-sm">({pg.reviewCount} reviews)</span>
              </span>
              <span className="text-white font-black text-2xl">
                {pg.pricePerMonth}
                <span className="text-slate-300 text-base font-normal">/mo</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────────────── */}
      {pg.galleryImages.length > 0 && (
        <section className="py-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-4">
            <GalleryLightbox images={pg.galleryImages} />
          </div>
        </section>
      )}

      {/* ── Main Content + Sidebar ────────────────────────────────────────── */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">

            {/* ── Main Content ──────────────────────────────────────────── */}
            <div className="lg:col-span-2 space-y-8">

              <div className="bg-surface-container-lowest rounded-xl p-4 shadow-ambient">
                <h2 className="text-lg font-bold text-primary mb-4">Property Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-container-low rounded-lg p-3">
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block mb-1">
                      Room Size
                    </span>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                        square_foot
                      </span>
                      {pg.roomSize}
                    </div>
                  </div>
                  <div className="bg-surface-container-low rounded-lg p-3">
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block mb-1">
                      Sharing
                    </span>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                        group
                      </span>
                      {pg.sharing}
                    </div>
                  </div>
                  <div className="bg-surface-container-low rounded-lg p-3">
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block mb-1">
                      Deposit
                    </span>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                        account_balance_wallet
                      </span>
                      {pg.deposit}
                    </div>
                  </div>
                  <div className="bg-surface-container-low rounded-lg p-3">
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block mb-1">
                      Rent Type
                    </span>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                        receipt_long
                      </span>
                      {pg.rentType}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold text-primary mb-4">Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pg.amenities.map((amenity) => (
                    <div
                      key={amenity.title}
                      className="bg-surface-container-lowest rounded-xl p-4 shadow-ambient flex items-start gap-3"
                    >
                      <div className="w-9 h-9 bg-secondary-container rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>
                          {amenity.icon}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bold text-primary text-sm mb-0.5">{amenity.title}</h3>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          {amenity.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold text-primary mb-4">Why We Are Different</h2>
                <div className="space-y-3">
                  {pg.whyDifferent.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 bg-surface-container-lowest rounded-xl p-4 shadow-ambient"
                    >
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-on-primary">
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bold text-primary text-sm mb-0.5">{item.title}</h3>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold text-primary mb-3">Location</h2>
                <div className="relative rounded-xl overflow-hidden shadow-ambient h-64">
                  <iframe
                    src={pg.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map for ${pg.name}`}
                  />
                  {/* Get Directions button */}
                  <a
                    href={pg.mapDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold shadow-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-base">directions</span>
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* ── Sticky Sidebar ────────────────────────────────────────── */}
            <div className="lg:col-span-1 mt-8 lg:mt-0">
              <div className="lg:sticky lg:top-24 space-y-4">

                <div className="bg-surface-container-lowest rounded-xl shadow-ambient-lg overflow-hidden">
                  <div className="bg-primary p-4">
                    <div className="text-on-primary-container text-xs uppercase tracking-widest font-bold mb-1">
                      Starting from
                    </div>
                    <div className="text-3xl font-black text-white mb-0.5">
                      {pg.pricePerMonth}
                    </div>
                    <div className="text-on-primary-container text-sm">per month &mdash; {pg.rentType}</div>
                  </div>

                  <div className="p-4 space-y-3">
                    <a
                      href={`tel:${contact.phone}`}
                      className="w-full py-2.5 rounded-lg font-bold text-sm border-2 border-surface-container-high text-primary flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                        call
                      </span>
                      {contact.phone}
                    </a>

                    <a
                      href={contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-lg font-bold text-sm bg-surface-container-low text-primary flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                        chat
                      </span>
                      WhatsApp Us
                    </a>
                  </div>
                </div>

                {pg.proximity.length > 0 && (
                  <div className="bg-surface-container-lowest rounded-xl shadow-ambient p-4">
                    <h3 className="text-sm font-bold text-primary mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                        near_me
                      </span>
                      Nearby Places
                    </h3>
                    <div className="space-y-2">
                      {pg.proximity.map((item) => (
                        <div
                          key={item.place}
                          className="flex items-center justify-between py-1.5 border-b border-surface-container-high last:border-0"
                        >
                          <span className="text-sm text-on-surface font-medium">{item.place}</span>
                          <span className="text-xs font-bold text-secondary bg-secondary-container px-2.5 py-1 rounded-full">
                            {item.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mobile Floating CTA Bar ───────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-surface-container-lowest border-t border-surface-container-high shadow-ambient-lg">
        <div className="flex items-stretch gap-0">
          <a
            href={`tel:${contact.phone}`}
            className="flex-1 py-3 flex items-center justify-center gap-2 font-bold text-primary hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
              call
            </span>
            Call Now
          </a>
          <div className="w-px bg-surface-container-high" />
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 bg-[#25D366] flex items-center justify-center gap-2 font-bold text-white hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
              chat
            </span>
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="h-20 lg:hidden" />
    </>
  );
}
