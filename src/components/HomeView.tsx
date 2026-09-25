import React from 'react';
import {
  ShieldAlert,
  FileText,
  Mic,
  Activity,
  UserCheck,
  Lock,
  ArrowRight,
  LifeBuoy,
  Heart,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: 'home' | 'victim-intake' | 'officer-dashboard' | 'officer-login' | 'track-case') => void;
  isOfficerLoggedIn: boolean;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, isOfficerLoggedIn }) => {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Banner Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/70 border border-stone-300 text-stone-700 text-xs font-medium">
          <Activity className="w-3.5 h-3.5 text-stone-600" />
          <span>Crisis Management & Trauma-Informed Triage Architecture</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-[1.15] max-w-3xl mx-auto text-balance">
          Safe crisis reporting and trauma triage for faster, sensitive response.
        </h1>

        <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          StressShield provides a secure, trauma-informed digital intake channel for individuals facing
          domestic crises, stalking, harassment, or acute trauma—enabling voice or silent text reporting
          paired with an AI-assisted Stress Vulnerability Index (SVI) to guide response officers.
        </p>

        {/* Dual Portal Launcher Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-6 text-left">
          {/* Card 1: Complainant / Victim Portal */}
          <div className="p-6 sm:p-7 bg-white border border-stone-200 rounded-lg hover:border-stone-400 transition-all shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800">
                <Heart className="w-5 h-5 text-stone-700" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-600">
                  Citizen & Survivor Portal
                </span>
                <h2 className="text-xl font-bold text-stone-900 mt-1">
                  Submit a Crisis Statement
                </h2>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                  Confidential intake using spoken voice or silent text. Receive immediate trauma-informed safety
                  guidance and a private tracking code. No complex forms required.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs text-stone-600">
                <span>· Silent Voice / Text</span>
                <span>· Instant Triage SVI</span>
                <span>· Anonymous Option</span>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onNavigate('victim-intake')}
                className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white text-sm font-medium rounded transition-colors flex items-center justify-center gap-2 group"
              >
                <span>Start Secure Intake</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Officer Dashboard Portal */}
          <div className="p-6 sm:p-7 bg-white border border-stone-200 rounded-lg hover:border-stone-400 transition-all shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800">
                <ShieldAlert className="w-5 h-5 text-stone-700" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-600">
                  Law Enforcement & Crisis Navigators
                </span>
                <h2 className="text-xl font-bold text-stone-900 mt-1">
                  Officer Triage Dashboard
                </h2>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                  Real-time queue monitoring with Stress Vulnerability Index (SVI 0–100), risk breakdown
                  (Fear, Distress, Threat, Isolation), AI explanations, and human-in-the-loop action workflows.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs text-stone-600">
                <span>· SVI 0-100 Gauges</span>
                <span>· 4 Risk Indicators</span>
                <span>· Human Override Log</span>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onNavigate(isOfficerLoggedIn ? 'officer-dashboard' : 'officer-login')}
                className="w-full py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300 text-sm font-medium rounded transition-colors flex items-center justify-center gap-2 group"
              >
                <span>{isOfficerLoggedIn ? 'Access Active Dashboard' : 'Authorized Officer Sign-In'}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose & Trauma Challenge Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="border-t border-b border-stone-200 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="text-xs font-bold text-stone-600 uppercase tracking-wider">
                The Problem
              </span>
              <h3 className="text-lg font-bold text-stone-900 mt-1">
                The Cognitive Freeze of Trauma
              </h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                Survivors in acute trauma often face speech freezing, fear of being overheard by an abuser in
                the same room, or inability to navigate complex 20-field government complaint forms.
              </p>
            </div>

            <div>
              <span className="text-xs font-bold text-stone-600 uppercase tracking-wider">
                The Solution
              </span>
              <h3 className="text-lg font-bold text-stone-900 mt-1">
                Multi-Modal Natural Intake
              </h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                Individuals provide an unstructured statement in their own words via text or whispered voice.
                StressShield securely extracts critical safety markers without forcing rigid questionnaires.
              </p>
            </div>

            <div>
              <span className="text-xs font-bold text-stone-600 uppercase tracking-wider">
                The Safeguard
              </span>
              <h3 className="text-lg font-bold text-stone-900 mt-1">
                Strict Human-in-the-Loop
              </h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                The AI does not make arrest decisions or assign clinical diagnoses. It provides officers with an
                advisory Stress Vulnerability Index to prioritize which cases need rapid contact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Detected Triage Indicators Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-600">
            Triage Metrics Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            The 4 Pillar Indicators of SVI
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            The Stress Vulnerability Index (0–100) measures four validated situational distress signals
            to help officers spot acute danger before tragedy strikes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 bg-white border border-stone-200 rounded-md space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-500 uppercase">Indicator 01</span>
              <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">Threat</span>
            </div>
            <h4 className="text-base font-bold text-stone-900">Imminent Danger</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Detects weapon mentions, physical proximity of perpetrator, explicit verbal threats, and perimeter breaches.
            </p>
          </div>

          <div className="p-5 bg-white border border-stone-200 rounded-md space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-500 uppercase">Indicator 02</span>
              <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Fear</span>
            </div>
            <h4 className="text-base font-bold text-stone-900">Autonomic Panic</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Identifies acute somatic fear signals: trembling, hiding, hypervigilance, inability to leave, and terror cues.
            </p>
          </div>

          <div className="p-5 bg-white border border-stone-200 rounded-md space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-500 uppercase">Indicator 03</span>
              <span className="text-xs font-semibold text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded">Distress</span>
            </div>
            <h4 className="text-base font-bold text-stone-900">Cognitive Overload</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Extracts feelings of helplessness, sleep deprivation, traumatic grief, and emotional exhaustion.
            </p>
          </div>

          <div className="p-5 bg-white border border-stone-200 rounded-md space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-500 uppercase">Indicator 04</span>
              <span className="text-xs font-semibold text-stone-700 bg-stone-100 px-2 py-0.5 rounded">Isolation</span>
            </div>
            <h4 className="text-base font-bold text-stone-900">Severed Support</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Assesses absence of local protective network, geographic estrangement, or co-dependent confinement.
            </p>
          </div>
        </div>
      </section>

      {/* Ethical & Human-in-the-Loop Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 bg-stone-100 border border-stone-200 rounded-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                <UserCheck className="w-4 h-4 text-stone-800" />
                <span>Human Officers Retain 100% Operational Authority</span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                StressShield operates under strict public-sector oversight standards. Officers can manually
                override algorithmic SVI scores at any time, log clinical notes, and assign specialized
                victim advocates. No dispatch is triggered without sworn human verification.
              </p>
            </div>
            <button
              onClick={() => onNavigate(isOfficerLoggedIn ? 'officer-dashboard' : 'officer-login')}
              className="py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded whitespace-nowrap"
            >
              View Officer Oversight Console
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
