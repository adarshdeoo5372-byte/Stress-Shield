import React, { useState } from 'react';
import { Search, Shield, Clock, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { CaseRecord } from '../../types';

interface TrackCaseViewProps {
  cases: CaseRecord[];
  onSelectCase: (caseId: string) => void;
  onNavigateHome: () => void;
}

export const TrackCaseView: React.FC<TrackCaseViewProps> = ({
  cases,
  onSelectCase,
  onNavigateHome,
}) => {
  const [searchId, setSearchId] = useState('');
  const [matchedCase, setMatchedCase] = useState<CaseRecord | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const clean = searchId.trim().toUpperCase();
    const found = cases.find((c) => c.id.toUpperCase() === clean || c.trackingCode.toUpperCase() === clean);
    setMatchedCase(found || null);
  };

  const getStatusColor = (status: CaseRecord['status']) => {
    switch (status) {
      case 'Pending Triage':
        return 'text-amber-800 bg-amber-50 border-amber-200';
      case 'Assessing':
        return 'text-blue-800 bg-blue-50 border-blue-200';
      case 'Outreach Initiated':
        return 'text-indigo-800 bg-indigo-50 border-indigo-200';
      case 'Support Dispatched':
        return 'text-purple-800 bg-purple-50 border-purple-200';
      case 'Resolved / Referred':
        return 'text-emerald-800 bg-emerald-50 border-emerald-200';
      default:
        return 'text-stone-800 bg-stone-50 border-stone-200';
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      <div className="space-y-2 text-center">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-600">
          <Shield className="w-3.5 h-3.5 text-stone-700" />
          <span>Secure Case Status Tracking</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
          Track Your Confidential Crisis Report
        </h1>
        <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
          Enter your unique Case Reference ID (e.g., <code className="font-mono text-stone-900 bg-stone-100 px-1 py-0.5 rounded">SHIELD-2026-9182</code>) to check review status and updates.
        </p>
      </div>

      {/* Search Input Box */}
      <form onSubmit={handleSearch} className="p-4 bg-white border border-stone-300 rounded-lg shadow-xs space-y-3">
        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
          Case Reference ID or Tracking PIN
        </label>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="e.g. SHIELD-2026-9182"
              className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-300 rounded text-sm font-mono text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-stone-900"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <span>Search</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Quick test buttons */}
        <div className="text-[11px] text-stone-500 flex items-center gap-2 pt-1 flex-wrap">
          <span>Quick Try:</span>
          {cases.slice(0, 3).map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setSearchId(c.id);
                setMatchedCase(c);
                setHasSearched(true);
              }}
              className="underline hover:text-stone-900 font-mono"
            >
              {c.id}
            </button>
          ))}
        </div>
      </form>

      {/* Search Results Display */}
      {hasSearched && (
        <div className="space-y-4">
          {matchedCase ? (
            <div className="p-6 bg-white border border-stone-200 rounded-lg shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <div>
                  <span className="text-[11px] text-stone-500 font-medium">Record Found</span>
                  <div className="font-mono text-lg font-bold text-stone-900">{matchedCase.id}</div>
                </div>
                <div
                  className={`px-3 py-1 text-xs font-semibold rounded border ${getStatusColor(
                    matchedCase.status
                  )}`}
                >
                  {matchedCase.status}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-stone-500">Incident Category:</span>
                  <div className="font-medium text-stone-900 mt-0.5">{matchedCase.category}</div>
                </div>
                <div>
                  <span className="text-stone-500">Submitted:</span>
                  <div className="font-medium text-stone-900 mt-0.5">
                    {new Date(matchedCase.createdAt).toLocaleString([], {
                      dateStyle: 'short',
                      timeStyle: 'short',
                    })}
                  </div>
                </div>
                <div>
                  <span className="text-stone-500">Reviewing Officer:</span>
                  <div className="font-medium text-stone-900 mt-0.5">{matchedCase.assignedOfficer}</div>
                </div>
                <div>
                  <span className="text-stone-500">Priority Level:</span>
                  <div className="font-medium text-stone-900 mt-0.5">
                    Priority #{matchedCase.priorityScore} ({matchedCase.riskCategory})
                  </div>
                </div>
              </div>

              {/* Status explanation */}
              <div className="p-3 bg-stone-50 rounded border border-stone-200 text-xs space-y-1">
                <span className="font-semibold text-stone-800">Current Progress Update:</span>
                <p className="text-stone-600 leading-relaxed">
                  {matchedCase.status === 'Pending Triage' &&
                    'Your case is actively awaiting assignment in the duty officer triage queue. Our automated vulnerability index has prioritized this record.'}
                  {matchedCase.status === 'Assessing' &&
                    'An assigned crisis officer has picked up your case and is reviewing the statement details and safety requirements.'}
                  {matchedCase.status === 'Outreach Initiated' &&
                    'Outreach has been initiated in accordance with your specified safe contact preferences.'}
                  {matchedCase.status === 'Support Dispatched' &&
                    'Crisis support resources or emergency liaisons have been coordinated.'}
                  {matchedCase.status === 'Resolved / Referred' &&
                    'Initial crisis triage and referrals have been completed. The case record remains on file.'}
                </p>
              </div>

              <div className="pt-2 flex justify-between items-center">
                <span className="text-[11px] text-stone-500">
                  Data encrypted under Municipal Confidentiality Protocol.
                </span>
                <button
                  type="button"
                  onClick={() => onSelectCase(matchedCase.id)}
                  className="text-xs font-semibold text-stone-900 hover:underline"
                >
                  View Full Assessment Slip →
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 bg-white border border-stone-200 rounded-lg text-center space-y-2">
              <AlertCircle className="w-6 h-6 text-stone-400 mx-auto" />
              <div className="text-sm font-bold text-stone-900">Case Reference Not Found</div>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                No active record matches <code className="font-mono text-stone-700">{searchId}</code>. Please double-check
                your ID or tracking code.
              </p>
            </div>
          )}
        </div>
      )}

      <div className="text-center pt-4">
        <button
          onClick={onNavigateHome}
          className="text-xs text-stone-600 hover:text-stone-900 transition-colors"
        >
          ← Return to Home
        </button>
      </div>
    </div>
  );
};
