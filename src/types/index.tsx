import { StaticImageData } from "next/image";

export type Tab = {
  id: number;
  title: string;
  Icon: StaticImageData;
  isMinimized: boolean;
  zIndex: number;
  program: App;
};

export type RootState = {
  tab: {
    tray: Tab[];
    id: number;
    currentFocusedTab: number;
    currentZIndex: number;
  };
};

export enum App {
  MYWORK,
  OUTLOOK,
  MYDOCUMENT,
  MYBLOG,
}
