import React from "react";

const skills = {
  languages: {
    JavaScript:
      "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FJavaScript.svg?alt=media&token=ce0c400a-e0bd-4ba4-b2fc-e60012632f5c",
    Python:
      "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FPython.svg?alt=media&token=e97e0583-00f6-483d-b34f-c155b6809a14",
    Java: "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FJava.svg?alt=media&token=1296ee95-e2ec-4fe7-a3db-b2d0cb81d7f7",
    C: "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FC.svg?alt=media&token=49c76c55-7e4a-4af5-a705-c6c3f4ebc5ed",
    HTML: "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FHTML.svg?alt=media&token=e5d7adc3-94be-494e-9370-cef5a0c9dec2",
    CSS: "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FCSS.svg?alt=media&token=84d288b6-bf04-4db6-ba1a-9bdc100a174e",
  },
  frontend: {
    "React.js":
      "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FReact.js.svg?alt=media&token=24fc1305-ad03-45d8-ba7d-7261c98f547b",
    Redux:
      "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FRedux.svg?alt=media&token=9a661286-517c-42e6-bbd3-398de4187f1b",
    "Material UI":
      "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FMaterial%20UI.svg?alt=media&token=556bfc2e-8e26-4098-9ea8-ed2d9ea49577",
    Sass: "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FSass.svg?alt=media&token=18a628e0-0672-4130-b3c0-2978423874d1",
    jQuery:
      "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FjQuery.svg?alt=media&token=109613e4-e344-4221-b4d8-3adb885a1c22",
    Formik:
      "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FFormik.png?alt=media&token=b238f1ed-94fb-4ebf-a96d-9ae6bcb40836",
  },
  backend: {
    "Node.js":
      "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FNode.js.svg?alt=media&token=bc2ff6b6-158b-4b57-8515-543f8c573b34",
    "Express.js":
      "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FExpress.js.svg?alt=media&token=516a2992-d192-4ba2-a6bd-c1c0df56cab1",
    Django:
      "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FDjango.svg?alt=media&token=ebf2f41b-9bd7-45aa-a670-d879c3206595",
    MySQL:
      "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FMySQL.svg?alt=media&token=29242bd9-ad00-4a85-a9d1-4828a81dc9b8",
    Firebase:
      "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FFirebase.png?alt=media&token=f2f908a8-93bb-44ef-9e0a-ed87e5afc2ec",
  },
  other: {
    Git: "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FGit.svg?alt=media&token=81d8cf6e-969c-4f48-a3d4-26306d36105b",
    GitHub:
      "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FGitHub.svg?alt=media&token=a388b3c1-8100-4bee-9e94-d7e497bacbce",
    Jira: "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FJira.svg?alt=media&token=4b092c9e-affd-49c0-ac2c-96896517adb8",
    Heroku:
      "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FHeroku.svg?alt=media&token=8a2e0750-f6a9-45fb-b284-bad3aece53a1",
    Netlify:
      "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FNetlify.png?alt=media&token=756a9781-31ad-42d1-8d1d-db379bdc2067",
    "VS Code":
      "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/skills%2FVS%20Code.svg?alt=media&token=f295da2d-1cbe-4351-a211-c9f7bbfc990a",
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
  background:
    "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/background%2Fbackground.png?alt=media&token=8dc3c778-0e09-4653-8612-45ea605f294d",
  hero: "https://firebasestorage.googleapis.com/v0/b/personal-website-dc932.appspot.com/o/hero%2Fhero.png?alt=media&token=6f806aee-a1e1-4061-a0af-b42a18371b14",
  skills: skills,
  navBarItems: [
    { label: "HOME", link: "#" },
    { label: "SKILLS", link: "#skills" },
    { label: "EXPERIENCES", link: "#experiences" },
    { label: "PROJECTS", link: "#projects" },
    { label: "CONTACT", link: "#contact" },
  ],
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
