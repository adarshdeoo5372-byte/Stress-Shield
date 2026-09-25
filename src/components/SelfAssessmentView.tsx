import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Lock,
  Activity,
  Heart,
  PhoneCall,
  CheckCircle2,
  Clock,
  Download,
  AlertCircle,
  Play,
  Pause,
  MapPin,
  Car,
  ChevronRight,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { CaseRecord } from '../types';

interface SelfAssessmentViewProps {
  caseRecord?: CaseRecord | null;
  onOpenOfficerPortal: () => void;
  onBackToHome: () => void;
}

export const SelfAssessmentView: React.FC<SelfAssessmentViewProps> = ({
  caseRecord,
  onOpenOfficerPortal,
  onBackToHome,
}) => {
  // Box Breathing Interactive State (4-4-4 technique)
  const [breathingPhase, setBreathingPhase] = useState<'Inhale' | 'Hold' | 'Exhale'>('Hold');
  const [phaseSeconds, setPhaseSeconds] = useState(2);
  const [isBreathingActive, setIsBreathingActive] = useState(true);
  const [completedCycles, setCompletedCycles] = useState(2);

  // Safety checklist state
  const [safetyChecklist, setSafetyChecklist] = useState({
    perimeter: true,
    mobile: true,
    hydrate: false,
    contact: false,
  });

  useEffect(() => {
    if (!isBreathingActive) return;
    const interval = setInterval(() => {
      setPhaseSeconds((prev) => {
        if (prev <= 1) {
          // Advance phase
          if (breathingPhase === 'Inhale') {
            setBreathingPhase('Hold');
            return 4;
          } else if (breathingPhase === 'Hold') {
            setBreathingPhase('Exhale');
            return 4;
          } else {
            setBreathingPhase('Inhale');
            setCompletedCycles((c) => c + 1);
            return 4;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isBreathingActive, breathingPhase]);

  const score = caseRecord ? caseRecord.sviScore : 78;

  return (
    <div className="bg-[#f8fafc] text-slate-800 space-y-8 pb-16 pt-6">
      {/* 4 Pipeline Steps Ribbon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Step 1 */}
          <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold flex items-center justify-center font-mono">
                1
              </span>
              <Lock className="w-3.5 h-3.5 text-teal-600" />
            </div>
            <div className="text-xs font-bold text-slate-900">Narrative Ingestion</div>
            <p className="text-[11px] text-slate-500 leading-snug">
              Zero-knowledge end-to-end encrypted storage container sealed.
            </p>
            <div className="text-[10px] font-bold text-teal-700 uppercase tracking-wider flex items-center gap-1 pt-0.5">
              <span>● INGEST VALIDATED</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold flex items-center justify-center font-mono">
                2
              </span>
              <Activity className="w-3.5 h-3.5 text-teal-600" />
            </div>
            <div className="text-xs font-bold text-slate-900">Marker Detection</div>
            <p className="text-[11px] text-slate-500 leading-snug">
              Parsed natural language patterns and acute physiological anxiety markers.
            </p>
            <div className="text-[10px] font-bold text-teal-700 uppercase tracking-wider flex items-center gap-1 pt-0.5">
              <span>● SYNTHESIZED</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold flex items-center justify-center font-mono">
                3
              </span>
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            </div>
            <div className="text-xs font-bold text-slate-900">SVI Scoring Matrix</div>
            <p className="text-[11px] text-slate-500 leading-snug">
              Standardized algorithmic triage index quantified at SVI: {score}/100.
            </p>
            <div className="text-[10px] font-bold text-teal-700 uppercase tracking-wider flex items-center gap-1 pt-0.5">
              <span>● SCALED & RANKED</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold flex items-center justify-center font-mono">
                4
              </span>
              <Heart className="w-3.5 h-3.5 text-teal-600" />
            </div>
            <div className="text-xs font-bold text-slate-900">Specialist Notified</div>
            <p className="text-[11px] text-slate-500 leading-snug">
              Automated queue elevation dispatched to Crisis Intervention Team.
            </p>
            <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1 pt-0.5">
              <span>● ACTIVE DISPATCH</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dual Cards: SVI Circular Gauge + Detected Stress Indicators Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Card: Circular Gauge */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-5">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  ALGORITHMIC ASSESSMENT
                </span>
                <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-semibold rounded">
                  ISO-27799 Compliant
                </span>
              </div>
              <h2 className="text-lg font-bold text-slate-900">Stress Vulnerability Index (SVI)</h2>
              <p className="text-xs text-slate-500">
                Calibrated priority gauge derived from validated psychological stress indicators.
              </p>
            </div>

            {/* Circular Gauge Graphic (Image 3 exact representation) */}
            <div className="flex flex-col items-center justify-center py-4">
              <div className="relative w-48 h-48 flex items-center justify-center">
                {/* SVG Radial Meter */}
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 transform">
                  {/* Track circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#e2e8f0"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  {/* Active arc */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#0f3b47"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (score / 100) * 251.2}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-1000"
                  />
                </svg>

                {/* Center score readout */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    TRIAGE SCORE
                  </span>
                  <div className="text-4xl font-extrabold text-slate-900 font-mono tracking-tight leading-none mt-1">
                    {score}<span className="text-base text-slate-400 font-normal">/100</span>
                  </div>
                  <span className="text-[11px] font-semibold text-teal-800 mt-1">
                    Priority 1 Queue
                  </span>
                </div>
              </div>

              {/* Status pill badge */}
              <div className="mt-3 px-3 py-1 bg-red-50 border border-red-200 text-red-800 rounded-full text-xs font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span>High Vulnerability Level (Priority Escalation)</span>
              </div>
            </div>

            {/* What this means for you right now */}
            <div className="p-3.5 bg-emerald-50/50 border border-emerald-200 rounded-xl space-y-1 text-xs">
              <div className="font-bold text-emerald-950 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>What this means for you right now</span>
              </div>
              <p className="text-slate-700 leading-relaxed text-[11px]">
                Your submission reflects heightened acute distress and feelings of unsafety. Our AI triage has flagged your
                case for priority human intervention. A certified trauma specialist is reviewing your file and will establish
                contact within <strong>12 minutes</strong>.
              </p>
            </div>

            {/* Disclaimer notice */}
            <div className="text-[11px] text-slate-400 leading-relaxed border-t border-slate-100 pt-3 flex items-start gap-2">
              <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <span>
                <strong>Diagnostic Notice:</strong> This SVI score is an operational urgency rating for crisis triage, not a medical
                or psychiatric diagnosis of PTSD, depression, or acute stress disorder.
              </span>
            </div>
          </div>

          {/* Right Card: Detected Stress Indicators Breakdown */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  EXPLAINABLE AI AUDIT
                </span>
                <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-semibold rounded">
                  Strict Human-in-the-Loop Audit
                </span>
              </div>
              <h2 className="text-lg font-bold text-slate-900">Detected Stress Indicators Breakdown</h2>
              <p className="text-xs text-slate-500">
                The neural intake model parsed contextual phrasing and acute stressors. Each metric below outlines the
                algorithmic weight contributing to your overall priority allocation.
              </p>
            </div>

            {/* 4 Indicator Progress Bars with Detailed Explanations */}
            <div className="space-y-4">
              {/* Bar 1: High Distress & Acute Anxiety */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-slate-600" />
                    <span>High Distress & Acute Anxiety</span>
                  </span>
                  <span className="text-[11px] font-bold font-mono text-teal-800">
                    SEVERITY: ELEVATED 88%
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0f3b47] rounded-full" style={{ width: '88%' }} />
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Linguistic frequency matches hyper-arousal, overwhelming situational pressure, and continuous emotional panic.
                </p>
              </div>

              {/* Bar 2: Threat / Environmental Risk */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-slate-600" />
                    <span>Threat / Environmental Risk</span>
                  </span>
                  <span className="text-[11px] font-bold font-mono text-teal-800">
                    SEVERITY: HIGH 74%
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0f3b47] rounded-full" style={{ width: '74%' }} />
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Phrases suggest compromised domestic or immediate physical security, requiring potential environmental relocation.
                </p>
              </div>

              {/* Bar 3: Social Isolation / Lack of Support */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-slate-600" />
                    <span>Social Isolation / Lack of Support</span>
                  </span>
                  <span className="text-[11px] font-bold font-mono text-teal-800">
                    SEVERITY: ELEVATED 81%
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0f3b47] rounded-full" style={{ width: '81%' }} />
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Marked absence of trusted local emergency contacts or active immediate social safety nets reported.
                </p>
              </div>

              {/* Bar 4: Acute Sleep / Physical Strain */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-600" />
                    <span>Acute Sleep / Physical Strain</span>
                  </span>
                  <span className="text-[11px] font-bold font-mono text-teal-800">
                    SEVERITY: MODERATE 62%
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#2dd4bf] rounded-full" style={{ width: '62%' }} />
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Physical exhaustion patterns detected, indicating sustained disruption of baseline somatic rest cycles.
                </p>
              </div>
            </div>

            {/* Bottom Audit Footer */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100 pt-3">
              <span>Algorithmic Weight Audit: Model SS-2.4 (Bi-Weekly Retrained)</span>
              <button
                type="button"
                onClick={() => alert('Downloading official audit receipt (.pdf)')}
                className="text-teal-800 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Download Audit Receipt (.PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialist On-Call Assigned Card (Dark Teal Card) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0f3b47] text-white rounded-2xl p-5 shadow-md flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          {/* Avatar and Counselor Info */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80"
                alt="Counselor Sarah Jenkins"
                className="w-14 h-14 rounded-full object-cover border-2 border-teal-300"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0f3b47]" />
            </div>

            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-teal-300">
                SPECIALIST ON-CALL ASSIGNED
              </span>
              <h4 className="text-base font-bold text-white">Counselor Sarah Jenkins, LCSW</h4>
              <div className="text-xs text-teal-100/80 flex items-center gap-2">
                <span>Crisis Intervention Team</span>
                <span>•</span>
                <span>Badge #CIT-4482</span>
              </div>
              <div className="text-[11px] text-[#5eead4] font-medium flex items-center gap-2 pt-0.5">
                <span>⏱ Estimated Callback: &lt; 10 mins</span>
                <span>•</span>
                <span>Trauma Certified</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={() => alert('Starting discrete encrypted chat session with Counselor Jenkins.')}
              className="px-4 py-2 bg-[#5eead4] hover:bg-teal-300 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <span>💬 Speak with Counselor Now via Secure Chat</span>
            </button>

            <a
              href="tel:988"
              className="px-4 py-2 bg-[#134857] hover:bg-[#1a5b6d] text-white border border-teal-700 font-semibold rounded-xl text-xs flex items-center gap-1.5 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-teal-200" />
              <span>Call 988 Lifeline</span>
            </a>

            <button
              onClick={() => alert('Safe Shelter liaison contacted. Transit and address details will arrive securely.')}
              className="px-4 py-2 bg-[#134857] hover:bg-[#1a5b6d] text-white border border-teal-700 font-semibold rounded-xl text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>🏠 Request Safe Shelter</span>
            </button>
          </div>
        </div>
      </section>

      {/* Lower Dual Cards: Physiological Stabilization (Breathing) + Proactive Readiness (Safety Plan) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Card: Box Breathing Exercise */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  PHYSIOLOGICAL STABILIZATION
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  Box Breathing Technique (4-4-4)
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Take a Moment to Regulate Your Breathing</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                While your counselor prepares your intake details, synchronize your breath with the visual guide below
                to lower heart rate and reduce cortisol.
              </p>
            </div>

            {/* Interactive Breathing Visualizer */}
            <div className="py-6 flex flex-col items-center justify-center">
              <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Outer pulsing ring */}
                <div
                  className={`absolute inset-0 rounded-full bg-teal-100/70 transition-transform duration-1000 ${
                    breathingPhase === 'Inhale' ? 'scale-110' : breathingPhase === 'Exhale' ? 'scale-90' : 'scale-100'
                  }`}
                />
                {/* Center Circle */}
                <div className="relative w-28 h-28 rounded-full bg-[#0f3b47] text-white flex flex-col items-center justify-center shadow-md">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-teal-300">
                    {breathingPhase}
                  </span>
                  <span className="text-3xl font-extrabold font-mono mt-0.5">{phaseSeconds}s</span>
                </div>
              </div>

              {/* 3 Phases Indicators */}
              <div className="flex items-center gap-2 mt-4 text-[11px] font-semibold">
                <span className={`px-2.5 py-1 rounded-md ${breathingPhase === 'Inhale' ? 'bg-[#99f6e4] text-[#0f3b47]' : 'text-slate-400'}`}>
                  1. Inhale (4s)
                </span>
                <span className={`px-2.5 py-1 rounded-md ${breathingPhase === 'Hold' ? 'bg-[#99f6e4] text-[#0f3b47]' : 'text-slate-400'}`}>
                  2. Hold (4s)
                </span>
                <span className={`px-2.5 py-1 rounded-md ${breathingPhase === 'Exhale' ? 'bg-[#99f6e4] text-[#0f3b47]' : 'text-slate-400'}`}>
                  3. Exhale (4s)
                </span>
              </div>

              <div className="flex items-center gap-4 mt-3 text-xs text-slate-500">
                <button
                  type="button"
                  onClick={() => setIsBreathingActive(!isBreathingActive)}
                  className="underline hover:text-slate-900 cursor-pointer flex items-center gap-1"
                >
                  {isBreathingActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isBreathingActive ? 'Pause Exercise' : 'Resume Exercise'}</span>
                </button>
                <span>•</span>
                <span>Completed cycles: {completedCycles}</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 text-center">
              Tip: Place one hand on your chest and one on your abdomen. Feel your abdomen expand gently as you count.
            </p>
          </div>

          {/* Right Card: Your Immediate Safety Plan */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  PROACTIVE READINESS
                </span>
                <span className="text-slate-400">✓ Checklist</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Your Immediate Safety Plan</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Four tangible micro-steps while connected with our crisis support specialist:
              </p>
            </div>

            {/* 4 Interactive Checklists */}
            <div className="space-y-3">
              {/* Item 1 */}
              <div
                onClick={() => setSafetyChecklist({ ...safetyChecklist, perimeter: !safetyChecklist.perimeter })}
                className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-colors ${
                  safetyChecklist.perimeter
                    ? 'bg-emerald-50/50 border-emerald-300 text-slate-900'
                    : 'bg-white border-slate-200 text-slate-700'
                }`}
              >
                <CheckCircle2
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    safetyChecklist.perimeter ? 'text-emerald-600' : 'text-slate-300'
                  }`}
                />
                <div className="text-xs">
                  <span className="font-bold text-slate-900">1. Confirm Physical Perimeter</span>
                  <p className="text-slate-500 mt-0.5 text-[11px]">
                    Lock entryways or relocate to an accessible, well-lit public or designated safe area.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div
                onClick={() => setSafetyChecklist({ ...safetyChecklist, mobile: !safetyChecklist.mobile })}
                className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-colors ${
                  safetyChecklist.mobile
                    ? 'bg-emerald-50/50 border-emerald-300 text-slate-900'
                    : 'bg-white border-slate-200 text-slate-700'
                }`}
              >
                <CheckCircle2
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    safetyChecklist.mobile ? 'text-emerald-600' : 'text-slate-300'
                  }`}
                />
                <div className="text-xs">
                  <span className="font-bold text-slate-900">2. Keep Mobile Line Unlocked</span>
                  <p className="text-slate-500 mt-0.5 text-[11px]">
                    Counselor Sarah Jenkins will dial from an unlisted institutional line starting with 800-XXX.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div
                onClick={() => setSafetyChecklist({ ...safetyChecklist, hydrate: !safetyChecklist.hydrate })}
                className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-colors ${
                  safetyChecklist.hydrate
                    ? 'bg-emerald-50/50 border-emerald-300 text-slate-900'
                    : 'bg-white border-slate-200 text-slate-700'
                }`}
              >
                <CheckCircle2
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    safetyChecklist.hydrate ? 'text-emerald-600' : 'text-slate-300'
                  }`}
                />
                <div className="text-xs">
                  <span className="font-bold text-slate-900">3. Hydrate & Ground Somatics</span>
                  <p className="text-slate-500 mt-0.5 text-[11px]">
                    Sip cool water slowly; note five distinct blue objects in your direct field of view.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div
                onClick={() => setSafetyChecklist({ ...safetyChecklist, contact: !safetyChecklist.contact })}
                className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-colors ${
                  safetyChecklist.contact
                    ? 'bg-emerald-50/50 border-emerald-300 text-slate-900'
                    : 'bg-white border-slate-200 text-slate-700'
                }`}
              >
                <CheckCircle2
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    safetyChecklist.contact ? 'text-emerald-600' : 'text-slate-300'
                  }`}
                />
                <div className="text-xs">
                  <span className="font-bold text-slate-900">4. Identify Emergency Contact</span>
                  <p className="text-slate-500 mt-0.5 text-[11px]">
                    A trusted peer or family member ready to assist if temporary transport is arranged.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom session purge info */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100 pt-3">
              <span>🔒 Local session auto-purges after exit</span>
              <button
                type="button"
                onClick={() => onBackToHome()}
                className="text-slate-600 font-semibold hover:text-slate-900 cursor-pointer"
              >
                Purge Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Assigned Crisis Sector & Local Haven Nodes Map Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                RAPID DISPATCH READINESS
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-0.5">
                Assigned Crisis Sector & Local Haven Nodes
              </h3>
            </div>
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-teal-700" />
              <span>Regional Crisis Sector 4 (Metropolitan South District)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Map Visual Simulation */}
            <div className="lg:col-span-8 rounded-xl overflow-hidden border border-slate-200 relative min-h-[220px] bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80"
                alt="Crisis Sector Map"
                className="w-full h-full object-cover filter contrast-90 brightness-95 opacity-80"
              />
              {/* Map overlays / nodes */}
              <div className="absolute inset-0 bg-teal-950/10" />

              {/* Pin 1: Safe Haven Sanctuary */}
              <div className="absolute top-1/3 left-1/4 bg-[#0f3b47] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 border border-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Brookhaven Haven Node</span>
              </div>

              {/* Pin 2: Plaza Fiesta */}
              <div className="absolute top-1/4 right-1/3 bg-[#0f3b47] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 border border-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Plaza Fiesta Sector Hub</span>
              </div>

              {/* Bottom Haven Highlight Banner */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-3 rounded-lg border border-slate-200 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-5 h-5 text-teal-800 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      Midtown Safe Haven Sanctuary (2.4 miles away)
                    </div>
                    <div className="text-[11px] text-slate-500">
                      24/7 Secure Civilian Intake • Walk-in or Mobile Crisis Escort Available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Transit Card */}
            <div className="lg:col-span-4 bg-[#f8fafc] border border-slate-200 rounded-xl p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900">Emergency Transit Access</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Need confidential transport? StressShield can dispatch a non-police crisis vehicle to transport you
                  safely to Midtown Haven.
                </p>
                <div className="text-[11px] text-teal-800 font-semibold flex items-center gap-1.5 pt-1">
                  <Car className="w-3.5 h-3.5 text-teal-700" />
                  <span>Unmarked vehicle • Zero public siren policy</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => alert('Emergency non-police crisis escort requested. Coordinates dispatched securely.')}
                className="w-full py-2.5 px-4 bg-[#0f3b47] hover:bg-[#0c2f39] text-white rounded-xl text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                Request Non-Police Escort
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Bridge to Officer Dashboard */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center text-xs">
        <button
          onClick={onBackToHome}
          className="text-slate-500 hover:text-slate-800 font-semibold underline cursor-pointer"
        >
          ← Return to Public Support Home
        </button>

        <button
          onClick={onOpenOfficerPortal}
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>Inspect Case in Officer Ops Command →</span>
        </button>
      </section>
    </div>
  );
};
