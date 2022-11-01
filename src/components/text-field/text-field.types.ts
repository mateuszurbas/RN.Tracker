import { Control, RegisterOptions } from "react-hook-form";
import { CommonComponentProps } from "@ts/component";

export type TextFieldProps = CommonComponentProps & {
  control: Control<any>;
  name: string;
  rules?: RegisterOptions;
  formName: string;
  label?: string;
  placeholder?: string;
};
