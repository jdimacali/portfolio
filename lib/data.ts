import React from "react";
import { MdComputer } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import airbnbImg from "@/public/airbnb.png";
import eccommerceImg from "@/public/eccommerce.png";
import aisaasImg from "@/public/aisaas.png";
import lmsPlatformImg from "@/public/lms-platform.png";
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
    teacher: "David J. Malan",
    description: `Undertaking the prestigious Harvard CS50 course was a pivotal moment in my self-taught developer journey. This comprehensive 
      introduction to computer science provided me with a strong foundation in programming 
      languages, algorithms, and problem-solving techniques.`,
    icon: React.createElement(MdComputer),
    date: "2022",
  },
  {
    title: "The Complete 2023 Web Development Bootcamp",
    teacher: "Dr.Angela Yu",
    description: `Completing the 2023 Web Development Bootcamp was when I knew I wanted to be a fullstack developer. This intensive course covered the latest tools and technologies 
      in web development, equipping me with the skills to create dynamic and responsive websites. From HTML5 and CSS3 to JavaScript frameworks, 
      I gained hands-on experience in crafting immersive web experiences that prioritize user engagement and modern design principles.`,
    icon: React.createElement(CgWebsite),
    date: "2022-2023",
  },
  {
    title: "Meta Frontend-End Developer Professional Certificate",
    teacher: "Meta",
    description: `The Meta Frontend Developer Certificate built upon and upgraded my experience in creating captivating user interfaces and seamless user experiences. 
    This certificate program delved into advanced React technologies and techniques, 
    including hooks, state, and responsive design, enabling me to build interactive and visually appealing applications that adapt flawlessly across devices`,
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
    githubUrl: "https://github.com/LilahDim/final-airbnb-clone",
  },
  // {
  //   title: "Ai-Saas",
  //   description:
  //     "Ai website that uses apis from popular large language models and creates dynamic content according to user input",
  //   tags: [
  //     "React",
  //     "TypeScript",
  //     "Next.js",
  //     "Tailwind",
  //     "Chat-GPT API",
  //     "Clerk",
  //   ],
  //   imageUrl: aisaasImg,
  //   projectUrl: "",
  //   githubUrl: "https://github.com/LilahDim/ai-saas",
  // },
  {
    title: "Learning Management System",
    description:
      "learning management system akin to Udemy, offering personalized course uploads and payment processing.",
    tags: ["React", "Next.js", "MySQL", "Tailwind", "Clerk", "Stripe"],
    imageUrl: lmsPlatformImg,
    projectUrl: "https://lms-platform-plum.vercel.app/",
    githubUrl: "https://github.com/LilahDim/lms_platform",
  },
  {
    title: "Ecommerce Admin and Store",
    description:
      "An eccommerce store with seperate admin console and a sleek modern frontend with cart and stripe functionality",
    tags: ["React", "Next.js", "MySQL", "Tailwind", "REST API", "Clerk"],
    imageUrl: eccommerceImg,
    projectUrl: "https://github.com/LilahDim/e-commerce-admin",
    githubUrl: "https://github.com/LilahDim/e-commerce-admin",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "Framer Motion",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Expo",
  "Redux",
  "Next.js",
  "Node.js",
  "Express",
  "REST API",
  "GraphQL",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Flask",
  "Git",
  "Docker",
] as const;
