import { StyleProp } from "react-native";

export type CommonComponentProps = {
  testID?: string;
  style?: StyleProp<any>;
};

export type TestCommonComponentProps = {
  testID: string;
};
