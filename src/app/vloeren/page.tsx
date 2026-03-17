import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { vloerTypen } from '@/lib/fallback-data';
import { Volume2, Droplets, Thermometer, Clock, ArrowRight, CheckCircle2, Sparkles, Layers, Wrench } from 'lucide-react';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Vloeren Vergelijken 2026 - PVC, Laminaat, Parket & Meer',
  description: 'Vergelijk vloertypen: PVC, laminaat, parket, vinyl, gietvloer en tegels. Prijzen per m², levensduur, vochtbestendigheid en vloerverwarming.',
  keywords: ['vloeren vergelijken', 'PVC vloer', 'laminaat', 'parket', 'vinyl vloer', 'gietvloer', 'vloerverwarming'],
  openGraph: {
    title: 'Vloeren Vergelijken 2026 - PVC, Laminaat, Parket & Meer',
    description: 'Vergelijk alle vloertypen op prijs, levensduur en geschiktheid.',
    url: 'https://woonkenner.nl/vloeren',
  },
};

const geluidKleur: Record<string, string> = {
  'Slecht': 'text-red-600 bg-red-50',
  'Matig': 'text-orange-600 bg-orange-50',
  'Goed': 'text-emerald-600 bg-emerald-50',
  'Zeer goed': 'text-teal-700 bg-teal-50',
};

const duurzaamheidKleur: Record<string, string> = {
  'Beperkt': 'text-orange-600 bg-orange-50',
  'Gemiddeld': 'text-amber-600 bg-amber-50',
  'Goed': 'text-emerald-600 bg-emerald-50',
  'Zeer goed': 'text-teal-700 bg-teal-50',
};

