import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Calculator from '@/components/Calculator';
import HuurprijsCalculator from '@/components/HuurprijsCalculator';
import { huurprijsData, hypotheekParameters } from '@/lib/fallback-data';
import { formatCurrency } from '@/lib/calculations';
import FAQSchema from '@/components/FAQSchema';
import { ChevronRight, Info, FileText, AlertCircle } from 'lucide-react';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Huurprijzen 2026 - Check & Vergelijk per Regio | Woonkenner.nl',
  description: 'Bekijk gemiddelde huurprijzen per regio in Nederland 2026. Vergelijk huurprijzen en bereken je maximale huur op basis van het Woningwaarderingsstelsel.',
  keywords: ['huurprijs', 'huurprijzen 2026', 'huur vergelijken', 'woningwaarderingsstelsel', 'sociale huur', 'middenhuur'],
  alternates: { canonical: '/huurprijzen' },
  openGraph: {
    title: 'Huurprijzen 2026 - Check & Vergelijk per Regio | Woonkenner.nl',
    description: 'Vergelijk huurprijzen in Nederlandse regio\'s. Bereken je maximale huurprijs en krijg inzicht in sociale vs vrije sector.',
    type: 'website',
    url: 'https://woonkenner.nl/huurprijzen',
  },
};

const liberalisatiegrens = 932.93;

const faqItems = [
  {
    question: 'Wat is de liberalisatiegrens in 2026?',
    answer: `De liberalisatiegrens in 2026 is €${formatCurrency(liberalisatiegrens)}. Dit is de maximale huurprijs voor sociale huurtransacties. Als een woning daar boven ligt, dan gaat het om vrije sectorhuur waar minder regelgeving van toepassing is.`,
  },
  {
    question: 'Hoe bereken ik mijn maximale huurprijs?',
    answer: 'Je maximale huurprijs wordt bepaald door het Woningwaarderingsstelsel (WWS). Dit systeem geeft punten voor eigenschappen van de woning zoals grootte, ouderdom, aantal kamers en gemakken. Gebruik onze calculator om je maximale huurprijs te bepalen.',
  },
  {
    question: 'Wat is het verschil tussen sociale en vrije sector huur?',
    answer: 'Bij sociale huur tot de liberalisatiegrens is de huurprijs gereguleerd door de overheid. Bij vrije sectorhuur (boven de liberalisatiegrens) bepaalt de verhuurder de prijs. Het is belangrijk om beide te begrijpen bij het zoeken naar een woning.',
  },
  {
    question: 'Welke rechten heb ik als huurder?',
    answer: 'Als huurder heb je verschillende rechten, zoals het recht op een schriftelijk contract, het recht om huurverhoging tegen te spreken en het recht om onderhoud van de verhuurder te eisen. Veel huurdersvereningingen bieden meer informatie.',
  },
  {
    question: 'Wat is de Huurcommissie?',
    answer: 'De Huurcommissie is een onpartijdige organisatie die geschillen tussen huurder en verhuurder kan oplossen. Je kunt hier terecht als je het niet eens bent met een huurverhoging of onderhoudskwesties.',
  },
  {
    question: 'Hoe zit het met huurverhogingen?',
    answer: 'Voor sociale huur is de maximale huurverhoging wettelijk vastgesteld. Voor vrije sectorhuur is er geen maximum, maar moet de verhuurder wel redelijk handelen. Controleer je huurcontract voor de voorwaarden.',
  },
];

