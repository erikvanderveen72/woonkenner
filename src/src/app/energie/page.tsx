import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import EnergieCalculator from '@/components/EnergieCalculator';
import FAQSchema from '@/components/FAQSchema';
import { energielabels } from '@/lib/fallback-data';

export const metadata: Metadata = {
  title: 'Energielabel Woning 2026 - Kosten & Besparing | Woonkenner.nl',
  description: 'Ontdek wat je energielabel betekent. Vergelijk energiekosten per label, bereken besparing bij verduurzaming en lees tips voor lagere energiekosten.',
};

export const revalidate = 3600;

export default function EnergiePage() {
  const breadcrumbs = [
    { label: 'Energie', href: '/energie' }
  ];

  const faqItems = [
    {
      question: 'Wat betekent het energielabel van een woning?',
      answer: 'Het energielabel geeft aan hoe energiezuinig een woning is. Labels lopen van A++++ (zeer zuinig) tot G (zeer inefficiënt). Hoe beter het label, hoe lager je energiekosten zullen zijn.',
    },
    {
      question: 'Hoe kan ik mijn energielabel verbeteren?',
      answer: 'Je kunt je energielabel verbeteren door isolatiemaatregelen (dakisolatie, spouwmuurisolatie), ramen vervangen voor dubbel of HR-glas, zonnepanelen installeren, of een warmtepomp aanschaffen. Controleer welke subsidies beschikbaar zijn.',
    },
    {
      question: 'Wat is een energieprestatiecoëfficiënt (EPC)?',
      answer: 'De EPC is een maat voor de energieprestatie van je woning. Deze bepaalt welk energielabel je woning krijgt. Een lagere EPC betekent lagere energiekosten. Voor nieuwbouw moet de EPC ≤ 0,4 zijn.',
    },
    {
      question: 'Hoe vaak moet een energielabel worden vernieuwd?',
      answer: 'Een energielabel is geldig voor 10 jaar. Je moet een nieuw energielabel aanvragen als je grote verbouwingen doet aan de woning of als het label is verlopen. Bij aankoop is een actueel label verplicht.',
    },
    {
      question: 'Bespaar ik echt geld met een beter energielabel?',
      answer: 'Ja, besparingen zijn reëel. Een woning met label A bespaart gemiddeld €300-600 per jaar op energie vergeleken met label D. Over 10 jaar kan dit al snel €3.000-6.000 betekenen, plus stijging van huiswaarde.',
    },
    {
      question: 'Welke subsidies zijn er voor verduurzaming in 2026?',
      answer: 'Nederland biedt diverse subsidies via regelingen zoals de ISDE (Investeringssubsidie Duurzame Energie), zonnepanelensubsidie en warmtepompsubsidie. Controleer Stimuleringsregeling.nl voor actuele mogelijkheden.',
    },
  ];

  return (
    <>
      <PageHero
        title="Energielabel"
        badge="Tarieven 2026"
        highlightedSubtitle="Ontdek wat je energielabel betekent"
        showBreadcrumbs={true}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Energielabel Overview Table */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-8">Energielabel Overzicht</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-surface-alt border-b border-border">
                  <th className="px-4 py-3 text-left font-semibold text-text-main">Label</th>
                  <th className="px-4 py-3 text-left font-semibold text-text-main">Beschrijving</th>
                  <th className="px-4 py-3 text-left font-semibold text-text-main">Gem. Energiekosten/jaar</th>
                </tr>
              </thead>
              <tbody>
                {energielabels.map((item, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-surface-alt transition-colors">
                    <td className="px-4 py-4">
                      <span
                        className="inline-block px-3 py-1 rounded-lg font-bold text-white text-sm"
                        style={{ backgroundColor: item.kleur }}
                      >
                        {item.label}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-text-muted">{item.beschrijving}</td>
                    <td className="px-4 py-4 font-semibold text-text-main">€{item.gemEnergiekosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Energie Calculator */}
        <section className="mb-20">
          <EnergieCalculator />
        </section>

        {/* Info Section */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-8">Wat Betekent Je Energielabel?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-border">
              <h3 className="text-lg font-semibold text-text-main mb-4">Waarom is het energielabel belangrijk?</h3>
              <p className="text-text-muted leading-relaxed">
                Het energielabel bepaalt hoe duur het is om je huis warm te houden en van stroom te voorzien. Een beter label (dichter bij A++++) betekent lagere maandelijkse energierekeningen en meer comfort. Bij woningaankoop kun je op basis van het label inschatten welke jaarlijkse energiekosten je hebt.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-border">
              <h3 className="text-lg font-semibold text-text-main mb-4">Hoe verbeter je je energielabel?</h3>
              <p className="text-text-muted leading-relaxed">
                Verduurzamingsmaatregelen zoals dakisolatie, betere ramen, zonnepanelen en warmtepompen helpen je energielabel aanzienlijk te verbeteren. Veel gemeenten en het Rijk bieden subsidies. Investeren in verduurzaming levert niet alleen lagere lasten op, maar ook waardestijging van je woning.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <FAQSchema items={faqItems} />
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Klaar voor verduurzaming?</h2>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
            Ontdek welke subsidies beschikbaar zijn voor jouw woning en bereken de besparing op je energierekening.
          </p>
          <a
            href="/verduurzaming"
            className="inline-block bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
          >
            Verduurzamingsopties verkennen
          </a>
        </section>
      </div>
    </>
  );
}
