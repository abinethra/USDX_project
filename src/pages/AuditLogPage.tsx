/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  Clock, 
  Building2, 
  Search, 
  Filter, 
  Download, 
  RefreshCw, 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  FileText, 
  Layers, 
  Lock, 
  Database, 
  User, 
  Eye, 
  Hash, 
  ExternalLink,
  Sliders,
  Sparkles,
  X,
  ChevronRight
} from 'lucide-react';
import { RoutePage } from '../types';

interface ScreenProps {
  onNavigate: (page: RoutePage) => void;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  relativeTime: string;
  accessingOrg: string;
  orgType: string;
  actor: string;
  actorRole: string;
  athleteAccessed: string;
  athleteCount: number;
  athleteCategory?: string;
  fieldsAccessed: string[];
  purpose: string;
  consentRef: string;
  merkleHash: string;
  isAnomaly: boolean;
  anomalyType?: string;
  anomalyDetails?: string;
  actionTaken?: 'BLOCKED_AT_GATEWAY' | 'RATE_LIMITED' | 'TOKEN_REVOKED' | 'LOGGED_AND_PERMITTED';
  ipAddress: string;
}

const INITIAL_LOGS: AuditLogEntry[] = [
  {
    id: 'LOG-2026-90412',
    timestamp: '2026-09-10 10:22:18 IST',
    relativeTime: '5m ago',
    accessingOrg: 'Northern Athletics Talent Hub',
    orgType: 'Affiliated Coach Account',
    actor: 'Coach Vikramjit Sekhon',
    actorRole: 'District Coach (Accredited)',
    athleteAccessed: '240 Athlete Dossiers (Bulk Query)',
    athleteCount: 240,
    fieldsAccessed: ['100m Velocity', 'Vertical Jump', 'DOB', 'Guardian Mobile', 'School UDISE'],
    purpose: 'Unscheduled Automated Mass Data Export',
    consentRef: 'MULTIPLE_DOCKETS_BULK',
    merkleHash: '0x7e4b9918a24c90ef18d2',
    isAnomaly: true,
    anomalyType: 'Mass Bulk Data Pull (240+ Profiles in 90s)',
    anomalyDetails: 'Abnormal query velocity: 240 complete athlete records downloaded in 86 seconds. Exceeds standard SAI talent scouting threshold (max 25/hr). Account automatically throttled and alerted to State DPO.',
    actionTaken: 'RATE_LIMITED',
    ipAddress: '103.21.244.18 (Jalandhar Static Fiber)'
  },
  {
    id: 'LOG-2026-90411',
    timestamp: '2026-09-10 10:14:02 IST',
    relativeTime: '13m ago',
    accessingOrg: 'Sports Authority of India (SAI)',
    orgType: 'National Sports Governance Body',
    actor: 'Director P.K. Nambiar',
    actorRole: 'Senior National Selector',
    athleteAccessed: 'Manpreet Singh Gill (#04)',
    athleteCount: 1,
    athleteCategory: 'U-16 Athletics',
    fieldsAccessed: ['100m Velocity (11.18s)', '30m Fly (3.98s)', 'State Percentile (98th)'],
    purpose: 'National Centre of Excellence (NCOE) Shortlist Verification',
    consentRef: 'TOK-DPDP-89104-VPC',
    merkleHash: '0x9a4f2109bc441289de01',
    isAnomaly: false,
    actionTaken: 'LOGGED_AND_PERMITTED',
    ipAddress: '164.100.48.22 (SAI HQ New Delhi)'
  },
  {
    id: 'LOG-2026-90410',
    timestamp: '2026-09-10 09:58:33 IST',
    relativeTime: '29m ago',
    accessingOrg: 'Apex Sports Diagnostics Pvt Ltd',
    orgType: 'Commercial Equipment Vendor',
    actor: 'Service API Token #9042',
    actorRole: 'External API Client',
    athleteAccessed: 'Arjun Verma (#04)',
    athleteCount: 1,
    fieldsAccessed: ['Guardian Mobile Phone', 'Home Residential Address'],
    purpose: 'Commercial Marketing Lead Generation',
    consentRef: 'NO_VALID_CONSENT_FOUND',
    merkleHash: '0x3c118804fae10988bc72',
    isAnomaly: true,
    anomalyType: 'Unauthorized PII Query Without Parent Consent',
    anomalyDetails: 'Commercial entity attempted to query direct parent contact details without valid school or parental authorization under DPDP Section 9. Query blocked at API Gateway layer with zero data leakage.',
    actionTaken: 'BLOCKED_AT_GATEWAY',
    ipAddress: '49.36.192.104 (Noida Commercial Subnet)'
  },
  {
    id: 'LOG-2026-90409',
    timestamp: '2026-09-10 09:41:10 IST',
    relativeTime: '46m ago',
    accessingOrg: 'Olympic Gold Quest (OGQ)',
    orgType: 'Accredited Non-Profit Sports NGO',
    actor: 'Scout Aarti Venkatesh',
    actorRole: 'Grassroots Talent Evaluator',
    athleteAccessed: 'Ananya Deshmukh (#12)',
    athleteCount: 1,
    athleteCategory: 'U-14 Athletics',
    fieldsAccessed: ['30m Flying Sprint (3.98s)', 'Age Classification', 'District Academy Ref'],
    purpose: 'Junior Track & Field Scholarship Assessment',
    consentRef: 'TOK-DPDP-77312-VPC',
    merkleHash: '0x88f42019da283311ec55',
    isAnomaly: false,
    actionTaken: 'LOGGED_AND_PERMITTED',
    ipAddress: '115.112.80.9 (Mumbai High Performance Hub)'
  },
  {
    id: 'LOG-2026-90408',
    timestamp: '2026-09-10 09:12:45 IST',
    relativeTime: '1h 15m ago',
    accessingOrg: 'Tata Football Grassroots Academy',
    orgType: 'Private Sports Academy Node',
    actor: 'Coach Sanjeev Dutta',
    actorRole: 'Academy Head Scout',
    athleteAccessed: 'Farhan Akhtar Mir (#09)',
    athleteCount: 1,
    athleteCategory: 'U-18 Football',
    fieldsAccessed: ['Beep Test Level (14.2)', 'Aerobic Index', 'Medical Trial Clearance'],
    purpose: 'State Youth League Selection Roster',
    consentRef: 'TOK-DPDP-99201-VPC',
    merkleHash: '0x55d01248ee9102488bc1',
    isAnomaly: false,
    actionTaken: 'LOGGED_AND_PERMITTED',
    ipAddress: '14.143.72.60 (Jamshedpur Campus)'
  },
  {
    id: 'LOG-2026-90407',
    timestamp: '2026-09-10 08:35:19 IST',
    relativeTime: '1h 52m ago',
    accessingOrg: 'Unverified Regional Scout Node',
    orgType: 'Third-Party Node (Pending Accreditation)',
    actor: 'User: temp_guest_918',
    actorRole: 'Unaccredited Visitor',
    athleteAccessed: 'Pooja Rani (#18)',
    athleteCount: 1,
    fieldsAccessed: ['Reaction Wall Speed (280ms)', 'National Percentile'],
    purpose: 'Scouting Directory Browse',
    consentRef: 'REVOKED_TOKEN_0x44B',
    merkleHash: '0x22a91044bb7190021fa4',
    isAnomaly: true,
    anomalyType: 'Access Attempt Using Expired Cryptographic Token',
    anomalyDetails: 'Request presented a digital consent token that was revoked 48 hours prior by the guardian. The cryptographic signature failed verification. Zero data released.',
    actionTaken: 'TOKEN_REVOKED',
    ipAddress: '157.34.120.44 (Rohtak Cyber Cafe)'
  },
  {
    id: 'LOG-2026-90406',
    timestamp: '2026-09-10 08:10:04 IST',
    relativeTime: '2h 17m ago',
    accessingOrg: 'Balewadi High Performance Centre',
    orgType: 'State Government Sports Facility',
    actor: 'Dr. Suresh Phadke',
    actorRole: 'Biomechanics Research Director',
    athleteAccessed: 'Tanvi Patil (#22)',
    athleteCount: 1,
    athleteCategory: 'U-16 Swimming',
    fieldsAccessed: ['50m Freestyle (26.94s)', 'Stroke Rate', 'Lactate Threshold'],
    purpose: 'National Junior Aquatics Camp Preparation',
    consentRef: 'TOK-DPDP-11209-VPC',
    merkleHash: '0x11a09841bb2290487cca',
    isAnomaly: false,
    actionTaken: 'LOGGED_AND_PERMITTED',
    ipAddress: '114.143.190.10 (Pune Balewadi Complex)'
  },
  {
    id: 'LOG-2026-90405',
    timestamp: '2026-09-10 07:44:12 IST',
    relativeTime: '2h 43m ago',
    accessingOrg: "St. Xavier's Senior Secondary School",
    orgType: 'Registered School Data Provider',
    actor: 'PE Director Rajesh Gill',
    actorRole: 'School Ingest Officer',
    athleteAccessed: '42 Student Batch Records',
    athleteCount: 42,
    fieldsAccessed: ['School Fitness Ingest Form', 'UDISE+ Mapping', 'Guardian Consent Forms'],
    purpose: 'Annual CBSE Physical Fitness Test Upload',
    consentRef: 'BATCH_INGEST_VPC_2026',
    merkleHash: '0x44c91024ee81099bc451',
    isAnomaly: false,
    actionTaken: 'LOGGED_AND_PERMITTED',
    ipAddress: '103.48.198.5 (Patiala School Network)'
  }
];

