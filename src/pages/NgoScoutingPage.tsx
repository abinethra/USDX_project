import React, { useState } from 'react';
import { 
  Lock, 
  ShieldCheck, 
  ArrowLeft, 
  Search, 
  Flag, 
  CheckCircle2, 
  Building2, 
  Activity, 
  SlidersHorizontal, 
  ArrowUpRight, 
  Sparkles,
  AlertCircle,
  FileText,
  UserCheck,
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import { RoutePage } from '../types';

interface ScreenProps {
  onNavigate: (page: RoutePage) => void;
}

export interface ScoutingAthlete {
  id: string;
  bib: string;
  name: string;
  age: number;
  ageCategory: 'U-14' | 'U-16' | 'U-18';
  gender: 'M' | 'F';
  sport: string;
  discipline: string;
  keyStatValue: string;
  keyStatLabel: string;
  keyStatUnit: string;
  percentile: number;
  sourceOrg: string;
  orgType: 'School' | 'Grassroots NGO' | 'State Academy';
  district: string;
  state: string;
  scoutingConsentOptIn: boolean; // Must be true to appear
  consentScope: string;
  consentTimestamp: string;
}

const SCOUTING_DATASET: ScoutingAthlete[] = [
  {
    id: 'ATH-IN-0829',
    bib: '04',
    name: 'Manpreet Singh Gill',
    age: 15,
    ageCategory: 'U-16',
    gender: 'M',
    sport: 'Athletics',
    discipline: '100m Sprint',
    keyStatValue: '11.18',
    keyStatLabel: '100m Dash',
    keyStatUnit: 'sec',
    percentile: 98,
    sourceOrg: 'Punjab State Sports Academy',
    orgType: 'State Academy',
    district: 'Patiala',
    state: 'Punjab',
    scoutingConsentOptIn: true,
    consentScope: 'National Talent Scouting & SAI Trials',
    consentTimestamp: '2026-09-02'
  },
  {
    id: 'ATH-IN-1142',
    bib: '12',
    name: 'Ananya Deshmukh',
    age: 14,
    ageCategory: 'U-14',
    gender: 'F',
    sport: 'Athletics',
    discipline: '30m Flying Sprint',
    keyStatValue: '3.98',
    keyStatLabel: '30m Acceleration',
    keyStatUnit: 'sec',
    percentile: 99,
    sourceOrg: 'Delhi Public Sports Academy',
    orgType: 'School',
    district: 'North Delhi',
    state: 'Delhi NCR',
    scoutingConsentOptIn: true,
    consentScope: 'State & National Sprint Feeder Program',
    consentTimestamp: '2026-09-07'
  },
  {
    id: 'ATH-IN-2294',
    bib: '27',
    name: 'Vikramaditya Rathore',
    age: 15,
    ageCategory: 'U-16',
    gender: 'M',
    sport: 'Basketball',
    discipline: 'Countermovement Vertical Jump',
    keyStatValue: '66.4',
    keyStatLabel: 'Vertical Leap',
    keyStatUnit: 'cm',
    percentile: 96,
    sourceOrg: 'GoSports Grassroots Foundation',
    orgType: 'Grassroots NGO',
    district: 'Rohtak',
    state: 'Haryana',
    scoutingConsentOptIn: true,
    consentScope: 'Khelo India Youth Games Feeder',
    consentTimestamp: '2026-08-28'
  },
  {
    id: 'ATH-IN-3310',
    bib: '09',
    name: 'Farhan Akhtar Mir',
    age: 16,
    ageCategory: 'U-18',
    gender: 'M',
    sport: 'Football',
    discipline: 'Beep Test (Aerobic Capacity)',
    keyStatValue: '14.2',
    keyStatLabel: 'Aerobic Shuttle',
    keyStatUnit: 'Level',
    percentile: 97,
    sourceOrg: 'Tata Football Grassroots Academy',
    orgType: 'Grassroots NGO',
    district: 'Jamshedpur',
    state: 'Jharkhand',
    scoutingConsentOptIn: true,
    consentScope: 'National U-17 Camp Trials',
    consentTimestamp: '2026-09-01'
  },
  {
    id: 'ATH-IN-4421',
    bib: '18',
    name: 'Pooja Rani',
    age: 13,
    ageCategory: 'U-14',
    gender: 'F',
    sport: 'Boxing',
    discipline: 'Reaction Wall & Punch Velocity',
    keyStatValue: '280',
    keyStatLabel: 'Reaction Speed',
    keyStatUnit: 'ms',
    percentile: 94,
    sourceOrg: 'Bhiwani Youth Boxing Center',
    orgType: 'Grassroots NGO',
    district: 'Bhiwani',
    state: 'Haryana',
    scoutingConsentOptIn: true,
    consentScope: 'State Olympic Talent Identification',
    consentTimestamp: '2026-09-04'
  },
  {
    id: 'ATH-IN-5509',
    bib: '22',
    name: 'Tanvi Patil',
    age: 15,
    ageCategory: 'U-16',
    gender: 'F',
    sport: 'Swimming',
    discipline: '50m Freestyle',
    keyStatValue: '26.94',
    keyStatLabel: '50m Sprint',
    keyStatUnit: 'sec',
    percentile: 99,
    sourceOrg: 'Balewadi High Performance Centre',
    orgType: 'State Academy',
    district: 'Pune',
    state: 'Maharashtra',
    scoutingConsentOptIn: true,
    consentScope: 'Junior National Aquatic Squad',
    consentTimestamp: '2026-08-19'
  },
  {
    id: 'ATH-IN-6118',
    bib: '31',
    name: 'Aarav Sharma',
    age: 15,
    ageCategory: 'U-16',
    gender: 'M',
    sport: 'Athletics',
    discipline: '100m Sprint',
    keyStatValue: '11.42',
    keyStatLabel: '100m Dash',
    keyStatUnit: 'sec',
    percentile: 93,
    sourceOrg: 'Delhi Public Sports Academy',
    orgType: 'School',
    district: 'North Delhi',
    state: 'Delhi NCR',
    scoutingConsentOptIn: true,
    consentScope: 'All India Inter-School Trials',
    consentTimestamp: '2026-09-08'
  },
  {
    id: 'ATH-IN-7002',
    bib: '11',
    name: 'Kavita Soren',
    age: 14,
    ageCategory: 'U-14',
    gender: 'F',
    sport: 'Athletics',
    discipline: 'Long Jump',
    keyStatValue: '5.64',
    keyStatLabel: 'Long Jump',
    keyStatUnit: 'm',
    percentile: 95,
    sourceOrg: 'Birsa Munda Tribal Sports Society',
    orgType: 'Grassroots NGO',
    district: 'Ranchi',
    state: 'Jharkhand',
    scoutingConsentOptIn: true,
    consentScope: 'SAI Eastern Center Talent Pool',
    consentTimestamp: '2026-08-30'
  },
  {
    id: 'ATH-IN-8891',
    bib: '08',
    name: 'Karthik Raja',
    age: 16,
    ageCategory: 'U-18',
    gender: 'M',
    sport: 'Basketball',
    discipline: 'Countermovement Vertical Jump',
    keyStatValue: '68.0',
    keyStatLabel: 'Vertical Leap',
    keyStatUnit: 'cm',
    percentile: 98,
    sourceOrg: 'Bangalore Youth Basketball Trust',
    orgType: 'Grassroots NGO',
    district: 'Bengaluru',
    state: 'Karnataka',
    scoutingConsentOptIn: true,
    consentScope: 'Junior National Basketball Championship',
    consentTimestamp: '2026-09-03'
  }
];

export const NgoScoutingPage: React.FC<ScreenProps> = ({ onNavigate }) => {
  // Pill filter states
  const [selectedSport, setSelectedSport] = useState('ALL');
  const [selectedRegion, setSelectedRegion] = useState('ALL');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Flagged for State Review State (Stores set of athlete IDs flagged by this scout)
  const [flaggedIds, setFlaggedIds] = useState<Record<string, { date: string; docketNumber: string }>>({
    'ATH-IN-0829': { date: '2026-09-09', docketNumber: 'REV-SAI-9012' }
  });

  const [notificationToast, setNotificationToast] = useState<{ message: string; athleteName: string } | null>(null);

  // Available Filter Options
  const sports = ['ALL', 'Athletics', 'Basketball', 'Football', 'Boxing', 'Swimming'];
  const regions = [
    'ALL',
    'Delhi NCR',
    'Punjab',
    'Haryana',
    'Jharkhand',
    'Maharashtra',
    'Karnataka'
  ];
  const ageGroups = ['ALL', 'U-14', 'U-16', 'U-18'];

  // Toggle Flag for State Review
  const handleToggleFlag = (athlete: ScoutingAthlete) => {
    if (flaggedIds[athlete.id]) {
      const updated = { ...flaggedIds };
      delete updated[athlete.id];
      setFlaggedIds(updated);
      setNotificationToast({
        message: 'Removed from State Review Queue',
        athleteName: athlete.name
      });
    } else {
      const docket = `REV-SAI-${Math.floor(1000 + Math.random() * 9000)}`;
      setFlaggedIds({
        ...flaggedIds,
        [athlete.id]: {
          date: new Date().toISOString().split('T')[0],
          docketNumber: docket
        }
      });
      setNotificationToast({
        message: `Docket ${docket} submitted to State Sports Authority Review`,
        athleteName: athlete.name
      });
    }

    setTimeout(() => {
      setNotificationToast(null);
    }, 4000);
  };

  // Filter application - Strictly ensuring only scoutingConsentOptIn athletes exist in the dataset
  const filteredAthletes = SCOUTING_DATASET.filter((athlete) => {
    // Structural condition: Must have affirmative scouting consent opt-in
    if (!athlete.scoutingConsentOptIn) return false;

    const matchesSport = selectedSport === 'ALL' || athlete.sport === selectedSport;
    const matchesRegion = selectedRegion === 'ALL' || athlete.state === selectedRegion;
    const matchesAge = selectedAgeGroup === 'ALL' || athlete.ageCategory === selectedAgeGroup;
    const matchesSearch = 
      athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      athlete.discipline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      athlete.sourceOrg.toLowerCase().includes(searchQuery.toLowerCase()) ||
      athlete.district.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSport && matchesRegion && matchesAge && matchesSearch;
  });

  const flaggedCount = Object.keys(flaggedIds).length;

  return (
    <div id="ngo-scouting-page" className="min-h-screen bg-[#0A0A0A] text-white pt-24 pb-20">
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
            <span className="text-xs text-[#E31B23] font-bold uppercase tracking-wider">NGO Scouting View</span>
            <span className="text-[#444444]">/</span>
            <span className="text-xs text-[#888888] uppercase tracking-wider">Authorized Consumer</span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="px-2.5 py-1 bg-[#161616] border border-[#2B2B2B] text-[#CCCCCC] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
              <strong className="text-white font-mono-code">{flaggedCount}</strong> Athletes Flagged
            </span>
            <button
              onClick={() => onNavigate('authority-dashboard')}
              className="px-2.5 py-1 bg-[#E31B23]/15 hover:bg-[#E31B23]/25 text-[#E31B23] border border-[#E31B23]/30 text-xs transition-colors cursor-pointer flex items-center gap-1 font-medium"
            >
              <span>Go to Authority View</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 1. MANDATORY BANNER: RBAC & CONSENTED PROFILES ONLY (Small lock icon) */}
        <div 
          id="rbac-consent-banner"
          className="relative bg-[#0F0F0F] border-2 border-[#242424] p-5 sm:p-6 overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#E31B23]" />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#161616] border border-[#333333] flex items-center justify-center shrink-0">
                <Lock className="w-4 h-4 text-[#E31B23]" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-condensed text-xl font-bold uppercase text-white tracking-wide">
                    Consented Profiles Visibility Guarantee
                  </span>
                </div>
                <p className="text-xs text-[#999999] leading-relaxed max-w-4xl">
                  Under Section 9 of the DPDP Act 2023, only athlete profiles whose guardians have 
                  explicitly granted affirmative consent for <strong className="text-[#CCCCCC]">“National &amp; State Scouting Visibility”</strong> appear in this portal. 
                  Direct contact information remains protected until a formal trial invite is issued.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2.5 text-xs text-[#CCCCCC] bg-[#141414] px-3.5 py-2 border border-[#262626]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Consent Verified Profiles</span>
            </div>

          </div>
        </div>

        {/* Notification Toast */}
        {notificationToast && (
          <div className="p-4 bg-[#141414] border-l-4 border-l-[#E31B23] border border-[#2B2B2B] flex items-center justify-between gap-4 animate-fadeIn">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#E31B23]" />
              <div className="text-xs">
                <span className="text-white font-bold">{notificationToast.athleteName}:</span>{' '}
                <span className="text-[#CCCCCC]">{notificationToast.message}</span>
              </div>
            </div>
            <button
              onClick={() => setNotificationToast(null)}
              className="text-xs text-[#888888] hover:text-white px-2 py-1"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* 2. PILL FILTER BAR AT TOP */}
        <div id="scouting-filter-bar" className="bg-[#121212] border border-[#262626] p-6 space-y-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 bg-[#E31B23]" />
                <span className="text-xs uppercase tracking-widest text-[#E31B23] font-bold">
                  Talent Search Filters
                </span>
              </div>
              <h2 className="font-condensed text-2xl sm:text-3xl font-black uppercase tracking-wide text-white">
                Filter High-Performance Youth Athletes
              </h2>
            </div>

            {/* Keyword Search */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-[#666666]" />
              <input
                type="text"
                placeholder="Search athlete, sport, or school..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0A0A0A] border border-[#2E2E2E] focus:border-[#E31B23] text-white pl-9 pr-3.5 py-2 text-xs focus:outline-none"
              />
            </div>
          </div>

          {/* Pill Filters Grid */}
          <div className="space-y-4 pt-4 border-t border-[#1E1E1E]">
            {/* Sport Pill Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-xs uppercase font-medium text-[#888888] w-24 shrink-0">
                Sport:
              </span>
              <div className="flex flex-wrap gap-2">
                {sports.map((sport) => {
                  const isActive = selectedSport === sport;
                  return (
                    <button
                      key={sport}
                      id={`filter-sport-${sport.toLowerCase()}`}
                      onClick={() => setSelectedSport(sport)}
                      className={`px-3 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#E31B23] text-white shadow-md shadow-[#E31B23]/25 border border-[#E31B23]'
                          : 'bg-[#181818] text-[#999999] hover:text-white border border-[#2B2B2B] hover:border-[#444444]'
                      }`}
                    >
                      {sport === 'ALL' ? 'All Sports' : sport}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Region/District Pill Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-xs uppercase font-medium text-[#888888] w-24 shrink-0">
                Region:
              </span>
              <div className="flex flex-wrap gap-2">
                {regions.map((region) => {
                  const isActive = selectedRegion === region;
                  return (
                    <button
                      key={region}
                      id={`filter-region-${region.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => setSelectedRegion(region)}
                      className={`px-3 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#E31B23] text-white shadow-md shadow-[#E31B23]/25 border border-[#E31B23]'
                          : 'bg-[#181818] text-[#999999] hover:text-white border border-[#2B2B2B] hover:border-[#444444]'
                      }`}
                    >
                      {region === 'ALL' ? 'All Regions' : region}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Age Group Pill Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-xs uppercase font-medium text-[#888888] w-24 shrink-0">
                Age Group:
              </span>
              <div className="flex flex-wrap gap-2">
                {ageGroups.map((ageGroup) => {
                  const isActive = selectedAgeGroup === ageGroup;
                  return (
                    <button
                      key={ageGroup}
                      id={`filter-age-${ageGroup.toLowerCase()}`}
                      onClick={() => setSelectedAgeGroup(ageGroup)}
                      className={`px-3 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#E31B23] text-white shadow-md shadow-[#E31B23]/25 border border-[#E31B23]'
                          : 'bg-[#181818] text-[#999999] hover:text-white border border-[#2B2B2B] hover:border-[#444444]'
                      }`}
                    >
                      {ageGroup === 'ALL' ? 'All Age Groups' : ageGroup}
                    </button>
                  );
                })}

                {(selectedSport !== 'ALL' || selectedRegion !== 'ALL' || selectedAgeGroup !== 'ALL' || searchQuery) && (
                  <button
                    onClick={() => {
                      setSelectedSport('ALL');
                      setSelectedRegion('ALL');
                      setSelectedAgeGroup('ALL');
                      setSearchQuery('');
                    }}
                    className="ml-auto text-xs font-mono-code text-[#888888] hover:text-[#E31B23] flex items-center gap-1 cursor-pointer py-1 px-2 hover:bg-[#1C1C1C]"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Clear All Filters</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Results Counter Bar */}
        <div className="flex items-center justify-between text-xs font-mono-code text-[#777777] px-1">
          <div className="flex items-center gap-2">
            <span>SHOWING</span>
            <strong className="text-white font-mono-code">{filteredAthletes.length}</strong>
            <span>PRE-QUALIFIED CONSENTED ATHLETE CARDS</span>
          </div>
          <div className="flex items-center gap-3">
            <span>SORTED BY NATIONAL PERCENTILE RANK</span>
          </div>
        </div>

        {/* 3. GRID OF ATHLETE CARDS (Like Player Cards / Rating Badges) */}
        <div 
          id="athlete-player-cards-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredAthletes.length === 0 ? (
            <div className="col-span-full py-16 bg-[#121212] border border-[#242424] text-center space-y-3">
              <AlertCircle className="w-8 h-8 text-[#E31B23] mx-auto" />
              <h3 className="font-condensed text-2xl uppercase font-bold text-white">
                No Athlete Profiles Matched This Query
              </h3>
              <p className="text-xs font-mono-code text-[#888888] max-w-md mx-auto">
                Try widening your sport, region, or age group pill filters, or clear search queries.
              </p>
            </div>
          ) : (
            filteredAthletes.map((athlete) => {
              const isFlagged = Boolean(flaggedIds[athlete.id]);
              const flagInfo = flaggedIds[athlete.id];

              return (
                <div
                  key={athlete.id}
                  id={`athlete-card-${athlete.id}`}
                  className={`relative bg-[#121212] border-2 transition-all duration-200 flex flex-col justify-between group overflow-hidden ${
                    isFlagged
                      ? 'border-[#E31B23] bg-[#140D0E] shadow-xl shadow-[#E31B23]/10'
                      : 'border-[#262626] hover:border-[#E31B23]/70 hover:bg-[#141414]'
                  }`}
                >
                  {/* Top Red Accent Stripe (Sports card header) */}
                  <div className={`h-1 w-full ${isFlagged ? 'bg-[#E31B23]' : 'bg-[#222222] group-hover:bg-[#E31B23]'}`} />

                  {/* Card Main Body */}
                  <div className="p-6 space-y-5">
                    
                    {/* Top Identity & Badge Line */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-condensed text-xs font-bold text-[#E31B23] tracking-widest uppercase">
                            #{athlete.bib} • {athlete.sport}
                          </span>
                          <span className="text-[#444444]">|</span>
                          <span className="text-[11px] font-mono-code text-[#888888]">
                            {athlete.ageCategory} ({athlete.age} YRS)
                          </span>
                        </div>
                        <h3 className="font-condensed text-2xl sm:text-3xl font-black uppercase tracking-tight text-white group-hover:text-[#E31B23] transition-colors">
                          {athlete.name}
                        </h3>
                      </div>

                      {/* Percentile Rank Mini Badge */}
                      <div className="bg-[#1A1A1A] border border-[#2F2F2F] px-2.5 py-1 text-center shrink-0">
                        <span className="block text-[9px] font-mono-code text-[#777777] uppercase">RANK</span>
                        <span className="font-condensed text-sm font-black text-white">TOP {100 - athlete.percentile}%</span>
                      </div>
                    </div>

                    {/* KEY STAT HIGHLIGHTED BIG AND BOLD (PLAYER RATING BADGE STYLE) */}
                    <div className="relative bg-[#0A0A0A] border-2 border-[#242424] p-4 flex items-center justify-between gap-4 overflow-hidden">
                      {/* Diagonal watermark pattern */}
                      <div className="absolute right-0 top-0 text-[#151515] font-condensed text-7xl font-black italic select-none pointer-events-none -mr-4 -mt-2">
                        {athlete.sport.slice(0, 3).toUpperCase()}
                      </div>

                      <div className="relative z-10">
                        <span className="text-[10px] font-mono-code text-[#888888] uppercase tracking-wider block">
                          BENCHMARK METRIC // {athlete.keyStatLabel}
                        </span>
                        <div className="flex items-baseline gap-1 mt-0.5">
                          <span className="font-condensed text-4xl sm:text-5xl font-black text-white tracking-tight">
                            {athlete.keyStatValue}
                          </span>
                          <span className="font-mono-code text-sm font-bold text-[#E31B23]">
                            {athlete.keyStatUnit}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono-code text-[#666666] block">
                          Event: {athlete.discipline}
                        </span>
                      </div>

                      {/* Shield Rating Emblem */}
                      <div className="relative z-10 w-14 h-14 bg-[#141414] border-2 border-[#E31B23] flex flex-col items-center justify-center shrink-0 shadow-lg">
                        <span className="text-[9px] font-mono-code text-[#E31B23] font-bold">RATING</span>
                        <span className="font-condensed text-xl font-black text-white leading-none">
                          {athlete.percentile}
                        </span>
                      </div>
                    </div>

                    {/* Source School / Grassroots NGO and District */}
                    <div className="space-y-2 text-xs font-mono-code border-t border-[#1F1F1F] pt-3">
                      <div className="flex items-start gap-2">
                        <Building2 className="w-3.5 h-3.5 text-[#E31B23] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[#AAAAAA] block">Source Organization:</span>
                          <span className="text-white font-bold">{athlete.sourceOrg}</span>
                          <span className="text-[10px] text-[#777777] block">
                            {athlete.district}, {athlete.state} • {athlete.orgType}
                          </span>
                        </div>
                      </div>

                      {/* Consent Scope details */}
                      <div className="p-2 bg-[#0D0D0D] border border-[#1A1A1A] flex items-center justify-between text-[10px]">
                        <span className="text-[#888888] flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-emerald-400" />
                          <span>Scope: {athlete.consentScope}</span>
                        </span>
                        <span className="text-[#555555]">{athlete.consentTimestamp}</span>
                      </div>
                    </div>

                    {/* Flagged Status Feedback if already flagged */}
                    {isFlagged && flagInfo && (
                      <div className="p-2.5 bg-[#210D0F] border border-[#E31B23]/50 flex items-center justify-between text-xs font-mono-code">
                        <div className="flex items-center gap-2 text-white">
                          <CheckCircle2 className="w-4 h-4 text-[#E31B23]" />
                          <span>DOCKET: {flagInfo.docketNumber}</span>
                        </div>
                        <span className="text-[10px] text-[#A08888]">{flagInfo.date}</span>
                      </div>
                    )}

                  </div>

                  {/* Card Bottom CTA: Flag for State Review button (red) */}
                  <div className="p-4 bg-[#0E0E0E] border-t border-[#202020]">
                    <button
                      id={`flag-athlete-btn-${athlete.id}`}
                      onClick={() => handleToggleFlag(athlete)}
                      className={`w-full py-2.5 px-4 font-condensed font-black uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isFlagged
                          ? 'bg-[#1F1F1F] hover:bg-[#282828] text-[#CCCCCC] border border-[#444444]'
                          : 'bg-[#E31B23] hover:bg-[#C9131A] text-white active:scale-98 shadow-md shadow-[#E31B23]/25'
                      }`}
                    >
                      <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'text-[#E31B23]' : 'text-white'}`} />
                      <span>{isFlagged ? 'Remove From Review Queue' : 'Flag for State Review'}</span>
                    </button>
                  </div>

                </div>
              );
            })
          )}
        </div>

        {/* Bottom Review Queue Sync Box */}
        <div className="bg-[#121212] border-2 border-[#242424] p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-condensed text-2xl font-black uppercase text-white tracking-wide">
              {flaggedCount} Athlete Dossiers In State Assessment Pipeline
            </h4>
            <p className="text-xs font-mono-code text-[#888888]">
              Flagged athletes are transmitted to State Sports Authority Directors with biometric verification and anti-doping clearance prerequisites.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('authority-dashboard')}
              className="px-6 py-3 bg-[#E31B23] hover:bg-[#C9131A] text-white font-condensed font-black uppercase tracking-wider text-sm flex items-center gap-2 transition-colors cursor-pointer shadow-lg shadow-[#E31B23]/25"
            >
              <span>View Coach / Authority Dashboard</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
