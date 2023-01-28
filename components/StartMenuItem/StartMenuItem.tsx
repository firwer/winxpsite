import { StaticImageData } from "next/image";
import internal from "stream";
import styles from "./StartMenuItem.module.css";

const renderSwitch = (type: Number) => {};

const StartMenuItem = (props: {
  onClick?: any;
  title: string;
  subtitle?: string;
  icon: StaticImageData;
  type: Number;
  expanded?: boolean;
}) => {
  return props.type === 1 ? ( // Internet & E-Mail
    <div onClick={props.onClick} className={styles.Item}>
      <img src={props.icon.src} className={styles.leftIcon} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p className={styles.TextONE}>{props.title}</p>
        <p className={styles.subtitleONE}>{props.subtitle}</p>
      </div>
    </div>
  ) : props.type === 2 ? ( // Other Left programs
    <div onClick={props.onClick} className={styles.Item}>
      <img src={props.icon.src} className={styles.leftIcon} />
      <p className={styles.TextTWO}>{props.title}</p>
    </div>
  ) : props.type === 3 ? ( // My Computer and etc...
    <div onClick={props.onClick} className={styles.Item}>
      <img src={props.icon.src} className={styles.rightIcon} />
      <p className={styles.TextTHREE}>{props.title}</p>
      {props.expanded ? <div className={styles.menu_arrow} /> : <div></div>}
    </div>
  ) : props.type === 4 ? ( // Control Panel, Help & Support and etc...
    <div onClick={props.onClick} className={styles.Item}>
      <img src={props.icon.src} className={styles.rightIcon} />
      <p className={styles.TextFOUR}>{props.title}</p>
      {props.expanded ? <div></div> : <div></div>}
    </div>
  ) : (
    <div></div>
  );
};

export default StartMenuItem;
