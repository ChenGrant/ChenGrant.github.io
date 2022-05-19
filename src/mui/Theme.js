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
      main: "#263DA7",
    },
    tertiary : {
      main: '#FDB049ff'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 957,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
