import React, { FC, useMemo } from "react";
import { observer } from "mobx-react-lite";
import { View } from "react-native";
import { TrackerGroup } from "@components/tracker-group";
import { useStores } from "@models/root-store";
import { groupBy } from "@utils/normalize";
import {
  ActiveTrackerContainer,
  Container,
  Content,
  TrackerGroupContainer,
} from "./dashboard.styles";
import { renderCond } from "@utils/rendering";
import { TrackerItem } from "@components/tracker-item";

export const DashboardScreen: FC = observer(() => {
  const {
    trackers: { trackerList, activateTracker, stopTrackers, activeTracker },
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

  const active = renderCond(activeTracker, (activeTracker) => {
    const handleOnStart = () => activateTracker(activeTracker.id);
    const handleOnStop = () => stopTrackers();

    return (
      <ActiveTrackerContainer>
        <TrackerItem
          name={activeTracker.name}
          project={activeTracker.project}
          duration={activeTracker.duration}
          startActiveDate={activeTracker.startActiveDate}
          onStart={handleOnStart}
          onStop={handleOnStop}
        />
      </ActiveTrackerContainer>
    );
  });

  const header = <View />;

  return (
    <>
      <Container>
        {header}
        <Content>{trackers}</Content>
      </Container>
      {active}
    </>
  );
});
