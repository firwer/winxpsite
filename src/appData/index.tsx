import { App, Tab, WorkContent, WorkFile, WorkType } from "src/types";
import cmd from "../../assets/cmd.png";
import mycomputer from "../../assets/mycomputer.png";
import folder_plain from "../../assets/folder_plain.png";
import MyWork from "@/programs/MyWork";
import outlook from "../../assets/outlook.png";
import Outlook from "@/programs/Outlook";
import dsta from "../../assets/workaccordion/dsta.png";
import gdsc from "../../assets/workaccordion/gdsc.png";
import file from "../../assets/workaccordion/file.png";
import nodejs from "../../assets/techstack/nodejs.svg";
import next from "../../assets/techstack/next.svg";
import gcloudfunc from "../../assets/techstack/google-cloud-functions.svg";
import firebase from "../../assets/techstack/firebase.svg";
import typescript from "../../assets/techstack/typescript.svg";
import figma from "../../assets/techstack/figma.svg";
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
  WorkType.PERSONAL,
  WorkType.SCHOOL,
  WorkType.HACKATHON,
];

export const WorkData = [
  {
    id: 9,
    title:
      "GDSC Hack4Good 2023 - InclusionLab Real Web Accessibility Testing Platform",
    date: "Feb 2023",
    gitURL: "https://github.com/firwer/h4g-hackathon",
    techstack: [nodejs, next, gcloudfunc, firebase, typescript, figma],
    objective:
      "InclusionLab aims to help companies to improve the accessibility of their websites for persons with disabilities. We provide a platform where PWDs can conduct easy & clear accessibility testing and also an automated accessibility testing tool powered by Axe-Core to maximise testing outcome",
    description: "Blah blah here i will talk more about the project",
    challenges: "Setting up API",
  },
  {
    id: 10,
    title: "My Work",
    date: "2021",
    gitURL: "",
    techstack: [cmd],
    objective: "To create a portfolio website to showcase my projects",
    description: "This website is built using Next.js and TailwindCSS",
    challenges: "I had to learn Next.js and TailwindCSS",
  },
] as WorkContent[];

export const WorkAccordionContent = [
  // {
  //   id: 1,
  //   type: WorkType.PERSONAL,
  //   icon: cmd,
  //   title: "My Work",
  //   content: "MyWork",
  // },
  // {
  //   id: 2,
  //   type: WorkType.PERSONAL,
  //   icon: cmd,
  //   title: "My Work",
  //   content: "MyWork",
  // },
  // {
  //   id: 3,
  //   type: WorkType.PERSONAL,
  //   icon: cmd,
  //   title: "My Work",
  //   content: "MyWork",
  // },
  // {
  //   id: 4,
  //   type: WorkType.SCHOOL,
  //   icon: file,
  //   title: "EE2026 Digital Systems Design",
  //   content: "What I did in this module",
  // },
  // {
  //   id: 5,
  //   type: WorkType.SCHOOL,
  //   icon: file,
  //   title: "CS2113 - Software Engineering & OOP",
  //   content: "",
  // },
  // {
  //   id: 6,
  //   type: WorkType.SCHOOL,
  //   icon: file,
  //   title: "CG2111A Engineering Principles II",
  //   content: "MyWork",
  // },
  // {
  //   id: 7,
  //   type: WorkType.SCHOOL,
  //   icon: file,
  //   title: "CG1111A Engineering Principles I",
  //   content: "MyWork",
  // },
  // {
  //   id: 8,
  //   type: WorkType.SCHOOL,
  //   icon: file,
  //   title: "EG1311 Design and Make",
  //   content: "",
  // },
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
