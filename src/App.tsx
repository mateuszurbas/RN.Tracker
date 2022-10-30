import React, { FC, useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { TrackerItem } from "@components/tracker-item";
import { Tracker, TrackerProject } from "@ts/tracker";
import { renderCond } from "@utils/rendering";
import { storageGetItem, StorageKey } from "@utils/storage";

const mockTrackers: Tracker[] = [
  {
    id: "1",
    name: "Test",
    project: TrackerProject.Mango,
    duration: 0,
    startActiveDate: new Date(),
  },
  {
    id: "2",
    name: "Test 1",
    project: TrackerProject.KiwiAndCo,
    duration: 12300,
  },
  {
    id: "3",
    name: "Test 2",
    project: TrackerProject.UXReview,
    duration: 20123123,
  },
];

const App: FC = () => {
  const [isReady, setIsReady] = useState(false);
  const [trackers, setTrackers] = useState(mockTrackers);

  useEffect(() => {
    initApplication();
  }, []);

  const initApplication = async () => {
    const data = await storageGetItem(StorageKey.TrackerData);
    console.log(data);
    setIsReady(true);
  };

  const updateTracker = (tracker: Tracker) => {
    const newTrackers = [...trackers];
    const updatedTrackerIndex = newTrackers.findIndex((a) => a.id === tracker.id);
    newTrackers[updatedTrackerIndex] = tracker;
    setTrackers(newTrackers);
  };

  const trackerList = trackers.map((tracker) => {
    const handleOnStart = () => {
      const newTracker: Tracker = {
        ...tracker,
        startActiveDate: new Date(),
      };

      updateTracker(newTracker);
    };

    const handleOnStop = () => {
      if (tracker.startActiveDate) {
        const activeDurationCount = new Date().getTime() - tracker.startActiveDate.getTime();

        const newTracker: Tracker = {
          ...tracker,
          duration: tracker.duration + activeDurationCount,
          startActiveDate: undefined,
        };

        updateTracker(newTracker);
      }
    };

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

  return renderCond(isReady, () => <SafeAreaView>{trackerList}</SafeAreaView>);
};

export default App;
