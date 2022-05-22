import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat,sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
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
    tertiary: {
      main: "#FDB049ff", // orange-yellow
    },
  },
  breakpoints: {
    values: {
      xs: 0, //phone
      sm: 480, // tablet
      md: 1055, // monitor
      lg: 1200,
      xl: 1536,
    },
  },
});

theme.typography.h1[theme.breakpoints.up("md")] = { fontSize: "56px", fontWeight: 700}
theme.typography.h1[theme.breakpoints.only("sm")] = { fontSize: "40px", fontWeight: 700 }
theme.typography.h1[theme.breakpoints.only("xs")] = { fontSize: "30px" , fontWeight: 700}
theme.typography.button[theme.breakpoints.up("md")] = {fontSize: '25px'}
theme.typography.button[theme.breakpoints.only("sm")] = {fontSize: '20px'}
theme.typography.button[theme.breakpoints.only("xs")] = {fontSize: '15px'}

console.log('my theme object looks like: ', theme);

export default theme;
