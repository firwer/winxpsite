import { StaticImageData } from "next/image";

export type Tab = {
  id: number;
  title: string;
  Icon: StaticImageData;
  isMinimized: boolean;
};

export type RootState = {
  tab: {
    tray: Tab[];
    id: number;
    currentFocusedTab: number;
  };
};
