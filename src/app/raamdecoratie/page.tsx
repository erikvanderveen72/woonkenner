import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { raamdecoratieProducten, raamdecoratieAanbieders } from '@/lib/fallback-data';
import { Eye, Shield, Thermometer, Clock, Star, ArrowRight, CheckCircle2, Sparkles, SunDim } from 'lucide-react';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Raamdecoratie Vergelijken 2026 - Gordijnen, Shutters & Jaloezieën',
  description: 'Vergelijk raamdecoratie: gordijnen, jaloezieën, shutters, plissé en rolgordijnen. Prijzen, isolatiewaarde en aanbieders. Onafhankelijk advies.',
  keywords: ['raamdecoratie', 'gordijnen', 'jaloezieën', 'shutters', 'plissé gordijnen', 'rolgordijnen', 'raambekleding vergelijken'],
  alternates: { canonical: '/raamdecoratie' },
  openGraph: {
    title: 'Raamdecoratie Vergelijken 2026 - Gordijnen, Shutters & Jaloezieën',
    description: 'Vergelijk alle soorten raamdecoratie op prijs, isolatie en onderhoud.',
    url: 'https://woonkenner.nl/raamdecoratie',
  },
};

const isolatieKleur: Record<string, string> = {
  'Laag': 'text-orange-600 bg-orange-50',
  'Gemiddeld': 'text-amber-600 bg-amber-50',
  'Goed': 'text-emerald-600 bg-emerald-50',
  'Zeer goed': 'text-teal-700 bg-teal-50',
};

const lichtKleur: Record<string, string> = {
  'Beperkt': 'text-stone-500 bg-stone-50',
  'Goed': 'text-blue-600 bg-blue-50',
  'Zeer goed': 'text-indigo-600 bg-indigo-50',
  'Volledig': 'text-violet-700 bg-violet-50',
};

