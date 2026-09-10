import React from 'react';
import { 
  Shield, 
  Lock, 
  Cpu, 
  FileCheck2, 
  Layers, 
  ArrowRight, 
  Database, 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  ExternalLink,
  Users,
  Building2,
  FileSpreadsheet,
  ScanEye,
  ChevronRight,
  TrendingUp,
  FileText,
  Key
} from 'lucide-react';
import { RoutePage, ProblemStat, WorkflowStep, CoreComponent } from '../types';

interface LandingPageProps {
  onNavigate: (page: RoutePage) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const problemStats: ProblemStat[] = [
    {
      id: 'schools',
      code: 'SILO_01',
      sector: 'SCHOOLS & PHYSICAL ED',
      stat: '84%',
      label: 'RECORDS LOST UPON GRADUATION',
      impact: 'Annual physical fitness cards and inter-school athletic times remain trapped in physical paper ledgers, wiped out when students change schools or age out.'
    },
    {
      id: 'ngos',
      code: 'SILO_02',
      sector: 'GRASSROOTS FOUNDATIONS & NGOS',
      stat: '0%',
      label: 'HISTORICAL BENCHMARK PORTABILITY',
      impact: 'Rural talent scouts travel to remote districts with zero access to athletes’ developmental growth curves, nutritional records, or baseline testing history.'
    },
    {
      id: 'authorities',
      code: 'SILO_03',
      sector: 'STATE & NATIONAL AUTHORITIES',
      stat: '92%',
      label: 'DUPLICATE TESTING OVERHEAD',
      impact: 'District sports councils, state associations, and national trials constantly re-test the same junior athletes due to disconnected, proprietary registry silos.'
    },
    {
      id: 'wearables',
      code: 'SILO_04',
      sector: 'WEARABLES & SENSORS',
      stat: '100%',
      label: 'PROPRIETARY FORMAT ISOLATION',
      impact: 'Laser timing gates, GPS harnesses, and jump mats spit isolated CSV exports into disparate cloud drives with no unified national youth schema.'
    }
  ];

  const workflowSteps: WorkflowStep[] = [
    {
      step: '01',
      badge: 'ONBOARDING & KYC',
      title: 'REGISTER AS PROVIDER OR CONSUMER',
      subtitle: 'Institutional vetting & cryptographic credentialing',
      details: 'Schools, academies, sports foundations, and scouting clubs register as either Financial Information Provider (FIP)-equivalent data sources or Data Consumers with certified digital certificates and strict identity verification.'
    },
    {
      step: '02',
      badge: 'GUARDIAN GOVERNANCE',
      title: 'CONSENT CAPTURED & SCOPED',
      subtitle: 'DPDP Section 9 verified parental authorization',
      details: 'Whenever an NGO scout or state academy requests athlete benchmarks, a cryptographically signed electronic consent artifact is triggered to the parent or legal guardian specifying exact fields, evaluation purpose, and strict validity window.'
    },
    {
      step: '03',
      badge: 'ZERO-TRUST EXCHANGE',
      title: 'DATA FLOWS THROUGH RBAC + AUDIT LOG',
      subtitle: 'Point-to-point encrypted payload with immutable receipts',
      details: 'Raw data is transferred directly between data fiduciary and authorized consumer through an mTLS API gateway. USDX never stores raw records. Every byte queried is written to a cryptographic, tamper-evident audit ledger.'
    }
  ];

  const coreComponents: CoreComponent[] = [
    {
      id: 'schema',
      tag: 'SPEC-01',
      title: 'STANDARDIZED ATHLETE SCHEMA',
      description: 'A unified Indian ontology defining anthropometrics (height, wing span), physical benchmarks (beep test, 30m sprint, counter-movement jump), and verified age records.',
      specCode: 'USDX_SCHEMA_v1.4'
    },
    {
      id: 'consent',
      tag: 'SPEC-02',
      title: 'CONSENT & IDENTITY LAYER',
      description: 'Analogous to India’s Account Aggregator (AA) framework. Machine-readable electronic consent artifacts signed via Aadhaar/DigiLocker OTP with guardian verification.',
      specCode: 'AA_CHILD_CONSENT_2023'
    },
    {
      id: 'rbac',
      tag: 'SPEC-03',
      title: 'ROLE-BASED ACCESS CONTROL (RBAC)',
      description: 'Attribute-based authorization matrix ensuring scouts, medical teams, and school principals only inspect the granular telemetry tiers they are explicitly cleared for.',
      specCode: 'POLICY_RBAC_STRICT'
    },
    {
      id: 'gateway',
      tag: 'SPEC-04',
      title: 'HIGH-THROUGHPUT API GATEWAY',
      description: 'Federated microservices gateway orchestrating point-to-point data retrieval between school management portals, wearable SDKs, and scouting dashboards.',
      specCode: 'mTLS_FEDERATED_ROUTER'
    },
    {
      id: 'audit',
      tag: 'SPEC-05',
      title: 'IMMUTABLE AUDIT LOGGING',
      description: 'Tamper-evident SHA-256 Merkle logging recording every access grant, data inspection, and consent revocation to guarantee non-repudiation under Indian law.',
      specCode: 'CRYPT_LEDGER_CHAIN'
    }
  ];

