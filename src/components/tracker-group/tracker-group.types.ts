import { CommonComponentProps } from "@ts/component";
import { Tracker } from "@ts/tracker";

export type TrackerGroupProps = CommonComponentProps & {
  title: string;
  trackers: Tracker[];
  onPress: (tracker: Tracker) => void;
  activateTracker: (id: string) => void;
  stopTrackers: () => void;
};
