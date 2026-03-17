import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import VerduurzamingCalculator from '@/components/VerduurzamingCalculator';
import { verduurzamingsmaatregelen } from '@/lib/fallback-data';
import { formatCurrency } from '@/lib/calculations';
import { Zap, Home, DollarSign, TrendingDown, Leaf, CheckCircle2, BarChart3 } from 'lucide-react';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Woning Verduurzamen 2026 - Subsidies & Kosten | Woonkenner.nl',
  description: 'Ontdek verduurzamingsmaatregelen, bereken je besparing en check de ISDE subsidies 2026. Dakisolatie, zonnepanelen, warmtepomp en meer.',
  keywords: ['verduurzaming', 'ISDE subsidie', 'zonnepanelen', 'warmtepomp', 'energiebesparing', 'subsidie 2026'],
  openGraph: {
    title: 'Woning Verduurzamen 2026 - Subsidies & Kosten',
    description: 'Ontdek verduurzamingsmaatregelen en bereken je besparing met de ISDE subsidie.',
    url: 'https://woonkenner.nl/verduurzaming',
  },
};

const iconMap = {
  'Dakisolatie': Zap,
  'Vloerisolatie': Home,
  'Spouwmuurisolatie': Home,
  'HR++ Glas': Home,
  'Zonnepanelen': Leaf,
  'Warmtepomp (lucht-water)': Zap,
  'Zonneboiler': Leaf,
};

export default function VerduurzamingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Verduurzaming', href: '/verduurzaming' },
  ];

  const tipsCards = [
    {
      title: 'ISDE Subsidie 2026',
      description: 'Tot €20.000 subsidie voor verduurzamingsmaatregelen. Check je recht op ondersteuning van de Rijksoverheid.',
      icon: DollarSign,
    },
    {
      title: 'Stap-voor-stap Verduurzamen',
      description: 'Start klein met dakisolatie of zonneboiler. Bouw je maatregelen uit naar een volledig verduurzamd huis.',
      icon: CheckCircle2,
    },
    {
      title: 'Combinatievoordeel',
      description: 'Combineer maatregelen voor extra besparing. Isolatie + zonnepanelen + warmtepomp geeft de beste terugverdientijd.',
      icon: BarChart3,
    },
  ];

  const faqItems = [
    {
      question: 'Wat is de ISDE subsidie en hoe hoog is deze?',
      answer: 'De ISDE (Innovatiestimulering Duurzaam Energiebehoud) subsidie biedt tot €20.000 ondersteuning voor huiseigenaren die hun woning verduurzamen. De hoogte hangt af van je inkomsten en de maatregelen die je neemt. Check op www.rvo.nl of je recht hebt.',
    },
    {
      question: 'Welke maatregel geeft de beste terugverdientijd?',
      answer: 'Spouwmuurisolatie en zonnepanelen hebben de beste terugverdientijd (6-7 jaar). Warmtepompen hebben meer investering nodig maar geven lange termijn besparing.',
    },
    {
      question: 'Kan ik maatregelen combineren voor meer subsidie?',
      answer: 'Ja! Combineer maatregelen voor extra besparing en betere terugverdientijd. Isolatie + zonnepanelen + warmtepomp is een populaire combinatie. Controleer de voorwaarden op www.rvo.nl.',
    },
    {
      question: 'Hoeveel energie kun je besparen met verduurzaming?',
      answer: 'Afhankelijk van je huistype en maatregelen: 20-40% met isolatie, 15-25% met zonnepanelen, 30-50% met warmtepomp. Combinaties kunnen tot 60-70% besparing geven.',
    },
    {
      question: 'Is verduurzaming ook goed voor de waarde van mijn huis?',
      answer: 'Ja! Een energiezuinige woning met energielabel A/A+ heeft een hogere marktwaarde. Koper zoeken liever huizen met lage energiekosten.',
    },
    {
      question: 'Hoe lang duren verduurzamingswerken?',
      answer: 'Dakisolatie: 1-2 dagen. Spouwmuurisolatie: 1-3 dagen. Zonnepanelen: 1-2 dagen. Warmtepomp: 2-5 dagen. Plan je werk in overleg met aannemers.',
    },
  ];

  return (
    <div>
      <PageHero
        title="Verduurzaming"
        badge="Subsidies 2026"
        highlightedSubtitle="Verduurzaam je woning en bespaar"
        showBreadcrumbs
        breadcrumbs={breadcrumbs}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Verduurzamingsmaatregelen</h2>
          <p className="text-lg text-stone-600 mb-8">
            Ontdek de beste maatregelen om je woning energiezuiniger en duurzamer te maken. Zie de kosten, besparing en subsidies voor elke maatregel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verduurzamingsmaatregelen.map((maatregel, idx) => {
              const IconComponent = iconMap[maatregel.naam as keyof typeof iconMap] || Zap;
              const kostenGemiddelde = Math.round((maatregel.kostenVan + maatregel.kostenTot) / 2);

              return (
                <div key={idx} className="bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6 bg-gradient-to-br from-teal-50 to-emerald-50">
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="w-6 h-6 text-teal-600" />
                      <h3 className="text-lg font-bold text-stone-900">{maatregel.naam}</h3>
                    </div>
                    <p className="text-sm text-stone-600">{maatregel.beschrijving}</p>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-medium text-stone-600">Kosten</span>
                        <div className="text-right">
                          <div className="text-sm text-stone-900 font-semibold">
                            {formatCurrency(maatregel.kostenVan)} - {formatCurrency(maatregel.kostenTot)}
                          </div>
                          <div className="text-xs text-stone-500">ø {formatCurrency(kostenGemiddelde)}</div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-stone-600">Besparing/jaar</span>
                        <span className="text-sm font-semibold text-emerald-600">{formatCurrency(maatregel.besparingPerJaar)}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-stone-600">Terugverdientijd</span>
                        <span className="text-sm font-semibold text-stone-900">{maatregel.terugverdientijd} jaar</span>
                      </div>

                      <div className="pt-2 border-t border-stone-200 flex justify-between items-center">
                        <span className="text-sm font-medium text-stone-600">ISDE Subsidie 2026</span>
                        <span className={`text-sm font-bold ${maatregel.subsidie2026 > 0 ? 'text-teal-600' : 'text-stone-400'}`}>
                          {maatregel.subsidie2026 > 0 ? `+${formatCurrency(maatregel.subsidie2026)}` : 'Geen'}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="w-full bg-stone-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-teal-500 to-emerald-500 h-2 rounded-full transition-all"
                          style={{
                            width: `${Math.min((maatregel.subsidie2026 / kostenGemiddelde) * 100, 100)}%`,
                          }}
                        />
                      </div>
                      <p className="text-xs text-stone-500 mt-1">
                        Subsidie dekt {Math.round((maatregel.subsidie2026 / kostenGemiddelde) * 100)}% van kosten
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Bereken je besparing</h2>
        <VerduurzamingCalculator />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Handige tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tipsCards.map((tip, idx) => {
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FAQSchema items={faqItems} />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-teal-50 via-emerald-50 to-orange-50 rounded-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Start je verduurzaming vandaag</h2>
          <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
            Bereken je besparing, check de subsidies en plan je verduurzamingsmaatregelen. Een duurzamere woning begint nu.
          </p>
          <a
            href="#calculator"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
          >
            Naar de calculator
            <TrendingDown className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
