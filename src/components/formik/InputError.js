import { Box, Typography } from "@mui/material";
import React from "react";

const InputError = ({ children }) => {
  return (
    <Box >
      <Typography color="error">{children}</Typography>
    </Box>
  );
};

export default InputError;