export default function HuurprijzenPage() {
  return (
    <>
      <PageHero
        title="Huurprijzen"
        badge="Actueel 2026"
        highlightedSubtitle="Check de huurprijzen in jouw regio"
        showBreadcrumbs
        breadcrumbs={[{ label: 'Huurprijzen', href: '/huurprijzen' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Key Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <p className="text-sm text-text-muted font-medium mb-1">Liberalisatiegrens 2026</p>
                <p className="text-2xl font-bold text-primary">{formatCurrency(liberalisatiegrens)}</p>
                <p className="text-xs text-text-muted mt-2">Maximaal voor sociale huur</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-text-muted font-medium mb-1">Sociale huur</p>
                <p className="text-base font-semibold text-text">Gereguleerd & beschermd</p>
                <p className="text-xs text-text-muted mt-2">Tot €{formatCurrency(liberalisatiegrens)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-text-muted font-medium mb-1">Vrije sector</p>
                <p className="text-base font-semibold text-text">Minder regelgeving</p>
                <p className="text-xs text-text-muted mt-2">Boven €{formatCurrency(liberalisatiegrens)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Huurprijzen Table */}
        <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm mb-16">
          <div className="bg-gradient-to-r from-primary to-primary-dark p-6">
            <h2 className="text-xl font-semibold text-white">Gemiddelde Huurprijzen per Regio (2026)</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-text">Regio</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-text">Appartement (gem.)</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-text">Woning (gem.)</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-text">Max. Sociale Huur</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {huurprijsData.map((item, index) => (
                  <tr key={index} className="hover:bg-surface transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-text">{item.regio}</td>
                    <td className="px-6 py-4 text-sm text-right text-text">€{formatCurrency(item.gemHuurAppartement)}</td>
                    <td className="px-6 py-4 text-sm text-right text-text">€{formatCurrency(item.gemHuurWoning)}</td>
                    <td className="px-6 py-4 text-sm text-right font-medium text-primary">€{formatCurrency(item.maxHuurSociaal)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Huurprijs Calculator */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-text mb-6">Bereken je Maximale Huurprijs</h2>
          <HuurprijsCalculator />
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* WWS Card */}
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-text">Woningwaarderingsstelsel</h3>
            </div>
            <p className="text-sm text-text-muted mb-4">
              Het Woningwaarderingsstelsel (WWS) bepaalt de maximale huurprijs op basis van woonwaarden. Punten worden gegeven voor onder andere oppervlakte, aantal kamers en faciliteiten.
            </p>
            <a href="#" className="text-sm font-medium text-primary hover:text-primary-dark transition-colors flex items-center gap-1">
              Lees meer <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Huurderrechten Card */}
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-text">Rechten van Huurders</h3>
            </div>
            <p className="text-sm text-text-muted mb-4">
              Huurders hebben verschillende rechten, van het recht op een schriftelijk contract tot bescherming tegen onredelijke huurverhogingen. Zet deze rechten voor jezelf in.
            </p>
            <a href="#" className="text-sm font-medium text-primary hover:text-primary-dark transition-colors flex items-center gap-1">
              Meer informatie <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Huurcommissie Card */}
          <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-text">Huurcommissie</h3>
            </div>
            <p className="text-sm text-text-muted mb-4">
              Bij geschillen tussen huurder en verhuurder kun je terecht bij de Huurcommissie. Dit is een onpartijdige organisatie die conflicten helpt oplossen.
            </p>
            <a href="#" className="text-sm font-medium text-primary hover:text-primary-dark transition-colors flex items-center gap-1">
              Bezoek website <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm mb-16">
          <div className="bg-gradient-to-r from-primary to-primary-dark p-6">
            <h2 className="text-xl font-semibold text-white">Veel Gestelde Vragen over Huurprijzen</h2>
          </div>
          <div className="divide-y divide-border">
            {faqItems.map((item, index) => (
              <details key={index} className="group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-surface transition-colors">
                  <h3 className="font-semibold text-text group-open:text-primary">{item.question}</h3>
                  <ChevronRight className="w-5 h-5 text-text-muted group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-4 pt-0 bg-surface text-sm text-text-muted">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-xl border border-primary/20 p-8 text-center">
          <h2 className="text-2xl font-bold text-text mb-2">Klaar om een woning te zoeken?</h2>
          <p className="text-text-muted mb-6 max-w-2xl mx-auto">
            Nu je de huurprijzen kent en weet wat je maximale huurprijs is, kun je zelfbewust op zoek gaan naar je perfecte woning. Veel succes!
          </p>
          <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white bg-primary hover:bg-primary-dark transition-colors">
            Woningen bekijken
          </button>
        </div>
      </div>

      {/* FAQ Schema */}
      <FAQSchema items={faqItems} />
    </>
  );
}
