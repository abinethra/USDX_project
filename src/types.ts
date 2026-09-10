export type RoutePage = 
  | 'home'
  | 'school-upload'
  | 'ngo-scouting'
  | 'authority-dashboard'
  | 'guardian-consent'
  | 'audit-log';

export interface NavItem {
  id: RoutePage;
  label: string;
  isDemo?: boolean;
  role?: string;
}

export interface ProblemStat {
  id: string;
  stat: string;
  label: string;
  sector: string;
  impact: string;
  code: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  subtitle: string;
  details: string;
  badge: string;
}

export interface CoreComponent {
  id: string;
  title: string;
  description: string;
  tag: string;
  specCode: string;
}
