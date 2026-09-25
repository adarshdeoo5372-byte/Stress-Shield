import React, { useState, useMemo } from 'react';
import {
  Shield,
  Search,
  Filter,
  AlertTriangle,
  Activity,
  CheckCircle2,
  Clock,
  UserCheck,
  ChevronRight,
  ArrowUpDown,
  FileText,
  Mic,
  Sliders,
  Sparkles,
} from 'lucide-react';
import { CaseRecord, CaseStatus, OfficerProfile, RiskCategory } from '../../types';
import { CaseDetailModal } from './CaseDetailModal';

interface OfficerDashboardProps {
  cases: CaseRecord[];
  officer: OfficerProfile;
  onUpdateStatus: (caseId: string, newStatus: CaseStatus) => void;
  onOverrideSvi: (
    caseId: string,
    adjustedSvi: number,
    adjustedRisk: RiskCategory,
    reason: string
  ) => void;
  onAddFollowUpNote: (caseId: string, note: string) => void;
  onAssignOfficer: (caseId: string, officerName: string) => void;
  onLogout: () => void;
}

export const OfficerDashboard: React.FC<OfficerDashboardProps> = ({
  cases,
  officer,
  onUpdateStatus,
  onOverrideSvi,
  onAddFollowUpNote,
  onAssignOfficer,
  onLogout,
}) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [riskFilter, setRiskFilter] = useState<'All' | RiskCategory>('All');
  const [statusFilter, setStatusFilter] = useState<'All' | CaseStatus>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Selected case instance
  const selectedCase = useMemo(() => {
    return cases.find((c) => c.id === selectedCaseId) || null;
  }, [cases, selectedCaseId]);

  // Filtered cases
  const filteredCases = useMemo(() => {
    return cases.filter((c) => {
      // Risk filter
      if (riskFilter !== 'All' && c.riskCategory !== riskFilter) {
        return false;
      }
      // Status filter
      if (statusFilter !== 'All' && c.status !== statusFilter) {
        return false;
      }
      // Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesId = c.id.toLowerCase().includes(query);
        const matchesName = c.complainantName.toLowerCase().includes(query);
        const matchesCategory = c.category.toLowerCase().includes(query);
        const matchesStatement = c.statement.toLowerCase().includes(query);
        if (!matchesId && !matchesName && !matchesCategory && !matchesStatement) {
          return false;
        }
      }
      return true;
    });
  }, [cases, riskFilter, statusFilter, searchQuery]);

  // Summary Metrics
  const stats = useMemo(() => {
    const total = cases.length;
    const critical = cases.filter((c) => c.riskCategory === 'Critical').length;
    const high = cases.filter((c) => c.riskCategory === 'High').length;
    const active = cases.filter(
      (c) => c.status === 'Pending Triage' || c.status === 'Assessing' || c.status === 'Outreach Initiated'
    ).length;
    const overrides = cases.filter((c) => c.officerOverride).length;
    const resolved = cases.filter((c) => c.status === 'Resolved / Referred').length;
    const avgSvi = Math.round(cases.reduce((sum, c) => sum + c.sviScore, 0) / (total || 1));

    return { total, critical, high, active, overrides, resolved, avgSvi };
  }, [cases]);

  const getRiskBadge = (risk: RiskCategory) => {
    switch (risk) {
      case 'Critical':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-800">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
            <span>Critical</span>
          </span>
        );
      case 'High':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
            <span>High</span>
          </span>
        );
      case 'Moderate':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-yellow-800">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
            <span>Moderate</span>
          </span>
        );
      case 'Low':
      default:
        return (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>Low</span>
          </span>
        );
    }
  };

  const getStatusBadge = (status: CaseStatus) => {
    switch (status) {
      case 'Pending Triage':
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-900 border border-amber-200">
            Pending Triage
          </span>
        );
      case 'Assessing':
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-900 border border-blue-200">
            Assessing
          </span>
        );
      case 'Outreach Initiated':
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-indigo-50 text-indigo-900 border border-indigo-200">
            Outreach Initiated
          </span>
        );
      case 'Support Dispatched':
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-purple-50 text-purple-900 border border-purple-200">
            Support Dispatched
          </span>
        );
      case 'Resolved / Referred':
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-900 border border-emerald-200">
            Resolved / Referred
          </span>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Officer Header Bar */}
      <div className="p-4 sm:p-5 bg-white border border-stone-200 rounded-lg shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-stone-900 text-stone-100 flex items-center justify-center font-bold">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-stone-900">{officer.name}</h1>
              <span className="text-xs font-mono text-stone-500">Badge #{officer.badge}</span>
            </div>
            <div className="text-xs text-stone-500 flex items-center gap-2">
              <span>{officer.role}</span>
              <span>·</span>
              <span>{officer.unit}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="text-[11px] uppercase font-bold text-stone-400">Duty Status</div>
            <div className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5 justify-end">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Active Response Shift</span>
            </div>
          </div>

          <button
            onClick={onLogout}
            className="px-3 py-1.5 text-xs text-stone-600 hover:text-stone-900 border border-stone-200 hover:bg-stone-100 rounded transition-colors"
          >
            End Shift / Sign Out
          </button>
        </div>
      </div>

      {/* Case Statistics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="p-3.5 bg-white border border-stone-200 rounded-lg shadow-2xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
            Total Ingested
          </span>
          <div className="text-2xl font-bold font-mono text-stone-900 tabular-nums mt-1">
            {stats.total}
          </div>
          <span className="text-[11px] text-stone-400">All intake channels</span>
        </div>

        <div className="p-3.5 bg-white border border-stone-200 rounded-lg shadow-2xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 block">
            Critical Triage
          </span>
          <div className="text-2xl font-bold font-mono text-rose-700 tabular-nums mt-1">
            {stats.critical}
          </div>
          <span className="text-[11px] text-stone-400">SVI ≥ 80 Priority 1</span>
        </div>

        <div className="p-3.5 bg-white border border-stone-200 rounded-lg shadow-2xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
            High Urgency
          </span>
          <div className="text-2xl font-bold font-mono text-amber-700 tabular-nums mt-1">
            {stats.high}
          </div>
          <span className="text-[11px] text-stone-400">SVI 60–79 Priority 2</span>
        </div>

        <div className="p-3.5 bg-white border border-stone-200 rounded-lg shadow-2xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
            Active Outreach
          </span>
          <div className="text-2xl font-bold font-mono text-stone-900 tabular-nums mt-1">
            {stats.active}
          </div>
          <span className="text-[11px] text-stone-400">Pending or in contact</span>
        </div>

        <div className="p-3.5 bg-white border border-stone-200 rounded-lg shadow-2xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 block">
            Human Overrides
          </span>
          <div className="text-2xl font-bold font-mono text-purple-700 tabular-nums mt-1">
            {stats.overrides}
          </div>
          <span className="text-[11px] text-stone-400">Officer audited edits</span>
        </div>

        <div className="p-3.5 bg-white border border-stone-200 rounded-lg shadow-2xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
            Cases Resolved
          </span>
          <div className="text-2xl font-bold font-mono text-emerald-700 tabular-nums mt-1">
            {stats.resolved}
          </div>
          <span className="text-[11px] text-stone-400">Support mobilized</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 bg-white border border-stone-200 rounded-lg shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Segmented Risk Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-md overflow-x-auto">
            {(['All', 'Critical', 'High', 'Moderate', 'Low'] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRiskFilter(r)}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
                  riskFilter === r
                    ? 'bg-white text-stone-900 shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {r === 'All' ? 'All Triage' : `${r} SVI`}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Status Dropdown Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="bg-stone-50 border border-stone-300 rounded px-3 py-1.5 text-xs text-stone-800 focus:outline-hidden focus:ring-1 focus:ring-stone-900"
            >
              <option value="All">All Status Stages</option>
              <option value="Pending Triage">Pending Triage</option>
              <option value="Assessing">Assessing</option>
              <option value="Outreach Initiated">Outreach Initiated</option>
              <option value="Support Dispatched">Support Dispatched</option>
              <option value="Resolved / Referred">Resolved / Referred</option>
            </select>

            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by ID, name, keyword..."
                className="w-full pl-8 pr-3 py-1.5 bg-stone-50 border border-stone-300 rounded text-xs text-stone-900 focus:outline-hidden focus:ring-1 focus:ring-stone-900"
              />
            </div>
          </div>
        </div>
      </div>

      {/* High-Density Case Queue Table */}
      <div className="bg-white border border-stone-200 rounded-lg shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-stone-100/70 border-b border-stone-200 text-stone-600 uppercase tracking-wider font-semibold text-[11px]">
              <tr>
                <th className="py-3 px-4">Case ID & Time</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Complainant / Mode</th>
                <th className="py-3 px-4">SVI Score</th>
                <th className="py-3 px-4">Risk Level</th>
                <th className="py-3 px-4">Threat · Fear · Distress · Isolation</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Assigned Officer</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {filteredCases.length > 0 ? (
                filteredCases.map((c) => {
                  return (
                    <tr
                      key={c.id}
                      onClick={() => setSelectedCaseId(c.id)}
                      className="hover:bg-stone-50/80 cursor-pointer transition-colors"
                    >
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="font-mono font-bold text-stone-900">{c.id}</div>
                        <div className="text-[11px] text-stone-400 font-mono">
                          {new Date(c.createdAt).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </div>
                      </td>

                      <td className="py-3 px-4 whitespace-nowrap font-medium text-stone-800">
                        {c.category}
                      </td>

                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="font-semibold text-stone-900">{c.complainantName}</div>
                        <div className="text-[11px] text-stone-500 flex items-center gap-1">
                          {c.inputMethod === 'voice' ? (
                            <>
                              <Mic className="w-3 h-3 text-stone-500" />
                              <span>Spoken Voice ({c.audioDurationSeconds || 32}s)</span>
                            </>
                          ) : (
                            <>
                              <FileText className="w-3 h-3 text-stone-500" />
                              <span>Text Statement</span>
                            </>
                          )}
                        </div>
                      </td>

                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-sm text-stone-900 tabular-nums">
                            {c.sviScore}
                          </span>
                          <span className="text-[11px] text-stone-400">/ 100</span>
                        </div>
                      </td>

                      <td className="py-3 px-4 whitespace-nowrap">
                        {getRiskBadge(c.riskCategory)}
                      </td>

                      {/* Mini indicator metrics */}
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-3 text-[11px] font-mono tabular-nums">
                          <span title="Threat Score" className="text-rose-700">
                            T: {c.indicators.threat}
                          </span>
                          <span title="Fear Score" className="text-amber-700">
                            F: {c.indicators.fear}
                          </span>
                          <span title="Distress Score" className="text-yellow-700">
                            D: {c.indicators.distress}
                          </span>
                          <span title="Isolation Score" className="text-stone-600">
                            I: {c.indicators.isolation}
                          </span>
                        </div>
                      </td>

                      <td className="py-3 px-4 whitespace-nowrap">
                        {getStatusBadge(c.status)}
                      </td>

                      <td className="py-3 px-4 whitespace-nowrap text-stone-700">
                        {c.assignedOfficer}
                      </td>

                      <td className="py-3 px-4 whitespace-nowrap text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCaseId(c.id);
                          }}
                          className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded text-xs font-semibold inline-flex items-center gap-1 transition-colors"
                        >
                          <span>Review Dossier</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-stone-500">
                    <div className="space-y-2">
                      <p className="font-semibold text-stone-700">No cases match the active filter criteria.</p>
                      <button
                        onClick={() => {
                          setRiskFilter('All');
                          setStatusFilter('All');
                          setSearchQuery('');
                        }}
                        className="text-xs text-stone-900 underline font-medium"
                      >
                        Reset All Filters
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Case Detail Modal */}
      {selectedCase && (
        <CaseDetailModal
          caseRecord={selectedCase}
          currentOfficerName={officer.name}
          onClose={() => setSelectedCaseId(null)}
          onUpdateStatus={onUpdateStatus}
          onOverrideSvi={onOverrideSvi}
          onAddFollowUpNote={onAddFollowUpNote}
          onAssignOfficer={onAssignOfficer}
        />
      )}
    </div>
  );
};
