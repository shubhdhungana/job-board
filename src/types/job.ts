
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';
  salary?: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  skills: string[];
  postedAt: string;
  featured: boolean;
}

export type JobFilter = {
  jobType?: string[];
  experience?: string[];
  skills?: string[];
  location?: string[];
};
