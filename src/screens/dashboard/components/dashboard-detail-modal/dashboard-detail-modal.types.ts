import { CommonComponentProps } from "@ts/component";
import { Tracker } from "@ts/tracker";

export type DashboardDetailModalProps = CommonComponentProps & {
  visible: boolean;
  toggleVisibility: () => void;
  tracker?: Tracker;
  onRemove: () => void;
};
