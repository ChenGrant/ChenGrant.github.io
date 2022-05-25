import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import FadeInSection from "../shared/FadeInSection";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return (
        <FadeInSection width="100%">
          <Input {...rest} />
        </FadeInSection>
      );
    case "textarea":
      return (
        <FadeInSection width="100%">
          <TextArea {...rest} />
        </FadeInSection>
      );
    default:
      return null;
  }
};

export default FormikControl;
