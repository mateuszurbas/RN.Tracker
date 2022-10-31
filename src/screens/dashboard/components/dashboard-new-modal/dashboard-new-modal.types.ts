import { CommonComponentProps } from "@ts/component";
import { TrackerProject } from "@ts/tracker";

export type DashboardNewModalProps = CommonComponentProps & {
  visible: boolean;
  toggleVisibility: () => void;
  onCreate: (data: { name: string; project: TrackerProject }) => void;
};
