import React, { FC, useMemo } from "react";
import { observer } from "mobx-react-lite";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TrackerGroup } from "@components/tracker-group";
import { TrackerItem } from "@components/tracker-item";
import { useStores } from "@models/root-store";
import { groupBy } from "@utils/normalize";
import { renderCond } from "@utils/rendering";
import {
  Header,
  Container,
  Content,
  TrackerGroupContainer,
  ActiveTrackerContainer,
  ActionButton,
  AddIcon,
  TextButton,
  ButtonSection,
} from "./dashboard.styles";

export const DashboardScreen: FC = observer(() => {
  const saveArea = useSafeAreaInsets();

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

  const header = (
    <Header paddingTop={saveArea.top}>
      <ActionButton>
        <ButtonSection>
          <TextButton>Add</TextButton>
          <AddIcon />
        </ButtonSection>
      </ActionButton>
    </Header>
  );

  return (
    <>
      {header}
      <Container>
        <Content>{trackers}</Content>
      </Container>
      {active}
    </>
  );
});
