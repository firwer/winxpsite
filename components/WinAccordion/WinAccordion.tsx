import React, { Children, Dispatch, SetStateAction, useState } from "react";
import styles from "./WinAccordion.module.css";
import accordionbtn from "../../assets/workaccordion/accordionbtn.png";
import accordionbtnd from "../../assets/workaccordion/accordionbtnd.png";
import Image from "next/image";
import { WorkAccordionContent } from "@/appData";
import { WorkContent, WorkType } from "@/types";
interface props {
  title: WorkType | string;
  children: React.ReactNode;
}

const WinAccordion = ({ title, children }: props) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className={styles.accordion}>
      <div
        className={styles.accordion_title}
        onClick={() => setIsActive(!isActive)}
      >
        <p className={styles.title_text}>{title}</p>
        <div>
          {isActive ? (
            <Image
              alt="accordionbtn"
              src={accordionbtn.src}
              height={20}
              width={20}
            />
          ) : (
            <Image
              alt="accordionbtnd"
              src={accordionbtnd.src}
              height={20}
              width={20}
            />
          )}
        </div>
      </div>
      {isActive && <div className={styles.accordion_content}>{children}</div>}
    </div>
  );
};

export default WinAccordion;
