/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
  Key,
  School,
  Compass,
  Award
} from 'lucide-react';
import { RoutePage, WorkflowStep, CoreComponent } from '../types';

interface LandingPageProps {
  onNavigate: (page: RoutePage) => void;
}

interface StakeholderProblem {
  id: string;
  sector: string;
  badge: string;
  callout: string;
  title: string;
  description: string;
  takeaway: string;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const stakeholderProblems: StakeholderProblem[] = [
    {
      id: 'schools',
      sector: 'Schools & Physical Education',
      badge: 'Paper Records',
      callout: 'Physical registers',
      title: 'Fitness cards are lost upon student graduation or transfer',
      description: 'Annual physical fitness assessments, CBSE fitness cards, and inter-school sprint times remain trapped in physical paper ledgers. When a student changes schools or completes Class 10, their athletic history is effectively reset to zero.',
      takeaway: 'Key gap: No portable digital record follows the student between institutions.'
    },
    {
      id: 'ngos',
      sector: 'Grassroots Academies & Scouts',
      badge: 'Single-Day Observation',
      callout: 'No baseline history',
      title: 'Scouts evaluate athletes on single-day trials without longitudinal context',
      description: 'Scouts traveling to district meets must assess talent based entirely on what happens in a 90-minute trial session. They have no access to developmental progression, past growth curves, or baseline sprint benchmarks across previous years.',
      takeaway: 'Key risk: High potential athletes can be missed due to temporary fatigue or bad weather.'
    },
    {
      id: 'authorities',
      sector: 'State & National Sports Bodies',
      badge: 'Duplicate Trials',
      callout: 'Redundant testing',
      title: 'Athletes are repeatedly re-tested across disconnected federations',
      description: 'District sports councils, state associations, and national talent programs run independent screening camps. Because data is not shared securely across federations, the same young athletes undergo identical physical tests multiple times each season.',
      takeaway: 'Administrative load: High testing overhead and athlete fatigue across trial circuits.'
    },
    {
      id: 'wearables',
      sector: 'Sports Sensors & Timing Hardware',
      badge: 'Format Incompatibility',
      callout: 'Isolated exports',
      title: 'Electronic timing gates and jump mats output incompatible data',
      description: 'Modern academies increasingly use laser timing gates, jump mats, and GPS monitors, but each device exports to its own proprietary CSV or local software. Without a common national data standard, the records cannot be compared across centers.',
      takeaway: 'Technical hurdle: Valuable precision measurements remain trapped in local spreadsheets.'
    }
  ];

  const workflowSteps: WorkflowStep[] = [
    {
      step: '01',
      badge: 'Institutional Onboarding',
      title: 'Register as Provider or Consumer',
      subtitle: 'Institutional vetting & identity verification',
      details: 'Schools, academies, sports foundations, and scouting clubs register as either Data Providers (such as schools uploading fitness cards) or Data Consumers (such as scouts and state academies) with verified institutional credentials.'
    },
    {
      step: '02',
      badge: 'Parental Consent',
      title: 'Consent Captured & Scoped',
      subtitle: 'DPDP Act Section 9 verified authorization',
      details: 'Before an NGO scout or state academy can inspect an athlete’s metrics, an electronic consent request is sent to the parent or legal guardian specifying the exact fields requested, the evaluation purpose, and the validity duration.'
    },
    {
      step: '03',
      badge: 'Encrypted Exchange',
      title: 'Data Flows with Audit Logging',
      subtitle: 'Direct encrypted transfer with non-repudiable receipts',
      details: 'Data is transmitted securely between the school and authorized consumer. USDX never retains raw health or fitness records on central servers. Every query is logged in an access ledger for parental and regulatory review.'
    }
  ];

