import { cond } from "@utils/logic";

export enum FormatDuration {
  Detail = "detail",
  Normal = "normal",
}

export const formatDuration = (ms: number, type: FormatDuration): string => {
  const seconds = Math.floor((ms / 1000) % 60);
  const padSeconds = String(seconds).padStart(2, "0");

  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const padMinutes = String(minutes).padStart(2, "0");

  const hours = Math.floor((ms / 1000 / 3600) % 24);
  const padHours = String(hours).padStart(2, "0");

  return (
    cond([
      [type === FormatDuration.Detail, `${padHours}:${padMinutes}:${padSeconds}`],
      [type === FormatDuration.Normal, `${padHours}h ${padMinutes}min`],
    ]) || ""
  );
};

export const sumDuration = (duration: number, startActiveDate?: Date) => {
  const activeDateDuration = startActiveDate ? new Date().getTime() - startActiveDate.getTime() : 0;
  const currentDuration = duration + activeDateDuration;
  return currentDuration;
};
