import { Tracker, TrackerProject } from "@ts/tracker";

export const mockTrackers: Tracker[] = [
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
