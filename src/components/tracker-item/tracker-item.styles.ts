import styled from "styled-components/native";
import { CommonText, CommonTextSize } from "@components/common-text";
import { Touchable } from "@components/touchable";
import { color, fontWeight, spacing } from "@theme";

export const Container = styled.View`
  background-color: ${color.white};
  padding: ${spacing.$15} ${spacing.$10};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InformationSection = styled.View``;

export const Title = styled(CommonText).attrs({
  size: CommonTextSize.$15,
})`
  font-weight: ${fontWeight.semiBold};
`;

export const Project = styled(CommonText).attrs({
  size: CommonTextSize.$15,
})`
  color: ${color.black};
`;

export const ActionSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Duration = styled(CommonText).attrs({
  size: CommonTextSize.$15,
})``;

export const DurationContainer = styled.View`
  margin-right: ${spacing.$10};
`;

export const ActionButton = styled(Touchable).attrs({
  extendedClickableArea: true,
})``;
