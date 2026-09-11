import React from 'react';
import { Shield, Lock, FileCheck2, ArrowRight, ExternalLink, Terminal, Activity } from 'lucide-react';
import { RoutePage } from '../types';

interface FooterProps {
  onNavigate: (page: RoutePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const demoScreens: { id: RoutePage; label: string; role: string }[] = [
    { id: 'school-upload', label: 'School Upload', role: 'Data Fiduciary / Provider' },
    { id: 'ngo-scouting', label: 'NGO Scouting View', role: 'Data Consumer / Scout' },
    { id: 'authority-dashboard', label: 'Coach / Sports Authority', role: 'State / SAI Pipeline' },
    { id: 'guardian-consent', label: 'Guardian Consent Portal', role: 'Parental DPDP Authorization' },
    { id: 'audit-log', label: 'Audit Log Ledger', role: 'Immutable Cryptographic Trail' },
  ];

  return (
    <footer id="main-footer" className="bg-[#0A0A0A] border-t border-[#222222] text-[#A0A0A0] relative overflow-hidden">
      {/* Subtle top red accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E31B23] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1 & 2: Platform Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#121212] border border-[#E31B23] flex items-center justify-center">
                <span className="font-condensed text-xl font-black italic tracking-tighter text-white">
                  U
                </span>
              </div>
              <div>
                <span className="font-condensed text-2xl font-black tracking-wider text-white">
                  USDX
                </span>
                <span className="block text-xs uppercase font-mono-code text-[#E31B23]">
                  Unified Sports Data Exchange
                </span>
              </div>
            </div>

            <p className="text-sm text-[#8E8E8E] leading-relaxed max-w-sm">
              India&apos;s federated digital public infrastructure for youth sports talent. 
              Connecting schools, grassroot NGOs, state sports authorities, and certified scouts 
              through verifiable electronic consent.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#141414] border border-[#262626] text-xs text-[#C0C0C0]">
                <Shield className="w-3.5 h-3.5 text-[#E31B23]" />
                DPDP Act 2023 Compliant
              </span>
            </div>
          </div>

          {/* Col 3: 5 Demo Screens Nav */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#E31B23]"></span>
              <h4 className="font-condensed text-lg uppercase font-bold tracking-wider text-white">
                Interactive Demo Screens
              </h4>
            </div>
            <ul id="footer-demo-links" className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {demoScreens.map((screen) => (
                <li key={screen.id}>
                  <button
                    id={`footer-btn-${screen.id}`}
                    onClick={() => {
                      onNavigate(screen.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full text-left p-2.5 bg-[#111111] hover:bg-[#181818] border border-[#222222] hover:border-[#E31B23] transition-all group cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-condensed text-sm font-bold uppercase tracking-wider text-white group-hover:text-[#E31B23] transition-colors">
                        {screen.label}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#555555] group-hover:text-[#E31B23] group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <span className="text-[11px] text-[#777777] block mt-0.5">
                      {screen.role}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Standards & Architectural Specs */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#E31B23]"></span>
              <h4 className="font-condensed text-lg uppercase font-bold tracking-wider text-white">
                Architecture Spec
              </h4>
            </div>
            <ul className="space-y-2 text-xs text-[#888888]">
              <li className="flex items-center justify-between py-1 border-b border-[#1E1E1E]">
                <span>Data Schema</span>
                <span className="text-[#CCCCCC]">USDX-Athlete-v1.4</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-[#1E1E1E]">
                <span>Security</span>
                <span className="text-[#CCCCCC]">OAuth2 Bearer Tokens</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-[#1E1E1E]">
                <span>Consent Artifact</span>
                <span className="text-[#CCCCCC]">DPDP Section 9</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-[#1E1E1E]">
                <span>Log Trail</span>
                <span className="text-[#CCCCCC]">Append-Only Audit</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#1C1C1C] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>USDX Architecture Prototype</span>
          </div>
          <p>© {new Date().getFullYear()} USDX — Unified Sports Data Exchange. Designed for the Indian sports ecosystem.</p>
        </div>
      </div>
    </footer>
  );
};
