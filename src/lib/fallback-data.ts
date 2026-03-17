// === INTERFACES ===

export interface HypotheekAanbieder {
  naam: string;
  renteVast10: number;
  renteVast20: number;
  renteVast30: number;
  nhgKorting: number;
  beoordeling: number;
}

export interface WoningmarktData {
  regio: string;
  gemPrijs: number;
  prijsStijging: number; // percentage year-over-year
  aantalTeKoop: number;
  gemVerkooptijd: number; // dagen
}

export interface Energielabel {
  label: string;
  kleur: string;
  beschrijving: string;
  gemEnergiekosten: number; // per jaar
}

export interface VerduurzamingsMaatregel {
  naam: string;
  beschrijving: string;
  kostenVan: number;
  kostenTot: number;
  besparingPerJaar: number;
  terugverdientijd: number; // jaren
  subsidie2026: number;
}

export interface HuurprijsData {
  regio: string;
  gemHuurAppartement: number;
  gemHuurWoning: number;
  maxHuurSociaal: number;
  liberalisatiegrens: number;
}

// === HYPOTHEEK DATA ===
// Bron: Hypotheekrentes.nl / Independer - maart 2026
export const hypotheekAanbieders: HypotheekAanbieder[] = [
  { naam: 'Rabobank', renteVast10: 3.62, renteVast20: 3.89, renteVast30: 4.15, nhgKorting: 0.15, beoordeling: 4.2 },
  { naam: 'ABN AMRO', renteVast10: 3.55, renteVast20: 3.82, renteVast30: 4.08, nhgKorting: 0.20, beoordeling: 4.1 },
  { naam: 'ING', renteVast10: 3.58, renteVast20: 3.85, renteVast30: 4.12, nhgKorting: 0.15, beoordeling: 4.0 },
  { naam: 'ASN Bank', renteVast10: 3.48, renteVast20: 3.75, renteVast30: 4.02, nhgKorting: 0.20, beoordeling: 4.3 },
  { naam: 'Van Lanschot', renteVast10: 3.70, renteVast20: 3.95, renteVast30: 4.22, nhgKorting: 0.10, beoordeling: 4.4 },
  { naam: 'Aegon', renteVast10: 3.45, renteVast20: 3.72, renteVast30: 3.98, nhgKorting: 0.25, beoordeling: 3.9 },
  { naam: 'Obvion', renteVast10: 3.50, renteVast20: 3.78, renteVast30: 4.05, nhgKorting: 0.20, beoordeling: 4.0 },
  { naam: 'Florius', renteVast10: 3.52, renteVast20: 3.80, renteVast30: 4.06, nhgKorting: 0.15, beoordeling: 3.8 },
];

// === WONINGMARKT DATA ===
// Bron: CBS / Kadaster - Q1 2026
export const woningmarktData: WoningmarktData[] = [
  { regio: 'Amsterdam', gemPrijs: 565000, prijsStijging: 5.8, aantalTeKoop: 4200, gemVerkooptijd: 22 },
  { regio: 'Rotterdam', gemPrijs: 385000, prijsStijging: 6.2, aantalTeKoop: 3800, gemVerkooptijd: 28 },
  { regio: 'Den Haag', gemPrijs: 420000, prijsStijging: 5.5, aantalTeKoop: 2900, gemVerkooptijd: 25 },
  { regio: 'Utrecht', gemPrijs: 485000, prijsStijging: 5.1, aantalTeKoop: 2400, gemVerkooptijd: 20 },
  { regio: 'Groningen', gemPrijs: 295000, prijsStijging: 7.3, aantalTeKoop: 1800, gemVerkooptijd: 35 },
  { regio: 'Eindhoven', gemPrijs: 410000, prijsStijging: 6.8, aantalTeKoop: 2100, gemVerkooptijd: 24 },
  { regio: 'Arnhem', gemPrijs: 345000, prijsStijging: 5.9, aantalTeKoop: 1500, gemVerkooptijd: 30 },
  { regio: 'Maastricht', gemPrijs: 310000, prijsStijging: 4.8, aantalTeKoop: 1600, gemVerkooptijd: 38 },
  { regio: 'Zwolle', gemPrijs: 365000, prijsStijging: 6.0, aantalTeKoop: 1200, gemVerkooptijd: 26 },
  { regio: 'Tilburg', gemPrijs: 355000, prijsStijging: 5.7, aantalTeKoop: 1400, gemVerkooptijd: 29 },
];

