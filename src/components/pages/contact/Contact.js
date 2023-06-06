import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./ContactForm";

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
    websiteURL: "https://www.linkedin.com/in/grant-chen2021/",
  },
];

const Contact = () => {
  const getGmail = () =>
    contactList.filter((item) => item.name === "gmail")[0].websiteURL;

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
      <ContactForm />
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
              component="a"
              href={websiteURL}
              target="_blank"
            >
              <img height="100%" src={imageURL} alt={name} />
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
