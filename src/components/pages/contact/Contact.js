import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../../shared/formik/FormikControl";
import emailjs from "emailjs-com";
import { v4 as uuidv4 } from "uuid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import AnimateOnScroll from "../../shared/AnimateOnScroll";
import { StylingValuesContext } from "../../../contexts/StylingValues";

const contactList = [
  {
    name: "gmail",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/contact%2Fgmail.png?alt=media&token=d469221a-6f22-403d-8e51-95da862e9e14",
    websiteURL: "mailto:grantchen2021@gmail.com",
  },
  {
    name: "github",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/contact%2Fgithub.png?alt=media&token=6ef523e4-4f86-4ae7-9d67-4c4a8368b122",
    websiteURL: "https://github.com/ChenGrant",
  },
  {
    name: "linkedin",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/contact%2Flinkedin.png?alt=media&token=ca193b60-8863-48d1-85c8-17c1eeca100f",
    websiteURL: "https://www.linkedin.com/in/grant-chen-1a96ba210/",
  },
];

const Contact = () => {
  const { contactFormikControlMarginBottom, contactFormikControlFontHeight } =
    useContext(StylingValuesContext);

  const [sendingEmail, setSendingEmail] = useState(false);
  const [sendingEmailSuccess, setSendingEmailSuccess] = useState(false);
  const [sendingEmailFailure, setSendingEmailFailure] = useState(false);

  const getGmail = () => {
    return contactList.filter((item) => item.name === "gmail")[0].websiteURL;
  };

  const getFormikControlMarginBottom = (formik) =>
    formik.errors.name && formik.touched.name
      ? contactFormikControlMarginBottom
      : `calc(${contactFormikControlMarginBottom} + ${contactFormikControlFontHeight})`;

  const contactFormInitialValues = {
    name: "",
    email: "",
    message: "",
  };

  const contactFormValidationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("Invalid Email"),
    message: Yup.string().required("Required"),
  });

  const contactFormOnSubmit = async (values, formik) => {
    setSendingEmail(true);
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        values,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      setSendingEmail(false);
      formik.resetForm({ values: contactFormInitialValues });
      setSendingEmailSuccess(true);
      setTimeout(() => setSendingEmailSuccess(false), 2000);
    } catch (err) {
      setSendingEmail(false);
      setSendingEmailFailure(true);
      setTimeout(() => setSendingEmailFailure(false), 2000);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={3}
      py={7}
      bgcolor="primary.main"
      id="contact"
    >
      <Typography variant="h1" mb={5}>
        contact
      </Typography>
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
                    mb={getFormikControlMarginBottom(formik)}
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
                    mb={getFormikControlMarginBottom(formik)}
                    sendingEmail={sendingEmail}
                  />
                </AnimateOnScroll>
                <AnimateOnScroll animation="fade-left">
                  <FormikControl
                    control="textarea"
                    label="Message"
                    name="message"
                    mb={getFormikControlMarginBottom(formik)}
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
      <Box my={4} mt={10} height="40px" display="flex" gap="50px">
        {contactList.map((contact) => {
          const { name, imageURL, websiteURL } = contact;
          return (
            <Box
              key={uuidv4()}
              height="100%"
              sx={{
                position: "relative",
                top: 0,
                transition: "top ease 0.2s",
                "&:hover": {
                  top: "-10px",
                },
              }}
            >
              <Box component="a" href={websiteURL} target="_blank">
                <img height="100%" src={imageURL} alt={name} />
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box>
        <Typography textAlign="center">
          It's best to contact me via gmail at{"  "}
          <Box
            component="a"
            href={getGmail()}
            target="_blank"
            sx={{ textDecoration: "none", fontWeight: 600 }}
            color="secondary.main"
          >
            grantchen2021@gmail.com
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
