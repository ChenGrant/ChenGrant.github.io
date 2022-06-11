import { Box, TextField } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ErrorMessage, Field } from "formik";
import React from "react";
import InputError from "./InputError";

const Input = ({ label, name, type, sendingEmail, textareaProps, ...rest }) => {
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
                disabled={sendingEmail}
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
                      border: "0px",
                    },
                  },
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                      border: sendingEmail
                        ? `0px solid ${theme.palette.primary.main}`
                        : `2px solid ${theme.palette.secondary.main}`,
                    },
                  },
                }}
                {...field}
                {...textareaProps}
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
