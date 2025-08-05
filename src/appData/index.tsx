import {
  App,
  GalleryImage,
  Tab,
  WorkContent,
  WorkFile,
  WorkType,
} from "src/types";
import error from "../../assets/dialog/error.png";
import info from "../../assets/dialog/info.png";
import warning from "../../assets/dialog/warning.png";
import help from "../../assets/dialog/help.png";
import cmd from "../../assets/cmd.png";
import mycomputer from "../../assets/mycomputer.png";
import gallery from "../../assets/folder_image.png";
import outlook from "../../assets/outlook.png";
import dsta from "../../assets/workaccordion/dsta.png";
import gdsc from "../../assets/workaccordion/gdsc.png";
import file from "../../assets/workaccordion/file.png";
import emptyfile from "../../assets/workaccordion/emptyfile.png";
import ee2026_1 from "../../assets/work/EE2026/ee2026_1.jpg";
import ee2026_2 from "../../assets/work/EE2026/ee2026_2.jpg";
import ee2026_3 from "../../assets/work/EE2026/ee2026_3.jpg";
import ee2026_4 from "../../assets/work/EE2026/ee2026_4.jpg";
import ee2026_5 from "../../assets/work/EE2026/ee2026_5.jpg";
import ee2026_6 from "../../assets/work/EE2026/ee2026_6.jpg";
import ee2026_7 from "../../assets/work/EE2026/ee2026_7.jpg";
import dsta_1 from "../../assets/work/dsta/1.png";
import dsta_2 from "../../assets/work/dsta/2.png";
import dsta_3 from "../../assets/work/dsta/3.png";
import dsta_4 from "../../assets/work/dsta/4.png";
import dsta_5 from "../../assets/work/dsta/5.png";
import dsta_6 from "../../assets/work/dsta/6.png";
import dsta_7 from "../../assets/work/dsta/7.png";
import dsta_8 from "../../assets/work/dsta/8.png";
import hfg_1 from "../../assets/work/hfg/1.png";
import hfg_2 from "../../assets/work/hfg/2.png";
import hfg_3 from "../../assets/work/hfg/3.png";
import hfg_5 from "../../assets/work/hfg/5.png";
import hfg_6 from "../../assets/work/hfg/6.png";
import hfg_7 from "../../assets/work/hfg/7.png";
import eg_1 from "../../assets/work/eg1311/1.jpg";
import eg_2 from "../../assets/work/eg1311/2.jpg";
import eg_3 from "../../assets/work/eg1311/3.jpg";
import eg_4 from "../../assets/work/eg1311/4.jpg";
import eg_5 from "../../assets/work/eg1311/5.jpg";
import eg_6 from "../../assets/work/eg1311/6.jpg";
import cg1 from "../../assets/work/cg1111/1.jpg";
import cg2 from "../../assets/work/cg1111/2.jpg";
import cg3 from "../../assets/work/cg1111/3.jpg";
import cg4 from "../../assets/work/cg1111/4.jpg";
import cg5 from "../../assets/work/cg1111/5.jpg";
import cg6 from "../../assets/work/cg1111/6.jpg";
import cg1_2 from "../../assets/work/cg2111/1.jpg";
import cg2_2 from "../../assets/work/cg2111/2.jpg";
import cg3_2 from "../../assets/work/cg2111/3.jpg";
import cg4_2 from "../../assets/work/cg2111/4.jpg";
import cg5_2 from "../../assets/work/cg2111/5.jpg";
import cg6_2 from "../../assets/work/cg2111/6.jpg";
import cs2113_1 from "../../assets/work/cs2113/1.png";
import cs2113_2 from "../../assets/work/cs2113/2.png";
import sc_1 from "../../assets/work/supercanvas/1.png";
import sc_2 from "../../assets/work/supercanvas/2.png";
import sc_3 from "../../assets/work/supercanvas/3.png";
import lul from "../../assets/work/lul.png";
import butterfly from "../../assets/butterfly.png";
import mr1 from "../../assets/mr1.jpg";
import mr2 from "../../assets/mr2.jpg";
import mrIcon from "../../assets/mr_icon.png";
import MS from "../../assets/work/MS.png";
import MS2 from "../../assets/work/MS2.png";
import col1 from "../../assets/gallery/0.webp";
import col2 from "../../assets/gallery/1.webp";
import col3 from "../../assets/gallery/2.webp";
import col4 from "../../assets/gallery/3.webp";
import col5 from "../../assets/gallery/4.webp";
import col6 from "../../assets/gallery/5.webp";
export const TechIcon = {
  REACT:
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  NEXTJS:
    "https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white",
  FIREBASE:
    "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
  TYPESCRIPT:
    "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  FIGMA:
    "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
  NODEJS:
    "https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white",
  GOOGLECLOUDFUNCTIONS:
    "https://img.shields.io/badge/gCloud_Functions-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  JAVA: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white",
  FLUTTER:
    "https://img.shields.io/badge/flutter-%2302569B.svg?style=for-the-badge&logo=flutter&logoColor=white",
  VERILOG:
    "https://img.shields.io/badge/Verilog-%23F7DF1E.svg?style=for-the-badge&logo=verilog&logoColor=rgb(142%2C0%2C39)",
  PYTHON:
    "https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white",
  C: "https://img.shields.io/badge/C-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
  CPP: "https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&ogoColor=white",
  ROS: "https://img.shields.io/badge/ROS-%23000000.svg?style=for-the-badge&logo=ros&logoColor=white",
  ARDUINO:
    "https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white",
  HTML: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  CSS: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  JAVASCRIPT:
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  RASPBERRYPI:
    "https://img.shields.io/badge/Raspberry%20Pi-C51A4A?style=for-the-badge&logo=Raspberry-Pi",
  REDUX:
    "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
  MATERIALUI:
    "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white",
  AUTOCAD:
    "https://img.shields.io/badge/AutoCAD-0696D7?style=for-the-badge&logo=autodesk&logoColor=white",
  MBOT: "https://img.shields.io/badge/Makeblock-FF7F00?style=for-the-badge&logo=makeblock&logoColor=white",
  GOOGLECLOUD:
    "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  MONGODB:
    "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
  TELEGRAM:
    "https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white",
  VUEJS:
    "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D",
  WEBPACK:
    "https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white",
  SUPABASE:
    "https://img.shields.io/badge/Supabase-1E2E3B?style=for-the-badge&logo=supabase&logoColor=white",
  CHATGPT:
    "https://img.shields.io/badge/chatGPT-74aa9c?logo=openai&logoColor=white",
};

