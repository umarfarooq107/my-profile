export type TimelineItem = {
  period: string;
  role: string;
  description: string;
  icon: { light: string; dark?: string; width: number; height: number };
};

export const educationItems: TimelineItem[] = [
 
    {
    period: "2023 - 2026",
    role: "Full-Stack Developer – MaxxPase Solutions",
    description:
      "Completed my internship and continued working as a Full-Stack Developer at MaxxPase Solutions.Developed web applications using JavaScript, React.js, Node.js, and Next.js.Worked on real-world projects and contributed to the development and deployment process.Gained hands-on experience with CI/CD pipelines, version control, and modern development practices.",
    icon: { light: "/assets/images/item/MaxxPace-Logo-transparent(1).svg", dark: "/assets/images/item/MaxxPace-Logo-White-Transparent.svg", width: 80, height: 32 },
  },
  {
    period: "2022 - 2023",
    role: "Diploma & job in Website & Front-End Development",
    description:
      "Completed a Diploma in Website and Front-End Development, gaining practical knowledge of HTML, CSS, Bootstrap, JavaScript, React.js, SQL, WordPress, PHP, and Wix. Developed a strong foundation in responsive web design, front-end development, website customization, content management systems, and database fundamentals.",
    icon: { light: "/assets/images/item/kics_logo_transparent.svg", dark: "/assets/images/item/kics_logo_transparent.svg", width: 80, height: 32 },
  },
  {
    period: "2018 - 2020",
    role: "FS.c pre-engineering",
    description:
      "College/Secondary School",
    icon: { light: "/assets/images/item/punjab_colleges_no_bg.svg", dark: "/assets/images/item/punjab_colleges_no_bg.svg", width: 80, height: 32 },
  },
  {
    period: "2019",
    role: "Technical /IT Diploma",
    description:
      "Learned and got Hands on Experience in Computer Fundamentals, Operating Systems(windows10,Linux(Basic)), MS Office 2016, Inpage",
    icon: { light: "/assets/images/item/raedc_transparent.svg", dark: "/assets/images/item/raedc_transparent.svg", width: 80, height: 32 },
  },
  {
    period: "2017 - 2016",
    role: "Metriculation",
    description:
      "High school",
    icon: { light: "/assets/images/item/edu-3_darkk.svg", dark: "/assets/images/item/edu-3_darkk.svg", width: 80, height: 32 },
  },
  
];
