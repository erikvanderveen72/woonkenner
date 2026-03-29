import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { kozijnTypen, kozijnAanbieders } from '@/lib/fallback-data';
import { Thermometer, Clock, Star, ArrowRight, CheckCircle2, Sparkles, Shield, PaintBucket, Frame, Wrench } from 'lucide-react';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Kozijnen Vergelijken 2026 - Kunststof, Aluminium & Hout',
  description: 'Vergelijk kozijnen: kunststof, aluminium, hout en hout-aluminium. Prijzen, U-waarden, isolatie en aanbieders. Onafhankelijk advies.',
  keywords: ['kozijnen vergelijken', 'kunststof kozijnen', 'aluminium kozijnen', 'houten kozijnen', 'kozijnen prijs', 'U-waarde kozijnen'],
  alternates: { canonical: '/kozijnen' },
  openGraph: {
    title: 'Kozijnen Vergelijken 2026 - Kunststof, Aluminium & Hout',
    description: 'Vergelijk alle kozijnmaterialen op prijs, isolatie en levensduur.',
    url: 'https://woonkenner.nl/kozijnen',
  },
};

export default function KozijnenPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Kozijnen', href: '/kozijnen' },
  ];

  const faqItems = [
    {
      question: 'Welk kozijnmateriaal isoleert het beste?',
      answer: 'Hout-aluminium kozijnen hebben de beste isolatiewaarde met een U-waarde van circa 1,0 W/m²K. Houten kozijnen (U-waarde 1,2) en kunststof (U-waarde 1,3) volgen. Aluminium scoort het minst op isolatie (U-waarde 1,5) maar heeft wel de slankste profielen.',
    },
    {
      question: 'Wat kosten nieuwe kozijnen voor een heel huis?',
      answer: 'Reken voor een gemiddelde woning op €5.000-€15.000 voor kunststof kozijnen, €10.000-€25.000 voor aluminium en €15.000-€35.000 voor hout-aluminium. De exacte prijs hangt af van het aantal ramen, de maat en het type glas.',
    },
    {
      question: 'Zijn kunststof kozijnen duurzaam?',
      answer: 'Kunststof kozijnen gaan 40+ jaar mee, zijn volledig recyclebaar en vragen minimaal onderhoud. De productie is energieintensiever dan hout, maar door de lange levensduur en recyclebaarheid zijn ze een duurzame keuze.',
    },
    {
      question: 'Welke kozijnen zijn het goedkoopst?',
      answer: 'Kunststof kozijnen zijn het voordeligst met prijzen vanaf €200/m². Aluminium begint rond €350/m² en hout-aluminium vanaf €450/m². Let op: goedkoop is niet altijd voordelig. Reken de totale kosten over de levensduur inclusief onderhoud.',
    },
    {
      question: 'Moet ik een vergunning aanvragen voor nieuwe kozijnen?',
      answer: 'Bij vervanging in dezelfde stijl en kleur heb je meestal geen vergunning nodig. Bij wijziging van kleur, materiaal of indeling kan een vergunning nodig zijn, vooral bij monumenten of in beschermde stadsgezichten. Check altijd bij je gemeente.',
    },
  ];

  return (
    <div>
      <PageHero
        title="Kozijnen"
        badge="Vergelijking 2026"
        highlightedSubtitle="Vergelijk kozijnen op isolatie, prijs en levensduur"
        showBreadcrumbs
        breadcrumbs={breadcrumbs}
      />

      {/* Kozijntypen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-stone-900 mb-4">Kozijnmaterialen vergeleken</h2>
        <p className="text-lg text-stone-600 mb-10">
          Elk materiaal heeft z&apos;n eigen voordelen. Vergelijk op isolatie (U-waarde), prijs, levensduur en onderhoud.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {kozijnTypen.map((kozijn, idx) => {
            const uWaardeKleur = kozijn.uWaarde <= 1.0 ? 'text-teal-700 bg-teal-50' : kozijn.uWaarde <= 1.3 ? 'text-emerald-600 bg-emerald-50' : 'text-amber-600 bg-amber-50';

            return (
              <div key={idx} className="bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6 bg-gradient-to-br from-sky-50 to-blue-50">
                  <div className="flex items-center gap-3 mb-2">
                    <Frame className="w-5 h-5 text-sky-600" />
                    <h3 className="text-lg font-bold text-stone-900">{kozijn.materiaal}</h3>
                  </div>
                  <p className="text-sm text-stone-600">{kozijn.beschrijving}</p>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-stone-600">Prijs per m²</span>
                    <span className="text-sm font-semibold text-stone-900">€{kozijn.prijsVanPerM2} - €{kozijn.prijsTotPerM2}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-stone-600 flex items-center gap-1"><Thermometer size={14} /> U-waarde</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${uWaardeKleur}`}>
                      {kozijn.uWaarde} W/m²K
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-stone-600 flex items-center gap-1"><Clock size={14} /> Levensduur</span>
                    <span className="text-sm font-semibold text-stone-900">{kozijn.levensduur} jaar</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-stone-600 flex items-center gap-1"><Wrench size={14} /> Onderhoud</span>
                    <span className="text-sm text-stone-700">{kozijn.onderhoud}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-stone-600 flex items-center gap-1"><PaintBucket size={14} /> Kleuropties</span>
                    <span className="text-sm text-stone-700">{kozijn.kleurOpties}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-stone-600 flex items-center gap-1"><Shield size={14} /> Duurzaam</span>
                    <span className={`text-sm font-medium ${kozijn.duurzaam ? 'text-emerald-600' : 'text-orange-600'}`}>
                      {kozijn.duurzaam ? 'Ja ✓' : 'Nee'}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-stone-100">
                    <p className="text-xs text-stone-500">Geschikt voor: {kozijn.geschiktVoor.join(', ')}</p>
                  </div>

                  {/* U-waarde bar */}
                  <div className="pt-2">
                    <div className="flex justify-between text-xs text-stone-500 mb-1">
                      <span>Isolatieprestatie</span>
                      <span>{kozijn.uWaarde <= 1.0 ? 'Uitstekend' : kozijn.uWaarde <= 1.3 ? 'Goed' : 'Gemiddeld'}</span>
                    </div>
                    <div className="w-full bg-stone-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-teal-500 to-emerald-500 h-2 rounded-full"
                        style={{ width: `${Math.max(20, 100 - (kozijn.uWaarde - 0.8) * 80)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Aanbieders */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Kozijnaanbieders</h2>
          <p className="text-lg text-stone-600 mb-10">
            De bekendste merken en leveranciers van kozijnen in Nederland.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kozijnAanbieders.map((aanbieder, idx) => {
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

                  <div className="mb-4">
                    <span className="text-sm text-stone-600">Materialen: </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {aanbieder.materialen.map((mat) => (
                        <span key={mat} className="text-xs bg-stone-100 text-stone-700 px-2 py-0.5 rounded-full">{mat}</span>
                      ))}
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
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Tips bij het kiezen van kozijnen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Thermometer, title: 'Let op de U-waarde', description: 'Hoe lager de U-waarde, hoe beter de isolatie. Nieuwe kozijnen met HR++ of triple glas kunnen je energielabel 1-2 stappen verbeteren en flink besparen op stookkosten.' },
            { icon: Sparkles, title: 'Subsidie mogelijk', description: 'Bij gecombineerde verduurzaming (kozijnen + isolatie) kun je in aanmerking komen voor ISDE subsidie. Check de voorwaarden op rvo.nl.' },
            { icon: CheckCircle2, title: 'Vergelijk altijd 3 offertes', description: 'Vraag minimaal drie offertes aan bij verschillende leveranciers. Let niet alleen op de prijs maar ook op garantie, montage en nazorg.' },
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
        <div className="bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Je woning compleet verduurzamen?</h2>
          <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
            Combineer nieuwe kozijnen met isolatie en verduurzaming. Bereken je besparing op Woonkenner.nl.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/verduurzaming" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow">
              Verduurzaming & subsidies <ArrowRight size={18} />
            </Link>
            <Link href="/raamdecoratie" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-stone-300 text-stone-700 font-semibold rounded-lg hover:bg-stone-100 transition-colors">
              Raamdecoratie <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bronvermelding */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-stone-50 rounded-lg p-6 border border-stone-200">
          <p className="text-xs text-stone-500 leading-relaxed">
            <strong>Bronnen:</strong> Prijsindicaties gebaseerd op marktgemiddelden maart 2026, inclusief standaard beglazing. Exacte prijzen zijn afhankelijk van maatwerk, glastype en montage. U-waarden zijn indicatief voor het complete kozijnprofiel met HR++ glas. De informatie op deze pagina is indicatief en geen vervanging voor een persoonlijke offerte.
          </p>
        </div>
      </section>
    </div>
  );
}
