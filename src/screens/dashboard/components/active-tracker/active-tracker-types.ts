import { CommonComponentProps } from "@ts/component";
import { Tracker } from "@ts/tracker";

export type ActiveTrackerProps = CommonComponentProps & {
  tracker?: Tracker;
  stopTracker: () => void;
};
