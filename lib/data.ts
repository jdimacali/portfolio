import React from "react";
import { MdComputer } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

import airbnbImg from "@/public/airbnb/airbnb.png";
import airbnbFullImg from "@/public/airbnb/airbnb-full.png";
import airbnbImg1 from "@/public/airbnb/airbnb1.png";
import airbnbImg2 from "@/public/airbnb/airbnb2.png";

import lmsPlatformImg from "@/public/lms/lms-platform.png";
import lmsPlatformEditImg from "@/public/lms/lms-platform-edit.png";
import lmsPlatformImg1 from "@/public/lms/lms-platform1.png";
import lmsPlatformImg2 from "@/public/lms/lms-platform2.png";

import eccommerceAdminImg from "@/public/e-admin/eccommerce-admin.png";
import eccommerceAdminFullImg from "@/public/e-admin/eccommerce-admin-full.png";
import eccommerceAdminImg1 from "@/public/e-admin/eccommerce1.png";
import eccommerceAdminImg2 from "@/public/e-admin/eccommerce2.png";

import eccommerceStoreImg from "@/public/e-store/eccommerce-store.png";
import eccommerceStoreFullImg from "@/public/e-store/eccommerce-store-full.png";
import eccommerceStoreImg1 from "@/public/e-store/eccommerce1.png";
import eccommerceStoreImg2 from "@/public/e-store/eccommerce2.png";

import gweartDashboardImg from "@/public/gweart/gweart_dashboard.png";
import gweartEventsImg from "@/public/gweart/gweart_events.png";
import gweartProductImg from "@/public/gweart/gwe_product.png";
import gweartCheckoutImg from "@/public/gweart/gwe_checkout.png";

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
    descriptions: [
      "Airbnb clone that has its best features like property listings, booking experiences, and user favorites",
      `The listing creation feature is meticulously designed to provide users with a hassle-free and intuitive experience. Implementing CRUD operations, the application allows users to effortlessly create, update, and manage their listings. 
      Robust authentication mechanisms ensure secure access and data handling, guaranteeing the privacy and integrity of user-generated content.`,
      "The reservation and rental process is meticulously crafted to provide users with a hassle-free and secure booking experience. Advanced date management systems enable users to select available dates for their desired accommodation, while sophisticated authentication mechanisms ensure secure access and data handling, safeguarding the integrity of the booking process.",
    ],
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
    githubUrl: "https://github.com/jdimacali/final-airbnb-clone",
    photos: [airbnbFullImg, airbnbImg1, airbnbImg2],
  },
  {
    title: "Learning Management System",
    descriptions: [
      "learning management system akin to Udemy, offering personalized course uploads and payment processing.",
      "The LMS platform's course creation feature is designed to simplify the course development process for educators. Through the application of RESTful API design principles, the LMS platform enables seamless communication between the frontend and backend components, facilitating efficient data transfer and integration of course content into the platform's database.",
      "The course viewing feature within the LMS platform is meticulously designed to provide users with a comprehensive and secure learning experience. Locked features and free chapters are strategically implemented, encouraging users to explore course content and incentivizing them to unlock the full course through secure payment transactions.",
    ],
    tags: ["React", "Next.js", "MySQL", "Tailwind", "Clerk", "Stripe"],
    imageUrl: lmsPlatformImg,
    projectUrl: "https://lms-platform-plum.vercel.app/",
    githubUrl: "https://github.com/jdimacali/lms_platform",
    photos: [lmsPlatformImg1, lmsPlatformEditImg, lmsPlatformImg2],
  },
  {
    title: "E-commerce Admin Console",
    descriptions: [
      "An advanced e-commerce admin console integrating RESTful API endpoints for efficient client data management.",
      "The product data editing feature within the E-Commerce Admin Console is meticulously designed to provide administrators with a hassle-free and secure data management experience.The application's robust backend architecture ensures efficient data transfer and integration between the E-Commerce Admin Console and client storefronts, allowing for seamless product data synchronization across multiple platforms.  ",
      " The E-Commerce Admin Console's server architecture is implemented with a focus on scalability, security, and efficient data management. The well-structured RESTful API endpoints facilitate seamless communication between the server and client applications, enabling a cohesive and user-friendly data management experience.",
    ],

    tags: ["React", "Next.js", "MySQL", "Tailwind", "REST API", "Clerk"],
    imageUrl: eccommerceAdminImg,
    projectUrl: "https://e-commerce-admin-ank65i4gi-lilahdim.vercel.app/",
    githubUrl: "https://github.com/jdimacali/e-commerce-admin",
    photos: [eccommerceAdminFullImg, eccommerceAdminImg1, eccommerceAdminImg2],
  },
  {
    title: "E-commerce Client Store",
    descriptions: [
      "An e-commerce platform with a sleek, modern design, shopping cart integration, and Stripe functionality.",
      "The E-Commerce Store Client's cart and checkout features are meticulously designed to provide users with a seamless and secure shopping experience. The secure Stripe integration further enhances the platform's credibility and trustworthiness, allowing users to complete transactions smoothly and securely, fostering a positive and seamless shopping experience.",
      `The store display feature within the E-Commerce Storefront is meticulously designed to provide users with a 
      seamless and visually engaging shopping experience. By leveraging the capabilities of the custom backend API, the platform ensures that product information is accurately displayed and updated in real-time, providing customers with the latest store details.`,
    ],
    tags: ["React", "Next.js", "Tailwind", "REST API", "Stripe"],
    imageUrl: eccommerceStoreImg,
    projectUrl: "https://ecommerce-store-lovat-xi.vercel.app/",
    githubUrl: "https://github.com/jdimacali/e-commerce-admin",
    photos: [eccommerceStoreFullImg, eccommerceStoreImg1, eccommerceStoreImg2],
  },
  {
    title: "GWE ART",
    descriptions: [
      "Personal website for art influencer with strapi dashboard for managing events, products, orders.",
      "Using strapi to handle data management and api endpoints, G.W.E manages their upcoming events to let users know where their next appearance will be.",
      `The product management feature within the G.W.E Art platform is meticulously designed to provide administrators with a hassle-free and secure data management experience.`,
    ],
    tags: ["React", "Next.js", "Tailwind", "Strapi", "Stripe", "S3"],
    imageUrl: gweartDashboardImg,
    projectUrl: "https://www.artbygwe.com/",
    githubUrl: "https://github.com/jdimacali/gweart",
    photos: [gweartDashboardImg, gweartEventsImg, gweartProductImg],
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
  "Mongoose",
  "PostgreSQL",
  "Python",
  "Rust",
  "Flask",
  "Git",
  "Docker",
  "Framer Motion",
  "Jest",
] as const;
