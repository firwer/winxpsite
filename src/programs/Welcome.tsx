import WelcomeIcon from "components/WelcomeIcon/WelcomeIcon";
import styles from "./Welcome.module.css";
import linkedin from "../../assets/linkedin.png";
import outlook from "../../assets/outlook_large.png";
import gallery from "../../assets/folder_image.png";
import pdf from "../../assets/pdf.png";
import github from "../../assets/github.png";
import cmd from "../../assets/cmd.png";
import users from "../../assets/users.png";
import butterfly from "../../assets/butterfly.png";
import { AppDirectory } from "@/appData";
import store from "@/redux/store";
import { addTab, setBackBtn } from "@/redux/tabSlice";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import userprofile from "../../assets/userprofile.jpg";
import userprofile2 from "../../assets/userprofile2.jpg";
import ebc1 from "../../assets/ebc1.webp";
import ebc2 from "../../assets/ebc2.webp";

const INTRO = `Hi, I'm Wei Pin, an aspiring software engineer and entrepreneur based in Singapore. I am 
  currently a Computer Engineering Fresh Graduate at the National University of Singapore and I am
  passionate about building innovative software solutions that solves problems.`;

const WHYSITE = `I always love challenging myself to creating something different and interesting.
The main reason why I chose to create a website that resembles a Windows XP OS is because my 
software development journey first started back in the early 2010 when I was creating simple utility
apps such as calculators, web browser, message encrypters, phishing app and simple chatbot using 
Visual Basic on Visual Studio 2010 out of curiousity and fun. Now that I have more experience in
software development, I decided to "recreate" the environment I used to work in back then and make
it feel as though you are accessing my computer directly.`;

const INTERESTS = `Other than my interest in developing websites and apps for fun, I love solo
travelling and exploring new places. It is during these times I get to reflect on my own life and
step out of my comfort zone to talk to people within the local community and my hostel where I meet
people from all over the world. Other than that, I am also a firm believer that the best way to 
learn and grow as a person is to immerse yourself in a different culture and environment. This
forces you become adaptable to new situations and learn to be more independent and self-reliant.`;

const INTERESTS2 = `Other than traveling, I love trekking and cycling, and as a challenge to myself, I decided 
to embark on a journey to the Everest Base Camp. After a 130KM, 2504M grueling vertical ascend from 
Tenzing-Hillary Airport, widely regarded as some of the world’s most dangerous airports, I made it 
with a friend of mine and our guide. The entire experience was spectacular as I have also met and struck up 
conversations with trekkers from all walks of life and background, and we all had a common goal 
of reaching the top of the base camp.`;

const INTERESTS3 = `Also, I love (really in love with) drone photography and filming! This is my one true passion, as
the angles I get are much more unique compared to any DSLR/phone camera. The perspectives that
aerial shots offer are so mesmerizing that it makes you feel like a bird (and this fulfills my 
desire to be able to fly lol) (You can view some of collection on this website). Lastly, I love 
to read non-fiction books, especially those that are related to entrepreneurship, biographies, 
and self-help, as those books usually contain a lot of valuable insights and satiate my curiosity 
about the lives of others.
`;

interface props {
  id: number;
}

const Welcome = ({ id }: props) => {
  const currTabID = useSelector((state: RootState) => state.tab.id);
  const backBtnActive = useSelector(
    (state: RootState) =>
      state.tab.tray[state.tab.tray.findIndex((tab) => tab.id === id)]
        .backBtnActive
  );

  const [aboutmeView, setAboutmeView] = useState(false);

  const handleRunApp = (e: number) => {
    const newTab = { ...AppDirectory.get(e), id: uuidv4(), zIndex: currTabID };
    store.dispatch(addTab(newTab));
  };
  const handleSwitchView = () => {
    setAboutmeView(true);
    store.dispatch(setBackBtn({ id: id, backBtnActive: true }));
  };
  useEffect(() => {
    setAboutmeView(backBtnActive);
  }, [backBtnActive]);
  return (
    <div className={styles.main}>
      {!aboutmeView ? (
        <div>
          <h3 className={styles.welcome_text}>
            Welcome To Wei Pin&apos;s Personal Website
          </h3>
          <p className={styles.subtitle}>
            Learn more about me by clicking any of the icons below to get
            started!
          </p>
          <div className={styles.content}>
            <div className={styles.leftpanel}>
              <WelcomeIcon
                img={butterfly}
                text={"About Me"}
                tooltip="Who am I?"
                onClick={handleSwitchView}
              />
              <WelcomeIcon
                img={github}
                text={"My GitHub Profile"}
                tooltip="My Brain Dump"
                onClick={() => {
                  window.open(
                    "https://github.com/firwer",
                    "_blank",
                    "noreferrer"
                  );
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
                img={outlook}
                text={"Send Me An Email"}
                tooltip="Reach out to me!"
                onClick={() => handleRunApp(1)}
              />
              <WelcomeIcon
                img={gallery}
                text={"My Photography Collection"}
                tooltip="Click to view!"
                onClick={() => handleRunApp(4)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className={styles.welcome_text}>About Me</h3>
          <p className={styles.subtitle}></p>
          <div className={styles.content}>
            <div className={styles.pic_col}>
              <Image
                alt="profile_pic"
                src={userprofile.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={userprofile2.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={ebc1.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={ebc2.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
            </div>
            <div className={styles.text_col}>
              <p className={styles.subtitle}>{INTRO}</p>
              <h3 className={styles.subtitle_header}>
                Why a personal website like this?
              </h3>
              <p className={styles.subtitle}>{WHYSITE}</p>
              <h3 className={styles.subtitle_header}>
                What are your interests?
              </h3>
              <p className={styles.subtitle}>{INTERESTS}</p>
              <br></br>
              <p className={styles.subtitle}>{INTERESTS2}</p>
              <br></br>
              <p className={styles.subtitle}>{INTERESTS3}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
