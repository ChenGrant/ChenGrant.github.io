import { Box, TextField } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ErrorMessage, Field } from "formik";
import React from "react";
import InputError from "./InputError";

const Input = ({ label, name, type, ...rest }) => {
  const theme = useTheme();
  return (
    <Box width="100%" {...rest}>
      <Field name={name} type={type}>
        {({ field }) => {
          return (
            <Box boxShadow={5} sx={{ borderRadius: "10px" }}>
              <TextField
                variant="outlined"
                label={label}
                fullWidth
                color="secondary"
                InputProps={{
                  sx: {
                    borderRadius: "10px",
                    backgroundColor: "white",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      borderColor: "white",
                    },
                  },
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                      border: `2px solid ${theme.palette.secondary.main}`,
                    },
                  },
                }}
                {...field}
              />
            </Box>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={InputError} />
    </Box>
  );
};

export default Input;
