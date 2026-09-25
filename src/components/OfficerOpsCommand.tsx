import React, { useState } from 'react';
import {
  Shield,
  Activity,
  Layers,
  Users,
  Radio,
  Search,
  SlidersHorizontal,
  ChevronDown,
  AlertTriangle,
  Clock,
  CheckCircle2,
  ExternalLink,
  PhoneCall,
  Volume2,
  FileText,
  TrendingUp,
  UserCheck,
  ChevronRight,
  LogOut,
  Bell,
  User,
  ShieldCheck,
} from 'lucide-react';
import { StressShieldLogo } from './StressShieldLogo';
import { CaseRecord } from '../types';

interface OfficerOpsCommandProps {
  cases: CaseRecord[];
  onSelectCase: (caseId: string) => void;
  onSignOut: () => void;
}

export const OfficerOpsCommand: React.FC<OfficerOpsCommandProps> = ({
  cases,
  onSelectCase,
  onSignOut,
}) => {
  const [activeNav, setActiveNav] = useState<
    'active-triage' | 'intake-queue' | 'hitl-audits' | 'field-roster'
  >('active-triage');
  const [searchQuery, setSearchQuery] = useState('');
  const [riskFilter, setRiskFilter] = useState<'All' | 'Critical' | 'High' | 'Moderate' | 'Low'>('All');
  const [priorityDispatchMode, setPriorityDispatchMode] = useState(true);

  // Filter cases
  const filteredCases = cases.filter((c) => {
    if (riskFilter !== 'All' && c.riskCategory !== riskFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      if (!c.id.toLowerCase().includes(q) && !c.complainantName.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex text-slate-800 font-sans">
      {/* Left Sidebar (Image 4 exact) */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between shrink-0">
        <div className="space-y-6">
          {/* Top Brand Block */}
          <div className="p-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <StressShieldLogo size="sm" variant="icon" />
              <div>
                <div className="text-sm font-bold text-slate-900 tracking-tight leading-none">
                  StressShield
                </div>
                <div className="text-[9px] font-bold text-teal-800 tracking-wider uppercase mt-0.5">
                  OFFICER OPS COMMAND
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="px-3 space-y-1 text-xs font-semibold">
            <button
              onClick={() => setActiveNav('active-triage')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeNav === 'active-triage'
                  ? 'bg-[#134e5e] text-white shadow-2xs font-bold'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Activity className="w-4 h-4 text-teal-200" />
              <span>Active Incident Triage</span>
            </button>

            <button
              onClick={() => setActiveNav('intake-queue')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeNav === 'intake-queue'
                  ? 'bg-[#134e5e] text-white shadow-2xs font-bold'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4 text-slate-400" />
              <span>Intake Queue</span>
            </button>

            <button
              onClick={() => setActiveNav('hitl-audits')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeNav === 'hitl-audits'
                  ? 'bg-[#134e5e] text-white shadow-2xs font-bold'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-slate-400" />
              <span>Human-in-Loop Audits</span>
            </button>

            <button
              onClick={() => setActiveNav('field-roster')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeNav === 'field-roster'
                  ? 'bg-[#134e5e] text-white shadow-2xs font-bold'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Radio className="w-4 h-4 text-slate-400" />
              <span>Field Dispatch Roster</span>
            </button>
          </nav>
        </div>

        {/* Bottom Secure Unit Badge */}
        <div className="p-4 border-t border-slate-100 space-y-3">
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                SECURE UNIT
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="text-xs font-bold text-slate-900">
              Badge #CR-4409 (Command)
            </div>
            <div className="text-[11px] text-slate-500">Region 4 Crisis Sector</div>
          </div>

          <button
            onClick={onSignOut}
            className="w-full py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5 text-slate-400" />
            <span>Sign Out to Public</span>
          </button>
        </div>
      </aside>

      {/* Main Command Console Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Operational Status Header Bar */}
        <header className="bg-white border-b border-slate-200 h-16 px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-[10px] font-mono font-bold rounded flex items-center gap-1">
              <Shield className="w-3 h-3 text-teal-800" />
              <span>CJIS TIER-4 ENCRYPTED</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-full text-xs font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Emergency Status: Operational</span>
            </div>

            <button className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors">
              <Bell className="w-4 h-4" />
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
              JM
            </div>
          </div>
        </header>

        {/* Console Body */}
        <main className="p-6 space-y-6 flex-1">
          {/* Main Title Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>LIVE STREAM ACTIVE</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-500">CJIS Protocol 104-B Verified</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Crisis Intake Queue & Triage Operations
              </h1>
              <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
                Real-time AI-assisted triage stream with Human-in-the-Loop review protocol. Continuous multi-modal stress metric validation.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={() => alert('🚨 EMERGENCY BROADCAST ACTIVATED: Audio priority override sent to all active Crisis Units in Sector 4.')}
                className="px-3.5 py-2 bg-[#dc2626] hover:bg-red-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>Emergency Broadcast <span className="opacity-80 text-[10px]">ESC 3x</span></span>
              </button>

              <button
                onClick={() => alert('Exporting encrypted shift log ledger')}
                className="px-3.5 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Clock className="w-4 h-4 text-slate-500" />
                <span>Shift Logs</span>
              </button>
            </div>
          </div>

          {/* 4 Metric Cards Row (Image 4 exact) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[11px] font-bold uppercase tracking-wider">
                  Active Priority Cases
                </span>
                <span className="p-1 rounded-md bg-slate-100 text-slate-600">
                  <Bell className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold font-mono text-slate-900">18</span>
                <span className="text-xs font-bold text-red-600">↑ 3 in last hr</span>
              </div>
              <div className="text-[11px] text-slate-500 flex justify-between pt-1 border-t border-slate-100">
                <span>Pending intake sorting</span>
                <span className="font-semibold text-slate-800">12 queued</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-700">
                  Critical / High SVI Tier
                </span>
                <span className="p-1 rounded-md bg-red-50 text-red-700">
                  <Activity className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold font-mono text-red-600">7</span>
                <span className="text-xs font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded">Immediate attention</span>
              </div>
              <div className="text-[11px] text-slate-500 flex justify-between pt-1 border-t border-slate-100">
                <span>3 Mobile units active</span>
                <span className="font-semibold text-red-700">4 unassigned</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[11px] font-bold uppercase tracking-wider">
                  Avg AI-to-Human Review
                </span>
                <span className="p-1 rounded-md bg-slate-100 text-slate-600">
                  <Clock className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold font-mono text-slate-900">4m 12s</span>
                <span className="text-[11px] text-emerald-700 font-semibold">✓ Target: &lt; 8m</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-600 rounded-full" style={{ width: '48%' }} />
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
                  Human Review Compliance
                </span>
                <span className="p-1 rounded-md bg-teal-50 text-teal-800">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold font-mono text-slate-900">100%</span>
                <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">HITL Cleared</span>
              </div>
              <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                All scores verified <span className="font-semibold text-slate-800">0 drift errors</span>
              </div>
            </div>
          </div>

          {/* Main Layout Grid: Table on Left (8 cols) + Unit Commander / Fast Links Rail on Right (4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Table Area (8 cols) */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden space-y-3">
              {/* Filter controls bar */}
              <div className="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="relative flex-1 min-w-[180px]">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search reference, keywords..."
                    className="w-full pl-8 pr-3 py-1.5 bg-[#f8fafc] border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-hidden focus:border-teal-500"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <select
                    value={riskFilter}
                    onChange={(e) => setRiskFilter(e.target.value as any)}
                    className="bg-[#f8fafc] border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-700 font-medium"
                  >
                    <option value="All">Risk Tier: All Levels</option>
                    <option value="Critical">Critical Only</option>
                    <option value="High">High Urgency</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Low">Low</option>
                  </select>

                  <select className="bg-[#f8fafc] border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-700 font-medium">
                    <option>Pending Human Review</option>
                    <option>Assessing</option>
                    <option>Dispatched</option>
                  </select>

                  <select className="bg-[#f8fafc] border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-700 font-medium">
                    <option>Source: Voice & Text</option>
                    <option>Voice Only</option>
                    <option>Text Only</option>
                  </select>
                </div>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#f8fafc] border-b border-slate-100 text-slate-400 font-semibold text-[11px] uppercase tracking-wider">
                    <tr>
                      <th className="py-2.5 px-4">Case Reference</th>
                      <th className="py-2.5 px-4">Victim / Complainant</th>
                      <th className="py-2.5 px-4">SVI Score</th>
                      <th className="py-2.5 px-4">Key Indicators</th>
                      <th className="py-2.5 px-4">Modality</th>
                      <th className="py-2.5 px-4">Wait</th>
                      <th className="py-2.5 px-4">Lifecycle Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {/* Row 1 (#CR-2024-8941 exact match from screenshot) */}
                    <tr
                      onClick={() => onSelectCase('SHIELD-2026-9182')}
                      className="hover:bg-slate-50 cursor-pointer transition-colors"
                    >
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-3.5 bg-red-600 rounded-full" />
                          <span className="font-mono font-bold text-slate-900">#CR-2024-8941</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900">Anonymous</div>
                        <div className="text-[11px] text-slate-400">Female, 32</div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                          ● 78 (High)
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1 text-[10px]">
                          <span className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-700">Threat</span>
                          <span className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-700">Severe Distress</span>
                          <span className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-700">Fear</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-slate-600 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <Volume2 className="w-3.5 h-3.5 text-slate-400" />
                          <span>Voice (04:12)</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-slate-700">4 mins</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-red-50 text-red-700 border border-red-200">
                          Pending Review
                        </span>
                      </td>
                    </tr>

                    {/* Row 2 (#CR-2024-8939) */}
                    <tr
                      onClick={() => onSelectCase('SHIELD-2026-8941')}
                      className="hover:bg-slate-50 cursor-pointer transition-colors"
                    >
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-3.5 bg-red-600 rounded-full" />
                          <span className="font-mono font-bold text-slate-900">#CR-2024-8939</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900">Mark D.</div>
                        <div className="text-[11px] text-slate-400">Verified ID #908</div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-red-50 text-red-800 border border-red-200">
                          ● 92 (Critical)
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1 text-[10px]">
                          <span className="px-1.5 py-0.5 bg-red-100 text-red-800 rounded">Imminent Harm</span>
                          <span className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-700">Isolation</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-slate-600 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <FileText className="w-3.5 h-3.5 text-slate-400" />
                          <span>Text Narrative</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-slate-700">1 min</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                          Dispatch En Route
                        </span>
                      </td>
                    </tr>

                    {/* Row 3 (#CR-2024-8935) */}
                    <tr
                      onClick={() => onSelectCase('SHIELD-2026-7820')}
                      className="hover:bg-slate-50 cursor-pointer transition-colors"
                    >
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-3.5 bg-amber-500 rounded-full" />
                          <span className="font-mono font-bold text-slate-900">#CR-2024-8935</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900">Anonymous</div>
                        <div className="text-[11px] text-slate-400">Geo: Sector 4-B</div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-yellow-50 text-yellow-800 border border-yellow-200">
                          ● 54 (Moderate)
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1 text-[10px]">
                          <span className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-700">Distress</span>
                          <span className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-700">Financial Loss</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-slate-600 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <FileText className="w-3.5 h-3.5 text-slate-400" />
                          <span>Text Narrative</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-slate-700">18 mins</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-700">
                          Assigned
                        </span>
                      </td>
                    </tr>

                    {/* Row 4 (#CR-2024-8928) */}
                    <tr
                      onClick={() => onSelectCase('SHIELD-2026-3890')}
                      className="hover:bg-slate-50 cursor-pointer transition-colors"
                    >
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-3.5 bg-emerald-500 rounded-full" />
                          <span className="font-mono font-bold text-slate-900">#CR-2024-8928</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900">Elena R.</div>
                        <div className="text-[11px] text-slate-400">Caller Verified</div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          ● 26 (Low)
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1 text-[10px]">
                          <span className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-700">Follow-up query</span>
                          <span className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-700">Mild stress</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-slate-600 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <Volume2 className="w-3.5 h-3.5 text-slate-400" />
                          <span>Voice (01:10)</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-slate-700">35 mins</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Resource Sent
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table pagination */}
              <div className="p-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Showing 4 of 18 active intake events</span>
                <div className="flex items-center gap-1 font-mono">
                  <span className="px-2 py-1 bg-slate-100 rounded font-bold text-slate-900">1</span>
                  <span className="px-2 py-1 hover:bg-slate-100 rounded cursor-pointer">2</span>
                  <span className="px-2 py-1 hover:bg-slate-100 rounded cursor-pointer">3</span>
                  <span>...</span>
                  <span className="px-2 py-1 hover:bg-slate-100 rounded cursor-pointer">5</span>
                </div>
              </div>
            </div>

            {/* Right Side Widgets (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              {/* Unit Commander Profile Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    UNIT COMMANDER PROFILE
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0f3b47] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    SM
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Sgt. Miller</div>
                    <div className="text-xs text-slate-500">CIT Certified #4092</div>
                    <div className="text-[10px] font-bold text-teal-800 tracking-wider uppercase">
                      WATCH COMMANDER
                    </div>
                  </div>
                </div>

                {/* Priority Dispatch Mode Switch */}
                <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center justify-between">
                  <div className="text-xs">
                    <div className="font-bold text-slate-900">Priority Dispatch Mode</div>
                    <div className="text-[11px] text-slate-500">Ready for auto-routing</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPriorityDispatchMode(!priorityDispatchMode)}
                    className={`w-10 h-6 rounded-full transition-colors relative cursor-pointer ${
                      priorityDispatchMode ? 'bg-[#0f766e]' : 'bg-slate-300'
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                        priorityDispatchMode ? 'left-5' : 'left-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Shift Details */}
                <div className="text-xs text-slate-600 space-y-1.5 pt-1 border-t border-slate-100">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Shift Time:</span>
                    <span className="font-mono font-medium">06:00 - 18:00 (H+4.2)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Radio Comm:</span>
                    <span className="font-mono font-medium">Channel TAC-4 (Crisis)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Sector Perimeter:</span>
                    <span className="font-mono font-medium">North & Central Quad</span>
                  </div>
                </div>
              </div>

              {/* Fast Tactical Links */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  ⚡ FAST TACTICAL LINKS
                </span>

                <div className="space-y-2">
                  <button
                    onClick={() => alert('Launching Emergency Dispatch (CAD) console bridge.')}
                    className="w-full p-2.5 bg-[#f8fafc] hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Radio className="w-3.5 h-3.5 text-rose-600" />
                      <span>Emergency Dispatch (CAD)</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  <button
                    onClick={() => alert('Accessing Crisis Shelters Real-Time Bed Roster.')}
                    className="w-full p-2.5 bg-[#f8fafc] hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-teal-700" />
                      <span>Crisis Shelters Roster</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  <button
                    onClick={() => alert('Escalating docket to District Supervisory Commander.')}
                    className="w-full p-2.5 bg-[#f8fafc] hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <UserCheck className="w-3.5 h-3.5 text-purple-700" />
                      <span>Supervisor Escalation</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>
              </div>

              {/* Sector 4 Field Units */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">Sector 4 Field Units</span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    5 ONLINE
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-[#f8fafc] rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="font-semibold text-slate-800">Unit Car 14 (CIT)</span>
                    </div>
                    <span className="text-[11px] text-slate-500">Available</span>
                  </div>

                  <div className="p-2 bg-[#f8fafc] rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="font-semibold text-slate-800">Unit Car 09 (Mobile)</span>
                    </div>
                    <span className="text-[11px] text-red-700 font-medium">On Scene #8939</span>
                  </div>

                  <div className="p-2 bg-[#f8fafc] rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="font-semibold text-slate-800">Social Worker Unit 3</span>
                    </div>
                    <span className="text-[11px] text-slate-500">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Human-in-the-Loop AI Audit Stream Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <h3 className="text-sm font-bold text-slate-900">
                  Human-in-the-Loop AI Audit Stream
                </h3>
                <span className="text-xs text-slate-500 hidden sm:inline">
                  Continuous automated oversight validating sentiment analysis against CIT intervention thresholds.
                </span>
              </div>
              <span className="px-2.5 py-1 bg-[#ccfbf1] text-[#0f766e] text-xs font-bold rounded-full">
                System Health: 99.98%
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  MODEL CONFIDENCE
                </span>
                <div className="text-lg font-bold text-slate-900">94.8% Reliability</div>
                <div className="text-[11px] text-slate-500">Tested across 1,420 multi-modal crisis calls</div>
              </div>

              <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  FALSE ESCALATION RATE
                </span>
                <div className="text-lg font-bold text-emerald-700">0.03% Variance</div>
                <div className="text-[11px] text-slate-500">Within federal tier-1 tolerance margins</div>
              </div>

              <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  SUPERVISORY SIGNOFFS
                </span>
                <div className="text-lg font-bold text-slate-900">48 / 48 Cases</div>
                <div className="text-[11px] text-slate-500">Zero unreviewed automated escalations</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
