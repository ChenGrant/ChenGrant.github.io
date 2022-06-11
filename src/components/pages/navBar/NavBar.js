import React from "react";
import useScreenSize from "../../../hooks/useScreenSize";
import LargeNavBar from "./LargeNavBar";
import SmallNavBar from "./SmallNavBar";

const navBarItems = [
  { label: "HOME", link: "#" },
  { label: "SKILLS", link: "#skills" },
  { label: "EXPERIENCES", link: "#experiences" },
  { label: "PROJECTS", link: "#projects" },
  { label: "CONTACT", link: "#contact" },
];

const NavBar = () => {
  const { desktop } = useScreenSize();

  if (desktop) return <LargeNavBar navBarItems={navBarItems} />;
  return <SmallNavBar navBarItems={navBarItems} />;
};

export default NavBar;
