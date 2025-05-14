export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  icon?: string;
  image: string;
}

export interface Lead {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  stat: string;
}
