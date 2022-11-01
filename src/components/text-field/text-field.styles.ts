import styled from "styled-components/native";
import { CommonText as TextComponent, CommonTextSize } from "@components/common-text";
import { borderRadius, color, fontSize, spacing } from "@theme";

export const Container = styled.View``;

export const LabelContainer = styled.View`
  margin-bottom: ${spacing.$15};
`;

export const Label = styled(TextComponent).attrs({
  size: CommonTextSize.$15,
})``;

export const Field = styled.View``;

export const TextInputContainer = styled.View`
  flex-direction: row;
  border: 1px solid ${color.grey};
  border-radius: ${borderRadius.regular};
  height: 50px;
  background-color: ${color.white};
`;

export const TextInput = styled.TextInput`
  flex: 1;
  padding: 0 ${spacing.$15};
  color: ${color.dark};
  font-size: ${fontSize.$15};
`;

export const ErrorContainer = styled.View`
  margin-top: ${spacing.$4};
  margin-left: ${spacing.$15};
`;

export const ErrorText = styled(TextComponent).attrs({
  size: CommonTextSize.$11,
})`
  color: ${color.red};
`;
