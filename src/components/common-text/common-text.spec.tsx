import React from "react";
import { render } from "@testing-library/react-native";
import { TestCommonComponentProps } from "@ts/component";
import { CommonText } from "./common-text.component";
import { CommonTextProps, CommonTextSize } from "./common-text.types";

const commonProps: TestCommonComponentProps & CommonTextProps = {
  testID: "testID",
  children: "text",
  size: CommonTextSize.$15,
};

describe("CommonText", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<CommonText {...commonProps} />);
    expect(getByTestId(commonProps.testID)).toBeTruthy();
  });

  it("contains text", () => {
    const { getAllByText } = render(<CommonText {...commonProps} />);
    const elements = getAllByText(commonProps.children as string);
    expect(elements.length).toBe(1);
  });
});
