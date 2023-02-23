import { TechIcon, WorkAccordionTitles } from "@/appData";
import { WorkContent } from "@/types";
import WinAccordion from "components/WinAccordion/WinAccordion";
import { useState } from "react";
import styles from "./MyWork.module.css";
import Image from "next/image";
import github from "../../assets/github.png";
import github_w from "../../assets/github_w.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "components/Carousel/Carousel";
const MyWork = () => {
  const [currDisplay, setCurrDisplay] = useState<WorkContent>({
    id: 0,
    title: "",
    date: "",
    gitURL: "",
    gallery: [],
    techstack: [],
    overview: "",
  });
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 5,
  };
  const [gitIcon, setgitIcon] = useState(github_w);
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
        {currDisplay.title === "" ? (
          <div className={styles.body}>
            <h4>Welcome To My Portfolio Section</h4>
            <h5>
              Begin Navigation by clicking on one of my projects on the left
              panel
            </h5>
            <h5>These are some of the tech stacks I have experiences with!</h5>
            <div className={styles.content_tech}>
              {Object.values(TechIcon).map((badge) => (
                <div key={badge} className={styles.tech_badge}>
                  <Image
                    style={{ width: "100%", borderRadius: "20px" }}
                    alt="tech"
                    src={badge}
                    width={50}
                    height={35}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.header}>
              <h4>{currDisplay.title}</h4>
            </div>
            {currDisplay.gallery.length === 0 ? (
              <></>
            ) : (
              <div className={styles.body}>
                <h4>Project Gallery</h4>
                <Carousel images={currDisplay.gallery} />
              </div>
            )}
            <div className={styles.body}>
              <h4>Overview:</h4>
              <p>{currDisplay.overview}</p>
              <div
                onMouseEnter={() => setgitIcon(github)}
                onMouseLeave={() => setgitIcon(github_w)}
                onClick={() =>
                  window.open(currDisplay.gitURL, "_blank", "noreferrer")
                }
                className={styles.github_button}
              >
                View On GitHub
                <Image
                  className={styles.github_icon}
                  alt="git"
                  src={gitIcon.src}
                  height={50}
                  width={50}
                />
              </div>
            </div>
            <div className={styles.body}>
              <h4>Techstack Used</h4>
              <div className={styles.content_tech}>
                {currDisplay.techstack.map((tech) => (
                  <div key={tech} className={styles.tech_badge}>
                    <Image
                      style={{ width: "100%", borderRadius: "20px" }}
                      alt="tech"
                      src={tech}
                      width={50}
                      height={40}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWork;
