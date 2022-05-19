import { Box, IconButton, Slide, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { v4 as uuidv4 } from "uuid";
//import useDelay from "../../customHooks/useDelay";
import bubbles from "../../../assets/images/bubbles.png";

const SmallNavBar = ({ headers }) => {
  //const navBarIsVisible = useDelay(1000);
  const [panelIsOpen, setPaneIsOpen] = useState(false);
  return (
    <>
      <Box
        display="flex"
        justifyContent="right"
        alignItems="center"
        height="70px"
        position="fixed"
        width="100%"
      >
        <IconButton
          aria-label="delete"
          sx={{ margin: " 0px 20px"}}
          onClick={() => setPaneIsOpen(true)}
          size = 'large'
        >
          <MenuIcon fontSize = 'inherit' color = 'secondary'/>
        </IconButton>
      </Box>
      <Slide direction="left" in={panelIsOpen} timeout={400}>
        <Box
          position="fixed"
          width="70%"
          maxWidth="500px"
          right={0}
          height="100vh"
          padding="30px"
          sx={{
            zIndex: 2,
            boxShadow: 13,
            backgroundImage: `url(${bubbles})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Stack>
            <Box
              display="flex"
              justifyContent="right"
              onClick={() => setPaneIsOpen(false)}
            >
              <IconButton size = 'large'>
                <ClearIcon color="secondary" fontSize = 'inherit'/>
              </IconButton>
            </Box>
            {headers.map((header) => {
              const [headerLabel, headerNavigation] = header;
              return (
                <Typography
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => {
                    setPaneIsOpen(false);
                    headerNavigation();
                  }}
                  key={uuidv4()}
                  fontWeight={600}
                  my="15px"
                  width="min-content"
                  //fontSize={15}
                  color="secondary.main"
                >
                  {headerLabel}
                </Typography>
              );
            })}
          </Stack>
        </Box>
      </Slide>
    </>
  );
};

export default SmallNavBar;
