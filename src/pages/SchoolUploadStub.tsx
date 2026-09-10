import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  UploadCloud, 
  CheckCircle2, 
  AlertCircle, 
  ArrowLeft, 
  ArrowRight,
  Shield, 
  FileCheck, 
  RefreshCw,
  Building2,
  Users,
  Database
} from 'lucide-react';
import { RoutePage } from '../types';

interface ScreenProps {
  onNavigate: (page: RoutePage) => void;
}

export const SchoolUploadStub: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [selectedFile, setSelectedFile] = useState<string | null>('DELHI_MODEL_SENIOR_SEC_BATCH_2026.csv');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleUploadSim = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
    }, 900);
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
            <span className="font-mono-code text-xs text-[#E31B23] font-bold">DEMO SCREEN 01 OF 05</span>
            <span className="text-[#444444]">/</span>
            <span className="font-mono-code text-xs text-[#888888]">DATA FIDUCIARY (FIP)</span>
          </div>

          <div className="flex items-center gap-3 font-mono-code text-xs text-[#888888]">
            <span className="inline-flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              UDISE+ CONNECTOR READY
            </span>
            <span className="text-[#333333]">|</span>
            <span>NODE: IN-DELHI-SCH-089</span>
          </div>
        </div>

        {/* Screen Title Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <div className="lg:col-span-8 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#E31B23]" />
              <span className="text-xs font-mono-code uppercase tracking-widest text-[#E31B23] font-bold">
                PROVIDER PORTAL // INGESTION ENGINE
              </span>
            </div>
            <h1 className="font-condensed text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
              SCHOOL ATHLETE UPLOAD
            </h1>
            <p className="text-sm sm:text-base text-[#A0A0A0] max-w-3xl leading-relaxed">
              Accredited schools act as primary Data Fiduciaries in USDX. Batch-upload standardized physical fitness 
              testing records, link student profiles to verified UDISE+ IDs, and trigger guardian consent requests.
            </p>
          </div>

          {/* Quick Fiduciary Stat Strip */}
          <div className="lg:col-span-4 bg-[#121212] border border-[#262626] p-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#1E1E1E]">
              <span className="text-[10px] font-mono-code text-[#888888] uppercase">SCHOOL CREDENTIALS</span>
              <span className="text-xs font-mono-code text-[#E31B23] font-bold">VERIFIED</span>
            </div>
            <div className="mt-2 space-y-1 text-xs font-mono-code">
              <div className="flex justify-between text-[#CCCCCC]">
                <span>INSTITUTION:</span>
                <span className="text-white font-bold">Govt Sr Sec Model School</span>
              </div>
              <div className="flex justify-between text-[#888888]">
                <span>UDISE CODE:</span>
                <span>07010100101</span>
              </div>
              <div className="flex justify-between text-[#888888]">
                <span>ACTIVE COHORTS:</span>
                <span className="text-white">Under-14, Under-17 Athletics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Stub Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Upload Zone & Ingestion Pipeline */}
          <div className="lg:col-span-8 space-y-6">
            {/* Drag & Drop Upload Zone */}
            <div className="bg-[#121212] border-2 border-dashed border-[#333333] hover:border-[#E31B23] transition-colors p-8 text-center relative group">
              <div className="w-16 h-16 mx-auto bg-[#181818] border border-[#2B2B2B] flex items-center justify-center mb-4 group-hover:border-[#E31B23] transition-colors">
                <UploadCloud className="w-8 h-8 text-[#E31B23]" />
              </div>
              <h3 className="font-condensed text-2xl font-black uppercase tracking-wide text-white mb-1">
                DRAG & DROP CSV OR EXCEL BENCHMARK SHEET
              </h3>
              <p className="text-xs text-[#888888] max-w-md mx-auto mb-6">
                Requires standard columns: Student ID, UDISE+, Date of Birth, Height (cm), Weight (kg), 30m Sprint (s), Beep Test (Level), and Guardian Phone.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleUploadSim}
                  disabled={isUploading}
                  className="px-6 py-3 bg-[#E31B23] hover:bg-[#C9131A] text-white font-condensed font-black uppercase tracking-wider text-sm transition-transform active:scale-95 cursor-pointer disabled:opacity-50 flex items-center gap-2"
                >
                  {isUploading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Validating Schema & UDISE+...</span>
                    </>
                  ) : (
                    <>
                      <FileSpreadsheet className="w-4 h-4" />
                      <span>Process {selectedFile}</span>
                    </>
                  )}
                </button>
                <button 
                  onClick={() => setSelectedFile(selectedFile ? null : 'SAMPLE_KHELO_TEST_BATCH.csv')}
                  className="px-4 py-3 bg-[#181818] hover:bg-[#222222] text-white font-condensed font-bold uppercase tracking-wider text-sm border border-[#2C2C2C] cursor-pointer"
                >
                  Change Template File
                </button>
              </div>

              {uploadSuccess && (
                <div className="mt-6 p-4 bg-[#0E1F12] border border-emerald-500/40 text-left flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs font-mono-code">
                    <span className="text-emerald-400 font-bold block">SCHEMA VALIDATION PASSED // 142 RECORDS PARSED</span>
                    <span className="text-[#A0C0A8]">
                      All records mapped to USDX-ATHLETE-v1.4 schema. Ready to generate DPDP-compliant Guardian Consent tokens.
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Ingestion Preview Table Stub */}
            <div className="bg-[#121212] border border-[#242424] p-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#202020] mb-4">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#E31B23]" />
                  <h4 className="font-condensed text-xl font-bold uppercase text-white">
                    Parsed Cohort Preview (Sample 4 of 142)
                  </h4>
                </div>
                <span className="text-xs font-mono-code text-[#777777]">SCHEMA: USDX_ATHLETE_v1.4</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono-code">
                  <thead>
                    <tr className="border-b border-[#222222] text-[#888888] bg-[#0E0E0E]">
                      <th className="py-2.5 px-3">ATHLETE ID</th>
                      <th className="py-2.5 px-3">COHORT</th>
                      <th className="py-2.5 px-3">30m SPRINT</th>
                      <th className="py-2.5 px-3">VERTICAL JUMP</th>
                      <th className="py-2.5 px-3">BEEP TEST</th>
                      <th className="py-2.5 px-3">CONSENT STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1A1A1A]">
                    <tr className="hover:bg-[#161616]">
                      <td className="py-2.5 px-3 text-white font-bold">IND-DL-9014</td>
                      <td className="py-2.5 px-3 text-[#A0A0A0]">U-14 Boys</td>
                      <td className="py-2.5 px-3 text-[#E31B23] font-bold">4.12s</td>
                      <td className="py-2.5 px-3 text-[#CCCCCC]">48 cm</td>
                      <td className="py-2.5 px-3 text-[#CCCCCC]">Level 11.4</td>
                      <td className="py-2.5 px-3"><span className="px-1.5 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px]">CONSENT SIGNED</span></td>
                    </tr>
                    <tr className="hover:bg-[#161616]">
                      <td className="py-2.5 px-3 text-white font-bold">IND-DL-9015</td>
                      <td className="py-2.5 px-3 text-[#A0A0A0]">U-14 Girls</td>
                      <td className="py-2.5 px-3 text-[#E31B23] font-bold">4.35s</td>
                      <td className="py-2.5 px-3 text-[#CCCCCC]">44 cm</td>
                      <td className="py-2.5 px-3 text-[#CCCCCC]">Level 10.2</td>
                      <td className="py-2.5 px-3"><span className="px-1.5 py-0.5 bg-amber-950 text-amber-400 border border-amber-800 text-[10px]">PENDING GUARDIAN OTP</span></td>
                    </tr>
                    <tr className="hover:bg-[#161616]">
                      <td className="py-2.5 px-3 text-white font-bold">IND-DL-9016</td>
                      <td className="py-2.5 px-3 text-[#A0A0A0]">U-17 Boys</td>
                      <td className="py-2.5 px-3 text-[#E31B23] font-bold">3.98s</td>
                      <td className="py-2.5 px-3 text-[#CCCCCC]">59 cm</td>
                      <td className="py-2.5 px-3 text-[#CCCCCC]">Level 13.1</td>
                      <td className="py-2.5 px-3"><span className="px-1.5 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px]">CONSENT SIGNED</span></td>
                    </tr>
                    <tr className="hover:bg-[#161616]">
                      <td className="py-2.5 px-3 text-white font-bold">IND-DL-9017</td>
                      <td className="py-2.5 px-3 text-[#A0A0A0]">U-17 Girls</td>
                      <td className="py-2.5 px-3 text-[#E31B23] font-bold">4.22s</td>
                      <td className="py-2.5 px-3 text-[#CCCCCC]">51 cm</td>
                      <td className="py-2.5 px-3 text-[#CCCCCC]">Level 11.8</td>
                      <td className="py-2.5 px-3"><span className="px-1.5 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px]">CONSENT SIGNED</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column: Schema Controls & Flow Nav */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#121212] border border-[#262626] p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#E31B23]" />
                <h4 className="font-condensed text-xl font-bold uppercase text-white">
                  DPDP Ingestion Rules
                </h4>
              </div>
              <ul className="space-y-3 text-xs text-[#8E8E8E]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#E31B23] mt-1 shrink-0" />
                  <span>No raw government IDs stored in USDX central cache. All Aadhaar numbers tokenized via UIDAI vault.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#E31B23] mt-1 shrink-0" />
                  <span>Guardian phone numbers receive automated DigiLocker/SMS consent link with 7-day validity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#E31B23] mt-1 shrink-0" />
                  <span>Schools retain cryptographic ownership of records as accredited Data Fiduciaries.</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-[#1E1E1E]">
                <button
                  onClick={() => onNavigate('guardian-consent')}
                  className="w-full py-2.5 bg-[#171717] hover:bg-[#E31B23] text-white font-condensed font-bold uppercase tracking-wider text-xs border border-[#2B2B2B] hover:border-[#E31B23] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Go to Guardian Consent Portal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Next Screen Launcher Card */}
            <div className="bg-[#161616] border-2 border-[#E31B23]/40 p-6 space-y-3">
              <span className="text-[10px] font-mono-code text-[#E31B23] uppercase font-bold">NEXT DEMO MODULE</span>
              <h4 className="font-condensed text-2xl font-black uppercase text-white">
                02. NGO SCOUTING VIEW
              </h4>
              <p className="text-xs text-[#A0A0A0]">
                See how accredited scouts search for top sprint and jump talent while respecting guardian consent boundaries.
              </p>
              <button
                onClick={() => onNavigate('ngo-scouting')}
                className="w-full py-3 bg-[#E31B23] hover:bg-[#C9131A] text-white font-condensed font-black uppercase tracking-wider text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#E31B23]/20"
              >
                <span>Launch NGO Scouting Screen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
