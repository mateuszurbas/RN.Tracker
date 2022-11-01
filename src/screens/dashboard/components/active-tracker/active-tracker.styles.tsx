import Animated from "react-native-reanimated";
import styled, { css } from "styled-components/native";
import { boxShadow, color, spacing } from "@theme";

type ContainerProps = {
  height: number;
};

export const Container = styled(Animated.View)<ContainerProps>`
  ${boxShadow.regular};
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: ${color.white};
  padding: ${spacing.$10} ${spacing.$15};

  ${({ height }) =>
    css`
      height: ${height}px;
    `};
`;
