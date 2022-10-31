import React, { FC, useMemo } from "react";
import { observer } from "mobx-react-lite";
import { View } from "react-native";
import { TrackerGroup } from "@components/tracker-group";
import { useStores } from "@models/root-store";
import { groupBy } from "@utils/normalize";
import { Container, Content, TrackerGroupContainer } from "./dashboard.styles";

export const DashboardScreen: FC = observer(() => {
  const {
    trackers: { trackerList, activateTracker, stopTrackers },
  } = useStores();

  const groupByDateTrackerList = useMemo(
    () => groupBy(trackerList, (tracker) => tracker.startDate?.toDateString()),
    [trackerList],
  );

  const trackers = Object.entries(groupByDateTrackerList).map(([key, list]) => (
    <TrackerGroupContainer key={key}>
      <TrackerGroup
        title={key}
        trackers={list}
        activateTracker={activateTracker}
        stopTrackers={stopTrackers}
      />
    </TrackerGroupContainer>
  ));

  const header = <View />;

  return (
    <Container>
      {header}
      <Content>{trackers}</Content>
    </Container>
  );
});
