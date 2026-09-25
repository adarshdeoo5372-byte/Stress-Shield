import { CaseRecord, RiskCategory } from '../types';

export const INITIAL_CASES: CaseRecord[] = [
  {
    id: 'SHIELD-2026-9182',
    trackingCode: 'TRK-9182-X9',
    createdAt: '2026-09-25T01:14:00Z',
    inputMethod: 'voice',
    audioDurationSeconds: 42,
    complainantName: 'Elena Rostova (Confidential)',
    isAnonymous: false,
    contactPreference: 'Phone',
    contactValue: '555-019-3829',
    safeTimeToContact: 'Between 9am - 12pm only, via discrete ring',
    category: 'Stalking & Harassment',
    statement:
      "My former partner has been waiting outside my apartment building for the third night in a row. He texted me a picture of my front door 20 minutes ago saying 'You can't hide forever.' I have no family in this state and my deadbolt feels weak. I am shaking and terrified to step outside or turn on any lights.",
    sanitizedStatement:
      "Former partner repeatedly waiting outside residence for consecutive nights. Sent photo of front entrance accompanied by intimidating message ('You can't hide forever'). Complainant reports no local familial support, compromised perimeter confidence, acute trembling and hypervigilance.",
    sviScore: 89,
    riskCategory: 'Critical',
    indicators: {
      fear: 94,
      distress: 90,
      threat: 86,
      isolation: 82,
    },
    indicatorDetails: {
      fear: {
        score: 94,
        level: 'Critical',
        evidence: 'Expressed physical shaking, fear of turning on lights, trapped inside apartment.',
        context: 'Direct proximity of alleged harasser right outside private residence.',
      },
      distress: {
        score: 90,
        level: 'Critical',
        evidence: 'Severe autonomic distress reported; inability to leave or perform basic activities.',
        context: 'Third consecutive night of escalation causing sleep deprivation and acute panic.',
      },
      threat: {
        score: 86,
        level: 'Critical',
        evidence: 'Explicit psychological intimidation message accompanied by photographic proof of presence.',
        context: 'Sender demonstrably positioned within breaching range of complainant premises.',
      },
      isolation: {
        score: 82,
        level: 'Critical',
        evidence: 'Explicitly indicated absence of family, local friends, or immediate neighborhood safety net.',
        context: 'Geographic isolation amplifies immediate personal vulnerability.',
      },
    },
    aiExplanation:
      'High-urgency profile characterized by active external perimeter intimidation, photographic verification of proximity, severe acute autonomic distress, and complete absence of local protective network. Threat indicators meet criteria for immediate officer outreach and patrol dispatch.',
    recommendedActions: [
      'Prioritize immediate emergency telephone contact with discrete safety screening.',
      'Dispatch Mobile Crisis Team or non-emergency patrol unit for exterior perimeter sweep.',
      'Connect complainant with Emergency Shelter Liaison & expedited Protective Order navigator.',
      'Offer emergency hotel voucher or trauma-informed safe relocation transport.',
    ],
    status: 'Pending Triage',
    priorityScore: 1,
    assignedOfficer: 'Officer Sarah Jenkins',
    auditHistory: [
      {
        id: 'aud-01',
        timestamp: '2026-09-25T01:14:02Z',
        actor: 'StressShield System',
        action: 'Case Intake & PII Sanitization',
        notes: 'Encrypted submission received via secure voice transcription. SVI calculated at 89 (Critical). Flagged for immediate officer triage queue.',
      },
    ],
  },
  {
    id: 'SHIELD-2026-8941',
    trackingCode: 'TRK-8941-B4',
    createdAt: '2026-09-24T22:38:00Z',
    inputMethod: 'text',
    complainantName: 'Marcus T. (Safe Contact)',
    isAnonymous: false,
    contactPreference: 'SMS',
    contactValue: '555-014-8831',
    safeTimeToContact: 'Text only at any hour',
    category: 'Domestic & Family Safety',
    statement:
      'My spouse threatened to take the children out of country and lock me out if I contact an attorney. He threw kitchen chairs this evening. The kids are asleep now, but I am locked in the bathroom typing this. I don’t know who to call without making things explode.',
    sanitizedStatement:
      'Spousal intimidation involving physical property destruction (furniture throwing) and threat of cross-border parental abduction. Complainant currently barricaded in bathroom while dependents sleep. Seeking non-escalatory guidance.',
    sviScore: 76,
    riskCategory: 'High',
    indicators: {
      fear: 78,
      distress: 82,
      threat: 79,
      isolation: 65,
    },
    indicatorDetails: {
      fear: {
        score: 78,
        level: 'High',
        evidence: 'Barricaded inside interior room; high fear of physical retaliation if discovered seeking help.',
        context: 'Immediate danger mitigated by barrier, but volatile dynamic ongoing in shared residence.',
      },
      distress: {
        score: 82,
        level: 'High',
        evidence: 'Overwhelmed by dual pressure of personal safety and dependent children welfare.',
        context: 'High cognitive overload regarding legal and physical ramifications.',
      },
      threat: {
        score: 79,
        level: 'High',
        evidence: 'Physical violence towards household objects, explicit custody and displacement threats.',
        context: 'High risk of escalation should spouse detect outreach attempt.',
      },
      isolation: {
        score: 65,
        level: 'High',
        evidence: 'Reluctance to call standard 911 dispatch out of fear of explosive conflict escalation.',
        context: 'Perceived lack of confidential intermediary resources.',
      },
    },
    aiExplanation:
      'Elevated risk profile driven by domestic physical violence, parental custody threats, and co-habitation vulnerability with minor children. Complainant requires discrete silent SMS coordination to prevent alerting cohabitant.',
    recommendedActions: [
      'Initiate silent, non-identifying two-way SMS coordination.',
      'Coordinate safety exit plan before daytime hours.',
      'Alert Family Justice Center advocate for child-safe emergency sheltering.',
      'Review legal hold options for travel documents if risk of flight is corroborated.',
    ],
    status: 'Assessing',
    priorityScore: 2,
    assignedOfficer: 'Det. Ray Morales',
    auditHistory: [
      {
        id: 'aud-02-1',
        timestamp: '2026-09-24T22:38:05Z',
        actor: 'StressShield System',
        action: 'Case Intake',
        notes: 'Text report processed. SVI 76 (High). Tagged for Silent SMS protocol.',
      },
      {
        id: 'aud-02-2',
        timestamp: '2026-09-24T23:05:12Z',
        actor: 'Det. Ray Morales',
        action: 'Status Updated: Assessing',
        notes: 'Reviewed bathroom scenario. Sent one-way confirmation SMS asking safe codeword verification.',
      },
    ],
  },
  {
    id: 'SHIELD-2026-7820',
    trackingCode: 'TRK-7820-K2',
    createdAt: '2026-09-24T18:15:00Z',
    inputMethod: 'text',
    complainantName: 'Anonymous Citizen',
    isAnonymous: true,
    contactPreference: 'Secure Portal Only',
    category: 'Community Threat',
    statement:
      'There is a neighbor who continuously brandishes a hunting knife when walking down our shared apartment hallway and yells racial slurs through walls late at night. Management has ignored three formal complaints. Several elderly residents on our floor are now terrified to fetch their mail.',
    sanitizedStatement:
      'Neighbor openly displaying edged weapon in residential common areas accompanied by aggressive verbal hostility and hate-based epithets. Property management unresponsive. Vulnerable elderly neighbors expressing avoidance behaviors.',
    sviScore: 68,
    riskCategory: 'High',
    indicators: {
      fear: 72,
      distress: 60,
      threat: 79,
      isolation: 55,
    },
    indicatorDetails: {
      fear: {
        score: 72,
        level: 'High',
        evidence: 'Multiple building residents avoiding shared corridors and vital daily activities.',
        context: 'Visible deadly weapon display in enclosed multi-unit residential building.',
      },
      distress: {
        score: 60,
        level: 'Moderate',
        evidence: 'Chronic sleep disruption and anxiety regarding hall encounters.',
        context: 'Ongoing unaddressed environmental harassment.',
      },
      threat: {
        score: 79,
        level: 'High',
        evidence: 'Brandishing of weapon combined with targeted aggressive language.',
        context: 'Significant probability of confrontation in confined spaces.',
      },
      isolation: {
        score: 55,
        level: 'Moderate',
        evidence: 'Property management failure leaves residents feeling unprotected by local authority.',
        context: 'Shared community frustration and vulnerability.',
      },
    },
    aiExplanation:
      'Threat indicators dominate due to repeated visible weapon brandishing and hate-motivated intimidation in shared residential spaces. Risk is elevated by potential impact on frail and elderly co-tenants.',
    recommendedActions: [
      'Forward report to Community Policing / Crisis Intervention liaison for multi-unit check.',
      'Contact apartment management legal compliance officer.',
      'Check database for prior weapon calls or mental health crisis holds at address.',
      'Offer anonymous safety alert check-in for residents.',
    ],
    status: 'Outreach Initiated',
    priorityScore: 2,
    assignedOfficer: 'Officer Sarah Jenkins',
    auditHistory: [
      {
        id: 'aud-03-1',
        timestamp: '2026-09-24T18:15:00Z',
        actor: 'StressShield System',
        action: 'Case Intake',
        notes: 'Anonymous complaint logged. SVI 68 (High).',
      },
      {
        id: 'aud-03-2',
        timestamp: '2026-09-24T19:40:00Z',
        actor: 'Officer Sarah Jenkins',
        action: 'Outreach Initiated',
        notes: 'Cross-referenced municipal records. Officer scheduled proactive daylight building walk-through with tenant board.',
      },
    ],
  },
  {
    id: 'SHIELD-2026-6540',
    trackingCode: 'TRK-6540-M7',
    createdAt: '2026-09-24T14:22:00Z',
    inputMethod: 'text',
    complainantName: 'K. Donaldson',
    isAnonymous: false,
    contactPreference: 'Phone',
    contactValue: '555-012-7491',
    category: 'Trauma & Crisis Support',
    statement:
      'I witnessed a fatal pedestrian collision yesterday morning on 4th Street. I cannot stop replaying it. My chest feels tight, I called off work today because I cannot bear to get in my car or cross the street. I have never felt this helpless and just need crisis counseling.',
    sanitizedStatement:
      'Secondary trauma following direct observation of fatal vehicular incident. Symptoms include intrusive recollections, acute somatic tension (chest tightness), functional avoidance of driving/pedestrian zones, and work absenteeism. Requesting trauma counseling.',
    sviScore: 54,
    riskCategory: 'Moderate',
    indicators: {
      fear: 50,
      distress: 84,
      threat: 15,
      isolation: 58,
    },
    indicatorDetails: {
      fear: {
        score: 50,
        level: 'Moderate',
        evidence: 'Situational fear of vehicular transit and street crossings.',
        context: 'Trauma-triggered hyperarousal following sudden violent event.',
      },
      distress: {
        score: 84,
        level: 'Critical',
        evidence: 'Severe acute distress, somatic chest tightness, intrusive visual replays.',
        context: 'Acute psychological shock 24 hours post-incident.',
      },
      threat: {
        score: 15,
        level: 'Low',
        evidence: 'No interpersonal adversary or active external menace detected.',
        context: 'Accidental event; no ongoing physical endangerment.',
      },
      isolation: {
        score: 58,
        level: 'Moderate',
        evidence: 'Calling off work, staying confined at home, feelings of helplessness.',
        context: 'Withdrawal from daily support systems.',
      },
    },
    aiExplanation:
      'High distress and somatic anxiety caused by acute secondary trauma exposure. Minimal external threat detected. Priority is connecting complainant to trauma-informed psychological first aid and peer crisis support.',
    recommendedActions: [
      'Refer immediately to Victim Witness Assistance / Critical Incident Stress Management team.',
      'Provide warm transfer to local 24/7 Community Mental Health mobile crisis line.',
      'Send grounding exercises and educational pamphlet on normal acute stress responses.',
      'Follow up within 48 hours to confirm counselor connection.',
    ],
    status: 'Support Dispatched',
    priorityScore: 3,
    assignedOfficer: 'Crisis Navigator Chloe Vance',
    auditHistory: [
      {
        id: 'aud-04-1',
        timestamp: '2026-09-24T14:22:10Z',
        actor: 'StressShield System',
        action: 'Case Intake',
        notes: 'Complaint logged. High distress index noted.',
      },
      {
        id: 'aud-04-2',
        timestamp: '2026-09-24T15:10:00Z',
        actor: 'Crisis Navigator Chloe Vance',
        action: 'Support Dispatched',
        notes: 'Direct phone conversation completed. Complainant connected to County Trauma Recovery Center. Follow-up scheduled for Sept 26.',
      },
    ],
  },
  {
    id: 'SHIELD-2026-5120',
    trackingCode: 'TRK-5120-P3',
    createdAt: '2026-09-23T11:05:00Z',
    inputMethod: 'text',
    complainantName: 'David Chen',
    isAnonymous: false,
    contactPreference: 'Phone',
    contactValue: '555-018-9321',
    category: 'Stalking & Harassment',
    statement:
      'My ex-business associate has filed three false regulatory claims against my small grocery store and keeps leaving negative reviews under pseudonyms. It is hurting my business income and making me very stressed. I want to know my legal rights.',
    sanitizedStatement:
      'Civil/commercial dispute involving retaliatory bad-faith complaints and online review campaign by former partner. Financial strain and emotional stress reported. Requesting informational guidance regarding civil recourse.',
    sviScore: 35,
    riskCategory: 'Moderate',
    indicators: {
      fear: 25,
      distress: 55,
      threat: 32,
      isolation: 28,
    },
    indicatorDetails: {
      fear: {
        score: 25,
        level: 'Low',
        evidence: 'No stated fear of bodily injury or personal physical harm.',
        context: 'Distress centered on commercial livelihood and reputational harm.',
      },
      distress: {
        score: 55,
        level: 'Moderate',
        evidence: 'Elevated anxiety regarding financial solvency and business operations.',
        context: 'Ongoing bureaucratic annoyance and business stress.',
      },
      threat: {
        score: 32,
        level: 'Moderate',
        evidence: 'Economic and reputational harassment; no active physical threat.',
        context: 'Commercial dispute mechanisms applicable.',
      },
      isolation: {
        score: 28,
        level: 'Low',
        evidence: 'Complainant operates business and has community ties.',
        context: 'Strong baseline social and legal integration.',
      },
    },
    aiExplanation:
      'Predominantly non-physical commercial harassment with moderate financial distress. Does not involve acute physical threat or social isolation. Suitable for standard civil dispute mediation and legal clinic referral.',
    recommendedActions: [
      'Provide municipal small business legal assistance clinic contact information.',
      'Supply civil harassment injunction information package.',
      'Advise complainant on document preservation standards for civil litigation.',
    ],
    status: 'Resolved / Referred',
    priorityScore: 3,
    assignedOfficer: 'Officer Sarah Jenkins',
    auditHistory: [
      {
        id: 'aud-05-1',
        timestamp: '2026-09-23T11:05:00Z',
        actor: 'StressShield System',
        action: 'Case Intake',
        notes: 'SVI calculated at 35 (Moderate).',
      },
      {
        id: 'aud-05-2',
        timestamp: '2026-09-23T16:30:00Z',
        actor: 'Officer Sarah Jenkins',
        action: 'Resolved / Referred',
        notes: 'Spoke with Mr. Chen. Emailed Civil Dispute Information Packet and District Attorney Consumer Protection intake form. Case closed.',
      },
    ],
  },
  {
    id: 'SHIELD-2026-3890',
    trackingCode: 'TRK-3890-W1',
    createdAt: '2026-09-22T09:40:00Z',
    inputMethod: 'text',
    complainantName: 'Maria Santos',
    isAnonymous: false,
    contactPreference: 'Phone',
    contactValue: '555-011-4560',
    category: 'Other',
    statement:
      'I am requesting an update on my existing restraining order paperwork that expires next month. I want to ensure the renewal date is properly docketed so there is no lapse in coverage. I feel safe right now but want to be proactive.',
    sanitizedStatement:
      'Administrative inquiry regarding docketing and renewal timeline for impending protective order expiration. Complainant reports feeling secure; proactive procedural inquiry.',
    sviScore: 18,
    riskCategory: 'Low',
    indicators: {
      fear: 15,
      distress: 22,
      threat: 12,
      isolation: 18,
    },
    indicatorDetails: {
      fear: {
        score: 15,
        level: 'Low',
        evidence: 'Complainant explicitly self-reports feeling secure in current living situation.',
        context: 'Low acute anxiety; proactive planning behavior.',
      },
      distress: {
        score: 22,
        level: 'Low',
        evidence: 'Routine procedural concern regarding expiration date continuity.',
        context: 'Normal administrative follow-up.',
      },
      threat: {
        score: 12,
        level: 'Low',
        evidence: 'No active breaches or new menacing events reported.',
        context: 'Historical order remains in place.',
      },
      isolation: {
        score: 18,
        level: 'Low',
        evidence: 'Well connected to legal process and advocacy services.',
        context: 'High system agency and empowerment.',
      },
    },
    aiExplanation:
      'Standard administrative inquiry with very low vulnerability indicators. Complainant reports feeling secure and is proactively managing legal protections.',
    recommendedActions: [
      'Verify protective order docket status in court clerk registry.',
      'Send automated renewal filing reminder package via email/mail.',
      'Provide Victim Advocate contact for renewal hearing support.',
    ],
    status: 'Resolved / Referred',
    priorityScore: 4,
    assignedOfficer: 'Officer Sarah Jenkins',
    auditHistory: [
      {
        id: 'aud-06-1',
        timestamp: '2026-09-22T09:40:00Z',
        actor: 'StressShield System',
        action: 'Case Intake',
        notes: 'Low triage priority assigned (SVI 18).',
      },
      {
        id: 'aud-06-2',
        timestamp: '2026-09-22T10:15:00Z',
        actor: 'Officer Sarah Jenkins',
        action: 'Resolved / Referred',
        notes: 'Docket date confirmed for Oct 18. Sent notice and assigned court liaison volunteer.',
      },
    ],
  },
];

