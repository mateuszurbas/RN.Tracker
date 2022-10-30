import styled, { css } from "styled-components/native";
import { color, fontSize, fontWeight, lineHeight } from "@theme";
import { cond } from "@utils/logic";
import { CommonTextSize } from "./common-text.types";

type ContainerStyledProps = {
  size: CommonTextSize;
};

const regularFontStyles = css`
  font-size: ${fontSize.$13};
  font-weight: ${fontWeight.regular};
`;

const headerFontStyles = css`
  font-size: ${fontSize.$15};
  font-weight: ${fontWeight.bold};
`;

export const Container = styled.Text<ContainerStyledProps>`
  color: ${color.dark};
  line-height: ${lineHeight.$22};

  ${({ size }) =>
    cond([
      [size === CommonTextSize.$13, regularFontStyles],
      [size === CommonTextSize.$15, headerFontStyles],
    ])}
`;
