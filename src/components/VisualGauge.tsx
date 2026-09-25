import React from 'react';
import { RiskCategory } from '../types';

interface VisualGaugeProps {
  score: number; // 0 to 100
  riskCategory: RiskCategory;
  size?: 'sm' | 'md' | 'lg';
  showTicks?: boolean;
}

export const VisualGauge: React.FC<VisualGaugeProps> = ({
  score,
  riskCategory,
  size = 'md',
  showTicks = true,
}) => {
  // Semi-circle arc parameters
  const radius = 80;
  const strokeWidth = size === 'sm' ? 10 : 14;
  const center = 100;
  const circumference = Math.PI * radius; // 180 degrees
  const clampedScore = Math.max(0, Math.min(100, score));
  const strokeDashoffset = circumference - (clampedScore / 100) * circumference;

  const getRiskColors = (category: RiskCategory) => {
    switch (category) {
      case 'Critical':
        return {
          stroke: '#dc2626', // crimson red
          text: 'text-rose-700',
          bg: 'bg-rose-50 text-rose-800 border-rose-200',
          dot: 'bg-rose-600',
        };
      case 'High':
        return {
          stroke: '#ea580c', // orange/terracotta
          text: 'text-amber-800',
          bg: 'bg-amber-50 text-amber-800 border-amber-200',
          dot: 'bg-amber-600',
        };
      case 'Moderate':
        return {
          stroke: '#d97706', // warm amber
          text: 'text-yellow-800',
          bg: 'bg-yellow-50 text-yellow-800 border-yellow-200',
          dot: 'bg-yellow-600',
        };
      case 'Low':
      default:
        return {
          stroke: '#059669', // calm sage emerald
          text: 'text-emerald-800',
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          dot: 'bg-emerald-600',
        };
    }
  };

  const colors = getRiskColors(riskCategory);

  const dimensionClasses = {
    sm: 'w-36 h-24',
    md: 'w-52 h-34',
    lg: 'w-68 h-44',
  }[size];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`relative ${dimensionClasses} flex items-center justify-center`}>
        <svg
          viewBox="0 0 200 120"
          className="w-full h-full overflow-visible"
          role="img"
          aria-label={`Stress Vulnerability Index score ${clampedScore} out of 100, ${riskCategory} risk`}
        >
          {/* Background track */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />

          {/* Color threshold reference subtle tick marks */}
          {showTicks && (
            <>
              {/* 30 marker (Moderate boundary) */}
              <line x1="62" y1="44" x2="68" y2="52" stroke="#94a3b8" strokeWidth="1.5" />
              {/* 60 marker (High boundary) */}
              <line x1="120" y1="36" x2="116" y2="44" stroke="#94a3b8" strokeWidth="1.5" />
              {/* 80 marker (Critical boundary) */}
              <line x1="156" y1="58" x2="149" y2="64" stroke="#94a3b8" strokeWidth="1.5" />
            </>
          )}

          {/* Active indicator arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke={colors.stroke}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-700 ease-out"
          />

          {/* Center score readout */}
          <text
            x={center}
            y={size === 'sm' ? 82 : 86}
            textAnchor="middle"
            className="font-bold fill-stone-900 tabular-nums"
            style={{ fontSize: size === 'sm' ? '28px' : size === 'lg' ? '40px' : '34px' }}
          >
            {clampedScore}
          </text>
          <text
            x={center}
            y={size === 'sm' ? 98 : 104}
            textAnchor="middle"
            className="text-[10px] fill-stone-500 font-medium tracking-wider uppercase"
          >
            SVI Index / 100
          </text>
        </svg>
      </div>

      {/* Semantic Risk Badge */}
      <div className="flex items-center gap-1.5 mt-2">
        <span className={`inline-block w-2 h-2 rounded-full ${colors.dot}`} aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-700">
          Risk Category: <span className={colors.text}>{riskCategory}</span>
        </span>
      </div>

      <div className="text-[11px] text-stone-600 mt-1 flex items-center gap-2">
        <span>0–29 Low</span>
        <span>·</span>
        <span>30–59 Mod</span>
        <span>·</span>
        <span>60–79 High</span>
        <span>·</span>
        <span>80–100 Crit</span>
      </div>
    </div>
  );
};
