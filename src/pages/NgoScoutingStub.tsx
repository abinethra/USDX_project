import React, { useState } from 'react';
import { 
  ScanEye, 
  Search, 
  Filter, 
  Lock, 
  ShieldCheck, 
  ArrowLeft, 
  ArrowRight,
  TrendingUp, 
  SlidersHorizontal,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';
import { RoutePage } from '../types';

interface ScreenProps {
  onNavigate: (page: RoutePage) => void;
}

export const NgoScoutingStub: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [selectedSport, setSelectedSport] = useState('Athletics / Sprint');
  const [maxSprintTime, setMaxSprintTime] = useState(4.2);
  const [consentRequestedId, setConsentRequestedId] = useState<string | null>(null);

  const mockTalent = [
    {
      id: 'ATH-IN-0829',
      age: 14,
      gender: 'M',
      district: 'Patiala, Punjab',
      schoolCode: 'PB-SCH-401',
      sprint30m: 4.02,
      verticalJump: 54,
      beepTest: 'Level 12.3',
      consentStatus: 'PRE-AUTHORIZED FOR KHELO SCOUT',
      guardianConsent: true
    },
    {
      id: 'ATH-IN-1142',
      age: 13,
      gender: 'F',
      district: 'Ranchi, Jharkhand',
      schoolCode: 'JH-SCH-112',
      sprint30m: 4.15,
      verticalJump: 49,
      beepTest: 'Level 11.8',
      consentStatus: 'PRE-AUTHORIZED FOR KHELO SCOUT',
      guardianConsent: true
    },
    {
      id: 'ATH-IN-2294',
      age: 15,
      gender: 'M',
      district: 'Rohtak, Haryana',
      schoolCode: 'HR-SCH-909',
      sprint30m: 3.91,
      verticalJump: 62,
      beepTest: 'Level 13.6',
      consentStatus: 'SCOPE RESTRICTED // REQUIRES OTP',
      guardianConsent: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb & Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#222222] mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('home')}
              className="px-3 py-1 bg-[#141414] hover:bg-[#1E1E1E] text-[#A0A0A0] hover:text-white border border-[#282828] font-mono-code text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>EXIT TO HOME</span>
            </button>
            <span className="text-[#444444]">/</span>
            <span className="font-mono-code text-xs text-[#E31B23] font-bold">DEMO SCREEN 02 OF 05</span>
            <span className="text-[#444444]">/</span>
            <span className="font-mono-code text-xs text-[#888888]">DATA CONSUMER (FIU)</span>
          </div>

          <div className="flex items-center gap-3 font-mono-code text-xs text-[#888888]">
            <span className="inline-flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              SCOUT CREDENTIALS: OGQ / FOUNDATION #712
            </span>
            <span className="text-[#333333]">|</span>
            <span>TOKEN: MTLS-ACTIVE</span>
          </div>
        </div>

        {/* Screen Title Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <div className="lg:col-span-8 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#E31B23]" />
              <span className="text-xs font-mono-code uppercase tracking-widest text-[#E31B23] font-bold">
                CONSUMER DISCOVERY PORTAL // CONSENT-GATED QUERY
              </span>
            </div>
            <h1 className="font-condensed text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
              NGO SCOUTING VIEW
            </h1>
            <p className="text-sm sm:text-base text-[#A0A0A0] max-w-3xl leading-relaxed">
              Certified talent scouts and grassroots foundations query anonymized federated records. 
              Direct athlete contact details remain locked until guardians approve a specific trial invitation.
            </p>
          </div>

          {/* Quick Consumer Stat */}
          <div className="lg:col-span-4 bg-[#121212] border border-[#262626] p-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#1E1E1E]">
              <span className="text-[10px] font-mono-code text-[#888888] uppercase">FIU QUERY QUOTA</span>
              <span className="text-xs font-mono-code text-[#E31B23] font-bold">TIER 1 CERTIFIED</span>
            </div>
            <div className="mt-2 space-y-1 text-xs font-mono-code">
              <div className="flex justify-between text-[#CCCCCC]">
                <span>ORGANIZATION:</span>
                <span className="text-white font-bold">Grassroots Track Foundation</span>
              </div>
              <div className="flex justify-between text-[#888888]">
                <span>SANCTIONED PURPOSE:</span>
                <span>U-15 National Camp Scouting</span>
              </div>
              <div className="flex justify-between text-[#888888]">
                <span>EXPIRY:</span>
                <span className="text-emerald-400">30 DAYS REMAINING</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls & Scouting Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Filter Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#121212] border border-[#262626] p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#1E1E1E]">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#E31B23]" />
                  <h4 className="font-condensed text-xl font-bold uppercase text-white">
                    Talent Telemetry Filters
                  </h4>
                </div>
                <span className="text-[10px] font-mono-code text-[#888888]">USDX FILTER ENGINE</span>
              </div>

              <div>
                <label className="text-xs font-mono-code text-[#AAAAAA] uppercase block mb-1.5">
                  DISCIPLINE / SPORT
                </label>
                <select
                  value={selectedSport}
                  onChange={(e) => setSelectedSport(e.target.value)}
                  className="w-full bg-[#0E0E0E] border border-[#2C2C2C] text-white text-xs font-mono-code p-2.5 focus:border-[#E31B23] focus:outline-none"
                >
                  <option>Athletics / Sprint</option>
                  <option>Football / Midfield Aerobic</option>
                  <option>Basketball / Vertical Leap</option>
                  <option>Field Hockey / Agility</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono-code mb-1.5">
                  <span className="text-[#AAAAAA]">MAX 30m SPRINT TIME:</span>
                  <span className="text-[#E31B23] font-bold">&le; {maxSprintTime}s</span>
                </div>
                <input
                  type="range"
                  min="3.8"
                  max="4.6"
                  step="0.05"
                  value={maxSprintTime}
                  onChange={(e) => setMaxSprintTime(parseFloat(e.target.value))}
                  className="w-full accent-[#E31B23] cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs font-mono-code text-[#AAAAAA] uppercase block mb-1.5">
                  AGE BRACKET
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs font-mono-code">
                  <button className="py-2 bg-[#E31B23] text-white font-bold border border-[#E31B23]">U-14</button>
                  <button className="py-2 bg-[#171717] text-[#CCCCCC] hover:text-white border border-[#2C2C2C]">U-17</button>
                  <button className="py-2 bg-[#171717] text-[#CCCCCC] hover:text-white border border-[#2C2C2C]">U-19</button>
                </div>
              </div>

              <div className="pt-2 border-t border-[#1C1C1C]">
                <button className="w-full py-3 bg-[#1B1B1B] hover:bg-[#252525] text-white font-condensed font-bold uppercase tracking-wider text-sm border border-[#333333] transition-colors flex items-center justify-center gap-2 cursor-pointer">
                  <Search className="w-4 h-4 text-[#E31B23]" />
                  <span>Execute Federated Query</span>
                </button>
              </div>
            </div>

            {/* Quick Navigation Card */}
            <div className="bg-[#121212] border border-[#242424] p-5 space-y-3">
              <span className="text-[10px] font-mono-code text-[#888888] uppercase">RELATED SCREENS</span>
              <button
                onClick={() => onNavigate('authority-dashboard')}
                className="w-full py-2.5 bg-[#171717] hover:bg-[#E31B23] text-white font-condensed font-bold uppercase tracking-wider text-xs border border-[#2C2C2C] hover:border-[#E31B23] transition-colors flex items-center justify-between px-3 cursor-pointer"
              >
                <span>03. Coach & Authority Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('guardian-consent')}
                className="w-full py-2.5 bg-[#171717] hover:bg-[#E31B23] text-white font-condensed font-bold uppercase tracking-wider text-xs border border-[#2C2C2C] hover:border-[#E31B23] transition-colors flex items-center justify-between px-3 cursor-pointer"
              >
                <span>04. Guardian Consent Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Talent Benchmarks Result Cards */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#222222]">
              <span className="font-condensed text-xl font-bold uppercase text-white">
                Federated Results ({mockTalent.length} Matching Profiles)
              </span>
              <span className="text-xs font-mono-code text-[#E31B23]">
                PRIVACY: ANONYMIZED UNTIL CONSENT
              </span>
            </div>

            {mockTalent.map((athlete) => (
              <div
                key={athlete.id}
                className="bg-[#121212] border border-[#242424] hover:border-[#E31B23] p-6 transition-all relative"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4 pb-3 border-b border-[#1E1E1E]">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-condensed text-2xl font-black uppercase text-white">
                        {athlete.id}
                      </span>
                      <span className="px-2 py-0.5 bg-[#1C1C1C] border border-[#2B2B2B] text-[10px] font-mono-code text-[#CCCCCC]">
                        AGE {athlete.age} // {athlete.gender}
                      </span>
                    </div>
                    <span className="text-xs font-mono-code text-[#888888]">
                      DISTRICT: {athlete.district} | PROVIDER: {athlete.schoolCode}
                    </span>
                  </div>

                  <div>
                    {athlete.guardianConsent ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono-code text-xs">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        PRE-APPROVED SCOUTING
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-950/80 border border-amber-500/40 text-amber-400 font-mono-code text-xs">
                        <Lock className="w-3.5 h-3.5" />
                        RESTRICTED // REQUIRES OTP
                      </span>
                    )}
                  </div>
                </div>

                {/* Benchmark Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 my-4">
                  <div className="bg-[#0D0D0D] p-3 border border-[#1C1C1C]">
                    <span className="text-[10px] font-mono-code text-[#888888] uppercase block">30m SPRINT</span>
                    <span className="font-condensed text-3xl font-black text-[#E31B23]">
                      {athlete.sprint30m}s
                    </span>
                    <span className="text-[10px] font-mono-code text-emerald-400 block mt-0.5">Top 2% National</span>
                  </div>
                  <div className="bg-[#0D0D0D] p-3 border border-[#1C1C1C]">
                    <span className="text-[10px] font-mono-code text-[#888888] uppercase block">VERTICAL JUMP</span>
                    <span className="font-condensed text-3xl font-black text-white">
                      {athlete.verticalJump} cm
                    </span>
                    <span className="text-[10px] font-mono-code text-[#888888] block mt-0.5">Contact Mat Verified</span>
                  </div>
                  <div className="bg-[#0D0D0D] p-3 border border-[#1C1C1C]">
                    <span className="text-[10px] font-mono-code text-[#888888] uppercase block">AEROBIC ENDURANCE</span>
                    <span className="font-condensed text-3xl font-black text-white">
                      {athlete.beepTest}
                    </span>
                    <span className="text-[10px] font-mono-code text-[#888888] block mt-0.5">Beep Audio Test</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#1C1C1C]">
                  <span className="text-xs font-mono-code text-[#666666]">
                    DATA FEDERATED DIRECT FROM SCHOOL REPO
                  </span>
                  
                  {athlete.guardianConsent ? (
                    <button
                      onClick={() => alert(`Unlocked official profile for ${athlete.id}. Trial invitation dispatched via USDX consent token.`)}
                      className="px-4 py-2 bg-[#E31B23] hover:bg-[#C9131A] text-white font-condensed font-bold uppercase tracking-wider text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Issue Trial Camp Invite</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setConsentRequestedId(athlete.id);
                        setTimeout(() => {
                          alert(`Consent request dispatched to parent of ${athlete.id} via DigiLocker SMS OTP.`);
                        }, 300);
                      }}
                      className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#262626] text-white font-condensed font-bold uppercase tracking-wider text-xs border border-[#333333] flex items-center gap-1.5 cursor-pointer"
                    >
                      <Lock className="w-3.5 h-3.5 text-[#E31B23]" />
                      <span>Request Guardian Consent (OTP)</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
