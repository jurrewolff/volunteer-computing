/*
 * FOOTER PAGE
 * Renders parts of the theme throughout the website.
 */

import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "red",
        },
      },
    },
  },
  palette: {
    type: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f50057",
    },
  },
  props: {
    MuiAppBar: {
      color: "inherit",
    },
  },
});