export default function VloerenPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Vloeren', href: '/vloeren' },
  ];

  const faqItems = [
    {
      question: 'Welke vloer is het beste voor vloerverwarming?',
      answer: 'PVC (SPC), tegels en gietvloeren zijn het meest geschikt voor vloerverwarming door hun goede warmtegeleiding. Meerlaags parket is ook geschikt. Massief parket en dik laminaat worden afgeraden vanwege slechte warmteoverdracht.',
    },
    {
      question: 'Wat is het verschil tussen PVC en laminaat?',
      answer: 'PVC is waterdicht, stiller en iets duurder. Laminaat is goedkoper maar niet vochtbestendig. PVC is geschikt voor badkamer en keuken, laminaat niet. Qua uitstraling zijn beide beschikbaar in houtlook-designs.',
    },
    {
      question: 'Hoe lang gaat een PVC vloer mee?',
      answer: 'Een goede PVC klikvloer (SPC) gaat 15-25 jaar mee, afhankelijk van de kwaliteit en het gebruik. Let op de slijtlaagdikte: minimaal 0,3 mm voor woonruimtes, 0,55 mm voor drukbelopen ruimtes.',
    },
    {
      question: 'Is een gietvloer duurder dan parket?',
      answer: 'Een gietvloer kost €80-150/m² inclusief leggen, vergelijkbaar met massief parket (€60-180/m² excl. leggen). Meerlaags parket is goedkoper (€40-120/m²). De gietvloer heeft als voordeel dat deze naadloos en onderhoudsvriendelijk is.',
    },
    {
      question: 'Welke vloer is het meest geluiddempend?',
      answer: 'Vinyl en PVC scoren het best op geluidsdemping. Tegels en laminaat zonder ondervloer zijn het slechtst. Een goede ondervloer verbetert de geluidsprestaties van elke vloer aanzienlijk.',
    },
  ];

  return (
    <div>
      <PageHero
        title="Vloeren"
        badge="Vergelijking 2026"
        highlightedSubtitle="Vergelijk vloertypen op prijs, kwaliteit en duurzaamheid"
        showBreadcrumbs
        breadcrumbs={breadcrumbs}
      />

      {/* Vloertypen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-stone-900 mb-4">Alle vloertypen vergeleken</h2>
        <p className="text-lg text-stone-600 mb-10">
          Van betaalbaar laminaat tot luxe gietvloeren. Vergelijk op prijs, levensduur, vochtbestendigheid en geschiktheid voor vloerverwarming.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vloerTypen.map((vloer, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="flex items-center gap-3 mb-2">
                  <Layers className="w-5 h-5 text-amber-600" />
                  <h3 className="text-lg font-bold text-stone-900">{vloer.type}</h3>
                </div>
                <p className="text-sm text-stone-600">{vloer.beschrijving}</p>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-stone-600">Prijs per m²</span>
                  <span className="text-sm font-semibold text-stone-900">€{vloer.prijsVanPerM2} - €{vloer.prijsTotPerM2}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-stone-600 flex items-center gap-1"><Clock size={14} /> Levensduur</span>
                  <span className="text-sm font-semibold text-stone-900">{vloer.levensduur} jaar</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-stone-600 flex items-center gap-1"><Volume2 size={14} /> Geluidsdemping</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${geluidKleur[vloer.geluidsdemping] || ''}`}>
                    {vloer.geluidsdemping}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-stone-600 flex items-center gap-1"><Droplets size={14} /> Vochtbestendig</span>
                  <span className={`text-sm font-medium ${vloer.vochtbestendig ? 'text-emerald-600' : 'text-orange-600'}`}>
                    {vloer.vochtbestendig ? 'Ja ✓' : 'Nee ✗'}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-stone-600 flex items-center gap-1"><Thermometer size={14} /> Vloerverwarming</span>
                  <span className={`text-sm font-medium ${vloer.vloerverwarming ? 'text-emerald-600' : 'text-orange-600'}`}>
                    {vloer.vloerverwarming ? 'Geschikt ✓' : 'Niet geschikt ✗'}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-stone-600 flex items-center gap-1"><Wrench size={14} /> Onderhoud</span>
                  <span className="text-sm text-stone-700">{vloer.onderhoud}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-stone-600">Duurzaamheid</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${duurzaamheidKleur[vloer.duurzaamheid] || ''}`}>
                    {vloer.duurzaamheid}
                  </span>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <p className="text-xs text-stone-500">Geschikt voor: {vloer.geschiktVoor.join(', ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Tips bij het kiezen van een vloer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Sparkles, title: 'Ondervloer niet vergeten', description: 'Een goede ondervloer verbetert geluidsdemping, warmte-isolatie en loopcomfort. Budget: €2-8/m². Verplicht bij laminaat en PVC op bestaande vloer.' },
              { icon: CheckCircle2, title: 'Legkosten meerekenen', description: 'Zelf leggen bespaart €10-30/m². Professioneel leggen kost €15-40/m² extra, afhankelijk van het type vloer. Bij gietvloeren is professionele aanleg altijd nodig.' },
              { icon: Droplets, title: 'Vocht in huis?', description: 'Kies bij vochtige ruimtes (badkamer, keuken) altijd voor PVC, tegels of vinyl. Laminaat en massief parket zijn niet vochtbestendig en kunnen opzwellen.' },
            ].map((tip, idx) => {
              const TipIcon = tip.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-8 border border-stone-200">
                  <div className="flex items-center gap-3 mb-3">
                    <TipIcon className="w-6 h-6 text-teal-600" />
                    <h3 className="font-bold text-stone-900">{tip.title}</h3>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FAQSchema items={faqItems} />
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Bekijk ook raamdecoratie en kozijnen</h2>
          <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
            Maak je woning compleet met passende raamdecoratie en energiezuinige kozijnen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/raamdecoratie" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow">
              Raamdecoratie <ArrowRight size={18} />
            </Link>
            <Link href="/kozijnen" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-stone-300 text-stone-700 font-semibold rounded-lg hover:bg-stone-100 transition-colors">
              Kozijnen <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bronvermelding */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-stone-50 rounded-lg p-6 border border-stone-200">
          <p className="text-xs text-stone-500 leading-relaxed">
            <strong>Bronnen:</strong> Prijsindicaties gebaseerd op marktgemiddelden maart 2026, exclusief legkosten tenzij anders vermeld. Exacte prijzen zijn afhankelijk van kwaliteitsklasse, formaat en leverancier. De informatie op deze pagina is indicatief en geen vervanging voor een persoonlijke offerte.
          </p>
        </div>
      </section>
    </div>
  );
}
