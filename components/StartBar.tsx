import { useEffect, useState } from "react";
import styles from "./StartBar.module.css";
import greenshield from "../assets/green_shield.png";
import internet from "../assets/internet.png";
import sound from "../assets/sound.png";
import removabledevice from "../assets/removabledevice.png";

const StartBar = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  );
  useEffect(() => {
    setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    }, 60000);
  }, []);

  return (
    <div className={styles.bluebar}>
      <div style={{ display: "flex" }}>
        <div className={styles.startbtn}></div>
        <div className={styles.tabbar}></div>
      </div>
      <div className={styles.icontray}>
        <div className={styles.iconrow}>
          <div className={styles.icon}>
            <img
              style={{ margin: "0px 3px 0px 3px" }}
              height={15}
              src={greenshield.src}
              alt="Icon 1"
            />
            <img
              style={{ margin: "0px 3px 0px 3px" }}
              height={15}
              src={internet.src}
              alt="Icon 2"
            />
            <img
              style={{ margin: "0px 3px 0px 3px" }}
              height={15}
              src={sound.src}
              alt="Icon 3"
            />
            <img
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
  );
};

export default StartBar;
