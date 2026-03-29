import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Calculator from "@/components/Calculator";
import { hypotheekAanbieders } from "@/lib/fallback-data";
import { HypotheekCalculator } from "@/components/HypotheekCalculator";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Hypotheek Vergelijken 2026 - Rentes en Aanbieders | Woonkenner.nl",
  description:
    "Vergelijk hypotheken van 8+ aanbieders en vind de beste rente. Hypotheek calculator, NHG voordelen, en tips voor huizenkoper. 2026 actueel.",
  alternates: { canonical: '/hypotheek' },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Hypotheek", href: "/hypotheek" },
];

export default function HypotheekPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Hypotheek"
        badge="Rentes 2026"
        highlightedSubtitle="Vergelijk hypotheken van 8+ aanbieders"
        subtitle="Ontdek de beste hypotheekrentes met NHG, maandlasten calculator, en expert tips voor uw woning."
        showBreadcrumbs
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Info Table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Hypotheek Parameters 2026</h2>
          <div className="bg-white rounded-lg border border-border overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-teal-600 border-b border-border">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Parameter</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Waarde</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-6 py-4 text-sm text-stone-900 font-medium">NHG Grens</td>
                    <td className="px-6 py-4 text-sm text-stone-700">€470.000</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-6 py-4 text-sm text-stone-900 font-medium">Max LTV</td>
                    <td className="px-6 py-4 text-sm text-stone-700">100%</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-6 py-4 text-sm text-stone-900 font-medium">NHG Premie</td>
                    <td className="px-6 py-4 text-sm text-stone-700">0,4% van hypotheekbedrag</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-6 py-4 text-sm text-stone-900 font-medium">Overdrachtsbelasting Starters</td>
                    <td className="px-6 py-4 text-sm text-stone-700">0% (onder 35 jaar, woning tot €555.000)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-6 py-4 text-sm text-stone-900 font-medium">Overdrachtsbelasting Normaal</td>
                    <td className="px-6 py-4 text-sm text-stone-700">2%</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-6 py-4 text-sm text-stone-900 font-medium">Hypotheekrenteaftrek Max</td>
                    <td className="px-6 py-4 text-sm text-stone-700">36,97%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Hypotheek Calculator */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Hypotheek Calculator</h2>
          <HypotheekCalculator />
        </section>

        {/* Rentes Vergelijkingstabel */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Rentes Vergelijking - Maart 2026</h2>
          <div className="bg-white rounded-lg border border-border overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-teal-600 border-b border-border">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Aanbieder</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">10 Jaar</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">20 Jaar</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">30 Jaar</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">NHG Korting</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {hypotheekAanbieders.map((aanbieder, idx) => (
                    <tr key={idx} className="hover:bg-surface transition-colors">
                      <td className="px-6 py-4 text-sm text-stone-900 font-medium">{aanbieder.naam}</td>
                      <td className="px-6 py-4 text-sm text-stone-700">{aanbieder.renteVast10.toFixed(2)}%</td>
                      <td className="px-6 py-4 text-sm text-stone-700">{aanbieder.renteVast20.toFixed(2)}%</td>
                      <td className="px-6 py-4 text-sm text-stone-700">{aanbieder.renteVast30.toFixed(2)}%</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                          -{aanbieder.nhgKorting.toFixed(2)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Tips voor Hypotheekzoeker</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Rentemiddeling */}
            <div className="bg-white rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
                    <span className="text-lg">📊</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-stone-900 mb-2">Rentemiddeling</h3>
                  <p className="text-sm text-stone-600">
                    Spreidt je rente over meerdere periodes. Dit kan voordelig zijn bij stijgende rentetariven.
                  </p>
                </div>
              </div>
            </div>

            {/* NHG Voordelen */}
            <div className="bg-white rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                    <span className="text-lg">🛡️</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-stone-900 mb-2">NHG Voordelen</h3>
                  <p className="text-sm text-stone-600">
                    Voor woningen tot €470.000. Betere rente, lagere kosten en zekerheid bij terugleveringen.
                  </p>
                </div>
              </div>
            </div>

            {/* Annuïteit vs Lineair */}
            <div className="bg-white rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                    <span className="text-lg">📈</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-stone-900 mb-2">Annuïteit vs Lineair</h3>
                  <p className="text-sm text-stone-600">
                    Annuïteit: gelijke maandlasten. Lineair: aflossing constant, rente daalt. Beide hebben voordelen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Veelgestelde Vragen</h2>
          <div className="space-y-4">
            <details className="group bg-white rounded-lg border border-border overflow-hidden shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-stone-900 hover:bg-surface">
                <span>Wat is een hypotheek?</span>
                <span className="transition-transform group-open:rotate-180">➜</span>
              </summary>
              <div className="px-6 py-4 border-t border-border bg-surface text-sm text-stone-700">
                <p>
                  Een hypotheek is een lening voor het kopen van een woning. Je stelt je huis in onderpand bij
                  de bank. Met de lening koop je de woning, en je betaalt de lening maandelijks af met rente.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-border overflow-hidden shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-stone-900 hover:bg-surface">
                <span>Wat is NHG?</span>
                <span className="transition-transform group-open:rotate-180">➜</span>
              </summary>
              <div className="px-6 py-4 border-t border-border bg-surface text-sm text-stone-700">
                <p>
                  NHG staat voor Nationale Hypotheek Garantie. Dit is een garantie van de overheid op
                  hypotheken tot €470.000. Voordelen: lagere rente, betere voorwaarden, en je bent verzekerd
                  tegen waardedaling van de woning.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-border overflow-hidden shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-stone-900 hover:bg-surface">
                <span>Wat is het verschil tussen rente vastperiodes?</span>
                <span className="transition-transform group-open:rotate-180">➜</span>
              </summary>
              <div className="px-6 py-4 border-t border-border bg-surface text-sm text-stone-700">
                <p>
                  Kortere periodes (10 jaar) hebben lagere rentes maar meer risico na afloop. Langere periodes
                  (30 jaar) zijn duurder maar bieden meer zekerheid. Kies op basis van je plannen en
                  risicotolerantie.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-border overflow-hidden shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-stone-900 hover:bg-surface">
                <span>Hoe bereken ik mijn maandlasten?</span>
                <span className="transition-transform group-open:rotate-180">➜</span>
              </summary>
              <div className="px-6 py-4 border-t border-border bg-surface text-sm text-stone-700">
                <p>
                  Gebruik onze calculator hierboven. Je voert de woningprijs, rente en looptijd in, en wij
                  berekenen je maandlasten, totale kosten, en NHG status automatisch.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-border overflow-hidden shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-stone-900 hover:bg-surface">
                <span>Kan ik als starter voordelen krijgen?</span>
                <span className="transition-transform group-open:rotate-180">➜</span>
              </summary>
              <div className="px-6 py-4 border-t border-border bg-surface text-sm text-stone-700">
                <p>
                  Ja! Starters onder de 35 jaar betalen geen overdrachtsbelasting (0% in plaats van 2%). Bij
                  NHG woningen krijg je ook nog betere rentetarieven van banken.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-border overflow-hidden shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-stone-900 hover:bg-surface">
                <span>Wanneer is refinancieren voordelig?</span>
                <span className="transition-transform group-open:rotate-180">➜</span>
              </summary>
              <div className="px-6 py-4 border-t border-border bg-surface text-sm text-stone-700">
                <p>
                  Refinancieren is interessant wanneer de huizenmarkt stijgt (hogere woningwaarde) en rentes
                  dalen. Let op: er zijn afsluitkosten en notariskosten, dus zorg dat de besparing groter is
                  dan de kosten.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg border border-teal-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Klaar om je hypotheek te vergelijken?</h2>
          <p className="text-stone-700 mb-6 max-w-2xl mx-auto">
            Onderzoek alle aanbieders, rentes en bereken je maandlasten met onze calculator. Begin met je
            hypotheekzoeking vandaag nog.
          </p>
          <button className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Vergelijk Nu
            <span>→</span>
          </button>
        </section>
      </div>
    </div>
  );
}
