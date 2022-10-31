import styled from "styled-components/native";
import { CommonText, CommonTextSize } from "@components/common-text";
import { borderRadius, boxShadow, color, spacing } from "@theme";

export const Container = styled.View`
  ${boxShadow.regular};
  border-radius: ${borderRadius.regular};
  background-color: ${color.white};
  padding: ${spacing.$10};
`;

export const Title = styled(CommonText).attrs({
  size: CommonTextSize.$17,
})``;
