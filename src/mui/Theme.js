import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold : 700,
  },
  palette: {
    primary: {
      main: "#edf2f8", // light gray
      dark: "#c3c8cf",
      veryDark: "#6b7688",
    },
    secondary: {
      light: "#989ee2",
      main: "#263DA7", // blue
    },
    tertiary : {
      main: '#FDB049ff' // orange-yellow
    }
  },
  breakpoints: {
    values: {
      xs: 0, //phone
      sm: 480, // tablet
      md: 957, // monitor
      lg: 1200, 
      xl: 1536,
    },
  },
});

export default theme;
