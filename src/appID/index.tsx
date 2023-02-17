import { Tab } from "src/types";
import cmd from "../../assets/cmd.png";
import mycomputer from "../../assets/mycomputer.png";
import folder_plain from "../../assets/folder_plain.png";
import MyWork from "@/programs/MyWork";
import outlook from "../../assets/outlook.png";
import Outlook from "@/programs/Outlook";
export const AppDirectory: Map<number, Tab> = new Map([
  [
    1,
    {
      id: 0,
      title: "Outlook Express",
      Icon: outlook,
    },
  ],
  [6, { id: 1, title: "My Work", Icon: cmd}],
  [2, { id: 2, title: "My Computer", Icon: mycomputer}],
  [
    3,
    {
      id: 3,
      title: "My Documents",
      Icon: folder_plain,
    },
  ],
]);
