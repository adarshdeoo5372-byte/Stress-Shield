import React, { useState } from 'react';
import {
  X,
  Shield,
  AlertCircle,
  CheckCircle2,
  Clock,
  User,
  Phone,
  MessageSquare,
  FileText,
  Sliders,
  Send,
  Volume2,
  Lock,
  ArrowRight,
  UserCheck,
  CheckSquare,
  Square,
} from 'lucide-react';
import { CaseRecord, CaseStatus, RiskCategory } from '../../types';
import { VisualGauge } from '../VisualGauge';

interface CaseDetailModalProps {
  caseRecord: CaseRecord;
  currentOfficerName: string;
  onClose: () => void;
  onUpdateStatus: (caseId: string, newStatus: CaseStatus) => void;
  onOverrideSvi: (
    caseId: string,
    adjustedSvi: number,
    adjustedRisk: RiskCategory,
    reason: string
  ) => void;
  onAddFollowUpNote: (caseId: string, note: string) => void;
  onAssignOfficer: (caseId: string, officerName: string) => void;
}

export const CaseDetailModal: React.FC<CaseDetailModalProps> = ({
  caseRecord,
  currentOfficerName,
  onClose,
  onUpdateStatus,
  onOverrideSvi,
  onAddFollowUpNote,
  onAssignOfficer,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'actions' | 'override' | 'history'>('overview');
  const [showRawStatement, setShowRawStatement] = useState(false);
  const [newFollowUpNote, setNewFollowUpNote] = useState('');

  // Human Override State
  const [overrideScore, setOverrideScore] = useState(caseRecord.sviScore);
  const [overrideRisk, setOverrideRisk] = useState<RiskCategory>(caseRecord.riskCategory);
  const [overrideReason, setOverrideReason] = useState('');
  const [overrideSuccess, setOverrideSuccess] = useState(false);

  // Action checklist state (locally tracked completed actions)
  const [completedActions, setCompletedActions] = useState<Record<number, boolean>>({});

  const toggleAction = (idx: number) => {
    setCompletedActions((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleApplyOverride = (e: React.FormEvent) => {
    e.preventDefault();
    if (!overrideReason.trim()) return;

    onOverrideSvi(caseRecord.id, overrideScore, overrideRisk, overrideReason);
    setOverrideSuccess(true);
    setTimeout(() => setOverrideSuccess(false), 3000);
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFollowUpNote.trim()) return;

    onAddFollowUpNote(caseRecord.id, newFollowUpNote);
    setNewFollowUpNote('');
  };

  const getStatusColor = (status: CaseStatus) => {
    switch (status) {
      case 'Pending Triage':
        return 'text-amber-800 bg-amber-50 border-amber-300';
      case 'Assessing':
        return 'text-blue-800 bg-blue-50 border-blue-300';
      case 'Outreach Initiated':
        return 'text-indigo-800 bg-indigo-50 border-indigo-300';
      case 'Support Dispatched':
        return 'text-purple-800 bg-purple-50 border-purple-300';
      case 'Resolved / Referred':
        return 'text-emerald-800 bg-emerald-50 border-emerald-300';
      default:
        return 'text-stone-800 bg-stone-100 border-stone-300';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl border border-stone-200 w-full max-w-4xl max-h-[92vh] flex flex-col my-auto overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-3">
            <div className="font-mono text-base sm:text-lg font-bold text-stone-900">
              {caseRecord.id}
            </div>
            <div
              className={`px-2.5 py-0.5 text-xs font-semibold rounded border ${getStatusColor(
                caseRecord.status
              )}`}
            >
              {caseRecord.status}
            </div>
            {caseRecord.officerOverride && (
              <span className="text-[11px] font-semibold text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded">
                Human Override Applied
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-200 rounded transition-colors"
            title="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs inside modal */}
        <div className="flex items-center px-4 sm:px-5 border-b border-stone-200 bg-stone-50/50 gap-6 text-xs font-semibold text-stone-600">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 transition-colors border-b-2 ${
              activeTab === 'overview'
                ? 'border-stone-900 text-stone-900'
                : 'border-transparent hover:text-stone-900'
            }`}
          >
            Triage & Statement Overview
          </button>
          <button
            onClick={() => setActiveTab('actions')}
            className={`py-3 transition-colors border-b-2 ${
              activeTab === 'actions'
                ? 'border-stone-900 text-stone-900'
                : 'border-transparent hover:text-stone-900'
            }`}
          >
            Recommended Review Actions ({caseRecord.recommendedActions.length})
          </button>
          <button
            onClick={() => setActiveTab('override')}
            className={`py-3 transition-colors border-b-2 ${
              activeTab === 'override'
                ? 'border-stone-900 text-stone-900'
                : 'border-transparent hover:text-stone-900'
            }`}
          >
            Human-in-the-Loop Override
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`py-3 transition-colors border-b-2 ${
              activeTab === 'history'
                ? 'border-stone-900 text-stone-900'
                : 'border-transparent hover:text-stone-900'
            }`}
          >
            Audit Trail & Follow-up ({caseRecord.auditHistory.length})
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Complainant Identity and Contact Banner */}
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div>
                  <span className="text-[11px] font-bold text-stone-600 uppercase">Complainant</span>
                  <div className="font-semibold text-stone-900 mt-0.5">
                    {caseRecord.complainantName}
                  </div>
                  <div className="text-[11px] text-stone-600">
                    {caseRecord.isAnonymous ? 'Identity masked by user' : 'Verified alias/name'}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-stone-600 uppercase">Contact Preference</span>
                  <div className="font-semibold text-stone-900 mt-0.5">
                    {caseRecord.contactPreference}
                  </div>
                  {caseRecord.contactValue && (
                    <div className="font-mono text-stone-700">{caseRecord.contactValue}</div>
                  )}
                </div>

                <div>
                  <span className="text-[11px] font-bold text-stone-600 uppercase">Safe Contact Window</span>
                  <div className="text-stone-800 mt-0.5">
                    {caseRecord.safeTimeToContact || 'Anytime during operational hours'}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-stone-600 uppercase">Assigned Officer</span>
                  <div className="font-semibold text-stone-900 mt-0.5">
                    {caseRecord.assignedOfficer}
                  </div>
                  <div className="text-[11px] text-stone-600">
                    Priority Score #{caseRecord.priorityScore}
                  </div>
                </div>
              </div>

              {/* SVI Gauge & 4 Pillar Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-4 p-4 bg-white border border-stone-200 rounded-lg text-center flex flex-col items-center justify-center">
                  <span className="text-[11px] font-bold text-stone-600 uppercase mb-2">
                    Stress Vulnerability Score
                  </span>
                  <VisualGauge
                    score={caseRecord.sviScore}
                    riskCategory={caseRecord.riskCategory}
                    size="sm"
                  />
                  {caseRecord.officerOverride && (
                    <div className="mt-2 text-[11px] text-purple-700 font-medium">
                      Original: SVI {caseRecord.officerOverride.originalSvi} → Adjusted to{' '}
                      {caseRecord.officerOverride.adjustedSvi}
                    </div>
                  )}
                </div>

                <div className="md:col-span-8 p-4 bg-white border border-stone-200 rounded-lg space-y-3">
                  <span className="text-[11px] font-bold text-stone-600 uppercase">
                    Detected Indicators Telemetry
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-stone-50 rounded border border-stone-200 space-y-1">
                      <div className="flex justify-between font-semibold">
                        <span className="text-rose-700">Threat Indicator</span>
                        <span className="font-mono tabular-nums">{caseRecord.indicators.threat}/100</span>
                      </div>
                      <p className="text-[11px] text-stone-600 leading-snug">
                        {caseRecord.indicatorDetails.threat.evidence}
                      </p>
                    </div>

                    <div className="p-3 bg-stone-50 rounded border border-stone-200 space-y-1">
                      <div className="flex justify-between font-semibold">
                        <span className="text-amber-700">Fear Indicator</span>
                        <span className="font-mono tabular-nums">{caseRecord.indicators.fear}/100</span>
                      </div>
                      <p className="text-[11px] text-stone-600 leading-snug">
                        {caseRecord.indicatorDetails.fear.evidence}
                      </p>
                    </div>

                    <div className="p-3 bg-stone-50 rounded border border-stone-200 space-y-1">
                      <div className="flex justify-between font-semibold">
                        <span className="text-yellow-700">Distress Indicator</span>
                        <span className="font-mono tabular-nums">{caseRecord.indicators.distress}/100</span>
                      </div>
                      <p className="text-[11px] text-stone-600 leading-snug">
                        {caseRecord.indicatorDetails.distress.evidence}
                      </p>
                    </div>

                    <div className="p-3 bg-stone-50 rounded border border-stone-200 space-y-1">
                      <div className="flex justify-between font-semibold">
                        <span className="text-stone-700">Isolation Indicator</span>
                        <span className="font-mono tabular-nums">{caseRecord.indicators.isolation}/100</span>
                      </div>
                      <p className="text-[11px] text-stone-600 leading-snug">
                        {caseRecord.indicatorDetails.isolation.evidence}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Explanation Quote */}
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-stone-900 text-xs">
                  <Shield className="w-4 h-4 text-stone-800" />
                  <span>AI Triage Synthesis & Operational Rationale</span>
                </div>
                <p className="text-stone-700 leading-relaxed text-xs">
                  {caseRecord.aiExplanation}
                </p>
                <div className="pt-1 text-[11px] text-stone-600">
                  Advisory assessment only. Not a medical or psychological diagnosis.
                </div>
              </div>

              {/* Statement View (Sanitized vs Raw) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-stone-700 uppercase">
                    Complainant Statement ({caseRecord.inputMethod} intake)
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-stone-500">
                      {showRawStatement ? 'Showing Raw Statement' : 'Showing Sanitized (PII Redacted)'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowRawStatement(!showRawStatement)}
                      className="px-2.5 py-1 text-[11px] bg-stone-100 hover:bg-stone-200 text-stone-800 rounded border border-stone-300 font-medium transition-colors"
                    >
                      {showRawStatement ? 'Switch to Sanitized View' : 'Reveal Unsanitized Narrative'}
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-white border border-stone-300 rounded-lg text-stone-800 leading-relaxed font-sans text-xs">
                  {showRawStatement ? caseRecord.statement : caseRecord.sanitizedStatement}
                </div>

                {caseRecord.inputMethod === 'voice' && (
                  <div className="p-3 bg-stone-100 border border-stone-200 rounded flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-4 h-4 text-stone-700" />
                      <span className="font-semibold text-stone-800">
                        Spoken Voice Audio Recording ({caseRecord.audioDurationSeconds || 32} seconds)
                      </span>
                    </div>
                    <span className="text-[11px] text-stone-600 font-mono">
                      Playback archived securely in evidence vault
                    </span>
                  </div>
                )}
              </div>

              {/* Workflow Status Controls */}
              <div className="p-4 bg-stone-100 border border-stone-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="font-bold text-stone-900 block text-xs">Update Case Status</span>
                  <p className="text-[11px] text-stone-600">
                    Advance the active triage stage to reflect ongoing response operations.
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {(
                    [
                      'Pending Triage',
                      'Assessing',
                      'Outreach Initiated',
                      'Support Dispatched',
                      'Resolved / Referred',
                    ] as CaseStatus[]
                  ).map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => onUpdateStatus(caseRecord.id, st)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                        caseRecord.status === st
                          ? 'bg-stone-900 text-white'
                          : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-50'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: RECOMMENDED ACTIONS */}
          {activeTab === 'actions' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-bold text-stone-900">
                  Recommended Human-Review Protocol Actions
                </h4>
                <p className="text-xs text-stone-600 mt-0.5">
                  Actionable triage suggestions generated from the complainant's SVI profile.
                  Officers must verify compliance with local department procedures.
                </p>
              </div>

              <div className="space-y-2.5">
                {caseRecord.recommendedActions.map((action, idx) => {
                  const isChecked = !!completedActions[idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleAction(idx)}
                      className={`p-3.5 rounded-lg border flex items-start gap-3 cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-emerald-50/60 border-emerald-300 text-emerald-950'
                          : 'bg-white border-stone-200 hover:border-stone-300 text-stone-800'
                      }`}
                    >
                      <div className="mt-0.5">
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-emerald-700" />
                        ) : (
                          <Square className="w-4 h-4 text-stone-400" />
                        )}
                      </div>
                      <div className="space-y-0.5">
                        <span className={`text-xs font-medium ${isChecked ? 'line-through opacity-80' : ''}`}>
                          {action}
                        </span>
                        <div className="text-[11px] text-stone-600">
                          {isChecked ? 'Marked complete by officer' : 'Pending officer verification'}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-3 bg-stone-50 border border-stone-200 rounded text-[11px] text-stone-600">
                Action items completed here are recorded in the internal dispatch audit ledger for compliance.
              </div>
            </div>
          )}

          {/* TAB 3: HUMAN-IN-THE-LOOP OVERRIDE */}
          {activeTab === 'override' && (
            <div className="space-y-5">
              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-purple-900 text-xs">
                  <UserCheck className="w-4 h-4 text-purple-700" />
                  <span>Mandatory Human-in-the-Loop Override Protocol</span>
                </div>
                <p className="text-xs text-purple-900 leading-relaxed">
                  As an authorized officer, your professional clinical and investigative judgment supersedes the
                  AI triage score. If situational facts, victim history, or ground investigation alter the risk,
                  adjust the score and risk category below with your operational justification.
                </p>
              </div>

              <form onSubmit={handleApplyOverride} className="p-5 bg-white border border-stone-200 rounded-lg space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Override SVI Score (0 to 100)
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={overrideScore}
                        onChange={(e) => setOverrideScore(parseInt(e.target.value))}
                        className="flex-1 accent-stone-900"
                      />
                      <span className="font-mono font-bold text-sm text-stone-900 w-10 text-right">
                        {overrideScore}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Override Risk Category
                    </label>
                    <select
                      value={overrideRisk}
                      onChange={(e) => setOverrideRisk(e.target.value as any)}
                      className="w-full bg-stone-50 border border-stone-300 rounded px-3 py-1.5 text-xs text-stone-800"
                    >
                      <option value="Low">Low (0–29)</option>
                      <option value="Moderate">Moderate (30–59)</option>
                      <option value="High">High (60–79)</option>
                      <option value="Critical">Critical (80–100)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Officer Clinical / Investigative Justification (Mandatory)
                  </label>
                  <textarea
                    rows={3}
                    value={overrideReason}
                    onChange={(e) => setOverrideReason(e.target.value)}
                    placeholder="e.g. Spoke to victim directly via phone; suspect has known history of weapon possession and active bench warrant. Elevated risk from Moderate to High."
                    className="w-full bg-stone-50 border border-stone-300 rounded p-2.5 text-xs text-stone-900 leading-relaxed focus:outline-hidden focus:ring-1 focus:ring-stone-900"
                  />
                </div>

                {overrideSuccess && (
                  <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Override applied and appended to the immutable case audit ledger.</span>
                  </div>
                )}

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={!overrideReason.trim()}
                    className="px-4 py-2 bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white rounded text-xs font-semibold flex items-center gap-2 transition-colors"
                  >
                    <span>Commit Human Override</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 4: AUDIT TRAIL & FOLLOW-UP */}
          {activeTab === 'history' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-stone-900">
                  Case Audit Trail & Response History
                </h4>
                <p className="text-xs text-stone-600 mt-0.5">
                  Immutable chronological log of intakes, algorithmic scores, officer overrides, and follow-up contacts.
                </p>
              </div>

              {/* Log new check-in note form */}
              <form onSubmit={handleAddNote} className="p-4 bg-stone-50 border border-stone-200 rounded-lg space-y-3">
                <span className="font-bold text-stone-900 text-xs block">
                  Log New Officer Follow-Up Note
                </span>
                <textarea
                  rows={2}
                  value={newFollowUpNote}
                  onChange={(e) => setNewFollowUpNote(e.target.value)}
                  placeholder="Record call attempt, welfare check findings, counselor referral notes, or safety plan confirmation..."
                  className="w-full bg-white border border-stone-300 rounded p-2 text-xs text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-stone-900"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={!newFollowUpNote.trim()}
                    className="px-3.5 py-1.5 bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white rounded text-xs font-semibold flex items-center gap-1.5"
                  >
                    <Send className="w-3 h-3" />
                    <span>Append Follow-up Note</span>
                  </button>
                </div>
              </form>

              {/* History Timeline */}
              <div className="border-l-2 border-stone-300 pl-4 space-y-5 ml-2">
                {caseRecord.auditHistory.map((item) => (
                  <div key={item.id} className="relative space-y-1">
                    <div className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-full bg-stone-800 border-2 border-white" />
                    <div className="flex items-center gap-2 text-[11px] text-stone-500 font-mono">
                      <span>{new Date(item.timestamp).toLocaleString()}</span>
                      <span>·</span>
                      <strong className="text-stone-800">{item.actor}</strong>
                    </div>
                    <div className="font-semibold text-stone-900 text-xs">{item.action}</div>
                    <p className="text-stone-600 text-xs leading-relaxed bg-white p-2.5 rounded border border-stone-200">
                      {item.notes}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
          <div className="text-[11px] text-stone-500 flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-stone-400" />
            <span>Encrypted Case ID: {caseRecord.id}</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded text-xs font-semibold transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
