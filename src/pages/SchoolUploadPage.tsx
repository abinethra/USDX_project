import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  ShieldAlert, 
  CheckCircle2, 
  Clock, 
  ArrowLeft, 
  Plus, 
  Search, 
  Filter, 
  Calendar, 
  Activity, 
  Trophy, 
  AlertTriangle,
  FileCheck2,
  Sparkles,
  ArrowUpRight,
  Info,
  Check,
  Zap,
  Users
} from 'lucide-react';
import { RoutePage } from '../types';

interface ScreenProps {
  onNavigate: (page: RoutePage) => void;
}

export interface AthleteRecord {
  id: string;
  bibNumber: string;
  name: string;
  age: number;
  gender: 'M' | 'F';
  sport: string;
  discipline: string;
  metric: string;
  unit: string;
  dateRecorded: string;
  consentStatus: 'verified' | 'pending';
  guardianName?: string;
  guardianPhone?: string;
}

const INITIAL_ATHLETES: AthleteRecord[] = [
  {
    id: 'ATH-2026-081',
    bibNumber: '09',
    name: 'Aarav Sharma',
    age: 15,
    gender: 'M',
    sport: 'Athletics',
    discipline: '100m Sprint',
    metric: '11.42',
    unit: 'sec',
    dateRecorded: '2026-09-08',
    consentStatus: 'verified',
    guardianName: 'Vikas Sharma',
    guardianPhone: '+91 98111 20419'
  },
  {
    id: 'ATH-2026-082',
    bibNumber: '14',
    name: 'Ananya Deshmukh',
    age: 14,
    gender: 'F',
    sport: 'Athletics',
    discipline: '30m Flying Sprint',
    metric: '4.08',
    unit: 'sec',
    dateRecorded: '2026-09-07',
    consentStatus: 'verified',
    guardianName: 'Pooja Deshmukh',
    guardianPhone: '+91 98220 89140'
  },
  {
    id: 'ATH-2026-083',
    bibNumber: '22',
    name: 'Gurpreet Singh Sandhu',
    age: 16,
    gender: 'M',
    sport: 'Football',
    discipline: 'Beep Test (Aerobic)',
    metric: 'Level 13.6',
    unit: 'shuttles',
    dateRecorded: '2026-09-05',
    consentStatus: 'verified',
    guardianName: 'Harjit Singh',
    guardianPhone: '+91 94170 33812'
  },
  {
    id: 'ATH-2026-084',
    bibNumber: '07',
    name: 'Rohan Kulkarni',
    age: 13,
    gender: 'M',
    sport: 'Basketball',
    discipline: 'Countermovement Vertical Jump',
    metric: '58.5',
    unit: 'cm',
    dateRecorded: '2026-09-04',
    consentStatus: 'pending',
    guardianName: 'Sanjay Kulkarni',
    guardianPhone: '+91 99234 11094'
  },
  {
    id: 'ATH-2026-085',
    bibNumber: '18',
    name: 'Meera Nambiar',
    age: 15,
    gender: 'F',
    sport: 'Swimming',
    discipline: '50m Freestyle',
    metric: '27.85',
    unit: 'sec',
    dateRecorded: '2026-09-02',
    consentStatus: 'verified',
    guardianName: 'Radha Nambiar',
    guardianPhone: '+91 97450 67123'
  },
  {
    id: 'ATH-2026-086',
    bibNumber: '31',
    name: 'Tanmay Choudhary',
    age: 14,
    gender: 'M',
    sport: 'Athletics',
    discipline: 'Long Jump',
    metric: '5.82',
    unit: 'm',
    dateRecorded: '2026-08-30',
    consentStatus: 'pending',
    guardianName: 'Ramesh Choudhary',
    guardianPhone: '+91 98109 44321'
  }
];

