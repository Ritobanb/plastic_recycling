export interface NavigationLink {
  id: string;
  label: string;
  href: string;
}

export interface Navigation {
  links: NavigationLink[];
}

export interface AboutCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface About {
  title: string;
  description: string;
  profileImage: string;
  cards: AboutCard[];
}

export interface Hero {
  title: string;
  subtitle: string;
  description: string;
  cta: {
    text: string;
    href: string;
  };
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  tags: string[];
}

export interface Portfolio {
  title: string;
  description: string;
  projects: PortfolioProject[];
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  tags: string[];
  readTime: string;
}

export interface Blog {
  title: string;
  description: string;
  posts: BlogPost[];
}

export interface Contact {
  title: string;
  description: string;
  email: string;
  social: {
    platform: string;
    url: string;
    icon: string;
  }[];
  form: {
    title: string;
    description: string;
    submitText: string;
  };
}
