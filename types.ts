import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  size?: 'normal' | 'large';
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TimelineStep {
  id: number;
  label: string;
  title: string;
  description: string;
  image: string; // URL for placeholder
}