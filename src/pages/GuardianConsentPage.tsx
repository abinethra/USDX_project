/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  ShieldAlert, 
  Shield, 
  UserCheck, 
  HeartHandshake, 
  Building2, 
  Lock, 
  Unlock, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  ArrowUpRight, 
  Smartphone, 
  FileText, 
  Download, 
  Info, 
  Clock, 
  Bell, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  Award,
  Calendar,
  Sliders,
  Check,
  X
} from 'lucide-react';
import { RoutePage } from '../types';

interface ScreenProps {
  onNavigate: (page: RoutePage) => void;
}

// Child Profile Type
interface ChildProfile {
  id: string;
  name: string;
  age: number;
  grade: string;
  school: string;
  district: string;
  state: string;
  primarySport: string;
  category: string;
  bibNumber: string;
  udiseId: string;
}

// Data Category Consent Type
interface ConsentCategory {
  id: 'performance' | 'contact' | 'scout_visibility' | 'medical';
  title: string;
  shortDesc: string;
  plainLanguageExplanation: string;
  whatIsIncluded: string[];
  isGranted: boolean;
  lastUpdated: string;
  riskNotice: string;
  connectedAppsCount: number;
}

// Connected Organization Type
interface ConnectedOrg {
  id: string;
  name: string;
  type: string;
  purpose: string;
  permissionsHeld: string[];
  approvedOn: string;
  status: 'Active' | 'Suspended' | 'Revoked';
  verifiedBadge: string;
}

// Propagation Event Notification
interface PropagationNotice {
  id: string;
  type: 'revoked' | 'granted';
  categoryTitle: string;
  message: string;
  appsCount: number;
  timestamp: string;
  steps: string[];
}

