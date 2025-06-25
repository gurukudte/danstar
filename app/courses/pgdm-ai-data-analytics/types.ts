export interface Faculty {
    name: string;
    title: string;
    domain: string;
    education: string;
  }
  
  export interface Testimonial {
    quote: string;
    author: string;
    position: string;
  }
  
  export interface CurriculumTerm {
    term: string;
    courses: string[];
  }
  
  export interface Specialization {
    name: string;
    icon: React.ReactNode;
  }