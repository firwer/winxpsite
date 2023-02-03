import { ReactNode } from "react";
import Draggable from "react-draggable";
import styles from "./WinForm.module.css";
import WinToolBar from "components/WinToolbar/WinToolBar";
const WinForm = (props: {
  title: string;
  width: string;
  children: ReactNode;
}) => {
  return (
    <Draggable bounds="parent">
      <div className={styles.window}>
        <div className={styles.titlebar}>
          <div>
            <div className={styles.icon} />
            <div className={styles.title}>{props.title}</div>
          </div>
          <div className={styles.titlecontrols}>
            <div className={styles.minimise} />
            <div className={styles.maximise} />
            <div className={styles.close} />
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
