export interface Project {
  id: string;
  title: string;
  category: 'Data Analytics' | 'Machine Learning' | 'AI-Based Cybersecurity' | 'Browser Extension' | 'IoT & Emergency Response';
  description: string;
  features: string[];
  technologies: string[];
  visualType: 'dashboard' | 'prediction' | 'cybersecurity' | 'extension' | 'iot';
  githubUrl?: string; // Optional or link placeholder
  liveUrl?: string;   // Optional or link placeholder
  deepDive: {
    problem: string;
    solution: string;
    architecture: string[];
    technicalHighlights: string[];
  };
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  period: string;
  status: 'Completed' | 'Upcoming';
  description: string[];
  technologies: string[];
  location: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  cgpa: string;
  maxCgpa: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  issuer: 'NPTEL' | 'Microsoft' | 'Google Gemini';
  title: string;
  description: string;
  skills: string[];
  badgeColor: string;
  hasFile?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    icon?: string;
    level?: string;
  }[];
}
