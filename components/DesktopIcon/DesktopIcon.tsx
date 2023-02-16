import { StaticImageData } from "next/image";
import { useState, useRef, useEffect, ReactHTMLElement } from "react";
import Draggable from "react-draggable";
import styles from "./DesktopIcon.module.css";

const DesktopIcon = (props: {
  title: string;
  img: StaticImageData;
  appID: number;
  doubleClick: any;
}) => {
  const [selected, setSelected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const HighlightIcon = () => {
    setSelected(!selected);
  };
  const handleClickOutside = (event: { target: any }) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setSelected(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Draggable nodeRef={ref} bounds="parent">
      <div
        style={{ top: props.appID * 90 - 40 }}
        onDoubleClick={props.doubleClick}
        onClick={HighlightIcon}
        className={styles.icon}
        ref={ref}
      >
        <div>
          <div
            className={selected ? styles.iconimage_selected : styles.iconimage}
          >
            <img
              style={{ height: "45px", maxHeight: "45px", maxWidth: "100%" }}
              src={props.img.src}
              alt="icon"
            />
          </div>
        </div>
        <div
          className={selected ? styles.iconlabel_selected : styles.iconlabel}
        >
          <p>{props.title}</p>
        </div>
      </div>
    </Draggable>
  );
};

export default DesktopIcon;
