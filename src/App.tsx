import React, { FC, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context";
import { RootStore, RootStoreModel, RootStoreProvider } from "@models/root-store";
import { DashboardScreen } from "@screens/dashboard";
import { Tracker } from "@ts/tracker";
import { renderCond } from "@utils/rendering";
import { storageGetItem, StorageKey } from "@utils/storage";
import { mockTrackers } from "./app.mock";
import { color } from "./theme/color";

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
    const initTrackerList = __DEV__ ? mockTrackers : [];
    const restoredTrackerList: Tracker[] =
      (await storageGetItem(StorageKey.TrackerData)) || initTrackerList;

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
