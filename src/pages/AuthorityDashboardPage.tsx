/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  Flag, 
  MapPin, 
  Building2, 
  ArrowLeft, 
  ArrowUpRight, 
  ShieldCheck, 
  ShieldAlert, 
  Lock, 
  Unlock, 
  ChevronUp, 
  ChevronDown, 
  Search, 
  Filter, 
  Download, 
  Calendar, 
  Trophy, 
  Activity, 
  CheckCircle2, 
  ExternalLink,
  Info,
  Layers,
  Sparkles,
  ArrowUpDown
} from 'lucide-react';
import { RoutePage } from '../types';

interface ScreenProps {
  onNavigate: (page: RoutePage) => void;
}

export type RbacRole = 'state_authority' | 'coach';

export interface FlaggedAthlete {
  id: string;
  docket: string;
  bib: string;
  name: string;
  age: number;
  category: 'U-14' | 'U-16' | 'U-18';
  sport: string;
  event: string;
  metricValue: number;
  metricDisplay: string;
  unit: string;
  percentile: number;
  district: string;
  state: string;
  sourceOrg: string;
  flaggedDate: string;
  status: 'Flagged for Review' | 'Trial Scheduled' | 'Elite Camp Shortlist';
  trialDate?: string;
  consentToken: string;
}

const INITIAL_FLAGGED_ATHLETES: FlaggedAthlete[] = [
  {
    id: 'ATH-IN-0829',
    docket: 'REV-SAI-9012',
    bib: '04',
    name: 'Manpreet Singh Gill',
    age: 15,
    category: 'U-16',
    sport: 'Athletics',
    event: '100m Sprint',
    metricValue: 11.18,
    metricDisplay: '11.18',
    unit: 'sec',
    percentile: 98,
    district: 'Patiala',
    state: 'Punjab',
    sourceOrg: 'Punjab State Sports Academy',
    flaggedDate: '2026-09-08',
    status: 'Elite Camp Shortlist',
    trialDate: '2026-09-22',
    consentToken: 'TOK-DPDP-89104-VPC'
  },
  {
    id: 'ATH-IN-1142',
    docket: 'REV-SAI-9015',
    bib: '12',
    name: 'Ananya Deshmukh',
    age: 14,
    category: 'U-14',
    sport: 'Athletics',
    event: '30m Flying Sprint',
    metricValue: 3.98,
    metricDisplay: '3.98',
    unit: 'sec',
    percentile: 99,
    district: 'North Delhi',
    state: 'Delhi NCR',
    sourceOrg: 'Delhi Public Sports Academy',
    flaggedDate: '2026-09-07',
    status: 'Trial Scheduled',
    trialDate: '2026-09-18',
    consentToken: 'TOK-DPDP-77312-VPC'
  },
  {
    id: 'ATH-IN-2294',
    docket: 'REV-SAI-8841',
    bib: '27',
    name: 'Vikramaditya Rathore',
    age: 15,
    category: 'U-16',
    sport: 'Basketball',
    event: 'Vertical Jump',
    metricValue: 66.4,
    metricDisplay: '66.4',
    unit: 'cm',
    percentile: 96,
    district: 'Rohtak',
    state: 'Haryana',
    sourceOrg: 'GoSports Grassroots Foundation',
    flaggedDate: '2026-09-06',
    status: 'Flagged for Review',
    consentToken: 'TOK-DPDP-44910-VPC'
  },
  {
    id: 'ATH-IN-3310',
    docket: 'REV-SAI-9104',
    bib: '09',
    name: 'Farhan Akhtar Mir',
    age: 16,
    category: 'U-18',
    sport: 'Football',
    event: 'Beep Test (Aerobic)',
    metricValue: 14.2,
    metricDisplay: 'Level 14.2',
    unit: 'shuttles',
    percentile: 97,
    district: 'Jamshedpur',
    state: 'Jharkhand',
    sourceOrg: 'Tata Football Grassroots Academy',
    flaggedDate: '2026-09-05',
    status: 'Elite Camp Shortlist',
    trialDate: '2026-09-25',
    consentToken: 'TOK-DPDP-99201-VPC'
  },
  {
    id: 'ATH-IN-4421',
    docket: 'REV-SAI-8790',
    bib: '18',
    name: 'Pooja Rani',
    age: 13,
    category: 'U-14',
    sport: 'Boxing',
    event: 'Reaction Wall Speed',
    metricValue: 280,
    metricDisplay: '280',
    unit: 'ms',
    percentile: 94,
    district: 'Bhiwani',
    state: 'Haryana',
    sourceOrg: 'Bhiwani Youth Boxing Center',
    flaggedDate: '2026-09-04',
    status: 'Trial Scheduled',
    trialDate: '2026-09-20',
    consentToken: 'TOK-DPDP-33118-VPC'
  },
  {
    id: 'ATH-IN-5509',
    docket: 'REV-SAI-8902',
    bib: '22',
    name: 'Tanvi Patil',
    age: 15,
    category: 'U-16',
    sport: 'Swimming',
    event: '50m Freestyle',
    metricValue: 26.94,
    metricDisplay: '26.94',
    unit: 'sec',
    percentile: 99,
    district: 'Pune',
    state: 'Maharashtra',
    sourceOrg: 'Balewadi High Performance Centre',
    flaggedDate: '2026-09-02',
    status: 'Elite Camp Shortlist',
    trialDate: '2026-09-24',
    consentToken: 'TOK-DPDP-11209-VPC'
  },
  {
    id: 'ATH-IN-6118',
    docket: 'REV-SAI-8822',
    bib: '31',
    name: 'Aarav Sharma',
    age: 15,
    category: 'U-16',
    sport: 'Athletics',
    event: '100m Sprint',
    metricValue: 11.42,
    metricDisplay: '11.42',
    unit: 'sec',
    percentile: 93,
    district: 'North Delhi',
    state: 'Delhi NCR',
    sourceOrg: 'Delhi Public Sports Academy',
    flaggedDate: '2026-09-01',
    status: 'Flagged for Review',
    consentToken: 'TOK-DPDP-66710-VPC'
  },
  {
    id: 'ATH-IN-8891',
    docket: 'REV-SAI-9211',
    bib: '08',
    name: 'Karthik Raja',
    age: 16,
    category: 'U-18',
    sport: 'Basketball',
    event: 'Vertical Jump',
    metricValue: 68.0,
    metricDisplay: '68.0',
    unit: 'cm',
    percentile: 98,
    district: 'Bengaluru',
    state: 'Karnataka',
    sourceOrg: 'Bangalore Youth Basketball Trust',
    flaggedDate: '2026-08-29',
    status: 'Trial Scheduled',
    trialDate: '2026-09-19',
    consentToken: 'TOK-DPDP-55412-VPC'
  }
];