/**
 * Intelligent simulation engine for new user reports.
 * Parses input statement for semantic distress markers, threat terms,
 * isolation clues, and fear cues to compute realistic SVI and breakdown.
 */
export function simulateAiAssessment(
  statement: string,
  inputMethod: 'text' | 'voice',
  category: CaseRecord['category'],
  complainantName: string,
  isAnonymous: boolean,
  contactPreference: CaseRecord['contactPreference'],
  contactValue?: string,
  audioDuration?: number
): CaseRecord {
  const lower = statement.toLowerCase();

  // Keyword scoring arrays
  const threatKeywords = ['kill', 'weapon', 'gun', 'knife', 'hurt', 'threat', 'stalk', 'break in', 'door', 'outside', 'die', 'murder', 'hit', 'strangle', 'lockout', 'burn', 'destroy'];
  const fearKeywords = ['terrified', 'scared', 'shaking', 'crying', 'afraid', 'fear', 'dread', 'panic', 'hiding', 'trembling', 'nightmare', 'cannot breathe', 'screaming', 'trapped'];
  const distressKeywords = ['overwhelmed', 'desperate', 'helpless', 'can’t sleep', 'cannot sleep', 'tight', 'pain', 'breaking down', 'unbearable', 'suffering', 'exhausted', 'hopeless', 'anxious', 'chest'];
  const isolationKeywords = ['alone', 'no one', 'no family', 'isolated', 'nobody', 'nowhere to go', 'abandoned', 'stranger', 'no friends', 'locked', 'refuge', 'hiding'];

  let threatScore = 20;
  let fearScore = 25;
  let distressScore = 25;
  let isolationScore = 20;

  threatKeywords.forEach((kw) => {
    if (lower.includes(kw)) threatScore += 16;
  });
  fearKeywords.forEach((kw) => {
    if (lower.includes(kw)) fearScore += 15;
  });
  distressKeywords.forEach((kw) => {
    if (lower.includes(kw)) distressScore += 14;
  });
  isolationKeywords.forEach((kw) => {
    if (lower.includes(kw)) isolationScore += 15;
  });

  if (category === 'Stalking & Harassment') {
    threatScore += 15;
    fearScore += 10;
  } else if (category === 'Domestic & Family Safety') {
    threatScore += 18;
    distressScore += 12;
  } else if (category === 'Trauma & Crisis Support') {
    distressScore += 22;
    fearScore += 10;
  }

  // Cap indicators at 98 max and 10 min
  threatScore = Math.min(98, Math.max(12, threatScore));
  fearScore = Math.min(98, Math.max(15, fearScore));
  distressScore = Math.min(98, Math.max(18, distressScore));
  isolationScore = Math.min(98, Math.max(10, isolationScore));

  // Compute composite SVI
  // Threat and Fear carry high weighting in crisis triage
  const composite = Math.round(
    threatScore * 0.32 + fearScore * 0.30 + distressScore * 0.22 + isolationScore * 0.16
  );
  const sviScore = Math.min(99, Math.max(8, composite));

  let riskCategory: RiskCategory = 'Low';
  let priorityScore = 4;
  if (sviScore >= 80) {
    riskCategory = 'Critical';
    priorityScore = 1;
  } else if (sviScore >= 60) {
    riskCategory = 'High';
    priorityScore = 2;
  } else if (sviScore >= 30) {
    riskCategory = 'Moderate';
    priorityScore = 3;
  } else {
    riskCategory = 'Low';
    priorityScore = 4;
  }

  const helperCategoryLevel = (score: number): RiskCategory => {
    if (score >= 80) return 'Critical';
    if (score >= 60) return 'High';
    if (score >= 30) return 'Moderate';
    return 'Low';
  };

  const idNumber = Math.floor(1000 + Math.random() * 9000);
  const caseId = `SHIELD-2026-${idNumber}`;
  const trackingCode = `TRK-${idNumber}-${Math.random().toString(36).substring(2, 4).toUpperCase()}`;

  const recommendedActions: string[] = [];
  if (riskCategory === 'Critical') {
    recommendedActions.push('Immediate crisis intervention outreach via preferred secure contact.');
    recommendedActions.push('Assess necessity of active patrol dispatch or physical welfare check.');
    recommendedActions.push('Engage emergency shelter coordinator and confidential hotel placement.');
    recommendedActions.push('Initiate high-risk lethality protocol with specialized domestic trauma unit.');
  } else if (riskCategory === 'High') {
    recommendedActions.push('Human officer review within 30 minutes.');
    recommendedActions.push('Establish two-way secure messaging or discreet telephone contact.');
    recommendedActions.push('Provide immediate personalized safety planning checklist.');
    recommendedActions.push('Connect with local victim advocacy organization for legal protective orders.');
  } else if (riskCategory === 'Moderate') {
    recommendedActions.push('Officer review within standard shift triage window (2-4 hours).');
    recommendedActions.push('Connect complainant with community mental health navigator or dispute counselor.');
    recommendedActions.push('Provide digital self-advocacy and evidence-logging guide.');
  } else {
    recommendedActions.push('Standard procedural review and guidance delivery.');
    recommendedActions.push('Provide administrative resources and municipal support directory.');
  }

  let aiExplanation = '';
  if (riskCategory === 'Critical') {
    aiExplanation = `Elevated triage rating (SVI ${sviScore}/100) triggered by high convergence of active threat indicators (${threatScore}/100) and profound acute fear (${fearScore}/100). The narrative demonstrates high vulnerability necessitating immediate human officer intervention.`;
  } else if (riskCategory === 'High') {
    aiExplanation = `High risk prioritization (SVI ${sviScore}/100) driven by distressing circumstances, sustained anxiety (${distressScore}/100), and interpersonal menace. Recommends prompt officer assessment and safety coordination.`;
  } else if (riskCategory === 'Moderate') {
    aiExplanation = `Moderate vulnerability index (SVI ${sviScore}/100). While acute physical danger markers are currently stabilized, situational distress (${distressScore}/100) indicates significant emotional strain requiring community support resources.`;
  } else {
    aiExplanation = `Low acute vulnerability index (SVI ${sviScore}/100). The report reflects procedural or secondary support requirements without active acute threat or severe personal isolation markers.`;
  }

  return {
    id: caseId,
    trackingCode,
    createdAt: new Date().toISOString(),
    inputMethod,
    audioDurationSeconds: audioDuration,
    complainantName: isAnonymous ? 'Anonymous Complainant' : complainantName || 'Complainant',
    isAnonymous,
    contactPreference,
    contactValue,
    category,
    statement,
    sanitizedStatement: `[Sanitized Public Intake] Subject filed incident report under ${category}. Primary distress factors extracted: Threat (${threatScore}%), Fear (${fearScore}%), Distress (${distressScore}%). Personal identifying numbers and exact addresses secured in vault.`,
    sviScore,
    riskCategory,
    indicators: {
      fear: fearScore,
      distress: distressScore,
      threat: threatScore,
      isolation: isolationScore,
    },
    indicatorDetails: {
      fear: {
        score: fearScore,
        level: helperCategoryLevel(fearScore),
        evidence: `Extracted emotional indicators reflecting ${fearScore > 65 ? 'acute panic and hypervigilance' : 'moderate unease and apprehension'}.`,
        context: 'Linguistic patterns match acute crisis intake lexicons.',
      },
      distress: {
        score: distressScore,
        level: helperCategoryLevel(distressScore),
        evidence: `Textual markers demonstrating ${distressScore > 65 ? 'intense somatic and cognitive overwhelm' : 'manageable situational worry'}.`,
        context: 'Assessed against trauma-informed linguistic benchmarks.',
      },
      threat: {
        score: threatScore,
        level: helperCategoryLevel(threatScore),
        evidence: `Detected explicit or contextual mentions of ${threatScore > 65 ? 'imminent interpersonal hostility or proximity' : 'low-level dispute or administrative friction'}.`,
        context: 'Scored against validated interpersonal violence screening rubrics.',
      },
      isolation: {
        score: isolationScore,
        level: helperCategoryLevel(isolationScore),
        evidence: `Indicators of ${isolationScore > 60 ? 'severed support network and confined surroundings' : 'existing or available community support channels'}.`,
        context: 'Social connectivity factor in crisis mitigation.',
      },
    },
    aiExplanation,
    recommendedActions,
    status: 'Pending Triage',
    priorityScore,
    assignedOfficer: 'Duty Officer (Unassigned)',
    auditHistory: [
      {
        id: `aud-${Date.now()}`,
        timestamp: new Date().toISOString(),
        actor: 'StressShield System',
        action: 'Case Intake & AI Triage Analysis',
        notes: `Report received via ${inputMethod} intake. PII sanitized. SVI computed at ${sviScore} (${riskCategory}). Queued for human review.`,
      },
    ],
  };
}

