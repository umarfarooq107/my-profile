export type Work = {
  title: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
  image: string;
  logo: string;
};

export const works: Work[] = [
  {
    title: "Recipt Generator",
    description:
      "React-based Receipt Generator for creating and managing professional receipts quickly.",
    year: "2024",
    role: "Lead Product Designer",
    tags: ["Brand", "Website", "Webflow"],
    image: "/assets/images/section/reciptfull.jpg",
    logo: "/assets/images/logo/logo-2.svg",
  },
  {
    title: "EMS",
    description:
      "React-based Employee Management System with role-based dashboards and task management.",
    year: "2024",
    role: "Lead Product Designer",
    tags: ["Brand", "Website", "Webflow"],
    image: "/assets/images/section/Screenshot 2026-10-05 220500.jpg",
    logo: "/assets/images/logo/logo-2.svg",
  },
  {
    title: "Persional Portfolio",
    description:
      "Personal portfolio website showcasing my skills, projects, experience, and web development work.",
    year: "2024",
    role: "Lead Web Designer",
    tags: ["Brand", "Website", "Webflow"],
    image: "/assets/images/section/Screenshot 2026-10-05 233536.jpg",
    logo: "/assets/images/logo/logo-2.svg",
  },
  
];