export const AuditLogPage: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [logs, setLogs] = useState<AuditLogEntry[]>(INITIAL_LOGS);
  const [filterMode, setFilterMode] = useState<'ALL' | 'ANOMALIES_ONLY' | 'REGULAR_ONLY'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLog, setSelectedLog] = useState<AuditLogEntry | null>(null);
  const [isVerifyingChain, setIsVerifyingChain] = useState(false);
  const [chainVerifiedNotice, setChainVerifiedNotice] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);

  // Filtered log list
  const filteredLogs = logs.filter(log => {
    if (filterMode === 'ANOMALIES_ONLY' && !log.isAnomaly) return false;
    if (filterMode === 'REGULAR_ONLY' && log.isAnomaly) return false;

    if (!searchQuery.trim()) return true;

    const q = searchQuery.toLowerCase();
    return (
      log.accessingOrg.toLowerCase().includes(q) ||
      log.actor.toLowerCase().includes(q) ||
      log.athleteAccessed.toLowerCase().includes(q) ||
      log.purpose.toLowerCase().includes(q) ||
      log.id.toLowerCase().includes(q) ||
      log.merkleHash.toLowerCase().includes(q)
    );
  });

  // Verify chain simulation
  const handleVerifyChain = () => {
    setIsVerifyingChain(true);
    setTimeout(() => {
      setIsVerifyingChain(false);
      setChainVerifiedNotice(true);
      setTimeout(() => setChainVerifiedNotice(false), 5000);
    }, 1200);
  };

  // Export audit ledger simulation
  const handleExportLedger = () => {
    setExportSuccess(true);
    setTimeout(() => setExportSuccess(false), 4000);
  };

  // Counts for summary bar
  const totalAccessesToday = 1428;
  const flaggedAnomaliesCount = logs.filter(l => l.isAnomaly).length;
  const mostActiveOrg = 'Sports Authority of India (SAI)';

  return (
    <div id="audit-log-page" className="min-h-screen bg-[#0A0A0A] text-white pt-24 pb-20 selection:bg-[#E31B23] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#222222]">
          <div className="flex items-center gap-3">
            <button
              id="back-to-home-btn"
              onClick={() => onNavigate('home')}
              className="px-3 py-1.5 bg-[#141414] hover:bg-[#1E1E1E] text-[#A0A0A0] hover:text-white border border-[#2A2A2A] font-mono-code text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#E31B23]" />
              <span>EXIT TO PORTAL HOME</span>
            </button>
            <span className="text-[#444444]">/</span>
            <span className="font-mono-code text-xs text-[#E31B23] font-bold">IMMUTABLE AUDIT LOG</span>
            <span className="text-[#444444]">/</span>
            <span className="font-mono-code text-xs text-[#888888]">DPDP SECTION 9 SURVEILLANCE &amp; DISCLOSURE TRAIL</span>
          </div>

          <div className="flex items-center gap-3 font-mono-code text-xs text-[#888888]">
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>CHAIN ROOT: 0x9f88...41a</span>
            </span>
            <span className="text-[#333333]">|</span>
            <span className="text-white">WORM COMPLIANT STORAGE</span>
          </div>
        </div>

        {/* 1. SUMMARY BAR AT TOP: STAT-CARD STYLE CONSISTENT WITH DASHBOARD */}
        <div id="audit-summary-stat-cards" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Stat Card 1: Total Accesses Today */}
          <div className="relative bg-[#121212] border-2 border-[#262626] p-5 shadow-lg overflow-hidden group hover:border-[#E31B23] transition-colors">
            <div className="h-1 w-full bg-[#E31B23] absolute top-0 left-0" />
            <div className="flex items-center justify-between text-xs font-mono-code text-[#777777] mb-2 uppercase">
              <span>TOTAL ACCESSES TODAY</span>
              <Clock className="w-4 h-4 text-[#888888] group-hover:text-[#E31B23] transition-colors" />
            </div>
            <div className="font-condensed text-5xl sm:text-6xl font-black text-white tracking-tight leading-none">
              1,428
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono-code">
              <span className="text-emerald-400 flex items-center gap-1">
                ▲ +18% vs 7-day avg
              </span>
              <span className="text-[#777777]">100% Cryptographically Signed</span>
            </div>
          </div>

          {/* Stat Card 2: Flagged Anomalies Count (CRITICAL METRIC) */}
          <div className="relative bg-[#181112] border-2 border-[#E31B23] p-5 shadow-lg overflow-hidden group">
            <div className="h-1 w-full bg-[#E31B23] absolute top-0 left-0 animate-pulse" />
            <div className="flex items-center justify-between text-xs font-mono-code text-[#E31B23] mb-2 uppercase font-bold">
              <span>FLAGGED ANOMALIES</span>
              <ShieldAlert className="w-4 h-4 text-[#E31B23]" />
            </div>
            <div className="font-condensed text-5xl sm:text-6xl font-black text-[#E31B23] tracking-tight leading-none flex items-baseline gap-2">
              <span>{flaggedAnomaliesCount}</span>
              <span className="text-xs font-mono-code text-white bg-[#E31B23] px-2 py-0.5 uppercase tracking-wider font-bold">
                ACTION REQUIRED
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono-code">
              <span className="text-amber-400">1 Bulk Scraping, 2 Policy Breaches</span>
              <span className="text-[#AAAAAA]">Auto-mitigated</span>
            </div>
          </div>

          {/* Stat Card 3: Most Active Organization */}
          <div className="relative bg-[#121212] border-2 border-[#262626] p-5 shadow-lg overflow-hidden group hover:border-[#E31B23] transition-colors">
            <div className="h-1 w-full bg-[#E31B23] absolute top-0 left-0" />
            <div className="flex items-center justify-between text-xs font-mono-code text-[#777777] mb-2 uppercase">
              <span>MOST ACTIVE ORGANIZATION</span>
              <Building2 className="w-4 h-4 text-[#888888] group-hover:text-[#E31B23] transition-colors" />
            </div>
            <div className="font-condensed text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight truncate">
              SAI (Central Hub)
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono-code">
              <span className="text-white font-bold">642 queries today</span>
              <span className="text-[#777777]">45% of total volume</span>
            </div>
          </div>

          {/* Stat Card 4: Cryptographic Integrity */}
          <div className="relative bg-[#121212] border-2 border-[#262626] p-5 shadow-lg overflow-hidden group hover:border-emerald-500 transition-colors">
            <div className="h-1 w-full bg-emerald-500 absolute top-0 left-0" />
            <div className="flex items-center justify-between text-xs font-mono-code text-[#777777] mb-2 uppercase">
              <span>LEDGER MERKLE INTEGRITY</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="font-condensed text-5xl sm:text-6xl font-black text-emerald-400 tracking-tight leading-none">
              100%
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono-code">
              <span className="text-emerald-400">0 Tampering Detected</span>
              <span className="text-[#777777]">SHA-256 Chained</span>
            </div>
          </div>

        </div>

        {/* CRYPTOGRAPHIC VERIFICATION TOAST */}
        {chainVerifiedNotice && (
          <div className="p-4 bg-[#112217] border-2 border-emerald-500 text-emerald-300 rounded-none flex items-center justify-between text-xs font-mono-code">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                <strong>MERKLE AUDIT CHAIN VERIFIED:</strong> All 1,428 block receipts cryptographically validated against Government of India root certificate. Zero mutations detected.
              </span>
            </div>
            <span className="text-emerald-400 font-bold">PROOF REF: #0x99A...104</span>
          </div>
        )}

        {/* EXPORT SUCCESS TOAST */}
        {exportSuccess && (
          <div className="p-4 bg-[#141B2A] border-2 border-[#60A5FA] text-blue-200 text-xs font-mono-code flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4 text-blue-400" />
              <span>Full compliance ledger exported with digital forensic signatures (audit_log_20260910.json).</span>
            </div>
            <span className="text-blue-400 font-bold">DISPATCHED TO DPO VAULT</span>
          </div>
        )}

        {/* 2. CONTROLS BAR: FILTER, SEARCH, CHAIN VERIFICATION */}
        <div className="bg-[#121212] border-2 border-[#262626] p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            <button
              id="filter-all-logs-btn"
              onClick={() => setFilterMode('ALL')}
              className={`px-3.5 py-1.5 font-condensed font-bold uppercase text-xs tracking-wider transition-colors cursor-pointer shrink-0 ${
                filterMode === 'ALL'
                  ? 'bg-[#E31B23] text-white border border-[#E31B23]'
                  : 'bg-[#181818] text-[#888888] hover:text-white border border-[#2B2B2B]'
              }`}
            >
              All Access Logs ({logs.length})
            </button>

            <button
              id="filter-anomalies-btn"
              onClick={() => setFilterMode('ANOMALIES_ONLY')}
              className={`px-3.5 py-1.5 font-condensed font-bold uppercase text-xs tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 ${
                filterMode === 'ANOMALIES_ONLY'
                  ? 'bg-[#E31B23] text-white border border-[#E31B23] shadow-md shadow-[#E31B23]/30'
                  : 'bg-[#221314] text-[#F87171] hover:bg-[#301618] border border-[#E31B23]/50'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Anomalies Only ({flaggedAnomaliesCount})</span>
            </button>

            <button
              id="filter-regular-btn"
              onClick={() => setFilterMode('REGULAR_ONLY')}
              className={`px-3.5 py-1.5 font-condensed font-bold uppercase text-xs tracking-wider transition-colors cursor-pointer shrink-0 ${
                filterMode === 'REGULAR_ONLY'
                  ? 'bg-[#E31B23] text-white border border-[#E31B23]'
                  : 'bg-[#181818] text-[#888888] hover:text-white border border-[#2B2B2B]'
              }`}
            >
              Standard Logs
            </button>
          </div>

          {/* Search Bar & Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative min-w-[240px] flex-1 sm:flex-none">
              <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-[#666666]" />
              <input
                type="text"
                placeholder="Search org, coach, athlete, hash..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0A0A0A] border border-[#2C2C2C] focus:border-[#E31B23] text-white pl-8 pr-3 py-1.5 text-xs font-mono-code focus:outline-none"
              />
            </div>

            <button
              id="verify-merkle-chain-btn"
              onClick={handleVerifyChain}
              disabled={isVerifyingChain}
              className="px-3.5 py-1.5 bg-[#181818] hover:bg-[#222222] text-[#CCCCCC] hover:text-white border border-[#303030] text-xs font-mono-code flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Cryptographically verify SHA-256 Merkle chain"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#E31B23] ${isVerifyingChain ? 'animate-spin' : ''}`} />
              <span>{isVerifyingChain ? 'Verifying...' : 'Verify Merkle Root'}</span>
            </button>

            <button
              id="export-audit-btn"
              onClick={handleExportLedger}
              className="px-3.5 py-1.5 bg-[#181818] hover:bg-[#222222] text-[#CCCCCC] hover:text-white border border-[#303030] text-xs font-mono-code flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#888888]" />
              <span>Export CSV</span>
            </button>
          </div>

        </div>

        {/* 3. CHRONOLOGICAL LOG TABLE WITH HIGHLIGHTED ANOMALOUS ROWS */}
        <div id="audit-log-table-container" className="bg-[#121212] border-2 border-[#262626] overflow-hidden shadow-2xl">
          <div className="p-4 bg-[#0E0E0E] border-b border-[#222222] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#E31B23]" />
              <h3 className="font-condensed text-xl font-bold uppercase text-white tracking-wide">
                Live Data Disclosure &amp; Consent Enforcement Stream
              </h3>
            </div>
            <div className="text-xs font-mono-code text-[#888888] hidden sm:block">
              SHOWING {filteredLogs.length} OF {logs.length} LOG EVENTS
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono-code border-collapse">
              <thead>
                <tr className="bg-[#0A0A0A] text-[#888888] border-b border-[#242424] uppercase select-none">
                  <th className="py-3.5 px-4 w-36">TIMESTAMP</th>
                  <th className="py-3.5 px-4">ACCESSING ORG &amp; ACTOR</th>
                  <th className="py-3.5 px-4">ATHLETE / DATA ACCESSED</th>
                  <th className="py-3.5 px-4">FIELD-LEVEL DETAIL (PULLED)</th>
                  <th className="py-3.5 px-4">PURPOSE / STATUTE REF</th>
                  <th className="py-3.5 px-4 text-right">AUDIT STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F1F1F]">
                {filteredLogs.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-[#777777] font-mono-code">
                      No audit records found matching your filter parameters.
                    </td>
                  </tr>
                ) : (
                  filteredLogs.map((entry) => {
                    const isAnomalous = entry.isAnomaly;

                    return (
                      <tr
                        key={entry.id}
                        id={`audit-row-${entry.id}`}
                        onClick={() => setSelectedLog(entry)}
                        className={`transition-colors cursor-pointer group ${
                          isAnomalous
                            ? 'bg-[#220E10] hover:bg-[#2C1215] border-l-4 border-l-[#E31B23] border-y border-y-[#E31B23]/40'
                            : 'hover:bg-[#161616] border-l-4 border-l-transparent hover:border-l-[#444444]'
                        }`}
                      >
                        {/* 1. Timestamp */}
                        <td className="py-3.5 px-4 align-top">
                          <div className={`font-bold ${isAnomalous ? 'text-[#FCA5A5]' : 'text-white'}`}>
                            {entry.timestamp}
                          </div>
                          <div className="text-[10px] text-[#777777] flex items-center gap-1 mt-0.5">
                            <Clock className="w-3 h-3 text-[#555555]" />
                            <span>{entry.relativeTime}</span>
                          </div>
                        </td>

                        {/* 2. Accessing Org & Actor */}
                        <td className="py-3.5 px-4 align-top">
                          <div className={`font-sans font-bold text-sm ${isAnomalous ? 'text-[#F87171]' : 'text-white group-hover:text-[#E31B23]'} transition-colors`}>
                            {entry.accessingOrg}
                          </div>
                          <div className="text-xs text-[#999999] mt-0.5">
                            {entry.actor} <span className="text-[#666666]">({entry.actorRole})</span>
                          </div>
                          <div className="text-[10px] text-[#666666] font-mono-code mt-1">
                            IP: {entry.ipAddress}
                          </div>
                        </td>

                        {/* 3. Athlete / Data Accessed */}
                        <td className="py-3.5 px-4 align-top">
                          <div className="flex items-center gap-2">
                            <span className={`font-bold ${isAnomalous ? 'text-white font-condensed text-base' : 'text-[#DDDDDD]'}`}>
                              {entry.athleteAccessed}
                            </span>
                          </div>
                          {entry.athleteCategory && (
                            <span className="text-[11px] text-[#888888] block">
                              Category: {entry.athleteCategory}
                            </span>
                          )}
                          <div className="text-[10px] text-[#666666] mt-0.5">
                            Docket Ref: {entry.consentRef}
                          </div>
                        </td>

                        {/* 4. Field-Level Detail */}
                        <td className="py-3.5 px-4 align-top">
                          <div className="flex flex-wrap gap-1 max-w-xs">
                            {entry.fieldsAccessed.map((field, fIdx) => (
                              <span
                                key={fIdx}
                                className={`px-2 py-0.5 rounded text-[10px] font-mono-code border ${
                                  isAnomalous
                                    ? 'bg-[#3A161A] text-[#FCA5A5] border-[#E31B23]/60'
                                    : 'bg-[#181818] text-[#CCCCCC] border-[#2C2C2C]'
                                }`}
                              >
                                {field}
                              </span>
                            ))}
                          </div>
                        </td>

                        {/* 5. Purpose */}
                        <td className="py-3.5 px-4 align-top">
                          <div className={`text-xs ${isAnomalous ? 'text-[#FCA5A5] font-bold' : 'text-[#CCCCCC]'}`}>
                            {entry.purpose}
                          </div>
                          <div className="text-[10px] text-[#666666] mt-1 font-mono-code">
                            Hash: {entry.merkleHash.slice(0, 14)}...
                          </div>
                        </td>

                        {/* 6. Audit Status & Anomaly Tag */}
                        <td className="py-3.5 px-4 align-top text-right">
                          {isAnomalous ? (
                            <div className="space-y-1 inline-flex flex-col items-end">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#E31B23] text-white font-bold text-[10px] uppercase tracking-wider shadow-md shadow-[#E31B23]/40">
                                <AlertTriangle className="w-3.5 h-3.5 animate-bounce" />
                                <span>⚠ Anomaly detected</span>
                              </span>
                              <span className="text-[10px] text-[#F87171] block font-bold">
                                {entry.anomalyType}
                              </span>
                              <span className="text-[9px] text-amber-300 uppercase px-1.5 py-0.5 bg-black/60 border border-amber-500/40">
                                {entry.actionTaken}
                              </span>
                            </div>
                          ) : (
                            <div className="space-y-1 inline-flex flex-col items-end">
                              <span className="inline-flex items-center gap-1 text-emerald-400 text-[11px]">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>Verified Lawful</span>
                              </span>
                              <span className="text-[10px] text-[#666666]">
                                WORM Signed
                              </span>
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="p-4 bg-[#0A0A0A] border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono-code text-[#777777]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>TAMPER-EVIDENT MERKLE LOG ACTIVE • AUTO-AUDITING EVERY 30 SECONDS</span>
            </div>
            <div className="flex items-center gap-4">
              <span>LEGAL RETENTION: 7 YEARS (DPDP ACT SEC 9)</span>
            </div>
          </div>
        </div>

        {/* 4. DETAIL INSPECTION MODAL / FORENSIC DRAWER (WHEN ROW IS CLICKED) */}
        {selectedLog && (
          <div 
            id="audit-forensics-modal"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedLog(null)}
          >
            <div 
              className={`w-full max-w-2xl bg-[#141414] border-2 p-6 shadow-2xl space-y-6 ${
                selectedLog.isAnomaly ? 'border-[#E31B23]' : 'border-[#333333]'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#242424]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {selectedLog.isAnomaly ? (
                      <span className="px-2.5 py-0.5 bg-[#E31B23] text-white text-xs font-mono-code font-bold uppercase tracking-wider flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>⚠ CRITICAL ANOMALY INVESTIGATION</span>
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 bg-emerald-500 text-black text-xs font-mono-code font-bold uppercase tracking-wider flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>LAWFUL AUDIT RECORD</span>
                      </span>
                    )}
                    <span className="text-xs font-mono-code text-[#888888]">{selectedLog.id}</span>
                  </div>
                  <h3 className="font-condensed text-2xl font-black uppercase text-white">
                    {selectedLog.accessingOrg}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedLog(null)}
                  className="p-1.5 text-[#888888] hover:text-white hover:bg-[#202020] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Anomaly Notice if applicable */}
              {selectedLog.isAnomaly && (
                <div className="p-4 bg-[#240F12] border border-[#E31B23] text-white space-y-2 text-xs font-mono-code">
                  <div className="flex items-center gap-2 text-[#F87171] font-bold text-sm">
                    <ShieldAlert className="w-4 h-4 text-[#E31B23]" />
                    <span>ANOMALY REASON: {selectedLog.anomalyType}</span>
                  </div>
                  <p className="text-[#CCCCCC] leading-relaxed">
                    {selectedLog.anomalyDetails}
                  </p>
                  <div className="pt-2 flex items-center justify-between border-t border-[#E31B23]/30 text-[11px]">
                    <span className="text-amber-400">ENFORCEMENT: {selectedLog.actionTaken}</span>
                    <span className="text-[#888888]">DPO Ticket: #INC-2026-089</span>
                  </div>
                </div>
              )}

              {/* Forensic Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono-code">
                <div className="bg-[#0A0A0A] p-3 border border-[#222222] space-y-1">
                  <span className="text-[#777777] block text-[10px] uppercase">ACTOR &amp; ROLE</span>
                  <div className="text-white font-bold">{selectedLog.actor}</div>
                  <div className="text-[#999999]">{selectedLog.actorRole}</div>
                </div>

                <div className="bg-[#0A0A0A] p-3 border border-[#222222] space-y-1">
                  <span className="text-[#777777] block text-[10px] uppercase">ORIGIN IP &amp; NODE</span>
                  <div className="text-white font-bold">{selectedLog.ipAddress}</div>
                  <div className="text-[#999999]">Encrypted TLS 1.3 mTLS Tunnel</div>
                </div>

                <div className="bg-[#0A0A0A] p-3 border border-[#222222] space-y-1">
                  <span className="text-[#777777] block text-[10px] uppercase">DATA TARGET</span>
                  <div className="text-white font-bold">{selectedLog.athleteAccessed}</div>
                  <div className="text-[#999999]">Consent Docket: {selectedLog.consentRef}</div>
                </div>

                <div className="bg-[#0A0A0A] p-3 border border-[#222222] space-y-1">
                  <span className="text-[#777777] block text-[10px] uppercase">CRYPTOGRAPHIC MERKLE RECEIPT</span>
                  <div className="text-emerald-400 font-bold truncate">{selectedLog.merkleHash}</div>
                  <div className="text-[#999999]">SHA-256 Immutable Hash</div>
                </div>
              </div>

              {/* Pulled Fields */}
              <div className="space-y-2">
                <span className="text-xs font-mono-code text-[#777777] uppercase block">
                  FIELDS PULLED IN THIS ACCESS TRANSACTION:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedLog.fieldsAccessed.map((f, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-[#1A1A1A] border border-[#333333] text-white text-xs font-mono-code"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#242424] flex items-center justify-between">
                <span className="text-xs font-mono-code text-[#777777]">
                  Timestamp: {selectedLog.timestamp}
                </span>
                <button
                  onClick={() => setSelectedLog(null)}
                  className="px-4 py-2 bg-[#E31B23] hover:bg-[#C9131A] text-white text-xs font-condensed font-bold uppercase tracking-wider cursor-pointer"
                >
                  Dismiss Forensics
                </button>
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM NAVIGATION BACK TO OTHER PORTAL WORKFLOWS */}
        <div className="pt-4 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono-code text-[#777777]">
            <span>RETURN TO RELEVANT STAKEHOLDER PORTAL // </span>
            <span className="text-white font-bold">ALL 5 MODULES OPERATIONAL</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('school-upload')}
              className="px-3.5 py-2 bg-[#141414] hover:bg-[#202020] text-[#CCCCCC] hover:text-white border border-[#2B2B2B] text-xs font-condensed font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              School Upload
            </button>
            <button
              onClick={() => onNavigate('ngo-scouting')}
              className="px-3.5 py-2 bg-[#141414] hover:bg-[#202020] text-[#CCCCCC] hover:text-white border border-[#2B2B2B] text-xs font-condensed font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              NGO Scouting
            </button>
            <button
              onClick={() => onNavigate('authority-dashboard')}
              className="px-3.5 py-2 bg-[#141414] hover:bg-[#202020] text-[#CCCCCC] hover:text-white border border-[#2B2B2B] text-xs font-condensed font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Coach Dashboard
            </button>
            <button
              onClick={() => onNavigate('guardian-consent')}
              className="px-3.5 py-2 bg-[#141414] hover:bg-[#202020] text-[#CCCCCC] hover:text-white border border-[#2B2B2B] text-xs font-condensed font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Guardian Portal
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
