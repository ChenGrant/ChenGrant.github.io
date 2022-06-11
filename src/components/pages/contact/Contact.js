import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./ContactForm";

const contactList = [
  {
    name: "gmail",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png",
    websiteURL: "mailto:grantchen2021@gmail.com",
  },
  {
    name: "github",
    imageURL: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    websiteURL: "https://github.com/ChenGrant",
  },
  {
    name: "linkedin",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png",
    websiteURL: "https://www.linkedin.com/in/grant-chen-1a96ba210/",
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
