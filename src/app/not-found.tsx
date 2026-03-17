import { Metadata } from 'next';
import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pagina Niet Gevonden | Woonkenner.nl',
  description: 'De pagina die je zoekt bestaat niet of is verplaatst.',
};

const popularPages = [
  { label: 'Hypotheek Vergelijken', href: '/hypotheek' },
  { label: 'Woningwaarde Bepalen', href: '/woningwaarde' },
  { label: 'Energielabel Check', href: '/energie' },
  { label: 'Huurprijzen Checken', href: '/huurprijzen' },
  { label: 'Verduurzaming', href: '/verduurzaming' },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="relative overflow-hidden bg-stone-900">
        <div className="absolute inset-0 plus-pattern opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur mb-6">
            <Search className="w-10 h-10 text-teal-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">404</h1>
          <p className="text-xl text-stone-400 mb-2">Pagina niet gevonden</p>
          <p className="text-stone-500 max-w-md mx-auto">De pagina die je zoekt bestaat niet of is verplaatst. Probeer een van onze populaire pagina&apos;s.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-xl font-bold text-text-main mb-6">Populaire pagina&apos;s</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {popularPages.map((page) => (
            <Link key={page.href} href={page.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border hover:border-teal-400 hover:shadow-md transition-all">
              <Home className="w-5 h-5 text-teal-600" />
              <span className="font-medium text-text-main">{page.label}</span>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Terug naar home
          </Link>
        </div>
      </div>
    </div>
  );
}
