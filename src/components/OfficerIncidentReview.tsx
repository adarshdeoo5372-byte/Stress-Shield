import React, { useState } from 'react';
import {
  Shield,
  Layers,
  Activity,
  Radio,
  CheckCircle2,
  Lock,
  Printer,
  AlertTriangle,
  X,
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  Clock,
  ArrowRight,
  FileCheck,
  Send,
  MapPin,
  Car,
  Bell,
  LogOut,
  ChevronRight,
  FileText,
} from 'lucide-react';
import { StressShieldLogo } from './StressShieldLogo';
import { CaseRecord } from '../types';

interface OfficerIncidentReviewProps {
  caseRecord: CaseRecord;
  onBackToQueue: () => void;
  onSignOut: () => void;
}

export const OfficerIncidentReview: React.FC<OfficerIncidentReviewProps> = ({
  caseRecord,
  onBackToQueue,
  onSignOut,
}) => {
  // Officer SVI Validation Radio Selection
  const [selectedDecision, setSelectedDecision] = useState<
    'confirm-high' | 'escalate-critical' | 'downgrade-moderate'
  >('confirm-high');

  // Action directives executed checkboxes
  const [directives, setDirectives] = useState({
    dispatchMobile: true,
    shelterPlacement: true,
    silentOutreach: false,
    scheduledFollowup: true,
  });

  // Clinical notes
  const [officerNotes, setOfficerNotes] = useState(
    "Citizen expresses acute fear of physical reprisal and medication withholding (insulin). Unit 4B instructed to proceed under silent approach (no siren/lights) to avoid escalation. Direct link established with safe haven coordinator."
  );

  // Audio player state
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSeconds, setPlaybackSeconds] = useState(84); // 01:24
  const totalSeconds = 252; // 04:12

  const [isPlanAuthorized, setIsPlanAuthorized] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleAuthorizePlan = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPlanAuthorized(true);
    alert('Plan Authorized: Digital signature hash #99A-402 committed to Case Ledger Block #84910.');
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex text-slate-800 font-sans">
      {/* Left Sidebar (Image 5 exact) */}
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
              onClick={onBackToQueue}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-all cursor-pointer"
            >
              <Activity className="w-4 h-4 text-slate-400" />
              <span>Active Incident Triage</span>
            </button>

            <button
              onClick={onBackToQueue}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#134e5e] text-white shadow-2xs font-bold transition-all cursor-pointer"
            >
              <Layers className="w-4 h-4 text-teal-200" />
              <span>Intake Queue</span>
            </button>

            <button
              onClick={onBackToQueue}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-all cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4 text-slate-400" />
              <span>Human-in-Loop Audits</span>
            </button>

            <button
              onClick={onBackToQueue}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-all cursor-pointer"
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

      {/* Main Review Console Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Header */}
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

        {/* Content Body */}
        <main className="p-6 space-y-6 flex-1 max-w-7xl w-full mx-auto">
          {/* Breadcrumb + Header Title Row */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <button onClick={onBackToQueue} className="hover:underline">Officer Portal</button>
              <span>›</span>
              <button onClick={onBackToQueue} className="hover:underline">Intake Queue</button>
              <span>›</span>
              <span className="text-slate-800 font-mono font-bold">Case #CR-2024-8941</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Case Incident Review #CR-2024-8941
                </h1>
                <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 font-bold border border-red-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                    <span>Pending Human Verification</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                    CJIS COMPLIANT
                  </span>
                  <span className="text-slate-500">
                    Assigned Officer: <strong className="text-slate-900 font-semibold">Sgt. J. Miller</strong> (Crisis Intervention Specialist, CIT-Unit 3)
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <button
                  onClick={() => window.print()}
                  className="px-3.5 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-500" />
                  <span>Print Case Report</span>
                </button>

                <button
                  onClick={() => alert('🚨 Escalated: Mobile Crisis Team Unit 4B mobilized with silent perimeter staging.')}
                  className="px-4 py-2 bg-[#dc2626] hover:bg-red-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                >
                  <AlertTriangle className="w-4 h-4" />
                  <span>Escalate to Mobile Crisis Team</span>
                </button>

                <button
                  onClick={onBackToQueue}
                  className="px-3.5 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close Case
                </button>
              </div>
            </div>
          </div>

          {/* Mandatory Human Oversight Protocol Callout Ribbon */}
          <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4 text-teal-800" />
              </div>
              <div className="text-xs">
                <strong className="text-slate-900 block font-bold">
                  Mandatory Human Oversight Protocol
                </strong>
                <p className="text-slate-500 mt-0.5">
                  Public safety mandate: AI-calculated Severe Vulnerability Index (SVI) provides preliminary prioritization. Statutory dispatch requires sworn specialist review.
                </p>
              </div>
            </div>

            <span className="text-[11px] font-mono text-slate-500 shrink-0">
              ⏱ Queue Ingestion: <strong>14m ago</strong> (Within 20m SLA)
            </span>
          </div>

          {/* 2-Column Incident Review Layout (Image 5 exact) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column (7 cols): Demographics, Audio Player, Verbatim Transcript, Vicinity Map */}
            <div className="lg:col-span-7 space-y-6">
              {/* Complainant Demographics & Profile */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">👤</span>
                    <h3 className="text-sm font-bold text-slate-900">
                      Complainant Demographics & Profile
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 text-[10px] font-bold rounded border border-emerald-200 uppercase tracking-wider">
                    MASKED & PROTECTED
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl space-y-0.5">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">
                      Subject Profile
                    </span>
                    <div className="text-xs font-bold text-slate-900">Female, ~ 30-35</div>
                    <div className="text-[10px] text-slate-500">Self-reported demographic</div>
                  </div>

                  <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl space-y-0.5">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">
                      Contact Vector
                    </span>
                    <div className="text-xs font-bold text-slate-900">Secure Callback</div>
                    <div className="text-[10px] text-slate-500 font-mono">+1(555) •••-8291 (Masked)</div>
                  </div>

                  <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl space-y-0.5">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">
                      Geolocation Sector
                    </span>
                    <div className="text-xs font-bold text-slate-900">Sector 4 - West</div>
                    <div className="text-[10px] text-slate-500">Cellular triangulated ±80m</div>
                  </div>
                </div>

                {/* Self-Identified Distress Signals Pills */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-bold text-slate-600">
                    Self-Identified Distress Signals
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2.5 py-1 bg-red-50 text-red-800 border border-red-200 rounded-full font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span>Threats to Safety</span>
                    </span>
                    <span className="px-2.5 py-1 bg-red-50 text-red-800 border border-red-200 rounded-full font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span>Severe Distress</span>
                    </span>
                    <span className="px-2.5 py-1 bg-teal-50 text-teal-800 border border-teal-200 rounded-full font-semibold flex items-center gap-1">
                      <span>🏠 Need Immediate Safe Housing</span>
                    </span>
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full font-medium">
                      No Weapons Reported
                    </span>
                  </div>
                </div>
              </div>

              {/* Audio Evidence Recording (VOIP Ingest) */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-teal-800" />
                    <h3 className="text-sm font-bold text-slate-900">
                      Audio Evidence Recording (VOIP Ingest)
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    Quality: 16-bit PCM • Lossless
                  </span>
                </div>

                <div className="p-4 bg-[#f8fafc] border border-slate-200 rounded-xl space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-teal-800 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
                      <span>Voice Biomarker: Tremor & elevated respiratory pace detected</span>
                    </div>
                    <span className="font-mono text-slate-600 font-bold">01:24 / 04:12</span>
                  </div>

                  {/* Waveform Graphic Simulation */}
                  <div className="h-10 bg-white border border-slate-200 rounded-lg flex items-center px-4 gap-1 overflow-hidden">
                    {[
                      6, 12, 18, 28, 22, 14, 8, 16, 24, 32, 26, 18, 12, 8, 14, 20, 30, 24, 16, 10,
                      8, 16, 28, 34, 26, 18, 12, 8, 16, 24, 30, 22, 14, 8, 12, 20, 28, 24, 16, 8,
                    ].map((h, i) => (
                      <div
                        key={i}
                        className={`w-1 rounded-full transition-all ${
                          i < 16 ? 'bg-[#0f766e]' : 'bg-slate-300'
                        }`}
                        style={{ height: `${h}px` }}
                      />
                    ))}
                  </div>

                  {/* Audio Controls */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleTogglePlay}
                        className="w-8 h-8 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white flex items-center justify-center transition-colors cursor-pointer"
                      >
                        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                      </button>
                      <button className="p-1.5 text-slate-500 hover:text-slate-800 rounded">
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 text-slate-500 hover:text-slate-800 rounded">
                        <RotateCw className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-mono font-bold text-slate-700 ml-1">1.0x</span>
                    </div>

                    <button className="text-xs text-slate-500 hover:text-slate-900 font-semibold flex items-center gap-1">
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Speaker Out</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Verbatim Transcribed Narrative */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-teal-800" />
                    <h3 className="text-sm font-bold text-slate-900">
                      Verbatim Transcribed Narrative
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 bg-red-100 text-red-800 rounded text-[10px] font-bold">
                      ● ACUTE FEAR
                    </span>
                    <span className="px-2 py-0.5 bg-red-100 text-red-800 rounded text-[10px] font-bold">
                      ● COERCION
                    </span>
                  </div>
                </div>

                {/* Narrative with timestamps & highlighted text (Image 5 exact) */}
                <div className="p-4 bg-[#f8fafc] border border-slate-200 rounded-xl space-y-3 text-xs leading-relaxed font-mono">
                  <p>
                    <span className="text-slate-400 font-semibold">[00:04]</span> "I don't know who else to call without him seeing my phone logs. I'm locked in the utility closet right now.{' '}
                    <span className="bg-red-50 text-red-700 font-bold px-1 rounded">
                      He told me if I walk out the front door tonight he won't let me back in to get my insulin or my daughter's clothes.
                    </span>{' '}
                    He took the keys to the vehicle."
                  </p>

                  <p>
                    <span className="text-slate-400 font-semibold">[00:48]</span> "I heard footsteps right outside in the hallway a minute ago.{' '}
                    <span className="bg-red-50 text-red-700 font-bold px-1 rounded">
                      He is pacing outside now and pounding on the wood.
                    </span>{' '}
                    I don't have relatives within three hundred miles and he warned me that police will only make this ten times worse. Please don't send sirens with loud horns, it will trigger him, but I need someone to help me get out safely."
                  </p>

                  <p>
                    <span className="text-slate-400 font-semibold">[01:21]</span> "My battery is down to 8 percent. I can hear him shouting at the neighbor outside. Please... I have nowhere else to go tonight."
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100 pt-3">
                  <span>Automated Speech-to-Text: Whisper-Gov Engine v4.2</span>
                  <span className="font-semibold text-teal-800">Distress Linguistic Confidence: 96.4%</span>
                </div>
              </div>

              {/* Dispatch Vicinity & Tactical Access Map */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-800" />
                    <h3 className="text-sm font-bold text-slate-900">
                      Dispatch Vicinity & Tactical Access Map
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[10px] font-bold uppercase tracking-wider">
                    SILENT APPROACH DESIGNATED
                  </span>
                </div>

                <div className="p-4 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-900 flex items-center justify-center shrink-0">
                      <Car className="w-5 h-5 text-[#0f766e]" />
                    </div>
                    <div className="text-xs">
                      <div className="font-bold text-slate-900">Zone 4B • Multi-Dwelling Residential</div>
                      <div className="text-slate-500 mt-0.5">
                        Alleyway rear access recommended • Silent vehicle staging 200m south
                      </div>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 bg-teal-50 border border-teal-200 text-teal-900 rounded-md text-xs font-semibold">
                    Tactical Perimeter Active
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Algorithmic Risk Index (78/100) + HITL Decision Center */}
            <div className="lg:col-span-5 space-y-6">
              {/* Algorithmic Risk Index Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    ALGORITHMIC RISK INDEX
                  </span>
                  <span className="px-2.5 py-0.5 bg-red-100 text-red-800 text-xs font-bold rounded-full">
                    HIGH RISK
                  </span>
                </div>

                {/* SVI Radial Gauge & Header */}
                <div className="flex items-center gap-4 py-2">
                  <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                      <circle cx="50" cy="50" r="40" stroke="#f1f5f9" strokeWidth="10" fill="transparent" />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#dc2626"
                        strokeWidth="10"
                        strokeDasharray="251.2"
                        strokeDashoffset={251.2 - 0.78 * 251.2}
                        strokeLinecap="round"
                        fill="transparent"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center font-mono">
                      <span className="text-2xl font-black text-slate-900 leading-none">78</span>
                      <span className="text-[9px] text-slate-400">/ 100 SVI</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-tight">
                      Severe Vulnerability Index
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-snug mt-1">
                      Combines real-time audio stress acoustics, lexical threat modeling, and immediate physical confinement factors.
                    </p>
                  </div>
                </div>

                {/* Explainable AI (XAI) Feature Weights */}
                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>Explainable AI (XAI) Feature Weights</span>
                    <span className="font-mono text-slate-400 text-[10px]">Calibrated Model v2.6</span>
                  </div>

                  {/* Weight 1 */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-600">Acute Distress Marker (Acoustic Tremor)</span>
                      <span className="font-mono font-bold text-slate-800">38%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-red-600 rounded-full" style={{ width: '38%' }} />
                    </div>
                  </div>

                  {/* Weight 2 */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-600">Threat & Intimidation Lexicon</span>
                      <span className="font-mono font-bold text-slate-800">31%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-800 rounded-full" style={{ width: '31%' }} />
                    </div>
                  </div>

                  {/* Weight 3 */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-600">Temporal Urgency ("tonight", "outside now")</span>
                      <span className="font-mono font-bold text-slate-800">19%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-600 rounded-full" style={{ width: '19%' }} />
                    </div>
                  </div>

                  {/* Weight 4 */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-600">Social & Support Isolation Index</span>
                      <span className="font-mono font-bold text-slate-800">12%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-400 rounded-full" style={{ width: '12%' }} />
                    </div>
                  </div>
                </div>

                {/* Decision Support Only Notice */}
                <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-xl text-[11px] text-amber-900 leading-relaxed flex items-start gap-2">
                  <Shield className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Decision Support Only:</strong> All model triage must be validated by a certified CIT officer prior to field dispatch execution.
                  </span>
                </div>
              </div>

              {/* Human-in-the-Loop Decision Center (Image 5 exact) */}
              <form
                onSubmit={handleAuthorizePlan}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <h3 className="text-sm font-bold text-slate-900">
                      Human-in-the-Loop Decision Center
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold font-mono text-slate-400">
                    STEP 3 OF 3
                  </span>
                </div>

                {/* Officer SVI Validation Assessment Radios */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-700">
                    Officer SVI Validation Assessment
                  </span>

                  <label className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 bg-[#f8fafc] cursor-pointer hover:bg-slate-50 transition-colors">
                    <input
                      type="radio"
                      name="sviDecision"
                      checked={selectedDecision === 'confirm-high'}
                      onChange={() => setSelectedDecision('confirm-high')}
                      className="mt-0.5 text-teal-800 focus:ring-teal-700"
                    />
                    <div className="text-xs">
                      <span className="font-bold text-slate-900">Confirm High Risk (SVI 78)</span>
                      <p className="text-slate-500 text-[11px] mt-0.5">
                        Concurs with threat presence, confinement, and urgent timeline.
                      </p>
                    </div>
                  </label>

                  <label className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 bg-white cursor-pointer hover:bg-slate-50 transition-colors">
                    <input
                      type="radio"
                      name="sviDecision"
                      checked={selectedDecision === 'escalate-critical'}
                      onChange={() => setSelectedDecision('escalate-critical')}
                      className="mt-0.5 text-teal-800 focus:ring-teal-700"
                    />
                    <div className="text-xs">
                      <span className="font-bold text-red-700">Escalate to Critical (Imminent Danger)</span>
                      <p className="text-slate-500 text-[11px] mt-0.5">
                        Activate immediate emergency breach & priority mobile response.
                      </p>
                    </div>
                  </label>

                  <label className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 bg-white cursor-pointer hover:bg-slate-50 transition-colors">
                    <input
                      type="radio"
                      name="sviDecision"
                      checked={selectedDecision === 'downgrade-moderate'}
                      onChange={() => setSelectedDecision('downgrade-moderate')}
                      className="mt-0.5 text-teal-800 focus:ring-teal-700"
                    />
                    <div className="text-xs">
                      <span className="font-bold text-slate-700">Downgrade to Moderate Risk</span>
                      <p className="text-slate-500 text-[11px] mt-0.5">
                        Routine safe referral without tactical crisis team dispatch.
                      </p>
                    </div>
                  </label>
                </div>

                {/* Action Directives Executed Checkboxes */}
                <div className="space-y-2 pt-1 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-700">
                    Action Directives Executed
                  </span>

                  <div className="space-y-2 text-xs">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={directives.dispatchMobile}
                        onChange={(e) => setDirectives({ ...directives, dispatchMobile: e.target.checked })}
                        className="rounded text-teal-800 focus:ring-teal-700"
                      />
                      <span className="text-slate-800">
                        Dispatched Mobile Crisis Support Team (Unit 4B)
                      </span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={directives.shelterPlacement}
                        onChange={(e) => setDirectives({ ...directives, shelterPlacement: e.target.checked })}
                        className="rounded text-teal-800 focus:ring-teal-700"
                      />
                      <span className="text-slate-800">
                        Coordinated Emergency Safe Shelter Placement (SafeHaven House)
                      </span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={directives.silentOutreach}
                        onChange={(e) => setDirectives({ ...directives, silentOutreach: e.target.checked })}
                        className="rounded text-teal-800 focus:ring-teal-700"
                      />
                      <span className="text-slate-800">
                        Initiated Direct Silent Telephone Outreach / Text Relay
                      </span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={directives.scheduledFollowup}
                        onChange={(e) => setDirectives({ ...directives, scheduledFollowup: e.target.checked })}
                        className="rounded text-teal-800 focus:ring-teal-700"
                      />
                      <span className="text-slate-800">
                        Scheduled 24-Hour Mental Health Field Follow-up
                      </span>
                    </label>
                  </div>
                </div>

                {/* Officer Incident & Clinical Assessment Notes */}
                <div className="space-y-1.5 pt-1 border-t border-slate-100">
                  <label className="block text-xs font-bold text-slate-700">
                    Officer Incident & Clinical Assessment Notes
                  </label>
                  <textarea
                    rows={3}
                    value={officerNotes}
                    onChange={(e) => setOfficerNotes(e.target.value)}
                    className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl p-3 text-xs text-slate-800 leading-relaxed focus:outline-hidden focus:border-teal-500"
                  />
                </div>

                {/* Digital Signature Authenticated Box */}
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <div>
                      <div className="font-bold text-slate-900">Digital Signature Authenticated</div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        Sgt. J. Miller • CIT Badge #CR-4409 • Hash #99A-402
                      </div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>

                {/* Authorize Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#0f3b47] hover:bg-[#0c2f39] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <FileCheck className="w-4 h-4 text-teal-300" />
                  <span>Sign & Authorize Intervention Plan</span>
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Immutable Case Timeline & Evidence Audit Log (Image 5 exact) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-500" />
                <h3 className="text-sm font-bold text-slate-900">
                  Immutable Case Timeline & Evidence Audit Log
                </h3>
              </div>
              <span className="text-[10px] font-mono text-slate-400 font-bold">
                LEDGER BLOCK #84910
              </span>
            </div>

            <div className="space-y-3 pt-2">
              {/* Event 1 */}
              <div className="flex items-start justify-between text-xs pb-3 border-b border-slate-100">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Crisis Intake Ingestion</span>
                    <span className="text-slate-500 text-[11px]">
                      Citizen initiated voice intake via StressShield Secure Civilian Portal. Audio converted and encrypted.
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-slate-400 font-bold whitespace-nowrap ml-4">
                  14:22:04 EST
                </span>
              </div>

              {/* Event 2 */}
              <div className="flex items-start justify-between text-xs pb-3 border-b border-slate-100">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Automated AI Triage & SVI Computation</span>
                    <span className="text-slate-500 text-[11px]">
                      SVI evaluated at 78/100 (High Risk). Acoustic stress markers flagged; immediate shelter need identified.
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-slate-400 font-bold whitespace-nowrap ml-4">
                  14:22:18 EST
                </span>
              </div>

              {/* Event 3 */}
              <div className="flex items-start justify-between text-xs pb-3 border-b border-slate-100">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Officer Docket Claim</span>
                    <span className="text-slate-500 text-[11px]">
                      Sgt. J. Miller (CIT Specialist) claimed priority ticket from Tier 1 Intake Queue.
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-slate-400 font-bold whitespace-nowrap ml-4">
                  14:25:30 EST
                </span>
              </div>

              {/* Event 4 */}
              <div className="flex items-start justify-between text-xs">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-600 mt-1.5 animate-pulse" />
                  <div>
                    <span className="font-bold text-red-700 block">
                      Field Dispatch Stage: Mobilizing Support Unit 4B
                    </span>
                    <span className="text-slate-500 text-[11px]">
                      Pre-staging mobile mental health clinician and un-badged liaison at Perimeter 4-West.
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-red-600 font-bold whitespace-nowrap ml-4">
                  Active Incident
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