  const coreComponents: CoreComponent[] = [
    {
      id: 'schema',
      tag: 'Data Standard',
      title: 'Standardized Athlete Schema',
      description: 'A unified Indian youth sports data definition covering anthropometrics (height, wing span), physical fitness benchmarks (beep test, 30m sprint, vertical jump), and verified school records.',
      specCode: 'Youth Sports Schema v1.4'
    },
    {
      id: 'consent',
      tag: 'Consent Layer',
      title: 'Parental Consent Manager',
      description: 'Modeled after India’s Account Aggregator architecture, providing structured electronic consent artifacts signed by parents or guardians with granular field-level permissions.',
      specCode: 'Consent Manager Specification'
    },
    {
      id: 'rbac',
      tag: 'Access Control',
      title: 'Role-Based Access Control',
      description: 'Attribute-based authorization ensuring scouts, coaches, and sports authorities can only view the data tiers they are explicitly authorized to access.',
      specCode: 'Access Control Matrix'
    },
    {
      id: 'gateway',
      tag: 'Data Gateway',
      title: 'Federated API Gateway',
      description: 'A lightweight routing gateway coordinating point-to-point data retrieval between school portals, academy systems, and scouting applications without centralized data hoarding.',
      specCode: 'Federated Gateway Interface'
    },
    {
      id: 'audit',
      tag: 'Compliance',
      title: 'Access Audit Ledger',
      description: 'An immutable, timestamped record of every consent grant, data access query, and consent revocation to provide full transparency under the DPDP Act 2023.',
      specCode: 'Audit Ledger Specification'
    }
  ];

  const demoScreensOverview = [
    {
      id: 'school-upload' as RoutePage,
      title: 'School Data Upload',
      role: 'Data Provider (School)',
      description: 'Bulk CSV athlete vitals upload, UDISE+ validation, and fitness test baseline certification.',
      icon: FileSpreadsheet,
      badge: 'Provider View'
    },
    {
      id: 'ngo-scouting' as RoutePage,
      title: 'NGO Scouting View',
      role: 'Data Consumer (Scout / NGO)',
      description: 'Consent-gated search by sprint speed, vertical jump, age bracket, and district talent index.',
      icon: ScanEye,
      badge: 'Consumer View'
    },
    {
      id: 'authority-dashboard' as RoutePage,
      title: 'Coach & Sports Authority',
      role: 'State Authority / National Federation',
      description: 'State talent pipeline analytics, district developmental benchmarks, and squad cohort tracking.',
      icon: TrendingUp,
      badge: 'Analytics View'
    },
    {
      id: 'guardian-consent' as RoutePage,
      title: 'Guardian Consent Portal',
      role: 'Parent / Legal Guardian',
      description: 'DPDP-compliant consent authorization dashboard, purpose scoping, and instant access control.',
      icon: Key,
      badge: 'Consent View'
    },
    {
      id: 'audit-log' as RoutePage,
      title: 'Data Access Audit Log',
      role: 'Auditor & Compliance Officer',
      description: 'Chronological access record tracking who viewed what athlete data, field details, and detected anomalies.',
      icon: FileText,
      badge: 'Compliance View'
    }
  ];

