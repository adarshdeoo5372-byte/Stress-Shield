import React, { useState } from 'react';
import { Shield, Lock, UserCheck, KeyRound, AlertTriangle, ArrowRight } from 'lucide-react';
import { OfficerProfile } from '../../types';

interface OfficerLoginProps {
  onLogin: (profile: OfficerProfile) => void;
  onCancel: () => void;
}

export const OfficerLogin: React.FC<OfficerLoginProps> = ({ onLogin, onCancel }) => {
  const [badgeId, setBadgeId] = useState('CIU-4819');
  const [password, setPassword] = useState('••••••••••••');
  const [unit, setUnit] = useState('Crisis Intervention & Trauma Response Unit');

  const handleCustomLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({
      id: 'officer-01',
      name: 'Officer Sarah Jenkins',
      badge: badgeId || 'CIU-4819',
      role: 'Crisis Triage Specialist',
      unit,
      jurisdiction: 'Metro Public Safety & Trauma Services',
    });
  };

  const handleQuickDemo = (name: string, badge: string, role: string, unitName: string) => {
    onLogin({
      id: badge,
      name,
      badge,
      role,
      unit: unitName,
      jurisdiction: 'Metro Crisis Response Department',
    });
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="w-12 h-12 bg-stone-900 text-white rounded-lg flex items-center justify-center mx-auto shadow-sm">
          <Shield className="w-6 h-6 text-stone-200" />
        </div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block">
          Authorized Portal Access
        </span>
        <h1 className="text-2xl font-bold tracking-tight text-stone-900">
          Officer & Counselor Sign-In
        </h1>
        <p className="text-xs text-stone-600 leading-relaxed">
          Access the real-time crisis intake queue, Stress Vulnerability Index (SVI) telemetry, and human-in-the-loop review tools.
        </p>
      </div>

      {/* Login Form */}
      <div className="p-6 bg-white border border-stone-200 rounded-lg shadow-xs space-y-5">
        <form onSubmit={handleCustomLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
              Badge Number / Officer ID
            </label>
            <div className="relative">
              <UserCheck className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={badgeId}
                onChange={(e) => setBadgeId(e.target.value)}
                placeholder="e.g. CIU-4819"
                className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-300 rounded text-xs font-mono text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-stone-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
              Department Passcode / RSA Token
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-300 rounded text-xs font-mono text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-stone-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
              Assigned Operational Unit
            </label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded text-xs text-stone-800 focus:outline-hidden focus:ring-1 focus:ring-stone-900"
            >
              <option value="Crisis Intervention & Trauma Response Unit">
                Crisis Intervention & Trauma Response Unit (CIT)
              </option>
              <option value="Special Victims & Domestic Violence Division">
                Special Victims & Domestic Violence Division
              </option>
              <option value="Mobile Mental Health Dispatch Co-Responder">
                Mobile Mental Health Dispatch Co-Responder
              </option>
              <option value="Victim Witness Assistance Agency">Victim Witness Assistance Agency</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <span>Authenticate and Open Console</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Quick Demo Credentials */}
        <div className="pt-4 border-t border-stone-200 space-y-2">
          <span className="text-[11px] font-bold text-stone-600 uppercase tracking-wider block">
            One-Click Demo Access
          </span>
          <div className="grid grid-cols-1 gap-2">
            <button
              type="button"
              onClick={() =>
                handleQuickDemo(
                  'Officer Sarah Jenkins',
                  'CIU-4819',
                  'Crisis Triage Specialist',
                  'Crisis Intervention & Trauma Response Unit'
                )
              }
              className="w-full py-2 px-3 text-left bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded text-xs transition-colors flex items-center justify-between"
            >
              <div>
                <span className="font-bold text-stone-900 block">Officer Sarah Jenkins</span>
                <span className="text-[11px] text-stone-600">Crisis Intervention Unit · Badge #4819</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
            </button>

            <button
              type="button"
              onClick={() =>
                handleQuickDemo(
                  'Det. Ray Morales',
                  'SVU-2104',
                  'Senior Investigator',
                  'Special Victims & Domestic Violence Division'
                )
              }
              className="w-full py-2 px-3 text-left bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded text-xs transition-colors flex items-center justify-between"
            >
              <div>
                <span className="font-bold text-stone-900 block">Det. Ray Morales</span>
                <span className="text-[11px] text-stone-600">Special Victims Division · Badge #2104</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Security warning */}
      <div className="p-3 bg-stone-100 border border-stone-200 rounded text-[11px] text-stone-600 flex items-start gap-2">
        <Lock className="w-3.5 h-3.5 text-stone-500 shrink-0 mt-0.5" />
        <p>
          Law Enforcement Sensitive (LES). User activity is logged in immutable audit records.
          Officers must verify emergency dispatches prior to physical mobilization.
        </p>
      </div>

      <div className="text-center">
        <button
          onClick={onCancel}
          className="text-xs text-stone-600 hover:text-stone-900 transition-colors"
        >
          ← Return to Public Home
        </button>
      </div>
    </div>
  );
};
