import Icon from "react-native-vector-icons/Ionicons";
import styled, { css } from "styled-components/native";
import { CommonText, CommonTextSize } from "@components/common-text";
import { Touchable } from "@components/touchable";
import { boxShadow, color, spacing } from "@theme";

type HeaderProps = {
  paddingTop: number;
};

type ActiveTrackerContainerProps = {
  paddingBottom: number;
};

export const Header = styled.View<HeaderProps>`
  ${boxShadow.regular};
  z-index: 1;
  background-color: ${color.white};
  ${({ paddingTop }) =>
    css`
      padding: ${paddingTop}px ${spacing.$15} ${spacing.$10};
    `};
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${color.grey};
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: ${spacing.$15};
  background-color: ${color.grey};
`;

export const TrackerGroupContainer = styled.View`
  margin-bottom: ${spacing.$15};
`;

export const ActiveTrackerContainer = styled.View<ActiveTrackerContainerProps>`
  ${boxShadow.regular}
  background-color: ${color.white};
  ${({ paddingBottom }) =>
    css`
      padding: ${spacing.$10} ${spacing.$15} ${paddingBottom}px;
    `};
`;

export const ActionButton = styled(Touchable).attrs({
  extendedClickableArea: true,
})`
  align-self: flex-end;
`;

export const ButtonSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextButton = styled(CommonText).attrs({
  size: CommonTextSize.$17,
})`
  margin-right: ${spacing.$4};
`;

export const AddIcon = styled(Icon).attrs({
  name: "add-outline",
  size: 30,
  color: color.green2,
})``;
