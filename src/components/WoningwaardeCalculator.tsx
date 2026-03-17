'use client';

import { useState } from 'react';
import Calculator from './Calculator';
import { woningmarktData, type WoningmarktData } from '@/lib/fallback-data';

type OnderhoudToestand = 'uitstekend' | 'goed' | 'matig' | 'slecht';

const ONDERHOUDS_FACTOREN: Record<OnderhoudToestand, number> = {
  uitstekend: 1.1,
  goed: 1.0,
  matig: 0.9,
  slecht: 0.75,
};

const BOUWJAAR_FACTOREN: Record<string, number> = {
  'voor-1980': 0.85,
  '1980-1990': 0.9,
  '1990-2000': 0.95,
  '2000-2010': 1.0,
  '2010-2020': 1.05,
  'na-2020': 1.15,
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const AVERAGE_M2_PER_HOME = 95; // Rough average based on typical Dutch homes

export default function WoningwaardeCalculator() {
  const [oppervlakte, setOppervlakte] = useState(100);
  const [regio, setRegio] = useState<WoningmarktData>(woningmarktData[0]);
  const [bouwjaar, setBouwjaar] = useState('2000-2010');
  const [staat, setStaat] = useState<OnderhoudToestand>('goed');

  // Calculate m2 price from average region price
  const m2Price = regio.gemPrijs / AVERAGE_M2_PER_HOME;

  // Base value calculation
  const baseValue = oppervlakte * m2Price;

  // Apply factors
  const onderhoudfactor = ONDERHOUDS_FACTOREN[staat];
  const bouwjaarfactor = BOUWJAAR_FACTOREN[bouwjaar];

  const geschatteWaarde = Math.round(baseValue * onderhoudfactor * bouwjaarfactor);
  const prijs_per_m2 = Math.round(geschatteWaarde / oppervlakte);

  // Calculate comparison with region average
  const verschilMetRegio = geschatteWaarde - regio.gemPrijs;
  const procentVerschil = (verschilMetRegio / regio.gemPrijs) * 100;

  const resultContent = (
    <div className="space-y-6">
      <div>
        <div className="text-sm text-text-muted font-medium mb-2">Geschatte Waarde</div>
        <div className="text-4xl font-bold text-emerald-600">{formatCurrency(geschatteWaarde)}</div>
        <p className="text-xs text-text-muted mt-1">Op basis van lokale marktgegevens en karakteristieken</p>
      </div>

      <div className="border-t border-border pt-4">
        <div className="text-sm text-text-muted font-medium mb-2">Prijs per m²</div>
        <div className="text-2xl font-bold text-sky-600">{formatCurrency(prijs_per_m2)}</div>
      </div>

      <div className="border-t border-border pt-4">
        <div className="text-sm text-text-muted font-medium mb-2">Vergelijking met Regio</div>
        <div className="flex items-baseline gap-2">
          <span className={procentVerschil > 0 ? 'text-emerald-600 font-semibold' : 'text-orange-600 font-semibold'}>
            {procentVerschil > 0 ? '+' : ''}{procentVerschil.toFixed(1)}%
          </span>
          <span className="text-xs text-text-muted">
            vs. regio gemiddelde {formatCurrency(regio.gemPrijs)}
          </span>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
        <p className="text-xs text-blue-800">
          <strong>Let op:</strong> Dit is een grove schatting. Voor een nauwkeurige waardebepaling adviseren we een professionele taxatie.
        </p>
      </div>
    </div>
  );

  return (
    <Calculator
      title="Woningwaarde Calculator"
      description="Bereken een grove schatting van je woningwaarde op basis van marktgegevens"
      result={resultContent}
    >
      <div className="space-y-6">
        {/* Oppervlakte Slider */}
        <div>
          <label className="block text-sm font-semibold text-text-main mb-3">
            Woonoppervlakte: <span className="text-primary font-bold">{oppervlakte} m²</span>
          </label>
          <input
            type="range"
            min="40"
            max="250"
            value={oppervlakte}
            onChange={(e) => setOppervlakte(Number(e.target.value))}
            className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-text-muted mt-2">
            <span>40 m²</span>
            <span>250 m²</span>
          </div>
        </div>

        {/* Regio Dropdown */}
        <div>
          <label htmlFor="regio" className="block text-sm font-semibold text-text-main mb-2">
            Regio / Stad
          </label>
          <select
            id="regio"
            value={regio.regio}
            onChange={(e) => {
              const selected = woningmarktData.find((r) => r.regio === e.target.value);
              if (selected) setRegio(selected);
            }}
            className="w-full px-4 py-2 border border-border rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 bg-white"
          >
            {woningmarktData.map((data) => (
              <option key={data.regio} value={data.regio}>
                {data.regio} - {formatCurrency(data.gemPrijs)}
              </option>
            ))}
          </select>
        </div>

        {/* Bouwjaar Select */}
        <div>
          <label htmlFor="bouwjaar" className="block text-sm font-semibold text-text-main mb-2">
            Bouwjaar
          </label>
          <select
            id="bouwjaar"
            value={bouwjaar}
            onChange={(e) => setBouwjaar(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 bg-white"
          >
            <option value="voor-1980">Vóór 1980</option>
            <option value="1980-1990">1980 - 1990</option>
            <option value="1990-2000">1990 - 2000</option>
            <option value="2000-2010">2000 - 2010</option>
            <option value="2010-2020">2010 - 2020</option>
            <option value="na-2020">Na 2020</option>
          </select>
        </div>

        {/* Staat van Onderhoud */}
        <div>
          <label htmlFor="staat" className="block text-sm font-semibold text-text-main mb-2">
            Staat van Onderhoud
          </label>
          <select
            id="staat"
            value={staat}
            onChange={(e) => setStaat(e.target.value as OnderhoudToestand)}
            className="w-full px-4 py-2 border border-border rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 bg-white"
          >
            <option value="uitstekend">Uitstekend onderhouden (+10%)</option>
            <option value="goed">Goed onderhouden</option>
            <option value="matig">Matig onderhouden (-10%)</option>
            <option value="slecht">Slecht onderhouden (-25%)</option>
          </select>
        </div>

        {/* Info Box */}
        <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
          <p className="text-xs text-amber-800">
            <strong>Hoe werkt het?</strong> Deze calculator berekent een schatting door de gemiddelde m²-prijs van je regio aan te passen voor de karakteristieken van jouw woning.
          </p>
        </div>
      </div>
    </Calculator>
  );
}
