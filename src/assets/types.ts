export interface Note {
  id: number;
  title: string;
  description: string;
  owner: string;
  date: string;
  isShared: boolean;
}

export interface Friend {
  name: string;
}