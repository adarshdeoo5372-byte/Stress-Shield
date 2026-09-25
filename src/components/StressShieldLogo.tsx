import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'badge';
  lightText?: boolean;
}

export const StressShieldLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  lightText = false,
}) => {
  const iconDimensions = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-14 h-14',
  }[size];

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  }[size];

  const subtitleSizes = {
    sm: 'text-[8px]',
    md: 'text-[9px]',
    lg: 'text-[10px]',
    xl: 'text-xs',
  }[size];

  // Precision SVG replicating the exact shield in Image 1:
  // Outer shield in deep teal/slate (#134e5e), inner shield fill, white smiling arc & top center dot
  const ShieldIcon = (
    <div className={`relative ${iconDimensions} shrink-0 flex items-center justify-center`}>
      <svg
        viewBox="0 0 100 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
      >
        {/* Outer Shield Boundary */}
        <path
          d="M50 3L14 18V52C14 78 30 101 50 112C70 101 86 78 86 52V18L50 3Z"
          fill="#134e5e"
        />
        {/* Inner Shield Contoured Layer */}
        <path
          d="M50 12L24 23.5V52C24 72.5 35.5 90 50 99.5C64.5 90 76 72.5 76 52V23.5L50 12Z"
          fill="#0d7685"
          opacity="0.4"
        />
        {/* Center Top Dot */}
        <circle cx="50" cy="42" r="5.5" fill="#ffffff" />
        {/* Smile / Embrace Protection Arc */}
        <path
          d="M32 54C35 66 43 72 50 72C57 72 65 66 68 54"
          stroke="#ffffff"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );

  if (variant === 'icon') {
    return <div className={`inline-flex items-center ${className}`}>{ShieldIcon}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {ShieldIcon}
      <div className="flex flex-col justify-center">
        <div className="flex items-center relative">
          <span className={`font-bold tracking-tight ${textSizes} ${lightText ? 'text-white' : 'text-slate-900'}`}>
            Stress
          </span>
          <span className={`font-bold tracking-tight ${textSizes} ${lightText ? 'text-teal-300' : 'text-[#115e59]'}`}>
            Shield
          </span>
          {/* Mint accent underline */}
          <span className="absolute -bottom-1 left-0 w-11/12 h-[3px] bg-[#99f6e4] rounded-full opacity-90" />
        </div>
        <span
          className={`font-semibold tracking-widest uppercase mt-0.5 ${subtitleSizes} ${
            lightText ? 'text-teal-200/80' : 'text-slate-500'
          }`}
        >
          CRISIS & TRAUMA SYSTEM
        </span>
      </div>
    </div>
  );
};
