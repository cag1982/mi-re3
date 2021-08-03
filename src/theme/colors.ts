import { Colors } from "./types";

export const baseColors = {
  failure: "#EF9A9A",
  // failure: "#CF6679",
  primary: "#D50000",
  primaryBright: "#E53935",
  primaryDark: "#B71C1C",
  secondary: "#FFAB00",
  success: "#80CBC4",
  warning: "#FFB74D",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#121212",
  backgroundDisabled: "rgba(255, 255, 255, .38)",
  contrast: "rgba(224, 224, 224, .12)",
  invertedContrast: "#FFFFFF",
  input: "rgba(224, 224, 224, .12)",
  tertiary: "rgba(224, 224, 224, .08)",
  text: "rgba(255, 255, 255, .87)",
  textDisabled: "rgba(255, 255, 255, .38)",
  textSubtle: "rgba(255, 255, 255, .60)",
  borderColor: "rgba(224, 224, 224, .12)",
  card: "rgba(224, 224, 224, .09)",
  modal: "#323232",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #272727 0%, #353535 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#121212",
  backgroundDisabled: "rgba(255, 255, 255, .38)",
  contrast: "rgba(224, 224, 224, .12)",
  invertedContrast: "#FFFFFF",
  input: "rgba(224, 224, 224, .12)",
  tertiary: "rgba(224, 224, 224, .08)",
  text: "rgba(255, 255, 255, .87)",
  textDisabled: "rgba(255, 255, 255, .38)",
  textSubtle: "rgba(255, 255, 255, .60)",
  borderColor: "rgba(224, 224, 224, .12)",
  card: "rgba(224, 224, 224, .09)",
  modal: "#323232",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #272727 0%, #353535 100%)",
  },
};
