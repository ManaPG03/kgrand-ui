import Image from 'next/image';
import Link from 'next/link';
import { hotels, contact } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Our Hotels' };

export default function HotelsPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative h-[870px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={hotels[0].heroImage}
            alt={hotels[0].heroAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pt-16">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold text-xs tracking-wider uppercase mb-4">
              Kgrand Hotel Collection
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-4">
              Our Hotel Collection
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-light">
              Premium short stays for business and leisure travellers. Curated comfort,
              seamless connectivity, and world-class hospitality in Hyderabad&apos;s most
              sought-after business districts.
            </p>
          </div>
        </div>
      </section>

      {/* ── Elite Guest Program ─────────────────────────────────────────── */}
      <section className="py-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-bold text-xs tracking-wider uppercase mb-3">
              Exclusive Programme
            </span>
            <h2 className="text-3xl font-extrabold text-primary mb-2 tracking-tight">
              The Kgrand Elite Guest Program
            </h2>
            <p className="text-secondary max-w-xl mx-auto">
              Returning guests and long-stay visitors unlock a world of exclusive privileges
              designed for discerning travellers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: 'schedule',
                title: 'Early Check-In',
                description:
                  'Arrive on your schedule. Elite guests enjoy guaranteed early check-in from 8 AM, subject to availability.',
              },
              {
                icon: 'free_breakfast',
                title: 'Complimentary Breakfast',
                description:
                  'Start every morning right. Enjoy a curated continental breakfast spread included with your stay.',
              },
              {
                icon: 'bookmark_added',
                title: 'Priority Booking',
                description:
                  'Never miss out. Elite members get first access to room bookings during peak season and special events.',
              },
              {
                icon: 'spa',
                title: 'Spa & Wellness Credits',
                description:
                  'Unwind with complimentary wellness credits redeemable at our in-house spa and fitness facilities.',
              },
              {
                icon: 'local_parking',
                title: 'Complimentary Valet',
                description:
                  'Arrive in style. Valet parking is on the house for all Elite Program members.',
              },
              {
                icon: 'support_agent',
                title: 'Dedicated Concierge',
                description:
                  'Your personal concierge handles everything - from restaurant reservations to airport transfers.',
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient hover:shadow-ambient-lg transition-all"
              >
                <div className="w-10 h-10 bg-secondary-container rounded-lg flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outlined">{benefit.icon}</span>
                </div>
                <h3 className="text-base font-bold text-primary mb-1">{benefit.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/enquire"
              className="cta-gradient text-white px-6 py-3 rounded-full font-bold text-sm inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-ambient-lg"
            >
              Join the Elite Program
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Hotel Cards Grid ─────────────────────────────────────────────── */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-primary tracking-tight mb-2">
              Choose Your Property
            </h2>
            <p className="text-secondary max-w-xl mx-auto">
              Two distinct addresses, each offering an elevated experience tailored to the
              modern business and leisure traveller.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {hotels.map((hotel) => (
              <Link
                key={hotel.slug}
                href={`/hotels/${hotel.slug}`}
                className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-ambient hover:shadow-ambient-lg transition-all block"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={hotel.heroImage}
                    alt={hotel.heroAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-tertiary-fixed text-xs font-bold uppercase tracking-widest mb-1">
                          {hotel.location}
                        </p>
                        <h3 className="text-xl md:text-2xl font-black text-white mb-1 leading-tight">
                          {hotel.name}
                        </h3>
                        <p className="text-slate-300 text-sm max-w-xs">
                          {hotel.tagline}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-xs text-slate-400 block">from</span>
                        <span className="text-xl font-black text-white">
                          {hotel.pricePerNight}
                        </span>
                        <span className="text-slate-300 text-xs block">/night</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 border-b border-surface-container-high">
                  {hotel.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="py-3 px-2 text-center border-r border-surface-container-high last:border-r-0"
                    >
                      <span className="material-symbols-outlined text-secondary text-sm block mb-0.5">
                        {stat.icon}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold block leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.map((amenity) => (
                      <span
                        key={amenity.label}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-xs font-medium"
                      >
                        <span className="material-symbols-outlined text-xs">{amenity.icon}</span>
                        {amenity.label}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-on-surface-variant text-sm">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      {hotel.location}
                    </div>
                    <span className="cta-gradient text-white px-5 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 group-hover:opacity-90 transition-opacity w-full sm:w-auto">
                      View Details
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="material-symbols-outlined text-tertiary-fixed text-3xl mb-4 block">
              hotel
            </span>
            <h2 className="text-3xl font-black text-white mb-3 tracking-tight">
              Ready to Book Your Stay?
            </h2>
            <p className="text-on-primary-container mb-6">
              Contact our reservations team for personalised rates, group bookings, and extended
              stay packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/enquire"
                className="bg-tertiary-fixed text-on-tertiary-fixed font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Book a Stay
              </Link>
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
                {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
