import { Instance, types } from "mobx-state-tree";
import { TrackersModel } from "@models/trackers";

export const RootStoreModel = types.model("RootStore").props({
  trackers: types.optional(TrackersModel, {}),
});

export type RootStore = Instance<typeof RootStoreModel>;
