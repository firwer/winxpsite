import { ReactNode, useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import styles from "./WinForm.module.css";
import WinToolBar from "components/WinToolbar/WinToolBar";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { removeTab } from "@/redux/tabSlice";
import store from "@/redux/store";
const WinForm = (props: {
  id: number;
  title: string;
  width: string;
  children: ReactNode;
  icon: StaticImageData;
  // isMinimized: boolean;
  // isClose: boolean;
}) => {
  const [isMaximized, setMaximised] = useState(false);
  const [isMinimized, setMinimised] = useState(false);
  const [isClose, setClose] = useState(false);
  const [currX, setX] = useState(0);
  const [currY, setY] = useState(0);

  const handleMaximize = () => {
    setMaximised(!isMaximized);
  };
  const handleMinimize = () => {
    setMinimised(!isMinimized);
  };

  const handleClose = () => {
    store.dispatch(removeTab({ id: props.id }));
  };
  const handleStop = (event: any, dragElement: any) => {
    setX(dragElement.x);
    setY(dragElement.y);
  };
  let draggableProps;

  if (isMaximized) {
    draggableProps = {
      position: { x: 0, y: 0 },
      handle: ".handle",
      bounds: "parent",
    };
  } else {
    draggableProps = {
      defaultPosition: { x: currX, y: currY },
      handle: ".handle",
      bounds: "parent",
      onStop: handleStop,
    };
  }
  return (
    <Draggable {...draggableProps}>
      <div
        style={{
          display: isMinimized ? "none" : "inline",
          width: isMaximized ? "100%" : "500px",
          height: isMaximized ? "100%" : "500px",
        }}
        className={styles.window}
      >
        <div className={styles.titlebar}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
            className="handle"
          >
            <Image
              width={20}
              height={20}
              alt="icon"
              src={props.icon.src}
              className={styles.icon}
            />
            <div className={styles.title}>{props.id}</div>
          </div>
          <div className={styles.titlecontrols}>
            <div onClick={handleMinimize} className={styles.minimise} />
            <div
              onClick={handleMaximize}
              className={isMaximized ? styles.resize : styles.maximise}
            />
            <div onClick={handleClose} className={styles.close} />
          </div>
        </div>
        <div className={styles.windowborder}>
          <div className={styles.windowsbody}>
            <WinToolBar />
            {props.children}
          </div>
        </div>
      </div>
    </Draggable>
  );
};
export default WinForm;
