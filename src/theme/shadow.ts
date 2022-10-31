import { css } from "styled-components/native";
import { color } from "./color";

export const boxShadow = {
  regular: css`
    shadow-color: ${color.black};
    shadow-opacity: 0.28;
    shadow-radius: 4.5px;
    shadow-offset: 0 2px;
    elevation: 6;
  `,
};
