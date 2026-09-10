import React, { useState } from 'react';
import { 
  FileText, 
  ShieldCheck, 
  Lock, 
  ArrowLeft, 
  ArrowRight,
  RefreshCw, 
  Download, 
  Search, 
  Key, 
  CheckCircle2, 
  Terminal,
  Filter
} from 'lucide-react';
import { RoutePage } from '../types';

interface ScreenProps {
  onNavigate: (page: RoutePage) => void;
}

export const AuditLogStub: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [filterType, setFilterType] = useState('ALL');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifiedChain, setVerifiedChain] = useState(false);

  const auditEvents = [
    {
      id: 'TXN-98412-A',
      timestamp: '2026-09-10 07:44:12 IST',
      event: 'CONSENT_GRANTED_OTP',
      actor: 'GUARDIAN: +91 98*** **410',
      subject: 'ATHLETE: IND-DL-9014',
      consumer: 'OLYMPIC_GOLD_QUEST',
      fields: 'SPRINT_30M, V_JUMP',
      merkleHash: '0x8f3c4019a2e6db9a812e',
      status: 'VERIFIED'
    },
    {
      id: 'TXN-98411-B',
      timestamp: '2026-09-10 07:38:05 IST',
      event: 'DATA_DISCLOSED_MTLS',
      actor: 'GATEWAY_ROUTER_02',
      subject: 'ATHLETE: IND-DL-9014',
      consumer: 'OLYMPIC_GOLD_QUEST',
      fields: '30M_SPRINT (4.02s)',
      merkleHash: '0x14a90cd43ef190bc1284',
      status: 'VERIFIED'
    },
    {
      id: 'TXN-98410-C',
      timestamp: '2026-09-10 07:22:50 IST',
      event: 'BULK_INGEST_SIGN',
      actor: 'FIP: GOVT_SR_SEC_DELHI',
      subject: '142 ATHLETE BENCHMARKS',
      consumer: 'USDX_INTERNAL_VAULT',
      fields: 'UDISE_MAPPING_VERIFIED',
      merkleHash: '0xfe7719ab4820dc558019',
      status: 'VERIFIED'
    },
    {
      id: 'TXN-98409-D',
      timestamp: '2026-09-10 06:55:18 IST',
      event: 'CONSENT_REVOKED',
      actor: 'GUARDIAN: +91 94*** **882',
      subject: 'ATHLETE: IND-HR-4401',
      consumer: 'PRIVATE_ACADEMY_PUNJAB',
      fields: 'ALL_SCOUTING_FIELDS',
      merkleHash: '0x4492de1088ffab337091',
      status: 'REVOKED'
    },
    {
      id: 'TXN-98408-E',
      timestamp: '2026-09-10 06:14:02 IST',
      event: 'UNAUTHORIZED_QUERY_BLOCKED',
      actor: 'GATEWAY_FIREWALL',
      subject: 'ATHLETE: IND-KA-3011',
      consumer: 'UNVERIFIED_AGENT_77',
      fields: 'BLOCKED_BY_POLICY_RBAC',
      merkleHash: '0x99a1bc2498fced012399',
      status: 'BLOCKED'
    }
  ];

  const handleVerifyChain = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerifiedChain(true);
    }, 800);
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
            <span className="font-mono-code text-xs text-[#E31B23] font-bold">DEMO SCREEN 05 OF 05</span>
            <span className="text-[#444444]">/</span>
            <span className="font-mono-code text-xs text-[#888888]">REGULATORY AUDIT</span>
          </div>

          <div className="flex items-center gap-3 font-mono-code text-xs text-[#888888]">
            <span className="inline-flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              MERKLE CHAIN: VALID & SYNCHRONIZED
            </span>
            <span className="text-[#333333]">|</span>
            <span>SHA-256 LEDGER BLOCK #491,208</span>
          </div>
        </div>

        {/* Screen Title Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <div className="lg:col-span-8 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#E31B23]" />
              <span className="text-xs font-mono-code uppercase tracking-widest text-[#E31B23] font-bold">
                NON-REPUDIATION ENGINE // COMPLIANCE LEDGER
              </span>
            </div>
            <h1 className="font-condensed text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
              CRYPTOGRAPHIC AUDIT LOG
            </h1>
            <p className="text-sm sm:text-base text-[#A0A0A0] max-w-3xl leading-relaxed">
              Every data request, guardian consent authorization, disclosure packet, and permission revocation 
              is hashed into an immutable cryptographic ledger. Guarantees full auditability under India&apos;s DPDP Act 2023.
            </p>
          </div>

          {/* Quick Ledger Action Card */}
          <div className="lg:col-span-4 bg-[#121212] border border-[#262626] p-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#1E1E1E]">
              <span className="text-[10px] font-mono-code text-[#888888] uppercase">INTEGRITY CHECK</span>
              <span className="text-xs font-mono-code text-emerald-400 font-bold">ZERO TAMPERING</span>
            </div>
            <div className="mt-3 space-y-2">
              <button
                onClick={handleVerifyChain}
                disabled={isVerifying}
                className="w-full py-2.5 bg-[#E31B23] hover:bg-[#C9131A] text-white font-condensed font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isVerifying ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Verifying Merkle Hashes...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Re-Verify Merkle Proof</span>
                  </>
                )}
              </button>

              {verifiedChain && (
                <div className="p-2 bg-[#0E1F12] border border-emerald-500/40 text-[10px] font-mono-code text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>All 5 blocks mathematically intact. Root hash 0x77ae... matches state authority anchor.</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Audit Filter & Action Controls */}
        <div className="bg-[#121212] border border-[#242424] p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono-code text-[#888888]">FILTER EVENT TYPE:</span>
            <div className="flex flex-wrap gap-1 text-xs font-mono-code">
              {['ALL', 'CONSENT_GRANTED_OTP', 'DATA_DISCLOSED_MTLS', 'CONSENT_REVOKED', 'UNAUTHORIZED_BLOCKED'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-3 py-1 border transition-colors cursor-pointer ${
                    filterType === type
                      ? 'bg-[#E31B23] border-[#E31B23] text-white font-bold'
                      : 'bg-[#181818] border-[#2C2C2C] text-[#888888] hover:text-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={() => alert('Exporting verifiable cryptographic proof bundle (JSON-LD + X.509 signature)...')}
            className="px-3.5 py-1.5 bg-[#181818] hover:bg-[#222222] border border-[#2F2F2F] text-white text-xs font-mono-code flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#E31B23]" />
            <span>Export Signed Ledger</span>
          </button>
        </div>

        {/* Ledger Event Table */}
        <div className="bg-[#121212] border border-[#242424] p-6 mb-8">
          <div className="flex items-center justify-between pb-4 border-b border-[#202020] mb-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#E31B23]" />
              <h3 className="font-condensed text-2xl font-black uppercase tracking-wide text-white">
                Verifiable Event Stream
              </h3>
            </div>
            <span className="text-xs font-mono-code text-[#777777]">DPDP SEC 9 COMPLIANT AUDIT LOG</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono-code">
              <thead>
                <tr className="border-b border-[#222222] text-[#888888] bg-[#0E0E0E]">
                  <th className="py-3 px-3">TXN HASH</th>
                  <th className="py-3 px-3">TIMESTAMP</th>
                  <th className="py-3 px-3">EVENT</th>
                  <th className="py-3 px-3">ACTOR & SUBJECT</th>
                  <th className="py-3 px-3">PAYLOAD / SCOPE</th>
                  <th className="py-3 px-3">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1A]">
                {auditEvents.map((evt) => (
                  <tr key={evt.id} className="hover:bg-[#161616]">
                    <td className="py-3 px-3">
                      <span className="text-white font-bold block">{evt.id}</span>
                      <span className="text-[10px] text-[#777777]">{evt.merkleHash}</span>
                    </td>
                    <td className="py-3 px-3 text-[#AAAAAA]">{evt.timestamp}</td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 text-[10px] font-bold border ${
                        evt.event.includes('BLOCKED')
                          ? 'bg-red-950/80 text-red-400 border-red-800'
                          : evt.event.includes('REVOKED')
                          ? 'bg-amber-950/80 text-amber-400 border-amber-800'
                          : 'bg-emerald-950/80 text-emerald-400 border-emerald-800'
                      }`}>
                        {evt.event}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <div className="text-white">{evt.actor}</div>
                      <div className="text-[10px] text-[#888888]">{evt.subject}</div>
                    </td>
                    <td className="py-3 px-3">
                      <div className="text-[#CCCCCC]">{evt.fields}</div>
                      <div className="text-[10px] text-[#777777]">CONSUMER: {evt.consumer}</div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        {evt.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Nav Back to Start of Demo Tour */}
        <div className="p-6 bg-[#161616] border border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-mono-code text-[#E31B23] uppercase font-bold">TOUR COMPLETED</div>
            <h4 className="font-condensed text-2xl font-black uppercase text-white mt-0.5">
              Ready to Return to Home or Revisit Any Module?
            </h4>
            <p className="text-xs text-[#888888]">
              All 5 screens share the same unified sports data infrastructure and DPDP compliance pipeline.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('school-upload')}
              className="px-4 py-2.5 bg-[#1F1F1F] hover:bg-[#2A2A2A] text-white font-condensed font-bold uppercase tracking-wider text-xs border border-[#333333] cursor-pointer"
            >
              Restart from Screen 01
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="px-6 py-2.5 bg-[#E31B23] hover:bg-[#C9131A] text-white font-condensed font-black uppercase tracking-wider text-xs flex items-center gap-1.5 cursor-pointer shadow-lg shadow-[#E31B23]/20"
            >
              <span>Back to Home</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
