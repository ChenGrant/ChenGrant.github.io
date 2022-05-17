import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import theme from "./mui/Theme";
import { ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
