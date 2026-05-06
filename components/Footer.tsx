import Link from 'next/link';
import { contact } from '@/lib/data';

const solutions = [
  { label: "Find a PG", href: '/pgs' },
  { label: "Book a Hotel", href: '/hotels' },
  { label: "Photo Gallery", href: '/gallery' },
];

const company = [
  { label: "About Us", href: '/about' },
  { label: "Community", href: '/community' },
  { label: "Support Hub", href: '/support' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary-container">
      <div className="max-w-7xl min-[1920px]:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="text-xl font-black text-on-primary tracking-tight block mb-4">
              Kgrand Residences
            </span>
            <p className="text-on-primary-container text-sm leading-relaxed mb-6 max-w-sm">
              Premium co-living PGs and luxury hotels in Hyderabad&apos;s HITEC City corridor.
              Managed living for modern professionals &mdash; comfort, community, and care.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2 text-on-primary-container hover:text-on-primary transition-colors"
              >
                <span className="material-symbols-outlined text-base">call</span>
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-on-primary-container hover:text-on-primary transition-colors"
              >
                <span className="material-symbols-outlined text-base">mail</span>
                {contact.email}
              </a>
              <span className="flex items-start gap-2 text-on-primary-container">
                <span className="material-symbols-outlined text-base mt-0.5">location_on</span>
                <span>{contact.address}</span>
              </span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-on-primary mb-5">Solutions</h5>
            <ul className="flex flex-col gap-3">
              {solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-on-primary-container hover:text-on-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-on-primary mb-5">Company</h5>
            <ul className="flex flex-col gap-3">
              {company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-on-primary-container hover:text-on-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-container pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-xs text-on-primary-container">
            © {new Date().getFullYear()} Kgrand Residences. All rights reserved.
          </span>
          <div className="flex items-center gap-2 text-xs text-on-primary-container">
            <span>Professionally managed, community focused.</span>
            <span className="material-symbols-outlined text-sm text-tertiary-fixed-dim"
              style={{ fontVariationSettings: "'FILL' 1" }}>
              favorite
            </span>
            <span>Hyderabad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
