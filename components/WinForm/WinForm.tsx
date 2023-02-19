import { ReactNode, useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import styles from "./WinForm.module.css";
import WinToolBar from "components/WinToolbar/WinToolBar";
import { StaticImageData } from "next/image";
import Image from "next/image";
import {
  maximizeTab,
  minimizeTab,
  removeTab,
  setFocusedTab,
} from "@/redux/tabSlice";
import store from "@/redux/store";
import { useSelector } from "react-redux";
import { RootState } from "@/types";

const unfocusedAdjustment = "brightness(1.05)";
const WinForm = (props: {
  id: number;
  title: string;
  width: string;
  children: ReactNode;
  icon: StaticImageData;
  zIndex: number;
}) => {
  const [isMaximized, setMaximised] = useState(false);
  const [isMinimized, setMinimised] = useState(false);
  const [currX, setX] = useState(0);
  const [currY, setY] = useState(0);
  const currTabID = useSelector(
    (state: RootState) => state.tab.currentFocusedTab
  );

  const handleMaximize = () => {
    setMaximised(!isMaximized);
    store.dispatch(maximizeTab({ id: props.id }));
    store.dispatch(setFocusedTab({ id: props.id }));
  };
  const handleMinimize = () => {
    setMinimised(!isMinimized);
    store.dispatch(minimizeTab({ id: props.id }));
    store.dispatch(setFocusedTab({ id: -1 }));
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
          position: "absolute",
          display: isMinimized ? "none" : "inline",
          width: isMaximized ? "100%" : "600px",
          height: isMaximized ? "100%" : "500px",
          zIndex: props.zIndex,
        }}
        className={styles.window}
      >
        <div
          onMouseDown={() => {
            store.dispatch(setFocusedTab({ id: props.id }));
          }}
          className={
            currTabID == props.id ? styles.titlebar : styles.titlebar_unfocused
          }
        >
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
            <div className={styles.title}>{props.title}</div>
          </div>
          <div className={styles.titlecontrols}>
            <div
              onClick={handleMinimize}
              style={{
                filter: currTabID == props.id ? "" : unfocusedAdjustment,
              }}
              className={styles.minimise}
            />
            <div
              onClick={handleMaximize}
              style={{
                filter: currTabID == props.id ? "" : unfocusedAdjustment,
              }}
              className={isMaximized ? styles.resize : styles.maximise}
            />
            <div
              onClick={handleClose}
              style={{
                filter: currTabID == props.id ? "" : unfocusedAdjustment,
              }}
              className={styles.close}
            />
          </div>
        </div>
        <div
          onMouseDown={() => {
            store.dispatch(setFocusedTab({ id: props.id }));
          }}
          className={
            currTabID == props.id
              ? styles.windowborder
              : styles.windowborder_unfocused
          }
        >
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
