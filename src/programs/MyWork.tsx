import WinAccordion from "components/WinAccordion/WinAccordion";
import styles from "./MyWork.module.css";

const MyWork = () => {
  return (
    <div className={styles.main}>
      <div className={styles.leftpanel}>
        <WinAccordion title="LOL">s</WinAccordion>
      </div>
      <div className={styles.rightpanel}></div>
    </div>
  );
};

export default MyWork;
