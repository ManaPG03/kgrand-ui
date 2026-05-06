import Image from 'next/image';
import Link from 'next/link';
import { pgs, contact } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our PG Residences',
  description:
    'Explore KGrand premium co-living PG residences across Hyderabad\'s IT corridor - Hitech City, Gachibowli, and Kondapur.',
};

const commonAmenities = [
  { icon: 'restaurant', title: 'Chef-Curated Meals', description: 'Nutritious breakfast and dinner prepared fresh daily by professional chefs.' },
  { icon: 'wifi', title: 'High-Speed WiFi', description: 'Enterprise-grade fiber internet across all floors for seamless remote work.' },
  { icon: 'security', title: '24/7 Security', description: 'Round-the-clock CCTV surveillance and biometric entry at all access points.' },
  { icon: 'local_laundry_service', title: 'Laundry Service', description: 'Professional laundry pick-up and delivery included in your monthly rent.' },
  { icon: 'cleaning_services', title: 'Daily Housekeeping', description: 'Your room is cleaned and sanitized every single day by trained staff.' },
  { icon: 'fitness_center', title: 'Fitness Access', description: 'Access to fitness facilities to keep your health and wellness on track.' },
];

export default function PGsPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative h-[870px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={pgs[1].heroImage}
            alt={pgs[1].heroAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 max-w-7xl min-[1920px]:max-w-[80%] mx-auto px-4 w-full pt-16">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold text-xs tracking-wider uppercase mb-4">
              Co-Living in Hyderabad
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-4">
              Our PG Residences
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-light">
              Premium co-living spaces across Hyderabad&apos;s IT corridor - Hitech City,
              Gachibowli, and Kondapur.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ───────────────────────────────────────────────────────── */}
      <div className="bg-primary-container">
        <div className="max-w-7xl min-[1920px]:max-w-[80%] mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '3', label: 'Properties' },
              { value: '1200+', label: 'Residents' },
              { value: '98%', label: 'Renewal Rate' },
              { value: '4.9/5', label: 'Rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black text-on-primary">{stat.value}</div>
                <div className="text-xs text-on-primary-container uppercase tracking-widest font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PG Cards Grid ───────────────────────────────────────────────────── */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl min-[1920px]:max-w-[80%] mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-primary mb-8 tracking-tight">
            Choose Your Residence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pgs.map((pg) => (
              <Link
                key={pg.slug}
                href={`/pgs/${pg.slug}`}
                className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient hover:shadow-ambient-lg transition-all flex flex-col"
              >
                <div className="relative h-52 flex-shrink-0">
                  <Image
                    src={pg.heroImage}
                    alt={pg.heroAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        pg.badgeVariant === 'primary'
                          ? 'bg-primary text-on-primary'
                          : pg.badgeVariant === 'secondary'
                          ? 'bg-secondary-container text-on-secondary-container'
                          : 'bg-tertiary-fixed text-on-tertiary-fixed'
                      }`}
                    >
                      {pg.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    <span
                      className="material-symbols-outlined text-yellow-400"
                      style={{ fontSize: '14px', fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="text-white text-xs font-bold">{pg.rating}</span>
                    <span className="text-white/70 text-xs">({pg.reviewCount})</span>
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-primary mb-1">{pg.name}</h3>
                  <div className="flex items-center gap-1.5 text-on-surface-variant text-sm mb-3">
                    <span className="material-symbols-outlined text-sm" style={{ fontSize: '16px' }}>
                      location_on
                    </span>
                    {pg.location}
                  </div>

                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-surface-container-high mb-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block">
                        Space
                      </span>
                      <span className="text-primary font-medium text-sm">{pg.roomSize}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block">
                        Sharing
                      </span>
                      <span className="text-primary font-medium text-sm">{pg.sharing}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block">
                        Deposit
                      </span>
                      <span className="text-primary font-medium text-sm">{pg.deposit}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block">
                        Rent Type
                      </span>
                      <span className="text-primary font-medium text-sm">{pg.rentType}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-[10px] text-on-surface-variant uppercase font-bold block">
                        Starting at
                      </span>
                      <span className="text-lg font-black text-primary">
                        {pg.pricePerMonth}
                        <span className="text-sm font-normal text-on-surface-variant">/mo</span>
                      </span>
                    </div>
                    <span className="bg-surface-container-high text-primary px-4 py-2 rounded-lg text-sm font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Amenities Showcase ──────────────────────────────────────────────── */}
      <section className="py-12 bg-surface-container-low">
        <div className="max-w-7xl min-[1920px]:max-w-[80%] mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-primary mb-2 tracking-tight">
              Every Residence Includes
            </h2>
            <p className="text-secondary max-w-xl mx-auto">
              All KGrand properties come with a core set of premium amenities - included in your monthly rent, no surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonAmenities.map((amenity) => (
              <div
                key={amenity.title}
                className="bg-surface-container-lowest p-4 rounded-xl shadow-ambient flex items-start gap-3"
              >
                <div className="w-10 h-10 bg-secondary-container rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">{amenity.icon}</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary mb-1">{amenity.title}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ───────────────────────────────────────────────────────── */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl min-[1920px]:max-w-[80%] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-black text-white mb-2">Ready to Move In?</h2>
              <p className="text-on-primary-container">
                Reach out today and we&apos;ll find the perfect room for you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href={`tel:${contact.phone}`}
                className="cta-gradient border border-white/20 text-white px-6 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined">call</span>
                {contact.phone}
              </a>
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
