import { Box } from "@mui/system";
import React, { useContext } from "react";
import LargeNavBarItem from "./LargeNavBarItem";
import { v4 as uuidv4 } from "uuid";
import { CustomSettingsContext } from "../../../context/CustomSettings";

const LargeNavBar = ({ navBarItems }) => {
  const customSettings = useContext(CustomSettingsContext);
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      height={customSettings.navBarHeight}
      width="100%"
      zIndex={customSettings.navBarZIndex}
      sx={{ backdropFilter: "blur(10px)" }}
    >
      <LargeNavBarItem px={5} visibility="hidden">
        RESUME
      </LargeNavBarItem>
      <Box display="flex" justifyContent="center" >
        {navBarItems.map((navBarItem) => {
          const [navBarItemLabel, navBarItemNavigation] = navBarItem;
          return (
            <LargeNavBarItem key={uuidv4()} onClick={navBarItemNavigation}>
              {navBarItemLabel}
            </LargeNavBarItem>
          );
        })}
      </Box>
      <LargeNavBarItem px={5}>RESUME</LargeNavBarItem>
    </Box>
  );
};

export default LargeNavBar;
