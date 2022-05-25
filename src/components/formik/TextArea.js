import { Box, TextField } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import InputError from "./InputError";

const TextArea = ({ name, label, ...rest }) => {
  // const [margin, setMargin] = useState("34px");
  return (
    <Box
      width="100%"
      // mb={margin}
      {...rest}
    >
      <Field name={name}>
        {({ field, form }) => {
          //console.log(form)
          // if (form.errors[name]) {
          //   setMargin("10px");
          // } else {
          //   setMargin("34px");
          // }
          return (
            <Box >
              <TextField
                variant="outlined"
                label={label}
                minRows={6}
                maxRows={10}
                color="secondary"
                fullWidth
                multiline
                InputProps={{
                  sx: { backgroundColor: "white"},
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