export const GuardianConsentPage: React.FC<ScreenProps> = ({ onNavigate }) => {
  // Active child selection
  const [selectedChildId, setSelectedChildId] = useState<'arjun' | 'rhea'>('arjun');

  const childrenData: Record<'arjun' | 'rhea', ChildProfile> = {
    arjun: {
      id: 'ATH-IN-0829',
      name: 'Arjun Verma',
      age: 14,
      grade: 'Class 9-B',
      school: "St. Xavier's Senior Secondary School",
      district: 'Patiala',
      state: 'Punjab',
      primarySport: 'Athletics (100m Sprint & Long Jump)',
      category: 'U-16 National Track & Field',
      bibNumber: '04',
      udiseId: 'UDISE+ 03021900412'
    },
    rhea: {
      id: 'ATH-IN-5509',
      name: 'Rhea Verma',
      age: 12,
      grade: 'Class 7-A',
      school: "St. Xavier's Senior Secondary School",
      district: 'Patiala',
      state: 'Punjab',
      primarySport: 'Aquatics (50m Freestyle)',
      category: 'U-14 State Swimming Cadre',
      bibNumber: '22',
      udiseId: 'UDISE+ 03021900418'
    }
  };

  const activeChild = childrenData[selectedChildId];

  // Consent Categories State
  const [categories, setCategories] = useState<ConsentCategory[]>([
    {
      id: 'performance',
      title: 'Fitness & Sports Performance Stats',
      shortDesc: 'Race times, jump heights, endurance ratings, and benchmark scores',
      plainLanguageExplanation: 
        'Allows verified sports coaches and selectors to see how fast, high, or long your child runs and jumps. This helps your child get noticed for sports camps, team selections, and scholarships.',
      whatIsIncluded: [
        '100m sprint timing (11.18 sec)',
        'Vertical jump height (62 cm)',
        'Beep test cardiovascular score',
        'State & national percentile rank'
      ],
      isGranted: true,
      lastUpdated: '10 Sep 2026, 09:15 AM',
      riskNotice: 'Turning this off hides test scores from coaches. Your child won\'t appear in talent leaderboards.',
      connectedAppsCount: 3
    },
    {
      id: 'scout_visibility',
      title: 'Visibility to Talent Scouts & National Academies',
      shortDesc: 'Whether sports academies and Khelo India scouts can find your child\'s profile',
      plainLanguageExplanation: 
        'Controls whether accredited talent scouts can search and discover your child\'s sports profile online. When turned OFF, your child is completely hidden from talent discovery searches.',
      whatIsIncluded: [
        'Appearance in the National Scouting Directory',
        'Eligible for district & state camp call-ups',
        'Official match day bib number (#04)',
        'Age category classification (U-16)'
      ],
      isGranted: true,
      lastUpdated: '08 Sep 2026, 04:30 PM',
      riskNotice: 'Turning this off immediately hides your child from all scouting queries across India.',
      connectedAppsCount: 3
    },
    {
      id: 'contact',
      title: 'Direct Parent Contact & Phone Number',
      shortDesc: 'Your mobile number, email, and home address for official trial invitations',
      plainLanguageExplanation: 
        'We protect your personal contact details strictly. Only sports organizations that have already sent a formal trial invitation through the school principal can contact you directly.',
      whatIsIncluded: [
        'Guardian phone (+91 98112 ••••12)',
        'Guardian email (sunita.verma@example.com)',
        'Home postal address',
        'Emergency guardian contacts'
      ],
      isGranted: false,
      lastUpdated: '01 Sep 2026, 11:20 AM',
      riskNotice: 'Currently restricted. Sports bodies must contact your school principal first before reaching you.',
      connectedAppsCount: 0
    },
    {
      id: 'medical',
      title: 'Doctor Medical Clearance & Health Notes',
      shortDesc: 'Doctor\'s sports fitness certificate and safety notes for trial days',
      plainLanguageExplanation: 
        'Allows on-site trial doctors and certified trainers to see your child\'s basic physical readiness certificate so they are cared for safely during rigorous physical trials.',
      whatIsIncluded: [
        'Annual School Physical Fitness Certificate',
        'Resting heart rate & blood pressure range',
        'Known allergies or asthma cautions',
        'Tetanus and emergency medical notes'
      ],
      isGranted: true,
      lastUpdated: '05 Sep 2026, 02:10 PM',
      riskNotice: 'Shared only with certified sports medicine officers during authorized trials.',
      connectedAppsCount: 2
    }
  ]);

  // Connected Organizations State
  const [organizations, setOrganizations] = useState<ConnectedOrg[]>([
    {
      id: 'ORG-SAI-01',
      name: 'Sports Authority of India (SAI)',
      type: 'National Sports Governance Body',
      purpose: 'National Centre of Excellence (NCOE) & Khelo India Talent Shortlist',
      permissionsHeld: ['Fitness & Sports Performance Stats', 'Visibility to Talent Scouts'],
      approvedOn: '15 Aug 2026',
      status: 'Active',
      verifiedBadge: 'Ministry of Youth Affairs & Sports'
    },
    {
      id: 'ORG-OGQ-02',
      name: 'Olympic Gold Quest (Grassroots Foundation)',
      type: 'Accredited Non-Profit Sports NGO',
      purpose: 'Junior Track & Field Training Camp Equipment & Nutritional Grants',
      permissionsHeld: ['Fitness & Sports Performance Stats', 'Visibility to Talent Scouts'],
      approvedOn: '28 Aug 2026',
      status: 'Active',
      verifiedBadge: 'SAI Registered Partner'
    },
    {
      id: 'ORG-SCH-03',
      name: "St. Xavier's Physical Education Council",
      type: 'Registered Educational Institution',
      purpose: 'Inter-School Tournament Rosters & Annual Fitness Assessments',
      permissionsHeld: ['Fitness & Sports Performance Stats', 'Doctor Medical Clearance'],
      approvedOn: '10 Jul 2026',
      status: 'Active',
      verifiedBadge: 'CBSE Affiliated Node'
    }
  ]);

  // Propagation Banner State
  const [propagationNotice, setPropagationNotice] = useState<PropagationNotice | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Active Emergency Lock State
  const [isEmergencyFrozen, setIsEmergencyFrozen] = useState(false);

  // Real-time propagation simulation on toggle
  const handleToggleConsent = (categoryId: ConsentCategory['id']) => {
    const target = categories.find(c => c.id === categoryId);
    if (!target) return;

    const willBeGranted = !target.isGranted;

    // Instantly update the category
    setCategories(prev => prev.map(cat => {
      if (cat.id === categoryId) {
        return {
          ...cat,
          isGranted: willBeGranted,
          lastUpdated: 'Just now'
        };
      }
      return cat;
    }));

    // Trigger simulation animation
    setIsSyncing(true);

    const affectedAppsCount = willBeGranted ? 3 : target.connectedAppsCount || 3;

    if (!willBeGranted) {
      // Access Revoked message with propagation steps
      setPropagationNotice({
        id: Date.now().toString(),
        type: 'revoked',
        categoryTitle: target.title,
        message: `Access revoked — propagating to ${affectedAppsCount} connected sports organizations`,
        appsCount: affectedAppsCount,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        steps: [
          'Digital token invalidated on national registry (DPDP Sec 9)',
          'Profile removed from Sports Authority of India scout feeds',
          'Cached data deleted from accredited Grassroots NGO servers'
        ]
      });

      // Update organizations permissions display
      setOrganizations(prev => prev.map(org => {
        const remaining = org.permissionsHeld.filter(p => !p.toLowerCase().includes(target.title.toLowerCase().slice(0, 10)));
        return {
          ...org,
          permissionsHeld: remaining.length > 0 ? remaining : ['Basic School Registration Only']
        };
      }));
    } else {
      // Consent Granted message
      setPropagationNotice({
        id: Date.now().toString(),
        type: 'granted',
        categoryTitle: target.title,
        message: `Consent granted — encrypted access token restored for verified sports bodies`,
        appsCount: affectedAppsCount,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        steps: [
          'Verifiable Parental Consent (VPC) token generated',
          'Access credentials broadcasted to accredited sports hubs',
          'Logged permanently to tamper-proof privacy ledger'
        ]
      });

      // Restore organization permissions display
      setOrganizations(prev => prev.map(org => {
        if (!org.permissionsHeld.includes(target.title)) {
          return {
            ...org,
            permissionsHeld: [...org.permissionsHeld, target.title]
          };
        }
        return org;
      }));
    }

    setTimeout(() => {
      setIsSyncing(false);
    }, 1800);
  };

  // Revoke organization access directly
  const handleRevokeOrg = (orgId: string) => {
    setOrganizations(prev => prev.map(org => {
      if (org.id === orgId) {
        return {
          ...org,
          status: org.status === 'Active' ? 'Revoked' : 'Active'
        };
      }
      return org;
    }));

    const org = organizations.find(o => o.id === orgId);
    if (!org) return;

    const newStatus = org.status === 'Active' ? 'Revoked' : 'Restored';

    setPropagationNotice({
      id: Date.now().toString(),
      type: newStatus === 'Revoked' ? 'revoked' : 'granted',
      categoryTitle: org.name,
      message: newStatus === 'Revoked' 
        ? `Access blocked for ${org.name} — data clearance cancelled immediately`
        : `Access restored for ${org.name} — permissions renewed under parental authority`,
      appsCount: 1,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      steps: [
        `Organization authorization token marked as ${newStatus.toUpperCase()}`,
        'API keys blocked from querying this child record',
        'Notification SMS dispatched to guardian phone'
      ]
    });
  };

  // One-click emergency freeze toggle
  const handleToggleEmergencyFreeze = () => {
    const nextFreeze = !isEmergencyFrozen;
    setIsEmergencyFrozen(nextFreeze);

    if (nextFreeze) {
      // Revoke all
      setCategories(prev => prev.map(c => ({ ...c, isGranted: false, lastUpdated: 'Emergency Freeze' })));
      setOrganizations(prev => prev.map(o => ({ ...o, status: 'Suspended' })));
      setPropagationNotice({
        id: Date.now().toString(),
        type: 'revoked',
        categoryTitle: 'Emergency Privacy Shield',
        message: 'Emergency lock engaged: All child data instantly blinded across ALL 3 organizations',
        appsCount: 3,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        steps: [
          'Master revocation broadcast sent to SAI and all NGOs',
          'Public and scout directory entries blinded',
          'Audit log flag raised for manual parental re-authorization'
        ]
      });
    } else {
      // Restore standard defaults
      setCategories(prev => prev.map(c => ({
        ...c,
        isGranted: c.id !== 'contact',
        lastUpdated: 'Restored'
      })));
      setOrganizations(prev => prev.map(o => ({ ...o, status: 'Active' })));
      setPropagationNotice({
        id: Date.now().toString(),
        type: 'granted',
        categoryTitle: 'Emergency Privacy Shield',
        message: 'Emergency lock lifted: Standard parental preferences re-applied',
        appsCount: 3,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        steps: [
          'Safety lock removed with parent authentication',
          'Standard permissions re-synchronized with schools and scouts',
          'Audit trail updated'
        ]
      });
    }
  };

  // Download certificate simulation
  const handleDownloadCertificate = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  };

  // Count active consents
  const activeConsentCount = categories.filter(c => c.isGranted).length;
  const activeOrgsCount = organizations.filter(o => o.status === 'Active').length;

  return (
    <div id="guardian-consent-page" className="min-h-screen bg-[#0C0D10] text-[#E5E7EB] pt-24 pb-20 selection:bg-[#E31B23] selection:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Warm & Approachable Top Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#232630]">
          <div className="flex items-center gap-2.5 text-xs">
            <button
              id="guardian-back-home-btn"
              onClick={() => onNavigate('home')}
              className="px-3 py-1.5 bg-[#161820] hover:bg-[#20232C] text-[#9CA3AF] hover:text-white border border-[#2D313E] rounded flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#E31B23]" />
              <span>Back to Portal</span>
            </button>
            <span className="text-[#4B5563]">/</span>
            <span className="text-[#F87171] font-bold uppercase tracking-wider">Parent &amp; Guardian Portal</span>
            <span className="text-[#4B5563]">/</span>
            <span className="text-[#9CA3AF] uppercase tracking-wider">Consent Manager</span>
          </div>

          <div className="flex items-center gap-3 text-xs text-[#9CA3AF]">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#151E19] border border-emerald-500/30 text-emerald-400 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Logged in as Sunita Verma (Mother)</span>
            </span>
            <span className="hidden sm:inline text-[#374151]">|</span>
            <span className="hidden sm:inline text-[#6B7280]">DPDP Act 2023 Compliant</span>
          </div>
        </div>

        {/* HERO / WELCOME CARD - WARM, REASSURING, TRUST-BUILDING TONE */}
        <div 
          id="guardian-welcome-banner"
          className="relative bg-gradient-to-r from-[#171922] via-[#1A1C26] to-[#161822] border-2 border-[#2C303E] rounded-xl p-6 sm:p-8 shadow-xl overflow-hidden"
        >
          {/* Subtle warm accent glow */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#E31B23]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#25181C] border border-[#E31B23]/30 rounded-full text-xs text-[#FCA5A5]">
                <HeartHandshake className="w-3.5 h-3.5 text-[#E31B23]" />
                <span>Direct parental control over your child's sports data</span>
              </div>

              <h1 className="font-condensed text-3xl sm:text-4xl font-black text-white tracking-wide uppercase">
                Welcome, Sunita. Here is what is shared for your child.
              </h1>

              <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                As a parent under India's Digital Personal Data Protection (DPDP) Act, you decide what sports data is visible to coaches and national selectors. You can adjust permissions at any time with a single tap.
              </p>
            </div>

            {/* Quick Actions for Guardian */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full lg:w-auto shrink-0">
              <button
                id="emergency-freeze-btn"
                onClick={handleToggleEmergencyFreeze}
                className={`px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  isEmergencyFrozen
                    ? 'bg-amber-500 hover:bg-amber-600 text-black shadow-lg shadow-amber-500/20'
                    : 'bg-[#2A161A] hover:bg-[#3D1A21] text-[#FCA5A5] border border-[#E31B23]/40'
                }`}
              >
                {isEmergencyFrozen ? (
                  <>
                    <Unlock className="w-4 h-4 text-black" />
                    <span>Resume Normal Permissions</span>
                  </>
                ) : (
                  <>
                    <ShieldAlert className="w-4 h-4 text-[#E31B23]" />
                    <span>Emergency Freeze All Data</span>
                  </>
                )}
              </button>

              <button
                id="download-consent-cert-btn"
                onClick={handleDownloadCertificate}
                className="px-4 py-2.5 bg-[#1B1E28] hover:bg-[#252A38] text-white border border-[#343A4B] rounded text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#9CA3AF]" />
                <span>Download Consent Certificate</span>
              </button>
            </div>
          </div>

          {/* Child Switcher Tabs */}
          <div className="mt-8 pt-6 border-t border-[#2A2E3B] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono-code text-[#9CA3AF] uppercase">Viewing Child:</span>
              <div className="inline-flex bg-[#0E1015] p-1 rounded-lg border border-[#2B2F3D]">
                <button
                  id="select-child-arjun"
                  onClick={() => setSelectedChildId('arjun')}
                  className={`px-3.5 py-1.5 rounded text-xs font-medium flex items-center gap-2 transition-all cursor-pointer ${
                    selectedChildId === 'arjun'
                      ? 'bg-[#E31B23] text-white font-bold shadow'
                      : 'text-[#9CA3AF] hover:text-white'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Arjun Verma (Age 14 • Athletics)</span>
                </button>

                <button
                  id="select-child-rhea"
                  onClick={() => setSelectedChildId('rhea')}
                  className={`px-3.5 py-1.5 rounded text-xs font-medium flex items-center gap-2 transition-all cursor-pointer ${
                    selectedChildId === 'rhea'
                      ? 'bg-[#E31B23] text-white font-bold shadow'
                      : 'text-[#9CA3AF] hover:text-white'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Rhea Verma (Age 12 • Swimming)</span>
                </button>
              </div>
            </div>

            <div className="text-xs font-mono-code text-[#6B7280]">
              UDISE ID: <span className="text-[#D1D5DB]">{activeChild.udiseId}</span>
            </div>
          </div>
        </div>

        {/* PROMPT CONFIRMATION NOTIFICATION: INSTANT PROPAGATION FEEDBACK */}
        {propagationNotice && (
          <div
            id="propagation-alert-banner"
            className={`p-5 rounded-xl border-2 transition-all duration-300 shadow-lg ${
              propagationNotice.type === 'revoked'
                ? 'bg-[#1C1316] border-[#E31B23]/70 text-white'
                : 'bg-[#121E18] border-emerald-500/70 text-white'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                  propagationNotice.type === 'revoked' ? 'bg-[#3A181D] text-[#F87171]' : 'bg-[#163524] text-emerald-400'
                }`}>
                  {isSyncing ? (
                    <RefreshCw className="w-5 h-5 animate-spin" />
                  ) : propagationNotice.type === 'revoked' ? (
                    <ShieldAlert className="w-5 h-5 text-[#E31B23]" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  )}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono-code font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/40">
                      {isSyncing ? 'PROPAGATING IN REAL TIME...' : 'SYNC COMPLETED'}
                    </span>
                    <span className="text-xs text-[#9CA3AF] font-mono-code">{propagationNotice.timestamp}</span>
                  </div>
                  <h4 className="font-condensed text-xl font-bold uppercase tracking-wide">
                    {propagationNotice.message}
                  </h4>
                  <p className="text-xs text-[#9CA3AF]">
                    {propagationNotice.type === 'revoked' 
                      ? 'The selected information was instantly wiped from public scout queries and external coach caches.'
                      : 'Verified sports scouts can now view this category under strict Khelo India guidelines.'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setPropagationNotice(null)}
                className="text-[#9CA3AF] hover:text-white p-1 rounded hover:bg-black/20 self-end sm:self-center transition-colors cursor-pointer"
                title="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Propagation Steps Breadcrumbs */}
            <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-2 text-xs font-mono-code">
              {propagationNotice.steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#D1D5DB] bg-black/30 px-3 py-1.5 rounded">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CERTIFICATE DOWNLOAD SUCCESS TOAST */}
        {downloadSuccess && (
          <div className="p-4 bg-[#14231B] border border-emerald-500 rounded-lg flex items-center justify-between text-xs font-mono-code text-emerald-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>
                Official Parental Consent Certificate downloaded for {activeChild.name} (Ref: CERT-DPDP-2026-VPC).
              </span>
            </div>
            <span className="text-emerald-400 font-bold">DIGITAL AUDIT STAMP ATTACHED</span>
          </div>
        )}

        {/* CHILD'S CURRENT STATUS SUMMARY CARDS */}
        <div id="child-profile-summary-grid" className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Card 1: Identity & School */}
          <div className="bg-[#14161E] border border-[#282C3A] rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono-code text-[#9CA3AF]">
              <span>STUDENT ATHLETE</span>
              <UserCheck className="w-4 h-4 text-[#F87171]" />
            </div>
            <div>
              <div className="font-condensed text-2xl font-bold text-white">
                {activeChild.name}
              </div>
              <div className="text-xs text-[#9CA3AF] mt-0.5">
                {activeChild.age} years old • {activeChild.grade}
              </div>
            </div>
            <div className="pt-2 border-t border-[#222634] text-xs text-[#D1D5DB] space-y-1">
              <div>{activeChild.school}</div>
              <div className="text-[#9CA3AF]">{activeChild.district}, {activeChild.state}</div>
            </div>
          </div>

          {/* Card 2: Shared Permissions Summary */}
          <div className="bg-[#14161E] border border-[#282C3A] rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono-code text-[#9CA3AF]">
              <span>ACTIVE PERMISSIONS</span>
              <Sliders className="w-4 h-4 text-[#60A5FA]" />
            </div>
            <div className="flex items-baseline gap-2">
              <div className="font-condensed text-4xl font-black text-white">
                {activeConsentCount} / {categories.length}
              </div>
              <span className="text-xs text-[#9CA3AF] font-mono-code">categories enabled</span>
            </div>
            <div className="pt-2 border-t border-[#222634] text-xs flex items-center justify-between font-mono-code">
              <span className="text-emerald-400">
                {activeConsentCount >= 3 ? 'Standard Sports Discovery' : 'High Privacy Restricted'}
              </span>
              <span className="text-[#6B7280]">Updated today</span>
            </div>
          </div>

          {/* Card 3: Connected Sports Organizations */}
          <div className="bg-[#14161E] border border-[#282C3A] rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono-code text-[#9CA3AF]">
              <span>CONNECTED ORGANIZATIONS</span>
              <Building2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex items-baseline gap-2">
              <div className="font-condensed text-4xl font-black text-white">
                {activeOrgsCount}
              </div>
              <span className="text-xs text-[#9CA3AF] font-mono-code">sports bodies viewing</span>
            </div>
            <div className="pt-2 border-t border-[#222634] text-xs flex items-center justify-between font-mono-code text-[#9CA3AF]">
              <span>SAI, OGQ &amp; School Council</span>
              <span className="text-emerald-400">All Verified</span>
            </div>
          </div>

        </div>

        {/* CONSENT STATUS PER DATA CATEGORY (ON/OFF TOGGLES WITH INSTANT UPDATE) */}
        <div id="consent-categories-section" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="font-condensed text-2xl font-black text-white uppercase tracking-wide flex items-center gap-2">
                <span>Manage Permissions by Data Category</span>
              </h2>
              <p className="text-xs text-[#9CA3AF] font-mono-code">
                Toggle access ON or OFF for each type of information below. Changes take effect across connected sports apps instantly.
              </p>
            </div>
            <div className="text-xs font-mono-code text-[#9CA3AF]">
              All changes protected by OTP verification
            </div>
          </div>

          <div className="space-y-4">
            {categories.map((cat) => (
              <div
                key={cat.id}
                id={`consent-card-${cat.id}`}
                className={`bg-[#14161E] border-2 rounded-xl p-6 transition-all duration-200 ${
                  cat.isGranted 
                    ? 'border-[#2C3140] hover:border-[#3D4457]' 
                    : 'border-[#3D2529] bg-[#171214]'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  
                  {/* Left: Category info in plain language */}
                  <div className="space-y-2.5 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-condensed text-2xl font-bold text-white tracking-wide">
                        {cat.title}
                      </h3>
                      {cat.isGranted ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#15251C] border border-emerald-500/40 text-emerald-400 text-xs font-mono-code rounded-full font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Consent Active</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#2A161A] border border-[#E31B23]/40 text-[#F87171] text-xs font-mono-code rounded-full font-bold">
                          <Lock className="w-3.5 h-3.5" />
                          <span>Access Revoked</span>
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-[#D1D5DB] leading-relaxed">
                      {cat.plainLanguageExplanation}
                    </p>

                    {/* What is included chips */}
                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono-code text-[#9CA3AF]">Data fields:</span>
                      {cat.whatIsIncluded.map((field, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-[#1B1F2B] border border-[#2B3144] rounded text-xs text-[#D1D5DB]"
                        >
                          {field}
                        </span>
                      ))}
                    </div>

                    <div className="text-xs text-[#9CA3AF] font-mono-code flex items-center gap-4 pt-1">
                      <span>Last reviewed: {cat.lastUpdated}</span>
                      <span>•</span>
                      <span>Connected apps: {cat.isGranted ? `${cat.connectedAppsCount} apps authorized` : '0 apps'}</span>
                    </div>
                  </div>

                  {/* Right: Clear ON/OFF Toggle Button */}
                  <div className="flex flex-col items-end shrink-0 gap-2">
                    <button
                      id={`toggle-btn-${cat.id}`}
                      onClick={() => handleToggleConsent(cat.id)}
                      className={`relative px-5 py-3 rounded-lg font-condensed font-black uppercase text-sm tracking-wider flex items-center gap-3 transition-all cursor-pointer shadow-md ${
                        cat.isGranted
                          ? 'bg-[#1B281F] hover:bg-[#223629] text-emerald-300 border-2 border-emerald-500/60 shadow-emerald-950/40'
                          : 'bg-[#2A1518] hover:bg-[#381B20] text-[#FCA5A5] border-2 border-[#E31B23]/60 shadow-red-950/40'
                      }`}
                    >
                      {cat.isGranted ? (
                        <>
                          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Consent Granted</span>
                          <span className="text-xs font-mono-code text-emerald-400 underline ml-1 hover:text-white">
                            (Click to Revoke)
                          </span>
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4 text-[#E31B23]" />
                          <span>Access Revoked</span>
                          <span className="text-xs font-mono-code text-[#FCA5A5] underline ml-1 hover:text-white">
                            (Click to Grant)
                          </span>
                        </>
                      )}
                    </button>

                    <span className="text-[11px] font-mono-code text-[#9CA3AF] text-right">
                      {cat.isGranted ? 'Visible to approved scouts' : 'Private to family only'}
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHICH ORGANIZATIONS CURRENTLY HAVE ACCESS */}
        <div id="organizations-access-section" className="bg-[#14161E] border border-[#282C3A] rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="w-4 h-4 text-[#E31B23]" />
                <span className="text-xs font-mono-code uppercase text-[#F87171] font-bold">
                  CONNECTED THIRD PARTIES
                </span>
              </div>
              <h2 className="font-condensed text-2xl sm:text-3xl font-black text-white uppercase tracking-wide">
                Organizations with Active or Past Access
              </h2>
              <p className="text-xs text-[#9CA3AF] font-mono-code">
                Every sports body holding access to your child's data is listed here. You can block any individual organization at any time.
              </p>
            </div>

            <span className="text-xs font-mono-code text-emerald-400 px-3 py-1 bg-[#16251D] border border-emerald-500/30 rounded">
              All 3 organizations verified with Ministry of Youth Affairs &amp; Sports
            </span>
          </div>

          <div className="divide-y divide-[#232736]">
            {organizations.map((org) => (
              <div
                key={org.id}
                className="py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-sans font-bold text-base text-white group-hover:text-[#F87171] transition-colors">
                      {org.name}
                    </h3>
                    <span className="text-xs px-2 py-0.5 bg-[#1F2330] border border-[#31374A] rounded text-[#9CA3AF]">
                      {org.type}
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-[#17231B] text-emerald-400 rounded">
                      {org.verifiedBadge}
                    </span>
                  </div>

                  <p className="text-xs text-[#D1D5DB]">
                    <strong>Purpose:</strong> {org.purpose}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono-code">
                    <span className="text-[#9CA3AF]">Authorized fields:</span>
                    {org.permissionsHeld.map((perm, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-[#0E1015] border border-[#2B2F3E] text-white rounded text-[11px]"
                      >
                        {perm}
                      </span>
                    ))}
                  </div>

                  <div className="text-[11px] font-mono-code text-[#6B7280]">
                    Consent authorized on: {org.approvedOn}
                  </div>
                </div>

                {/* Organization status & individual revoke */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`text-xs font-mono-code px-3 py-1 rounded font-bold ${
                    org.status === 'Active' 
                      ? 'bg-[#15251C] text-emerald-400 border border-emerald-500/30'
                      : 'bg-[#2A161A] text-[#F87171] border border-[#E31B23]/30'
                  }`}>
                    {org.status === 'Active' ? 'Access Active' : 'Access Blocked'}
                  </span>

                  <button
                    onClick={() => handleRevokeOrg(org.id)}
                    className="px-3 py-1.5 bg-[#1A1E29] hover:bg-[#252B3B] text-xs font-mono-code text-[#D1D5DB] hover:text-white border border-[#31374A] rounded transition-colors cursor-pointer"
                  >
                    {org.status === 'Active' ? 'Block Organization' : 'Re-authorize'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PLAIN LANGUAGE PARENT RIGHTS & FAQ SUMMARY */}
        <div className="bg-[#11131A] border border-[#242836] rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="font-condensed text-xl font-bold uppercase text-white tracking-wide">
              Your Legal Rights as a Parent Under Indian Law
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[#9CA3AF] leading-relaxed">
            <div className="bg-[#161822] p-4 rounded-lg border border-[#262A38] space-y-1.5">
              <strong className="text-white block text-sm font-sans">No Commercial Selling</strong>
              <p>Your child's sports data can never be sold, rented, or monetized for advertising. It is strictly used for sports talent identification.</p>
            </div>

            <div className="bg-[#161822] p-4 rounded-lg border border-[#262A38] space-y-1.5">
              <strong className="text-white block text-sm font-sans">Instant Withdrawal</strong>
              <p>Whenever you tap "Revoke", our system instantly issues a digital wipe order to all connected partner databases.</p>
            </div>

            <div className="bg-[#161822] p-4 rounded-lg border border-[#262A38] space-y-1.5">
              <strong className="text-white block text-sm font-sans">Complete Audit Trail</strong>
              <p>Every time a coach or scout opens your child's record, it is permanently logged with their full name, badge ID, and exact timestamp.</p>
            </div>
          </div>
        </div>

        {/* BOTTOM NAVIGATION TO OTHER SCREENS */}
        <div className="pt-4 border-t border-[#232630] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono-code text-[#9CA3AF]">
            <span>NEXT STAKEHOLDER SCREEN // </span>
            <span className="text-white font-bold">IMMUTABLE AUDIT LOG &amp; COMPLIANCE LEDGER</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('authority-dashboard')}
              className="px-4 py-2 bg-[#161822] hover:bg-[#202432] text-[#D1D5DB] hover:text-white border border-[#2E3344] rounded font-condensed font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer"
            >
              Coach Dashboard
            </button>
            <button
              onClick={() => onNavigate('audit-log')}
              className="px-6 py-2.5 bg-[#E31B23] hover:bg-[#C9131A] text-white rounded font-condensed font-bold uppercase tracking-wider text-sm flex items-center gap-2 transition-colors cursor-pointer shadow-lg shadow-[#E31B23]/25"
            >
              <span>Inspect Audit Log</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
