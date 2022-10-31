import { ViewStyle } from "react-native";
import styled from "styled-components/native";
import { CommonText, CommonTextSize } from "@components/common-text";
import { Touchable } from "@components/touchable";
import { borderRadius, color, fontWeight, spacing } from "@theme";

export const modalStyles: ViewStyle = {
  margin: 10,
};

export const Container = styled.View`
  background-color: ${color.white};
  border-radius: ${borderRadius.regular};
`;

export const Content = styled.View`
  margin: ${spacing.$15};
`;

export const Section = styled.View`
  margin-top: ${spacing.$15};
  align-items: center;
`;

export const Title = styled(CommonText).attrs({
  size: CommonTextSize.$17,
})``;

export const DetailSection = styled.View`
  margin-top: ${spacing.$15};
`;

export const Action = styled(Touchable)`
  border: 1px solid ${color.grey};
  padding: ${spacing.$10};
  border-radius: ${borderRadius.regular};
  justify-content: center;
  align-items: center;
  margin-bottom: ${spacing.$10};
`;

export const Text = styled(CommonText).attrs({
  size: CommonTextSize.$15,
})`
  text-align: center;
`;

export const CancelText = styled(CommonText).attrs({
  size: CommonTextSize.$15,
})`
  color: ${color.dark};
  font-weight: ${fontWeight.semiBold};
`;

export const RemoveText = styled(CommonText).attrs({
  size: CommonTextSize.$15,
})`
  color: ${color.red};
  font-weight: ${fontWeight.bold};
`;

export const Bold = styled(CommonText).attrs({
  size: CommonTextSize.$15,
})`
  font-weight: ${fontWeight.semiBold};
`;
