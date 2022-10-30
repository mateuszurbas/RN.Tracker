import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { TestCommonComponentProps } from "@ts/component";
import { Touchable } from "./touchable.component";
import { TouchableProps } from "./touchable.types";

const commonProps: TestCommonComponentProps & TouchableProps = {
  testID: "testID",
  onPress: jest.fn(),
  children: "children",
};

describe("Touchable", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Touchable {...commonProps} />);
    expect(getByTestId(commonProps.testID)).toBeTruthy();
  });

  it("binds onPress", () => {
    const { getByTestId } = render(<Touchable {...commonProps} />);
    const element = getByTestId(commonProps.testID);
    fireEvent.press(element);
    expect(commonProps.onPress).toHaveBeenCalledTimes(1);
  });
});
