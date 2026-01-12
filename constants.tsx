
import React from 'react';
import { ExperienceItem, ProjectItem, StatItem } from './types.ts';

export const NAV_LINKS = [
  { label: 'HOME', href: '#' },
  { label: 'HOME V2', href: '#' },
  { label: 'EMAIL', href: 'mailto:hello@brunoerdison.com' },
  { label: 'FOLLOW', href: '#' },
];

export const EDUCATION_EXP: { education: ExperienceItem[], experience: ExperienceItem[], management: ExperienceItem[] } = {
  education: [
    { year: '2014', title: 'Bachelor Degree of Design', company: 'RMIT University' },
    { year: '2014', title: 'UI/UX Design Certificate', company: 'University of Houston, US' },
  ],
  experience: [
    { year: '2015 - 2019', title: 'Design Internship', company: 'CMC Corporation, UK' },
    { year: '2015 - 2019', title: 'Graphic Designer', company: 'Tripadvisor Ltd, UK' },
    { year: '2015 - 2019', title: 'Leader Graphic Design', company: 'New Centery Media JSC, UK' },
    { year: '2015 - 2019', title: 'Web Designer', company: 'Freelancer' },
    { year: '2015 - 2019', title: 'Web Designer/ Author', company: 'Envato Market' },
  ],
  management: [
    { year: '2020 - PRESENT', title: 'Product Design Management', company: 'Dribbble LLC, US' },
    { year: '2020 - PRESENT', title: 'Art Director / Co-Founder', company: 'Spotify' },
    { year: '2020 - PRESENT', title: 'Founder', company: 'IDesign Magazine' },
    { year: '2020 - PRESENT', title: 'Author of The Book', company: 'Work for Money, Design for Love' },
  ]
};

export const PROJECTS: ProjectItem[] = [
  { 
    id: 1, 
    category: 'Branding, Packaging', 
    title: 'FG Print Brand', 
    imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1200',
    description: 'A comprehensive branding and packaging solution for a high-end printing studio focusing on traditional techniques mixed with modern aesthetics.',
    details: {
      client: 'FG Studio',
      role: 'Lead Visual Designer',
      year: '2023',
      tools: ['Illustrator', 'Photoshop', 'Indesign']
    }
  },
  { 
    id: 2, 
    category: 'Landing Page', 
    title: 'Swiss Style Post', 
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200',
    description: 'A web project inspired by the International Typographic Style (Swiss Style), prioritizing cleanliness, readability, and objectivity.',
    details: {
      client: 'Self-Initiated',
      role: 'UI/UX & Frontend Dev',
      year: '2022',
      tools: ['Figma', 'React', 'Tailwind CSS']
    }
  },
  { 
    id: 3, 
    category: 'Mobile App', 
    title: 'Health Tracker', 
    imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200',
    description: 'A minimal health monitoring application that simplifies data visualization and provides users with actionable insights into their daily well-being.',
    details: {
      client: 'Vitals Corp',
      role: 'Interaction Designer',
      year: '2024',
      tools: ['Figma', 'Protopie', 'After Effects']
    }
  },
];

export const STATS: StatItem[] = [
  { label: 'YEARS OF EXPERIENCE', value: '8' },
  { label: 'SATISFACTION CLIENTS', value: '100%' },
  { label: 'CLIENTS ON WORLDWIDE', value: '+80' },
  { label: 'PROJECTS DONE', value: '675' },
];

export const LOGOS = [
  'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum'
];
