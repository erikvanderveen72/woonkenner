'use client';

import { useState } from 'react';
import Calculator from './Calculator';
import { energielabels } from '@/lib/fallback-data';

export default function EnergieCalculator() {
  const [huidigLabel, setHuidigLabel] = useState<string>('D');
  const [gewenstLabel, setGewenstLabel] = useState<string>('B');
  const [oppervlakte, setOppervlakte] = useState<number>(100);

  // Find the energy costs for selected labels
  const huidigEnergie = energielabels.find(e => e.label === huidigLabel);
  const gewenstEnergie = energielabels.find(e => e.label === gewenstLabel);

  if (!huidigEnergie || !gewenstEnergie) {
    return null;
  }

  // Calculate based on house size (costs are per 100m2 baseline)
  const baseSizeMultiplier = oppervlakte / 100;
  const huidigKosten = huidigEnergie.gemEnergiekosten * baseSizeMultiplier;
  const nieuweKosten = gewenstEnergie.gemEnergiekosten * baseSizeMultiplier;
  const besparingPerJaar = huidigKosten - nieuweKosten;
  const besparing10Jaar = besparingPerJaar * 10;

  const resultContent = (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-text-muted font-medium mb-2">Huidige kosten (per jaar)</p>
        <p className="text-2xl font-bold text-text-main">€{huidigKosten.toFixed(0)}</p>
      </div>
      <div>
        <p className="text-sm text-text-muted font-medium mb-2">Nieuwe kosten (per jaar)</p>
        <p className="text-2xl font-bold text-text-main">€{nieuweKosten.toFixed(0)}</p>
      </div>
      <div className="border-t border-border pt-4">
        <p className="text-sm text-text-muted font-medium mb-2">Jaarlijkse besparing</p>
        <p className="text-3xl font-bold text-emerald-600">€{besparingPerJaar.toFixed(0)}</p>
      </div>
      <div>
        <p className="text-sm text-text-muted font-medium mb-2">Besparing over 10 jaar</p>
        <p className="text-2xl font-bold text-emerald-600">€{besparing10Jaar.toFixed(0)}</p>
      </div>
    </div>
  );

  return (
    <Calculator
      title="Energie Kostenbesparing Calculator"
      description="Bereken hoeveel je kunt besparen door je energielabel te verbeteren"
      result={resultContent}
    >
      <div className="space-y-6">
        {/* Hudig Label */}
        <div>
          <label className="block text-sm font-semibold text-text-main mb-3">
            Huidig energielabel
          </label>
          <select
            value={huidigLabel}
            onChange={(e) => setHuidigLabel(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-border bg-white text-text-main focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {energielabels.map((label) => (
              <option key={label.label} value={label.label}>
                {label.label} - {label.beschrijving}
              </option>
            ))}
          </select>
        </div>

        {/* Gewenst Label */}
        <div>
          <label className="block text-sm font-semibold text-text-main mb-3">
            Gewenst energielabel
          </label>
          <select
            value={gewenstLabel}
            onChange={(e) => setGewenstLabel(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-border bg-white text-text-main focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {energielabels.map((label) => (
              <option key={label.label} value={label.label}>
                {label.label} - {label.beschrijving}
              </option>
            ))}
          </select>
        </div>

        {/* Oppervlakte */}
        <div>
          <label className="block text-sm font-semibold text-text-main mb-3">
            Oppervlakte woning (m²)
          </label>
          <input
            type="number"
            min="20"
            max="500"
            value={oppervlakte}
            onChange={(e) => setOppervlakte(Number(e.target.value))}
            className="w-full px-4 py-2 rounded-lg border border-border bg-white text-text-main focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Voer oppervlakte in"
          />
          <p className="text-xs text-text-muted mt-2">Typische woning: 80-150 m²</p>
        </div>

        {/* Visuele weergave labels */}
        <div className="bg-surface-alt rounded-lg p-4 mt-6">
          <p className="text-xs font-semibold text-text-muted mb-3 uppercase">Label Vergelijking</p>
          <div className="flex gap-3 items-center">
            <span
              className="inline-block px-3 py-2 rounded-lg font-bold text-white text-sm"
              style={{ backgroundColor: huidigEnergie.kleur }}
            >
              {huidigLabel}
            </span>
            <span className="text-text-muted">→</span>
            <span
              className="inline-block px-3 py-2 rounded-lg font-bold text-white text-sm"
              style={{ backgroundColor: gewenstEnergie.kleur }}
            >
              {gewenstLabel}
            </span>
          </div>
        </div>
      </div>
    </Calculator>
  );
}
