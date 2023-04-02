import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 76,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 63,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 47,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I'm a Frontend Engineer who designs and codes user interfaces for websites and apps to improve user experience. I also ensure accessibility and optimize performance by fixing bugs and implementing new technologies.",
];

export const workExp = [
  {
    place: "PT. IT Tech",
    tenure: "Aug 2020 - Sep 2021",
    role: "Visual Designer",
    detail:
      "As a Frontend Software Engineer, the main task is to develop web applications by taking design views from the UI/UX team and designing applications based on the design. This may involve using programming languages such as HTML, CSS, and JavaScript as well as frameworks such as React, Angular, or Vue.",
  },
  {
    place: "SoftDev Indonesia",
    tenure: "Aug 2021 - Sep 2022",
    role: "Junior Software Engineer",
    detail:
      "During the development process, you will continuously add new features and develop the application. In this case, you will be responsible for ensuring that the new features added work properly and do not disrupt the functionality of the existing application.",
  },
  {
    place: "Global Solution",
    tenure: "Aug 2022 - Sep 2023",
    role: "Frontend Software Engineer",
    detail:
      "As a Frontend Software Engineer, you may also be responsible for integrating the application with backend services through APIs. This may involve using technologies such as REST, GraphQL, or WebSockets.",
  },
];

export const comments = [
  {
    name: "Lancelot",
    post: "Creative Manager",
    comment:
      "Programming skills: Able to produce clean, understandable, and industry-standard code. Ability to complete programming tasks effectively and efficiently, avoiding logical errors and minimizing code repetition.",
    img: "./org.png",
  },
  {
    name: "Gusion",
    post: "CEO",
    comment:
      "Application development skills: Able to develop applications that meet user needs and project specifications. Ability to create a good application design and select appropriate technology. Able to ensure the application runs well on different platforms and devices.",
    img: "./org.png",
  },
  {
    name: "Zilong",
    post: "Manager",
    comment:
      "Teamwork skills: Able to work with team members who have different specializations and provide useful input. Able to communicate clearly and effectively with team members and resolve conflicts in a productive manner.",
    img: "./org.png",
  },
  {
    name: "Alucard",
    post: "Founder of Fighter",
    comment:
      "Ability to master current technology: Able to master current technology and select the right technology for the project. Able to quickly learn new technology and apply it to the project.",
    img: "./org.png",
  },
  {
    name: "Lesley",
    post: "Power of Marksman",
    comment:
      "Problem-solving skills: Able to identify problems and find appropriate solutions. Ability to analyze and solve problems effectively and efficiently. Able to use problem-solving skills to improve the quality of the application and development process.",
    img: "./org.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
