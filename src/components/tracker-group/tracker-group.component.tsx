import React, { FC, useEffect, useState } from "react";
import { TrackerItem } from "@components/tracker-item";
import { renderCond } from "@utils/rendering";
import { FormatDuration, formatDuration, sumDuration } from "@utils/time";
import {
  Container,
  HeaderSection,
  Line,
  Title,
  TrackerItemContainer,
} from "./tracker-group.styles";
import { TrackerGroupProps } from "./tracker-group.types";

export const TrackerGroup: FC<TrackerGroupProps> = ({
  testID,
  title,
  trackers,
  onPress,
  activateTracker,
  stopTrackers,
}: TrackerGroupProps) => {
  const [currentDuration, setCurrentDuration] = useState("00h 00min");
  const durationCount = trackers.reduce((partialSum, a) => partialSum + a.duration, 0);
  const activeTracker = trackers.find((t) => t.startActiveDate);

  useEffect(() => {
    getCurrentDuration();
  }, [trackers]);

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

  const items = trackers.map((tracker, i) => {
    const handleOnStart = () => activateTracker(tracker.id);
    const handleOnStop = () => stopTrackers();
    const handleOnPress = () => onPress(tracker);

    const line = renderCond(trackers.length - 1 > i, () => <Line />);

    return (
      <TrackerItemContainer key={tracker.id}>
        <TrackerItem
          name={tracker.name}
          project={tracker.project}
          duration={tracker.duration}
          startActiveDate={tracker.startActiveDate}
          onPress={handleOnPress}
          onStart={handleOnStart}
          onStop={handleOnStop}
        />
        {line}
      </TrackerItemContainer>
    );
  });

  return (
    <Container testID={testID}>
      <HeaderSection>
        <Title>{title}</Title>
        <Title>{currentDuration}</Title>
      </HeaderSection>

      {items}
    </Container>
  );
};