  const demoScreensOverview = [
    {
      id: 'school-upload' as RoutePage,
      title: '01. School Upload Portal',
      role: 'Data Fiduciary (FIP)',
      description: 'Bulk CSV athlete vitals upload, UDISE+ validation, and fitness test baseline certification.',
      icon: FileSpreadsheet,
      badge: 'PROVIDER VIEW'
    },
    {
      id: 'ngo-scouting' as RoutePage,
      title: '02. NGO Scouting View',
      role: 'Data Consumer (FIU)',
      description: 'Consent-gated search by sprint speed, vertical jump, age bracket, and district talent index.',
      icon: ScanEye,
      badge: 'CONSUMER VIEW'
    },
    {
      id: 'authority-dashboard' as RoutePage,
      title: '03. Coach & Authority Hub',
      role: 'Sports Authority / Khelo India',
      description: 'State talent pipeline analytics, district developmental benchmarks, and squad cohort tracking.',
      icon: TrendingUp,
      badge: 'ANALYTICS VIEW'
    },
    {
      id: 'guardian-consent' as RoutePage,
      title: '04. Guardian Consent Portal',
      role: 'Parent / Legal Guardian',
      description: 'DPDP-compliant consent authorization dashboard, purpose scoping, and 1-click revocation.',
      icon: Key,
      badge: 'CONSENT LAYER'
    },
    {
      id: 'audit-log' as RoutePage,
      title: '05. Cryptographic Audit Ledger',
      role: 'Regulatory & Compliance Officer',
      description: 'Real-time tamper-evident cryptographic event stream verifying DPDP Act compliance.',
      icon: FileText,
      badge: 'AUDIT / COMPLIANCE'
    }
  ];

