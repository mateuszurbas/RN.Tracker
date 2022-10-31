import React, { FC, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context";
import { RootStore, RootStoreModel, RootStoreProvider } from "@models/root-store";
import { DashboardScreen } from "@screens/dashboard";
import { Tracker, TrackerProject } from "@ts/tracker";
import { renderCond } from "@utils/rendering";
import { storageGetItem, StorageKey } from "@utils/storage";
import { color } from "./theme/color";

const mockTrackers: Tracker[] = [
  {
    id: "test-id-1",
    name: "Test",
    project: TrackerProject.Mango,
    duration: 0,
    startDate: new Date(),
    startActiveDate: new Date(),
  },
  {
    id: "test-id-2",
    name: "Test",
    project: TrackerProject.Mango,
    duration: 32300,
    startDate: new Date(),
  },
  {
    id: "test-id-3",
    name: "Test 1",
    project: TrackerProject.KiwiAndCo,
    duration: 12300,
    startDate: new Date(new Date().setDate(new Date().getDate() - 1)),
  },
  {
    id: "test-id-4",
    name: "Test 2",
    project: TrackerProject.UXReview,
    duration: 20123123,
    startDate: new Date(new Date().setDate(new Date().getDate() - 1)),
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
      startDate: new Date(tracker.startDate),
    }));

    const rootStoreInit = RootStoreModel.create({
      trackers: { trackerList: parsedTrackerList },
    });
    setRootStore(rootStoreInit);
  };

  return renderCond(isReady, () => (
    <View style={styles.container}>
      <RootStoreProvider value={rootStore as RootStore}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <DashboardScreen />
        </SafeAreaProvider>
      </RootStoreProvider>
    </View>
  ));
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.grey,
    flex: 1,
  },
});

export default App;
