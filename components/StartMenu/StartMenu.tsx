import styles from "./StartMenu.module.css";
import userprofile from "../../assets/lift-off.jpg";
import folder from "../../assets/folder_plain.png";
import StartMenuItem from "components/StartMenuItem/StartMenuItem";
import recentdoc from "../../assets/recentdoc.png";
import mycomputer from "../../assets/mycomputer.png";
import folder_image from "../../assets/folder_image.png";
import folder_music from "../../assets/folder_music.png";
const StartMenu = () => {
  return (
    <div className={styles.startmenu}>
      <div className={styles.menutopbar}>
        <img
          src={userprofile.src}
          width={45}
          height={45}
          style={{
            border: "2px",
            borderStyle: "solid",
            borderRadius: "3px",
            borderColor: "rgba(222, 222, 222, 0.8)",
            margin: "0 5px 0 5px",
          }}
        />
        <p
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "white",
            textShadow: "1px 1px #000000",
          }}
        >
          WEI PIN
        </p>
      </div>
      <hr className={styles.orangehr} />
      <div className={styles.menu}>
        <div className={styles.leftmenu}></div>
        <div className={styles.rightmenu}>
          <StartMenuItem title="My Documents" icon={folder} type={3} />
          <StartMenuItem
            title="My Recent Documents"
            icon={recentdoc}
            type={3}
            expanded={true}
          />
          <StartMenuItem title="My Pictures" icon={folder_image} type={3} />
          <StartMenuItem title="My Music" icon={folder_music} type={3} />
          <StartMenuItem title="My Computer" icon={mycomputer} type={3} />
          <hr className={styles.bluehr}/>
        </div>
      </div>
      <div className={styles.menubtmbar}></div>
    </div>
  );
};

export default StartMenu;
