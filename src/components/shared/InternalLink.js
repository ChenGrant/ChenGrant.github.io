import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { CustomSettingsContext } from "../../context/CustomSettings";
import useScreenSize from "../customHooks/useScreenSize";

const InternalLink = ({ children, link = "" }) => {
  const { navBarHeight, getValueOfPixelString } = useContext(
    CustomSettingsContext
  );
  const { desktop } = useScreenSize();

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = desktop ? -getValueOfPixelString(navBarHeight) : 0;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <HashLink
        to={link}
        style={{ textDecoration: "none" }}
        scroll={scrollWithOffset}
      >
        {children}
      </HashLink>
    </BrowserRouter>
  );
};

export default InternalLink;
