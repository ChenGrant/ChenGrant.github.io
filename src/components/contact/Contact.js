import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../formik/FormikControl";
import emailjs from "emailjs-com";
import { v4 as uuidv4 } from "uuid";

const contacts = [
  {
    serviceName: "gmail",
    serviceImgURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1024px-Gmail_icon_%282020%29.svg.png",
    serviceWebsiteURL: "mailto:grantchen2021@gmail.com",
  },
  {
    serviceName: "github",
    serviceImgURL: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    serviceWebsiteURL: "https://github.com/ChenGrant",
  },
  {
    serviceName: "linkedin",
    serviceImgURL: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    serviceWebsiteURL: "https://www.linkedin.com/in/grant-chen-1a96ba210/",
  },
];

const Contact = () => {
  const mb = "20px";
  const fontHeight = "24px";

  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailError, setEmailError] = useState(false);

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
      const response = await emailjs.send(
        "service_8mjuqfu",
        "template_djmptbs",
        values,
        "Ui6zfCjou32r1fYyq"
      );
      setSendingEmail(false);
      actions.resetForm({ values: initialValues });
    } catch (err) {
      setSendingEmail(false);
      setEmailError(true);
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
                />
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
                  disabled={sendingEmail}
                />
                <FormikControl
                  control="textarea"
                  label="Message"
                  name="message"
                  mb={
                    formik.errors.message && formik.touched.message
                      ? mb
                      : `calc(${mb} + ${fontHeight})`
                  }
                  disabled={sendingEmail}
                />
                {sendingEmail ? (
                  <CircularProgress color="secondary" />
                ) : (
                  <Button variant="contained" color="secondary" type="submit">
                    Submit
                  </Button>
                )}
              </Box>
            </Form>
          );
        }}
      </Formik>
      <Box my={4} mt={15} height="40px" display="flex" gap="50px">
        {contacts.map((contact) => {
          const { serviceName, serviceImgURL, serviceWebsiteURL } = contact;
          return (
            <Box key={uuidv4()} height="100%">
              <a href={serviceWebsiteURL} target="_blank">
                <img height="100%" src={serviceImgURL} alt={serviceName} />
              </a>
            </Box>
          );
        })}
      </Box>
      <Typography textAlign="center">
        It's best to contact me via gmail at grantchen2021@gmail.com
      </Typography>
    </Box>
  );
};

export default Contact;
