
export interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  location?: string;
}

export interface ProjectItem {
  id: number;
  category: string;
  title: string;
  imageUrl: string;
  description: string;
  details?: {
    client?: string;
    role?: string;
    year?: string;
    tools?: string[];
  };
}

export interface StatItem {
  label: string;
  value: string;
}
