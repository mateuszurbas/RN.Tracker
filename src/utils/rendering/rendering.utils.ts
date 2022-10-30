import { ReactElement } from "react";

export type RenderCondition = unknown;
export type RenderOutcome = ReactElement | null;

export const renderCond = <TCondition>(
  condition: TCondition,
  renderIfTrueFn: (condition: NonNullable<TCondition>) => RenderOutcome,
  renderIfFalseFn?: () => RenderOutcome,
): RenderOutcome => {
  if (condition) {
    return renderIfTrueFn(condition as NonNullable<TCondition>);
  }
  return renderIfFalseFn ? renderIfFalseFn() : null;
};
