import { App, Tab, WorkContent, WorkFile, WorkType } from "src/types";
import error from "../../assets/dialog/error.png";
import info from "../../assets/dialog/info.png";
import warning from "../../assets/dialog/warning.png";
import help from "../../assets/dialog/help.png";
import cmd from "../../assets/cmd.png";
import mycomputer from "../../assets/mycomputer.png";
import folder_plain from "../../assets/folder_plain.png";
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
import lul from "../../assets/work/lul.jpg";
import butterfly from "../../assets/butterfly.png";
import mr1 from "../../assets/mr1.jpg";
import mr2 from "../../assets/mr2.jpg";
import mrIcon from "../../assets/mr_icon.png";
import MS from "../../assets/work/MS.png";
import MS2 from "../../assets/work/MS2.png";
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
    3,
    {
      id: 0,
      title: "My Blog",
      message: "",
      Icon: mycomputer,
      isMinimized: false,
      zIndex: 0,
      program: App.MYBLOG,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    4,
    {
      id: 0,
      title: "My Documents",
      message: "",
      Icon: folder_plain,
      isMinimized: false,
      zIndex: 0,
      program: App.MYDOCUMENT,
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
    overview: `For my EE2026 Digital Design Class, our pair built a Audio Visual System inclusive of both 
      individual and teamwork components.\nOur team component consist of an interactive mouse-based 
      drawing tool that includes a canvas, colour palette changer, rectangle drawing tool and brush 
      size selection. For my individual portion, I came up with a P-Mod OLED digital stopwatch timer 
      that have lapping and a whistle start/stop feature powered by Pmod MIC3`,
  },
  {
    id: 5,
    title: "SAGE - Java-Based CLI Task Manager",
    date: "Feb 2023",
    gitURL: "https://github.com/firwer/ip",
    techstack: [TechIcon.JAVA],
    gallery: [],
    overview: `For my individual portion, I created SAGE, A Java-Based CLI developed based on the OOP concepts 
      and SWE code quality principles. SAGE is a CLI that helps users to manage their tasks and deadlines. 
      For our team component, (Not done yet, taking the module now)`,
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
    title: "GDSC Mercy Relief CMS Portal (WIP)",
    date: "Sept 2022 - Present",
    gitURL: "",
    techstack: [
      TechIcon.NEXTJS,
      TechIcon.TYPESCRIPT,
      TechIcon.MONGODB,
      TechIcon.MATERIALUI,
      TechIcon.CSS,
    ],
    gallery: [mr1, mr2],
    overview: `Currently, I am working as a frontend software developer for Google's Developer Student Club. We
    are building a new CMS portal for Mercy Relief, a non-profit organization that supports disaster relief efforts
    worldwide. The newly revamped CMS portal aims to provide a more user-friendly interface for the Mercy Relief 
    team to manage their global campaigns, press release articles, and donation drives. Some areas I have contributed
    but not limited to are the frontend development of the campaign creation page that consist of TinyMCE WYSIWYG 
    editor, DragnDrop image upload, and API Integration with our backend.`,
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
] as WorkFile[];
