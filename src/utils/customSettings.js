import resume from "../assets/pdf/resume.pdf";

const customSettings = {
  navBarHeight: "70px",
  navBarZIndex: 9999999,
  heroPadding: "80px",
  heroTypographyDelay: 0.5,
  heroButtonDelay: 1.5,
  heroFadeDuration: 800,
  skillItemIconHeight: "60%",
  skillItemCircleHeight: "80px",
  navBarItems: [
    { label: "HOME", link: "#" },
    { label: "SKILLS", link: "#skills" },
    { label: "EXPERIENCES", link: "#experiences" },
    { label: "PROJECTS", link: "#projects" },
    { label: "CONTACT", link: "#contact" },
  ],
  resume: resume,
  getValueOfPixelString: (pxStr) => +pxStr.trim().slice(0, -2),
};

export default customSettings