import { StaticImageData } from "next/image";
import styles from "./MsgBox.module.css";
import Image from "next/image";
import { removeTab } from "@/redux/tabSlice";
import store from "@/redux/store";
interface Props {
  id: number;
  message: string;
  icon: StaticImageData;
}

const MsgBox = ({ id, message, icon }: Props) => {
  const handleClose = () => {
    store.dispatch(removeTab({ id: id }));
  };
  return (
    <div className={styles.box}>
      <div className={styles.top}>
        <Image alt="icon" src={icon.src} width={35} height={35} />
        <p className={styles.message}>{message}</p>
      </div>
      <button onClick={handleClose}>OK</button>
    </div>
  );
};

export default MsgBox;
