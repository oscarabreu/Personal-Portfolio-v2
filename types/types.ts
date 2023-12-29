/** @format */

export interface Project {
  title: string;
  skills: string[];
  description: string;
  imagePath: string;
  links: {
    github: string;
    documentation?: string;
    live?: string;
  };
}
