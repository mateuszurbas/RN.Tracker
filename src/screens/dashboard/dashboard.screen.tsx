import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { View } from "react-native";
import { TrackerItem } from "@components/tracker-item";
import { useStores } from "@models/root-store";
import { Container } from "./dashboard.styles";

export const DashboardScreen: FC = observer(() => {
  const {
    trackers: { trackerList, activateTracker, stopTrackers },
  } = useStores();

  const trackers = trackerList.map((tracker) => {
    const handleOnStart = () => activateTracker(tracker.id);
    const handleOnStop = () => stopTrackers();

    return (
      <TrackerItem
        key={tracker.id}
        name={tracker.name}
        project={tracker.project}
        duration={tracker.duration}
        startActiveDate={tracker.startActiveDate}
        onStart={handleOnStart}
        onStop={handleOnStop}
      />
    );
  });

  const header = <View />;

  return (
    <Container>
      {header}
      {trackers}
    </Container>
  );
});
