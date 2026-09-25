# StressShield — Crisis & Trauma Triage Management System

> **Official Civic Safety Prototype**: A trauma-informed, privacy-first crisis intake platform and supervisory officer triage console engineered to streamline support in moments of acute distress.

---

## 🌟 Executive Summary & Project Vision

In high-stakes crises—such as domestic violence, stalking, sexual violence, community harassment, or severe acute trauma—survivors frequently encounter the **cognitive freeze of trauma**:
- Traditional reporting systems require navigating rigid 25-field bureaucratic forms.
- Victims locked in a closet or bathroom cannot speak openly without tipping off an aggressor in the immediate vicinity.
- Emergency 911 lines often dispatch armed patrol units by default, which can inadvertently trigger escalating violence or panic when discreet social work or mobile crisis intervention is what is truly required.

**StressShield** bridges this divide by providing:
1. **Low-Friction, Multi-Modal Citizen Intake**: Anonymous or discrete reporting through spoken audio or silent text narratives without demanding legal identification or Social Security numbers.
2. **Stress Vulnerability Index (SVI 0–100)**: A transparent, calibrated algorithmic prioritization index assessing 4 key situational dimensions: **Threat**, **Fear**, **Distress**, and **Isolation**.
3. **Strict Human-in-the-Loop (HITL) Oversight**: Clinical and sworn law-enforcement personnel maintain 100% supervisory authority. Algorithmic scores serve exclusively as advisory prioritization signals—never automated dispatch or medical diagnoses.
4. **Physiological & Grounding Stabilization**: Built-in interactive box-breathing regulators (4-4-4 technique) and four-step safety checklists provided immediately upon submission while an assigned crisis counselor reviews the file.

---

## 🛡️ Core Operational Portals

### 1. Citizen & Survivor Portal (`Public Support` & `Self-Assessment & SVI`)
- **Multi-Modal Narrative Ingest**: Choose between typed statements or voice dictation with an interactive waveform visualizer, duration timer, and live transcription preview.
- **Current Indicator Selectors**: Quick tagging of emotional and physical factors (*Severe Distress, Threats to Safety, Extreme Isolation, Panic / Fear, Physical Injury, Need Safe Shelter*).
- **Mandatory Non-Diagnostic Disclaimer**: Explicit consent acknowledgment stating StressShield does **NOT** diagnose PTSD, clinical depression, or psychiatric disorders.
- **Safety Features**:
  - `🚨 Quick Exit (Esc)` button to immediately redirect to a neutral web page (e.g. Google or Weather).
  - 60-minute automatic local memory self-purge.
  - One-click non-police crisis transit escort requests with an unmarked vehicle, zero-siren policy.
