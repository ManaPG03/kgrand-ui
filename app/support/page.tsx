'use client';

import { useState } from 'react';
import Link from 'next/link';
import { pgs, hotels, contact } from '@/lib/data';

// ── Client Component: Support Form ────────────────────────────────────────────

function SupportForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    property: '',
    issueType: '',
    description: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert('Thank you! We will be in touch shortly.');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface-container-lowest rounded-2xl p-6 shadow-ambient space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-primary mb-1">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Full name"
            value={fields.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-surface-container-high bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-on-surface placeholder:text-on-surface-variant/50 transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-primary mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            value={fields.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-surface-container-high bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-on-surface placeholder:text-on-surface-variant/50 transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="property" className="block text-sm font-bold text-primary mb-1">
            Property
          </label>
          <select
            id="property"
            name="property"
            required
            value={fields.property}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-surface-container-high bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-on-surface transition"
          >
            <option value="" disabled>Select property…</option>
            {pgs.map((pg) => (
              <option key={pg.slug} value={pg.slug}>{pg.name}</option>
            ))}
            {hotels.map((hotel) => (
              <option key={hotel.slug} value={hotel.slug}>{hotel.name}</option>
            ))}
            <option value="general">General</option>
          </select>
        </div>
        <div>
          <label htmlFor="issueType" className="block text-sm font-bold text-primary mb-1">
            Issue Type
          </label>
          <select
            id="issueType"
            name="issueType"
            required
            value={fields.issueType}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-surface-container-high bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-on-surface transition"
          >
            <option value="" disabled>Select issue type…</option>
            <option value="maintenance">Maintenance Request</option>
            <option value="billing">Billing Query</option>
            <option value="housekeeping">Housekeeping</option>
            <option value="security">Security Concern</option>
            <option value="food">Meals &amp; Food</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-bold text-primary mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          required
          placeholder="Describe the issue in detail…"
          value={fields.description}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-lg border border-surface-container-high bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-on-surface placeholder:text-on-surface-variant/50 transition resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full cta-gradient text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
      >
        Submit Support Request
        <span className="material-symbols-outlined">send</span>
      </button>
    </form>
  );
}

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
      'All our PGs are fully inclusive — meals (breakfast and dinner), WiFi, housekeeping, power backup, water, and access to all common amenities. There are no hidden charges.',
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pgs[2].heroImage}
            alt="Kgrand support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pt-16">
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
            <div className="relative max-w-xl mx-auto">
              <div className="flex items-center bg-white/10 border border-white/20 rounded-xl px-4 py-3 backdrop-blur-md">
                <span className="material-symbols-outlined text-white/60 mr-3">search</span>
                <span className="text-white/50 text-sm">
                  Search for help topics, FAQs, or property info…
                </span>
              </div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <div className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1.5 rounded-lg text-xs font-bold">
                  Search
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Property Support Cards ────────────────────────────────────────── */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
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
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary-container rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">apartment</span>
                  </div>
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-primary-container text-on-primary-container text-[10px] font-bold rounded uppercase tracking-wider mb-1">
                      PG Residence
                    </span>
                    <h3 className="font-bold text-primary text-sm leading-tight">{pg.name}</h3>
                    <p className="text-on-surface-variant text-xs mt-0.5 flex items-center gap-1">
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
                  <Link
                    href="/enquire"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-primary-container text-on-primary-container text-xs font-bold py-2 rounded-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">confirmation_number</span>
                    Raise Ticket
                  </Link>
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
                    <h3 className="font-bold text-primary text-sm leading-tight">{hotel.name}</h3>
                    <p className="text-on-surface-variant text-xs mt-0.5 flex items-center gap-1">
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
                  <Link
                    href="/enquire"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-primary-container text-on-primary-container text-xs font-bold py-2 rounded-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">confirmation_number</span>
                    Raise Ticket
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── General Support Form ─────────────────────────────────────────────── */}
      <section className="py-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h2 className="text-3xl font-extrabold text-primary mb-2 tracking-tight">
                General Support
              </h2>
              <p className="text-secondary">
                Not sure which property to select? Have a general question? Submit a
                request and our team will route it to the right person.
              </p>
            </div>
            <SupportForm />
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion ────────────────────────────────────────────────────── */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
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
        <div className="max-w-7xl mx-auto px-4">
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
