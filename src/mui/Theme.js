import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#edf2f8",
      dark: "#c3c8cf",
      veryDark: "#6b7688",
    },
    secondary: {
      light: "#989ee2",
      main: "#313bac",
    },
  },
});

export default theme;