export default function RaamdecoratiePageContent() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Raamdecoratie', href: '/raamdecoratie' },
  ];

  const faqItems = [
    {
      question: 'Welke raamdecoratie isoleert het beste?',
      answer: 'Shutters en honingraatplissés bieden de beste isolatie. Shutters creëren een extra luchtlaag voor het raam, terwijl honingraatplissés een luchtcellstructuur hebben die warmteverlies minimaliseert.',
    },
    {
      question: 'Wat kost raamdecoratie op maat gemiddeld?',
      answer: 'Prijzen variëren sterk per type. Rolgordijnen op maat beginnen rond €25/m², jaloezieën rond €30-60/m², en shutters zijn het duurst met €200-450/m². Op maat is doorgaans 30-50% duurder dan confectie.',
    },
    {
      question: 'Zijn shutters een goede investering?',
      answer: 'Shutters zijn een duurzame investering met een levensduur van 25+ jaar. Ze verhogen de woningwaarde, bieden uitstekende isolatie en lichtregulatie, en zijn vrijwel onderhoudsvrij. De hogere aanschafkosten verdien je terug over de levensduur.',
    },
    {
      question: 'Welke raamdecoratie is geschikt voor vochtige ruimtes?',
      answer: 'Aluminium jaloezieën, kunststof shutters en vochtbestendige rolgordijnen zijn het meest geschikt voor badkamers en keukens. Houten jaloezieën en stoffen gordijnen zijn minder geschikt door vochtgevoeligheid.',
    },
    {
      question: 'Wat is smart raambekleding en wat kost het?',
      answer: 'Smart raambekleding zijn elektrisch bedienbare gordijnen of rolgordijnen die je met een app of spraakassistent bedient. Prijzen beginnen rond €80/m². Populaire merken zijn Somfy en Eve MotionBlinds, compatibel met Apple HomeKit, Google Home en Amazon Alexa.',
    },
  ];

  return (
    <div>
      <PageHero
        title="Raamdecoratie"
        badge="Vergelijking 2026"
        highlightedSubtitle="Vergelijk raambekleding op prijs, isolatie en stijl"
        showBreadcrumbs
        breadcrumbs={breadcrumbs}
      />

      {/* Product Overzicht */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-stone-900 mb-4">Alle soorten raamdecoratie</h2>
        <p className="text-lg text-stone-600 mb-10">
          Van budgetvriendelijke rolgordijnen tot luxe shutters. Vergelijk op prijs, isolatiewaarde, lichtregulatie en levensduur.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {raamdecoratieProducten.map((product, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-violet-50">
                <div className="flex items-center gap-3 mb-2">
                  <SunDim className="w-5 h-5 text-indigo-600" />
                  <h3 className="text-lg font-bold text-stone-900">{product.type}</h3>
                </div>
                <p className="text-sm text-stone-600">{product.beschrijving}</p>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-stone-600">Prijs per m²</span>
                  <span className="text-sm font-semibold text-stone-900">€{product.prijsVanPerM2} - €{product.prijsTotPerM2}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-stone-600 flex items-center gap-1"><Thermometer size={14} /> Isolatie</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${isolatieKleur[product.isolatiewaarde] || ''}`}>
                    {product.isolatiewaarde}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-stone-600 flex items-center gap-1"><Eye size={14} /> Lichtregulatie</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${lichtKleur[product.lichtregulatie] || ''}`}>
                    {product.lichtregulatie}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-stone-600 flex items-center gap-1"><Shield size={14} /> Onderhoud</span>
                  <span className="text-sm text-stone-700">{product.onderhoud}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-stone-600 flex items-center gap-1"><Clock size={14} /> Levensduur</span>
                  <span className="text-sm font-semibold text-stone-900">{product.levensduur} jaar</span>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <p className="text-xs text-stone-500">Geschikt voor: {product.geschiktVoor.join(', ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Aanbieders */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Populaire aanbieders</h2>
          <p className="text-lg text-stone-600 mb-10">
            Van budgetwinkels tot premium leveranciers. Vergelijk aanbieders op prijs, service en klantbeoordeling.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {raamdecoratieAanbieders.map((aanbieder, idx) => {
              const typeKleur = {
                'Budget': 'from-green-500 to-emerald-500',
                'Middenklasse': 'from-blue-500 to-indigo-500',
                'Premium': 'from-purple-500 to-violet-500',
              }[aanbieder.type];

              return (
                <div key={idx} className="bg-white rounded-xl border border-stone-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-stone-900">{aanbieder.naam}</h3>
                    <span className={`text-xs font-semibold text-white px-3 py-1 rounded-full bg-gradient-to-r ${typeKleur}`}>
                      {aanbieder.type}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-600">Prijsniveau</span>
                      <span className="font-medium text-stone-900">{aanbieder.prijsniveau}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-600">Op maat</span>
                      <span className={`font-medium ${aanbieder.opMaat ? 'text-emerald-600' : 'text-stone-400'}`}>
                        {aanbieder.opMaat ? 'Ja ✓' : 'Nee'}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-600">Montageservice</span>
                      <span className={`font-medium ${aanbieder.montageService ? 'text-emerald-600' : 'text-stone-400'}`}>
                        {aanbieder.montageService ? 'Ja ✓' : 'Nee'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 pt-3 border-t border-stone-100">
                    <Star size={14} className="text-amber-400 fill-amber-400" />
                    <span className="text-sm font-semibold text-stone-900">{aanbieder.beoordeling}</span>
                    <span className="text-xs text-stone-500">/ 5.0</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Tips bij het kiezen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Thermometer, title: 'Denk aan isolatie', description: 'Raamdecoratie met goede isolatiewaarde kan je energiekosten met 5-10% verlagen. Shutters en honingraatplissés scoren het best.' },
            { icon: Sparkles, title: 'Op maat vs. confectie', description: 'Op maat is 30-50% duurder maar geeft perfecte pasvorm en betere isolatie. Bij speciale raamvormen is op maat de enige optie.' },
            { icon: CheckCircle2, title: 'Montage meenemen', description: 'Vergeet de montagekosten niet. Bij shutters en gordijnen op maat is professionele montage vaak inbegrepen of sterk aan te raden.' },
          ].map((tip, idx) => {
            const TipIcon = tip.icon;
            return (
              <div key={idx} className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-xl p-8 border border-stone-200">
                <div className="flex items-center gap-3 mb-3">
                  <TipIcon className="w-6 h-6 text-teal-600" />
                  <h3 className="font-bold text-stone-900">{tip.title}</h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">{tip.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FAQSchema items={faqItems} />
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-indigo-50 via-violet-50 to-purple-50 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Ook je vloer of kozijnen vernieuwen?</h2>
          <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
            Vergelijk vloeren en kozijnen op Woonkenner.nl. Onafhankelijk, gratis en altijd actueel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/vloeren" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow">
              Vloeren vergelijken <ArrowRight size={18} />
            </Link>
            <Link href="/kozijnen" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-stone-300 text-stone-700 font-semibold rounded-lg hover:bg-stone-100 transition-colors">
              Kozijnen vergelijken <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bronvermelding */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-stone-50 rounded-lg p-6 border border-stone-200">
          <p className="text-xs text-stone-500 leading-relaxed">
            <strong>Bronnen:</strong> Prijsindicaties gebaseerd op marktgemiddelden maart 2026. Exacte prijzen zijn afhankelijk van maat, materiaal en leverancier. De informatie op deze pagina is indicatief en geen vervanging voor een persoonlijke offerte. Vergelijk altijd meerdere aanbieders.
          </p>
        </div>
      </section>
    </div>
  );
}
