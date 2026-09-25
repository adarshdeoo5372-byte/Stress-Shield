import React, { useState, useEffect } from 'react';
import {
  Mic,
  MicOff,
  FileText,
  Volume2,
  Lock,
  AlertCircle,
  Sparkles,
  Info,
  Shield,
  ArrowRight,
  CheckCircle2,
  Play,
  Square,
} from 'lucide-react';
import { SAMPLE_SCENARIOS } from '../../data/mockCases';
import { CaseRecord } from '../../types';

interface IntakeFormData {
  statement: string;
  inputMethod: 'text' | 'voice';
  category: CaseRecord['category'];
  complainantName: string;
  isAnonymous: boolean;
  contactPreference: CaseRecord['contactPreference'];
  contactValue: string;
  safeTimeToContact: string;
  audioDurationSeconds?: number;
}

interface IntakeFormProps {
  onSubmit: (data: IntakeFormData) => void;
  onCancel: () => void;
}

export const IntakeForm: React.FC<IntakeFormProps> = ({ onSubmit, onCancel }) => {
  const [inputMethod, setInputMethod] = useState<'text' | 'voice'>('text');
  const [statement, setStatement] = useState('');
  const [category, setCategory] = useState<CaseRecord['category']>('Stalking & Harassment');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [complainantName, setComplainantName] = useState('');
  const [contactPreference, setContactPreference] = useState<CaseRecord['contactPreference']>('Phone');
  const [contactValue, setContactValue] = useState('');
  const [safeTimeToContact, setSafeTimeToContact] = useState('');
  const [disclaimerConsent, setDisclaimerConsent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Simulated Voice Recording State
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [hasRecordedAudio, setHasRecordedAudio] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const handleToggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setRecordingSeconds(0);
      setHasRecordedAudio(false);
      // Simulate live transcription streaming
      setStatement('Listening to your spoken statement... (speak freely or describe what is happening)');
      setTimeout(() => {
        setStatement(
          "I am speaking this quietly from my bedroom closet... someone has been knocking aggressively on my back patio sliding door for 15 minutes. They turned off my exterior porch light. I live by myself and do not have a car to leave. Please help me."
        );
      }, 3500);
    } else {
      setIsRecording(false);
      setHasRecordedAudio(true);
    }
  };

  const handleApplyScenario = (scenario: typeof SAMPLE_SCENARIOS[0]) => {
    setStatement(scenario.statement);
    setCategory(scenario.category);
    setFormError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!statement.trim() || statement.length < 15) {
      setFormError('Please enter a brief statement describing the crisis situation (at least 15 characters).');
      return;
    }
    if (!disclaimerConsent) {
      setFormError('Please confirm the mandatory non-diagnostic disclaimer and consent checkbox below.');
      return;
    }

    setFormError(null);
    onSubmit({
      statement,
      inputMethod,
      category,
      complainantName: isAnonymous ? 'Anonymous' : complainantName,
      isAnonymous,
      contactPreference,
      contactValue,
      safeTimeToContact,
      audioDurationSeconds: inputMethod === 'voice' ? (recordingSeconds || 28) : undefined,
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-600">
          <Shield className="w-4 h-4 text-stone-700" />
          <span>Confidential Intake Form · Encrypted Connection</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
          Submit Crisis Report for Immediate Officer Triage
        </h1>
        <p className="text-sm text-stone-600 leading-relaxed">
          Describe the situation in your own words. You may write or dictate via secure voice.
          StressShield AI analyzes acute distress indicators to assist response officers in prioritizing support.
        </p>
      </div>

      {/* Mode Selection Tabs (Segmented Control) */}
      <div className="mb-6 flex items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <div className="flex items-center gap-2 p-1 bg-stone-200/80 rounded-lg">
          <button
            type="button"
            onClick={() => setInputMethod('text')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all flex items-center gap-2 ${
              inputMethod === 'text'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Typed Statement</span>
          </button>

          <button
            type="button"
            onClick={() => setInputMethod('voice')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all flex items-center gap-2 ${
              inputMethod === 'voice'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Mic className="w-3.5 h-3.5" />
            <span>Voice Dictation (Spoken)</span>
          </button>
        </div>

        {/* Quick Sample Scenarios Pill Bar */}
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-stone-600">
          <span className="text-stone-600 font-medium">Test Samples:</span>
          {SAMPLE_SCENARIOS.slice(0, 2).map((s, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleApplyScenario(s)}
              className="px-2.5 py-1 text-[11px] bg-stone-100 hover:bg-stone-200 text-stone-700 rounded border border-stone-300 transition-colors"
            >
              {s.risk} Scenario
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category Selector */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
            Incident Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as any)}
            className="w-full bg-white border border-stone-300 rounded px-3 py-2 text-sm text-stone-800 focus:outline-hidden focus:ring-1 focus:ring-stone-900"
          >
            <option value="Stalking & Harassment">Stalking & Harassment</option>
            <option value="Domestic & Family Safety">Domestic & Family Safety</option>
            <option value="Trauma & Crisis Support">Trauma & Crisis Support</option>
            <option value="Community Threat">Community Threat</option>
            <option value="Other">Other Safety Concern</option>
          </select>
        </div>

        {/* Voice Recording Widget if Voice Mode */}
        {inputMethod === 'voice' && (
          <div className="p-5 bg-stone-100 border border-stone-300 rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    isRecording ? 'bg-rose-600 animate-ping' : hasRecordedAudio ? 'bg-emerald-600' : 'bg-stone-400'
                  }`}
                />
                <span className="text-xs font-semibold text-stone-800">
                  {isRecording
                    ? 'Recording & Transcribing Live Audio...'
                    : hasRecordedAudio
                    ? 'Audio Recorded & Transcribed'
                    : 'Ready to Record Spoken Statement'}
                </span>
              </div>
              <span className="text-xs font-mono tabular-nums text-stone-700">
                00:{recordingSeconds < 10 ? `0${recordingSeconds}` : recordingSeconds}
              </span>
            </div>

            {/* Audio Wave Visualizer Simulation */}
            <div className="h-12 bg-white rounded border border-stone-200 flex items-center justify-center gap-1 px-4">
              {[4, 8, 14, 24, 18, 10, 6, 16, 28, 22, 12, 8, 19, 26, 15, 7, 12, 20, 14, 6].map(
                (height, i) => (
                  <div
                    key={i}
                    className={`w-1 rounded-full transition-all duration-150 ${
                      isRecording ? 'bg-stone-800' : 'bg-stone-300'
                    }`}
                    style={{
                      height: isRecording
                        ? `${Math.max(6, Math.round(height * (Math.sin(i + recordingSeconds) + 1.4)))}px`
                        : `${height / 2}px`,
                    }}
                  />
                )
              )}
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleToggleRecording}
                className={`py-2 px-4 rounded text-xs font-semibold flex items-center gap-2 transition-colors ${
                  isRecording
                    ? 'bg-rose-600 hover:bg-rose-700 text-white'
                    : 'bg-stone-900 hover:bg-stone-800 text-white'
                }`}
              >
                {isRecording ? (
                  <>
                    <Square className="w-3.5 h-3.5 fill-white" />
                    <span>Stop Recording</span>
                  </>
                ) : (
                  <>
                    <Mic className="w-3.5 h-3.5" />
                    <span>{hasRecordedAudio ? 'Record New Voice Note' : 'Tap to Start Speaking'}</span>
                  </>
                )}
              </button>

              <span className="text-[11px] text-stone-600">
                Speech is automatically converted to plain text below for verification.
              </span>
            </div>
          </div>
        )}

        {/* Statement Textarea */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
              {inputMethod === 'voice' ? 'Transcribed Statement (You can edit text)' : 'Statement / Description of Crisis'}
            </label>
            <span className="text-xs text-stone-600 tabular-nums">
              {statement.length} characters
            </span>
          </div>

          <textarea
            rows={5}
            value={statement}
            onChange={(e) => setStatement(e.target.value)}
            placeholder="Describe what is occurring, who is involved, if any threats or weapons are present, and whether you are currently in a secure or isolated location..."
            className="w-full bg-white border border-stone-300 rounded p-3 text-sm text-stone-900 leading-relaxed placeholder:text-stone-400 focus:outline-hidden focus:ring-1 focus:ring-stone-900 resize-y"
          />

          <p className="text-[11px] text-stone-600">
            Write as much or as little as you feel comfortable. Personal names and exact addresses are automatically
            sanitized and encrypted before review.
          </p>
        </div>

        {/* Privacy & Safe Contact Options */}
        <div className="p-4 bg-stone-100/70 border border-stone-200 rounded-lg space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
              Privacy & Safe Contact Preferences
            </span>
            <span className="text-xs text-stone-600 flex items-center gap-1">
              <Lock className="w-3 h-3 text-stone-600" />
              <span>TLS 1.3 Vault Encrypted</span>
            </span>
          </div>

          {/* Anonymous toggle */}
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
              className="mt-0.5 rounded text-stone-900 focus:ring-stone-800 border-stone-400"
            />
            <div className="text-xs">
              <span className="font-semibold text-stone-800">
                Submit this report anonymously
              </span>
              <p className="text-stone-600 mt-0.5">
                No identifying names will be associated with this report. You will still receive a private Case
                Reference ID to check status.
              </p>
            </div>
          </label>

          {!isAnonymous && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Complainant Name or Alias
                </label>
                <input
                  type="text"
                  value={complainantName}
                  onChange={(e) => setComplainantName(e.target.value)}
                  placeholder="e.g. Maria S. or initials"
                  className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs text-stone-800 focus:outline-hidden focus:ring-1 focus:ring-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Safe Contact Method
                </label>
                <select
                  value={contactPreference}
                  onChange={(e) => setContactPreference(e.target.value as any)}
                  className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs text-stone-800 focus:outline-hidden focus:ring-1 focus:ring-stone-900"
                >
                  <option value="Phone">Phone Call (Discrete)</option>
                  <option value="SMS">Silent SMS Only</option>
                  <option value="Secure Portal Only">Secure Portal Only (No outreach to my device)</option>
                  <option value="Do not contact">Do not contact (Informational record only)</option>
                </select>
              </div>

              {contactPreference !== 'Secure Portal Only' && contactPreference !== 'Do not contact' && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={contactValue}
                      onChange={(e) => setContactValue(e.target.value)}
                      placeholder="e.g. 555-019-3829"
                      className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs text-stone-800 focus:outline-hidden focus:ring-1 focus:ring-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Safe Window for Contact
                    </label>
                    <input
                      type="text"
                      value={safeTimeToContact}
                      onChange={(e) => setSafeTimeToContact(e.target.value)}
                      placeholder="e.g. 9am to 11am only, discrete greeting"
                      className="w-full bg-white border border-stone-300 rounded px-3 py-1.5 text-xs text-stone-800 focus:outline-hidden focus:ring-1 focus:ring-stone-900"
                    />
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Mandatory Non-Diagnostic Disclaimer & Consent Box */}
        <div className="p-4 bg-amber-50/60 border border-amber-300/80 rounded-lg space-y-3">
          <div className="flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h2 className="text-xs font-bold text-amber-950 uppercase tracking-wider">
                Mandatory Informed Consent & Clinical Disclaimer
              </h2>
              <p className="text-xs text-amber-900 leading-relaxed">
                StressShield AI is an administrative decision-support tool used to evaluate immediate triage
                urgency for crisis responders. <strong>It does NOT provide a medical or psychiatric diagnosis
                of PTSD, depression, anxiety, or mental illness.</strong>
              </p>
            </div>
          </div>

          <label className="flex items-start gap-2.5 cursor-pointer pt-1">
            <input
              type="checkbox"
              checked={disclaimerConsent}
              onChange={(e) => {
                setDisclaimerConsent(e.target.checked);
                setFormError(null);
              }}
              className="mt-0.5 rounded text-stone-900 focus:ring-stone-800 border-amber-400"
            />
            <span className="text-xs font-semibold text-stone-800">
              I understand that this assessment assists response triage and does not constitute a medical diagnosis
              or clinical treatment. (Required)
            </span>
          </label>
        </div>

        {/* Validation Error Message */}
        {formError && (
          <div className="p-3 bg-rose-50 border border-rose-300 rounded text-xs text-rose-800 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{formError}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="py-2.5 px-6 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded shadow-xs transition-colors flex items-center gap-2"
          >
            <span>Proceed to AI Triage Assessment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>
    </div>
  );
};
