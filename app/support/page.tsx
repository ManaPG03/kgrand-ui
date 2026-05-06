import Image from 'next/image';
import Link from 'next/link';
import { pgs, hotels, contact } from '@/lib/data';

// ── Page ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    question: 'How do I schedule a site visit?',
    answer:
      'Call our support line or use the Enquire Now form on our website. Our team will confirm a convenient time and arrange a guided tour of your preferred property within 24 hours.',
  },
  {
    question: 'What is included in the monthly rent?',
    answer:
      'All our PGs are fully inclusive - meals (breakfast and dinner), WiFi, housekeeping, power backup, water, and access to all common amenities. There are no hidden charges.',
  },
  {
    question: 'What is the notice period to vacate?',
    answer:
      'We require 30 days written notice before vacating. You can submit a notice through our community app, by email, or by speaking to your on-site manager directly.',
  },
  {
    question: 'How do I raise a maintenance request?',
    answer:
      'Use our community app or call our support line directly. Requests are triaged by our on-site manager and addressed within 24 hours for standard issues, or same-day for urgent matters.',
  },
];

export default function SupportPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[870px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={pgs[2].heroImage}
            alt="Kgrand support"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 max-w-7xl min-[1920px]:max-w-[80%] mx-auto px-4 w-full pt-16">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold text-xs tracking-wider uppercase mb-4">
              We&apos;re Here to Help
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-4">
              Support Hub
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-light mb-6">
              Get help with maintenance, billing, or anything else. Our team is available
              seven days a week to ensure your Kgrand experience is always exceptional.
            </p>
          </div>
        </div>
      </section>

      {/* ── Property Support Cards ────────────────────────────────────────── */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl min-[1920px]:max-w-[80%] mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-primary mb-2 tracking-tight">
              Property Support
            </h2>
            <p className="text-secondary max-w-xl">
              Need help with a specific property? Contact the team directly or raise a
              support ticket below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pgs.map((pg) => (
              <div
                key={pg.slug}
                className="bg-surface-container-lowest rounded-2xl p-4 shadow-ambient hover:shadow-ambient-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 bg-secondary-container rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">apartment</span>
                  </div>
                  <div>
                    <span className="inline-block px-2 py-1 bg-primary-container text-white text-[10px] font-bold rounded uppercase tracking-wider mb-1.5">
                      PG Residence
                    </span>
                    <h3 className="font-bold text-primary text-sm leading-tight mt-1">{pg.name}</h3>
                    <p className="text-on-surface-variant text-xs mt-2 flex items-center gap-1 -ml-1">
                      <span className="material-symbols-outlined text-xs">location_on</span>
                      {pg.location}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link
                    href="/enquire"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-surface-container-high text-primary text-xs font-bold py-2 rounded-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">call</span>
                    Contact
                  </Link>
                  <a
                    href={`https://wa.me/919703890611?text=${encodeURIComponent(`Hi Kgrand, I need support for ${pg.name}. Issue: `)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-green-600 text-white text-xs font-bold py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">chat</span>
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}

            {hotels.map((hotel) => (
              <div
                key={hotel.slug}
                className="bg-surface-container-lowest rounded-2xl p-4 shadow-ambient hover:shadow-ambient-lg transition-all"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-tertiary-fixed rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-on-tertiary-fixed">hotel</span>
                  </div>
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold rounded uppercase tracking-wider mb-1">
                      Hotel
                    </span>
                    <h3 className="font-bold text-primary py-2 text-sm leading-tight">{hotel.name}</h3>
                    <p className="text-on-surface-variant text-xs mt-1 -ml-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">location_on</span>
                      {hotel.location}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link
                    href="/enquire"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-surface-container-high text-primary text-xs font-bold py-2 rounded-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">call</span>
                    Contact
                  </Link>
                  <a
                    href={`https://wa.me/919703890611?text=${encodeURIComponent(`Hi Kgrand, I need support for ${hotel.name}. Issue: `)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-green-600 text-white text-xs font-bold py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">chat</span>
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Get in Touch CTA ──────────────────────────────────────────────── */}
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-7xl min-[1920px]:max-w-[80%] mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3 tracking-tight">
              Get in Touch Instantly
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Skip the forms. Reach us directly through your preferred channel and get a response within minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* WhatsApp */}
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-green-600 rounded-2xl p-8 text-center text-white shadow-ambient-lg hover:shadow-2xl hover:scale-[1.03] transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">chat</span>
                </div>
                <h3 className="text-xl font-extrabold mb-2">WhatsApp</h3>
                <p className="text-white/80 text-sm mb-4">
                  Chat with us now. Fastest way to get help.
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-bold bg-white/20 px-4 py-2 rounded-full group-hover:bg-white/30 transition-colors">
                  Open Chat
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </a>

            {/* Call */}
            <a
              href={`tel:${contact.phone}`}
              className="group relative bg-primary rounded-2xl p-8 text-center text-white shadow-ambient-lg hover:shadow-2xl hover:scale-[1.03] transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">call</span>
                </div>
                <h3 className="text-xl font-extrabold mb-2">Call Us</h3>
                <p className="text-white/80 text-sm mb-4">
                  Speak to our team directly. Available 7 days a week.
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-bold bg-white/20 px-4 py-2 rounded-full group-hover:bg-white/30 transition-colors">
                  {contact.phone}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent('Support Request - Kgrand')}`}
              className="group relative bg-surface-container-lowest border-2 border-primary/10 rounded-2xl p-8 text-center shadow-ambient-lg hover:shadow-2xl hover:scale-[1.03] hover:border-primary/30 transition-all overflow-hidden"
            >
              <div className="relative">
                <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl text-primary">mail</span>
                </div>
                <h3 className="text-xl font-extrabold text-primary mb-2">Email</h3>
                <p className="text-on-surface-variant text-sm mb-4">
                  Prefer email? We reply within a few hours.
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-bold bg-primary-container text-on-primary-container px-4 py-2 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Send Email
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion ────────────────────────────────────────────────────── */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl min-[1920px]:max-w-[80%] mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-primary mb-2 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-secondary">
                Quick answers to the questions we hear most often.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-surface-container-lowest rounded-2xl shadow-ambient overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none select-none">
                    <span className="text-sm font-bold text-primary">{faq.question}</span>
                    <span
                      className="faq-icon transition-transform flex-shrink-0 w-7 h-7 bg-surface-container-high rounded-full flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="material-symbols-outlined text-primary text-sm">
                        expand_more
                      </span>
                    </span>
                  </summary>
                  <div className="px-6 pb-4">
                    <p className="text-on-surface-variant text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder Escalation ───────────────────────────────────────────────── */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl min-[1920px]:max-w-[80%] mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-white text-2xl">escalator_warning</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-3 tracking-tight">
              Still Unresolved?
            </h2>
            <p className="text-on-primary-container mb-6">
              If your issue hasn&apos;t been resolved to your satisfaction, you can contact
              our founder Kotla Karthik directly. We take every concern seriously.
            </p>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-6 text-left backdrop-blur-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-tertiary-fixed flex items-center justify-center font-black text-on-tertiary-fixed text-xl flex-shrink-0">
                  K
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Kotla Karthik</p>
                  <p className="text-on-primary-container text-sm">Founder &amp; CEO, Kgrand</p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                &ldquo;Every Kgrand resident deserves an exceptional experience. If something
                has fallen short of that standard, I want to know about it personally and
                ensure it is resolved promptly and completely.&rdquo;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`mailto:${contact.email}`}
                className="bg-tertiary-fixed text-on-tertiary-fixed font-bold px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined">mail</span>
                Email Directly
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white border border-white/20 font-bold px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
              >
                <span className="material-symbols-outlined">chat</span>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
