import { WorkAccordionTitles } from "@/appData";
import { WorkContent } from "@/types";
import WinAccordion from "components/WinAccordion/WinAccordion";
import { useState } from "react";
import styles from "./MyWork.module.css";
import Image from "next/image";
import github from "../../assets/github.png";

const MyWork = () => {
  const [currDisplay, setCurrDisplay] = useState<WorkContent>({
    id: 0,
    title: "",
    date: "",
    gitURL: "",
    techstack: [],
    objective: "",
    description: "",
    challenges: "",
  });
  return (
    <div className={styles.main}>
      <div className={styles.leftpanel}>
        <div>
          <div className={styles.accordion}>
            {WorkAccordionTitles.map((title) => (
              <WinAccordion title={title} setDisplay={setCurrDisplay} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.rightpanel}>
        <h3>{currDisplay.title}</h3>
        <Image
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open(currDisplay.gitURL, "_blank", "noreferrer")
          }
          alt="git"
          src={github.src}
          height={50}
          width={50}
        />
        <div className={styles.content_tech}>
          {currDisplay.techstack.map((tech) => (
            <Image alt="tech" src={tech.src} height={40} width={40} />
          ))}
        </div>
        <p>{currDisplay.objective}</p>
        <p>{currDisplay.description}</p>
        <p>{currDisplay.challenges}</p>
      </div>
    </div>
  );
};

export default MyWork;
