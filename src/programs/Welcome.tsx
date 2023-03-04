import WelcomeIcon from "components/WelcomeIcon/WelcomeIcon";
import styles from "./Welcome.module.css";
import linkedin from "../../assets/linkedin.png";
import outlook from "../../assets/outlook_large.png";
import pdf from "../../assets/pdf.png";
import github from "../../assets/github.png";
import cmd from "../../assets/cmd.png";
import users from "../../assets/users.png";
import butterfly from "../../assets/butterfly.png";
import { AppDirectory } from "@/appData";
import store from "@/redux/store";
import { addTab } from "@/redux/tabSlice";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "@/types";

const Welcome = () => {
  const currTabID = useSelector((state: RootState) => state.tab.id);
  const handleRunApp = (e: number) => {
    const newTab = { ...AppDirectory.get(e), id: uuidv4(), zIndex: currTabID };
    store.dispatch(addTab(newTab));
  };
  return (
    <div className={styles.main}>
      <h3 className={styles.welcome_text}>Welcome To My Personal Website</h3>
      <p className={styles.subtitle}>
        Learn more about me by clicking any of the icons below to get started!
      </p>
      <div className={styles.content}>
        <div className={styles.leftpanel}>
          <WelcomeIcon img={butterfly} text={"About Me"} tooltip="Who am I?" />
          <WelcomeIcon
            img={github}
            text={"My GitHub Profile"}
            tooltip="My Brain Dump"
            onClick={() => {
              window.open("https://github.com/firwer", "_blank", "noreferrer");
            }}
          />
          <WelcomeIcon
            img={linkedin}
            text={"My Linkedin"}
            tooltip="Connect with me!"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/poh-wei-pin-7b9061183/",
                "_blank",
                "noreferrer"
              );
            }}
          />
          <WelcomeIcon
            img={pdf}
            text={"My Resume"}
            tooltip="My Curriculum Vitae"
            onClick={() => {
              window.open("./Resume.pdf");
            }}
          />
        </div>
        <div className={styles.rightpanel}>
          <WelcomeIcon
            img={cmd}
            text={"My Work"}
            tooltip="Interesting projects I have done"
            onClick={() => handleRunApp(2)}
          />
          <WelcomeIcon
            img={users}
            text={"My Blog"}
            tooltip="My personal thoughts and experiences"
          />
          <WelcomeIcon
            img={outlook}
            text={"Send Me An Email"}
            tooltip="Reach out to me!"
            onClick={() => handleRunApp(1)}
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
