import React from "react";
import useScreenSize from "../../../hooks/useScreenSize";
import LargeNavBar from "./LargeNavBar";
import SmallNavBar from "./SmallNavBar";

const navBarItems = [
  "HOME",
  "SKILLS",
  "EXPERIENCES",
  "PROJECTS",
  "CONTACT",
].map((item) => {
  return {
    label: item,
    link: `#${item === "HOME" ? "" : item.toLowerCase()}`,
  };
});

const NavBar = () => {
  const { desktop } = useScreenSize();

  if (desktop) return <LargeNavBar navBarItems={navBarItems} />;
  return <SmallNavBar navBarItems={navBarItems} />;
};

export default NavBar;
