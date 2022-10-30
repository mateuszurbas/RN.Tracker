import { CommonComponentProps } from "@ts/component";
import { TrackerProject } from "@ts/tracker";

export type TrackerItemProps = CommonComponentProps & {
  name: string;
  project: TrackerProject;
  startActiveDate?: Date;
  duration: number;
  onStart: () => void;
  onStop: () => void;
};
