import React, { useState } from 'react';
import { 
  Key, 
  ShieldCheck, 
  Lock, 
  ArrowLeft, 
  ArrowRight,
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  UserCheck, 
  Smartphone,
  Trash2,
  FileText
} from 'lucide-react';
import { RoutePage } from '../types';

interface ScreenProps {
  onNavigate: (page: RoutePage) => void;
}

export const GuardianConsentStub: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [otpInput, setOtpInput] = useState('');
  const [isAuthorizing, setIsAuthorizing] = useState(false);
  const [activeTab, setActiveTab] = useState<'pending' | 'active' | 'history'>('pending');

  const [activeConsents, setActiveConsents] = useState([
    {
      id: 'CONSENT-2026-9021',
      athleteName: 'Arjun Verma (Age 14)',
      requester: 'Olympic Gold Quest (Grassroots Division)',
      purpose: 'U-15 National Sprint Talent Selection Trial',
      fields: ['30m Sprint Time', 'Beep Test End-Score', 'Height & Reach'],
      validUntil: '2026-10-15',
      status: 'ACTIVE'
    },
    {
      id: 'CONSENT-2026-8819',
      athleteName: 'Arjun Verma (Age 14)',
      requester: 'Delhi State Athletics Association',
      purpose: 'State Inter-School Championship Entry Verification',
      fields: ['Verified Age Certificate', 'Medical Clearance'],
      validUntil: '2026-12-31',
      status: 'ACTIVE'
    }
  ]);

  const [pendingRequests, setPendingRequests] = useState([
    {
      id: 'REQ-IN-7740',
      athleteName: 'Arjun Verma (Age 14)',
      requester: 'Tata Football Academy (Scouting Unit)',
      purpose: 'Junior Academy Trial & Physical Fitness Assessment',
      fields: ['Vertical Jump', 'Agility T-Test', 'VO2 Max Estimate'],
      requestedOn: 'Today, 10:45 AM',
      expiryDays: 7
    }
  ]);

  const handleApprovePending = (reqId: string) => {
    setIsAuthorizing(true);
    setTimeout(() => {
      setIsAuthorizing(false);
      const req = pendingRequests.find(r => r.id === reqId);
      if (req) {
        setPendingRequests(pendingRequests.filter(r => r.id !== reqId));
        setActiveConsents([
          {
            id: `CONSENT-2026-${Math.floor(1000 + Math.random() * 9000)}`,
            athleteName: req.athleteName,
            requester: req.requester,
            purpose: req.purpose,
            fields: req.fields,
            validUntil: '2026-10-30',
            status: 'ACTIVE'
          },
          ...activeConsents
        ]);
        alert('DPDP Consent Artifact successfully signed via DigiLocker OTP!');
      }
    }, 800);
  };

  const handleRevoke = (consentId: string) => {
    if (confirm('Are you sure you want to revoke this consent? All consumer access to your child\'s telemetry will be immediately terminated in the USDX gateway.')) {
      setActiveConsents(activeConsents.filter(c => c.id !== consentId));
      alert('Consent Revoked. Tamper-proof revocation receipt logged in USDX Audit Ledger.');
    }
  };

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
            <span className="font-mono-code text-xs text-[#E31B23] font-bold">DEMO SCREEN 04 OF 05</span>
            <span className="text-[#444444]">/</span>
            <span className="font-mono-code text-xs text-[#888888]">GUARDIAN CONSOLE</span>
          </div>

          <div className="flex items-center gap-3 font-mono-code text-xs text-[#888888]">
            <span className="inline-flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              AADHAAR OTP BOUND: +91 98*** **410
            </span>
            <span className="text-[#333333]">|</span>
            <span>DPDP SECTION 9 ACTIVE</span>
          </div>
        </div>

        {/* Screen Title Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <div className="lg:col-span-8 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#E31B23]" />
              <span className="text-xs font-mono-code uppercase tracking-widest text-[#E31B23] font-bold">
                DPDP SECTION 9 PORTAL // VERIFIABLE PARENTAL CONSENT
              </span>
            </div>
            <h1 className="font-condensed text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
              GUARDIAN CONSENT PORTAL
            </h1>
            <p className="text-sm sm:text-base text-[#A0A0A0] max-w-3xl leading-relaxed">
              Parents and legal guardians retain sovereign control over youth sports data. 
              Review who wants to inspect your child&apos;s physical benchmarks, set exact time limits, and revoke access instantly.
            </p>
          </div>

          {/* Quick Guardian Identity Card */}
          <div className="lg:col-span-4 bg-[#121212] border border-[#262626] p-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#1E1E1E]">
              <span className="text-[10px] font-mono-code text-[#888888] uppercase">LEGAL GUARDIAN</span>
              <span className="text-xs font-mono-code text-emerald-400 font-bold">OTP VERIFIED</span>
            </div>
            <div className="mt-2 space-y-1 text-xs font-mono-code">
              <div className="flex justify-between text-[#CCCCCC]">
                <span>GUARDIAN NAME:</span>
                <span className="text-white font-bold">Rajesh Verma</span>
              </div>
              <div className="flex justify-between text-[#888888]">
                <span>DEPENDENT ATHLETE:</span>
                <span className="text-[#E31B23] font-bold">Arjun Verma (U-14)</span>
              </div>
              <div className="flex justify-between text-[#888888]">
                <span>LINKED SCHOOL:</span>
                <span>DAV Model School, ND</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Bar */}
        <div className="flex items-center gap-2 border-b border-[#222222] mb-6 font-condensed uppercase tracking-wider text-base font-bold">
          <button
            onClick={() => setActiveTab('pending')}
            className={`px-5 py-3 border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'pending'
                ? 'border-[#E31B23] text-white bg-[#121212]'
                : 'border-transparent text-[#777777] hover:text-white'
            }`}
          >
            <span>Pending Requests ({pendingRequests.length})</span>
            {pendingRequests.length > 0 && (
              <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('active')}
            className={`px-5 py-3 border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'active'
                ? 'border-[#E31B23] text-white bg-[#121212]'
                : 'border-transparent text-[#777777] hover:text-white'
            }`}
          >
            <span>Active Consents ({activeConsents.length})</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main List */}
          <div className="lg:col-span-8 space-y-4">
            {activeTab === 'pending' && (
              <>
                {pendingRequests.length === 0 ? (
                  <div className="p-12 bg-[#121212] border border-[#222222] text-center">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                    <h4 className="font-condensed text-2xl font-bold uppercase text-white">All Caught Up</h4>
                    <p className="text-xs font-mono-code text-[#777777] mt-1">No pending scouting consent requests require your approval.</p>
                  </div>
                ) : (
                  pendingRequests.map((req) => (
                    <div
                      key={req.id}
                      className="bg-[#121212] border-2 border-[#E31B23]/50 p-6 relative group"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4 pb-3 border-b border-[#1E1E1E] mb-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 bg-[#E31B23] text-white text-[10px] font-mono-code font-bold">
                              ACTION REQUIRED
                            </span>
                            <span className="font-mono-code text-xs text-[#888888]">{req.id}</span>
                          </div>
                          <h3 className="font-condensed text-2xl font-black uppercase text-white mt-1">
                            {req.requester}
                          </h3>
                        </div>

                        <div className="text-right font-mono-code text-xs text-[#888888]">
                          <span className="flex items-center gap-1 text-amber-400">
                            <Clock className="w-3.5 h-3.5" />
                            Expires in {req.expiryDays} days
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 text-xs font-mono-code">
                        <div>
                          <span className="text-[#888888] block">STATED PURPOSE:</span>
                          <span className="text-[#CCCCCC]">{req.purpose}</span>
                        </div>

                        <div>
                          <span className="text-[#888888] block mb-1">REQUESTED DATA SCOPE (FIELDS):</span>
                          <div className="flex flex-wrap gap-1.5">
                            {req.fields.map((f) => (
                              <span key={f} className="px-2 py-1 bg-[#1A1A1A] border border-[#2B2B2B] text-white">
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#1C1C1C] flex flex-wrap items-center justify-between gap-4">
                        <span className="text-[11px] font-mono-code text-[#666666]">
                          AUTHORIZED UNDER DPDP ACT 2023 SEC 9(1)
                        </span>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => {
                              setPendingRequests(pendingRequests.filter(r => r.id !== req.id));
                              alert('Request rejected. No data will be disclosed.');
                            }}
                            className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#242424] text-[#CCCCCC] hover:text-white font-condensed font-bold uppercase text-xs border border-[#333333] cursor-pointer"
                          >
                            Reject Request
                          </button>
                          <button
                            onClick={() => handleApprovePending(req.id)}
                            disabled={isAuthorizing}
                            className="px-5 py-2 bg-[#E31B23] hover:bg-[#C9131A] text-white font-condensed font-black uppercase text-xs flex items-center gap-2 cursor-pointer shadow-lg shadow-[#E31B23]/20"
                          >
                            {isAuthorizing ? (
                              <span>Signing OTP Token...</span>
                            ) : (
                              <>
                                <Key className="w-3.5 h-3.5" />
                                <span>Sign & Authorize Consent</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </>
            )}

            {activeTab === 'active' && (
              <div className="space-y-4">
                {activeConsents.map((consent) => (
                  <div
                    key={consent.id}
                    className="bg-[#121212] border border-[#242424] hover:border-[#E31B23] p-6 transition-all"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 pb-3 border-b border-[#1E1E1E] mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-mono-code font-bold">
                            {consent.status}
                          </span>
                          <span className="font-mono-code text-xs text-[#888888]">{consent.id}</span>
                        </div>
                        <h4 className="font-condensed text-2xl font-bold uppercase text-white mt-1">
                          {consent.requester}
                        </h4>
                      </div>

                      <div className="text-right font-mono-code text-xs text-[#888888]">
                        <span>VALID UNTIL: </span>
                        <span className="text-white font-bold">{consent.validUntil}</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#888888] font-mono-code mb-3">
                      PURPOSE: {consent.purpose}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {consent.fields.map((f) => (
                        <span key={f} className="px-2 py-0.5 bg-[#171717] border border-[#282828] text-[11px] font-mono-code text-[#CCCCCC]">
                          {f}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-[#1C1C1C] flex items-center justify-between">
                      <span className="text-[11px] font-mono-code text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        AUDIT RECEIPT SEALED
                      </span>

                      <button
                        onClick={() => handleRevoke(consent.id)}
                        className="px-3 py-1.5 bg-[#1C1112] hover:bg-[#E31B23] text-[#E31B23] hover:text-white border border-[#E31B23]/40 text-xs font-condensed font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Revoke Consent</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Statutory Rights Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#121212] border border-[#262626] p-6 space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E31B23]" />
                <h4 className="font-condensed text-xl font-bold uppercase text-white">
                  Guardian Legal Protections
                </h4>
              </div>

              <div className="space-y-3 text-xs text-[#8E8E8E] leading-relaxed">
                <p>
                  <strong className="text-white block font-mono-code">1. RIGHT TO REVOKE ANYTIME</strong>
                  Revoking a consent immediately instructs the USDX Gateway to reject subsequent queries from that consumer entity.
                </p>
                <p>
                  <strong className="text-white block font-mono-code">2. NO BEHAVIORAL TRACKING</strong>
                  Indian law strictly forbids consumer organizations from using youth athletic records for advertising or commercial profiling.
                </p>
                <p>
                  <strong className="text-white block font-mono-code">3. PURPOSE BOUND</strong>
                  Data shared for a 30m sprint trial cannot be transferred to insurance providers or third parties.
                </p>
              </div>

              <div className="pt-4 border-t border-[#1E1E1E]">
                <button
                  onClick={() => onNavigate('audit-log')}
                  className="w-full py-2.5 bg-[#171717] hover:bg-[#E31B23] text-white font-condensed font-bold uppercase tracking-wider text-xs border border-[#2B2B2B] hover:border-[#E31B23] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Cryptographic Audit Trail</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