- **Physiological Stabilization**: Embedded interactive Box Breathing visualizer with real-time Inhale (4s), Hold (4s), and Exhale (4s) guidance.
- **Assigned Specialist Connection**: Real-time assignment to certified on-call counselors (e.g., Counselor Sarah Jenkins, LCSW • Badge #CIT-4482) with secure chat links, 988 lifeline integration, and direct safe haven node navigation.

### 2. Officer Ops Command Portal (`Crisis Intake Queue & Incident Review`)
- **Queue Overview & Telemetry**:
  - Live metric cards: Active Priority Cases, Critical / High SVI Tier, Avg AI-to-Human Review Time (`4m 12s` vs `< 8m` SLA), and Human Review Compliance (`100% HITL Cleared`).
  - High-density triage table with multi-tier risk filtering (`Critical`, `High`, `Moderate`, `Low`), status lifecycle, and quick access to VOIP audio duration and wait times.
  - Tactical support widgets: Unit Commander profile (Sgt. Miller, Watch Commander), Priority Dispatch mode switch, direct Computer-Aided Dispatch (CAD) links, and live field unit roster (`Sector 4 Field Units`).
- **In-Depth Case Incident Review Dossier**:
  - **Complainant Demographics & Profile**: Age demographic, encrypted callback vector, and triangulated sector.
  - **Audio Evidence Player**: Lossless VOIP playback with acoustic tremor and elevated respiratory pace detection.
  - **Verbatim Transcribed Narrative**: Timestamped transcript with semantic threat highlights (e.g., weapon threats, perimeter pounding, coercion).
  - **Explainable AI (XAI) Feature Weights**: Transparent bar charts illustrating contributing weights (Acoustic Tremor 38%, Threat Lexicon 31%, Temporal Urgency 19%, Isolation Index 12%).
  - **Human-in-the-Loop Decision Center**: Radio options to confirm, escalate to critical emergency breach, or downgrade risk tier; actionable directive checkboxes; clinical assessment notes; and cryptographic digital signatures.
  - **Immutable Case Timeline**: Cryptographic audit ledger with timestamped ingestion, computation, docket claim, and unit mobilization events.

---

## 📊 Stress Vulnerability Index (SVI) Metrics

The SVI produces a composite score from `0` to `100` based on four primary pillars:

| Indicator | Weight | What It Measures |
| :--- | :---: | :--- |
| **Physical Threat** | `32%` | Direct threats of bodily injury, weapon presence, perimeter breaches, or escalating aggression. |
| **Autonomic Fear** | `30%` | Somatic panic markers, hypervigilance, trembling, fear of turning on lights, and cognitive paralysis. |
| **Situational Distress** | `22%` | Emotional exhaustion, intrusive flashbacks, cognitive overload, and acute somatic pressure. |
| **Support Isolation** | `16%` | Absence of local emergency contacts, estrangement, confinement in locked quarters, or severed networks. |

### Severity Categorization
- **Critical (`80–100`)**: Immediate priority escalation. Recommends mobile crisis intervention or welfare check.
- **High (`60–79`)**: Elevated vulnerability. Targeted officer review within 15–30 minutes, silent SMS verification.
- **Moderate (`30–59`)**: Manageable acute safety profile. Standard shift triage review, counseling referrals, self-advocacy guides.
- **Low (`0–29`)**: Procedural or administrative inquiry (e.g. protective order docketing, civil records).

---

## 🔒 Ethical Safeguards & Legal Disclaimers

1. **Strictly Non-Diagnostic**:
   StressShield is an administrative decision-support system. It **does not diagnose Post-Traumatic Stress Disorder (PTSD), mood disorders, or psychiatric illnesses**.
2. **Absolute Human-in-the-Loop Authority**:
   No punitive actions, arrests, or tactical deployments can be initiated by automated algorithms alone. Sworn crisis officers and licensed clinicians possess total manual override authority.
3. **Data Minimization & Ephemeral Caching**:
   Personal identifying information (PII) is encrypted and stripped into vault storage. Sessions self-purge from browser storage after 60 minutes of inactivity.

---

## 💻 Tech Stack & Architecture

- **Frontend Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 8](https://vitejs.dev/) with `@vitejs/plugin-react`
- **Styling & Design System**: [Tailwind CSS v4](https://tailwindcss.com/) with the modern `@import "tailwindcss";` pipeline
- **Typography**: [Satoshi](https://www.fontshare.com/fonts/satoshi) by Indian Type Foundry (clean, modern geometric sans-serif)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: Reactive component state with synthetic AI triage simulation and audit history logging
- **Accessibility & Compliance**: Section 508 / WCAG 2.1 AA compliant color contrasts, semantic landmarks, and keyboard shortcuts (`Esc` for quick exit).

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 20 or higher recommended)
- npm or pnpm

### Installation & Local Development
```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:3000` to interact with both the **Citizen Intake Portal** and the **Officer Ops Command Console**.

### Production Build
```bash
npm run build
```

---

## 📝 Prototype Demonstration Scenarios

To test the system immediately, use the built-in preset scenarios located on the intake form:
1. **Imminent Stalking & Threat** (`Critical / High` — SVI ~78-89): Simulates a former partner waiting outside an apartment with threatening photos and lack of local family support.
2. **Domestic Coercion & Escalation** (`High` — SVI ~76): Simulates a complainant barricaded in a bathroom with children sleeping in the residence.
3. **Witness Trauma & Somatic Shock** (`Moderate` — SVI ~54): Simulates secondary traumatic shock with acute somatic tension and work absenteeism.
4. **Administrative Protective Order Docketing** (`Low` — SVI ~18): Simulates a routine expiration inquiry with no active physical threats.

---

## ⚖️ License & Attribution

Designed and maintained for research, public-safety evaluation, and trauma-informed crisis systems.
© 2026 StressShield Government Public Safety Network. All rights reserved.
