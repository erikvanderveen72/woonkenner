import { ReactNode } from 'react';

interface CalculatorProps {
  title: string;
  description?: string;
  children: ReactNode;
  result?: ReactNode;
}

export default function Calculator({ title, description, children, result }: CalculatorProps) {
  return (
    <div className="w-full bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
      <div className="bg-gradient-to-r from-primary to-primary-dark p-6">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {description && <p className="text-teal-100 text-sm mt-1">{description}</p>}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-6">{children}</div>
        {result && (
          <div className="p-6 bg-surface border-t lg:border-t-0 lg:border-l border-border">
            <p className="text-sm text-text-muted font-medium mb-2">Resultaat</p>
            <div className="text-3xl md:text-4xl font-bold text-primary">{result}</div>
          </div>
        )}
      </div>
    </div>
  );
}
