import React, { FC, useEffect, useState } from "react";
import { TrackerItem } from "@components/tracker-item";
import { FormatDuration, formatDuration, sumDuration } from "@utils/time";
import { Container, Title } from "./tracker-group.styles";
import { TrackerGroupProps } from "./tracker-group.types";

export const TrackerGroup: FC<TrackerGroupProps> = ({
  testID,
  title,
  trackers,
  activateTracker,
  stopTrackers,
}: TrackerGroupProps) => {
  const [currentDuration, setCurrentDuration] = useState("--:--:--");
  const durationCount = trackers.reduce((partialSum, a) => partialSum + a.duration, 0);
  const activeTracker = trackers.find((t) => t.startActiveDate);

  useEffect(() => {
    if (activeTracker) {
      const interval = setInterval(getCurrentDuration, 1000);
      return () => clearInterval(interval);
    } else {
      getCurrentDuration();
    }
  }, [activeTracker]);

  const getCurrentDuration = () => {
    const sum = sumDuration(durationCount, activeTracker?.startActiveDate);
    setCurrentDuration(formatDuration(sum, FormatDuration.Normal));
  };

  const items = trackers.map((tracker) => {
    const handleOnStart = () => activateTracker(tracker.id);
    const handleOnStop = () => stopTrackers();

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

  return (
    <Container testID={testID}>
      <Title>{title}</Title>
      <Title>{currentDuration}</Title>
      {items}
    </Container>
  );
};
