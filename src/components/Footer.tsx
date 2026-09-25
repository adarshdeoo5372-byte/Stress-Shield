import React from 'react';
import { Shield, AlertCircle, Phone, Lock, HeartHandshake } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 border-t border-stone-200 mt-20 text-stone-600 text-xs">
      {/* Human-in-the-Loop & Medical Disclaimer Callout Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="p-4 sm:p-5 bg-stone-50 border border-stone-300 rounded-md">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-stone-700 shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <h2 className="text-sm font-semibold text-stone-900">
                Mandatory Operational & Non-Diagnostic Disclaimer
              </h2>
              <p className="text-stone-700 leading-relaxed">
                <strong>StressShield is an operational crisis-triage decision-support system</strong>{' '}
                designed strictly to assist trained public-safety personnel and crisis navigators in
                prioritizing urgent outreach. <strong>It does not provide a medical diagnosis</strong>,
                psychiatric evaluation, clinical assessment, or diagnosis of Post-Traumatic Stress Disorder
                (PTSD), anxiety, depression, or mental illness.
              </p>
              <p className="text-stone-600 leading-relaxed">
                All algorithmic indicators (SVI 0–100, fear, distress, threat, isolation) are advisory triage signals.
                Final intake classification, welfare intervention, and crisis referrals remain subject to
                mandatory human-in-the-loop review by authorized personnel.
              </p>
            </div>
          </div>
        </div>

        {/* Directory of Emergency Crisis Services */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2 mb-2 font-semibold text-stone-900">
              <Shield className="w-4 h-4 text-stone-800" />
              <span>StressShield Protocol</span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              Public service prototype for trauma-informed crisis intake, secure multi-modal reporting, and
              human-supervised triage prioritization.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2 font-semibold text-stone-900">
              <Phone className="w-4 h-4 text-stone-800" />
              <span>Immediate Support Lifelines</span>
            </div>
            <ul className="space-y-1.5">
              <li>
                <span className="font-medium text-stone-800">988 Suicide & Crisis:</span>{' '}
                <a href="tel:988" className="underline hover:text-stone-900">Call/Text 988</a> (24/7 Free)
              </li>
              <li>
                <span className="font-medium text-stone-800">Domestic Violence:</span>{' '}
                <a href="tel:18007997233" className="underline hover:text-stone-900">1-800-799-SAFE (7233)</a>
              </li>
              <li>
                <span className="font-medium text-stone-800">Crisis Text Line:</span>{' '}
                <span>Text HOME to 741741</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2 font-semibold text-stone-900">
              <Lock className="w-4 h-4 text-stone-800" />
              <span>Confidentiality & Privacy</span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              Client inputs are end-to-end encrypted in transit. Complainants may elect anonymous filing
              without IP logging or automated deletion upon review completion.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2 font-semibold text-stone-900">
              <HeartHandshake className="w-4 h-4 text-stone-800" />
              <span>Human Oversight Guarantee</span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              Automated assessments cannot trigger punitive measures or deny service. Sworn officers and
              licensed clinicians maintain manual override authority over all automated scores.
            </p>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-600">
          <div>
            © 2026 Public Safety Crisis Technology Initiative. Prototype for Research & Public Service Evaluation.
          </div>
          <div className="flex items-center gap-4 text-stone-600">
            <span>Trauma-Informed Design Standards</span>
            <span>·</span>
            <span>Section 508 Accessible</span>
            <span>·</span>
            <span>Zero-PII Storage</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
