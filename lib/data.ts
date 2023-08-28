import React from "react";
import { MdComputer } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import airbnbImg from "@/public/airbnb.png";
import eccommerceImg from "@/public/eccommerce.png";
import aisaasImg from "@/public/aisaas.png";

// TODO: You need to insert the images of your projects in the public folder and import them here to insert them in the static ProjectsData

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Courses",
    hash: "#courses",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const coursesData = [
  {
    title: "Harvard CS50",
    location: "David J. Malan",
    description: `Undertaking the prestigious Harvard CS50 course was a pivotal moment in my self-taught developer journey. This comprehensive 
      introduction to computer science provided me with a strong foundation in programming 
      languages, algorithms, and problem-solving techniques. The rigorous curriculum challenged me to think critically and approach`,
    icon: React.createElement(MdComputer),
    date: "2022",
  },
  {
    title: "The Complete 2023 Web Development Bootcamp",
    location: "Dr.Angela Yu",
    description: `Completing the 2023 Web Development Bootcamp was a transformative experience. This intensive course covered the latest tools and technologies 
      in web development, equipping me with the skills to create dynamic and responsive websites. From HTML5 and CSS3 to JavaScript frameworks, 
      I gained hands-on experience in crafting immersive web experiences that prioritize user engagement and modern design principles.`,
    icon: React.createElement(CgWebsite),
    date: "2022-2023",
  },
  {
    title: "Meta Frontend-End Developer Professional Certificate",
    location: "Meta",
    description: `Earning the Meta Frontend Developer Certificate validated my expertise in creating captivating user interfaces and seamless user experiences. 
    This certificate program delved into advanced frontend technologies, 
    including React, and responsive design, enabling me to build interactive and visually appealing applications that adapt flawlessly across devices`,
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Airbnb",
    description:
      "Airbnb clone that has its best features like property listings, booking experiences, and user favorites",
    tags: [
      "Next.js",
      "MongoDB",
      "Tailwind",
      "Prisma",
      "Typescript",
      "Zustand",
      "Next-Auth",
    ],
    imageUrl: airbnbImg,
    projectUrl: "https://rental-home-app-cyan.vercel.app/",
  },
  {
    title: "Ai-Saas",
    description:
      "Ai website that uses apis from popular large language models and creates dynamic content according to user input",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Chat-GPT API",
      "Clerk",
    ],
    imageUrl: aisaasImg,
    projectUrl: "",
  },
  {
    title: "Ecommerce Admin and Store",
    description:
      "An eccommerce store with seperate admin console  and a sleek modern frontend with cart and stripe functionality",
    tags: ["React", "Next.js", "MySQL", "Tailwind", "REST API", "Clerk"],
    imageUrl: eccommerceImg,
    projectUrl: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Flask",
  "Framer Motion",
] as const;
