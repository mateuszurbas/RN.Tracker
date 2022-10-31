import styled, { css } from "styled-components/native";
import { CommonText, CommonTextSize } from "@components/common-text";
import { Touchable } from "@components/touchable";
import { color, fontWeight, spacing } from "@theme";
import { TrackerProject } from "@ts/tracker";
import { cond } from "@utils/logic";

type ProjectProps = {
  trackerProject: TrackerProject;
};

export const Container = styled.View`
  background-color: ${color.white};
  padding: ${spacing.$15} ${spacing.$10};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InformationSection = styled.View``;

export const Title = styled(CommonText).attrs({
  size: CommonTextSize.$15,
})`
  font-weight: ${fontWeight.semiBold};
`;

export const ProjectSection = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${spacing.$4};
`;

export const ProjectContainer = styled.View`
  margin-left: ${spacing.$4};
`;

export const Project = styled(CommonText).attrs({
  size: CommonTextSize.$15,
})<ProjectProps>`
  font-weight: ${fontWeight.semiBold};

  ${({ trackerProject: type }) =>
    cond([
      [
        type === TrackerProject.KiwiAndCo,
        css`
          color: ${color.green};
        `,
      ],
      [
        type === TrackerProject.Mango,
        css`
          color: ${color.yellow};
        `,
      ],
      [
        type === TrackerProject.UXReview,
        css`
          color: ${color.blue};
        `,
      ],
    ])}
`;

export const Circle = styled.View<ProjectProps>`
  width: 6px;
  height: 6px;
  border-radius: 3px;

  ${({ trackerProject: type }) =>
    cond([
      [
        type === TrackerProject.KiwiAndCo,
        css`
          background-color: ${color.green};
        `,
      ],
      [
        type === TrackerProject.Mango,
        css`
          background-color: ${color.yellow};
        `,
      ],
      [
        type === TrackerProject.UXReview,
        css`
          background-color: ${color.blue};
        `,
      ],
    ])}
`;

export const ActionSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Duration = styled(CommonText).attrs({
  size: CommonTextSize.$15,
})``;

export const DurationContainer = styled.View`
  margin-right: ${spacing.$10};
`;

export const ActionButton = styled(Touchable).attrs({
  extendedClickableArea: true,
})``;
