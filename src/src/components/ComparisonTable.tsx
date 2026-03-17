'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Column {
  key: string;
  label: string;
  render?: (value: unknown, row: Record<string, unknown>) => React.ReactNode;
}

interface ComparisonTableProps {
  columns: Column[];
  data: Record<string, unknown>[];
  title?: string;
}

export default function ComparisonTable({ columns, data, title }: ComparisonTableProps) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const sortedData = sortKey
    ? [...data].sort((a, b) => {
        const aVal = a[sortKey];
        const bVal = b[sortKey];
        if (typeof aVal === 'number' && typeof bVal === 'number') {
          return sortAsc ? aVal - bVal : bVal - aVal;
        }
        return sortAsc
          ? String(aVal).localeCompare(String(bVal))
          : String(bVal).localeCompare(String(aVal));
      })
    : data;

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-stone-200 overflow-hidden">
      {title && (
        <div className="px-6 py-4 border-b border-stone-200 bg-stone-50">
          <h3 className="text-lg font-bold text-stone-900">{title}</h3>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50">
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key)}
                  className="px-4 py-3 text-left font-semibold text-stone-700 cursor-pointer hover:text-teal-700 transition-colors whitespace-nowrap"
                >
                  <span className="inline-flex items-center gap-1">
                    {col.label}
                    {sortKey === col.key ? (
                      sortAsc ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                    ) : (
                      <ChevronDown size={14} className="text-stone-300" />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, idx) => (
              <tr key={idx} className="border-b border-stone-100 last:border-0 hover:bg-teal-50/50 transition-colors">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 text-stone-700">
                    {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
