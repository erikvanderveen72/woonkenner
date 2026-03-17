import { hypotheekParameters } from './fallback-data';

const round = (value: number, decimals: number = 2): number =>
  Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);

export interface HypotheekBerekening {
  woningprijs: number;
  hypotheekBedrag: number;
  maandlasten: number;
  totaleKosten: number;
  rentePerMaand: number;
  aflossing: number;
  isNHG: boolean;
  nhgPremie: number;
  overdrachtsbelasting: number;
}

export function berekenHypotheek(
  woningprijs: number,
  rente: number, // jaarpercentage
  looptijd: number = 30, // jaren
  isStarter: boolean = false,
): HypotheekBerekening {
  const hypotheekBedrag = woningprijs; // 100% LTV
  const isNHG = woningprijs <= hypotheekParameters.nhgGrens;
  const nhgPremie = isNHG ? round(hypotheekBedrag * (hypotheekParameters.nhgPremie / 100)) : 0;
  const overdrachtsbelasting = isStarter ? 0 : round(woningprijs * (hypotheekParameters.overdrachtsbelastingNormaal / 100));

  const maandRente = rente / 100 / 12;
  const aantalTermijnen = looptijd * 12;
  const maandlasten = round(hypotheekBedrag * (maandRente * Math.pow(1 + maandRente, aantalTermijnen)) / (Math.pow(1 + maandRente, aantalTermijnen) - 1));
  const totaleKosten = round(maandlasten * aantalTermijnen);
  const rentePerMaand = round(hypotheekBedrag * maandRente);
  const aflossing = round(maandlasten - rentePerMaand);

  return { woningprijs, hypotheekBedrag, maandlasten, totaleKosten, rentePerMaand, aflossing, isNHG, nhgPremie, overdrachtsbelasting };
}

export interface WoningwaardeSchatting {
  geschatteWaarde: number;
  waardePerM2: number;
  vergelijkingRegio: string;
  prijsStijging: number;
}

export function schatWoningwaarde(
  oppervlakte: number, // m2
  regioPrijsPerM2: number,
  regioNaam: string,
  prijsStijging: number,
): WoningwaardeSchatting {
  const geschatteWaarde = round(oppervlakte * regioPrijsPerM2, 0);
  return { geschatteWaarde, waardePerM2: regioPrijsPerM2, vergelijkingRegio: regioNaam, prijsStijging };
}

export interface EnergiebesparingResultaat {
  huidigeKosten: number;
  besparingPerJaar: number;
  nieuweKosten: number;
  totaleInvestering: number;
  totaleSubsidie: number;
  nettoInvestering: number;
  terugverdientijd: number;
}

export function berekenEnergiebesparing(
  huidigLabel: string,
  gewenstLabel: string,
  energielabels: Array<{ label: string; gemEnergiekosten: number }>,
  maatregelen: Array<{ kostenVan: number; besparingPerJaar: number; subsidie2026: number; terugverdientijd: number }>,
): EnergiebesparingResultaat {
  const huidig = energielabels.find(e => e.label === huidigLabel);
  const gewenst = energielabels.find(e => e.label === gewenstLabel);

  const huidigeKosten = huidig?.gemEnergiekosten || 2000;
  const nieuweKosten = gewenst?.gemEnergiekosten || 1000;
  const besparingPerJaar = huidigeKosten - nieuweKosten;

  const totaleInvestering = maatregelen.reduce((sum, m) => sum + m.kostenVan, 0);
  const totaleSubsidie = maatregelen.reduce((sum, m) => sum + m.subsidie2026, 0);
  const nettoInvestering = totaleInvestering - totaleSubsidie;
  const terugverdientijd = besparingPerJaar > 0 ? round(nettoInvestering / besparingPerJaar, 1) : 0;

  return { huidigeKosten, besparingPerJaar, nieuweKosten, totaleInvestering, totaleSubsidie, nettoInvestering, terugverdientijd };
}

export function berekenMaxHuurprijs(punten: number): { maxHuur: number; sector: string } {
  // Woningwaarderingsstelsel 2026 - vereenvoudigd
  if (punten <= 148) {
    // Sociale huur: max ~€879,66
    const maxHuur = Math.min(round(punten * 5.94), 879.66);
    return { maxHuur, sector: 'Sociale huur' };
  } else if (punten <= 186) {
    // Middenhuur (Wet betaalbare huur 2024)
    const maxHuur = round(punten * 5.94);
    return { maxHuur, sector: 'Middenhuur (gereguleerd)' };
  } else {
    const maxHuur = round(punten * 5.94);
    return { maxHuur, sector: 'Vrije sector' };
  }
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('nl-NL', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);
}

export function formatPercentage(value: number): string {
  return new Intl.NumberFormat('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
}
