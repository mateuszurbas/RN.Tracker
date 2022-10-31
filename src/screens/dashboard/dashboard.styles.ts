import styled from "styled-components/native";
import { color, spacing } from "@theme";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${color.grey};
  margin: 0 ${spacing.$15};
`;

export const TrackerGroupContainer = styled.View`
  margin-bottom: ${spacing.$15};
`;
