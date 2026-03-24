import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { hotels, contact } from '@/lib/data';
import RoomImageLightbox from '@/components/RoomImageLightbox';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return hotels.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hotel = hotels.find((h) => h.slug === slug);
  if (!hotel) return { title: 'Hotel Not Found' };
  return { title: hotel.name };
}

export default async function HotelDetailPage({ params }: Props) {
  const { slug } = await params;
  const hotel = hotels.find((h) => h.slug === slug);
  if (!hotel) notFound();

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[75vh] min-h-[500px] overflow-hidden">
        <Image
          src={hotel.heroImage}
          alt={hotel.heroAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-tertiary-fixed text-xs font-bold uppercase tracking-widest mb-2">
              {hotel.location}
            </p>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight leading-tight">
              {hotel.name}
            </h1>
            <p className="text-slate-300 max-w-xl leading-relaxed">{hotel.tagline}</p>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────────── */}
      <div className="bg-primary-container">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {hotel.stats.map((stat) => (
              <div
                key={stat.label}
                className="py-4 px-4 text-center border-r border-white/10 last:border-r-0 flex flex-col items-center gap-1"
              >
                <span className="material-symbols-outlined text-on-primary text-xl">
                  {stat.icon}
                </span>
                <span className="text-lg font-black text-on-primary">{stat.value}</span>
                <span className="text-xs text-on-primary-container uppercase tracking-widest font-bold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Description ──────────────────────────────────────────────────── */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-xl font-extrabold text-primary mb-3">About This Property</h2>
            <p className="text-on-surface-variant leading-relaxed">{hotel.description}</p>
          </div>
        </div>
      </section>

      {/* ── Rooms ────────────────────────────────────────────────────────── */}
      <section className="py-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-primary tracking-tight mb-2">
              Rooms &amp; Suites
            </h2>
            <p className="text-secondary">
              Select the room that perfectly suits your stay.
            </p>
          </div>

          <RoomImageLightbox rooms={hotel.rooms} bookingUrl={hotel.bookingUrl} />
        </div>
      </section>

      {/* ── Amenities ────────────────────────────────────────────────────── */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-primary tracking-tight mb-2">
              Hotel Amenities
            </h2>
            <p className="text-secondary">
              Everything you need for a seamless, comfortable stay.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {hotel.amenities.map((amenity) => (
              <div
                key={amenity.label}
                className="bg-surface-container-lowest rounded-xl p-4 flex flex-col items-center text-center shadow-ambient hover:shadow-ambient-lg transition-all"
              >
                <div className="w-10 h-10 bg-secondary-container rounded-full flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-primary">{amenity.icon}</span>
                </div>
                <span className="text-xs font-semibold text-primary leading-tight">
                  {amenity.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location & Proximity ─────────────────────────────────────────── */}
      <section className="py-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-primary tracking-tight mb-2">
              Location &amp; Proximity
            </h2>
            <p className="text-secondary">
              Perfectly positioned near Hyderabad&apos;s key business and leisure landmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="relative rounded-xl overflow-hidden shadow-ambient-lg">
              <iframe
                src={hotel.mapEmbed}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map showing location of ${hotel.name}`}
              />
              {/* Get Directions button */}
              <a
                href={hotel.mapDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold shadow-lg hover:bg-primary hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-base">directions</span>
                Get Directions
              </a>
            </div>

            <div className="bg-surface-container-lowest rounded-xl shadow-ambient overflow-hidden">
              <div className="px-4 py-3 border-b border-surface-container-high">
                <h3 className="text-base font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined">near_me</span>
                  Nearby Landmarks
                </h3>
              </div>
              <div className="grid grid-cols-2 divide-x divide-surface-container-high">
                {hotel.proximity.map((item, idx) => (
                  <div
                    key={item.place}
                    className={`px-4 py-3 ${idx + 2 <= hotel.proximity.length ? 'border-b border-surface-container-high' : ''}`}
                  >
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="material-symbols-outlined text-secondary text-sm">
                        location_on
                      </span>
                      <span className="font-semibold text-primary text-sm">{item.place}</span>
                    </div>
                    <span className="text-on-surface-variant text-xs ml-5">{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Booking CTA ──────────────────────────────────────────────────── */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="material-symbols-outlined text-tertiary-fixed text-3xl block mb-4">
              hotel
            </span>
            <h2 className="text-3xl font-black text-white mb-3 tracking-tight">
              Book Your Stay at {hotel.name}
            </h2>
            <p className="text-on-primary-container mb-6">
              Reach out to our reservations team for the best available rates, group bookings,
              and bespoke extended-stay packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={hotel.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tertiary-fixed text-on-tertiary-fixed font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">hotel</span>
                Book This Hotel
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
                {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
