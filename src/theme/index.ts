import { extendTheme } from "native-base";

export default extendTheme({
  fontConfig: {
    Montserrat: {
      100: {
        normal: "MontserratLight"
      },
      200: {
        normal: "MontserratLight"
      },
      300: {
        normal: "MontserratLight"
      },
      400: {
        normal: "MontserratRegular"
      },
      500: {
        normal: "MontserratRegular"
      },
      600: {
        normal: "MontserratBold"
      },
      700: {
        normal: "MontserratBold"
      }
    }
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
    mono: "Montserrat"
  },
  colors: {
    slate: {
      50: "#FAFAFA",
      100: "#F4F4F5",
      200: "#E4E4E7",
      300: "#D4D4D8",
      400: "#A1A1AA",
      500: "#71717A",
      600: "#52525B",
      700: "#3F3F46",
      800: "#27272A",
      900: "#121212"
    }
  },
  config: {
    initialColorMode: "dark"
  },
  radii: {
    xs: 4,
    sm: 8,
    md: 16
  }
});
