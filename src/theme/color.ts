export const color = {
  transparent: "transparent",
  black: "#000000",
  white: "#ffffff",
  dark: "#161722",

  red: "#900",
} as const;

type Keys = keyof typeof color;
export type Color = typeof color[Keys];
