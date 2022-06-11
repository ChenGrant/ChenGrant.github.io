import React from "react";

const stylingValues = {
  navBarHeight: "70px",
  navBarZIndex: 9999999,
  heroPadding: "80px",
  heroTypographyDelay: 0.5,
  heroButtonDelay: 1.5,
  heroFadeDuration: 800,
  skillItemIconHeight: "60%",
  skillItemCircleHeight: "80px",
  contactFormikControlMarginBottom : "20px",
  contactFormikControlFontHeight : "24px"
};

export default stylingValues;

export const StylingValuesContext = React.createContext();

export const StylingValuesProvider = StylingValuesContext.Provider;
