export type RiskCategory = 'Low' | 'Moderate' | 'High' | 'Critical';

export type CaseStatus =
  | 'Pending Triage'
  | 'Assessing'
  | 'Outreach Initiated'
  | 'Support Dispatched'
  | 'Resolved / Referred';

export interface IndicatorScores {
  fear: number;
  distress: number;
  threat: number;
  isolation: number;
}

export interface IndicatorDetail {
  score: number;
  level: RiskCategory;
  evidence: string;
  context: string;
}

export interface AuditEntry {
  id: string;
  timestamp: string;
  actor: string;
  action: string;
  notes: string;
}

export interface OfficerOverride {
  originalSvi: number;
  adjustedSvi: number;
  adjustedRisk: RiskCategory;
  reason: string;
  officerName: string;
  timestamp: string;
}

export interface CaseRecord {
  id: string;
  trackingCode: string;
  createdAt: string;
  inputMethod: 'text' | 'voice';
  audioDurationSeconds?: number;
  complainantName: string;
  isAnonymous: boolean;
  contactPreference: 'Phone' | 'SMS' | 'Secure Portal Only' | 'Do not contact';
  contactValue?: string;
  safeTimeToContact?: string;
  category: 'Domestic & Family Safety' | 'Stalking & Harassment' | 'Community Threat' | 'Trauma & Crisis Support' | 'Other';
  statement: string;
  sanitizedStatement: string;
  sviScore: number; // 0 - 100
  riskCategory: RiskCategory;
  indicators: IndicatorScores;
  indicatorDetails: {
    fear: IndicatorDetail;
    distress: IndicatorDetail;
    threat: IndicatorDetail;
    isolation: IndicatorDetail;
  };
  aiExplanation: string;
  recommendedActions: string[];
  status: CaseStatus;
  priorityScore: number; // 1 (Highest) to 4 (Lowest)
  assignedOfficer: string;
  officerOverride?: OfficerOverride;
  auditHistory: AuditEntry[];
}

export interface OfficerProfile {
  id: string;
  name: string;
  badge: string;
  role: string;
  unit: string;
  jurisdiction: string;
}
