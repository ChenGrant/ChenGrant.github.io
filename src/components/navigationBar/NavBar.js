import React, { useContext } from "react";
import { CustomSettingsContext } from "../../context/CustomSettings";
import useScreenSize from "../customHooks/useScreenSize";
import LargeNavBar from "../navigationBar/large/LargeNavBar";
import SmallNavBar from "../navigationBar/small/SmallNavBar";

const NavBar = () => {
  const { desktop } = useScreenSize();
  const { navBarItems } = useContext(CustomSettingsContext);

  if (desktop) return <LargeNavBar navBarItems={navBarItems} />;
  return <SmallNavBar navBarItems={navBarItems} />;
};

export default NavBar;
