import { ReactNode } from "react";
import { CommonComponentProps } from "@ts/component";

export enum CommonTextSize {
  $15 = "$15",
  $17 = "$17",
}

export type CommonTextProps = CommonComponentProps & {
  children: ReactNode;
  size: CommonTextSize;
};
