import React from "react";
import Input from "./Input";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Input {...rest} textareaProps={{ multiline: true, rows: 8 }} />;
    default:
      return null;
  }
};

export default FormikControl;
