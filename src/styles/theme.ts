export type Colors = keyof typeof colors;

const colors = {
  primary: "#101326",
  secondary: "#29C0CD",
  accent: "#E34578",
  white: "#ffffff",
  dirtywhite: "#F8F9FC",
  lightwhite: "rgba(216, 216, 216, 0.6)",
  blue: "rgb(16 51 251 / 24%)",
  gray: "#5F5F5F",
  taxi: "#f4f4b3",
  orange: "orange",
  orangelight: "#ffa50026",
  orangelighter: "#ffa500cf",
  red: "red",
  graylight: "#e6e6e6",
  transparent: "transparent",
};

export const theme = {
  colors,
  fontFamily: { primary: "Red Hat Display" },
  fontSizes: {
    fs16: "1rem",
    fs20: "1.25rem",
    fs24: "1.5rem",
    fs32: "2rem",
  },
  radii: {
    br14: 14,
    br24: 24,
    br50: "50%",
  },
  fontWeights: {
    fw700: 700,
  },
  shadows: {
    default: `1px 1px 11px ${colors.primary}`,
  },
  borders: {
    default: `1px solid ${colors.primary}`,
    answer: `2px solid ${colors.primary}`,
    transparent: `2px solid ${colors.transparent}`,
    scale: `3px solid ${colors.lightwhite}`,
  },
  zIndices: {
    base: 0,
    upperElement: 1,
    modal: 10,
    loader: 11,
  },
  breakpoints: ["24rem", "47rem", "90rem"] as unknown as Breakpoints,
  space: {
    auto: "auto",
    s0: "0",
    s0auto: "0 auto",
    s5: "0.3125rem",
    s8: "0.5rem",
    s10: "0.625rem",
    s16: "1rem",
    s18: "1.125rem",
    s20: "1.25rem",
    s20s50: "1.25rem 3.125rem",
    s35s0: "2.1875rem 0",
    s40: "2.5rem",
    s50s0: "3.125rem 0",
    sautos50: "auto 3.125rem",
    s0s70: "0 4.375rem",
    s25: "1.5625rem",
    s50: "3.125rem",
    s80: "5rem",
    s100: "6.25rem",
    sautos100: "auto 6.25rem",
  },
  typography: {
    h1: {
      fontSize: "1.5rem",
      fontSizeMobile: "1rem",
      lineHeight: "2rem",
      lineHeightMobile: "1.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "4.5rem",
      fontSizeMobile: "3.5rem",
      lineHeightMobile: "3.5rem",
      lineHeight: "5.875rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "4.0625rem",
      fontSizeMobile: "2.5rem",
      lineHeightMobile: "3.25rem",
      lineHeight: "4.5625rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "2.125rem",
      fontSizeMobile: "2rem",
      lineHeightMobile: "3rem",
      lineHeight: "3rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.25rem",
      fontSizeMobile: "1.625rem",
      lineHeightMobile: "2.125rem",
      lineHeight: "3.25rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1rem",
      fontSizeMobile: "1.5rem",
      lineHeightMobile: "2rem",
      lineHeight: "2.625rem",
      fontWeight: 600,
    },
    body16: {
      fontSize: "1rem",
      fontSizeMobile: "1rem",
      lineHeightMobile: "1.5rem",
      lineHeight: "1.75rem",
      fontWeight: 400,
    },
  },
} as const;

export type Theme = typeof theme;

export const Breakpoints = theme.breakpoints as any;
Breakpoints.lmobile = Breakpoints[0];
Breakpoints.ltablet = Breakpoints[1];
Breakpoints.desktop = Breakpoints[2];

type Breakpoints<T = string> = {
  _: T; // iki nurodyto kazkurio
  lmobile: T;
  ltablet: T;
  desktop: T;
};