  return (
    <div id="landing-page" className="min-h-screen bg-[#0A0A0A] text-white">
      {/* 1. HERO SECTION */}
      <section 
        id="hero-section"
        className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden border-b border-[#222222]"
      >
        <div className="absolute inset-0 bg-sports-grid pointer-events-none opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-[#E31B23]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -left-20 top-40 w-96 h-96 bg-[#E31B23]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Grounded Notice Bar */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#141414] border border-[#2B2B2B] text-xs text-[#CCCCCC] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
            <span className="text-white font-medium">Digital Personal Data Protection Act 2023</span>
            <span className="text-[#555555]">|</span>
            <span className="text-[#999999]">Federated Youth Sports Data Architecture</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
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

              <p 
                id="hero-subheading"
                className="text-base sm:text-lg text-[#A6A6A6] leading-relaxed max-w-2xl font-normal"
              >
                USDX is a consent-driven sports data exchange connecting schools, grassroots NGOs, 
                sports authorities, and coaches. Modeled after India&apos;s 
                <strong className="text-white font-semibold"> Account Aggregator framework</strong>, 
                it establishes a unified digital record for young athletes while giving parents full control over their children&apos;s data.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  id="hero-cta-see-demo"
                  onClick={() => onNavigate('school-upload')}
                  className="px-8 py-4 bg-[#E31B23] hover:bg-[#C9131A] text-white font-condensed font-black uppercase tracking-wider text-xl transition-all active:scale-95 cursor-pointer shadow-xl shadow-[#E31B23]/25 flex items-center gap-3 border border-[#FF3B44]/40"
                >
                  <span>Explore Interactive Demo</span>
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

              {/* Core Governance Principles */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#1F1F1F] text-xs text-[#999999]">
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-[#E31B23] shrink-0" />
                  <span><strong>Parental Consent:</strong> DPDP Section 9 verified authorization</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Lock className="w-4 h-4 text-[#E31B23] shrink-0" />
                  <span><strong>Federated Architecture:</strong> Zero centralized health data storage</span>
                </div>
              </div>
            </div>

            {/* Right Hero Graphic Card: Exchange Architecture Overview */}
            <div className="lg:col-span-5">
              <div className="bg-[#121212] border-2 border-[#262626] p-6 relative shadow-2xl space-y-5">
                
                <div className="flex items-center justify-between pb-3 border-b border-[#222222]">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#888888] font-bold block">Architecture Model</span>
                    <span className="font-condensed text-xl font-bold uppercase text-white">
                      Unified Sports Data Exchange
                    </span>
                  </div>
                  <span className="px-2.5 py-1 bg-[#1A1A1A] border border-[#333333] text-xs text-[#CCCCCC]">
                    DPDP Compliant
                  </span>
                </div>

                {/* 4 Connected Participant Roles */}
                <div className="space-y-2.5">
                  
                  <div className="bg-[#0D0D0D] p-3 border border-[#1E1E1E] flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-[#161616] border border-[#2D2D2D] flex items-center justify-center shrink-0 mt-0.5">
                      <School className="w-4 h-4 text-[#E31B23]" />
                    </div>
                    <div>
                      <span className="font-condensed text-sm font-bold uppercase text-white block">
                        1. Schools &amp; Academies (Data Providers)
                      </span>
                      <p className="text-xs text-[#888888] leading-normal">
                        Upload annual physical fitness metrics linked to verified UDISE school codes.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#1A1314] p-3 border border-[#E31B23]/40 flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-[#2A1517] border border-[#E31B23] flex items-center justify-center shrink-0 mt-0.5">
                      <Key className="w-4 h-4 text-[#E31B23]" />
                    </div>
                    <div>
                      <span className="font-condensed text-sm font-bold uppercase text-[#F87171] block">
                        2. Parental Consent Gate
                      </span>
                      <p className="text-xs text-[#C2A3A6] leading-normal">
                        Parents approve or revoke visibility before any scout or coach can view child records.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#0D0D0D] p-3 border border-[#1E1E1E] flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-[#161616] border border-[#2D2D2D] flex items-center justify-center shrink-0 mt-0.5">
                      <Compass className="w-4 h-4 text-[#E31B23]" />
                    </div>
                    <div>
                      <span className="font-condensed text-sm font-bold uppercase text-white block">
                        3. Scouts &amp; Grassroots NGOs (Consumers)
                      </span>
                      <p className="text-xs text-[#888888] leading-normal">
                        Discover talent using consented benchmarks (speed, endurance, jump) without seeing private contact details.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#0D0D0D] p-3 border border-[#1E1E1E] flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-[#161616] border border-[#2D2D2D] flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="w-4 h-4 text-[#E31B23]" />
                    </div>
                    <div>
                      <span className="font-condensed text-sm font-bold uppercase text-white block">
                        4. Sports Authorities &amp; Coaches
                      </span>
                      <p className="text-xs text-[#888888] leading-normal">
                        Analyze district talent distribution and shortlist promising athletes for Khelo India national camps.
                      </p>
                    </div>
                  </div>

                </div>

                <div className="pt-3 border-t border-[#222222] flex items-center justify-between text-xs">
                  <span className="text-[#777777]">Explore the live testbed</span>
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

      {/* 2. PROBLEM SECTION: Distinct, varied cards without repeated tags or taxonomy numbering */}
      <section 
        id="problem-section" 
        className="py-16 sm:py-24 bg-[#0D0D0D] border-b border-[#222222] relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#222222] gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-[#E31B23]"></span>
                <span className="text-xs uppercase tracking-widest text-[#E31B23] font-bold">
                  Ecosystem Challenges
                </span>
              </div>
              <h2 className="font-condensed text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                The Fragmentation Problem
              </h2>
            </div>
            <p className="text-sm text-[#888888] max-w-md">
              Indian schools, academies, and scouts generate performance data daily. 
              Because systems operate in isolation, young athletes lose their track record at every transition.
            </p>
          </div>

          {/* 4 Varied Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {stakeholderProblems.map((item, idx) => (
              <div
                key={item.id}
                id={`problem-card-${item.id}`}
                className="bg-[#121212] border border-[#242424] hover:border-[#E31B23] transition-all p-6 relative group flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#222222] group-hover:bg-[#E31B23] transition-colors" />

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#777777]">
                    <span className="text-white font-medium">{item.sector}</span>
                    <span className="text-[11px] px-2 py-0.5 bg-[#181818] border border-[#282828] text-[#AAAAAA]">
                      {item.badge}
                    </span>
                  </div>

                  <div className="pt-1">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#E31B23] block">
                      {item.callout}
                    </span>
                    <h3 className="font-condensed text-xl font-bold uppercase tracking-wide text-white mt-1 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#8E8E8E] leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1C1C1C] text-xs text-[#CCCCCC] flex items-start gap-2">
                  <span className="text-[#E31B23] font-bold shrink-0">→</span>
                  <span className="text-[11px] text-[#A0A0A0] leading-tight">{item.takeaway}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. HOW IT WORKS: 3-step horizontal flow */}
      <section 
        id="how-it-works-section" 
        className="py-16 sm:py-24 bg-[#0A0A0A] border-b border-[#222222] relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 pb-4 border-b border-[#222222] flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-[#E31B23]"></span>
                <span className="text-xs uppercase tracking-widest text-[#E31B23] font-bold">
                  Consent Architecture
                </span>
              </div>
              <h2 className="font-condensed text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                How USDX Works
              </h2>
            </div>
            <p className="text-sm text-[#888888] max-w-md">
              Inspired by the Account Aggregator model: Data flows only when verified 
              by parental consent, strictly for declared scouting and selection purposes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
            {workflowSteps.map((step, idx) => (
              <div
                key={step.step}
                id={`workflow-step-${step.step}`}
                className="bg-[#121212] border border-[#242424] hover:border-[#E31B23] p-7 transition-all relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-condensed text-6xl font-black text-[#262626] group-hover:text-[#E31B23] transition-colors leading-none">
                      {step.step}
                    </span>
                    <span className="px-2.5 py-1 bg-[#1C1C1C] border border-[#2E2E2E] text-xs font-medium text-[#CCCCCC]">
                      {step.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-condensed text-2xl font-black uppercase tracking-wide text-white leading-tight">
                      {step.title}
                    </h3>
                    <div className="text-xs text-[#E31B23] font-medium">
                      {step.subtitle}
                    </div>
                    <p className="text-sm text-[#8E8E8E] leading-relaxed pt-2">
                      {step.details}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1C1C1C] flex items-center justify-between text-xs text-[#777777]">
                  <span>Phase {idx + 1} of 3</span>
                  <span className="text-white group-hover:text-[#E31B23] transition-colors">
                    {idx < 2 ? 'Next step →' : 'Verified workflow'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Architecture Analogy Banner */}
          <div className="mt-8 p-5 bg-[#111111] border border-[#262626] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 bg-[#181818] border border-[#E31B23] flex items-center justify-center shrink-0">
                <Layers className="w-4 h-4 text-[#E31B23]" />
              </div>
              <p className="text-xs text-[#999999] leading-relaxed">
                <strong className="text-white">Account Aggregator Analogy:</strong> Schools act as Data Providers. Scouting NGOs and State Federations act as Data Consumers. USDX serves as the consent and access-control gateway.
              </p>
            </div>
            <button
              onClick={() => onNavigate('guardian-consent')}
              className="shrink-0 px-4 py-2 bg-[#1A1A1A] hover:bg-[#E31B23] text-white font-condensed font-bold uppercase tracking-wider text-xs border border-[#333333] transition-colors cursor-pointer"
            >
              Open Guardian Portal
            </button>
          </div>
        </div>
      </section>

      {/* 4. CORE PLATFORM COMPONENTS */}
      <section 
        id="components-section" 
        className="py-16 sm:py-24 bg-[#0D0D0D] border-b border-[#222222] relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 pb-4 border-b border-[#222222] flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-[#E31B23]"></span>
                <span className="text-xs uppercase tracking-widest text-[#E31B23] font-bold">
                  Core Components
                </span>
              </div>
              <h2 className="font-condensed text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                5 Platform Components
              </h2>
            </div>
            <p className="text-sm text-[#888888] max-w-md">
              A modular architecture designed for interoperability between school software, 
              scouting platforms, and national selection trials.
            </p>
          </div>

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
                      <span className="text-xs text-[#888888] bg-[#171717] px-2.5 py-1 border border-[#282828]">
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

                  <div className="mt-6 pt-4 border-t border-[#1C1C1C] flex items-center justify-between text-xs text-[#777777]">
                    <span className="text-[#E31B23] font-medium">{comp.tag}</span>
                    <span className="text-white group-hover:text-[#E31B23] transition-colors">Specification Layer</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. STATUTORY COMPLIANCE: DPDP ACT 2023 */}
      <section 
        id="compliance-section" 
        className="py-14 bg-[#0A0A0A] border-b border-[#222222] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#121212] border-2 border-[#E31B23]/40 p-8 lg:p-10 relative">
            
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#181818] border border-[#E31B23] flex items-center justify-center shrink-0">
                  <Shield className="w-8 h-8 text-[#E31B23]" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#E31B23] text-white text-[10px] font-condensed font-black tracking-widest uppercase">
                      Statutory Compliance
                    </span>
                    <span className="text-xs text-[#A0A0A0]">Section 9 Provisions</span>
                  </div>
                  <h3 className="font-condensed text-3xl font-black uppercase tracking-wide text-white">
                    Digital Personal Data Protection (DPDP) Act 2023
                  </h3>
                  <p className="text-sm text-[#A0A0A0] max-w-3xl leading-relaxed">
                    Under Indian law, children&apos;s physical and athletic records are classified as sensitive personal data. 
                    USDX enforces verifiable parental consent prior to processing, strictly forbids behavioral profiling or commercial tracking of minors, guarantees revocation rights, and operates on a federated model without centralized raw data retention.
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                <button
                  id="compliance-view-audit-btn"
                  onClick={() => onNavigate('audit-log')}
                  className="px-5 py-3 bg-[#E31B23] hover:bg-[#C9131A] text-white font-condensed font-black uppercase tracking-wider text-sm transition-colors text-center cursor-pointer shadow-lg shadow-[#E31B23]/20"
                >
                  View Audit Ledger
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

            {/* Core Statutory Principles */}
            <div className="mt-8 pt-6 border-t border-[#202020] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-[#C0C0C0]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E31B23] shrink-0" />
                <span>Verifiable Parental Consent (VPC)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E31B23] shrink-0" />
                <span>No Commercial Profiling of Minors</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E31B23] shrink-0" />
                <span>Purpose-Bound Time Expiry</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E31B23] shrink-0" />
                <span>Right to Erasure &amp; Revocation</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE DEMO SCREENS SHOWCASE */}
      <section 
        id="demo-screens-section" 
        className="py-16 sm:py-24 bg-[#0D0D0D] border-b border-[#222222] relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 pb-4 border-b border-[#222222] flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-[#E31B23]"></span>
                <span className="text-xs uppercase tracking-widest text-[#E31B23] font-bold">
                  Platform Demonstration
                </span>
              </div>
              <h2 className="font-condensed text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                5 Interactive Screens
              </h2>
            </div>
            <p className="text-sm text-[#888888] max-w-md">
              Explore the end-to-end data exchange workflow across each institutional stakeholder role.
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
                      <span className="px-2.5 py-0.5 bg-[#181818] border border-[#282828] text-xs text-[#E31B23] font-medium">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-condensed text-2xl font-black uppercase tracking-wide text-white group-hover:text-[#E31B23] transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs text-[#888888] block mt-1">
                      Role: {item.role}
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
