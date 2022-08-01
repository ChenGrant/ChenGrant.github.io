import React, { useContext, useState } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import { Form, Formik } from "formik";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import AnimateOnScroll from "../../shared/AnimateOnScroll";
import FormikControl from "../../shared/formik/FormikControl";
import { StylingValuesContext } from "../../../contexts/StylingValues";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const { contactFormikControlMarginBottom, contactFormikControlFontHeight } =
    useContext(StylingValuesContext);

  const contactFormInitialValues = {
    name: "",
    email: "",
    message: "",
  };

  const contactFormValidationSchema = Yup.object({
    name: Yup.string().trim().required("Required"),
    email: Yup.string().trim().required("Required").email("Invalid Email"),
    message: Yup.string().trim().required("Required"),
  });

  const contactFormOnSubmit = async (values, formik) => {
    const renderSendingEmailStatus = (setSendingEmailStatus) => {
      setSendingEmail(false);
      setSendingEmailStatus(true);
      setTimeout(() => setSendingEmailStatus(false), 2000);
    };

    setSendingEmail(true);
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        values,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      formik.resetForm({ values: contactFormInitialValues });
      renderSendingEmailStatus(setSendingEmailSuccess);
    } catch (err) {
      renderSendingEmailStatus(setSendingEmailFailure);
    }
  };

  const [sendingEmail, setSendingEmail] = useState(false);
  const [sendingEmailSuccess, setSendingEmailSuccess] = useState(false);
  const [sendingEmailFailure, setSendingEmailFailure] = useState(false);

  return (
    <Formik
      initialValues={contactFormInitialValues}
      validationSchema={contactFormValidationSchema}
      onSubmit={contactFormOnSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <Box
              display="flex"
              flexDirection="column"
              width="min(80vw, 400px)"
              alignItems="center"
            >
              <AnimateOnScroll animation="fade-left">
                <FormikControl
                  control="input"
                  label="Name"
                  name="name"
                  type="text"
                  mb={
                    formik.errors.name && formik.touched.name
                      ? contactFormikControlMarginBottom
                      : `calc(${contactFormikControlMarginBottom} + ${contactFormikControlFontHeight})`
                  }
                  disabled={sendingEmail}
                  sendingEmail={sendingEmail}
                />
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-left">
                <FormikControl
                  control="input"
                  label="Email"
                  name="email"
                  type="email"
                  mb={
                    formik.errors.email && formik.touched.email
                      ? contactFormikControlMarginBottom
                      : `calc(${contactFormikControlMarginBottom} + ${contactFormikControlFontHeight})`
                  }
                  sendingEmail={sendingEmail}
                />
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-left">
                <FormikControl
                  control="textarea"
                  label="Message"
                  name="message"
                  mb={
                    formik.errors.message && formik.touched.message
                      ? contactFormikControlMarginBottom
                      : `calc(${contactFormikControlMarginBottom} + ${contactFormikControlFontHeight})`
                  }
                  sendingEmail={sendingEmail}
                />
              </AnimateOnScroll>
              <Box height="60px" display="flex" justifyContent="center">
                {sendingEmail ? (
                  <CircularProgress color="secondary" />
                ) : sendingEmailSuccess ? (
                  <CheckCircleIcon color="success" sx={{ fontSize: 50 }} />
                ) : sendingEmailFailure ? (
                  <ErrorIcon color="error" sx={{ fontSize: 50 }} />
                ) : (
                  <AnimateOnScroll animation="fade-left">
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      sx={{ borderRadius: "9px" }}
                    >
                      Submit
                    </Button>
                  </AnimateOnScroll>
                )}
              </Box>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
