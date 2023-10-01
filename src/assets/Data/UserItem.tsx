export interface UserItem {
  id: number;
  gender: string;
  name: {
    first: string;
    last: string;
  };
  nat: string;
  picture: {
    large: JSX.Element;
    medium: JSX.Element;
    thumbnail: JSX.Element;
  };
  selected: boolean;
  location: string;
  tags: string[];
  degree: string;
  currentRunningPrograms: number;
  currentPrograms: number;
  additionalTags: string[];
  isTaskCompleted: boolean;
  isQualified: boolean;
}
