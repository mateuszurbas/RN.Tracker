import React, { FC, useEffect } from "react";
import { useSharedValue, withTiming, Easing, useAnimatedStyle } from "react-native-reanimated";
import { TrackerItem } from "@components/tracker-item";
import { renderCond } from "@utils/rendering";
import { ActiveTrackerProps } from "./active-tracker-types";
import { Container } from "./active-tracker.styles";

const offset = 120;

export const ActiveTracker: FC<ActiveTrackerProps> = ({
  tracker,
  stopTracker,
}: ActiveTrackerProps) => {
  const yOffset = useSharedValue(offset);

  useEffect(() => {
    yOffset.value = withTiming(tracker ? 0 : 200, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
  }, [tracker]);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: yOffset.value }],
  }));

  const trackerElement = renderCond(tracker, (tracker) => (
    <TrackerItem
      name={tracker.name}
      project={tracker.project}
      duration={tracker.duration}
      startActiveDate={tracker.startActiveDate}
      onStop={stopTracker}
    />
  ));

  return (
    <Container style={animatedStyles} height={offset}>
      {trackerElement}
    </Container>
  );
};
