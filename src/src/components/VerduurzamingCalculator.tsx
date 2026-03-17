'use client';
import { useState } from 'react';
import Calculator from './Calculator';
import { verduurzamingsmaatregelen } from '@/lib/fallback-data';
import { formatCurrency } from '@/lib/calculations';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function VerduurzamingCalculator() {
  const [selectedMaatregelen, setSelectedMaatregelen] = useState<string[]>([]);

  const toggleMaatregel = (naam: string) => {
    setSelectedMaatregelen((prev) =>
      prev.includes(naam) ? prev.filter((m) => m !== naam) : [...prev, naam]
    );
  };

  const getGekozenMaatregelen = () => {
    return verduurzamingsmaatregelen.filter((m) => selectedMaatregelen.includes(m.naam));
  };

  const calculations = () => {
    const gekozen = getGekozenMaatregelen();

    if (gekozen.length === 0) {
      return null;
    }

    const totaleInvestering = gekozen.reduce((sum, m) => sum + Math.round((m.kostenVan + m.kostenTot) / 2), 0);
    const totaleSubsidie = gekozen.reduce((sum, m) => sum + m.subsidie2026, 0);
    const nettaKosten = totaleInvestering - totaleSubsidie;
    const totaleBesparing = gekozen.reduce((sum, m) => sum + m.besparingPerJaar, 0);

    // Weighted average payback period
    const terugverdientijd =
      totaleBesparing > 0
        ? Math.round((nettaKosten / totaleBesparing) * 10) / 10
        : 0;

    return {
      totaleInvestering,
      totaleSubsidie,
      nettaKosten,
      totaleBesparing,
      terugverdientijd,
    };
  };

  const calc = calculations();

  const resultContent = calc ? (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-stone-600 mb-1">Totale investering</p>
        <p className="text-2xl font-bold text-stone-900">{formatCurrency(calc.totaleInvestering)}</p>
      </div>

      {calc.totaleSubsidie > 0 && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
          <p className="text-sm text-stone-600 mb-1">ISDE Subsidie</p>
          <p className="text-xl font-bold text-emerald-600">+{formatCurrency(calc.totaleSubsidie)}</p>
        </div>
      )}

      <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-sm text-stone-600 mb-1">Netto kosten</p>
        <p className="text-xl font-bold text-amber-700">{formatCurrency(calc.nettaKosten)}</p>
      </div>

      <div className="border-t border-stone-200 pt-4 space-y-3">
        <div>
          <p className="text-sm text-stone-600 mb-1">Besparing per jaar</p>
          <p className="text-lg font-bold text-emerald-600">{formatCurrency(calc.totaleBesparing)}</p>
        </div>

        <div>
          <p className="text-sm text-stone-600 mb-1">Terugverdientijd</p>
          <p className="text-lg font-bold text-stone-900">{calc.terugverdientijd} jaar</p>
        </div>
      </div>

      {calc.terugverdientijd <= 10 && (
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg flex gap-2">
          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-800">Prima investeringskans! Terug verdiend in {calc.terugverdientijd} jaar.</p>
        </div>
      )}
    </div>
  ) : (
    <div className="text-center py-8">
      <AlertCircle className="w-12 h-12 text-stone-400 mx-auto mb-3" />
      <p className="text-stone-600">Selecteer maatregelen om je besparing te zien</p>
    </div>
  );

  return (
    <Calculator
      title="Verduurzaming Calculator"
      description="Selecteer je maatregelen en zie direct je besparing en ROI"
      result={resultContent}
    >
      <div className="space-y-4">
        {verduurzamingsmaatregelen.map((maatregel) => {
          const isSelected = selectedMaatregelen.includes(maatregel.naam);
          const kostenGemiddelde = Math.round((maatregel.kostenVan + maatregel.kostenTot) / 2);

          return (
            <label
              key={maatregel.naam}
              className="flex items-start gap-3 p-4 border border-stone-200 rounded-lg hover:bg-stone-50 cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => toggleMaatregel(maatregel.naam)}
                className="w-5 h-5 mt-1 rounded border-stone-300 text-teal-600 cursor-pointer"
              />

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-stone-900">{maatregel.naam}</h3>
                  <span className="text-sm font-semibold text-stone-600 ml-2">
                    {formatCurrency(kostenGemiddelde)}
                  </span>
                </div>

                <p className="text-sm text-stone-600 mb-2">{maatregel.beschrijving}</p>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-stone-500">Besparing:</span>
                    <p className="font-semibold text-stone-900">{formatCurrency(maatregel.besparingPerJaar)}/jaar</p>
                  </div>
                  <div>
                    <span className="text-stone-500">Terugverdientijd:</span>
                    <p className="font-semibold text-stone-900">{maatregel.terugverdientijd} jaar</p>
                  </div>
                  {maatregel.subsidie2026 > 0 && (
                    <div className="col-span-2">
                      <span className="text-stone-500">ISDE Subsidie 2026:</span>
                      <p className="font-semibold text-teal-600">+{formatCurrency(maatregel.subsidie2026)}</p>
                    </div>
                  )}
                </div>
              </div>
            </label>
          );
        })}
      </div>
    </Calculator>
  );
}
