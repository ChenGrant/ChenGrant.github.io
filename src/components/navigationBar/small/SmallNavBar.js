import { Box, IconButton, Slide, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { v4 as uuidv4 } from "uuid";
import useDelay from "../../customHooks/useDelay";
import { useTheme } from "@mui/styles";

const SmallNavBar = ({ headers }) => {
  const navBarIsVisible = useDelay(1000);
  const [panelIsOpen, setPaneIsOpen] = useState(false);
  const theme = useTheme();
  return (
    <>
      <Slide direction="right" in={navBarIsVisible} timeout={1000}>
        <Box
          display="flex"
          justifyContent="right"
          alignItems="center"
          height="70px"
          position="fixed"
          //sx={{ backdropFilter: "blur(10px)" }}
          width="100%"
        >
          <IconButton
            aria-label="delete"
            sx={{ margin: " 0px 20px" }}
            onClick={() => setPaneIsOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Slide>
      <Slide direction="left" in={panelIsOpen} timeout={400}>
        <Box
          position="fixed"
          width={"70%"}
          maxWidth={"500px"}
          right={0}
          height="100vh"
          padding={"30px"}
          sx={{
            zIndex: 2,
            boxShadow: 13,
            backgroundImage: `linear-gradient(120deg, white, ${theme.palette.secondary.light})`,
          }}
        >
          <Stack>
            <Box
              display="flex"
              justifyContent="right"
              onClick={() => setPaneIsOpen(false)}
            >
              <IconButton>
                <ClearIcon color="secondary" />
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
                  fontWeight={500}
                  my={"15px"}
                  fontSize={15}
                  color="primary.veryDark"
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
