export enum TrackerProject {
  UXReview = "UX Review",
  KiwiAndCo = "Kiwi & Co",
  Mango = "Mango",
}

export type Tracker = {
  id: string;
  name: string;
  project: TrackerProject;
  startActiveDate?: Date;
  duration: number;
};
