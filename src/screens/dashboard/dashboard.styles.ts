import styled from "styled-components/native";
import { borderRadius, boxShadow, color, spacing } from "@theme";

export const Container = styled.SafeAreaView`
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

export const ActiveTrackerContainer = styled.View`
  ${boxShadow.regular}
  background-color: ${color.white};
  padding: ${spacing.$10} ${spacing.$15} ${spacing.$30};
`;
