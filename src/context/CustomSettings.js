import React from 'react';

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
  resume: {
    downloadableURL: process.env.REACT_APP_RESUME_URL,
    windowTitle: 'Grant Chen Resume',
  },
  experiences : [
    {
      companyName: "Spotwork",
      role: "Full Stack Developer Intern",
      timePeriod: "May 2022 - Present",
      techStack: ["React.js", "Redux", "Material UI", "Formik", "Firebase"],
    },
    {
      companyName: "Jin Kuai Zi",
      role: "Full Stack Developer Freelancer",
      timePeriod: "June 2021 - August 2021",
      techStack: ["Django", "jQuery", "Sass", "MySQL"],
    },
    {
      companyName: "Code Ninjas",
      role: "Lead Coding Instructor",
      timePeriod: "June 2020 - August 2020",
    },
  ],
  contacts : [
    {
      serviceName: "gmail",
      serviceImgURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1024px-Gmail_icon_%282020%29.svg.png",
      serviceWebsiteURL: "mailto:grantchen2021@gmail.com",
    },
    {
      serviceName: "github",
      serviceImgURL: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      serviceWebsiteURL: "https://github.com/ChenGrant",
    },
    {
      serviceName: "linkedin",
      serviceImgURL: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
      serviceWebsiteURL: "https://www.linkedin.com/in/grant-chen-1a96ba210/",
    },
  ],

  getValueOfPixelString: (pixelString) => +pixelString.trim().slice(0, -2),
}

export default customSettings

export const CustomSettingsContext = React.createContext()

export const CustomSettingsProvider = CustomSettingsContext.Provider
