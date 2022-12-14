import React, { FC, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { color } from "@theme";
import { renderCond } from "@utils/rendering";
import { FormatDuration, formatDuration, sumDuration } from "@utils/time";
import {
  ActionButton,
  ActionSection,
  Circle,
  Container,
  Duration,
  DurationContainer,
  InformationSection,
  Project,
  ProjectContainer,
  ProjectSection,
  Title,
} from "./tracker-item.styles";
import { TrackerItemProps } from "./tracker-item.types";

export const TrackerItem: FC<TrackerItemProps> = ({
  testID,
  name,
  project,
  duration,
  startActiveDate,
  onPress,
  onStart,
  onStop,
}: TrackerItemProps) => {
  const [currentDuration, setCurrentDuration] = useState("--:--:--");

  const isActive = Boolean(startActiveDate);

  useEffect(() => {
    if (startActiveDate) {
      const interval = setInterval(getCurrentDuration, 100);
      return () => clearInterval(interval);
    } else {
      getCurrentDuration();
    }
  }, [startActiveDate]);

  const getCurrentDuration = () => {
    const sum = sumDuration(duration, startActiveDate);
    setCurrentDuration(formatDuration(sum, FormatDuration.Detail));
  };

  const handleAction = isActive ? onStop : onStart;

  const icon = renderCond(
    isActive,
    () => <Icon name="ios-stop-circle-outline" size={30} color={color.red} />,
    () => <Icon name="play-circle-outline" size={30} color={color.dark} />,
  );

  return (
    <Container testID={testID} onPress={onPress} disabled={!onPress}>
      <InformationSection>
        <Title>{name}</Title>
        <ProjectSection>
          <Circle trackerProject={project} />
          <ProjectContainer>
            <Project trackerProject={project}>{project}</Project>
          </ProjectContainer>
        </ProjectSection>
      </InformationSection>

      <ActionSection>
        <DurationContainer>
          <Duration>{currentDuration}</Duration>
        </DurationContainer>
        <ActionButton onPress={handleAction}>{icon}</ActionButton>
      </ActionSection>
    </Container>
  );
};
