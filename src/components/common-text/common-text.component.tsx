import React, { FC } from "react";
import { Container } from "./common-text.styles";
import { CommonTextProps } from "./common-text.types";

export const CommonText: FC<CommonTextProps> = ({
  testID,
  children,
  style,
  size,
}: CommonTextProps) => (
  <Container testID={testID} style={style} size={size}>
    {children}
  </Container>
);
