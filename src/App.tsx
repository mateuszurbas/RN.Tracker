import React, { FC, useEffect, useState } from "react";
import { RootStore, RootStoreModel, RootStoreProvider } from "@models/root-store";
import { DashboardScreen } from "@screens/dashboard";
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
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    initApplication();
  }, []);

  const initApplication = async () => {
    const data = await storageGetItem(StorageKey.TrackerData);
    await setupStore(data);
    setIsReady(true);
  };

  const setupStore = async (data: Tracker[]) => {
    const initTrackers = data || mockTrackers;

    const rootStoreInit = RootStoreModel.create({
      trackers: { trackerList: initTrackers },
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
