import { ReactNode } from "react";
import { CommonComponentProps } from "@ts/component";

export type TouchableProps = CommonComponentProps & {
  onPress?: () => void;
  children: ReactNode | ReactNode[];
  disabled?: boolean;
  extendedClickableArea?: boolean;
};
