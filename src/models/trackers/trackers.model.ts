import { types } from "mobx-state-tree";
import { Tracker } from "@ts/tracker";

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
        self.trackerList = updatedTrackerList;
      },
    };
  })

  .views((self) => ({
    get getActiveTracker() {
      return self.trackerList.find((tracker) => tracker.startActiveDate);
    },
  }));
