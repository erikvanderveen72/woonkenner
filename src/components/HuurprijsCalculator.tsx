'use client';

import { useState, useMemo } from 'react';
import Calculator from './Calculator';
import { berekenMaxHuurprijs, formatCurrency } from '@/lib/calculations';
import { huurprijsData } from '@/lib/fallback-data';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function HuurprijsCalculator() {
  const [punten, setPunten] = useState(140);
  const [selectedRegio, setSelectedRegio] = useState(huurprijsData[0].regio);

  const berekening = useMemo(() => {
    return berekenMaxHuurprijs(punten);
  }, [punten]);

  const regioData = huurprijsData.find(r => r.regio === selectedRegio);
  const gemiddelde = regioData ? (regioData.gemHuurAppartement + regioData.gemHuurWoning) / 2 : 0;
  const verschil = berekening.maxHuur - gemiddelde;
  const verschilPercentage = gemiddelde > 0 ? ((verschil / gemiddelde) * 100).toFixed(1) : 0;

  // Determine color coding
  let sectorColor = 'bg-red-50 text-red-700 border-red-100';
  let sectorBadgeColor = 'bg-red-100 text-red-800';
  let sectorIcon = null;

  if (berekening.sector === 'Sociale huur') {
    sectorColor = 'bg-green-50 text-green-700 border-green-100';
    sectorBadgeColor = 'bg-green-100 text-green-800';
  } else if (berekening.sector === 'Middenhuur (gereguleerd)') {
    sectorColor = 'bg-amber-50 text-amber-700 border-amber-100';
    sectorBadgeColor = 'bg-amber-100 text-amber-800';
  }

  const result = (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-text-muted font-medium mb-2">Maximale huurprijs</p>
        <p className="text-4xl font-bold text-primary">
          €{formatCurrency(berekening.maxHuur)}
        </p>
        <p className="text-xs text-text-muted mt-1">per maand</p>
      </div>

      <div className={`rounded-lg border p-4 ${sectorColor}`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Sector</span>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${sectorBadgeColor}`}>
            {berekening.sector}
          </span>
        </div>
        <p className="text-xs opacity-75">
          {berekening.sector === 'Sociale huur'
            ? 'Je huurt in de gereguleerde sociale sector. De prijs is beperkt en beschermd.'
            : berekening.sector === 'Middenhuur (gereguleerd)'
            ? 'Je huurt in de middensegment. Dit is deels gereguleerd door de overheid.'
            : 'Je huurt in de vrije sector. De prijs wordt bepaald door vraag en aanbod.'}
        </p>
      </div>

      {regioData && (
        <div className="bg-surface rounded-lg p-4 border border-border">
          <p className="text-sm text-text-muted font-medium mb-3">Vergelijking met {selectedRegio}</p>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-text-muted">Gemiddelde huur regio</span>
                <span className="text-sm font-semibold text-text">€{formatCurrency(gemiddelde)}</span>
              </div>
              <div className="w-full bg-border rounded-full h-2">
                <div
                  className="bg-primary rounded-full h-2 transition-all"
                  style={{ width: `${Math.min((gemiddelde / berekening.maxHuur) * 100, 100)}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-text-muted">Jouw maximale huur</span>
                <span className="text-sm font-semibold text-text">€{formatCurrency(berekening.maxHuur)}</span>
              </div>
              <div className="w-full bg-border rounded-full h-2">
                <div className="bg-primary-dark rounded-full h-2 w-full" />
              </div>
            </div>
          </div>

          {verschil !== 0 && (
            <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
              {verschil > 0 ? (
                <>
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm text-emerald-700 font-medium">
                    +€{formatCurrency(Math.abs(verschil))} ({verschilPercentage}%) ruimer dan gemiddelde
                  </span>
                </>
              ) : (
                <>
                  <TrendingDown className="w-4 h-4 text-orange-600" />
                  <span className="text-sm text-orange-700 font-medium">
                    -€{formatCurrency(Math.abs(verschil))} ({verschilPercentage}%) strakker dan gemiddelde
                  </span>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <Calculator
      title="Huurprijs Calculator"
      description="Bereken je maximale huurprijs op basis van woningpunten"
      result={result}
    >
      <div className="space-y-6">
        {/* Punten Slider */}
        <div>
          <label className="block text-sm font-medium text-text mb-3">
            Woningwaarderingspunten: <span className="font-bold text-primary">{punten}</span>
          </label>
          <input
            type="range"
            min="50"
            max="250"
            value={punten}
            onChange={(e) => setPunten(Number(e.target.value))}
            className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-text-muted mt-2">
            <span>50 punten</span>
            <span>250 punten</span>
          </div>
          <p className="text-xs text-text-muted mt-3">
            Punten worden bepaald door eigenschappen van de woning: oppervlakte, aantal kamers, ouderdom, gebouw- en installatiewerk, en gemakken.
          </p>
        </div>

        {/* Regio Dropdown */}
        <div>
          <label htmlFor="regio" className="block text-sm font-medium text-text mb-2">
            Regio
          </label>
          <select
            id="regio"
            value={selectedRegio}
            onChange={(e) => setSelectedRegio(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-border bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          >
            {huurprijsData.map((regio) => (
              <option key={regio.regio} value={regio.regio}>
                {regio.regio}
              </option>
            ))}
          </select>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
          <p className="text-xs text-blue-700">
            💡 <strong>Tip:</strong> Als je punten verschuift, zie je hoe het je maximale huurprijs en sector beïnvloedt. Een woningtype met meer punten kan duurder zijn.
          </p>
        </div>
      </div>
    </Calculator>
  );
}
