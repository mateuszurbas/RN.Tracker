import React, { FC, useMemo, useState } from "react";
import { observer } from "mobx-react-lite";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TrackerGroup } from "@components/tracker-group";
import { useStores } from "@models/root-store";
import { Tracker, TrackerProject } from "@ts/tracker";
import { groupBy } from "@utils/normalize";
import { renderCond } from "@utils/rendering";
import { ActiveTracker } from "./components/active-tracker";
import { DashboardDetailModal } from "./components/dashboard-detail-modal";
import { DashboardNewModal } from "./components/dashboard-new-modal";
import {
  Header,
  Container,
  ScrollViewContent,
  TrackerGroupContainer,
  ActionButton,
  AddIcon,
  TextButton,
  ButtonSection,
  ScrollViewOffset,
} from "./dashboard.styles";

export const DashboardScreen: FC = observer(() => {
  const [selectedTracker, setSelectedTracker] = useState<Tracker>();
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);
  const [isNewModalVisible, setIsNewModalVisible] = useState(false);

  const saveArea = useSafeAreaInsets();
  const paddingTop = Platform.OS === "ios" ? saveArea.top : 10;

  const {
    trackers: {
      trackerList,
      activateTracker,
      stopTrackers,
      activeTracker,
      removeTracker,
      addTracker,
    },
  } = useStores();

  const groupByDateTrackerList = useMemo(
    () => groupBy(trackerList, (tracker) => tracker.startDate?.toDateString()),
    [trackerList],
  );

  const handleOnPressTracker = (tracker: Tracker) => {
    setSelectedTracker(tracker);
    setIsDetailModalVisible(true);
  };

  const handleOnRemoveTracker = () => {
    if (selectedTracker) {
      removeTracker(selectedTracker.id);
    }
  };

  const handleOnAddTracker = (data: { name: string; project: TrackerProject }) => {
    if (data) {
      addTracker(data.name, data.project);
    }
  };

  const trackers = Object.entries(groupByDateTrackerList).map(([key, list]) => (
    <TrackerGroupContainer key={key}>
      <TrackerGroup
        title={key}
        trackers={list}
        activateTracker={activateTracker}
        stopTrackers={stopTrackers}
        onPress={handleOnPressTracker}
      />
    </TrackerGroupContainer>
  ));

  const activeTrackerOffset = renderCond(activeTracker, () => <ScrollViewOffset />);

  const header = (
    <Header paddingTop={paddingTop}>
      <ActionButton onPress={() => setIsNewModalVisible(true)}>
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
        <ScrollViewContent>
          {trackers}
          {activeTrackerOffset}
        </ScrollViewContent>
      </Container>
      <ActiveTracker tracker={activeTracker} stopTracker={stopTrackers} />
      <DashboardDetailModal
        visible={isDetailModalVisible}
        toggleVisibility={() => setIsDetailModalVisible(!isDetailModalVisible)}
        tracker={selectedTracker}
        onRemove={handleOnRemoveTracker}
      />
      <DashboardNewModal
        visible={isNewModalVisible}
        toggleVisibility={() => setIsNewModalVisible(!isNewModalVisible)}
        onCreate={handleOnAddTracker}
      />
    </>
  );
});
