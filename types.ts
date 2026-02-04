
import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
  subtitle?: string;
  tags?: string[];
  href?: string;
  slug?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
