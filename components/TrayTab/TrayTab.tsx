import styles from "./TrayTab.module.css";
import { StaticImageData } from "next/image";
import Image from "next/image";
interface props {
  title: String;
  Icon: StaticImageData;
  onFocus: () => void;
  isFocused: Boolean;
}

const TrayTab = ({ Icon, title, onFocus, isFocused }: props) => {
  return (
    <div
      onClick={onFocus}
      className={
        isFocused ? styles.tab_container_focused : styles.tab_container
      }
    >
      <Image
        width={20}
        height={20}
        alt="icon"
        className={styles.tab_icon}
        src={Icon.src}
      />
      <div className={styles.tab_text}>{title}</div>
    </div>
  );
};

export default TrayTab;
