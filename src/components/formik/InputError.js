import { Typography } from "@mui/material";
import React from "react";

const InputError = ({ children }) => {
  return <Typography color="error">{children}</Typography>;
};

export default InputError;
