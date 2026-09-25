import React from 'react';
import { PhoneCall, ShieldCheck, HeartHandshake, FileText, ArrowRight } from 'lucide-react';

export const ResourcesHotlineView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="px-3 py-1 bg-teal-100 text-teal-900 rounded-full text-xs font-bold uppercase tracking-wider">
          PUBLIC SUPPORT DIRECTORY
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          24/7 Verified Crisis Resources & Helplines
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Access immediate toll-free emergency telecommunications, local domestic violence crisis centers, and specialized trauma counselors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold">
            988
          </div>
          <h3 className="text-base font-bold text-slate-900">Suicide & Crisis Lifeline</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Free, confidential 24/7 support for people in distress, prevention and crisis resources for you or your loved ones.
          </p>
          <a href="tel:988" className="inline-block pt-2 text-xs font-bold text-teal-800 hover:underline">
            Call or Text 988 →
          </a>
        </div>

        <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
            SAFE
          </div>
          <h3 className="text-base font-bold text-slate-900">National Domestic Violence Hotline</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Highly trained expert advocates available 24/7 to talk confidentially with anyone affected by domestic violence.
          </p>
          <a href="tel:18007997233" className="inline-block pt-2 text-xs font-bold text-teal-800 hover:underline">
            1-800-799-SAFE (7233) →
          </a>
        </div>

        <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold">
            TXT
          </div>
          <h3 className="text-base font-bold text-slate-900">Crisis Text Line</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Free 24/7 crisis support in the US and Canada over SMS. Text with a trained volunteer crisis counselor.
          </p>
          <a href="sms:741741" className="inline-block pt-2 text-xs font-bold text-teal-800 hover:underline">
            Text HOME to 741741 →
          </a>
        </div>
      </div>
    </div>
  );
};
