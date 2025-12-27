
import React from 'react';

export interface SectionProps {
  id: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}