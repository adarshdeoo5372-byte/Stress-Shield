import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, Activity, Eye, FileText, CheckCircle2 } from 'lucide-react';

interface ProcessingViewProps {
  onComplete: () => void;
}

export const ProcessingView: React.FC<ProcessingViewProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Encrypting and sanitizing intake statement',
      desc: 'Obfuscating personal identifying information (PII) into vault storage.',
      icon: Lock,
    },
    {
      title: 'Analyzing linguistic panic & distress markers',
      desc: 'Assessing autonomic stress signals and emotional overload indicators.',
      icon: Activity,
    },
    {
      title: 'Evaluating external threat & isolation factors',
      desc: 'Correlating weapon mentions, physical proximity, and safety net status.',
      icon: Eye,
    },
    {
      title: 'Synthesizing Stress Vulnerability Index (SVI)',
      desc: 'Generating advisory score and routing case to on-duty crisis officers.',
      icon: ShieldCheck,
    },
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentStep(1), 700);
    const timer2 = setTimeout(() => setCurrentStep(2), 1500);
    const timer3 = setTimeout(() => setCurrentStep(3), 2300);
    const timer4 = setTimeout(() => onComplete(), 3100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center space-y-8">
      {/* Calm Pulsing Shield Graphic */}
      <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-stone-200/80 animate-ping opacity-60" />
        <div className="relative w-16 h-16 rounded-full bg-stone-900 text-white flex items-center justify-center shadow-md">
          <ShieldCheck className="w-8 h-8 text-stone-200" />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-stone-900">
          Analyzing Crisis Indicators
        </h2>
        <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
          Please remain on this screen. Your statement is being securely processed to calculate immediate
          triage urgency for crisis responders.
        </p>
      </div>

      {/* Step checklist card */}
      <div className="p-6 bg-white border border-stone-200 rounded-lg text-left shadow-xs space-y-4 max-w-lg mx-auto">
        {steps.map((step, index) => {
          const isDone = currentStep > index;
          const isCurrent = currentStep === index;
          const Icon = step.icon;

          return (
            <div
              key={index}
              className={`flex items-start gap-3.5 transition-all duration-300 ${
                isDone
                  ? 'text-stone-900 opacity-100'
                  : isCurrent
                  ? 'text-stone-900 opacity-100'
                  : 'text-stone-400 opacity-50'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : isCurrent ? (
                  <div className="w-4 h-4 border-2 border-stone-800 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <div className="w-4 h-4 rounded-full border border-stone-300 flex items-center justify-center text-[10px] font-mono">
                    {index + 1}
                  </div>
                )}
              </div>

              <div>
                <div className="text-xs font-semibold">{step.title}</div>
                <div className="text-[11px] text-stone-500 mt-0.5">{step.desc}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reassurance banner */}
      <div className="p-3 bg-stone-100 rounded text-xs text-stone-600 max-w-md mx-auto">
        Your safety is paramount. If you hear someone approaching or feel in immediate danger, you can close this
        window or tap the <span className="font-semibold text-rose-700">Quick Exit</span> button in the top bar.
      </div>
    </div>
  );
};
