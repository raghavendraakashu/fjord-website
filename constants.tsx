import React from 'react';
import { Layout, Cpu, Globe, ArrowRight, Layers, Zap, Compass, ShieldCheck } from 'lucide-react';
import { Project, Service, ProcessStep } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Zenith Enterprise Systems',
    category: 'Application / Infrastructure',
    year: '2024',
    description: 'A comprehensive cloud-native dashboard engineered for real-time logistics tracking, utilizing optimized React patterns and high-concurrency data streaming.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '2',
    title: 'Ethos Global Market',
    category: 'Commerce / Platform',
    year: '2023',
    description: 'A global B2B marketplace built on a headless architecture, providing low-latency browsing and secure multi-currency transaction management.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '3',
    title: 'Terra Analytics',
    category: 'Software / Data',
    year: '2024',
    description: 'A high-performance data visualization platform designed for agricultural research, focusing on predictive modeling and responsive UX.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Digital Engineering',
    description: 'We architect and build robust web applications that serve as the foundation for your digital operations, ensuring scalability and long-term stability.',
    icon: <Cpu className="w-5 h-5" />
  },
  {
    title: 'Full-Stack Excellence',
    description: 'From intricate front-end experiences to resilient back-end systems, we deliver end-to-end engineering that performs under heavy global demand.',
    icon: <Compass className="w-5 h-5" />
  },
  {
    title: 'Product Design',
    description: 'Our design philosophy prioritizes clarity and utility, creating interfaces for complex applications that feel natural and increase productivity.',
    icon: <Layout className="w-5 h-5" />
  },
  {
    title: 'Technical Security',
    description: 'We implement security-first development practices and rigorous optimization audits to protect your data and maintain system integrity.',
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    title: 'Automation Services',
    description: 'We streamline operations by automating complex workflows and integrating disparate tools, reducing manual effort through reliable, modern web systems.',
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: 'Data Visualization',
    description: 'We design interactive dashboards and visual reporting systems that turn raw data into clear, actionable insights for better decision-making.',
    icon: <Layers className="w-5 h-5" />
  }
];

export const PROCESS: ProcessStep[] = [
  {
    number: '01',
    title: 'Strategic Audit',
    description: 'A thorough evaluation of your technical requirements and business goals to define the optimal engineering roadmap.'
  },
  {
    number: '02',
    title: 'System Architecture',
    description: 'Constructing a detailed blueprint for your application, focusing on modularity, data flow, and infrastructure security.'
  },
  {
    number: '03',
    title: 'Focused Development',
    description: 'Executing the build phase with precision, utilizing agile methodologies and continuous quality assurance to ensure code excellence.'
  },
  {
    number: '04',
    title: 'Deployment & Support',
    description: 'Managing the launch with zero-downtime strategies and providing technical oversight to sustain growth and performance.'
  }
];