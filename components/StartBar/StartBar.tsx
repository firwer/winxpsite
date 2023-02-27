import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import styles from "./StartBar.module.css";
import greenshield from "../../assets/green_shield.png";
import internet from "../../assets/internet.png";
import sound from "../../assets/sound.png";
import removabledevice from "../../assets/removabledevice.png";
import StartMenu from "components/StartMenu/StartMenu";
import TrayTab from "components/TrayTab/TrayTab";
import { StaticImageData } from "next/image";
import { RootState, Tab } from "src/types";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import Image from "next/image";
import { maximizeTab, minimizeTab, setFocusedTab } from "@/redux/tabSlice";

const getTime = () => {
  const date = new Date();
  let hour = date.getHours();
  let hourPostFix = "AM";
  let min = date.getMinutes();
  if (hour >= 12) {
    hour -= 12;
    hourPostFix = "PM";
  }
  if (hour === 0) {
    hour = 12;
  }
  if (min < 10) {
    min = 0 + min;
  }
  return `${hour}:${String(min).padStart(2, "0")} ${hourPostFix}`;
};

const StartBar = () => {
  const [time, setTime] = useState(getTime);
  const ref = useRef<HTMLDivElement>(null);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const Tabs = useSelector((state: RootState) => state.tab.tray);
  const currTabID = useSelector(
    (state: RootState) => state.tab.currentFocusedTab
  );
  const currzIndex = useSelector((state: RootState) => state.tab.currentZIndex);

  const handleTabFocus = (tabID: number) => {
    if (currTabID === tabID) {
      store.dispatch(minimizeTab({ id: tabID }));
      store.dispatch(setFocusedTab({ id: -1 }));
      return;
    } else {
      store.dispatch(maximizeTab({ id: tabID }));
      store.dispatch(setFocusedTab({ id: tabID }));
      return;
    }
  };

  const renderTabs = (title: String, Icon: StaticImageData, id: number) => {
    return (
      <TrayTab
        key={id}
        title={title}
        Icon={Icon}
        isFocused={id === currTabID}
        onFocus={() => handleTabFocus(id)}
      />
    );
  };

  const handleOpenStartMenu = () => {
    setStartMenuOpen(!startMenuOpen);
  };

  // Time Update
  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = getTime();
      newTime !== time && setTime(newTime);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  // Start Menu Detection Out of Bound Listener
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setStartMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [ref]);

  return (
    <div style={{ zIndex: currzIndex }}>
      <div className={styles.bluebar}>
        <div ref={ref}>
          <div
            onClick={handleOpenStartMenu}
            className={startMenuOpen ? styles.startbtn_active : styles.startbtn}
          ></div>
          {startMenuOpen && <StartMenu menuControl={setStartMenuOpen} />}
        </div>
        <div className={styles.tabbar}>
          {Tabs.filter((tab) => tab.prompt !== true).map((_item) =>
            renderTabs(_item.title, _item.Icon, _item.id)
          )}
        </div>
        <div className={styles.icontray}>
          <div className={styles.iconrow}>
            <div className={styles.icon}>
              <Image
                width={15}
                style={{ margin: "0px 3px 0px 3px" }}
                height={15}
                src={greenshield.src}
                alt="Icon 1"
              />
              <Image
                width={15}
                style={{ margin: "0px 3px 0px 3px" }}
                height={15}
                src={internet.src}
                alt="Icon 2"
              />
              <Image
                width={15}
                style={{ margin: "0px 3px 0px 3px" }}
                height={15}
                src={sound.src}
                alt="Icon 3"
              />
              <Image
                width={15}
                style={{ margin: "0px 3px 0px 3px" }}
                height={15}
                src={removabledevice.src}
                alt="Icon 4"
              />
            </div>
          </div>
          <div style={{ color: "white" }} className="time-display">
            {time}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartBar;
