import React, { FC } from "react";
import { FieldError, useController } from "react-hook-form";
import { renderCond } from "@utils/rendering";
import {
  Container,
  Field,
  Label,
  TextInput,
  LabelContainer,
  ErrorContainer,
  TextInputContainer,
  ErrorText,
} from "./text-field.styles";
import { TextFieldProps } from "./text-field.types";

export const TextField: FC<TextFieldProps> = ({
  testID,
  control,
  name,
  rules,
  label,
  placeholder,
  style,
}: TextFieldProps) => {
  const {
    fieldState: { error },
    field: { value, onBlur, onChange },
  } = useController({ control, name, rules });

  const labelElement = renderCond(label, () => (
    <LabelContainer>
      <Label>{label}</Label>
    </LabelContainer>
  ));

  const errorElement = (error?: FieldError) =>
    renderCond(error, (error) => (
      <ErrorContainer>
        <ErrorText>{error.message}</ErrorText>
      </ErrorContainer>
    ));

  return (
    <Container testID={testID}>
      {labelElement}
      <Field>
        <TextInputContainer>
          <TextInput
            value={value}
            placeholder={placeholder}
            style={style}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        </TextInputContainer>
        {errorElement(error)}
      </Field>
    </Container>
  );
};
