import { Metadata } from 'next';
import Link from 'next/link';
import {
  Home,
  BarChart3,
  Zap,
  Key,
  Leaf,
  SunDim,
  Layers,
  Frame,
  Award,
  Banknote,
  TrendingDown,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import StatsBar from '@/components/StatsBar';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Woonkenner.nl - Vergelijk Hypotheken, Woningwaarde & Energie 2026',
  description:
    'Het onafhankelijke platform voor woonvergelijkingen. Vergelijk hypotheken, woningwaarde en energiekosten. Bespaar slim op je woonkosten.',
  alternates: { canonical: '/' },
};

export const revalidate = 60;

export default function HomePage() {
  const trustItems = [
    {
      icon: Award,
      title: 'Onafhankelijk',
      description: 'Geen commerciële banden met aanbieders',
    },
    {
      icon: Banknote,
      title: 'Gratis',
      description: 'Volledig gratis vergelijken en berekenen',
    },
    {
      icon: TrendingDown,
      title: 'Actueel',
      description: 'Gegevens dagelijks bijgewerkt',
    },
    {
      icon: CheckCircle,
      title: 'Betrouwbaar',
      description: 'Vertrouwd door meer dan 100.000 gebruikers',
    },
  ];

  const topics = [
    {
      icon: Home,
      title: 'Hypotheek',
      description:
        'Vergelijk hypotheken van alle aanbieders en vind het beste tarief voor jouw situatie.',
      href: '/hypotheek',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: BarChart3,
      title: 'Woningwaarde',
      description:
        'Schat de waarde van je huis in met behulp van recente marktdata en vergelijkbare objecten.',
      href: '/woningwaarde',
      gradient: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Zap,
      title: 'Energie',
      description:
        'Ontdek je energieverbruik en mogelijkheden om energie en kosten te besparen.',
      href: '/energie',
      gradient: 'from-amber-500 to-amber-600',
    },
    {
      icon: Key,
      title: 'Huurprijzen',
      description:
        'Bekijk huurniveaus in je buurt en vergelijk huisprijzen op locatie.',
      href: '/huurprijzen',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: Leaf,
      title: 'Verduurzaming',
      description:
        'Leer over duurzame woningverbeteringen en beschikbare subsidies.',
      href: '/verduurzaming',
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: SunDim,
      title: 'Raamdecoratie',
      description:
        'Vergelijk gordijnen, jaloezieën, shutters en rolgordijnen op prijs en kwaliteit.',
      href: '/raamdecoratie',
      gradient: 'from-indigo-500 to-violet-600',
    },
    {
      icon: Layers,
      title: 'Vloeren',
      description:
        'PVC, laminaat, parket of tegels? Vergelijk vloertypen op prijs en duurzaamheid.',
      href: '/vloeren',
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      icon: Frame,
      title: 'Kozijnen',
      description:
        'Kunststof, aluminium of hout? Vergelijk kozijnen op isolatie, prijs en levensduur.',
      href: '/kozijnen',
      gradient: 'from-sky-500 to-blue-600',
    },
  ];

  const faqItems = [
    {
      question: 'Wat is Woonkenner.nl en hoe werkt het?',
      answer:
        'Woonkenner.nl is een onafhankelijk platform waar je hypotheken, woningwaarden, energiekosten en huurprijzen kunt vergelijken. Je vult je gegevens in, en ons algoritme berekent automatisch de beste opties voor jouw situatie.',
    },
    {
      question: 'Is Woonkenner.nl echt gratis?',
      answer:
        'Ja, het gebruik van Woonkenner.nl is volledig gratis. We verdienen geld door aanbieders een commissie te bieden, niet door jou te belasten. Je betaalt nooit iets voor vergelijken of berekenen.',
    },
    {
      question: 'Hoe actueel zijn de gegevens op het platform?',
      answer:
        'Onze gegevens worden dagelijks bijgewerkt met de meest recente informatie van aanbieders en marktbronnen. We streven ernaar om altijd de meest accurate en actuele gegevens te presenteren.',
    },
    {
      question: 'Kan ik mijn hypotheek direct via Woonkenner.nl afsluiten?',
      answer:
        'Woonkenner.nl is een vergelijkingsplatform. Je kunt hypotheken, producten en diensten vergelijken, maar je sluit deze altijd rechtstreeks af met de aanbieder. Wij bemiddelen alleen informatie.',
    },
    {
      question: 'Hoe berekent Woonkenner.nl de woningwaarde?',
      answer:
        'We gebruiken geavanceerde algoritmes gebaseerd op recente verkopen in je buurt, woningkenmerken, markttrends en economische factoren om een realistische schatting van je woningwaarde te geven.',
    },
    {
      question: 'Is mijn persoonlijke informatie veilig op Woonkenner.nl?',
      answer:
        'Ja, we nemen privacy en veiligheid zeer serieus. Alle gegevens worden versleuteld opgeslagen en we voldoen aan de GDPR en andere privacywetgeving. Je gegevens worden nooit zonder je toestemming met derden gedeeld.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-stone-950 py-20 sm:py-32">
        {/* Animated Gradient Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Teal Blob */}
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 opacity-20 blur-3xl animate-pulse" />

          {/* Orange Blob */}
          <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 opacity-20 blur-3xl animate-pulse" style={{animationDelay: '0.5s'}} />

          {/* Emerald Blob */}
          <div className="absolute bottom-0 left-1/2 -ml-40 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 opacity-20 blur-3xl animate-pulse" style={{animationDelay: '1s'}} />

          {/* Plus Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="plusPattern"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <line x1="10" y1="0" x2="10" y2="20" stroke="white" />
                  <line x1="0" y1="10" x2="20" y2="10" stroke="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#plusPattern)" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          {/* Badge */}
          <div className="mb-8 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-300">
            Actueel maart 2026
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Slim Wonen
          </h1>

          {/* Gradient Subtitle */}
          <div className="mb-6 bg-gradient-to-r from-teal-400 via-emerald-400 to-orange-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Vergelijk. Bereken. Bespaar.
          </div>

          {/* Subtitle Text */}
          <p className="mb-10 max-w-2xl mx-auto text-lg text-stone-300">
            Het onafhankelijke platform voor slimme woonkeuzes. Vergelijk hypotheken,
            woningwaarden, energiekosten en meer. Volledig gratis, geen verborgen
            kosten.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/hypotheek"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-stone-950 transition-all hover:shadow-xl hover:shadow-white/20 hover:scale-105"
            >
              Start vergelijking
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#vergelijkingen"
              className="inline-flex items-center justify-center rounded-lg border-2 border-stone-300 px-8 py-3 font-semibold text-stone-300 transition-all hover:bg-stone-300/10 hover:text-white"
            >
              Hoe werkt het?
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* Trust Indicators */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-teal-100 p-3">
                    <Icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="text-stone-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Topics Grid */}
      <section id="vergelijkingen" className="bg-stone-50 py-16 sm:py-20 scroll-mt-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-stone-900">
              Populaire Vergelijkingen
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-stone-600">
              Kies een onderwerp en begin met vergelijken. Alle tools zijn volledig
              gratis en onafhankelijk.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <Link key={index} href={topic.href}>
                  <div className="group h-full rounded-xl bg-white p-8 transition-all hover:shadow-xl hover:scale-105 cursor-pointer border border-stone-200">
                    {/* Icon Container */}
                    <div
                      className={`mb-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-br ${topic.gradient} p-3 text-white`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-xl font-semibold text-stone-900 group-hover:text-teal-600 transition-colors">
                      {topic.title}
                    </h3>

                    {/* Description */}
                    <p className="text-stone-600 mb-4">{topic.description}</p>

                    {/* Arrow */}
                    <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-1 transition-transform">
                      Verkennen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-stone-900">
              Veelgestelde Vragen
            </h2>
            <p className="text-lg text-stone-600">
              Antwoorden op de meest gestelde vragen over Woonkenner.nl
            </p>
          </div>

          <FAQSchema items={faqItems} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl bg-stone-900 px-8 py-12 text-center sm:px-12 sm:py-16">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Klaar om slim woningbeslissingen te nemen?
            </h2>
            <p className="mb-8 text-lg text-stone-300">
              Vergelijk nu en ontdek hoeveel je kunt besparen op woonkosten.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/hypotheek"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 px-8 py-3 font-semibold text-white transition-all hover:shadow-xl hover:shadow-teal-500/50 hover:scale-105"
              >
                Start Vergelijking
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center justify-center rounded-lg border-2 border-stone-400 px-8 py-3 font-semibold text-stone-300 transition-all hover:bg-stone-800 hover:border-white hover:text-white">
                Meer Informatie
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
