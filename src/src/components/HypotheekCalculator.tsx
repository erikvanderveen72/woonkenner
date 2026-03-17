'use client';

import { useState, useMemo } from 'react';
import Calculator from './Calculator';
import { berekenHypotheek, formatCurrency } from '@/lib/calculations';

export function HypotheekCalculator() {
  const [woningprijs, setWoningprijs] = useState(400000);
  const [rentevastperiode, setRenteVastperiode] = useState('30');
  const [isStarter, setIsStarter] = useState(false);

  // Indicatieve rentes op basis van marktgemiddelde - maart 2026
  // Bron: Hypotheekrente.nl / individuele aanbieders
  const rente = parseFloat(
    {
      '10': '3.55',
      '20': '4.00',
      '30': '4.30',
    }[rentevastperiode] || '4.30'
  );

  const berekening = useMemo(() => {
    return berekenHypotheek(woningprijs, rente, parseInt(rentevastperiode), isStarter);
  }, [woningprijs, rente, rentevastperiode, isStarter]);

  const resultContent = (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-text-muted font-medium mb-2">Maandlasten</p>
        <p className="text-3xl md:text-4xl font-bold text-primary">
          €{formatCurrency(berekening.maandlasten)}
        </p>
        <p className="text-xs text-text-muted mt-1">per maand (incl. rente)</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-text-muted font-medium mb-1">Totale Kosten</p>
          <p className="text-xl font-bold text-stone-900">
            €{formatCurrency(berekening.totaleKosten)}
          </p>
        </div>
        <div>
          <p className="text-xs text-text-muted font-medium mb-1">NHG Status</p>
          <p className={`text-xl font-bold ${berekening.isNHG ? 'text-emerald-600' : 'text-orange-600'}`}>
            {berekening.isNHG ? 'Ja ✓' : 'Nee'}
          </p>
        </div>
      </div>

      {berekening.nhgPremie > 0 && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
          <p className="text-xs text-text-muted font-medium mb-1">NHG Premie</p>
          <p className="font-semibold text-stone-900">€{formatCurrency(berekening.nhgPremie)}</p>
          <p className="text-xs text-text-muted mt-1">Eenmalig aan hypotheekbedrag toegevoegd</p>
        </div>
      )}

      <div className="border-t border-border pt-4">
        <p className="text-xs text-text-muted font-medium mb-2">Overdrachtsbelasting</p>
        <p className="text-lg font-semibold text-stone-900">
          €{formatCurrency(berekening.overdrachtsbelasting)}
        </p>
        {isStarter && (
          <p className="text-xs text-emerald-600 mt-1">Starter korting: 0% ingevuld</p>
        )}
      </div>
    </div>
  );

  return (
    <Calculator
      title="Hypotheek Calculator"
      description="Vul je gegevens in en zie je maandlasten in real-time"
      result={resultContent}
    >
      <div className="space-y-6">
        {/* Woningprijs Slider */}
        <div>
          <label className="block text-sm font-semibold text-stone-900 mb-3">
            Woningprijs: €{formatCurrency(woningprijs)}
          </label>
          <input
            type="range"
            min="100000"
            max="1000000"
            step="10000"
            value={woningprijs}
            onChange={(e) => setWoningprijs(parseInt(e.target.value))}
            className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-text-muted mt-2">
            <span>€100.000</span>
            <span>€1.000.000</span>
          </div>
        </div>

        {/* Rente Vast Periode */}
        <div>
          <label className="block text-sm font-semibold text-stone-900 mb-3">Rente Vast Periode</label>
          <select
            value={rentevastperiode}
            onChange={(e) => setRenteVastperiode(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-border bg-white text-stone-900 font-medium focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="10">10 Jaar - 3,55%</option>
            <option value="20">20 Jaar - 4,00%</option>
            <option value="30">30 Jaar - 4,30%</option>
          </select>
        </div>

        {/* Starter Checkbox */}
        <div className="flex items-center gap-3 bg-surface rounded-lg p-4">
          <input
            type="checkbox"
            id="starter"
            checked={isStarter}
            onChange={(e) => setIsStarter(e.target.checked)}
            className="w-5 h-5 rounded border-border cursor-pointer accent-primary"
          />
          <label htmlFor="starter" className="flex-1 text-sm font-medium text-stone-900 cursor-pointer">
            Ik ben een starter (onder 35 jaar)
          </label>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-xs text-blue-900 font-medium">
            💡 Hint: Aanpassingen worden direct berekend. Alle bedragen zijn voorbeelden gebaseerd op huidige
            rentes.
          </p>
        </div>
      </div>
    </Calculator>
  );
}
