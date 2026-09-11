import React, { useState, useEffect } from 'react';
import { Shield, ChevronDown, Menu, X, ArrowUpRight, Lock, CheckCircle2 } from 'lucide-react';
import { RoutePage } from '../types';

interface NavbarProps {
  currentPage: RoutePage;
  onNavigate: (page: RoutePage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoDropdownOpen, setDemoDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const demoLinks: { id: RoutePage; label: string; role: string; desc: string }[] = [
    { id: 'school-upload', label: 'School Upload', role: 'Data Fiduciary / Provider', desc: 'Bulk athlete vitals & UDISE+ sync' },
    { id: 'ngo-scouting', label: 'NGO Scouting View', role: 'Data Consumer / Scout', desc: 'Consent-gated talent search & metrics' },
    { id: 'authority-dashboard', label: 'Coach / Sports Authority', role: 'State / Khelo India Body', desc: 'District pipeline & talent analytics' },
    { id: 'guardian-consent', label: 'Guardian Consent Portal', role: 'Parent / Legal Guardian', desc: 'DPDP-compliant OTP consent grant' },
    { id: 'audit-log', label: 'Audit Log Ledger', role: 'Auditor / Regulator', desc: 'Tamper-evident cryptographic trail' },
  ];

  const handleNavClick = (page: RoutePage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setDemoDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDemoActive = demoLinks.some(d => d.id === currentPage);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentPage !== 'home'
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#222222] shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#0A0A0A]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo on the Left */}
        <button
          id="nav-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
        >
          <div className="relative w-10 h-10 bg-[#121212] border border-[#E31B23]/40 flex items-center justify-center transition-all group-hover:border-[#E31B23]">
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#E31B23]"></span>
            <span className="font-condensed text-xl font-black italic tracking-tighter text-white group-hover:text-[#E31B23] transition-colors">
              U
            </span>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#E31B23]" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-condensed text-2xl sm:text-3xl font-black uppercase tracking-wider text-white">
                USDX
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase bg-[#E31B23]/20 text-[#E31B23] border border-[#E31B23]/40">
                DPDP 2023
              </span>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#888888] -mt-1 hidden sm:block">
              Unified Sports Data Exchange
            </span>
          </div>
        </button>

        {/* Desktop Nav Links on the Right */}
        <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-1">
          <button
            id="nav-link-home"
            onClick={() => handleNavClick('home')}
            className={`relative px-4 py-2 text-sm font-condensed uppercase tracking-wider font-bold transition-all cursor-pointer ${
              currentPage === 'home'
                ? 'text-white'
                : 'text-[#A0A0A0] hover:text-white'
            }`}
          >
            Home
            <span
              className={`absolute bottom-0 left-4 right-4 h-[2px] bg-[#E31B23] transition-all duration-200 ${
                currentPage === 'home' ? 'opacity-100' : 'opacity-0 hover:opacity-100'
              }`}
            />
          </button>

          {/* Direct jump to sections if on home */}
          <a
            id="nav-link-problem"
            href="#problem-section"
            onClick={(e) => {
              if (currentPage !== 'home') {
                e.preventDefault();
                handleNavClick('home');
                setTimeout(() => {
                  document.getElementById('problem-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="group relative px-4 py-2 text-sm font-condensed uppercase tracking-wider font-bold text-[#A0A0A0] hover:text-white transition-all cursor-pointer"
          >
            The Problem
            <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#E31B23] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            id="nav-link-how-it-works"
            href="#how-it-works-section"
            onClick={(e) => {
              if (currentPage !== 'home') {
                e.preventDefault();
                handleNavClick('home');
                setTimeout(() => {
                  document.getElementById('how-it-works-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="group relative px-4 py-2 text-sm font-condensed uppercase tracking-wider font-bold text-[#A0A0A0] hover:text-white transition-all cursor-pointer"
          >
            How It Works
            <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#E31B23] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            id="nav-link-components"
            href="#components-section"
            onClick={(e) => {
              if (currentPage !== 'home') {
                e.preventDefault();
                handleNavClick('home');
                setTimeout(() => {
                  document.getElementById('components-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="group relative px-4 py-2 text-sm font-condensed uppercase tracking-wider font-bold text-[#A0A0A0] hover:text-white transition-all cursor-pointer"
          >
            Architecture
            <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#E31B23] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* Interactive Demo Hub Dropdown */}
          <div className="relative group ml-2">
            <button
              id="nav-demo-dropdown-btn"
              onClick={() => setDemoDropdownOpen(!demoDropdownOpen)}
              onMouseEnter={() => setDemoDropdownOpen(true)}
              className={`flex items-center gap-2 px-3.5 py-2 text-sm font-condensed uppercase tracking-wider font-bold border transition-all cursor-pointer ${
                isDemoActive
                  ? 'bg-[#181818] border-[#E31B23] text-white'
                  : 'bg-[#121212] border-[#2E2E2E] text-[#CCCCCC] hover:border-[#E31B23] hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
              <span>Demo Screens (5)</span>
              <ChevronDown className="w-4 h-4 text-[#A0A0A0]" />
            </button>

            {/* Dropdown Menu */}
            {demoDropdownOpen && (
              <div
                onMouseLeave={() => setDemoDropdownOpen(false)}
                className="absolute right-0 mt-1 w-80 bg-[#101010] border border-[#2A2A2A] shadow-2xl p-2 z-50 flex flex-col gap-1"
              >
                <div className="px-3 py-1.5 border-b border-[#222222] flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#888888]">
                    Interactive Views
                  </span>
                  <span className="text-[10px] text-[#E31B23] font-bold">5 Modules</span>
                </div>
                {demoLinks.map((item) => (
                  <button
                    key={item.id}
                    id={`nav-demo-item-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left p-2.5 transition-all flex flex-col border cursor-pointer ${
                      currentPage === item.id
                        ? 'bg-[#1B1B1B] border-[#E31B23] text-white'
                        : 'bg-transparent border-transparent hover:bg-[#161616] hover:border-[#282828] text-[#CCCCCC]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-condensed text-base font-bold uppercase tracking-wide text-white">
                        {item.label}
                      </span>
                      {currentPage === item.id && (
                        <span className="w-1.5 h-1.5 bg-[#E31B23]" />
                      )}
                    </div>
                    <span className="text-[11px] text-[#E31B23]">{item.role}</span>
                    <span className="text-[11px] text-[#777777] line-clamp-1">{item.desc}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick CTA */}
          <button
            id="nav-cta-see-demo"
            onClick={() => handleNavClick('school-upload')}
            className="ml-3 px-4 py-2 bg-[#E31B23] hover:bg-[#C9131A] text-white font-condensed font-black uppercase tracking-wider text-sm transition-transform active:scale-95 cursor-pointer shadow-lg shadow-[#E31B23]/20 flex items-center gap-1.5"
          >
            <span>Launch Demo</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-[#E31B23] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden bg-[#0A0A0A] border-b border-[#222222] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left px-3 py-2 font-condensed text-lg uppercase tracking-wider font-bold ${
                currentPage === 'home' ? 'text-[#E31B23] bg-[#141414]' : 'text-white'
              }`}
            >
              Home
            </button>
            <a
              href="#problem-section"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left px-3 py-2 font-condensed text-lg uppercase tracking-wider font-bold text-[#A0A0A0]"
            >
              The Problem
            </a>
            <a
              href="#how-it-works-section"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left px-3 py-2 font-condensed text-lg uppercase tracking-wider font-bold text-[#A0A0A0]"
            >
              How It Works
            </a>
            <a
              href="#components-section"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left px-3 py-2 font-condensed text-lg uppercase tracking-wider font-bold text-[#A0A0A0]"
            >
              Core Components
            </a>
          </div>

          <div className="pt-3 border-t border-[#222222]">
            <div className="px-3 pb-2 text-[11px] font-mono-code uppercase tracking-widest text-[#E31B23]">
              USDX Demo Screens
            </div>
            <div className="grid grid-cols-1 gap-1">
              {demoLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2.5 text-sm font-medium border flex items-center justify-between ${
                    currentPage === item.id
                      ? 'bg-[#181818] border-[#E31B23] text-white'
                      : 'bg-[#101010] border-[#222222] text-[#CCCCCC]'
                  }`}
                >
                  <div>
                    <div className="font-condensed font-bold uppercase text-white tracking-wide">
                      {item.label}
                    </div>
                    <div className="text-[11px] text-[#E31B23] font-mono-code">{item.role}</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#888888]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
