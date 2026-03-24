import Image from 'next/image';
import Link from 'next/link';
import { pgs } from '@/lib/data';

export const metadata = { title: 'Community' };

const events = [
  {
    title: 'Monthly Mixer Night',
    date: 'Every Last Friday',
    icon: 'celebration',
    description:
      'Unwind with your neighbors over great music, snacks, and good conversation. Our most popular monthly gathering where residents from all Kgrand properties come together.',
    color: 'bg-tertiary-fixed text-on-tertiary-fixed',
  },
  {
    title: 'Professional Networking Breakfast',
    date: 'Second Saturday of Each Month',
    icon: 'work',
    description:
      'Start your weekend with purpose. Connect with fellow professionals across tech, finance, and design over a curated breakfast - facilitated by our community managers.',
    color: 'bg-secondary-container text-on-secondary-container',
  },
  {
    title: 'Weekend Movie Night',
    date: 'Every Sunday Evening',
    icon: 'movie',
    description:
      'Catch the latest releases or a community-voted classic on our big screen. Popcorn, cozy seating, and great company included every Sunday evening.',
    color: 'bg-primary-container text-on-primary-container',
  },
];

const news = [
  {
    title: 'New Fitness Center Opening at Kgrand Luxury Co-Live',
    date: 'March 15, 2026',
    icon: 'fitness_center',
    excerpt:
      'We are excited to announce the opening of a fully equipped fitness center at our flagship Hitech City property, available to all Kgrand residents 24/7.',
  },
  {
    title: 'Kgrand Community App - Now Live',
    date: 'February 28, 2026',
    icon: 'smartphone',
    excerpt:
      'Our all-new resident app is here. Pay rent, raise maintenance tickets, RSVP to events, and connect with your community - all from one place.',
  },
  {
    title: 'Chef Spotlight: Meet Our Head Chef Ramesh',
    date: 'February 10, 2026',
    icon: 'restaurant',
    excerpt:
      'This month we shine the light on Chef Ramesh Babu, who has been crafting our resident meals since day one. Get to know the person behind the food you love.',
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[870px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80"
            alt="Kgrand community residents gathering"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 max-w-7xl min-[1920px]:max-w-[80%] mx-auto px-4 w-full pt-16">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold text-xs tracking-wider uppercase mb-4">
              Events &amp; News
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-4">
              Community Hub
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-light">
              At Kgrand, we believe great living is about more than a room. It&apos;s about
              the people around you, the events that bring you together, and the moments
              that turn neighbours into friends. This is your community.
            </p>
          </div>
        </div>
      </section>

      {/* ── Events Section ───────────────────────────────────────────────── */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl min-[1920px]:max-w-[80%] mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-primary mb-2 tracking-tight">
                Upcoming Events
              </h2>
              <p className="text-secondary max-w-xl">
                Community-curated events designed to connect, inspire, and entertain
                residents across all Kgrand properties.
              </p>
            </div>
            <Link
              href="/enquire"
              className="text-primary font-bold flex items-center gap-2 group border-b-2 border-transparent hover:border-primary pb-1 transition-all whitespace-nowrap"
            >
              Become a Resident
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                trending_flat
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {events.map((event) => (
              <div
                key={event.title}
                className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-ambient hover:shadow-ambient-lg transition-all flex flex-col"
              >
                <div className={`${event.color} p-4`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">{event.icon}</span>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-70">
                      {event.date}
                    </p>
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-primary mb-2">{event.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed flex-1">
                    {event.description}
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/enquire"
                      className="w-full flex items-center justify-center gap-2 bg-surface-container-high text-primary px-4 py-2.5 rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">how_to_reg</span>
                      Join Event
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kgrand News ──────────────────────────────────────────────────── */}
      <section className="py-12 bg-surface-container-low">
        <div className="max-w-7xl min-[1920px]:max-w-[80%] mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-primary mb-2 tracking-tight">
              Kgrand News
            </h2>
            <p className="text-secondary max-w-xl">
              Stay up to date with the latest announcements, improvements, and stories
              from across the Kgrand community.
            </p>
          </div>

          <div className="space-y-4">
            {news.map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-lowest rounded-2xl p-4 shadow-ambient flex flex-col sm:flex-row gap-4 items-start hover:shadow-ambient-lg transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-secondary-container rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mb-1">
                    {item.date}
                  </p>
                  <h3 className="text-base font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.excerpt}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="material-symbols-outlined text-on-surface-variant">
                    chevron_right
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder Note ─────────────────────────────────────────────────── */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl min-[1920px]:max-w-[80%] mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-white text-2xl">format_quote</span>
            </div>

            <blockquote className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-6">
              &ldquo;The strongest thing we&apos;ve built at Kgrand isn&apos;t the
              buildings - it&apos;s the relationships formed inside them. Community isn&apos;t
              a feature. It&apos;s the whole point.&rdquo;
            </blockquote>

            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center font-black text-on-tertiary-fixed text-lg">
                K
              </div>
              <div className="text-left">
                <p className="text-white font-bold">Kotla Karthik</p>
                <p className="text-on-primary-container text-sm">Founder &amp; CEO, Kgrand</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/enquire"
                className="bg-tertiary-fixed text-on-tertiary-fixed font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Join Our Community
              </Link>
              <Link
                href="/about"
                className="bg-white/10 text-white border border-white/20 font-bold px-6 py-3 rounded-full hover:bg-white/20 transition-all"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
