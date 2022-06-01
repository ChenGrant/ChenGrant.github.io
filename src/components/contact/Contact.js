import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../formik/FormikControl";
import emailjs from "emailjs-com";
import { v4 as uuidv4 } from "uuid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import FadeInSection from "../shared/FadeInSection";
import { CustomSettingsContext } from "../../context/CustomSettings";

const Contact = () => {
  const mb = "20px";
  const fontHeight = "24px";
  const { contacts } = useContext(CustomSettingsContext);

  const [sendingEmail, setSendingEmail] = useState(false);
  const [sendingEmailSuccess, setSendingEmailSuccess] = useState(false);
  const [sendingEmailFailure, setSendingEmailFailure] = useState(false);

  const getGmail = () => {
    return contacts.filter((item) => item.serviceName === "gmail")[0]
      .serviceWebsiteURL;
  };

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("Invalid Email"),
    message: Yup.string().required("Required"),
  });

  const onSubmit = async (values, actions) => {
    setSendingEmail(true);
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        values,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      setSendingEmail(false);
      actions.resetForm({ values: initialValues });
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
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
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
                <FadeInSection width="100%">
                  <FormikControl
                    control="input"
                    label="Name"
                    name="name"
                    type="text"
                    mb={
                      formik.errors.name && formik.touched.name
                        ? mb
                        : `calc(${mb} + ${fontHeight})`
                    }
                    disabled={sendingEmail}
                    sendingEmail={sendingEmail}
                  />
                </FadeInSection>
                <FadeInSection width="100%">
                  <FormikControl
                    control="input"
                    label="Email"
                    name="email"
                    type="email"
                    mb={
                      formik.errors.email && formik.touched.email
                        ? mb
                        : `calc(${mb} + ${fontHeight})`
                    }
                    sendingEmail={sendingEmail}
                  />
                </FadeInSection>
                <FadeInSection width="100%">
                  <FormikControl
                    control="textarea"
                    label="Message"
                    name="message"
                    mb={
                      formik.errors.message && formik.touched.message
                        ? mb
                        : `calc(${mb} + ${fontHeight})`
                    }
                    sendingEmail={sendingEmail}
                  />
                </FadeInSection>
                <Box height="60px" display="flex" justifyContent="center">
                  {sendingEmail ? (
                    <CircularProgress color="secondary" />
                  ) : sendingEmailSuccess ? (
                    <CheckCircleIcon color="success" sx={{ fontSize: 50 }} />
                  ) : sendingEmailFailure ? (
                    <ErrorIcon color="error" sx={{ fontSize: 50 }} />
                  ) : (
                    <FadeInSection width="100%">
                      <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        sx={{ borderRadius: "9px" }}
                      >
                        Submit
                      </Button>
                    </FadeInSection>
                  )}
                </Box>
              </Box>
            </Form>
          );
        }}
      </Formik>
      <Box my={4} mt={10} height="40px" display="flex" gap="50px">
        {contacts.map((contact) => {
          const { serviceName, serviceImgURL, serviceWebsiteURL } = contact;
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
              <Box component="a" href={serviceWebsiteURL} target="_blank">
                <img height="100%" src={serviceImgURL} alt={serviceName} />
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
