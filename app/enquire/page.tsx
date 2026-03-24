import Link from 'next/link';
import { pgs, contact } from '@/lib/data';

// ── Page ─────────────────────────────────────────────────────────────────────

export default function EnquirePage() {
  return (
    <>
      {/* ── Reach Us CTA ──────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-surface">
        <div className="max-w-7xl min-[1920px]:max-w-[80%] mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3 tracking-tight">
              Let&apos;s Get You Started
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Pick your preferred way to connect. Our team typically responds within minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {/* WhatsApp */}
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-green-600 rounded-2xl p-8 text-center text-white shadow-ambient-lg hover:shadow-2xl hover:scale-[1.03] transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">chat</span>
                </div>
                <h3 className="text-xl font-extrabold mb-2">WhatsApp</h3>
                <p className="text-white/80 text-sm mb-4">
                  Chat with us instantly. Fastest way to enquire.
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
              <div className="absolute inset-0 bg-linear-to-br from-primary to-primary-container opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">call</span>
                </div>
                <h3 className="text-xl font-extrabold mb-2">Call Us</h3>
                <p className="text-white/80 text-sm mb-4">
                  Speak to our team directly. We&apos;re here 7 days a week.
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-bold bg-white/20 px-4 py-2 rounded-full group-hover:bg-white/30 transition-colors">
                  {contact.phone}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent('Enquiry - Kgrand Residences')}`}
              className="group relative bg-surface-container-lowest border-2 border-primary/10 rounded-2xl p-8 text-center shadow-ambient-lg hover:shadow-2xl hover:scale-[1.03] hover:border-primary/30 transition-all overflow-hidden"
            >
              <div className="relative">
                <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl text-white">mail</span>
                </div>
                <h3 className="text-xl font-extrabold text-primary mb-2">Email</h3>
                <p className="text-on-surface-variant text-sm mb-4">
                  Prefer email? We reply within a few hours.
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-bold bg-primary-container text-on-primary-container px-4 py-2 rounded-full group-hover:bg-primary text-white transition-colors">
                  Send Email
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </a>
          </div>

          {/* Contact Details & Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-primary rounded-2xl p-6 text-white shadow-ambient-lg">
              <h3 className="text-lg font-extrabold mb-4">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-white/60 mt-0.5">location_on</span>
                  <p className="text-sm text-white/90 leading-relaxed">{contact.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-white/60">schedule</span>
                  <div>
                    <p className="text-sm text-white/90">{contact.supportHours.weekdays}</p>
                    <p className="text-sm text-white/90">{contact.supportHours.weekend}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-ambient">
              <h3 className="text-lg font-extrabold text-primary mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/pgs" className="flex items-center gap-1.5 text-sm text-secondary font-semibold hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">apartment</span>
                  View PG Residences
                </Link>
                <Link href="/hotels" className="flex items-center gap-1.5 text-sm text-secondary font-semibold hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">hotel</span>
                  View Hotels
                </Link>
                <Link href="/about" className="flex items-center gap-1.5 text-sm text-secondary font-semibold hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">info</span>
                  About Kgrand
                </Link>
                <Link href="/support" className="flex items-center gap-1.5 text-sm text-secondary font-semibold hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">support_agent</span>
                  Support Hub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
