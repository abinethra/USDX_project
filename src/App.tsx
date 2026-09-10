/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { RoutePage } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { SchoolUploadStub } from './pages/SchoolUploadStub';
import { NgoScoutingStub } from './pages/NgoScoutingStub';
import { AuthorityDashboardStub } from './pages/AuthorityDashboardStub';
import { GuardianConsentStub } from './pages/GuardianConsentStub';
import { AuditLogStub } from './pages/AuditLogStub';

export default function App() {
  // Hash-synced routing
  const getInitialRoute = (): RoutePage => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    if (
      hash === 'school-upload' ||
      hash === 'ngo-scouting' ||
      hash === 'authority-dashboard' ||
      hash === 'guardian-consent' ||
      hash === 'audit-log'
    ) {
      return hash as RoutePage;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<RoutePage>(getInitialRoute);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (
        hash === 'school-upload' ||
        hash === 'ngo-scouting' ||
        hash === 'authority-dashboard' ||
        hash === 'guardian-consent' ||
        hash === 'audit-log'
      ) {
        setCurrentPage(hash as RoutePage);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: RoutePage) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans selection:bg-[#E31B23] selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Routed Content */}
      <main className="flex-1">
        {currentPage === 'home' && <LandingPage onNavigate={handleNavigate} />}
        {currentPage === 'school-upload' && <SchoolUploadStub onNavigate={handleNavigate} />}
        {currentPage === 'ngo-scouting' && <NgoScoutingStub onNavigate={handleNavigate} />}
        {currentPage === 'authority-dashboard' && <AuthorityDashboardStub onNavigate={handleNavigate} />}
        {currentPage === 'guardian-consent' && <GuardianConsentStub onNavigate={handleNavigate} />}
        {currentPage === 'audit-log' && <AuditLogStub onNavigate={handleNavigate} />}
      </main>

      {/* Shared Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
