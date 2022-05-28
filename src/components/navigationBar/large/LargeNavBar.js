import { Box } from "@mui/system";
import React, { useContext } from "react";
import LargeNavBarItem from "./LargeNavBarItem";
import { v4 as uuidv4 } from "uuid";
import { CustomSettingsContext } from "../../../context/CustomSettings";
import { saveAs } from "file-saver";

const LargeNavBar = ({ navBarItems }) => {
  const customSettings = useContext(CustomSettingsContext);

  const downloadResume = () => {
    saveAs(
      "https://raw.githubusercontent.com/ChenGrant/ChenGrant.github.io/adb983dd9434a779172609a5c2880cc7700652a3/about/description.txt",
      "GrantResume.txt"
    );
  };

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
      <Box display="flex" justifyContent="center">
        {navBarItems.map((navBarItem) => {
          const { label, link } = navBarItem;
          return (
            <LargeNavBarItem key={uuidv4()} link={link}>
              {label}
            </LargeNavBarItem>
          );
        })}
      </Box>
      <LargeNavBarItem px={5} onClick={downloadResume}>
        RESUME
      </LargeNavBarItem>
    </Box>
  );
};

export default LargeNavBar;