export const AppDirectory: Map<number, Tab> = new Map([
  [
    0,
    {
      id: 0,
      title: "Welcome To My Website - Quick Start Guide",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.WELCOME,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    1,
    {
      id: 0,
      title: "Outlook Express",
      message: "",
      Icon: outlook,
      isMinimized: false,
      zIndex: 0,
      program: App.OUTLOOK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    2,
    {
      id: 0,
      title: "My Work",
      message: "",
      Icon: cmd,
      isMinimized: false,
      zIndex: 0,
      program: App.MYWORK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    4,
    {
      id: 0,
      title: "My Photography Collection",
      message: "",
      Icon: gallery,
      isMinimized: false,
      zIndex: 0,
      program: App.MYGALLERY,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    5,
    {
      id: 0,
      title: "Error",
      message: "",
      Icon: error,
      isMinimized: false,
      zIndex: 0,
      program: App.ERROR,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    6,
    {
      id: 0,
      title: "Warning",
      message: "",
      Icon: warning,
      isMinimized: false,
      zIndex: 0,
      program: App.WARNING,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    7,
    {
      id: 0,
      title: "Info",
      message: "",
      Icon: info,
      isMinimized: false,
      zIndex: 0,
      program: App.INFO,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    8,
    {
      id: 0,
      title: "Help",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.HELP,
      prompt: true,
      backBtnActive: false,
    },
  ],
]);

export const WorkAccordionTitles = [
  WorkType.HACKATHON,
  WorkType.PERSONAL,
  WorkType.SCHOOL,
];

export const GalleryAccordionTitles = ["Details"];

export const WorkData = [
  {
    id: 1,
    title: "Windows XP Personalized Website",
    date: "Jan 2023 - Feb 2023",
    gitURL: "https://github.com/firwer/winxpsite",
    techstack: [
      TechIcon.TYPESCRIPT,
      TechIcon.NEXTJS,
      TechIcon.REDUX,
      TechIcon.CSS,
      TechIcon.HTML,
      TechIcon.JAVASCRIPT,
    ],
    gallery: [lul],
    overview: `This project began as my software journey first began on Windows XP. Back then, I was
    trying out many different things on my old XP computer such as creating my little CLI application
    on batch files and also developing my very first GUI apps on Visual Studio 2010 (i.e Text encrypters,
    My own Web browser, phishing program that can steal my friend's passwords :P, and I forgot what else...)
    .Unfortunately, I lost all of those files so it was somewhat nostalgic to recreate the environment
    that I used to have back then. Other than those, I also have fond memories of the MSN Messenger with 
    that irritating nudge function. Anyway, I figured out why not present all my works and my digital 
    identity somewhere familiar to me, so here we are, hope you'll enjoy this little project of mine!`,
  },
  {
    id: 2,
    title: "Telegram Bot - SDA Crowd Level Report Generator",
    date: "Oct - Nov 2022",
    gitURL: "",
    techstack: [TechIcon.TELEGRAM, TechIcon.PYTHON],
    gallery: [],
    overview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel`,
  },
  {
    id: 3,
    title: "Telegram Bot - Digital Goods Management System",
    date: "Oct 2022 - Present",
    gitURL: "",
    techstack: [TechIcon.TELEGRAM, TechIcon.PYTHON, TechIcon.GOOGLECLOUD],
    gallery: [MS, MS2],
    overview: `I have developed a cloud inventory management system on gCloud with a Telegram bot 
    interface to help manage my online software distribution business. The system is able to retrieve,
    restock, validate and deliver digital goods to my customers. This system has helped me to automate
    crucial portions of my business processes and save me a lot of time and effort while also reducing
    the delivery time of my products. To date, this system has helped me to fulfil over 1000+ orders`,
  },
  {
    id: 4,
    title: "Audio Visual System BASYS3 FPGA",
    date: "Oct - Nov 2022",
    gitURL: "https://github.com/firwer/EE2026-FPGA-Project",
    techstack: [TechIcon.VERILOG, TechIcon.PYTHON],
    gallery: [
      ee2026_5,
      ee2026_1,
      ee2026_2,
      ee2026_3,
      ee2026_4,
      ee2026_6,
      ee2026_7,
    ],
    overview: `In my EE2026 Digital Design Class, my partner and I collaborated on an Audio Visual System 
    project that encompassed both individual and team components. Our team's contribution consisted of an 
    interactive mouse-based drawing tool, complete with a canvas, color palette changer, rectangle drawing 
    tool, and brush size selection. For my individual role, I developed a P-Mod OLED digital stopwatch timer 
    with lap timing functionality and a whistle-based start/stop feature, powered by the Pmod MIC3. 
    Our project was one of the top performing projects in our cohort.`,
  },
  {
    id: 5,
    title: "MagnusStock - Java-Based CLI Inventory Management System",
    date: "Feb 2023",
    gitURL: "https://github.com/firwer/tp",
    techstack: [TechIcon.JAVA],
    gallery: [cs2113_1, cs2113_2],
    overview: `As part of a collaborative course project, we have developed a Java-based CLI inventory management 
    system called "Magnus Stock" that can perform CRUD operations on inventory items, generate history reports, 
    and read/write inventory data in CSV format.Throughout this project, we gained valuable experience in crafting
    comprehensive user and developer guides using Markdown, complemented by the inclusion of UML Diagrams for 
    clarity. From the technical standpoint, our team demonstrated our ability to write clean, functional, and 
    well-tested JUnit code that is able to handle exceptions and edge cases.`,
  },
  {
    id: 6,
    title: "CG2111A - Alex Search & Rescue Lidar Robot Project",
    date: "Feb 2023",
    gitURL: "https://github.com/firwer/CG2111A-Alex-Lidar-Project",
    techstack: [
      TechIcon.CPP,
      TechIcon.ROS,
      TechIcon.ARDUINO,
      TechIcon.RASPBERRYPI,
    ],
    gallery: [cg1_2, cg2_2, cg3_2, cg4_2, cg5_2, cg6_2],
    overview: `We created a robot, named Alex, that is intended to be a “search and rescue” robot that
      can be piloted around remotely in an unknown environment. Its role is to serve as an 
      “eye” of the user and provide real-time information on the environment to the user to
      allow him/her to navigate the whole terrain and draw a detailed map of the environment.\n
      The robot is equipped with a LIDAR device to map the said unknown environment. The user would 
      then be able to send movement commands to Alex and receive environment information (the angle 
      and distance to the nearest obstacle in any particular direction) back to the user.\n
      Through this project, I have learnt how to integrate Lidar, Arduino, Raspberry Pi and ROS into
      a single operational vehicle and most importantly, how to write baremetal code and deal with USART 
      communication between our Compuer, Arduino and Raspberry Pi.`,
  },
  {
    id: 7,
    title: "CG1111A - mBot Vehicle Maze Navigator",
    date: "Aug - Nov 2021",
    gitURL: "",
    techstack: [TechIcon.CPP, TechIcon.MBOT],
    gallery: [cg6, cg1, cg2, cg3, cg4, cg5],
    overview: `Our team and I built an mBot vehicle that is able to navigate through a maze and perform specific 
      action based on the colour of the ground it is on. The mBot is able to detect the colour of the 
      ground using a colour sensor and move in different directions with the help of 2 IR sensor and 1 
      Ultrasonic sensor.`,
  },
  {
    id: 8,
    title: "EG1311",
    date: "Aug - Nov 2021",
    gitURL: "",
    techstack: [TechIcon.CPP, TechIcon.ARDUINO, TechIcon.AUTOCAD],
    gallery: [eg_1, eg_2, eg_3, eg_4, eg_5, eg_6],
    overview: `My team and I built a robot vehicle powered using Arduino and 4 DC motors. Our vehicle is able to 
      move through a series of incline ramps, stop at a designated point using proximity sensor and fire 
      a ping-pong ball through a quick-release catapult that was built with a servo-motor.`,
  },

  {
    id: 9,
    title: "GDSC Hack4Good 2023 - InclusionLab Web Platform",
    date: "Feb 2023",
    gitURL: "https://github.com/firwer/h4g-hackathon",
    techstack: [
      TechIcon.NODEJS,
      TechIcon.NEXTJS,
      TechIcon.GOOGLECLOUDFUNCTIONS,
      TechIcon.FIREBASE,
      TechIcon.TYPESCRIPT,
      TechIcon.FIGMA,
      TechIcon.CSS,
      TechIcon.JAVASCRIPT,
      TechIcon.HTML,
    ],
    gallery: [hfg_7, hfg_1, hfg_2, hfg_3, hfg_5, hfg_6],
    overview: `InclusionLab aims to help companies to improve the accessibility of their websites for persons 
      with disabilities. We provide a platform where PWDs can conduct easy & clear accessibility testing 
      and also an automated accessibility testing tool powered by Axe-Core to maximise testing outcome`,
  },
  {
    id: 10,
    title: "DSTA CodeEXP Hackathon 2022 - My Army Pal",
    date: "Jun 2022",
    gitURL: "https://github.com/firwer/dstahackathon",
    techstack: [TechIcon.FLUTTER, TechIcon.FIREBASE],
    gallery: [dsta_7, dsta_1, dsta_2, dsta_3, dsta_4, dsta_5, dsta_6, dsta_8],
    overview: `MyArmyPal serves to be an all in one service for our service men. It seeks to provide convenience 
      and useful features just one tap away. Its main features include an IPPT Calculator, reservist 
      checklist, customized IPPT training plan according to the user's current fitness level and a canteen 
      order pick up service in all army camps.`,
  },
  {
    id: 11,
    title: "GDSC Mercy Relief CMS Portal",
    date: "Sept 2022 - June 2023",
    gitURL: "",
    techstack: [
      TechIcon.NEXTJS,
      TechIcon.TYPESCRIPT,
      TechIcon.MONGODB,
      TechIcon.MATERIALUI,
      TechIcon.CSS,
    ],
    gallery: [mr1, mr2],
    overview: `I have worked as a frontend software developer for Google's Developer Student Club. Our team project aims to
    build a new CMS portal for Mercy Relief, a non-profit organization that supports disaster relief efforts
    worldwide. The newly revamped CMS portal aims to provide a more user-friendly interface for the Mercy Relief 
    team to manage their global campaigns, press release articles, and donation drives. Some areas I have contributed
    but not limited to are the frontend development of the campaign creation page that consist of TinyMCE WYSIWYG 
    editor, DragnDrop image upload, and API Integration with our backend.`,
  },
  {
    id: 12,
    title: "Super Canvas Chrome Extension",
    date: "Apr 2023 - Jul 2023",
    gitURL: "https://github.com/firwer/supercanvas",
    techstack: [
      TechIcon.TYPESCRIPT,
      TechIcon.WEBPACK,
      TechIcon.MATERIALUI,
      TechIcon.CSS,
    ],
    gallery: [sc_1, sc_2, sc_3],
    overview: `Super Canvas is a Chrome Extension with over 200 active users, designed to improve the student 
    experience and productivity on Canvas LMS. It provides valuable features like file preview, search, and 
    instant download, along with an automatic deadline tracker for a better grasp of upcoming deadlines.`,
  },
  {
    id: 13,
    title: "InternWiz - Startup Internship Portal (WIP)",
    date: "May 2023 - Present",
    gitURL: "https://github.com/firwer/internwiz",
    techstack: [
      TechIcon.NEXTJS,
      TechIcon.TYPESCRIPT,
      TechIcon.SUPABASE,
      TechIcon.CHATGPT,
    ],
    gallery: [],
    overview: `InternWiz is a carefully curated platform that offers a seamless experience, enabling students 
    to embark on their dream internship journey with ease. The platform features an infinitely scrolling 
    dashboard that offers over 4000+ up-to-date startups. Users have the flexibility to refine their search 
    based on parameters like startup size, industry, and funding stage. Users can conveniently add their 
    preferred startups to your profile and when they are ready to apply, users can easily generate a 
    personalized cold-email using generative AI. The email is tailored to details from the uploaded resume, 
    as well as essential information such as the user's major, year of study, and preferred internship role.`,
  },
] as WorkContent[];

export const WorkAccordionContent = [
  {
    id: 1,
    type: WorkType.PERSONAL,
    icon: butterfly,
    title: "Windows XP Personalized Website",
    content: WorkData[WorkData.findIndex((x) => x.id === 1)],
  },
  {
    id: 2,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "SDA Report Generator",
    content: WorkData[WorkData.findIndex((x) => x.id === 2)],
  },
  {
    id: 3,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Digital Goods Management System",
    content: WorkData[WorkData.findIndex((x) => x.id === 3)],
  },
  {
    id: 4,
    type: WorkType.SCHOOL,
    icon: file,
    title: "EE2026 Digital Systems Design",
    content: WorkData[WorkData.findIndex((x) => x.id === 4)],
  },
  {
    id: 5,
    type: WorkType.SCHOOL,
    icon: file,
    title: "CS2113 - Software Engineering & OOP",
    content: WorkData[WorkData.findIndex((x) => x.id === 5)],
  },
  {
    id: 6,
    type: WorkType.SCHOOL,
    icon: file,
    title: "CG2111A Engineering Principles II",
    content: WorkData[WorkData.findIndex((x) => x.id === 6)],
  },
  {
    id: 7,
    type: WorkType.SCHOOL,
    icon: file,
    title: "CG1111A Engineering Principles I",
    content: WorkData[WorkData.findIndex((x) => x.id === 7)],
  },
  {
    id: 8,
    type: WorkType.SCHOOL,
    icon: file,
    title: "EG1311 Design and Make",
    content: WorkData[WorkData.findIndex((x) => x.id === 8)],
  },
  {
    id: 9,
    type: WorkType.HACKATHON,
    icon: gdsc,
    title: "GDSC Hack4Good 2023",
    content: WorkData[WorkData.findIndex((x) => x.id === 9)],
  },
  {
    id: 10,
    type: WorkType.HACKATHON,
    icon: dsta,
    title: "DSTA CodeEXP 2022",
    content: WorkData[WorkData.findIndex((x) => x.id === 10)],
  },
  {
    id: 11,
    type: WorkType.SCHOOL,
    icon: mrIcon,
    title: "GDSC Mercy Relief CMS Portal",
    content: WorkData[WorkData.findIndex((x) => x.id === 11)],
  },
  {
    id: 12,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Super Canvas Chrome Extension",
    content: WorkData[WorkData.findIndex((x) => x.id === 12)],
  },
  {
    id: 13,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "InternWiz - Startup Internship Portal",
    content: WorkData[WorkData.findIndex((x) => x.id === 13)],
  },
] as WorkFile[];

// For My Photography Collection
export const PhotoCollection = [
  {
    id: 0,
    title: "Rocky afternoon",
    location: "Dingboche-Lobuche, Nepal",
    desc: "Taken enroute to Everest Base Camp",
    date: "31 December 2022",
    img: col1,
  },
  {
    id: 1,
    title: "Himalayan Mountain",
    location: "Lobuche-GorakShep, Nepal",
    desc: "Icy morning",
    date: "1 January 2023",
    img: col2,
  },
  {
    id: 2,
    title: "Autumn Foliage",
    location: "Kyoto, Japan",
    desc: "Japanese Autumn Foliage in the Imperial Palace of Kyoto",
    date: "23 November 2023",
    img: col3,
  },
  {
    id: 3,
    title: "Japanese Symmetry",
    location: "Kiyomizu Temple, Kyoto",
    desc: "One of the most famous temples in Kyoto, Japan",
    date: "22 November 2023",
    img: col4,
  },
  {
    id: 4,
    title: "Australia Forest Trail",
    location: "Aqueduct Road, Melbourne, Australia",
    desc: "Bird eye view of the forest trail during winter",
    date: "June 2022",
    img: col5,
  },
  {
    id: 5,
    title: "Milky Wave",
    location: "Waiao Beach, Yilan, Taiwan",
    desc: "Surfing in the middle of a milky ocean",
    date: "17 November 2022",
    img: col6,
  },
] as GalleryImage[];
