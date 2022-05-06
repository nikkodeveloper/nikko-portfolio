export interface Project {
  map(arg0: (project: any) => JSX.Element): import("react").ReactNode;
  _id: string;
  _createdAt: string;
  projTitle: string;
  projIndustry: string;
  date: string;
  position: string;
  taskDuties: array;
  projDescription: array;
  projOutput: array;
  slug: string;
  projCover: {
    asset: {
      _ref: string;
    }
  }

}


export interface AboutNikko {
  map(arg0: (aboutnikko: any) => JSX.Element): import("react").ReactNode;
  _id: string;
  name: string;
  email: string;
  location: string;
  aboutIntro: array;
  services: array;
  avatar: {
    asset: {
      _ref: string;
    }
  }

}
