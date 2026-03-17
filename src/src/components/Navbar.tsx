'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Shield, ChevronDown, Home } from 'lucide-react';

const navItems = [
  { label: 'Hypotheek', href: '/hypotheek' },
  { label: 'Woningwaarde', href: '/woningwaarde' },
  { label: 'Energie', href: '/energie' },
  { label: 'Huurprijzen', href: '/huurprijzen' },
  { label: 'Verduurzaming', href: '/verduurzaming' },
  { label: 'Raamdecoratie', href: '/raamdecoratie' },
  { label: 'Vloeren', href: '/vloeren' },
  { label: 'Kozijnen', href: '/kozijnen' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="18" fill={isScrolled ? '#0d9488' : '#14b8a6'} />
              <circle cx="18" cy="18" r="14" fill={isScrolled ? '#0f766e' : '#0d9488'} />
              <path d="M18 10L10 18H13V26H23V18H26L18 10Z" fill="white" />
            </svg>
            <span className={`text-[22px] font-extrabold tracking-tight ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
              woon<span className="text-teal-400">kenner</span><span className={isScrolled ? 'text-teal-600' : 'text-teal-300'}>.nl</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isScrolled ? 'text-stone-600 hover:text-teal-700 hover:bg-teal-50' : 'text-stone-300 hover:text-white hover:bg-white/10'}`}>
                {item.label}
              </Link>
            ))}
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ml-4 ${isScrolled ? 'bg-teal-50 text-teal-700' : 'bg-teal-500/20 text-teal-300'}`}>
              <Shield size={12} />
              <span>Onafhankelijk & gratis</span>
            </div>
          </div>

          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-stone-600' : 'text-white'}`}>
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 shadow-xl rounded-b-2xl">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsMobileOpen(false)} className="block px-4 py-3 text-stone-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg font-medium">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
