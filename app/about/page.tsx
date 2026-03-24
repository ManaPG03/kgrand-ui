import Image from 'next/image';
import Link from 'next/link';
import { pgs, companyStats, contact } from '@/lib/data';

export const metadata = { title: 'About Us' };

export default function AboutPage() {
  const heroImages = [
    pgs[0].heroImage,
    pgs[1].heroImage,
    pgs[2].heroImage,
  ];

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[870px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={pgs[0].heroImage}
            alt="Kgrand premium living spaces"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pt-16">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold text-xs tracking-wider uppercase mb-4">
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-4">
              The Kgrand Journey
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-light">
              Founded by Kotla Karthik, Kgrand was born from a simple belief — that every
              professional deserves a home that inspires them. From a single managed PG in
              Hitech City to a growing portfolio of premium residences across Hyderabad.
            </p>
          </div>
        </div>
      </section>

      {/* ── Origin Story ──────────────────────────────────────────────────── */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-primary mb-4 tracking-tight">
                How It All Began
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                In 2018, Kotla Karthik was a young professional navigating the chaos of
                finding reliable accommodation in Hyderabad&apos;s rapidly expanding tech
                corridor. Frustrated by the gap between what was available and what
                professionals truly needed, he set out to build something different.
              </p>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                The first Kgrand property opened in Hitech City with just 20 beds. Word
                spread quickly. Residents didn&apos;t just rent a room — they joined a
                community with chef-prepared meals, round-the-clock support, and a
                management team that genuinely cared about their comfort.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Today, Kgrand manages 5 premium properties spanning PG residences and
                boutique hotels, having served over 1,200 residents who trusted us with
                one of life&apos;s most important decisions — where to call home.
              </p>
            </div>

            {/* Quote Card */}
            <div className="bg-primary rounded-2xl p-6 shadow-ambient-lg">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-white text-2xl">format_quote</span>
              </div>
              <blockquote className="text-lg font-medium text-white leading-relaxed mb-6">
                &ldquo;I didn&apos;t just want to build PGs. I wanted to build places where
                people could thrive — where coming home after a long day felt like a reward,
                not an afterthought.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center font-black text-on-tertiary-fixed text-lg">
                  K
                </div>
                <div>
                  <p className="text-white font-bold">Kotla Karthik</p>
                  <p className="text-on-primary-container text-sm">Founder &amp; CEO, Kgrand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values Bento Grid ─────────────────────────────────────────────── */}
      <section className="py-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-primary mb-2 tracking-tight">
              What We Stand For
            </h2>
            <p className="text-secondary max-w-xl mx-auto">
              Three values guide every decision we make at Kgrand — from property design
              to resident support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-ambient">
              <div className="w-10 h-10 bg-secondary-container rounded-xl flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary text-xl">workspace_premium</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Quality</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                We never cut corners. From the mattresses we choose to the food our chefs
                prepare, every detail meets a premium standard because our residents
                deserve nothing less.
              </p>
            </div>

            <div className="bg-primary rounded-2xl p-6 shadow-ambient-lg">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-white text-xl">security</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Safety</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Biometric entry, 24/7 CCTV, professional on-site guards, and a dedicated
                manager ensure that every resident feels secure — day and night.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-ambient">
              <div className="w-10 h-10 bg-tertiary-fixed rounded-xl flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-on-tertiary-fixed text-xl">groups</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Community</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Great living is about the people around you. Our community events,
                digital platform, and common spaces are designed to foster genuine
                friendships and professional networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder Section ───────────────────────────────────────────────── */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-container rounded-2xl p-6 md:p-8 shadow-ambient-lg">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-black text-white">K</span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-black text-primary">Kotla Karthik</h3>
                      <p className="text-secondary font-semibold text-sm">Founder &amp; CEO</p>
                    </div>
                    <div className="sm:ml-auto">
                      <span className="inline-block px-3 py-1 bg-primary text-on-primary text-xs font-bold rounded-full uppercase tracking-wider">
                        Visionary Leader
                      </span>
                    </div>
                  </div>

                  <p className="text-on-surface-variant leading-relaxed mb-4">
                    Kotla Karthik founded Kgrand with a clear vision: to make premium
                    co-living accessible to every professional in Hyderabad&apos;s booming
                    tech ecosystem. With a background in hospitality management and a deep
                    understanding of what modern professionals need, Karthik built Kgrand
                    from the ground up — personally overseeing every property launch and
                    resident experience initiative.
                  </p>
                  <p className="text-on-surface-variant leading-relaxed mb-6">
                    His philosophy is straightforward: a well-rested, well-fed professional
                    is a more productive and happier one. Every feature of every Kgrand
                    property reflects that belief.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/enquire"
                      className="cta-gradient text-white px-5 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
                    >
                      Get in Touch
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                    <a
                      href={contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-surface-container-high text-primary px-5 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-primary hover:text-white transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">chat</span>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────────────────── */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {companyStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs text-on-primary-container uppercase tracking-widest font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Life at Kgrand Imagery ─────────────────────────────────────────── */}
      <section className="py-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-primary mb-2 tracking-tight">
              Life at Kgrand
            </h2>
            <p className="text-secondary max-w-xl mx-auto">
              Spaces designed for comfort, productivity, and genuine community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {heroImages.map((src, idx) => (
              <div
                key={idx}
                className="relative h-56 rounded-2xl overflow-hidden shadow-ambient group"
              >
                <Image
                  src={src}
                  alt={`Life at Kgrand — property ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/pgs"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Explore Our Properties
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
