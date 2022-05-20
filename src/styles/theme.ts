export type Colors = keyof typeof colors;

const colors = {
  primary: "#101326",
  secondary: "#29C0CD",
  accent: "#E34578",
  white: "#ffffff",
  dirtywhite: "#F8F9FC",
  blue: "rgb(16 51 251 / 24%)",
  gray: "#5F5F5F",
  taxi: "#f4f4b3",
  orange: "orange",
  orangelight: "#ffa50026",
  red: "red",
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
  zIndices: {
    base: 0,
    upperElement: 1,
    modal: 10,
    loader: 11,
  },
  breakpoints: ["24rem", "47rem", "90rem"] as unknown as Breakpoints,
  space: {
    auto: "auto",
    s0auto: "0 auto",
    s5: "5px",
    s8: "8px",
    s16: "16px",
    s18: "18px",
    s20: "20px",
    s20s50: "20px 50px",
    s25: "25px",
    s50: "50px",
  },
  typography: {
    h1: {
      fontSize: "24px",
      fontSizeMobile: "16px",
      lineHeight: "2rem",
      lineHeightMobile: "24px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "72px",
      fontSizeMobile: "56px",
      lineHeightMobile: "56px",
      lineHeight: "94px",
      fontWeight: 500,
    },
    h3: {
      fontSize: "65px",
      fontSizeMobile: "40px",
      lineHeightMobile: "52px",
      lineHeight: "73px",
      fontWeight: 600,
    },
    h4: {
      fontSize: "34px",
      fontSizeMobile: "32px",
      lineHeightMobile: "22px",
      lineHeight: "44px",
      fontWeight: 700,
    },
    h5: {
      fontSize: "20px",
      fontSizeMobile: "26px",
      lineHeightMobile: "34px",
      lineHeight: "52px",
      fontWeight: 600,
    },
    h6: {
      fontSize: "16px",
      fontSizeMobile: "24px",
      lineHeightMobile: "32px",
      lineHeight: "42px",
      fontWeight: 600,
    },
    body16: {
      fontSize: "16px",
      fontSizeMobile: "16px",
      lineHeightMobile: "24px",
      lineHeight: "28px",
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
