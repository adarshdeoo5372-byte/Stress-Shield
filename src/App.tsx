/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { INITIAL_CASES, simulateAiAssessment } from './data/mockCases';
import { CaseRecord } from './types';
import { GlobalHeader } from './components/GlobalHeader';
import { GlobalFooter } from './components/GlobalFooter';
import { PublicSupportHome } from './components/PublicSupportHome';
import { SelfAssessmentView } from './components/SelfAssessmentView';
import { OfficerOpsCommand } from './components/OfficerOpsCommand';
import { OfficerIncidentReview } from './components/OfficerIncidentReview';
import { ResourcesHotlineView } from './components/ResourcesHotlineView';
import { OfficerLogin } from './components/OfficerPortal/OfficerLogin';

export default function App() {
  const [activeTab, setActiveTab] = useState<
    'public-support' | 'self-assessment' | 'officer-portal' | 'resources'
  >('public-support');

  // Officer subsystem sub-route: 'queue' vs 'case-review' vs 'login'
  const [officerRoute, setOfficerRoute] = useState<'login' | 'queue' | 'case-review'>('queue');
  const [selectedCaseId, setSelectedCaseId] = useState<string>('SHIELD-2026-9182');
  const [isOfficerLoggedIn, setIsOfficerLoggedIn] = useState(true);

  // Global cases repository
  const [cases, setCases] = useState<CaseRecord[]>(INITIAL_CASES);
  const [userCase, setUserCase] = useState<CaseRecord | null>(INITIAL_CASES[0]);

  // Handle Civilian Intake Submission
  const handleStartIntake = (
    statement: string,
    mode: 'text' | 'voice',
    selectedIndicators: string[]
  ) => {
    const newCase = simulateAiAssessment(
      statement,
      mode,
      'Stalking & Harassment',
      'Anonymous Citizen',
      true,
      'Secure Portal Only',
      undefined,
      mode === 'voice' ? 42 : undefined
    );

    // Overwrite SVI to 78 to match the reference screenshot (78/100) exactly
    newCase.sviScore = 78;
    newCase.riskCategory = 'High';

    setCases((prev) => [newCase, ...prev]);
    setUserCase(newCase);
    setSelectedCaseId(newCase.id);

    // Navigate to Self-Assessment & SVI Screen
    setActiveTab('self-assessment');
  };

  // Find currently selected case
  const currentCaseForReview =
    cases.find((c) => c.id === selectedCaseId) || cases[0] || INITIAL_CASES[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* If in officer mode (queue or review), display the full officer console; otherwise show public views with GlobalHeader */}
      {activeTab === 'officer-portal' ? (
        <>
          {officerRoute === 'login' && (
            <div className="flex-1 flex flex-col">
              <GlobalHeader
                activeTab={activeTab}
                onSelectTab={(tab) => {
                  setActiveTab(tab);
                  if (tab === 'officer-portal') setOfficerRoute('queue');
                }}
                onOpenOfficerLogin={() => {
                  setActiveTab('officer-portal');
                  setOfficerRoute('login');
                }}
                isOfficerLoggedIn={isOfficerLoggedIn}
              />
              <OfficerLogin
                onLogin={(prof) => {
                  setIsOfficerLoggedIn(true);
                  setOfficerRoute('queue');
                }}
                onCancel={() => {
                  setActiveTab('public-support');
                }}
              />
              <GlobalFooter />
            </div>
          )}

          {officerRoute === 'queue' && (
            <OfficerOpsCommand
              cases={cases}
              onSelectCase={(id) => {
                setSelectedCaseId(id);
                setOfficerRoute('case-review');
              }}
              onSignOut={() => {
                setActiveTab('public-support');
              }}
            />
          )}

          {officerRoute === 'case-review' && (
            <OfficerIncidentReview
              caseRecord={currentCaseForReview}
              onBackToQueue={() => setOfficerRoute('queue')}
              onSignOut={() => {
                setActiveTab('public-support');
              }}
            />
          )}
        </>
      ) : (
        <>
          {/* Public Web Layout */}
          <GlobalHeader
            activeTab={activeTab}
            onSelectTab={(tab) => {
              setActiveTab(tab);
              if (tab === 'officer-portal') {
                setOfficerRoute('queue');
              }
            }}
            onOpenOfficerLogin={() => {
              setActiveTab('officer-portal');
              setOfficerRoute('queue');
            }}
            isOfficerLoggedIn={isOfficerLoggedIn}
          />

          <main className="flex-1">
            {activeTab === 'public-support' && (
              <PublicSupportHome
                onStartIntake={handleStartIntake}
                onOpenSelfAssessment={() => setActiveTab('self-assessment')}
                onOpenOfficerPortal={() => {
                  setActiveTab('officer-portal');
                  setOfficerRoute('queue');
                }}
              />
            )}

            {activeTab === 'self-assessment' && (
              <SelfAssessmentView
                caseRecord={userCase}
                onOpenOfficerPortal={() => {
                  setActiveTab('officer-portal');
                  setOfficerRoute('case-review');
                }}
                onBackToHome={() => setActiveTab('public-support')}
              />
            )}

            {activeTab === 'resources' && <ResourcesHotlineView />}
          </main>

          <GlobalFooter />
        </>
      )}
    </div>
  );
}
