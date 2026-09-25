import React from 'react';
import { Shield, PhoneCall, ExternalLink, UserCheck } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'victim-intake' | 'victim-processing' | 'victim-results' | 'officer-dashboard' | 'officer-login' | 'track-case';
  onNavigate: (view: 'home' | 'victim-intake' | 'officer-dashboard' | 'officer-login' | 'track-case') => void;
  isOfficerLoggedIn: boolean;
  onOfficerLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  isOfficerLoggedIn,
  onOfficerLogout,
}) => {
  // Quick safety exit function (standard on domestic violence & crisis service platforms)
  const handleQuickExit = () => {
    // Navigate immediately to a neutral, safe landing (e.g. weather service or blank page)
    window.location.replace('https://www.weather.com');
  };

  return (
    <>
      {/* Top Advisory Banner */}
      <div className="bg-stone-900 text-stone-200 text-xs py-1 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-stone-300">Public Crisis Support Service</span>
            <span className="hidden sm:inline text-stone-400">· Confidential & Encrypted</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-stone-300">Emergency Threat? Call 911</span>
            <span className="text-stone-400">·</span>
            <a
              href="tel:988"
              className="text-stone-100 hover:text-white font-medium underline flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3" />
              <span>988 Suicide & Crisis Lifeline</span>
            </a>
          </div>
        </div>
      </div>

      {/* Primary Top Bar (Zone 1 — Zone 2 — Zone 3 Contract) */}
      <header className="sticky top-0 z-30 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          
          {/* Zone 1: Single text element Brand mark */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 text-stone-900 hover:text-stone-700 transition-colors text-left"
            >
              <div className="w-8 h-8 rounded bg-stone-900 text-stone-50 flex items-center justify-center font-bold text-base shadow-xs">
                <Shield className="w-4 h-4 text-stone-200" />
              </div>
              <span className="text-xl font-bold tracking-tight text-stone-900">
                StressShield
              </span>
            </button>
          </div>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
            <button
              onClick={() => onNavigate('home')}
              className={`hover:text-stone-900 transition-colors pb-1 ${
                currentView === 'home' ? 'text-stone-900 border-b-2 border-stone-900' : ''
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => onNavigate('victim-intake')}
              className={`hover:text-stone-900 transition-colors pb-1 ${
                currentView === 'victim-intake' || currentView === 'victim-results'
                  ? 'text-stone-900 border-b-2 border-stone-900'
                  : ''
              }`}
            >
              Submit Crisis Report
            </button>
            <button
              onClick={() => onNavigate('track-case')}
              className={`hover:text-stone-900 transition-colors pb-1 ${
                currentView === 'track-case' ? 'text-stone-900 border-b-2 border-stone-900' : ''
              }`}
            >
              Track Case
            </button>
            <button
              onClick={() => onNavigate(isOfficerLoggedIn ? 'officer-dashboard' : 'officer-login')}
              className={`hover:text-stone-900 transition-colors pb-1 ${
                currentView === 'officer-dashboard' || currentView === 'officer-login'
                  ? 'text-stone-900 border-b-2 border-stone-900'
                  : ''
              }`}
            >
              Officer Portal
            </button>
          </nav>

          {/* Zone 3: Primary Action buttons */}
          <div className="flex items-center gap-2.5">
            {isOfficerLoggedIn && (
              <button
                onClick={onOfficerLogout}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-200 hover:bg-stone-300 rounded transition-colors"
                title="Sign out of Officer Console"
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Officer Logout</span>
              </button>
            )}

            <button
              onClick={handleQuickExit}
              className="px-3.5 py-1.5 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded transition-colors flex items-center gap-1.5 whitespace-nowrap"
              title="Instantly leave this site if you feel unsafe"
            >
              <span>Quick Exit</span>
              <ExternalLink className="w-3 h-3 text-rose-500" />
            </button>
          </div>
        </div>

        {/* Mobile secondary navigation strip */}
        <div className="md:hidden flex items-center justify-around border-t border-stone-200 bg-white px-2 py-2 text-xs font-medium text-stone-600">
          <button
            onClick={() => onNavigate('home')}
            className={`px-2 py-1 ${currentView === 'home' ? 'text-stone-900 font-bold' : ''}`}
          >
            Overview
          </button>
          <button
            onClick={() => onNavigate('victim-intake')}
            className={`px-2 py-1 ${currentView === 'victim-intake' ? 'text-stone-900 font-bold' : ''}`}
          >
            Submit Report
          </button>
          <button
            onClick={() => onNavigate('track-case')}
            className={`px-2 py-1 ${currentView === 'track-case' ? 'text-stone-900 font-bold' : ''}`}
          >
            Track Status
          </button>
          <button
            onClick={() => onNavigate(isOfficerLoggedIn ? 'officer-dashboard' : 'officer-login')}
            className={`px-2 py-1 ${currentView === 'officer-dashboard' ? 'text-stone-900 font-bold' : ''}`}
          >
            Officer Dashboard
          </button>
        </div>
      </header>
    </>
  );
};
