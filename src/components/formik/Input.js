import { Box, TextField } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import InputError from "./InputError";

const Input = ({ label, name, type, ...rest }) => {
  return (
    <Box width="100%" {...rest}>
      <Field name={name} type={type}>
        {({ field, form }) => {
          //console.log(form);
          return (
            <Box >
              <TextField
                variant="outlined"
                label={label}
                fullWidth
                color="secondary"
                InputProps={{
                  sx: { backgroundColor: "white" },
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