// District aggregate data for State Authority View
const DISTRICT_STATS = [
  { district: 'Patiala', athletes: 3420, flagged: 29, elitePct: 18.4, avgSprint: '11.4s' },
  { district: 'Jalandhar', athletes: 4180, flagged: 34, elitePct: 16.2, avgSprint: '11.6s' },
  { district: 'Ludhiana', athletes: 3890, flagged: 22, elitePct: 14.1, avgSprint: '11.7s' },
  { district: 'Rohtak', athletes: 2750, flagged: 26, elitePct: 19.5, avgSprint: '11.3s' },
  { district: 'North Delhi', athletes: 2410, flagged: 19, elitePct: 15.8, avgSprint: '11.5s' },
  { district: 'Bhiwani', athletes: 1940, flagged: 18, elitePct: 21.0, avgSprint: '11.2s' }
];

// Sport breakdown data
const SPORT_BREAKDOWN = [
  { sport: 'Athletics', count: 6840, percentage: 37 },
  { sport: 'Football', count: 4210, percentage: 23 },
  { sport: 'Basketball', count: 2950, percentage: 16 },
  { sport: 'Boxing', count: 2410, percentage: 13 },
  { sport: 'Swimming', count: 2082, percentage: 11 }
];

type SortField = 'name' | 'age' | 'sport' | 'percentile' | 'district' | 'status' | 'flaggedDate';
type SortOrder = 'asc' | 'desc';