export const SAMPLE_SCENARIOS = [
  {
    title: 'Imminent Stalking & Exterior Threat',
    category: 'Stalking & Harassment' as const,
    statement:
      "My former partner has been waiting outside my apartment building for the third night in a row. He texted me a picture of my front door 20 minutes ago saying 'You can't hide forever.' I have no family in this state and my deadbolt feels weak. I am shaking and terrified to step outside or turn on any lights.",
    risk: 'Critical',
  },
  {
    title: 'Domestic Coercion & Escalating Aggression',
    category: 'Domestic & Family Safety' as const,
    statement:
      'My spouse threatened to take the children out of country and lock me out if I contact an attorney. He threw kitchen chairs this evening. The kids are asleep now, but I am locked in the bathroom typing this. I don’t know who to call without making things explode.',
    risk: 'High',
  },
  {
    title: 'Severe Witness Trauma & Somatic Shock',
    category: 'Trauma & Crisis Support' as const,
    statement:
      'I witnessed a fatal pedestrian collision yesterday morning on 4th Street. I cannot stop replaying it. My chest feels tight, I called off work today because I cannot bear to get in my car or cross the street. I have never felt this helpless and just need crisis counseling.',
    risk: 'Moderate',
  },
  {
    title: 'Administrative Protective Order Docketing',
    category: 'Other' as const,
    statement:
      'I am requesting an update on my existing restraining order paperwork that expires next month. I want to ensure the renewal date is properly docketed so there is no lapse in coverage. I feel safe right now but want to be proactive.',
    risk: 'Low',
  },
];
