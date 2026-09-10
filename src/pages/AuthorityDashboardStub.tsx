import React, { useState } from 'react';
import { 
  TrendingUp, 
  Building2, 
  Users, 
  ArrowLeft, 
  ArrowRight,
  Shield, 
  BarChart3, 
  Activity, 
  CheckCircle2, 
  Layers,
  MapPin
} from 'lucide-react';
import { RoutePage } from '../types';

interface ScreenProps {
  onNavigate: (page: RoutePage) => void;
}

export const AuthorityDashboardStub: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [selectedDistrict, setSelectedDistrict] = useState('All Districts (Punjab State)');

  const districtData = [
    { name: 'Patiala', athletes: '2,490', avgSprint: '4.11s', eliteRatio: '14.2%', topSport: 'Track & Field' },
    { name: 'Jalandhar', athletes: '3,120', avgSprint: '4.18s', eliteRatio: '16.8%', topSport: 'Field Hockey' },
    { name: 'Ludhiana', athletes: '4,050', avgSprint: '4.22s', eliteRatio: '11.5%', topSport: 'Football' },
    { name: 'Amritsar', athletes: '1,980', avgSprint: '4.15s', eliteRatio: '12.9%', topSport: 'Boxing / Agility' },
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
            <span className="font-mono-code text-xs text-[#E31B23] font-bold">DEMO SCREEN 03 OF 05</span>
            <span className="text-[#444444]">/</span>
            <span className="font-mono-code text-xs text-[#888888]">STATE SPORTS AUTHORITY</span>
          </div>

          <div className="flex items-center gap-3 font-mono-code text-xs text-[#888888]">
            <span className="inline-flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              KHELO INDIA SCHEME INTEGRATED
            </span>
            <span className="text-[#333333]">|</span>
            <span>NODE: IN-PUNJAB-SAI-01</span>
          </div>
        </div>

        {/* Screen Title Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <div className="lg:col-span-8 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#E31B23]" />
              <span className="text-xs font-mono-code uppercase tracking-widest text-[#E31B23] font-bold">
                STATE COUNCIL COCKPIT // TALENT PROGRESSION
              </span>
            </div>
            <h1 className="font-condensed text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
              COACH & AUTHORITY HUB
            </h1>
            <p className="text-sm sm:text-base text-[#A0A0A0] max-w-3xl leading-relaxed">
              District and state sports authorities track developmental velocity across youth athletes without 
              running redundant physical trials. Aggregate health, speed, and endurance indices update in real time.
            </p>
          </div>

          {/* Quick Authority Stat Strip */}
          <div className="lg:col-span-4 bg-[#121212] border border-[#262626] p-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#1E1E1E]">
              <span className="text-[10px] font-mono-code text-[#888888] uppercase">STATE PIPELINE</span>
              <span className="text-xs font-mono-code text-emerald-400 font-bold">LIVE TELEMETRY</span>
            </div>
            <div className="mt-2 space-y-1 text-xs font-mono-code">
              <div className="flex justify-between text-[#CCCCCC]">
                <span>TOTAL REGISTERED:</span>
                <span className="text-white font-bold">11,640 Athletes</span>
              </div>
              <div className="flex justify-between text-[#888888]">
                <span>PARTICIPATING SCHOOLS:</span>
                <span>384 Accredited</span>
              </div>
              <div className="flex justify-between text-[#888888]">
                <span>DUPLICATE TRIALS SAVED:</span>
                <span className="text-[#E31B23] font-bold">~8,400 Hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top 4 Sports Dashboard Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#121212] border border-[#242424] p-5">
            <div className="text-[10px] font-mono-code text-[#888888] uppercase flex items-center justify-between mb-2">
              <span>TALENT IDENTIFICATION RATIO</span>
              <Activity className="w-3.5 h-3.5 text-[#E31B23]" />
            </div>
            <div className="font-condensed text-4xl font-black text-white">13.8%</div>
            <span className="text-[11px] font-mono-code text-emerald-400 block mt-1">+3.2% vs previous quarter</span>
          </div>

          <div className="bg-[#121212] border border-[#242424] p-5">
            <div className="text-[10px] font-mono-code text-[#888888] uppercase flex items-center justify-between mb-2">
              <span>STATE SPRINT AVERAGE</span>
              <TrendingUp className="w-3.5 h-3.5 text-[#E31B23]" />
            </div>
            <div className="font-condensed text-4xl font-black text-[#E31B23]">4.14s</div>
            <span className="text-[11px] font-mono-code text-[#888888] block mt-1">U-17 Boys (30m Electronic)</span>
          </div>

          <div className="bg-[#121212] border border-[#242424] p-5">
            <div className="text-[10px] font-mono-code text-[#888888] uppercase flex items-center justify-between mb-2">
              <span>ACTIVE GUARDIAN CONSENTS</span>
              <Shield className="w-3.5 h-3.5 text-[#E31B23]" />
            </div>
            <div className="font-condensed text-4xl font-black text-white">99.1%</div>
            <span className="text-[11px] font-mono-code text-[#888888] block mt-1">DPDP Section 9 Verified</span>
          </div>

          <div className="bg-[#121212] border border-[#242424] p-5">
            <div className="text-[10px] font-mono-code text-[#888888] uppercase flex items-center justify-between mb-2">
              <span>NATIONAL CAMP CALL-UPS</span>
              <Users className="w-3.5 h-3.5 text-[#E31B23]" />
            </div>
            <div className="font-condensed text-4xl font-black text-white">128</div>
            <span className="text-[11px] font-mono-code text-emerald-400 block mt-1">SAI Khelo India Trials</span>
          </div>
        </div>

        {/* District Benchmark Table */}
        <div className="bg-[#121212] border border-[#242424] p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#202020] mb-4">
            <div>
              <h3 className="font-condensed text-2xl font-black uppercase tracking-wide text-white">
                District Benchmark Matrix
              </h3>
              <p className="text-xs font-mono-code text-[#888888]">
                Real-time talent density mapping across accredited physical education centers
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono-code text-[#888888]">REGION:</span>
              <span className="px-3 py-1 bg-[#1A1A1A] border border-[#2E2E2E] text-xs font-mono-code text-[#E31B23] font-bold">
                PUNJAB STATE (NORTH ZONE)
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono-code">
              <thead>
                <tr className="border-b border-[#222222] text-[#888888] bg-[#0E0E0E]">
                  <th className="py-3 px-4">DISTRICT</th>
                  <th className="py-3 px-4">TALENT POOL</th>
                  <th className="py-3 px-4">AVG 30m SPRINT</th>
                  <th className="py-3 px-4">HIGH-PERFORMANCE RATIO</th>
                  <th className="py-3 px-4">CORE SPORT FOCUS</th>
                  <th className="py-3 px-4">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1A]">
                {districtData.map((d) => (
                  <tr key={d.name} className="hover:bg-[#161616]">
                    <td className="py-3 px-4 text-white font-bold flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#E31B23]" />
                      <span>{d.name}</span>
                    </td>
                    <td className="py-3 px-4 text-[#CCCCCC]">{d.athletes}</td>
                    <td className="py-3 px-4 text-[#E31B23] font-bold">{d.avgSprint}</td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">{d.eliteRatio}</td>
                    <td className="py-3 px-4 text-[#A0A0A0]">{d.topSport}</td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => alert(`Pulling federated district squad roster for ${d.name}...`)}
                        className="px-2.5 py-1 bg-[#1E1E1E] hover:bg-[#E31B23] text-white text-[10px] font-condensed font-bold uppercase transition-colors cursor-pointer"
                      >
                        Inspect Squad
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Navigation Strip to Next Stubs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate('guardian-consent')}
            className="p-5 bg-[#121212] hover:bg-[#181818] border border-[#242424] hover:border-[#E31B23] text-left transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono-code text-[#E31B23] uppercase font-bold">NEXT DEMO MODULE</span>
              <ArrowRight className="w-4 h-4 text-[#555555] group-hover:text-[#E31B23] transition-colors" />
            </div>
            <div className="font-condensed text-xl font-bold uppercase text-white">
              04. Guardian Consent Portal
            </div>
            <div className="text-xs text-[#888888] mt-1">
              Review how parents grant and revoke DPDP Section 9 permissions via Aadhaar OTP.
            </div>
          </button>

          <button
            onClick={() => onNavigate('audit-log')}
            className="p-5 bg-[#121212] hover:bg-[#181818] border border-[#242424] hover:border-[#E31B23] text-left transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono-code text-[#E31B23] uppercase font-bold">NEXT DEMO MODULE</span>
              <ArrowRight className="w-4 h-4 text-[#555555] group-hover:text-[#E31B23] transition-colors" />
            </div>
            <div className="font-condensed text-xl font-bold uppercase text-white">
              05. Audit Log Ledger
            </div>
            <div className="text-xs text-[#888888] mt-1">
              Examine the cryptographic SHA-256 event trail guaranteeing non-repudiation.
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
