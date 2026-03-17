import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import WoningwaardeCalculator from '@/components/WoningwaardeCalculator';
import { woningmarktData } from '@/lib/fallback-data';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Woningwaarde Bepalen 2026 - Gratis Schatting | Woonkenner.nl',
  description: 'Bepaal de waarde van jouw woning in 2026. Gratis woningwaarde calculator met actuele prijzens uit Q1 2026 voor alle regio\'s in Nederland.',
};

export const revalidate = 3600;

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const faqItems = [
  {
    question: 'Hoe bepaal ik de waarde van mijn woning?',
    answer: 'De waarde van een woning wordt bepaald door verschillende factoren: de locatie, grootte, staat van onderhoud, bouwjaar, energielabel en marktomstandigheden. Onze calculator gebruikmaakt van actuele marktgegevens uit Q1 2026 om een realistische schatting te geven.',
  },
  {
    question: 'Wat is het verschil tussen WOZ-waarde en marktwaarde?',
    answer: 'De WOZ-waarde (Waarde Onroerende Zaak) wordt door de gemeente vastgesteld voor belastingdoeleinden en kan verschillen van de werkelijke marktwaarde. De marktwaarde is wat je woning daadwerkelijk waard is op de vrije woningmarkt.',
  },
  {
    question: 'Hoe beïnvloedt de staat van onderhoud de woningwaarde?',
    answer: 'De staat van onderhoud is cruciaal voor de waarde. Een uitstekend onderhouden woning kan tot 10-15% meer waard zijn. Regelmatig onderhoud, renovaties en modernisering kunnen de waarde aanzienlijk verhogen.',
  },
  {
    question: 'Wat is een professionele woningtaxatie?',
    answer: 'Een professionele taxatie wordt uitgevoerd door een deskundige makelaar of taxateur. Dit geeft een betrouwbare waardebepaling voor hypotheekdoeleinden, verkoop of verzekering. Deze is nauwkeuriger dan een online calculator.',
  },
  {
    question: 'Waarom verschilt de geschatte waarde per regio?',
    answer: 'Huizenprijzen variëren sterk per regio. Amsterdam en Utrecht hebben gemiddeld hogere prijzen dan Groningen of Maastricht. Dit wordt veroorzaakt door vraag en aanbod, bereikbaarheid, voorzieningen en werkgelegenheid.',
  },
  {
    question: 'Hoe vaak worden de marktprijzen bijgewerkt?',
    answer: 'Onze gegevens worden regelmatig bijgewerkt op basis van actuele CBS en Kadaster cijfers. De huidigende data is van Q1 2026. Voor real-time prijsveranderingen raden we aan een makelaar te raadplegen.',
  },
];

export default function WoningwaardePage() {
  return (
    <main className="bg-surface">
      <PageHero
        title="Woningwaarde"
        badge="Prijzen Q1 2026"
        highlightedSubtitle="Bepaal de waarde van jouw woning"
        showBreadcrumbs={true}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Woningwaarde', href: '/woningwaarde' },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Calculator */}
        <div className="mb-16">
          <WoningwaardeCalculator />
        </div>

        {/* Market Data Table */}
        <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm mb-16">
          <div className="bg-gradient-to-r from-primary to-primary-dark p-6">
            <h2 className="text-xl font-semibold text-white">Gemiddelde Huizenprijzen per Regio (Q1 2026)</h2>
            <p className="text-teal-100 text-sm mt-1">Actuele marktgegevens van CBS en Kadaster</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-surface border-b border-border">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">Regio</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">Gem. Prijs</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">Prijsstijging</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">Aantal Te Koop</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">Gem. Verkooptijd</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {woningmarktData.map((data) => (
                  <tr key={data.regio} className="hover:bg-surface transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-text-main">{data.regio}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-primary">{formatCurrency(data.gemPrijs)}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={data.prijsStijging > 0 ? 'text-emerald-600 font-medium' : 'text-red-600 font-medium'}>
                        {data.prijsStijging > 0 ? '+' : ''}{data.prijsStijging.toFixed(1)}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-main">{data.aantalTeKoop.toLocaleString('nl-NL')}</td>
                    <td className="px-6 py-4 text-sm text-text-main">{data.gemVerkooptijd} dagen</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-main mb-8">Tips voor Woningwaardering</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tip 1: WOZ-waarde */}
            <div className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-main mb-2">WOZ-waarde Opvragen</h3>
              <p className="text-text-muted text-sm">
                Je WOZ-beschikking geeft een indicatie van de gemeentelijke waardering van je woning. Dit kan behulpzaam zijn als referentie, maar verschilt vaak van de marktwaarde.
              </p>
            </div>

            {/* Tip 2: Professionele Taxatie */}
            <div className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-main mb-2">Professionele Taxatie</h3>
              <p className="text-text-muted text-sm">
                Voor hypotheek, verkoop of verzekering is een professionele taxatie essentieel. Een erkend taxateur of makelaar geeft een betrouwbare waardebepaling.
              </p>
            </div>

            {/* Tip 3: Makelaarsadvies */}
            <div className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-main mb-2">Makelaarsadvies</h3>
              <p className="text-text-muted text-sm">
                Een ervaren makelaar kent de lokale markt en kan advies geven op basis van vergelijkbare huizen in jouw buurt. Dit kan waardevol zijn voor verkoop.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
          <div className="bg-gradient-to-r from-primary to-primary-dark p-6">
            <h2 className="text-xl font-semibold text-white">Veelgestelde Vragen</h2>
          </div>
          <div className="divide-y divide-border">
            {faqItems.map((item, index) => (
              <details key={index} className="group cursor-pointer hover:bg-surface transition-colors">
                <summary className="flex items-center justify-between px-6 py-4 font-medium text-text-main">
                  <span>{item.question}</span>
                  <svg
                    className="w-5 h-5 text-text-muted transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-text-muted text-sm leading-relaxed">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Klaar voor een professioneel advies?</h2>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
            Onze calculator geeft een snelle schatting. Voor een nauwkeurige waardebepaling raden we een professionele taxatie aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-stone-100 transition-colors">
              Makelaar Opzoeken
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Meer Info
            </button>
          </div>
        </div>
      </section>

      <FAQSchema
        items={faqItems.map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
      />
    </main>
  );
}
