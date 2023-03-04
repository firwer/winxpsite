import styles from "./WelcomeIcon.module.css";
import Image, { StaticImageData } from "next/image";

interface Props {
  img: StaticImageData;
  text: string;
  tooltip: string;
  onClick?: () => void;
}

const WelcomeIcon = ({ img, text, tooltip, onClick }: Props) => {
  return (
    <div onClick={onClick} title={tooltip} className={styles.icon_main}>
      <Image
        className={styles.icon}
        alt=""
        src={img.src}
        height={50}
        width={50}
      />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default WelcomeIcon;
