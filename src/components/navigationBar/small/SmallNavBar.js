import React, { useContext, useState } from "react";
import { Box, IconButton, Slide, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { v4 as uuidv4 } from "uuid";
import bubbles from "../../../assets/images/bubbles.png";
import { CustomSettingsContext } from "../../../context/CustomSettings";
import useScreenSize from "../../customHooks/useScreenSize";

const SmallNavBar = ({ navBarItems }) => {
  const customSettings = useContext(CustomSettingsContext);
  const {tablet} = useScreenSize()
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const navBarItemClickHandler = (headerNavigation) => {
    setMenuIsOpen(false);
    headerNavigation();
  };

  return (
    <>
      <Box
        height={customSettings.navBarHeight}
        display="flex"
        alignItems="center"
        position="fixed"
        zIndex={customSettings.navBarZIndex}
      >
        <IconButton
          sx={{ position: "fixed", margin: " 0px 20px", right: "0px" }}
          onClick={() => setMenuIsOpen(true)}
          size="large"
        >
          <MenuIcon fontSize="inherit" color="secondary" />
        </IconButton>
      </Box>
      <Slide direction="left" in={menuIsOpen} timeout={tablet ? 400 : 0}>
        <Box
          position="fixed"
          right={0}
          height="100vh"
          width="70vw"
          maxWidth="500px"
          padding="30px"
          sx={{
            zIndex: customSettings.navBarZIndex,
            boxShadow: 13,
            backgroundImage: `url(${bubbles})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Box onClick={() => setMenuIsOpen(false)}>
            <IconButton size="large">
              <ClearIcon color="secondary" fontSize="inherit" />
            </IconButton>
          </Box>
          <Box ml="17px">
            {navBarItems.map((navBarItem) => {
              const [navBarItemLabel, navBarItemNavigation] = navBarItem;
              return (
                <Typography
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => navBarItemClickHandler(navBarItemNavigation)}
                  key={uuidv4()}
                  width="min-content"
                  fontWeight="bold"
                  color="secondary"
                  my="30px"
                >
                  {navBarItemLabel}
                </Typography>
              );
            })}
          </Box>
        </Box>
      </Slide>
    </>
  );
};

export default SmallNavBar;