export const SchoolUploadPage: React.FC<ScreenProps> = ({ onNavigate }) => {
  // Saved squad records state (initialized from localStorage if present)
  const [athletes, setAthletes] = useState<AthleteRecord[]>(() => {
    try {
      const saved = localStorage.getItem('usdx_school_athletes');
      return saved ? JSON.parse(saved) : INITIAL_ATHLETES;
    } catch {
      return INITIAL_ATHLETES;
    }
  });

  // Form State
  const [studentName, setStudentName] = useState('');
  const [age, setAge] = useState<number | ''>(14);
  const [gender, setGender] = useState<'M' | 'F'>('M');
  const [sport, setSport] = useState('Athletics');
  const [discipline, setDiscipline] = useState('100m Sprint');
  const [metricValue, setMetricValue] = useState('');
  const [metricUnit, setMetricUnit] = useState('sec');
  const [dateRecorded, setDateRecorded] = useState(() => new Date().toISOString().split('T')[0]);
  const [consentObtained, setConsentObtained] = useState(false);
  const [guardianName, setGuardianName] = useState('');
  const [guardianPhone, setGuardianPhone] = useState('');

  // UI / Feedback states
  const [searchQuery, setSearchQuery] = useState('');
  const [sportFilter, setSportFilter] = useState('ALL');
  const [consentFilter, setConsentFilter] = useState<'ALL' | 'verified' | 'pending'>('ALL');
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('usdx_school_athletes', JSON.stringify(athletes));
    } catch (e) {
      console.warn('Local storage error:', e);
    }
  }, [athletes]);

  // Discipline options mapped by sport
  const disciplineOptions: Record<string, { disciplines: string[]; defaultUnit: string }> = {
    Athletics: {
      disciplines: ['100m Sprint', '30m Flying Sprint', '400m Run', '800m Run', 'Long Jump', 'High Jump', 'Shot Put (3kg/4kg)', 'Javelin Throw'],
      defaultUnit: 'sec'
    },
    Football: {
      disciplines: ['Beep Test (Aerobic)', '30m Sprint (Pace)', 'Illinois Agility Test', 'Kick Velocity', 'Yo-Yo Intermittent Recovery'],
      defaultUnit: 'Level'
    },
    Basketball: {
      disciplines: ['Countermovement Vertical Jump', 'Lane Agility Drill', '3/4 Court Sprint', 'Wingspan Reach Index'],
      defaultUnit: 'cm'
    },
    'Field Hockey': {
      disciplines: ['20m Sprint With Ball', 'Figure-8 Stickwork Time', 'Multi-Stage Fitness Test', 'Standing Broad Jump'],
      defaultUnit: 'sec'
    },
    Swimming: {
      disciplines: ['50m Freestyle', '100m Freestyle', '50m Butterfly', '50m Breaststroke', 'Kickboard 25m'],
      defaultUnit: 'sec'
    },
    Badminton: {
      disciplines: ['Court Shadow Drill (Seconds)', 'Vertical Leap Height', 'Reaction Wall Test'],
      defaultUnit: 'sec'
    }
  };

  const handleSportChange = (newSport: string) => {
    setSport(newSport);
    const config = disciplineOptions[newSport];
    if (config) {
      setDiscipline(config.disciplines[0]);
      setMetricUnit(config.defaultUnit);
    }
  };

  // Preset fast demo loader
  const handleLoadSampleData = () => {
    const samples = [
      { name: 'Kavya Pillai', age: 14, gender: 'F' as const, sport: 'Athletics', discipline: '30m Flying Sprint', metric: '4.15', unit: 'sec', guardian: 'Suresh Pillai', phone: '+91 94470 12389' },
      { name: 'Kabir Batra', age: 15, gender: 'M' as const, sport: 'Football', discipline: 'Beep Test (Aerobic)', metric: 'Level 12.8', unit: 'shuttles', guardian: 'Neeraj Batra', phone: '+91 98110 99401' },
      { name: 'Devendra Rathore', age: 16, gender: 'M' as const, sport: 'Basketball', discipline: 'Countermovement Vertical Jump', metric: '61.2', unit: 'cm', guardian: 'Bhairav Rathore', phone: '+91 94140 88210' }
    ];
    const picked = samples[Math.floor(Math.random() * samples.length)];
    setStudentName(picked.name);
    setAge(picked.age);
    setGender(picked.gender);
    setSport(picked.sport);
    setDiscipline(picked.discipline);
    setMetricValue(picked.metric);
    setMetricUnit(picked.unit);
    setGuardianName(picked.guardian);
    setGuardianPhone(picked.phone);
    setConsentObtained(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!studentName.trim() || !age || !metricValue.trim() || !consentObtained) {
      return;
    }

    const newId = `ATH-2026-${String(athletes.length + 81).padStart(3, '0')}`;
    const nextBib = String(Math.floor(Math.random() * 80) + 1).padStart(2, '0');

    const newAthlete: AthleteRecord = {
      id: newId,
      bibNumber: nextBib,
      name: studentName.trim(),
      age: Number(age),
      gender,
      sport,
      discipline,
      metric: metricValue.trim(),
      unit: metricUnit,
      dateRecorded: dateRecorded || new Date().toISOString().split('T')[0],
      consentStatus: consentObtained ? 'verified' : 'pending',
      guardianName: guardianName.trim() || 'Verified Parent',
      guardianPhone: guardianPhone.trim() || '+91 98*** *****'
    };

    setAthletes([newAthlete, ...athletes]);
    setRecentlyAddedId(newId);
    setShowSuccessToast(true);

    // Reset Form fields except sport preferences
    setStudentName('');
    setMetricValue('');
    setConsentObtained(false);
    setGuardianName('');
    setGuardianPhone('');

    setTimeout(() => {
      setShowSuccessToast(false);
    }, 4500);
  };

  // Filtered athletes for the squad stat table
  const filteredAthletes = athletes.filter((athlete) => {
    const matchesSearch = 
      athlete.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      athlete.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      athlete.discipline.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSport = sportFilter === 'ALL' || athlete.sport === sportFilter;
    const matchesConsent = consentFilter === 'ALL' || athlete.consentStatus === consentFilter;

    return matchesSearch && matchesSport && matchesConsent;
  });

  const verifiedCount = athletes.filter(a => a.consentStatus === 'verified').length;
  const pendingCount = athletes.filter(a => a.consentStatus === 'pending').length;
  const consentPercentage = Math.round((verifiedCount / (athletes.length || 1)) * 100);

  return (
    <div id="school-upload-page" className="min-h-screen bg-[#0A0A0A] text-white pt-24 pb-20">
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
            <span className="text-xs text-[#E31B23] font-bold uppercase tracking-wider">School Data Upload</span>
            <span className="text-[#444444]">/</span>
            <span className="text-xs text-[#888888] uppercase tracking-wider">Data Provider Portal</span>
          </div>

          <div className="flex items-center gap-3 text-xs text-[#888888]">
            <span className="text-[#CCCCCC]">UDISE+ Code Verified</span>
            <span className="text-[#333333]">|</span>
            <span>DPDP Act Section 9</span>
          </div>
        </div>

        {/* 1. TOP OF PAGE: SCHOOL NAME / ORG CONTEXT BAR (Team Header Banner) */}
        <div 
          id="school-team-header-banner"
          className="relative bg-[#121212] border-2 border-[#262626] overflow-hidden shadow-2xl"
        >
          {/* Sports Club Top Red Accent Line */}
          <div className="h-[3px] w-full bg-[#E31B23]" />

          {/* Background sports texture */}
          <div className="absolute inset-0 bg-sports-diagonal opacity-30 pointer-events-none" />

          <div className="relative z-10 p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* School Crest & Identity */}
            <div className="flex items-start sm:items-center gap-5">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#0A0A0A] border-2 border-[#E31B23] flex items-center justify-center shrink-0 shadow-lg">
                <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#E31B23]" />
                <span className="font-condensed text-3xl sm:text-4xl font-black italic tracking-tighter text-white">
                  DPS
                </span>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-[#E31B23]" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 bg-[#E31B23] text-white text-[10px] font-condensed font-black tracking-widest uppercase">
                    DATA PROVIDER (FIP)
                  </span>
                  <span className="px-2 py-0.5 bg-[#1C1C1C] border border-[#2E2E2E] text-[11px] text-[#AAAAAA]">
                    UDISE: 07010100101
                  </span>
                </div>

                <h1 className="font-condensed text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
                  DELHI PUBLIC SPORTS ACADEMY &amp; MODEL SR. SEC. SCHOOL
                </h1>

                <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-[#888888] mt-1">
                  <span>North Delhi Zone 04</span>
                  <span>•</span>
                  <span>CBSE &amp; Delhi Sports Board Affiliated</span>
                  <span>•</span>
                  <span className="text-[#CCCCCC]">Academic Session: 2026–27</span>
                </div>
              </div>
            </div>

            {/* School Stat Card Strip (Squad-style stat block) */}
            <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-4 gap-2.5 shrink-0">
              <div className="bg-[#0A0A0A] border border-[#242424] p-3 text-center min-w-[100px]">
                <span className="text-[10px] text-[#777777] uppercase font-medium block">TOTAL ATHLETES</span>
                <span className="font-condensed text-3xl font-black text-white">{athletes.length}</span>
                <span className="text-[10px] text-[#888888] block">In School Roster</span>
              </div>

              <div className="bg-[#0A0A0A] border border-[#242424] p-3 text-center min-w-[100px]">
                <span className="text-[10px] text-[#777777] uppercase font-medium block">CONSENT VERIFIED</span>
                <span className="font-condensed text-3xl font-black text-emerald-400">{verifiedCount}</span>
                <span className="text-[10px] text-emerald-400/80 block">Parent Approved</span>
              </div>

              <div className="bg-[#0A0A0A] border border-[#242424] p-3 text-center min-w-[100px]">
                <span className="text-[10px] text-[#777777] uppercase font-medium block">PENDING VERIFICATION</span>
                <span className="font-condensed text-3xl font-black text-amber-400">{pendingCount}</span>
                <span className="text-[10px] text-amber-400/80 block">Awaiting Parent OTP</span>
              </div>

              <div className="bg-[#0A0A0A] border border-[#242424] p-3 text-center min-w-[100px]">
                <span className="text-[10px] text-[#777777] uppercase font-medium block">COMPLIANCE RATE</span>
                <span className="font-condensed text-3xl font-black text-[#E31B23]">{consentPercentage}%</span>
                <span className="text-[10px] text-[#888888] block">DPDP Section 9</span>
              </div>
            </div>
          </div>
        </div>

        {/* Success Toast */}
        {showSuccessToast && (
          <div className="p-4 bg-[#0E1F12] border-2 border-emerald-500/60 flex items-start justify-between gap-4 animate-fadeIn">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-condensed text-lg uppercase font-bold text-white tracking-wide block">
                  Athlete Performance Record Successfully Uploaded
                </span>
                <span className="text-xs font-mono-code text-[#A0C0A8]">
                  Record encrypted and queued for consumer scouting exchange. Cryptographic receipt logged in USDX Audit Ledger.
                </span>
              </div>
            </div>
            <button 
              onClick={() => setShowSuccessToast(false)}
              className="text-xs font-mono-code text-[#A0C0A8] hover:text-white px-2 py-1"
            >
              DISMISS
            </button>
          </div>
        )}

        {/* Main Grid: Form on Top/Left, Information Guidance on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* 2. ATHLETE PERFORMANCE DATA ENTRY FORM */}
          <div className="lg:col-span-8">
            <div className="bg-[#121212] border border-[#262626] relative">
              {/* Form Title Header */}
              <div className="p-6 border-b border-[#202020] flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 bg-[#E31B23]" />
                    <span className="text-xs uppercase tracking-widest text-[#E31B23] font-bold">
                      Performance Data Entry
                    </span>
                  </div>
                  <h2 className="font-condensed text-2xl sm:text-3xl font-black uppercase tracking-wide text-white">
                    Submit Student Athlete Performance Data
                  </h2>
                </div>

                {/* Quick Auto-Fill Demo Helper */}
                <button
                  type="button"
                  id="load-sample-btn"
                  onClick={handleLoadSampleData}
                  className="px-3 py-1.5 bg-[#1A1A1A] hover:bg-[#252525] text-xs font-mono-code text-[#CCCCCC] hover:text-white border border-[#333333] hover:border-[#E31B23] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5 text-[#E31B23]" />
                  <span>Auto-Fill Sample</span>
                </button>
              </div>

              {/* The Form */}
              <form id="athlete-upload-form" onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
                
                {/* Row 1: Student Name & Age & Gender */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-6">
                    <label htmlFor="student-name-input" className="block text-xs font-mono-code uppercase text-[#AAAAAA] mb-1.5">
                      Student Athlete Full Name <span className="text-[#E31B23]">*</span>
                    </label>
                    <input
                      id="student-name-input"
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-[#2B2B2B] focus:border-[#E31B23] text-white px-3.5 py-2.5 text-sm font-sans focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="student-age-input" className="block text-xs font-mono-code uppercase text-[#AAAAAA] mb-1.5">
                      Age (Years) <span className="text-[#E31B23]">*</span>
                    </label>
                    <input
                      id="student-age-input"
                      type="number"
                      required
                      min={8}
                      max={21}
                      placeholder="14"
                      value={age}
                      onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))}
                      className="w-full bg-[#0A0A0A] border border-[#2B2B2B] focus:border-[#E31B23] text-white px-3.5 py-2.5 text-sm font-sans focus:outline-none transition-colors font-mono-code"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-xs font-mono-code uppercase text-[#AAAAAA] mb-1.5">
                      Gender Category
                    </label>
                    <div className="grid grid-cols-2 gap-1">
                      <button
                        type="button"
                        onClick={() => setGender('M')}
                        className={`py-2 text-xs font-condensed font-bold uppercase transition-colors cursor-pointer border ${
                          gender === 'M'
                            ? 'bg-[#E31B23] text-white border-[#E31B23]'
                            : 'bg-[#0A0A0A] text-[#888888] border-[#2B2B2B] hover:text-white'
                        }`}
                      >
                        Boys (M)
                      </button>
                      <button
                        type="button"
                        onClick={() => setGender('F')}
                        className={`py-2 text-xs font-condensed font-bold uppercase transition-colors cursor-pointer border ${
                          gender === 'F'
                            ? 'bg-[#E31B23] text-white border-[#E31B23]'
                            : 'bg-[#0A0A0A] text-[#888888] border-[#2B2B2B] hover:text-white'
                        }`}
                      >
                        Girls (F)
                      </button>
                    </div>
                  </div>
                </div>

                {/* Row 2: Sport & Event/Discipline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="sport-select" className="block text-xs font-mono-code uppercase text-[#AAAAAA] mb-1.5">
                      Sport Discipline <span className="text-[#E31B23]">*</span>
                    </label>
                    <select
                      id="sport-select"
                      value={sport}
                      onChange={(e) => handleSportChange(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-[#2B2B2B] focus:border-[#E31B23] text-white px-3.5 py-2.5 text-sm font-sans focus:outline-none transition-colors cursor-pointer"
                    >
                      {Object.keys(disciplineOptions).map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="discipline-select" className="block text-xs font-mono-code uppercase text-[#AAAAAA] mb-1.5">
                      Specific Event / Benchmark Test <span className="text-[#E31B23]">*</span>
                    </label>
                    <select
                      id="discipline-select"
                      value={discipline}
                      onChange={(e) => setDiscipline(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-[#2B2B2B] focus:border-[#E31B23] text-white px-3.5 py-2.5 text-sm font-sans focus:outline-none transition-colors cursor-pointer"
                    >
                      {disciplineOptions[sport]?.disciplines.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Performance Metric & Date Recorded */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-7">
                    <label htmlFor="metric-input" className="block text-xs font-mono-code uppercase text-[#AAAAAA] mb-1.5">
                      Performance Metric (Time / Distance / Score) <span className="text-[#E31B23]">*</span>
                    </label>
                    <div className="flex">
                      <input
                        id="metric-input"
                        type="text"
                        required
                        placeholder="e.g. 11.42 or Level 12.4"
                        value={metricValue}
                        onChange={(e) => setMetricValue(e.target.value)}
                        className="flex-1 bg-[#0A0A0A] border border-r-0 border-[#2B2B2B] focus:border-[#E31B23] text-white px-3.5 py-2.5 text-sm font-mono-code focus:outline-none transition-colors"
                      />
                      <select
                        id="unit-select"
                        value={metricUnit}
                        onChange={(e) => setMetricUnit(e.target.value)}
                        className="w-28 bg-[#141414] border border-[#2B2B2B] text-xs font-mono-code text-[#CCCCCC] px-2 py-2.5 focus:border-[#E31B23] focus:outline-none cursor-pointer"
                      >
                        <option value="sec">sec (time)</option>
                        <option value="min">min (time)</option>
                        <option value="m">meters (dist)</option>
                        <option value="cm">cm (height)</option>
                        <option value="Level">Level (score)</option>
                        <option value="points">points</option>
                        <option value="reps">reps</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-5">
                    <label htmlFor="date-recorded-input" className="block text-xs font-mono-code uppercase text-[#AAAAAA] mb-1.5">
                      Date Recorded <span className="text-[#E31B23]">*</span>
                    </label>
                    <input
                      id="date-recorded-input"
                      type="date"
                      required
                      value={dateRecorded}
                      onChange={(e) => setDateRecorded(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-[#2B2B2B] focus:border-[#E31B23] text-white px-3.5 py-2.5 text-sm font-mono-code focus:outline-none transition-colors cursor-pointer"
                    />
                  </div>
                </div>

                {/* Optional Guardian Details for Verification Audit */}
                <div className="pt-2 border-t border-[#1C1C1C] grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="guardian-name-input" className="block text-[11px] font-mono-code uppercase text-[#777777] mb-1">
                      Parent / Guardian Name (Optional)
                    </label>
                    <input
                      id="guardian-name-input"
                      type="text"
                      placeholder="e.g. Vikas Sharma"
                      value={guardianName}
                      onChange={(e) => setGuardianName(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-[#222222] focus:border-[#E31B23] text-white px-3 py-2 text-xs font-sans focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="guardian-phone-input" className="block text-[11px] font-mono-code uppercase text-[#777777] mb-1">
                      Guardian Phone for OTP (Optional)
                    </label>
                    <input
                      id="guardian-phone-input"
                      type="text"
                      placeholder="e.g. +91 98111 20419"
                      value={guardianPhone}
                      onChange={(e) => setGuardianPhone(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-[#222222] focus:border-[#E31B23] text-white px-3 py-2 text-xs font-mono-code focus:outline-none"
                    />
                  </div>
                </div>

                {/* REQUIRED: Parental Consent Obtained Toggle */}
                <div 
                  id="parental-consent-box"
                  className={`p-4 border transition-all ${
                    consentObtained
                      ? 'bg-[#0E1A11] border-emerald-500/50'
                      : 'bg-[#151515] border-[#333333]'
                  }`}
                >
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      id="parental-consent-toggle"
                      type="checkbox"
                      checked={consentObtained}
                      onChange={(e) => setConsentObtained(e.target.checked)}
                      className="mt-1 w-4 h-4 accent-[#E31B23] rounded-none cursor-pointer"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-condensed text-base font-bold uppercase tracking-wide text-white">
                          Parental / Legal Guardian Consent Obtained
                        </span>
                        <span className="px-1.5 py-0.2 bg-[#E31B23] text-white text-[9px] font-mono-code font-bold uppercase">
                          REQUIRED
                        </span>
                      </div>
                      <p className="text-xs text-[#999999] leading-relaxed">
                        I certify that verifiable electronic or physical consent has been executed with the parent/guardian 
                        for <strong className="text-white">Aarav / student</strong> under Section 9 of the Digital Personal Data Protection (DPDP) Act 2023. 
                        Records cannot be ingested without affirmative parental authorization.
                      </p>
                    </div>
                  </label>
                </div>

                {/* Submit Button (Disabled unless consent obtained) */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs font-mono-code text-[#777777]">
                    {!consentObtained ? (
                      <span className="text-amber-400/90 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4" />
                        Toggle parental consent to enable submission
                      </span>
                    ) : (
                      <span className="text-emerald-400 flex items-center gap-1.5">
                        <Check className="w-4 h-4" />
                        Consent compliance satisfied // Ready to commit
                      </span>
                    )}
                  </div>

                  <button
                    id="submit-athlete-btn"
                    type="submit"
                    disabled={!consentObtained || !studentName.trim() || !metricValue.trim()}
                    className={`w-full sm:w-auto px-8 py-3.5 font-condensed font-black uppercase tracking-wider text-base transition-all flex items-center justify-center gap-2.5 ${
                      consentObtained && studentName.trim() && metricValue.trim()
                        ? 'bg-[#E31B23] hover:bg-[#C9131A] text-white cursor-pointer active:scale-95 shadow-xl shadow-[#E31B23]/25 border border-[#FF3B44]/40'
                        : 'bg-[#1C1C1C] text-[#555555] border border-[#292929] cursor-not-allowed opacity-60'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                    <span>Commit Athlete Record</span>
                  </button>
                </div>

              </form>
            </div>
          </div>

          {/* Right Column: Fiduciary Guide & Quick Actions */}
          <div className="lg:col-span-4 space-y-6">
            {/* DPDP Section 9 Guidance Card */}
            <div className="bg-[#121212] border border-[#262626] p-6 space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#E31B23]" />
                <h3 className="font-condensed text-xl font-bold uppercase text-white">
                  DPDP Fiduciary Standards
                </h3>
              </div>

              <p className="text-xs text-[#8E8E8E] leading-relaxed">
                As a registered school, every athletic metric you enter is mapped to the athlete&apos;s 
                pseudonymized token. You are legally bound as a <strong className="text-white">Data Fiduciary</strong>:
              </p>

              <div className="space-y-2.5 text-xs font-mono-code text-[#AAAAAA]">
                <div className="p-2.5 bg-[#0D0D0D] border border-[#1E1E1E]">
                  <span className="text-white font-bold block mb-0.5">1. VERIFIABLE CONSENT</span>
                  <span>Consent tokens auto-synchronize with DigiLocker and SMS OTP confirmations.</span>
                </div>
                <div className="p-2.5 bg-[#0D0D0D] border border-[#1E1E1E]">
                  <span className="text-white font-bold block mb-0.5">2. PURPOSE BOUND DISCLOSURE</span>
                  <span>Scouts and NGOs only see anonymous physical telemetry until trials are scheduled.</span>
                </div>
                <div className="p-2.5 bg-[#0D0D0D] border border-[#1E1E1E]">
                  <span className="text-white font-bold block mb-0.5">3. GUARDIAN RIGHT TO REVOKE</span>
                  <span>Parents may revoke consent via the Guardian Portal, instantly purging consumer caches.</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#1C1C1C]">
                <button
                  onClick={() => onNavigate('guardian-consent')}
                  className="w-full py-2 bg-[#171717] hover:bg-[#E31B23] text-white font-condensed font-bold uppercase tracking-wider text-xs border border-[#2B2B2B] hover:border-[#E31B23] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Preview Guardian Portal View</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Next Module Quick Card */}
            <div className="bg-[#141414] border border-[#2A2A2A] p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono-code text-[#E31B23] uppercase font-bold">NEXT DEMO STEP</span>
                <span className="text-[10px] font-mono-code text-[#777777]">CONSUMER VIEW</span>
              </div>
              <h4 className="font-condensed text-xl font-bold uppercase text-white">
                Inspect NGO Scouting View
              </h4>
              <p className="text-xs text-[#888888] leading-relaxed">
                Experience how national talent scouts filter these uploaded metrics to discover track &amp; field prospects.
              </p>
              <button
                onClick={() => onNavigate('ngo-scouting')}
                className="w-full py-2.5 bg-[#E31B23] hover:bg-[#C9131A] text-white font-condensed font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Launch NGO Scouting Screen</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* 3. SQUAD STAT TABLE: LIST OF PREVIOUSLY SUBMITTED ATHLETES FOR THIS SCHOOL */}
        <div id="previously-submitted-athletes-section" className="bg-[#121212] border-2 border-[#242424]">
          {/* Table Header Strip */}
          <div className="p-6 border-b border-[#222222] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 bg-[#E31B23]" />
                <span className="text-xs uppercase tracking-widest text-[#E31B23] font-bold">
                  School Athlete Roster
                </span>
              </div>
              <h3 className="font-condensed text-3xl font-black uppercase tracking-tight text-white">
                Previously Submitted Athletes ({filteredAthletes.length} Records)
              </h3>
              <p className="text-xs text-[#888888]">
                Athletic squad list for Delhi Public Sports Academy. Hover over any row for details.
              </p>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Search Box */}
              <div className="relative min-w-[200px]">
                <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-[#666666]" />
                <input
                  type="text"
                  placeholder="Search name, ID, event..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#0A0A0A] border border-[#2C2C2C] focus:border-[#E31B23] text-white pl-8 pr-3 py-1.5 text-xs font-mono-code focus:outline-none"
                />
              </div>

              {/* Sport Filter */}
              <select
                value={sportFilter}
                onChange={(e) => setSportFilter(e.target.value)}
                className="bg-[#0A0A0A] border border-[#2C2C2C] text-xs font-mono-code text-[#CCCCCC] px-3 py-1.5 focus:border-[#E31B23] focus:outline-none cursor-pointer"
              >
                <option value="ALL">All Sports</option>
                {Object.keys(disciplineOptions).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>

              {/* Consent Filter */}
              <select
                value={consentFilter}
                onChange={(e) => setConsentFilter(e.target.value as 'ALL' | 'verified' | 'pending')}
                className="bg-[#0A0A0A] border border-[#2C2C2C] text-xs font-mono-code text-[#CCCCCC] px-3 py-1.5 focus:border-[#E31B23] focus:outline-none cursor-pointer"
              >
                <option value="ALL">All Consent</option>
                <option value="verified">Verified Only</option>
                <option value="pending">Pending Only</option>
              </select>
            </div>
          </div>

          {/* Stat Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#0E0E0E] text-[#888888] border-b border-[#222222] uppercase tracking-wider font-medium text-[11px]">
                  <th className="py-3 px-4 w-12 text-center">Bib</th>
                  <th className="py-3 px-4">Reg ID</th>
                  <th className="py-3 px-4">Student Athlete</th>
                  <th className="py-3 px-4">Age / Cat</th>
                  <th className="py-3 px-4">Sport</th>
                  <th className="py-3 px-4">Event / Discipline</th>
                  <th className="py-3 px-4 text-right">Benchmark Metric</th>
                  <th className="py-3 px-4">Date Recorded</th>
                  <th className="py-3 px-4">Consent Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1C1C1C]">
                {filteredAthletes.length === 0 ? (
                  <tr>
                    <td colSpan={10} className="py-10 text-center text-sm font-mono-code text-[#777777]">
                      No athletes found matching the current search / filter criteria.
                    </td>
                  </tr>
                ) : (
                  filteredAthletes.map((athlete) => {
                    const isRecentlyAdded = athlete.id === recentlyAddedId;

                    return (
                      <tr
                        key={athlete.id}
                        id={`athlete-row-${athlete.id}`}
                        className={`transition-all duration-150 group cursor-pointer border-l-2 ${
                          isRecentlyAdded
                            ? 'bg-[#181112] border-l-[#E31B23]'
                            : 'border-l-transparent hover:border-l-[#E31B23] hover:bg-[#161616]'
                        }`}
                      >
                        {/* Bib Number */}
                        <td className="py-3 px-4 text-center">
                          <span className="font-condensed text-base font-black text-[#555555] group-hover:text-white transition-colors">
                            #{athlete.bibNumber}
                          </span>
                        </td>

                        {/* ID */}
                        <td className="py-3 px-4 text-[#888888] group-hover:text-[#CCCCCC]">
                          {athlete.id}
                        </td>

                        {/* Name */}
                        <td className="py-3 px-4">
                          <div className="font-sans font-bold text-sm text-white group-hover:text-[#E31B23] transition-colors">
                            {athlete.name}
                          </div>
                          <div className="text-[10px] text-[#666666]">
                            Guardian: {athlete.guardianName}
                          </div>
                        </td>

                        {/* Age & Category */}
                        <td className="py-3 px-4">
                          <span className="text-[#CCCCCC]">Age {athlete.age}</span>
                          <span className="text-[10px] text-[#777777] block">
                            {athlete.age < 15 ? 'U-14' : athlete.age < 18 ? 'U-17' : 'U-19'} ({athlete.gender})
                          </span>
                        </td>

                        {/* Sport */}
                        <td className="py-3 px-4 text-[#CCCCCC]">
                          {athlete.sport}
                        </td>

                        {/* Discipline */}
                        <td className="py-3 px-4 text-white">
                          {athlete.discipline}
                        </td>

                        {/* Stat Number in Card (Bold stat styling) */}
                        <td className="py-3 px-4 text-right">
                          <span className="font-condensed text-2xl font-black text-white group-hover:text-[#E31B23] transition-colors">
                            {athlete.metric}
                          </span>
                          <span className="text-[10px] text-[#888888] ml-1">
                            {athlete.unit}
                          </span>
                        </td>

                        {/* Date */}
                        <td className="py-3 px-4 text-[#888888]">
                          {athlete.dateRecorded}
                        </td>

                        {/* Small Badge showing "Consent verified" / "Pending" with green/amber dot (keeping red for primary accents only) */}
                        <td className="py-3 px-4">
                          {athlete.consentStatus === 'verified' ? (
                            <span 
                              id={`badge-verified-${athlete.id}`}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#0D1A10] border border-emerald-500/30 text-emerald-400 font-mono-code text-[11px]"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              <span>Consent Verified</span>
                            </span>
                          ) : (
                            <span 
                              id={`badge-pending-${athlete.id}`}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1E190A] border border-amber-500/30 text-amber-400 font-mono-code text-[11px]"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                              <span>Pending Verification</span>
                            </span>
                          )}
                        </td>

                        {/* Row Action */}
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={() => {
                              const nextStatus = athlete.consentStatus === 'verified' ? 'pending' : 'verified';
                              setAthletes(athletes.map(a => a.id === athlete.id ? { ...a, consentStatus: nextStatus } : a));
                            }}
                            className="px-2 py-1 bg-[#1A1A1A] hover:bg-[#252525] text-[#AAAAAA] hover:text-white text-[10px] font-mono-code border border-[#303030] transition-colors cursor-pointer"
                            title="Toggle consent simulation status"
                          >
                            Toggle Status
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Bottom Table Bar with Summary */}
          <div className="p-4 bg-[#0D0D0D] border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono-code text-[#777777]">
            <div className="flex items-center gap-3">
              <span>ACTIVE SQUAD REGISTRY // DELHI ZONE 04</span>
              <span>•</span>
              <span className="text-white font-bold">{athletes.length} Athletes Loaded</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {verifiedCount} Verified
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                {pendingCount} Pending
              </span>
              <button
                onClick={() => {
                  if (confirm('Reset squad table back to default sample records?')) {
                    setAthletes(INITIAL_ATHLETES);
                    localStorage.removeItem('usdx_school_athletes');
                  }
                }}
                className="text-[10px] text-[#666666] hover:text-white underline cursor-pointer"
              >
                Reset Default Data
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
