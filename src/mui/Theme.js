import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#edf2f8",
      dark: '#6b7688'
    },
    secondary: {
      main: "#313bac",
    },
  },
});

export default theme;
