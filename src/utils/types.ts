export interface LinkProps {
  children: string;
  url: string;
}

export interface CardProps {
  date: string;
  id: string;
  title: string;
  info: string;
  skill: string;
}

interface Link {
  text: string;
  link: string;
}

interface Feature {
  image?: string;
  title: string;
  info?: string | string[];
}

interface Troubleshooting {
  title: string;
  info: string[];
}

interface Improvement {
  title: string;
  info: string;
}

export interface DataType {
  project_id: string;
  name: string;
  thumbnail: string;
  links: Link[];
  title: string;
  subTitle: string;
  info: string;
  date: string;
  member: string;
  skill: string;
  feature: Feature[];
  troubleshooting?: Troubleshooting[];
  improvement: Improvement[];
  retrospect: string;
}
