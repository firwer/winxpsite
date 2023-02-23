import { App, Tab, WorkContent, WorkFile, WorkType } from "src/types";
import cmd from "../../assets/cmd.png";
import mycomputer from "../../assets/mycomputer.png";
import folder_plain from "../../assets/folder_plain.png";
import outlook from "../../assets/outlook.png";
import dsta from "../../assets/workaccordion/dsta.png";
import gdsc from "../../assets/workaccordion/gdsc.png";
import file from "../../assets/workaccordion/file.png";
import ee2026_1 from "../../assets/work/ee2026/ee2026_1.jpg";
import ee2026_2 from "../../assets/work/ee2026/ee2026_2.jpg";
import ee2026_3 from "../../assets/work/ee2026/ee2026_3.jpg";
import ee2026_4 from "../../assets/work/ee2026/ee2026_4.jpg";
import ee2026_5 from "../../assets/work/ee2026/ee2026_5.jpg";
import ee2026_6 from "../../assets/work/ee2026/ee2026_6.jpg";
import ee2026_7 from "../../assets/work/ee2026/ee2026_7.jpg";
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
};

export const AppDirectory: Map<number, Tab> = new Map([
  [
    1,
    {
      id: 0,
      title: "Outlook Express",
      Icon: outlook,
      isMinimized: false,
      zIndex: 0,
      program: App.OUTLOOK,
    },
  ],
  [
    2,
    {
      id: 0,
      title: "My Work",
      Icon: cmd,
      isMinimized: false,
      zIndex: 0,
      program: App.MYWORK,
    },
  ],
  [
    3,
    {
      id: 0,
      title: "My Blog",
      Icon: mycomputer,
      isMinimized: false,
      zIndex: 0,
      program: App.MYBLOG,
    },
  ],
  [
    4,
    {
      id: 0,
      title: "My Documents",
      Icon: folder_plain,
      isMinimized: false,
      zIndex: 0,
      program: App.MYDOCUMENT,
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
    id: 4,
    title: "Audio Visual System BASYS3 FPGA",
    date: "Oct - Nov 2022",
    gitURL: "https://github.com/firwer/EE2026-FPGA-Project",
    techstack: [TechIcon.VERILOG, TechIcon.PYTHON],
    gallery: [
      ee2026_1,
      ee2026_2,
      ee2026_3,
      ee2026_4,
      ee2026_5,
      ee2026_6,
      ee2026_7,
    ],
    overview:
      "For my EE2026 Digital Design Class, our pair built a Audio Visual System inclusive of both individual and teamwork components.\nOur team component consist of an interactive mouse-based drawing tool that includes a canvas, colour palette changer, rectangle drawing tool and brush size selection. For my individual portion, I came up with a P-Mod OLED digital stopwatch timer that have lapping and a whistle start/stop feature powered by Pmod MIC3",
  },
  {
    id: 5,
    title: "SAGE - Java-Based CLI Task Manager",
    date: "Feb 2023",
    gitURL: "https://github.com/firwer/ip",
    techstack: [TechIcon.JAVA],
    gallery: [],
    overview:
      "In my CS2113 Class, our curiculum consist of an individual and team project component.\nFor my individual portion, I created SAGE, A Java-Based CLI developed based on the OOP concepts and SWE code quality principles. SAGE is a CLI that helps users to manage their tasks and deadlines. For our team component, (Not done yet, taking the module now)",
  },
  {
    id: 6,
    title: "CG2111A ",
    date: "Feb 2023",
    gitURL: "https://github.com/firwer/h4g-hackathon",
    techstack: [
      TechIcon.CPP,
      TechIcon.ROS,
      TechIcon.ARDUINO,
      TechIcon.RASPBERRYPI,
    ],
    gallery: [],
    overview:
      "InclusionLab aims to help companies to improve the accessibility of their websites for persons with disabilities. We provide a platform where PWDs can conduct easy & clear accessibility testing and also an automated accessibility testing tool powered by Axe-Core to maximise testing outcome",
  },
  {
    id: 7,
    title: "CG1111A",
    date: "Feb 2023",
    gitURL: "https://github.com/firwer/h4g-hackathon",
    techstack: [TechIcon.CPP],
    gallery: [],
    overview:
      "InclusionLab aims to help companies to improve the accessibility of their websites for persons with disabilities. We provide a platform where PWDs can conduct easy & clear accessibility testing and also an automated accessibility testing tool powered by Axe-Core to maximise testing outcome",
  },
  {
    id: 8,
    title: "EG1311",
    date: "Feb 2023",
    gitURL: "https://github.com/firwer/h4g-hackathon",
    techstack: [TechIcon.CPP, TechIcon.ARDUINO],
    gallery: [],
    overview:
      "InclusionLab aims to help companies to improve the accessibility of their websites for persons with disabilities. We provide a platform where PWDs can conduct easy & clear accessibility testing and also an automated accessibility testing tool powered by Axe-Core to maximise testing outcome",
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
    gallery: [hfg_1, hfg_2, hfg_3, hfg_5, hfg_6, hfg_7],
    overview:
      "InclusionLab aims to help companies to improve the accessibility of their websites for persons with disabilities. We provide a platform where PWDs can conduct easy & clear accessibility testing and also an automated accessibility testing tool powered by Axe-Core to maximise testing outcome",
  },
  {
    id: 10,
    title: "DSTA CodeEXP Hackathon 2022 - My Army Pal",
    date: "Jun 2022",
    gitURL: "https://github.com/firwer/dstahackathon",
    techstack: [TechIcon.FLUTTER, TechIcon.FIREBASE],
    gallery: [dsta_1, dsta_2, dsta_3, dsta_4, dsta_5, dsta_6, dsta_7, dsta_8],
    overview:
      "MyArmyPal serves to be an all in one service for our service men. It seeks to provide convenience and useful features just one tap away. Its main features include an IPPT Calculator, reservist checklist, customized IPPT training plan according to the user's current fitness level and a canteen order pick up service in all army camps.",
  },
] as WorkContent[];

export const WorkAccordionContent = [
  {
    id: 1,
    type: WorkType.PERSONAL,
    icon: cmd,
    title: "My Work",
    content: "MyWork",
  },
  {
    id: 2,
    type: WorkType.PERSONAL,
    icon: cmd,
    title: "My Work",
    content: "MyWork",
  },
  {
    id: 3,
    type: WorkType.PERSONAL,
    icon: cmd,
    title: "My Work",
    content: "MyWork",
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
] as WorkFile[];
