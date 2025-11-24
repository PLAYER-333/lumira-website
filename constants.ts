import { 
  Cpu, 
  Terminal, 
  Server, 
  Globe, 
  BookOpen, 
  Bot, 
  Gamepad2, 
  Beaker, 
  Briefcase, 
  LayoutTemplate 
} from 'lucide-react';
import { Opportunity, WorkflowStep } from './types';

export const NAV_LINKS = [
  { name: 'Overview', href: '#overview' },
  { name: 'Extension', href: '#extension' },
  { name: 'How it Works', href: '#how-it-works' },
  { name: 'Future', href: '#future' },
];

export const OPPORTUNITIES: Opportunity[] = [
  {
    title: 'Systems Programming',
    description: 'Leverage C++ performance for native binaries and low-level control.',
    icon: Cpu,
  },
  {
    title: 'AI / ML Pipelines',
    description: 'Utilize PYLM for fast scripting and data orchestration.',
    icon: Bot,
  },
  {
    title: 'Backend & Microservices',
    description: 'Build robust, scalable server-side applications.',
    icon: Server,
  },
  {
    title: 'Cross-Platform Apps',
    description: 'Develop applications that run anywhere with consistent logic.',
    icon: Globe,
  },
  {
    title: 'Education & Learning',
    description: 'Perfect for learning compiler theory and language design.',
    icon: BookOpen,
  },
  {
    title: 'Automation & DevOps',
    description: 'Write powerful scripts to automate your infrastructure.',
    icon: Terminal,
  },
  {
    title: 'Game Scripting',
    description: 'High-performance logic scripting for game engines.',
    icon: Gamepad2,
  },
  {
    title: 'Scientific Computing',
    description: 'Efficient data processing for research and analysis.',
    icon: Beaker,
  },
  {
    title: 'Enterprise Logic',
    description: 'Secure and maintainable business workflow implementation.',
    icon: Briefcase,
  },
  {
    title: 'High-Quality UI/UX',
    description: 'Designed for excellent visuals and interface frameworks.',
    icon: LayoutTemplate,
  },
];

export const INTERPRETER_STEPS: WorkflowStep[] = [
  { step: 1, title: '.lm Parsed', description: 'Source code is analyzed.' },
  { step: 2, title: 'AST Conversion', description: 'Converted to Lumira Abstract Syntax Tree.' },
  { step: 3, title: 'Execution', description: 'Run immediately via PYLM Interpreter.' },
];

export const COMPILER_STEPS: WorkflowStep[] = [
  { step: 1, title: 'Parsing', description: '.lm code parsed into AST.' },
  { step: 2, title: 'Transpilation', description: 'AST translated into optimized C++.' },
  { step: 3, title: 'Compilation', description: 'G++ compiles C++ to native binary.' },
  { step: 4, title: 'Native Run', description: 'Direct CPU execution.' },
];