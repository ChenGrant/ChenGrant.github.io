import { Box, TextField } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ErrorMessage, Field } from "formik";
import React from "react";
import InputError from "./InputError";

const TextArea = ({ name, label, disabled, ...rest }) => {
  const theme = useTheme();
  return (
    <Box width="100%" {...rest}>
      <Field name={name}>
        {({ field }) => {
          return (
            <Box boxShadow={5} sx={{ borderRadius: "10px" }}>
              <TextField
                multiline
                rows={15}
                variant="outlined"
                disabled = {disabled}
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

export default TextArea;
