import React, { FC, useEffect, useState } from "react";
import { RootStore, RootStoreModel, RootStoreProvider } from "@models/root-store";
import { DashboardScreen } from "@screens/dashboard";
import { Tracker, TrackerProject } from "@ts/tracker";
import { renderCond } from "@utils/rendering";
import { storageGetItem, StorageKey } from "@utils/storage";

const mockTrackers: Tracker[] = [
  {
    id: "adw1",
    name: "Test",
    project: TrackerProject.Mango,
    duration: 0,
    startActiveDate: new Date(),
  },
  {
    id: "dawd2",
    name: "Test 1",
    project: TrackerProject.KiwiAndCo,
    duration: 12300,
  },
  {
    id: "asd33",
    name: "Test 2",
    project: TrackerProject.UXReview,
    duration: 20123123,
  },
];
const App: FC = () => {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    initApplication();
  }, []);

  const initApplication = async () => {
    await setupStore();
    setIsReady(true);
  };

  const setupStore = async () => {
    // TODO: MOCK DATA - on release should be empty array
    const restoredTrackerList: Tracker[] =
      (await storageGetItem(StorageKey.TrackerData)) || mockTrackers;

    const parsedTrackerList = restoredTrackerList.map((tracker) => ({
      ...tracker,
      startActiveDate: tracker.startActiveDate ? new Date(tracker.startActiveDate) : undefined,
    }));

    const rootStoreInit = RootStoreModel.create({
      trackers: { trackerList: parsedTrackerList },
    });
    setRootStore(rootStoreInit);
  };

  return renderCond(isReady, () => (
    <RootStoreProvider value={rootStore as RootStore}>
      <DashboardScreen />
    </RootStoreProvider>
  ));
};

export default App;
