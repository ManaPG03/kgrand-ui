'use client';

import { useState } from 'react';
import Link from 'next/link';
import { pgs, contact } from '@/lib/data';

// ── Client Component: Enquiry Form ────────────────────────────────────────────

function EnquireForm() {
  const [fields, setFields] = useState({
    fullName: '',
    phone: '',
    email: '',
    property: '',
    message: '',
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
      className="bg-surface-container-lowest rounded-2xl p-4 shadow-ambient-lg space-y-3"
    >
      <div>
        <h2 className="text-lg font-extrabold text-primary mb-0.5">Send an Enquiry</h2>
        <p className="text-on-surface-variant text-xs">
          Fill in your details and we&apos;ll get back to you within a few hours.
        </p>
      </div>

      <div>
        <label htmlFor="fullName" className="block text-sm font-bold text-primary mb-1">
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          placeholder="Your full name"
          value={fields.fullName}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-surface-container-high bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-on-surface placeholder:text-on-surface-variant/50 transition text-sm"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-bold text-primary mb-1">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+91 98765 43210"
          value={fields.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-surface-container-high bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-on-surface placeholder:text-on-surface-variant/50 transition text-sm"
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
          className="w-full px-3 py-2 rounded-lg border border-surface-container-high bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-on-surface placeholder:text-on-surface-variant/50 transition text-sm"
        />
      </div>

      <div>
        <label htmlFor="property" className="block text-sm font-bold text-primary mb-1">
          Property Interest
        </label>
        <select
          id="property"
          name="property"
          required
          value={fields.property}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-surface-container-high bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-on-surface transition text-sm"
        >
          <option value="" disabled>Select a property…</option>
          <option value="kgrand-luxury-colive">Kgrand Luxury Co-Live</option>
          <option value="kgrand-elite-colive">K Grand Elite Colive PG</option>
          <option value="kgrand-swarna-colive">K Grand Swarna Colive PG</option>
          <option value="kgrand-residency-madhapur">Kgrand Residency Madhapur</option>
          <option value="kgrand-suites">Kgrand Suites</option>
          <option value="general">General Enquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold text-primary mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Tell us more about your requirements…"
          value={fields.message}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-surface-container-high bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-on-surface placeholder:text-on-surface-variant/50 transition resize-none text-sm"
        />
      </div>

      <button
        type="submit"
        className="w-full cta-gradient text-white font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-sm"
      >
        Submit Enquiry
        <span className="material-symbols-outlined text-sm">send</span>
      </button>
    </form>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function EnquirePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[870px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pgs[0].heroImage}
            alt="Kgrand premium living"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pt-16">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold text-xs tracking-wider uppercase mb-4">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-4">
              Enquire Now
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-light">
              Interested in a Kgrand residence? We&apos;d love to help you find the perfect
              fit. Reach out and our team will respond within a few hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── Two-Column Layout ─────────────────────────────────────────────── */}
      <section className="py-6 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column — Company Info */}
            <div className="space-y-4">
              <div className="bg-primary rounded-2xl p-6 text-white shadow-ambient-lg space-y-5">
                <h2 className="text-lg font-extrabold">Contact Information</h2>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">location_on</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-primary-container mb-1">
                      Address
                    </p>
                    <p className="text-white text-sm leading-relaxed">{contact.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">call</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-primary-container mb-1">
                      Phone
                    </p>
                    <p className="text-white text-sm mb-2">{contact.phone}</p>
                    <a
                      href={`tel:${contact.phone}`}
                      className="inline-flex items-center gap-1.5 bg-white text-primary px-3 py-1.5 rounded-lg text-xs font-bold hover:opacity-90 transition-opacity"
                    >
                      <span className="material-symbols-outlined text-sm">call</span>
                      Call Now
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">chat</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-primary-container mb-1">
                      WhatsApp
                    </p>
                    <a
                      href={contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1.5 rounded-lg text-xs font-bold hover:opacity-90 transition-opacity"
                    >
                      <span className="material-symbols-outlined text-sm">chat</span>
                      WhatsApp Us
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">mail</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-primary-container mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-white text-sm hover:underline"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-white">schedule</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-on-primary-container mb-1">
                        Office Hours
                      </p>
                      <p className="text-white text-sm">{contact.supportHours.weekdays}</p>
                      <p className="text-white text-sm">{contact.supportHours.weekend}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-ambient">
                <h3 className="text-sm font-bold text-primary mb-4">Quick Links</h3>
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

            {/* Right Column — Enquiry Form */}
            <div>
              <EnquireForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
