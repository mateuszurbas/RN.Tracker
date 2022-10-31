export const color = {
  transparent: "transparent",
  black: "#000000",
  white: "#ffffff",
  dark: "#161722",
  grey: "#F1F1F1",
  red: "#900",
  blue: "#3FBDF2",
  green1: "#54D622",
  green2: "#50B828",
  yellow: "#E7B435",
} as const;

type Keys = keyof typeof color;
export type Color = typeof color[Keys];