// === ENERGIELABELS ===
export const energielabels: Energielabel[] = [
  { label: 'A++++', kleur: '#006400', beschrijving: 'Zeer energiezuinig - nul-op-de-meter', gemEnergiekosten: 200 },
  { label: 'A+++', kleur: '#008000', beschrijving: 'Zeer energiezuinig', gemEnergiekosten: 450 },
  { label: 'A++', kleur: '#00a000', beschrijving: 'Energiezuinig', gemEnergiekosten: 700 },
  { label: 'A+', kleur: '#33cc33', beschrijving: 'Goed geïsoleerd', gemEnergiekosten: 950 },
  { label: 'A', kleur: '#66cc00', beschrijving: 'Bovengemiddeld', gemEnergiekosten: 1200 },
  { label: 'B', kleur: '#99cc00', beschrijving: 'Gemiddeld', gemEnergiekosten: 1500 },
  { label: 'C', kleur: '#cccc00', beschrijving: 'Matig', gemEnergiekosten: 1850 },
  { label: 'D', kleur: '#ffcc00', beschrijving: 'Onder gemiddeld', gemEnergiekosten: 2200 },
  { label: 'E', kleur: '#ff9900', beschrijving: 'Slecht geïsoleerd', gemEnergiekosten: 2600 },
  { label: 'F', kleur: '#ff6600', beschrijving: 'Zeer slecht geïsoleerd', gemEnergiekosten: 3000 },
  { label: 'G', kleur: '#ff0000', beschrijving: 'Niet geïsoleerd', gemEnergiekosten: 3500 },
];

// === VERDUURZAMING MAATREGELEN ===
// Bron: Milieu Centraal / RVO - 2026
export const verduurzamingsmaatregelen: VerduurzamingsMaatregel[] = [
  { naam: 'Dakisolatie', beschrijving: 'Isolatie van het dak of de zoldervloer', kostenVan: 3000, kostenTot: 8000, besparingPerJaar: 600, terugverdientijd: 8, subsidie2026: 1500 },
  { naam: 'Vloerisolatie', beschrijving: 'Isolatie van de begane grondvloer', kostenVan: 2000, kostenTot: 5000, besparingPerJaar: 350, terugverdientijd: 9, subsidie2026: 1000 },
  { naam: 'Spouwmuurisolatie', beschrijving: 'Isolatie van de spouwmuren', kostenVan: 1500, kostenTot: 4000, besparingPerJaar: 450, terugverdientijd: 6, subsidie2026: 900 },
  { naam: 'HR++ Glas', beschrijving: 'Hoogrendementsglas ter vervanging van enkel/dubbel glas', kostenVan: 4000, kostenTot: 12000, besparingPerJaar: 400, terugverdientijd: 15, subsidie2026: 0 },
  { naam: 'Zonnepanelen', beschrijving: '10 panelen, circa 4.000 Wp', kostenVan: 4500, kostenTot: 7000, besparingPerJaar: 800, terugverdientijd: 7, subsidie2026: 0 },
  { naam: 'Warmtepomp (lucht-water)', beschrijving: 'Hybride of volledige warmtepomp', kostenVan: 5000, kostenTot: 15000, besparingPerJaar: 700, terugverdientijd: 12, subsidie2026: 3000 },
  { naam: 'Zonneboiler', beschrijving: 'Warm water via zonne-energie', kostenVan: 2500, kostenTot: 5000, besparingPerJaar: 300, terugverdientijd: 10, subsidie2026: 1000 },
];

// === HUURPRIJZEN ===
// Bron: CBS / Pararius - Q1 2026
export const huurprijsData: HuurprijsData[] = [
  { regio: 'Amsterdam', gemHuurAppartement: 1650, gemHuurWoning: 2200, maxHuurSociaal: 879.66, liberalisatiegrens: 879.66 },
  { regio: 'Rotterdam', gemHuurAppartement: 1250, gemHuurWoning: 1700, maxHuurSociaal: 879.66, liberalisatiegrens: 879.66 },
  { regio: 'Den Haag', gemHuurAppartement: 1350, gemHuurWoning: 1800, maxHuurSociaal: 879.66, liberalisatiegrens: 879.66 },
  { regio: 'Utrecht', gemHuurAppartement: 1450, gemHuurWoning: 1900, maxHuurSociaal: 879.66, liberalisatiegrens: 879.66 },
  { regio: 'Groningen', gemHuurAppartement: 950, gemHuurWoning: 1300, maxHuurSociaal: 879.66, liberalisatiegrens: 879.66 },
  { regio: 'Eindhoven', gemHuurAppartement: 1200, gemHuurWoning: 1600, maxHuurSociaal: 879.66, liberalisatiegrens: 879.66 },
  { regio: 'Arnhem', gemHuurAppartement: 1050, gemHuurWoning: 1400, maxHuurSociaal: 879.66, liberalisatiegrens: 879.66 },
  { regio: 'Maastricht', gemHuurAppartement: 1000, gemHuurWoning: 1350, maxHuurSociaal: 879.66, liberalisatiegrens: 879.66 },
];

// === HYPOTHEEK PARAMETERS 2026 ===
export const hypotheekParameters = {
  maxLTV: 100, // percentage
  nhgGrens: 435000,
  nhgPremie: 0.6, // percentage
  eigenwoningforfait: 0.35, // percentage WOZ-waarde
  hypotheekrenteaftrekMax: 36.97, // percentage
  overdrachtsbelastingStarters: 0, // percentage voor starters < 35 jaar
  overdrachtsbelastingNormaal: 2, // percentage
  overdrachtsbelastingBeleggers: 10.4, // percentage
};
