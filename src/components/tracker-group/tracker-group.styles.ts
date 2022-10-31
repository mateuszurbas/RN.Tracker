import styled from "styled-components/native";
import { CommonText, CommonTextSize } from "@components/common-text";
import { borderRadius, boxShadow, color, fontWeight, spacing } from "@theme";

export const Container = styled.View`
  ${boxShadow.regular};
  border-radius: ${borderRadius.regular};
  background-color: ${color.white};
  padding-bottom: ${spacing.$10};
`;

export const HeaderSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.$10} ${spacing.$10} 0;
`;

export const TrackerItemContainer = styled.View``;

export const Line = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${color.grey};
`;

export const Title = styled(CommonText).attrs({
  size: CommonTextSize.$15,
})`
  font-weight: ${fontWeight.semiBold};
`;
