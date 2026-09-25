import React from 'react';
import { StressShieldLogo } from './StressShieldLogo';
import { PhoneCall, Shield, LogIn, ExternalLink } from 'lucide-react';

interface GlobalHeaderProps {
  activeTab: 'public-support' | 'self-assessment' | 'officer-portal' | 'resources';
  onSelectTab: (tab: 'public-support' | 'self-assessment' | 'officer-portal' | 'resources') => void;
  onOpenOfficerLogin: () => void;
  isOfficerLoggedIn: boolean;
}

export const GlobalHeader: React.FC<GlobalHeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenOfficerLogin,
  isOfficerLoggedIn,
}) => {
  const handleQuickExit = () => {
    window.location.replace('https://www.google.com');
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      {/* Top Advisory Bar */}
      <div className="bg-[#f8fafc] border-b border-slate-200 text-[11px] font-medium text-slate-600 px-4 sm:px-6 py-1">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="font-semibold text-slate-700">Official Public Safety & Crisis Assistance Service</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="hidden sm:inline text-slate-500">End-to-End Encrypted</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="hidden sm:inline text-slate-500">Strictly Confidential</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-slate-500 hover:text-slate-800 cursor-pointer">
              <span>🌐 English (US)</span>
            </div>
            <button
              onClick={handleQuickExit}
              className="px-2.5 py-0.5 text-[11px] font-bold text-white bg-[#dc2626] hover:bg-red-700 rounded transition-colors flex items-center gap-1 shadow-2xs cursor-pointer"
              title="Press Esc or click to instantly leave this page"
            >
              <span>🚨 Quick Exit (Esc)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
        {/* Left: Brand Logo */}
        <button
          onClick={() => onSelectTab('public-support')}
          className="text-left cursor-pointer focus:outline-hidden"
        >
          <StressShieldLogo size="md" />
        </button>

        {/* Center: Navigation Pills */}
        <nav className="hidden lg:flex items-center gap-1.5 text-xs font-semibold">
          <button
            onClick={() => onSelectTab('public-support')}
            className={`px-3.5 py-2 rounded-full transition-all cursor-pointer ${
              activeTab === 'public-support'
                ? 'bg-[#a7f3d0] text-emerald-950 font-bold shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Public Support
          </button>

          <button
            onClick={() => onSelectTab('self-assessment')}
            className={`px-3.5 py-2 rounded-full transition-all cursor-pointer ${
              activeTab === 'self-assessment'
                ? 'bg-[#a7f3d0] text-emerald-950 font-bold shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Self-Assessment & SVI
          </button>

          <button
            onClick={() => onSelectTab('officer-portal')}
            className={`px-3.5 py-2 rounded-full transition-all cursor-pointer ${
              activeTab === 'officer-portal'
                ? 'bg-[#a7f3d0] text-emerald-950 font-bold shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Officer Portal
          </button>

          <button
            onClick={() => onSelectTab('resources')}
            className={`px-3.5 py-2 rounded-full transition-all cursor-pointer ${
              activeTab === 'resources'
                ? 'bg-[#a7f3d0] text-emerald-950 font-bold shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Resources & 24/7 Hotline
          </button>
        </nav>

        {/* Right Action Widgets */}
        <div className="flex items-center gap-3">
          {/* 988 Lifeline Available pill */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[#f1f5f9] border border-slate-200 rounded-lg text-left">
            <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-800">
              <PhoneCall className="w-3.5 h-3.5 text-[#0d9488]" />
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-wider text-slate-800 uppercase">
                988 Lifeline Available
              </div>
              <div className="text-[10px] text-slate-500">24/7 Free & Confidential</div>
            </div>
          </div>

          {/* Officer Sign-In Dark Button */}
          <button
            onClick={onOpenOfficerLogin}
            className="px-3.5 py-2 bg-[#0f172a] hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors shadow-xs cursor-pointer"
          >
            <Shield className="w-3.5 h-3.5 text-teal-300" />
            <span>{isOfficerLoggedIn ? 'Officer Command' : 'Officer Sign-In'}</span>
          </button>
        </div>
      </div>

      {/* Mobile nav bar */}
      <div className="lg:hidden flex items-center justify-around border-t border-slate-200 bg-slate-50 px-2 py-1.5 text-xs font-semibold text-slate-600">
        <button
          onClick={() => onSelectTab('public-support')}
          className={`px-2 py-1 ${activeTab === 'public-support' ? 'text-teal-900 font-bold' : ''}`}
        >
          Public Support
        </button>
        <button
          onClick={() => onSelectTab('self-assessment')}
          className={`px-2 py-1 ${activeTab === 'self-assessment' ? 'text-teal-900 font-bold' : ''}`}
        >
          Assessment & SVI
        </button>
        <button
          onClick={() => onSelectTab('officer-portal')}
          className={`px-2 py-1 ${activeTab === 'officer-portal' ? 'text-teal-900 font-bold' : ''}`}
        >
          Officer Portal
        </button>
      </div>
    </header>
  );
};
