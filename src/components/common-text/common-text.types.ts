import { ReactNode } from "react";
import { CommonComponentProps } from "@ts/component";

export enum CommonTextSize {
  $13 = "$13",
  $15 = "$15",
}

export type CommonTextProps = CommonComponentProps & {
  children: ReactNode;
  size: CommonTextSize;
};