  return (
    <div id="landing-page" className="min-h-screen bg-[#0A0A0A] text-white">
      {/* 1. HERO SECTION: Large background area, bold condensed headline, sports club dashboard styling */}
      <section 
        id="hero-section"
        className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden border-b border-[#222222]"
      >
        {/* Dark sports background grid with subtle crimson glow */}
        <div className="absolute inset-0 bg-sports-grid pointer-events-none opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-[#E31B23]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -left-20 top-40 w-96 h-96 bg-[#E31B23]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Live Telemetry Bar */}
          <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-[#121212] border border-[#2B2B2B] text-xs font-mono-code text-[#CCCCCC] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E31B23] animate-pulse" />
            <span className="text-[#E31B23] font-bold">USDX PROTOCOL</span>
            <span className="text-[#555555]">|</span>
            <span>INDIA DPDP ACT 2023 COMPLIANT</span>
            <span className="hidden sm:inline text-[#555555]">|</span>
            <span className="hidden sm:inline text-[#888888]">FEDERATED TALENT INFRASTRUCTURE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Bold Condensed Headline */}
              <h1 
                id="hero-main-headline"
                className="font-condensed text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-white"
              >
                ONE ATHLETE.<br />
                <span className="text-white">ONE RECORD.</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31B23] via-[#FF3B44] to-[#E31B23]">
                  EVERY STAKEHOLDER.
                </span>
              </h1>

              {/* Subheading */}
              <p 
                id="hero-subheading"
                className="text-base sm:text-lg text-[#A6A6A6] leading-relaxed max-w-2xl font-normal"
              >
                USDX is a consent-driven sports data exchange connecting schools, grassroots NGOs, 
                sports authorities, and coaches. Built on the architectural principles of India&apos;s 
                <strong className="text-white font-semibold"> Account Aggregator (AA) framework</strong>, 
                applied strictly to youth athletics and talent development.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  id="hero-cta-see-demo"
                  onClick={() => onNavigate('school-upload')}
                  className="px-8 py-4 bg-[#E31B23] hover:bg-[#C9131A] text-white font-condensed font-black uppercase tracking-wider text-xl transition-all active:scale-95 cursor-pointer shadow-xl shadow-[#E31B23]/25 flex items-center gap-3 border border-[#FF3B44]/40"
                >
                  <span>See the Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <a
                  id="hero-cta-how-it-works"
                  href="#how-it-works-section"
                  className="px-6 py-4 bg-[#141414] hover:bg-[#1C1C1C] text-white font-condensed font-bold uppercase tracking-wider text-lg border border-[#2B2B2B] hover:border-[#E31B23] transition-colors cursor-pointer"
                >
                  How It Works
                </a>
              </div>

              {/* Quick Architectural Trust Pillars */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#1F1F1F]">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#E31B23]" />
                  <span className="text-xs font-mono-code text-[#999999] uppercase">Guardian Consent</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#E31B23]" />
                  <span className="text-xs font-mono-code text-[#999999] uppercase">Zero Raw Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#E31B23]" />
                  <span className="text-xs font-mono-code text-[#999999] uppercase">mTLS Federated</span>
                </div>
              </div>
            </div>

            {/* Right Hero Graphic Card: Sports Club Digital Command Telemetry */}
            <div className="lg:col-span-5">
              <div className="bg-[#121212] border-2 border-[#242424] p-5 relative shadow-2xl">
                {/* Sports Club Tag Accent */}
                <div className="absolute top-0 right-0 bg-[#E31B23] text-white px-3 py-1 text-[11px] font-condensed font-black uppercase tracking-widest">
                  LIVE EXCHANGE PROTOCOL
                </div>

                {/* Dashboard Status Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
                  <div>
                    <span className="text-[10px] font-mono-code text-[#888888] uppercase block">EXCHANGE ID</span>
                    <span className="font-condensed text-xl font-bold uppercase text-white tracking-wide">
                      USDX // IN-TALENT-GRID
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono-code text-emerald-400 font-bold block">● STATUS: OPERATIONAL</span>
                    <span className="text-xs font-mono-code text-[#777777]">DPDP v1.2</span>
                  </div>
                </div>

                {/* Simulated Exchange Node Metrics */}
                <div className="grid grid-cols-2 gap-3 my-4">
                  <div className="bg-[#0D0D0D] p-3 border border-[#1E1E1E]">
                    <span className="text-[10px] font-mono-code text-[#888888] uppercase block">REGISTERED SCHOOLS</span>
                    <span className="font-condensed text-3xl font-black text-white">4,812</span>
                    <span className="text-[10px] text-emerald-400 font-mono-code block mt-0.5">UDISE+ Linked</span>
                  </div>
                  <div className="bg-[#0D0D0D] p-3 border border-[#1E1E1E]">
                    <span className="text-[10px] font-mono-code text-[#888888] uppercase block">VERIFIED ATHLETES</span>
                    <span className="font-condensed text-3xl font-black text-[#E31B23]">184,290</span>
                    <span className="text-[10px] text-[#A0A0A0] font-mono-code block mt-0.5">Aadhaar Tokenized</span>
                  </div>
                  <div className="bg-[#0D0D0D] p-3 border border-[#1E1E1E]">
                    <span className="text-[10px] font-mono-code text-[#888888] uppercase block">ACTIVE CONSENTS</span>
                    <span className="font-condensed text-3xl font-black text-white">99.4%</span>
                    <span className="text-[10px] text-[#888888] font-mono-code block mt-0.5">Guardian Signed</span>
                  </div>
                  <div className="bg-[#0D0D0D] p-3 border border-[#1E1E1E]">
                    <span className="text-[10px] font-mono-code text-[#888888] uppercase block">SCOUTING QUERIES</span>
                    <span className="font-condensed text-3xl font-black text-white">62.8K</span>
                    <span className="text-[10px] text-[#888888] font-mono-code block mt-0.5">Audited & Sealed</span>
                  </div>
                </div>

                {/* Simulated Live Packet Stream */}
                <div className="bg-[#0A0A0A] p-3 border border-[#1F1F1F] font-mono-code text-[11px] space-y-1.5">
                  <div className="text-[#888888] flex items-center justify-between border-b border-[#1A1A1A] pb-1 text-[10px]">
                    <span>RECENT EXCHANGE TRANSACTION</span>
                    <span className="text-emerald-400">VERIFIED 200 OK</span>
                  </div>
                  <div className="text-[#C0C0C0] flex items-center justify-between">
                    <span className="text-white font-bold">REQ_7419</span>
                    <span className="text-[#E31B23]">FIP: DAV_MODEL_SCHOOL</span>
                  </div>
                  <div className="text-[#888888] text-[10px]">
                    CONSUMER: OLYMPIC_GOLD_QUEST_SCOUT // CONSENT: GRANTED
                  </div>
                  <div className="text-[#666666] text-[10px] flex items-center justify-between">
                    <span>PAYLOAD: 30m_SPRINT, V_JUMP</span>
                    <span>HASH: 0x8f3c...1e9b</span>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-4 pt-3 border-t border-[#222222] flex items-center justify-between">
                  <span className="text-xs font-mono-code text-[#888888]">SELECT DEMO VIEW BELOW</span>
                  <button
                    onClick={() => onNavigate('ngo-scouting')}
                    className="text-xs font-condensed uppercase font-bold text-[#E31B23] hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Test Scout Filter</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM STRIP: 4 stat-style cards showing the fragmentation problem (schools, NGOs, state authorities, wearables - each siloed) */}
      <section 
        id="problem-section" 
        className="py-16 sm:py-24 bg-[#0D0D0D] border-b border-[#222222] relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#222222] gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-[#E31B23]"></span>
                <span className="text-xs font-mono-code uppercase tracking-widest text-[#E31B23] font-bold">
                  ECOSYSTEM DIAGNOSTIC // 4 SILOS
                </span>
              </div>
              <h2 className="font-condensed text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                THE FRAGMENTATION CRISIS
              </h2>
            </div>
            <p className="text-sm text-[#888888] max-w-md font-mono-code">
              Youth sports in India generates massive data daily. None of it talks to each other. 
              Athletes start from zero at every trial.
            </p>
          </div>

          {/* 4 Stat-Style Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {problemStats.map((item) => (
              <div
                key={item.id}
                id={`problem-card-${item.id}`}
                className="bg-[#121212] border border-[#242424] hover:border-[#E31B23] transition-all p-6 relative group flex flex-col justify-between"
              >
                {/* Top Corner Red Line Indicator */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#222222] group-hover:bg-[#E31B23] transition-colors" />

                <div>
                  <div className="flex items-center justify-between text-xs font-mono-code text-[#777777] mb-3">
                    <span>{item.code}</span>
                    <span className="text-[#E31B23] font-bold">SILOED</span>
                  </div>

                  <span className="text-xs font-condensed uppercase font-bold tracking-wider text-[#A0A0A0] block">
                    {item.sector}
                  </span>

                  {/* Big stat number in card */}
                  <div className="my-3">
                    <span className="font-condensed text-6xl font-black tracking-tight text-white group-hover:text-[#E31B23] transition-colors">
                      {item.stat}
                    </span>
                  </div>

                  <h3 className="font-condensed text-lg font-bold uppercase tracking-wide text-white mb-2 leading-tight">
                    {item.label}
                  </h3>

                  <p className="text-xs text-[#8E8E8E] leading-relaxed">
                    {item.impact}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1C1C1C] flex items-center justify-between text-[11px] font-mono-code text-[#666666]">
                  <span>IMPACT: TALENT DRAIN</span>
                  <AlertTriangle className="w-3.5 h-3.5 text-[#E31B23]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS: 3-step horizontal flow as bold numbered panels */}
      <section 
        id="how-it-works-section" 
        className="py-16 sm:py-24 bg-[#0A0A0A] border-b border-[#222222] relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 pb-4 border-b border-[#222222] flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-[#E31B23]"></span>
                <span className="text-xs font-mono-code uppercase tracking-widest text-[#E31B23] font-bold">
                  CONSENT-BASED ARCHITECTURE
                </span>
              </div>
              <h2 className="font-condensed text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                HOW USDX WORKS
              </h2>
            </div>
            <p className="text-sm text-[#888888] max-w-md font-mono-code">
              Inspired by RBI&apos;s Account Aggregator model: Data flows only when verified 
              by guardian consent, strictly for declared purposes.
            </p>
          </div>

          {/* 3-Step Horizontal Flow: Bold Numbered Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
            {workflowSteps.map((step, idx) => (
              <div
                key={step.step}
                id={`workflow-step-${step.step}`}
                className="bg-[#121212] border border-[#242424] hover:border-[#E31B23] p-7 transition-all relative group flex flex-col justify-between"
              >
                {/* Big Step Number on Background */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-condensed text-6xl font-black text-[#262626] group-hover:text-[#E31B23] transition-colors leading-none">
                    {step.step}
                  </span>
                  <span className="px-2 py-0.5 bg-[#1C1C1C] border border-[#2E2E2E] text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#CCCCCC]">
                    {step.badge}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-condensed text-2xl font-black uppercase tracking-wide text-white leading-tight">
                    {step.title}
                  </h3>
                  <div className="text-xs font-mono-code text-[#E31B23] uppercase">
                    {step.subtitle}
                  </div>
                  <p className="text-sm text-[#8E8E8E] leading-relaxed pt-1">
                    {step.details}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1C1C1C] flex items-center justify-between text-xs font-mono-code text-[#777777]">
                  <span>STEP {idx + 1} OF 3</span>
                  <span className="text-white group-hover:text-[#E31B23] transition-colors">
                    {idx < 2 ? 'FLOW CONTINUES →' : 'SEALED PROTOCOL ✓'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Architecture Analogy Banner */}
          <div className="mt-8 p-4 bg-[#111111] border border-[#262626] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#181818] border border-[#E31B23] flex items-center justify-center shrink-0">
                <Layers className="w-4 h-4 text-[#E31B23]" />
              </div>
              <p className="text-xs text-[#999999]">
                <strong className="text-white font-mono-code">ACCOUNT AGGREGATOR ANALOGY:</strong> Schools & Academies act as Financial Information Providers (FIPs). Scouting NGOs & State Boards act as Financial Information Users (FIUs). USDX acts as the zero-knowledge Consent Manager.
              </p>
            </div>
            <button
              onClick={() => onNavigate('guardian-consent')}
              className="shrink-0 px-4 py-2 bg-[#1A1A1A] hover:bg-[#E31B23] text-white font-condensed font-bold uppercase tracking-wider text-xs border border-[#333333] transition-colors cursor-pointer"
            >
              Test Consent Simulation
            </button>
          </div>
        </div>
      </section>

      {/* 4. CORE COMPONENTS GRID: 5 cards (Standardized Schema, Consent & Identity, RBAC, API Gateway, Audit Logging) */}
      <section 
        id="components-section" 
        className="py-16 sm:py-24 bg-[#0D0D0D] border-b border-[#222222] relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 pb-4 border-b border-[#222222] flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-[#E31B23]"></span>
                <span className="text-xs font-mono-code uppercase tracking-widest text-[#E31B23] font-bold">
                  TECHNICAL INFRASTRUCTURE
                </span>
              </div>
              <h2 className="font-condensed text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                5 CORE PLATFORM COMPONENTS
              </h2>
            </div>
            <p className="text-sm text-[#888888] max-w-md font-mono-code">
              Hardened, modular data plumbing engineered for extreme scale across India&apos;s 
              28 states and Union Territories.
            </p>
          </div>

          {/* 5 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreComponents.map((comp, index) => {
              const icons = [Database, Shield, Lock, Cpu, FileCheck2];
              const IconComp = icons[index];

              return (
                <div
                  key={comp.id}
                  id={`component-card-${comp.id}`}
                  className={`bg-[#121212] border border-[#242424] hover:border-[#E31B23] p-6 transition-all relative group flex flex-col justify-between ${
                    index === 4 ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 bg-[#0A0A0A] border border-[#242424] group-hover:border-[#E31B23] flex items-center justify-center transition-colors">
                        <IconComp className="w-5 h-5 text-[#E31B23]" />
                      </div>
                      <span className="font-mono-code text-[11px] text-[#777777] bg-[#171717] px-2 py-0.5 border border-[#282828]">
                        {comp.specCode}
                      </span>
                    </div>

                    <h3 className="font-condensed text-2xl font-black uppercase tracking-wide text-white leading-tight">
                      {comp.title}
                    </h3>

                    <p className="text-sm text-[#8E8E8E] leading-relaxed">
                      {comp.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#1C1C1C] flex items-center justify-between text-xs font-mono-code text-[#777777]">
                    <span className="text-[#E31B23]">{comp.tag}</span>
                    <span className="text-white group-hover:text-[#E31B23] transition-colors">SPECIFICATION READY</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. COMPLIANCE STRIP: DPDP Act 2023 children's-data provisions as a dark trust/legitimacy band */}
      <section 
        id="compliance-section" 
        className="py-14 bg-[#0A0A0A] border-b border-[#222222] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#121212] border-2 border-[#E31B23]/40 p-8 lg:p-10 relative">
            {/* Background watermark */}
            <div className="absolute right-4 bottom-2 text-[#181818] font-condensed text-9xl font-black select-none pointer-events-none uppercase">
              DPDP 2023
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#181818] border border-[#E31B23] flex items-center justify-center shrink-0">
                  <Shield className="w-8 h-8 text-[#E31B23]" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#E31B23] text-white text-[10px] font-condensed font-black tracking-widest uppercase">
                      STATUTORY COMPLIANCE
                    </span>
                    <span className="text-xs font-mono-code text-[#A0A0A0]">SECTION 9 OBLIGATIONS</span>
                  </div>
                  <h3 className="font-condensed text-3xl font-black uppercase tracking-wide text-white">
                    DIGITAL PERSONAL DATA PROTECTION (DPDP) ACT 2023
                  </h3>
                  <p className="text-sm text-[#A0A0A0] max-w-3xl leading-relaxed">
                    Under Indian law, children&apos;s personal sports metrics are classified as sensitive personal data. 
                    USDX enforces verifiable parental consent prior to processing, strictly forbids behavioral profiling or tracking of minors, guarantees immutable revocation rights, and operates on zero centralized raw data storage.
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                <button
                  id="compliance-view-audit-btn"
                  onClick={() => onNavigate('audit-log')}
                  className="px-5 py-3 bg-[#E31B23] hover:bg-[#C9131A] text-white font-condensed font-black uppercase tracking-wider text-sm transition-colors text-center cursor-pointer shadow-lg shadow-[#E31B23]/20"
                >
                  Verify Audit Ledger
                </button>
                <button
                  id="compliance-view-consent-btn"
                  onClick={() => onNavigate('guardian-consent')}
                  className="px-5 py-3 bg-[#1A1A1A] hover:bg-[#252525] text-white font-condensed font-bold uppercase tracking-wider text-sm border border-[#333333] transition-colors text-center cursor-pointer"
                >
                  Guardian Portal
                </button>
              </div>
            </div>

            {/* Statutory Badges */}
            <div className="mt-8 pt-6 border-t border-[#202020] grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono-code text-[#C0C0C0]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E31B23]" />
                <span>Verifiable Parental Consent (VPC)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E31B23]" />
                <span>Zero Targeted Profiling of Minors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E31B23]" />
                <span>Purpose-Bound Time Expiry</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E31B23]" />
                <span>Right to Erasure & Revocation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE DEMO SCREENS SHOWCASE: Quick launcher into the 5 screens */}
      <section 
        id="demo-screens-section" 
        className="py-16 sm:py-24 bg-[#0D0D0D] border-b border-[#222222] relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 pb-4 border-b border-[#222222] flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-[#E31B23]"></span>
                <span className="text-xs font-mono-code uppercase tracking-widest text-[#E31B23] font-bold">
                  MULTI-STAKEHOLDER TESTBED
                </span>
              </div>
              <h2 className="font-condensed text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                5 INTERACTIVE DEMO SCREENS
              </h2>
            </div>
            <p className="text-sm text-[#888888] max-w-md font-mono-code">
              Explore the end-to-end data exchange loop across every institutional role.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {demoScreensOverview.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  id={`demo-launcher-${item.id}`}
                  className="bg-[#121212] border border-[#242424] hover:border-[#E31B23] p-6 transition-all relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-[#0A0A0A] border border-[#2B2B2B] group-hover:border-[#E31B23] flex items-center justify-center transition-colors">
                        <Icon className="w-5 h-5 text-[#E31B23]" />
                      </div>
                      <span className="px-2 py-0.5 bg-[#181818] border border-[#282828] text-[10px] font-mono-code text-[#E31B23] font-bold uppercase">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-condensed text-2xl font-black uppercase tracking-wide text-white group-hover:text-[#E31B23] transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono-code text-[#888888] block mt-1">
                      ROLE: {item.role}
                    </span>
                    <p className="text-sm text-[#8E8E8E] leading-relaxed mt-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#1C1C1C]">
                    <button
                      onClick={() => onNavigate(item.id)}
                      className="w-full py-2.5 bg-[#171717] hover:bg-[#E31B23] text-white font-condensed font-bold uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#2A2A2A] hover:border-[#E31B23]"
                    >
                      <span>Launch Screen</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
