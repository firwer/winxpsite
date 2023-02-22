import { Children, useState } from "react";
import styles from "./WinAccordion.module.css";
interface props {
  title: string;
  children: React.ReactNode;
}

const WinAccordion = ({ title, children }: props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordion}>
      <div
        className={styles.accordion_title}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className={styles.accordion_content}>{children}</div>}
    </div>
  );
};

export default WinAccordion;
