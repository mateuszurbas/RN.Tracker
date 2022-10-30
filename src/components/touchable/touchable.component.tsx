import React, { FC } from "react";
import { Container } from "./touchable.styles";
import { TouchableProps } from "./touchable.types";

const extendedClickableAreaValue = 10;

export const Touchable: FC<TouchableProps> = ({
  testID,
  style,
  onPress,
  children,
  disabled,
  extendedClickableArea,
}: TouchableProps) => {
  const hitSlop = extendedClickableArea
    ? {
        top: extendedClickableAreaValue,
        bottom: extendedClickableAreaValue,
        left: extendedClickableAreaValue,
        right: extendedClickableAreaValue,
      }
    : undefined;

  return (
    <Container
      testID={testID}
      onPress={onPress}
      style={style}
      disabled={disabled}
      hitSlop={hitSlop}
    >
      {children}
    </Container>
  );
};
