'use client';
import { useState, useEffect, useRef } from 'react';
import { TrendingDown, TrendingUp, Home, Zap, Euro } from 'lucide-react';

interface Stat {
  label: string;
  value: string;
  icon: React.ElementType;
  trend?: { direction: 'up' | 'down'; text: string };
}

const stats: Stat[] = [
  { label: 'Gem. hypotheekrente', value: '4,00%', icon: Home, trend: { direction: 'down', text: '20 jr vast' } },
  { label: 'Gem. woningprijs', value: '€ 438.000', icon: Euro, trend: { direction: 'up', text: '+5,6% j/j' } },
  { label: 'Energielabel A', value: '34%', icon: Zap },
  { label: 'Gem. huurprijs', value: '€ 1.150/mnd', icon: Home },
];

export default function StatsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
      <div className="bg-white rounded-2xl shadow-lg border border-border p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="bg-primary-light p-3 rounded-xl">
                <stat.icon size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-text-muted font-medium">{stat.label}</p>
                <p className="text-xl font-bold text-text-main">{stat.value}</p>
                {stat.trend && (
                  <div className={`flex items-center gap-1 text-xs font-medium ${stat.trend.direction === 'down' ? 'text-emerald-600' : 'text-orange-600'}`}>
                    {stat.trend.direction === 'down' ? <TrendingDown size={12} /> : <TrendingUp size={12} />}
                    {stat.trend.text}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