export const AuthorityDashboardPage: React.FC<ScreenProps> = ({ onNavigate }) => {
  // RBAC View Mode Switcher
  const [roleMode, setRoleMode] = useState<RbacRole>('state_authority');

  // Table state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSport, setSelectedSport] = useState('ALL');
  const [sortField, setSortField] = useState<SortField>('percentile');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [athleteList, setAthleteList] = useState<FlaggedAthlete[]>(INITIAL_FLAGGED_ATHLETES);

  // Status modification helper
  const handleUpdateStatus = (id: string, newStatus: FlaggedAthlete['status']) => {
    setAthleteList(prev => 
      prev.map(a => a.id === id ? { ...a, status: newStatus } : a)
    );
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  // Sorting & Filtering
  const filteredAndSortedAthletes = athleteList
    .filter(a => {
      const matchesSearch = 
        a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.docket.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.sourceOrg.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSport = selectedSport === 'ALL' || a.sport === selectedSport;
      return matchesSearch && matchesSport;
    })
    .sort((a, b) => {
      let comparison = 0;
      if (sortField === 'name') comparison = a.name.localeCompare(b.name);
      else if (sortField === 'age') comparison = a.age - b.age;
      else if (sortField === 'sport') comparison = a.sport.localeCompare(b.sport);
      else if (sortField === 'percentile') comparison = a.percentile - b.percentile;
      else if (sortField === 'district') comparison = a.district.localeCompare(b.district);
      else if (sortField === 'status') comparison = a.status.localeCompare(b.status);
      else if (sortField === 'flaggedDate') comparison = a.flaggedDate.localeCompare(b.flaggedDate);

      return sortOrder === 'asc' ? comparison : -comparison;
    });

  // Calculate highest district count for relative bar scaling
  const maxDistrictAthletes = Math.max(...DISTRICT_STATS.map(d => d.athletes));

  return (
    <div id="authority-dashboard-page" className="min-h-screen bg-[#0A0A0A] text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#222222]">
          <div className="flex items-center gap-3">
            <button
              id="back-to-home-btn"
              onClick={() => onNavigate('home')}
              className="px-3 py-1.5 bg-[#141414] hover:bg-[#1E1E1E] text-[#A0A0A0] hover:text-white border border-[#2A2A2A] text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#E31B23]" />
              <span>Exit to Portal Home</span>
            </button>
            <span className="text-[#444444]">/</span>
            <span className="text-xs text-[#E31B23] font-bold uppercase tracking-wider">Coach &amp; Authority Dashboard</span>
            <span className="text-[#444444]">/</span>
            <span className="text-xs text-[#888888] uppercase tracking-wider">Talent Pipeline Analytics</span>
          </div>

          <div className="flex items-center gap-3 text-xs text-[#888888]">
            <span className="text-[#CCCCCC]">North Zone Center</span>
            <span className="text-[#333333]">|</span>
            <span>DPDP Role-Scoped Access</span>
          </div>
        </div>

        {/* 1. TOP ROW: BIG AGGREGATE STAT CARDS (Match-Stats Header Style) */}
        <div id="match-stats-header" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Stat Card 1: Total Athletes Tracked */}
          <div className="relative bg-[#121212] border-2 border-[#262626] p-5 shadow-lg overflow-hidden group hover:border-[#E31B23] transition-colors">
            <div className="h-1 w-full bg-[#E31B23] absolute top-0 left-0" />
            <div className="flex items-center justify-between text-xs text-[#777777] mb-2 uppercase font-medium">
              <span>Total Athletes Tracked</span>
              <Users className="w-4 h-4 text-[#888888] group-hover:text-[#E31B23] transition-colors" />
            </div>
            <div className="font-condensed text-5xl sm:text-6xl font-black text-white tracking-tight leading-none">
              18,492
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px]">
              <span className="text-emerald-400 flex items-center gap-1">
                ▲ +1,240 this month
              </span>
              <span className="text-[#777777]">UDISE+ Linked</span>
            </div>
          </div>

          {/* Stat Card 2: Flagged for State Review */}
          <div className="relative bg-[#121212] border-2 border-[#262626] p-5 shadow-lg overflow-hidden group hover:border-[#E31B23] transition-colors">
            <div className="h-1 w-full bg-[#E31B23] absolute top-0 left-0" />
            <div className="flex items-center justify-between text-xs text-[#777777] mb-2 uppercase font-medium">
              <span>Flagged For Review</span>
              <Flag className="w-4 h-4 text-[#E31B23]" />
            </div>
            <div className="font-condensed text-5xl sm:text-6xl font-black text-[#E31B23] tracking-tight leading-none">
              148
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px]">
              <span className="text-white font-medium">Top 5% National Tier</span>
              <span className="text-amber-400">42 Trials Pending</span>
            </div>
          </div>

          {/* Stat Card 3: Districts Covered */}
          <div className="relative bg-[#121212] border-2 border-[#262626] p-5 shadow-lg overflow-hidden group hover:border-[#E31B23] transition-colors">
            <div className="h-1 w-full bg-[#E31B23] absolute top-0 left-0" />
            <div className="flex items-center justify-between text-xs text-[#777777] mb-2 uppercase font-medium">
              <span>Districts Covered</span>
              <MapPin className="w-4 h-4 text-[#888888] group-hover:text-[#E31B23] transition-colors" />
            </div>
            <div className="font-condensed text-5xl sm:text-6xl font-black text-white tracking-tight leading-none">
              28
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px]">
              <span className="text-[#AAAAAA]">Punjab, Haryana &amp; NCR</span>
              <span className="text-[#777777]">District Mapping</span>
            </div>
          </div>

          {/* Stat Card 4: Active NGOs & Academies */}
          <div className="relative bg-[#121212] border-2 border-[#262626] p-5 shadow-lg overflow-hidden group hover:border-[#E31B23] transition-colors">
            <div className="h-1 w-full bg-[#E31B23] absolute top-0 left-0" />
            <div className="flex items-center justify-between text-xs text-[#777777] mb-2 uppercase font-medium">
              <span>Active NGOs &amp; Academies</span>
              <Building2 className="w-4 h-4 text-[#888888] group-hover:text-[#E31B23] transition-colors" />
            </div>
            <div className="font-condensed text-5xl sm:text-6xl font-black text-white tracking-tight leading-none">
              64
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px]">
              <span className="text-emerald-400">12 Foundations</span>
              <span className="text-[#777777]">52 Schools</span>
            </div>
          </div>

        </div>

        {/* 2. RBAC VIEW-SWITCHER TOGGLE: STATE AUTHORITY VIEW VS. COACH VIEW */}
        <div 
          id="rbac-role-switcher"
          className="bg-[#121212] border-2 border-[#282828] p-6 shadow-xl relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#E31B23]" />
                <span className="text-xs uppercase tracking-widest text-[#E31B23] font-bold">
                  Role-Based Access Control
                </span>
              </div>
              <h2 className="font-condensed text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
                Role-Based Access View Selector
              </h2>
              <p className="text-xs text-[#999999] max-w-3xl leading-relaxed">
                Demonstrating strict statutory privacy boundaries under the DPDP Act 2023. Switching between roles dynamically 
                restricts personal identifiable information (PII) versus anonymized macro-level demographic charts.
              </p>
            </div>

            {/* Toggle Switch Controls */}
            <div className="flex items-center bg-[#0A0A0A] p-1.5 border border-[#333333] shrink-0">
              <button
                id="toggle-state-authority-view"
                onClick={() => setRoleMode('state_authority')}
                className={`px-4 py-2.5 font-condensed font-bold uppercase text-xs sm:text-sm tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                  roleMode === 'state_authority'
                    ? 'bg-[#E31B23] text-white shadow-lg shadow-[#E31B23]/30 border border-[#E31B23]'
                    : 'text-[#888888] hover:text-white hover:bg-[#1A1A1A]'
                }`}
              >
                <Lock className="w-3.5 h-3.5" />
                <span>State Authority View</span>
                <span className="text-[10px] opacity-80">(Aggregate Only)</span>
              </button>

              <button
                id="toggle-coach-view"
                onClick={() => setRoleMode('coach')}
                className={`px-4 py-2.5 font-condensed font-bold uppercase text-xs sm:text-sm tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                  roleMode === 'coach'
                    ? 'bg-[#E31B23] text-white shadow-lg shadow-[#E31B23]/30 border border-[#E31B23]'
                    : 'text-[#888888] hover:text-white hover:bg-[#1A1A1A]'
                }`}
              >
                <Unlock className="w-3.5 h-3.5" />
                <span>Coach View</span>
                <span className="text-[10px] opacity-80">(Consented Profiles)</span>
              </button>
            </div>
          </div>

          {/* Active Mode Notice Banner */}
          <div className="mt-5 pt-4 border-t border-[#1F1F1F] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            {roleMode === 'state_authority' ? (
              <div className="flex items-center gap-2.5 text-amber-400">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>
                  <strong>State Authority Scope:</strong> Viewing anonymized macro charts and district densities. Individual athlete names and contact parameters are masked.
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>
                  <strong>Accredited Coach Clearance:</strong> Consented athlete dossiers displayed under verified Section 9 parental consent for national camp evaluations.
                </span>
              </div>
            )}

            <span className="text-[#888888] shrink-0 text-[11px]">
              DPDP Act Section 9 Verified
            </span>
          </div>
        </div>

        {/* 3. CONDITIONAL VIEW BASED ON RBAC SWITCH */}
        {roleMode === 'state_authority' ? (
          /* =========================================================================
             A) STATE AUTHORITY VIEW: ANONYMIZED AGGREGATE TREND CHARTS & MACRO DATA
             ========================================================================= */
          <div id="state-authority-view-container" className="space-y-8 animate-fadeIn">
            
            {/* Top Row: Two Custom Red/Dark Bar Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Bar Chart 1: District Athlete Distribution */}
              <div className="lg:col-span-7 bg-[#121212] border-2 border-[#242424] p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <BarChart3 className="w-4 h-4 text-[#E31B23]" />
                      <span className="text-xs uppercase text-[#E31B23] font-bold">
                        Regional Benchmark Volume
                      </span>
                    </div>
                    <h3 className="font-condensed text-2xl font-black uppercase text-white">
                      District Athlete Enrollment &amp; Flagged Talent Density
                    </h3>
                  </div>
                  <span className="text-[11px] text-[#777777]">Punjab &amp; NCR Cluster</span>
                </div>

                {/* Simple Bar Chart Component in the red/dark palette */}
                <div className="space-y-4 pt-2">
                  {DISTRICT_STATS.map((d) => {
                    const pct = Math.round((d.athletes / maxDistrictAthletes) * 100);
                    return (
                      <div key={d.district} className="space-y-1.5 group">
                        <div className="flex items-center justify-between text-xs font-mono-code">
                          <span className="text-white font-bold group-hover:text-[#E31B23] transition-colors">
                            {d.district}
                          </span>
                          <div className="flex items-center gap-4 text-[#AAAAAA]">
                            <span>{d.athletes.toLocaleString()} registered</span>
                            <span className="text-[#E31B23] font-bold">({d.flagged} flagged)</span>
                            <span className="text-white bg-[#1A1A1A] px-1.5 py-0.5 border border-[#333333]">
                              {d.elitePct}% Elite
                            </span>
                          </div>
                        </div>

                        {/* Bar Track & Fill */}
                        <div className="h-5 bg-[#0A0A0A] border border-[#222222] overflow-hidden flex">
                          <div
                            style={{ width: `${pct}%` }}
                            className="h-full bg-gradient-to-r from-[#8B0000] via-[#C9131A] to-[#E31B23] transition-all duration-500 relative group-hover:brightness-110 flex items-center justify-end pr-2"
                          >
                            <span className="text-[10px] font-mono-code font-bold text-white drop-shadow">
                              {pct}%
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-3 bg-[#0A0A0A] border border-[#1F1F1F] flex items-center justify-between text-xs font-mono-code text-[#888888]">
                  <span>Avg State 100m Velocity: 11.45s</span>
                  <span className="text-emerald-400">Top Performing: Bhiwani (21.0% Elite)</span>
                </div>
              </div>

              {/* Bar Chart 2: Sport Category Breakdown */}
              <div className="lg:col-span-5 bg-[#121212] border-2 border-[#242424] p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Trophy className="w-4 h-4 text-[#E31B23]" />
                      <span className="text-xs uppercase text-[#E31B23] font-bold">
                        Sport Discipline Share
                      </span>
                    </div>
                    <h3 className="font-condensed text-2xl font-black uppercase text-white">
                      Enrollment by Sport Discipline
                    </h3>
                  </div>
                  <span className="text-[11px] text-[#777777]">All Districts</span>
                </div>

                {/* Sport Distribution Bars */}
                <div className="space-y-4 pt-2">
                  {SPORT_BREAKDOWN.map((item) => (
                    <div key={item.sport} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white font-bold">{item.sport}</span>
                        <span className="text-[#AAAAAA]">{item.count.toLocaleString()} athletes ({item.percentage}%)</span>
                      </div>
                      <div className="h-4 bg-[#0A0A0A] border border-[#222222] overflow-hidden">
                        <div
                          style={{ width: `${item.percentage}%` }}
                          className="h-full bg-[#E31B23] transition-all duration-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-[#161616] border border-[#282828] space-y-2 text-xs">
                  <span className="text-[#E31B23] font-bold block uppercase tracking-wider text-[11px]">Governance Statute Note</span>
                  <p className="text-[#999999] leading-relaxed">
                    Under DPDP Act 2023 Sec 9, State Authorities may only access aggregate district counts to plan budget, equipment subsidies, 
                    and coach staffing. Individual athlete contact records remain protected.
                  </p>
                </div>
              </div>

            </div>

            {/* Anonymized Aggregate Table for Authority */}
            <div className="bg-[#121212] border-2 border-[#242424]">
              <div className="p-6 border-b border-[#222222] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 bg-amber-400" />
                    <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                      Anonymized Registry
                    </span>
                  </div>
                  <h3 className="font-condensed text-3xl font-black uppercase text-white">
                    State Talent Pipeline Cohort (Pseudonymized Tokens)
                  </h3>
                </div>
                <div className="px-3 py-1 bg-[#1A1A1A] border border-[#333333] text-xs text-[#AAAAAA] flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-[#E31B23]" />
                  <span>Switch to Coach View above to inspect names &amp; dossiers</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#0E0E0E] text-[#888888] border-b border-[#222222] uppercase font-medium text-[11px]">
                      <th className="py-3 px-4">Docket Ref</th>
                      <th className="py-3 px-4">Pseudonymized Token</th>
                      <th className="py-3 px-4">Sport</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4 text-right">Benchmark</th>
                      <th className="py-3 px-4 text-center">Percentile</th>
                      <th className="py-3 px-4">District</th>
                      <th className="py-3 px-4">DPDP Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1A1A1A]">
                    {INITIAL_FLAGGED_ATHLETES.map((athlete) => (
                      <tr key={athlete.id} className="hover:bg-[#161616] transition-colors">
                        <td className="py-3 px-4 text-[#CCCCCC] font-bold">{athlete.docket}</td>
                        <td className="py-3 px-4 text-[#888888]">
                          <span className="font-mono-code text-[11px] bg-[#0A0A0A] px-2 py-0.5 border border-[#262626]">
                            {athlete.id.slice(0, 6)}••••••••
                          </span>
                        </td>
                        <td className="py-3 px-4 text-white">{athlete.sport}</td>
                        <td className="py-3 px-4 text-[#888888]">{athlete.category}</td>
                        <td className="py-3 px-4 text-right font-bold text-white font-condensed text-lg">
                          {athlete.metricDisplay} {athlete.unit}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="text-[#E31B23] font-bold">Top {100 - athlete.percentile}%</span>
                        </td>
                        <td className="py-3 px-4 text-[#CCCCCC]">{athlete.district}, {athlete.state}</td>
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center gap-1 text-emerald-400 text-[11px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span>VPC Verified</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        ) : (
          /* =========================================================================
             B) COACH VIEW: INDIVIDUAL CONSENTED ATHLETE PROFILES & SORTABLE DATA TABLE
             ========================================================================= */
          <div id="coach-view-container" className="space-y-8 animate-fadeIn">
            
            {/* Top Control Strip for Coach */}
            <div className="bg-[#121212] border-2 border-[#282828] p-6 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 bg-emerald-400" />
                    <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                      Individual Athlete Dossiers
                    </span>
                  </div>
                  <h3 className="font-condensed text-3xl font-black uppercase text-white tracking-wide">
                    Flagged &amp; Scouted Talent Review Ledger
                  </h3>
                  <p className="text-xs text-[#888888]">
                    Full individual performance dossiers unlocked via verified Section 9 parental consents. Click any column header to sort.
                  </p>
                </div>

                {/* Filter and Search Bar */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="relative min-w-[220px]">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-[#666666]" />
                    <input
                      type="text"
                      placeholder="Search athlete, docket, district..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-[#2C2C2C] focus:border-[#E31B23] text-white pl-8 pr-3 py-1.5 text-xs focus:outline-none"
                    />
                  </div>

                  <select
                    value={selectedSport}
                    onChange={(e) => setSelectedSport(e.target.value)}
                    className="bg-[#0A0A0A] border border-[#2C2C2C] text-xs text-[#CCCCCC] px-3 py-1.5 focus:border-[#E31B23] focus:outline-none cursor-pointer"
                  >
                    <option value="ALL">All Sports</option>
                    <option value="Athletics">Athletics</option>
                    <option value="Basketball">Basketball</option>
                    <option value="Football">Football</option>
                    <option value="Boxing">Boxing</option>
                    <option value="Swimming">Swimming</option>
                  </select>
                </div>
              </div>
            </div>

            {/* SORTABLE DATA TABLE OF FLAGGED / SCOUTED ATHLETES */}
            <div id="flagged-athletes-table-container" className="bg-[#121212] border-2 border-[#242424] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#0E0E0E] text-[#888888] border-b border-[#222222] uppercase select-none">
                      {/* Bib */}
                      <th className="py-3.5 px-4 text-center w-14">BIB</th>

                      {/* Name (Sortable) */}
                      <th 
                        onClick={() => handleSort('name')}
                        className="py-3.5 px-4 cursor-pointer hover:text-white transition-colors"
                      >
                        <div className="flex items-center gap-1.5">
                          <span>ATHLETE NAME / DOCKET</span>
                          {sortField === 'name' ? (
                            sortOrder === 'asc' ? <ChevronUp className="w-3.5 h-3.5 text-[#E31B23]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#E31B23]" />
                          ) : (
                            <ArrowUpDown className="w-3 h-3 text-[#444444]" />
                          )}
                        </div>
                      </th>

                      {/* Age & Cat (Sortable) */}
                      <th 
                        onClick={() => handleSort('age')}
                        className="py-3.5 px-4 cursor-pointer hover:text-white transition-colors"
                      >
                        <div className="flex items-center gap-1.5">
                          <span>AGE / CAT</span>
                          {sortField === 'age' ? (
                            sortOrder === 'asc' ? <ChevronUp className="w-3.5 h-3.5 text-[#E31B23]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#E31B23]" />
                          ) : (
                            <ArrowUpDown className="w-3 h-3 text-[#444444]" />
                          )}
                        </div>
                      </th>

                      {/* Sport (Sortable) */}
                      <th 
                        onClick={() => handleSort('sport')}
                        className="py-3.5 px-4 cursor-pointer hover:text-white transition-colors"
                      >
                        <div className="flex items-center gap-1.5">
                          <span>SPORT &amp; EVENT</span>
                          {sortField === 'sport' ? (
                            sortOrder === 'asc' ? <ChevronUp className="w-3.5 h-3.5 text-[#E31B23]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#E31B23]" />
                          ) : (
                            <ArrowUpDown className="w-3 h-3 text-[#444444]" />
                          )}
                        </div>
                      </th>

                      {/* Key Benchmark Metric (Sortable) */}
                      <th 
                        onClick={() => handleSort('percentile')}
                        className="py-3.5 px-4 text-right cursor-pointer hover:text-white transition-colors"
                      >
                        <div className="flex items-center justify-end gap-1.5">
                          <span>BENCHMARK METRIC</span>
                          {sortField === 'percentile' ? (
                            sortOrder === 'asc' ? <ChevronUp className="w-3.5 h-3.5 text-[#E31B23]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#E31B23]" />
                          ) : (
                            <ArrowUpDown className="w-3 h-3 text-[#444444]" />
                          )}
                        </div>
                      </th>

                      {/* District / Source (Sortable) */}
                      <th 
                        onClick={() => handleSort('district')}
                        className="py-3.5 px-4 cursor-pointer hover:text-white transition-colors"
                      >
                        <div className="flex items-center gap-1.5">
                          <span>DISTRICT / SOURCE ORG</span>
                          {sortField === 'district' ? (
                            sortOrder === 'asc' ? <ChevronUp className="w-3.5 h-3.5 text-[#E31B23]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#E31B23]" />
                          ) : (
                            <ArrowUpDown className="w-3 h-3 text-[#444444]" />
                          )}
                        </div>
                      </th>

                      {/* Status (Sortable) */}
                      <th 
                        onClick={() => handleSort('status')}
                        className="py-3.5 px-4 cursor-pointer hover:text-white transition-colors"
                      >
                        <div className="flex items-center gap-1.5">
                          <span>STATE PIPELINE STATUS</span>
                          {sortField === 'status' ? (
                            sortOrder === 'asc' ? <ChevronUp className="w-3.5 h-3.5 text-[#E31B23]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#E31B23]" />
                          ) : (
                            <ArrowUpDown className="w-3 h-3 text-[#444444]" />
                          )}
                        </div>
                      </th>

                      {/* Coach Action */}
                      <th className="py-3.5 px-4 text-right">TRIAL ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1A1A1A]">
                    {filteredAndSortedAthletes.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="py-12 text-center text-sm font-mono-code text-[#777777]">
                          No flagged athletes found matching your search criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredAndSortedAthletes.map((athlete) => {
                        return (
                          <tr
                            key={athlete.id}
                            className="group hover:bg-[#161616] border-l-2 border-l-transparent hover:border-l-[#E31B23] transition-all cursor-pointer"
                          >
                            {/* Bib */}
                            <td className="py-3.5 px-4 text-center">
                              <span className="font-condensed text-lg font-black text-[#666666] group-hover:text-white transition-colors">
                                #{athlete.bib}
                              </span>
                            </td>

                            {/* Athlete Name */}
                            <td className="py-3.5 px-4">
                              <div className="font-sans font-bold text-sm text-white group-hover:text-[#E31B23] transition-colors">
                                {athlete.name}
                              </div>
                              <div className="text-[10px] text-[#777777]">
                                Docket: {athlete.docket} • {athlete.id}
                              </div>
                            </td>

                            {/* Age & Category */}
                            <td className="py-3.5 px-4">
                              <span className="text-white font-bold">{athlete.age} yrs</span>
                              <span className="text-[10px] text-[#888888] block">{athlete.category}</span>
                            </td>

                            {/* Sport & Event */}
                            <td className="py-3.5 px-4">
                              <div className="text-white font-bold">{athlete.sport}</div>
                              <div className="text-[11px] text-[#888888]">{athlete.event}</div>
                            </td>

                            {/* Benchmark Metric (Large Bold Styling) */}
                            <td className="py-3.5 px-4 text-right">
                              <span className="font-condensed text-2xl font-black text-white group-hover:text-[#E31B23] transition-colors">
                                {athlete.metricDisplay}
                              </span>
                              <span className="text-[10px] font-mono-code text-[#888888] ml-1">
                                {athlete.unit}
                              </span>
                              <div className="text-[10px] text-[#E31B23] font-bold">
                                Rank: Top {100 - athlete.percentile}%
                              </div>
                            </td>

                            {/* District & Source */}
                            <td className="py-3.5 px-4">
                              <div className="text-white">{athlete.district}, {athlete.state}</div>
                              <div className="text-[10px] text-[#777777]">{athlete.sourceOrg}</div>
                            </td>

                            {/* State Pipeline Status */}
                            <td className="py-3.5 px-4">
                              {athlete.status === 'Elite Camp Shortlist' && (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1A0D0E] border border-[#E31B23]/40 text-[#E31B23] font-mono-code text-[11px] font-bold">
                                  <Trophy className="w-3 h-3 text-[#E31B23]" />
                                  <span>Elite Camp Shortlist</span>
                                </span>
                              )}
                              {athlete.status === 'Trial Scheduled' && (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#0D1A10] border border-emerald-500/40 text-emerald-400 font-mono-code text-[11px]">
                                  <Calendar className="w-3 h-3 text-emerald-400" />
                                  <span>Trial: {athlete.trialDate}</span>
                                </span>
                              )}
                              {athlete.status === 'Flagged for Review' && (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1A170A] border border-amber-500/40 text-amber-400 font-mono-code text-[11px]">
                                  <Flag className="w-3 h-3 text-amber-400" />
                                  <span>Flagged for Review</span>
                                </span>
                              )}
                            </td>

                            {/* Action Dropdown / Status Switcher */}
                            <td className="py-3.5 px-4 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    const nextStatus = 
                                      athlete.status === 'Flagged for Review' ? 'Trial Scheduled' :
                                      athlete.status === 'Trial Scheduled' ? 'Elite Camp Shortlist' : 'Flagged for Review';
                                    handleUpdateStatus(athlete.id, nextStatus);
                                  }}
                                  className="px-2.5 py-1 bg-[#1A1A1A] hover:bg-[#E31B23] text-[#CCCCCC] hover:text-white text-[10px] font-mono-code border border-[#303030] hover:border-[#E31B23] transition-colors cursor-pointer"
                                  title="Cycle Status"
                                >
                                  Advance Pipeline
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onNavigate('guardian-consent');
                                  }}
                                  className="px-2 py-1 bg-[#141414] hover:bg-[#202020] text-[#888888] hover:text-white text-[10px] font-mono-code border border-[#2B2B2B] transition-colors cursor-pointer"
                                  title="Inspect Consent Token in Guardian View"
                                >
                                  Consent
                                </button>
                              </div>
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
                  <span>SHOWING {filteredAndSortedAthletes.length} HIGH-PERFORMANCE CANDIDATES</span>
                  <span>•</span>
                  <span className="text-white">COACH CLEARANCE LEVEL 3 ACTIVE</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onNavigate('guardian-consent')}
                    className="text-[#E31B23] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inspect Guardian Consent Tokens</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Bottom Flow Nav to Next Demo Screens */}
        <div className="pt-4 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono-code text-[#777777]">
            <span>NEXT STAKEHOLDER SCREEN // </span>
            <span className="text-white font-bold">GUARDIAN CONSENT PORTAL</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('guardian-consent')}
              className="px-6 py-2.5 bg-[#E31B23] hover:bg-[#C9131A] text-white font-condensed font-bold uppercase tracking-wider text-sm flex items-center gap-2 transition-colors cursor-pointer shadow-lg shadow-[#E31B23]/25"
            >
              <span>Go to Guardian Consent Portal</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('audit-log')}
              className="px-5 py-2.5 bg-[#141414] hover:bg-[#1F1F1F] text-[#CCCCCC] hover:text-white font-condensed font-bold uppercase tracking-wider text-sm border border-[#2F2F2F] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>Audit Ledger</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
