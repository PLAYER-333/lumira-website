import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

export interface Opportunity {
  title: string;
  description: string;
  icon: LucideIcon;
}