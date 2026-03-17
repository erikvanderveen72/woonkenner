import Link from 'next/link';
import { Lock, Shield, RefreshCw } from 'lucide-react';

const columns = [
  { title: 'Hypotheek & Woning', links: [{ label: 'Hypotheek Vergelijken', href: '/hypotheek' }, { label: 'Woningwaarde Bepalen', href: '/woningwaarde' }, { label: 'Huurprijzen Checken', href: '/huurprijzen' }] },
  { title: 'Energie & Verduurzaming', links: [{ label: 'Energielabel', href: '/energie' }, { label: 'Verduurzaming', href: '/verduurzaming' }, { label: 'Kozijnen', href: '/kozijnen' }] },
  { title: 'Woninginrichting', links: [{ label: 'Raamdecoratie', href: '/raamdecoratie' }, { label: 'Vloeren Vergelijken', href: '/vloeren' }, { label: 'Kozijnen Vergelijken', href: '/kozijnen' }] },
  { title: 'Over Woonkenner', links: [{ label: 'Over Ons', href: '#' }, { label: 'Privacy', href: '#' }, { label: 'Disclaimer', href: '#' }] },
];

const trustBadges = [
  { icon: Lock, text: 'SSL Beveiligd' },
  { icon: Shield, text: 'AVG/GDPR Compliant' },
  { icon: RefreshCw, text: 'Dagelijks Bijgewerkt' },
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link href="/" className="flex items-center gap-2.5">
            <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="18" fill="#14b8a6" />
              <circle cx="18" cy="18" r="14" fill="#0d9488" />
              <path d="M18 10L10 18H13V26H23V18H26L18 10Z" fill="white" />
            </svg>
            <span className="text-xl font-extrabold text-white tracking-tight">
              woon<span className="text-teal-400">kenner</span><span className="text-teal-300">.nl</span>
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-semibold mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}><Link href={link.href} className="text-sm hover:text-white transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {trustBadges.map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 bg-stone-800 rounded-full px-3 py-1">
              <badge.icon size={12} className="text-teal-400" />
              <span className="text-xs">{badge.text}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-stone-800 pt-6 text-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Woonkenner.nl - Alle rechten voorbehouden. De informatie op deze website is uitsluitend bedoeld als algemene informatie.</p>
        </div>
      </div>
    </footer>
  );
}
