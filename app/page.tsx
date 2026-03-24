import Image from 'next/image';
import Link from 'next/link';
import { pgs, hotels, companyStats, contact } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[870px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={pgs[0].heroImage}
            alt="Warm luxury PG room interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pt-16">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold text-xs tracking-wider uppercase mb-4">
              Luxury Living in Hyderabad
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-4">
              Your Perfect Stay in{' '}
              <span className="text-secondary-fixed-dim">Hyderabad</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-6 leading-relaxed font-light">
              Discover a curated haven that blends the warmth of home with the professional
              management of a luxury residence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/pgs"
                className="cta-gradient text-white px-6 py-3 rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-2xl hover:opacity-90 transition-opacity"
              >
                Explore Our Properties
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <a
                href={`tel:${contact.phone}`}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
              >
                <span className="material-symbols-outlined">call</span>
                Call Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────────────────── */}
      <div className="bg-primary-container">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {companyStats.map((stat) => (
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

      {/* ── PG Collection ─────────────────────────────────────────────────── */}
      <section className="py-10 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-primary mb-2 tracking-tight">
                Our PG Residences
              </h2>
              <p className="text-secondary max-w-xl">
                Premium co-living spaces designed for the modern professional, offering
                comfort, community, and chef-curated meals.
              </p>
            </div>
            <Link
              href="/pgs"
              className="text-primary font-bold flex items-center gap-2 group border-b-2 border-transparent hover:border-primary pb-1 transition-all whitespace-nowrap"
            >
              View All PG Residences
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                trending_flat
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pgs.map((pg) => (
              <Link
                key={pg.slug}
                href={`/pgs/${pg.slug}`}
                className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient hover:shadow-ambient-lg transition-all block"
              >
                <div className="relative h-52">
                  <Image
                    src={pg.heroImage}
                    alt={pg.heroAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase">
                    {pg.badge}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-primary mb-1">{pg.name}</h3>
                  <div className="flex items-center gap-1.5 text-on-surface-variant text-sm mb-3">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    {pg.location}
                  </div>
                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-surface-container-high mb-4">
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
                  </div>
                  <div className="flex items-center justify-between">
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

      {/* ── Why Kgrand Bento ──────────────────────────────────────────────── */}
      <section className="py-10 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4 self-center">
              <h2 className="text-3xl font-extrabold text-primary mb-4 leading-tight">
                Professional Living Made Simple
              </h2>
              <p className="text-secondary mb-6">
                We focus on the essentials so you can focus on your goals. No hassle, just
                professional management.
              </p>
              <ul className="space-y-3">
                {['24/7 Concierge Support', 'Biometric Secure Access'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-primary font-semibold">
                    <span
                      className="material-symbols-outlined text-secondary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: 'restaurant',
                  title: 'Home-Style Meals',
                  desc: 'Delicious, nutritious, and diverse menu curated by professional chefs. Fresh ingredients served thrice a day.',
                },
                {
                  icon: 'wifi',
                  title: 'High-Speed Connectivity',
                  desc: 'Redundant enterprise-grade Wi-Fi across all floors. Perfect for remote work and entertainment.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col items-start"
                >
                  <div className="w-10 h-10 bg-secondary-container rounded-lg flex items-center justify-center mb-4 text-primary">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
              <div className="md:col-span-2 bg-primary p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1 text-white">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-white">corporate_fare</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Professional Management</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Our residences are managed by hospitality experts ensuring rigorous cleaning
                    protocols, quick maintenance, and a transparent billing experience.
                  </p>
                </div>
                <div className="w-full md:w-48 h-36 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                  <div className="text-center p-4">
                    <span className="text-4xl font-black text-white block mb-1">98%</span>
                    <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                      Resident Satisfaction
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hotel Collection ──────────────────────────────────────────────── */}
      <section className="py-10 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-3">
            <h2 className="text-3xl font-extrabold text-primary tracking-tight">
              Our Hotel Collection
            </h2>
            <p className="text-secondary text-right max-w-sm hidden md:block text-sm">
              Short stays, long memories. Professional hospitality for business and leisure
              travellers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.slug}
                className="group relative rounded-2xl overflow-hidden shadow-ambient hover:shadow-ambient-lg transition-all"
              >
                <div className="relative h-64">
                  <Image
                    src={hotel.heroImage}
                    alt={hotel.heroAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{hotel.name}</h3>
                  <p className="text-slate-200 text-sm mb-3">{hotel.tagline}</p>
                  <Link
                    href={`/hotels/${hotel.slug}`}
                    className="bg-white text-primary px-5 py-2.5 rounded-lg font-bold text-sm hover:shadow-xl transition-all inline-flex items-center gap-2"
                  >
                    View Details
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/hotels"
              className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-transparent hover:border-primary pb-1 transition-all"
            >
              View All Hotels
              <span className="material-symbols-outlined">trending_flat</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Community Hub ─────────────────────────────────────────────────── */}
      <section className="py-10 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-tertiary-fixed rounded-full blur-3xl opacity-20" />
              <div className="grid grid-cols-2 gap-3">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80"
                  alt="Community event"
                  width={240}
                  height={300}
                  className="rounded-xl shadow-lg mt-6 w-full h-44 object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80"
                  alt="Young professionals in a lounge"
                  width={240}
                  height={300}
                  className="rounded-xl shadow-lg w-full h-44 object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-primary mb-4 tracking-tight">
                Not Just a Room, But a Community
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: 'groups',
                    title: 'Organized Events',
                    desc: 'From weekend movie nights to professional workshops, our community managers keep the vibe alive.',
                  },
                  {
                    icon: 'forum',
                    title: 'Digital Socializing',
                    desc: 'Access our exclusive app to connect with housemates, pay bills, and request maintenance instantly.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="shrink-0 w-10 h-10 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-ambient">
                      <span className="material-symbols-outlined text-primary">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-on-surface-variant text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/community"
                className="mt-8 inline-flex items-center gap-2 text-primary font-bold border-2 border-primary/10 px-6 py-2.5 rounded-lg hover:bg-primary hover:text-white transition-all"
              >
                Explore Community
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────────── */}
      <section className="py-10 bg-primary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-3">
            Ready to Find Your Perfect Space?
          </h2>
          <p className="text-on-primary-container mb-6 max-w-xl mx-auto">
            Get in touch today and we&apos;ll help you find the ideal PG or hotel that fits your
            needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`mailto:${contact.email}`}
              className="bg-tertiary-fixed text-on-tertiary-fixed font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              Email Us
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-white border border-white/20 font-bold px-6 py-3 rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">chat</span>
              WhatsApp Us
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="bg-white/10 text-white border border-white/20 font-bold px-6 py-3 rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">call</span>
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
