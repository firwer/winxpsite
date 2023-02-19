import { App, Tab } from "src/types";
import cmd from "../../assets/cmd.png";
import mycomputer from "../../assets/mycomputer.png";
import folder_plain from "../../assets/folder_plain.png";
import MyWork from "@/programs/MyWork";
import outlook from "../../assets/outlook.png";
import Outlook from "@/programs/Outlook";
export const AppDirectory: Map<number, Tab> = new Map([
  [1, { id: 0, title: "Outlook Express", Icon: outlook, isMinimized: false, zIndex: 0, program: App.OUTLOOK }],
  [2, { id: 0, title: "My Work", Icon: cmd, isMinimized: false, zIndex: 0, program: App.MYWORK }],
  [3, { id: 0, title: "My Blog", Icon: mycomputer, isMinimized: false, zIndex: 0, program: App.MYBLOG}],
  [4, { id: 0, title: "My Documents", Icon: folder_plain, isMinimized: false, zIndex: 0, program: App.MYDOCUMENT}],
]);
