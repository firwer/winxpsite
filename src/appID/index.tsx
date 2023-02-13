import { Tab } from "src/types";
import cmd from "../../assets/cmd.png";
import mycomputer from "../../assets/mycomputer.png";
export const AppDirectory: Map<number, Tab> = new Map([
  [6, { title: "My Work", Icon: cmd }],
  [2, { title: "My Computer", Icon: mycomputer }],
  [3, { title: "My Documents", Icon: cmd }],
]);
