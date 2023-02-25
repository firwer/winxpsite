import { Children, Dispatch, SetStateAction, useState } from "react";
import styles from "./WinAccordion.module.css";
import accordionbtn from "../../assets/workaccordion/accordionbtn.png";
import accordionbtnd from "../../assets/workaccordion/accordionbtnd.png";
import Image from "next/image";
import { WorkAccordionContent } from "@/appData";
import { WorkContent, WorkType } from "@/types";
interface props {
  title: WorkType;
  setDisplay: Dispatch<SetStateAction<WorkContent>>;
}

const WinAccordion = ({ title, setDisplay }: props) => {
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
      {isActive && (
        <div className={styles.accordion_content}>
          {WorkAccordionContent.filter((f) => f.type === title).map(
            ({ title, icon, content }, index) => {
              return (
                <div
                  key={index}
                  className={styles.accordion_content_item}
                  onClick={() => setDisplay(content)}
                >
                  <div className={styles.accordion_content_text}>
                    <Image
                      alt="accordionbtn"
                      src={icon.src}
                      height={15}
                      width={15}
                    />
                    <p>{title}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default WinAccordion;
