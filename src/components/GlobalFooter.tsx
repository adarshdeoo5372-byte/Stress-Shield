import React from 'react';
import { StressShieldLogo } from './StressShieldLogo';

export const GlobalFooter: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-500 text-xs py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        {/* 4 Footer Columns (Image 2 exact) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1 */}
          <div className="space-y-3">
            <StressShieldLogo size="sm" />
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Civic crisis intake, traumatic incident mitigation, and verified human-in-the-loop psychological first response system.
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-2">
            <div className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Crisis Services
            </div>
            <ul className="space-y-1.5 text-[11px]">
              <li><a href="#" className="hover:text-slate-900">Trauma Intake Portal</a></li>
              <li><a href="#" className="hover:text-slate-900">PTSD Risk Self-Assessment</a></li>
              <li><a href="#" className="hover:text-slate-900">Immediate Safe Houses</a></li>
              <li><a href="#" className="hover:text-slate-900">Veterans Support Line</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-2">
            <div className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Operations & Security
            </div>
            <ul className="space-y-1.5 text-[11px]">
              <li><a href="#" className="hover:text-slate-900">Triage Field Operations</a></li>
              <li><a href="#" className="hover:text-slate-900">Officer Authentication</a></li>
              <li><a href="#" className="hover:text-slate-900">HIPAA / CJIS Security Specs</a></li>
              <li><a href="#" className="hover:text-slate-900">Audit Log Inquiries</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-2">
            <div className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              24/7 National Emergency
            </div>
            <div className="text-[11px] text-slate-500">National Crisis Lifeline</div>
            <div className="text-sm font-extrabold text-slate-900">Call or Text 988</div>
            <div className="text-[10px] text-slate-400 font-mono">
              TTY: USE PREFERRED RELAY SERVICE OR 711
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © 2026 StressShield Government Public Safety Network. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Accessibility Statement (WCAG 2.1 AA)</a>
            <span>•</span>
            <a href="#" className="hover:underline">Privacy Policy & CJIS Terms</a>
            <span>•</span>
            <a href="#" className="hover:underline">Vulnerability Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
