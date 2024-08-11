export interface IProject {
  src: string;
  imageDescription: string;
  title: string;
  description: string;
  demo: string;
  code: string;
  buildingToolsIds: string[];
  visible?: boolean;
}

export interface IMeetup {
  src: string;
  title: string;
  link: string;
  description: string;
}

interface ITechnology {
  desc: string;
  key: string;
  title: string;
}

export interface ISkill {
  icon: string;
  title: string;
  desc: string;
  heading: string;
  technologies: ITechnology[];
}

export interface ITool {
  name?: string;
  definition: string;
  icon?: string;
}
