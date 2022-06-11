import React from "react";

const skills = {
  languages: {
    JavaScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    Python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  frontend: {
    "React.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    Redux:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    "Material UI":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    Sass: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    jQuery:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    Formik: "https://img.stackshare.io/service/8846/preview.png",
  },
  backend: {
    "Node.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    Django:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    MySQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    Firebase:
      "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
  },
  other: {
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    GitHub:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    Bitbucket:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
    Jira: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    Heroku:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
    "VS Code":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
};

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
  background:
    "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/background%2Fbackground.png?alt=media&token=8dc3c778-0e09-4653-8612-45ea605f294d",
  hero: "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/hero%2Fhero.png?alt=media&token=6f806aee-a1e1-4061-a0af-b42a18371b14",
  skills: skills,

  resume:
    "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/resume%2FGrantChenResume.pdf?alt=media&token=73295167-0826-4172-b3c3-61aaa2bf0474",
  experiences: [
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
  contacts: [
    {
      serviceName: "gmail",
      serviceImgURL:
        "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/contact%2Fgmail.png?alt=media&token=d469221a-6f22-403d-8e51-95da862e9e14",
      serviceWebsiteURL: "mailto:grantchen2021@gmail.com",
    },
    {
      serviceName: "github",
      serviceImgURL:
        "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/contact%2Fgithub.png?alt=media&token=6ef523e4-4f86-4ae7-9d67-4c4a8368b122",
      serviceWebsiteURL: "https://github.com/ChenGrant",
    },
    {
      serviceName: "linkedin",
      serviceImgURL:
        "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/contact%2Flinkedin.png?alt=media&token=ca193b60-8863-48d1-85c8-17c1eeca100f",
      serviceWebsiteURL: "https://www.linkedin.com/in/grant-chen-1a96ba210/",
    },
  ],
  getValueOfPixelString: (pixelString) => +pixelString.trim().slice(0, -2),
  getImgSrcOfTechnology: (technology) => {
    let imgSrc;
    Object.values(skills).forEach((techGroup) => {
      imgSrc ??= techGroup[technology];
    });
    return imgSrc;
  },
};

export default customSettings;

export const CustomSettingsContext = React.createContext();

export const CustomSettingsProvider = CustomSettingsContext.Provider;
