import React, { useContext, useState } from "react";
import { Box, IconButton, Slide } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { v4 as uuidv4 } from "uuid";
import bubbles from "../../assets/images/bubbles.png";
import { CustomSettingsContext } from "../../context/CustomSettings";
import useScreenSize from "../customHooks/useScreenSize";
import NavBarItem from "./NavBarItem";

const SmallNavBar = ({ navBarItems }) => {
  const { navBarHeight, navBarZIndex } = useContext(CustomSettingsContext);
  const { tablet } = useScreenSize();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <Box
        height={navBarHeight}
        display="flex"
        alignItems="center"
        position="fixed"
        zIndex={navBarZIndex}
      >
        <IconButton
          sx={{ position: "fixed", margin: "0px 20px", right: "0px" }}
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
            zIndex: navBarZIndex,
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
          {navBarItems.map(({ label, link }) => (
            <Box display="flex" mt={2.5} key={uuidv4()}>
              <NavBarItem link={link} closeMenu = {() => setMenuIsOpen(false)}>
                {label}
              </NavBarItem>
            </Box>
          ))}
        </Box>
      </Slide>
    </>
  );
};

export default SmallNavBar;
