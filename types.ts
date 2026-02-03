
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
