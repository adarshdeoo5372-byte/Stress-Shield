import React, { useState } from 'react';
import {
  ShieldCheck,
  Copy,
  Check,
  Printer,
  AlertCircle,
  PhoneCall,
  Clock,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  FileText,
} from 'lucide-react';
import { CaseRecord } from '../../types';
import { VisualGauge } from '../VisualGauge';

interface SVIResultsViewProps {
  caseRecord: CaseRecord;
  onNavigateHome: () => void;
  onViewOfficerDashboard: () => void;
}

export const SVIResultsView: React.FC<SVIResultsViewProps> = ({
  caseRecord,
  onNavigateHome,
  onViewOfficerDashboard,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText(caseRecord.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const indicators = [
    {
      name: 'Physical Threat',
      score: caseRecord.indicators.threat,
      desc: caseRecord.indicatorDetails.threat.evidence,
      color: 'bg-rose-600',
    },
    {
      name: 'Autonomic Fear',
      score: caseRecord.indicators.fear,
      desc: caseRecord.indicatorDetails.fear.evidence,
      color: 'bg-amber-600',
    },
    {
      name: 'Situational Distress',
      score: caseRecord.indicators.distress,
      desc: caseRecord.indicatorDetails.distress.evidence,
      color: 'bg-yellow-600',
    },
    {
      name: 'Support Isolation',
      score: caseRecord.indicators.isolation,
      desc: caseRecord.indicatorDetails.isolation.evidence,
      color: 'bg-stone-600',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Top Success Banner */}
      <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-lg flex items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
          <div className="text-xs">
            <span className="font-bold text-emerald-900 block sm:inline">
              Report Successfully Logged & Encrypted.
            </span>{' '}
            <span className="text-emerald-800">
              Assigned to duty queue with Priority #{caseRecord.priorityScore}.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="px-2.5 py-1 text-xs text-stone-700 hover:text-stone-900 bg-white border border-stone-200 rounded shadow-2xs flex items-center gap-1.5 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Save/Print Slip</span>
          </button>
        </div>
      </div>

      {/* Case Reference Card */}
      <div className="p-5 bg-white border border-stone-200 rounded-lg shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600">
            Official Case Reference ID
          </span>
          <div className="text-2xl font-mono font-bold tracking-tight text-stone-900 mt-0.5">
            {caseRecord.id}
          </div>
          <div className="text-xs text-stone-600 mt-1 flex items-center gap-2">
            <span>Tracking PIN: <strong className="font-mono text-stone-700">{caseRecord.trackingCode}</strong></span>
            <span>·</span>
            <span>Created {new Date(caseRecord.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyId}
            className="py-2 px-3 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded text-xs font-medium flex items-center gap-1.5 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied ID' : 'Copy Case ID'}</span>
          </button>
        </div>
      </div>

      {/* Main Results Grid: Gauge + Indicator Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column: Visual SVI Gauge */}
        <div className="md:col-span-5 p-6 bg-white border border-stone-200 rounded-lg shadow-xs flex flex-col items-center justify-between text-center space-y-4">
          <div className="w-full text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
              Assessment Metric
            </span>
            <h3 className="text-base font-bold text-stone-900">Stress Vulnerability Index</h3>
            <p className="text-xs text-stone-600 mt-0.5">
              Comprehensive triage score calculated from crisis indicators.
            </p>
          </div>

          <div className="py-2">
            <VisualGauge score={caseRecord.sviScore} riskCategory={caseRecord.riskCategory} size="md" />
          </div>

          <div className="w-full text-left text-xs bg-stone-50 p-3 rounded border border-stone-200 space-y-1">
            <div className="flex items-center justify-between text-stone-600">
              <span>Incident Category:</span>
              <span className="font-medium text-stone-900">{caseRecord.category}</span>
            </div>
            <div className="flex items-center justify-between text-stone-600">
              <span>Input Mode:</span>
              <span className="font-medium text-stone-900 capitalize">
                {caseRecord.inputMethod} {caseRecord.audioDurationSeconds ? `(${caseRecord.audioDurationSeconds}s voice)` : ''}
              </span>
            </div>
            <div className="flex items-center justify-between text-stone-600">
              <span>Status:</span>
              <span className="font-medium text-stone-900">{caseRecord.status}</span>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Indicator Cues Breakdown */}
        <div className="md:col-span-7 p-6 bg-white border border-stone-200 rounded-lg shadow-xs space-y-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
              Component Signals
            </span>
            <h3 className="text-base font-bold text-stone-900">Detected Triage Indicators</h3>
            <p className="text-xs text-stone-600 mt-0.5">
              Breakdown of extracted situational and emotional markers.
            </p>
          </div>

          <div className="space-y-4">
            {indicators.map((ind, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-stone-800">{ind.name}</span>
                  <span className="font-mono tabular-nums font-bold text-stone-700">
                    {ind.score} / 100
                  </span>
                </div>
                <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${ind.color} transition-all duration-500`}
                    style={{ width: `${ind.score}%` }}
                  />
                </div>
                <p className="text-[11px] text-stone-500 leading-snug">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Explanation & Plain-Language Synthesis */}
      <div className="p-6 bg-white border border-stone-200 rounded-lg shadow-xs space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
          Synthesized AI Triage Explanation
        </span>
        <p className="text-sm text-stone-800 leading-relaxed font-normal">
          {caseRecord.aiExplanation}
        </p>
        <div className="pt-2 text-xs text-stone-600 border-t border-stone-200 flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 text-stone-500 shrink-0" />
          <span>
            Non-Diagnostic Notice: This evaluation represents triage scoring for emergency triage and does not
            constitute a clinical diagnosis of PTSD, psychological disorder, or mental illness.
          </span>
        </div>
      </div>

      {/* Recommended Safety Actions & Immediate Support */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recommended Actions */}
        <div className="p-5 bg-stone-100 border border-stone-200 rounded-lg space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-700">
            Recommended Immediate Actions
          </span>
          <ul className="space-y-2 text-xs text-stone-700">
            {caseRecord.recommendedActions.map((action, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="font-bold text-stone-900">•</span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Immediate Reassurance & Contact */}
        <div className="p-5 bg-stone-900 text-stone-100 rounded-lg space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-300">
              <PhoneCall className="w-3.5 h-3.5 text-stone-300" />
              <span>Immediate Confidential Help</span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              If at any point your immediate physical safety is compromised, dial <strong>911</strong> immediately.
              For confidential emotional crisis support:
            </p>
            <div className="text-xs text-stone-200 pt-1 space-y-1">
              <div>
                <strong>988 Suicide & Crisis Lifeline:</strong> Dial 988 (Available 24/7)
              </div>
              <div>
                <strong>National Domestic Violence Hotline:</strong> 1-800-799-7233
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="tel:988"
              className="w-full py-2 px-3 bg-stone-800 hover:bg-stone-700 text-white rounded text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Connect with 988 Lifeline Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation and Officer Dashboard Bridge */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-200">
        <button
          onClick={onNavigateHome}
          className="text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors"
        >
          ← Return to Public Homepage
        </button>

        {/* Prototype Bridge: view this exact case in Officer Console */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-stone-600 hidden sm:inline">
            Demonstration Bridge:
          </span>
          <button
            onClick={onViewOfficerDashboard}
            className="py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <span>Inspect in Officer Dashboard</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
