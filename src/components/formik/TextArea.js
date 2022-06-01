import { Box, TextField } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ErrorMessage, Field } from "formik";
import React from "react";
import InputError from "./InputError";

const TextArea = ({ name, label, sendingEmail, ...rest }) => {
  const theme = useTheme();
  return (
    <Box width="100%" {...rest}>
      <Field name={name}>
        {({ field }) => {
          return (
            <Box boxShadow={5} sx={{ borderRadius: "10px" }}>
              <TextField
                multiline
                rows={8}
                variant="outlined"
                disabled={sendingEmail}
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
                      border: "0px",
                    },
                  },
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                      border: sendingEmail
                        ? "0px"
                        : `2px solid ${theme.palette.secondary.main}`,
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

export default TextArea;
