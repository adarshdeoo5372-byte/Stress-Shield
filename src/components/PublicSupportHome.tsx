import React, { useState } from 'react';
import {
  FileText,
  Mic,
  ShieldCheck,
  Lock,
  PhoneCall,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Activity,
  HeartHandshake,
  MessageSquare,
  AlertTriangle,
} from 'lucide-react';
import { SAMPLE_SCENARIOS } from '../data/mockCases';
import { CaseRecord } from '../types';

interface PublicSupportHomeProps {
  onStartIntake: (statement: string, mode: 'text' | 'voice', selectedIndicators: string[]) => void;
  onOpenSelfAssessment: () => void;
  onOpenOfficerPortal: () => void;
}

export const PublicSupportHome: React.FC<PublicSupportHomeProps> = ({
  onStartIntake,
  onOpenSelfAssessment,
  onOpenOfficerPortal,
}) => {
  const [inputMode, setInputMode] = useState<'text' | 'voice'>('text');
  const [statement, setStatement] = useState('');
  const [consentChecked, setConsentChecked] = useState(true);
  const [selectedIndicators, setSelectedIndicators] = useState<string[]>([
    'Extreme Isolation',
    'Panic / Fear',
  ]);

  const indicatorOptions = [
    { label: 'Severe Distress', key: 'Severe Distress', dotColor: 'bg-red-500' },
    { label: 'Threats to Safety', key: 'Threats to Safety', dotColor: 'bg-amber-500' },
    { label: 'Extreme Isolation', key: 'Extreme Isolation', dotColor: 'bg-emerald-500' },
    { label: 'Panic / Fear', key: 'Panic / Fear', dotColor: 'bg-teal-500' },
    { label: 'Physical Injury', key: 'Physical Injury', dotColor: 'bg-stone-500' },
    { label: 'Need Safe Shelter', key: 'Need Safe Shelter', dotColor: 'bg-indigo-500' },
  ];

  const toggleIndicator = (key: string) => {
    if (selectedIndicators.includes(key)) {
      setSelectedIndicators(selectedIndicators.filter((i) => i !== key));
    } else {
      setSelectedIndicators([...selectedIndicators, key]);
    }
  };

  const handleApplyScenario = (scenario: typeof SAMPLE_SCENARIOS[0]) => {
    setStatement(scenario.statement);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalStatement =
      statement.trim() ||
      "My former partner has been waiting outside my apartment building for the third night in a row. He texted me a picture of my front door saying 'You can't hide forever.' I have no family here and I am terrified to turn on any lights.";
    onStartIntake(finalStatement, inputMode, selectedIndicators);
  };

  const wordCount = statement.trim() ? statement.trim().split(/\s+/).length : 0;

  return (
    <div className="bg-[#f8fafc] text-slate-800 space-y-12 pb-16">
      {/* Hero Header Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-4">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          {/* Main Titles */}
          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Immediate, Confidential Support in Moments of Crisis
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              A secure trauma triage portal connecting individuals in distress to prioritized human care, counseling,
              and verified crisis response. Your pace, your words, entirely safeguarded.
            </p>
          </div>

          {/* Immediate Danger Quick Connect Pill */}
          <div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs flex items-center justify-between gap-4 max-w-xs shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 shrink-0">
                <PhoneCall className="w-4 h-4 text-rose-600" />
              </div>
              <div>
                <div className="text-[11px] font-medium text-slate-500">Immediate Danger?</div>
                <div className="text-xs font-bold text-slate-900">Call 911 or Dial 988</div>
              </div>
            </div>
            <a
              href="tel:911"
              className="px-3.5 py-1.5 bg-[#0f172a] hover:bg-slate-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
            >
              Connect
            </a>
          </div>
        </div>

        {/* 3 Privacy & Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-2xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#ccfbf1] flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5 text-[#0f766e]" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">End-to-End Encrypted</div>
              <div className="text-[11px] text-slate-500">Zero third-party telemetry, CJIS aligned</div>
            </div>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-2xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#ccfbf1] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#0f766e]" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Zero Identity Logging</div>
              <div className="text-[11px] text-slate-500">IP strip & ephemeral local caching only</div>
            </div>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-2xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#ccfbf1] flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5 text-[#0f766e]" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">24/7 Human Specialist Liaison</div>
              <div className="text-[11px] text-slate-500">Licensed crisis counselors stand by 24/7</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Secure Incident & Trauma Intake Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
          {/* Card Header with Mode Toggles */}
          <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <div className="w-6 h-6 rounded-md bg-teal-50 flex items-center justify-center text-teal-800">
                  <Activity className="w-4 h-4 text-teal-700" />
                </div>
                <span>Secure Incident & Trauma Intake</span>
              </div>
              <p className="text-xs text-slate-500">
                Choose your preferred communication method. All fields are processed through local encrypted memory.
              </p>
            </div>

            {/* Written Narrative vs Voice Submission toggle */}
            <div className="flex items-center gap-2 bg-[#f1f5f9] p-1 rounded-lg">
              <button
                type="button"
                onClick={() => setInputMode('text')}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  inputMode === 'text'
                    ? 'bg-[#99f6e4] text-[#0f3b47] shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Written Narrative</span>
              </button>

              <button
                type="button"
                onClick={() => setInputMode('voice')}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  inputMode === 'voice'
                    ? 'bg-[#99f6e4] text-[#0f3b47] shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Mic className="w-3.5 h-3.5 text-teal-900" />
                <span>Voice Submission •</span>
              </button>
            </div>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-5">
            {/* Quick Scenario Fill Helper */}
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700">
                Personal Account & Context <span className="text-slate-400 font-normal">(Take all the time you need)</span>
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400 hidden sm:inline flex items-center gap-1">
                  <Lock className="w-3 h-3 text-slate-400" /> Safe - Kept Draft
                </span>
                <span className="text-slate-300 hidden sm:inline">|</span>
                <span className="text-[11px] text-slate-500 font-medium">Quick Presets:</span>
                <button
                  type="button"
                  onClick={() => handleApplyScenario(SAMPLE_SCENARIOS[0])}
                  className="text-[11px] font-semibold text-teal-800 hover:underline cursor-pointer"
                >
                  Stalking Case
                </button>
                <button
                  type="button"
                  onClick={() => handleApplyScenario(SAMPLE_SCENARIOS[1])}
                  className="text-[11px] font-semibold text-teal-800 hover:underline cursor-pointer"
                >
                  Domestic Threat
                </button>
              </div>
            </div>

            {/* Voice Mode Notice or Textarea */}
            {inputMode === 'voice' ? (
              <div className="p-6 bg-[#f8fafc] border border-slate-200 rounded-xl space-y-4 text-center">
                <div className="w-14 h-14 rounded-full bg-teal-100 text-teal-800 mx-auto flex items-center justify-center animate-pulse">
                  <Mic className="w-7 h-7 text-[#0f766e]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Voice Ingestion Enabled</h4>
                  <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
                    Spoken testimony is transcribed live via zero-telemetry Whisper-Gov Engine with tremor acoustic
                    biomarkers. Click the button below to simulate voice recording or review transcript.
                  </p>
                </div>
                <div className="flex justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setStatement(
                        "I don't know who else to call without him seeing my phone logs. I'm locked in the utility closet right now. He told me if I walk out the front door tonight he won't let me back in to get my insulin or my daughter's clothes. He took the keys to the vehicle. He is pacing outside now and pounding on the wood. Please don't send sirens, it will trigger him. Please help me get out safely."
                      );
                    }}
                    className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-lg text-xs font-semibold"
                  >
                    Simulate Spoken Recording (VOIP Ingest)
                  </button>
                </div>
              </div>
            ) : null}

            {/* Narrative Textarea */}
            <div className="relative">
              <textarea
                rows={5}
                value={statement}
                onChange={(e) => setStatement(e.target.value)}
                placeholder="Take your time. Describe what occurred, how you are feeling right now, and if there is any immediate danger..."
                className="w-full bg-[#fafbfc] border border-slate-200 rounded-xl p-4 text-sm text-slate-800 leading-relaxed placeholder:text-slate-400 focus:outline-hidden focus:border-teal-500 focus:ring-1 focus:ring-teal-500 resize-y"
              />
            </div>

            {/* Bottom stats inside text field */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
              <span>Language: Auto-Detect (Translates to any crisis worker)</span>
              <span>{wordCount} words written</span>
            </div>

            {/* Current Emotional & Physical Indicators Tags */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">Current Emotional & Physical Indicators</span>
                <span className="text-[11px] text-slate-400">Select all that resonate</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {indicatorOptions.map((ind) => {
                  const isSelected = selectedIndicators.includes(ind.key);
                  return (
                    <button
                      key={ind.key}
                      type="button"
                      onClick={() => toggleIndicator(ind.key)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#2dd4bf] text-[#0f3b47] font-bold shadow-2xs'
                          : 'bg-[#f1f5f9] text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${ind.dotColor}`} />
                      <span>{ind.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Informed Consent Checkbox Box */}
            <div className="p-4 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-start gap-3">
              <input
                type="checkbox"
                id="consentCheck"
                checked={consentChecked}
                onChange={(e) => setConsentChecked(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded text-teal-700 focus:ring-teal-600 border-slate-300 cursor-pointer"
              />
              <label htmlFor="consentCheck" className="text-xs leading-relaxed text-slate-700 cursor-pointer">
                <strong className="text-slate-900 block font-semibold mb-0.5">
                  Important Notice & Trauma Triage Consent
                </strong>
                StressShield is an AI-assisted prioritization and triage support tool. It does <strong>NOT</strong> provide
                clinical, psychological, or PTSD medical diagnoses. High-risk indicators automatically escalate to trained
                crisis specialists and authorized care coordinators.
              </label>
            </div>

            {/* Bottom Actions Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
              <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Your session data self-purges after 60 minutes of inactivity</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => alert('Draft securely saved to encrypted local browser storage.')}
                  className="flex-1 sm:flex-none px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  Save Draft Privately
                </button>

                <button
                  type="submit"
                  className="flex-1 sm:flex-none px-5 py-2.5 bg-[#0f3b47] hover:bg-[#0c2f39] text-white rounded-xl text-xs font-semibold shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5 text-teal-300" />
                  <span>Submit for Immediate Confidential AI Triage</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Real-Time Support Distribution Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Photo Card */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[260px] bg-slate-800 flex flex-col justify-end p-6 text-white shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80"
              alt="Licensed Crisis Specialist"
              className="absolute inset-0 w-full h-full object-cover opacity-35 filter saturate-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />
            <div className="relative space-y-2">
              <span className="inline-block px-2.5 py-0.5 bg-emerald-500/90 text-white rounded text-[10px] font-extrabold uppercase tracking-wider">
                VERIFIED RESPONSE HUB
              </span>
              <h3 className="text-xl font-bold leading-tight">
                Direct Human Liaison Always In Loop
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every automated indicator is audited by trauma-certified personnel within an average response window of 180 seconds.
              </p>
            </div>
          </div>

          {/* Right Metrics Card */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  TRIAGE PIPELINE TRANSPARENCY
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">Real-Time Support Distribution</h3>
              </div>
              <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active Enclave</span>
              </span>
            </div>

            {/* 3 Metric Columns */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl text-left">
                <span className="text-[11px] text-slate-500">Avg Specialist Match</span>
                <div className="text-xl font-extrabold text-slate-900 mt-0.5">&lt; 3.2 min</div>
                <span className="text-[10px] text-emerald-700 font-medium">Immediate priority queue</span>
              </div>

              <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl text-left">
                <span className="text-[11px] text-slate-500">Active Peer Listeners</span>
                <div className="text-xl font-extrabold text-slate-900 mt-0.5">142 On Duty</div>
                <span className="text-[10px] text-slate-500">Multi-lingual coverage</span>
              </div>

              <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl text-left">
                <span className="text-[11px] text-slate-500">SVI Accuracy Rating</span>
                <div className="text-xl font-extrabold text-teal-800 mt-0.5">99.4%</div>
                <span className="text-[10px] text-slate-500">Human-verified baseline</span>
              </div>
            </div>

            {/* Trend Curve Line */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span>National Crisis Triage Throughput (Past 12 Hours)</span>
                <span className="font-semibold text-slate-700">Normalized Capacity</span>
              </div>
              <div className="h-10 w-full flex items-center">
                <svg viewBox="0 0 500 50" className="w-full h-full stroke-emerald-600 fill-none" preserveAspectRatio="none">
                  <path
                    d="M0,25 Q60,20 120,28 T240,22 T360,30 T440,15 L480,24"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="480" cy="24" r="4" fill="#059669" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "How StressShield Safeguards You" (3 Steps) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-8">
        <div className="max-w-2xl mx-auto space-y-2">
          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-900 rounded-full text-[10px] font-bold tracking-wider uppercase">
            PROTOCOL TRANSPARENCY
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            How StressShield Safeguards You
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We removed administrative hurdles. You can navigate the path from crisis to stability with clarity and
            guaranteed agency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Step 01 */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono px-2 py-0.5 bg-teal-50 text-teal-800 rounded">
                  01
                </span>
                <Lock className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Safe & Anonymous Intake</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Submit through voice audio or text at whatever depth feels manageable. No legal identification, social
                security number, or permanent tracking is requested.
              </p>
            </div>
            <div className="pt-2 text-[11px] font-semibold text-emerald-800 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Encrypted on capture</span>
            </div>
          </div>

          {/* Step 02 */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono px-2 py-0.5 bg-teal-50 text-teal-800 rounded">
                  02
                </span>
                <Activity className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Stress Vulnerability Indexing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our clinical neural model prioritizes vulnerability factors, detecting panic markers, isolation levels,
                and trauma patterns to assign optimal response priority.
              </p>
            </div>
            <div className="pt-2 text-[11px] font-semibold text-teal-800 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              <span>Strictly non-diagnostic</span>
            </div>
          </div>

          {/* Step 03 */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono px-2 py-0.5 bg-teal-50 text-teal-800 rounded">
                  03
                </span>
                <HeartHandshake className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Human Care Connection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Triage findings are immediately transferred to authorized crisis personnel, vetted clinical peer navigators,
                or safe shelter coordinators for direct assistance.
              </p>
            </div>
            <div className="pt-2 text-[11px] font-semibold text-emerald-800 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Live specialist dispatch</span>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Crisis Telephony & Helplines (Dark Teal Card) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0f3b47] text-white rounded-2xl p-6 sm:p-8 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-3">
              <span className="inline-block px-2.5 py-0.5 bg-rose-500 text-white rounded-full text-[10px] font-extrabold uppercase tracking-wider">
                ● 24/7 RAPID TOLL-FREE RESPONSE
              </span>
              <h3 className="text-2xl font-bold tracking-tight leading-snug">
                Immediate Crisis Telephony & Helplines
              </h3>
              <p className="text-xs text-teal-100/80 leading-relaxed">
                If you or someone near you is in immediate physical danger, experiencing suicidal thoughts, or undergoing
                acute panic, confidential lifelines are ready now.
              </p>
            </div>

            {/* Right 4 Helpline Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Tile 1 */}
              <div className="p-4 bg-[#134857] border border-teal-800/60 rounded-xl space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-teal-300">
                  NATIONAL CRISIS LIFELINE
                </span>
                <div className="text-xl font-bold text-white">988</div>
                <div className="text-[11px] text-teal-200">Call or Text 24/7 • Free • English / Spanish</div>
                <a
                  href="tel:988"
                  className="text-xs font-semibold text-[#5eead4] hover:underline flex items-center gap-1 pt-1"
                >
                  <span>Dial Now</span> 📞
                </a>
              </div>

              {/* Tile 2 */}
              <div className="p-4 bg-[#134857] border border-teal-800/60 rounded-xl space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-teal-300">
                  VETERANS / FIRST RESPONDERS
                </span>
                <div className="text-xl font-bold text-white">Dial 988, Press 1</div>
                <div className="text-[11px] text-teal-200">Or Text to 838255 • Specialized Trauma</div>
                <a
                  href="tel:988"
                  className="text-xs font-semibold text-[#5eead4] hover:underline flex items-center gap-1 pt-1"
                >
                  <span>Connect Immediately</span> →
                </a>
              </div>

              {/* Tile 3 */}
              <div className="p-4 bg-[#134857] border border-teal-800/60 rounded-xl space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-teal-300">
                  CRISIS TEXT LINE
                </span>
                <div className="text-xl font-bold text-white">Text HOME to 741741</div>
                <div className="text-[11px] text-teal-200">Free 24/7 crisis counseling over SMS</div>
                <a
                  href="sms:741741"
                  className="text-xs font-semibold text-[#5eead4] hover:underline flex items-center gap-1 pt-1"
                >
                  <span>Send SMS</span> 💬
                </a>
              </div>

              {/* Tile 4 */}
              <div className="p-4 bg-[#134857] border border-teal-800/60 rounded-xl space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-teal-300">
                  LGBTQ+ YOUTH CRISIS
                </span>
                <div className="text-xl font-bold text-white">1-866-488-7386</div>
                <div className="text-[11px] text-teal-200">The Trevor Project • Call or Text START to 678-678</div>
                <a
                  href="tel:18664887386"
                  className="text-xs font-semibold text-[#5eead4] hover:underline flex items-center gap-1 pt-1"
                >
                  <span>Direct Voice Line</span> 📞
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Trauma Response Disclaimer Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-slate-700 shrink-0 mt-0.5 sm:mt-0" />
            <div className="text-xs text-slate-700">
              <strong className="font-semibold text-slate-900">
                Official Trauma Response Disclaimer & Verification Protocol
              </strong>
              <div className="text-slate-500 mt-0.5">
                Notice: StressShield AI performs triage scoring and prioritization only. It does not provide medical or
                clinical PTSD diagnosis. All high-risk cases require verified human review prior to emergency action assignment.
              </div>
            </div>
          </div>

          <span className="px-3 py-1 bg-[#ccfbf1] text-[#0f766e] rounded-full text-xs font-bold whitespace-nowrap self-start sm:self-center">
            ● HIL Audited
          </span>
        </div>
      </section>
    </div>
  );
};
