import { types } from "mobx-state-tree";
import uuid from "react-native-uuid";
import { Tracker, TrackerProject } from "@ts/tracker";
import { StorageKey, storageSetItem } from "@utils/storage";

export const TrackersModel = types
  .model({})
  .named("Trackers")
  .props({
    trackerList: types.optional(types.frozen<Tracker[]>(), []),
  })
  .actions((self) => {
    const stopTrackerList = (trackers: Tracker[]) => {
      trackers.forEach((t) => {
        if (t.startActiveDate) {
          const activeDurationCount = new Date().getTime() - t.startActiveDate.getTime();
          t.duration = t.duration + activeDurationCount;
          t.startActiveDate = undefined;
        }
      });
      return trackers;
    };

    return {
      setTrackerList: (data: Tracker[]) => {
        self.trackerList = data;
      },
      stopTrackers: () => {
        const updatedTrackerList = stopTrackerList([...self.trackerList]);
        storageSetItem(StorageKey.TrackerData, updatedTrackerList);
        self.trackerList = updatedTrackerList;
      },
      removeTracker: (id: string) => {
        const updatedTrackerList = self.trackerList.filter((t) => t.id !== id);
        storageSetItem(StorageKey.TrackerData, updatedTrackerList);
        self.trackerList = updatedTrackerList;
      },
      addTracker: (name: string, project: TrackerProject) => {
        const newTracker: Tracker = {
          id: uuid.v4().toString(),
          name,
          project,
          startDate: new Date(),
          duration: 0,
        };
        const updatedTrackerList = [newTracker, ...self.trackerList];

        storageSetItem(StorageKey.TrackerData, updatedTrackerList);
        self.trackerList = updatedTrackerList;
      },
      activateTracker: (id: string) => {
        const updatedTrackerList = stopTrackerList([...self.trackerList]);
        const updatedTrackerIndex = updatedTrackerList.findIndex((t) => t.id === id);
        if (typeof updatedTrackerIndex === "number") {
          updatedTrackerList[updatedTrackerIndex] = {
            ...updatedTrackerList[updatedTrackerIndex],
            startActiveDate: new Date(),
          };
        }
        storageSetItem(StorageKey.TrackerData, updatedTrackerList);
        self.trackerList = updatedTrackerList;
      },
    };
  })

  .views((self) => ({
    get activeTracker() {
      return self.trackerList.find((tracker) => tracker.startActiveDate);
    },
  }));
