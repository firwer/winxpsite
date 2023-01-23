import styles from "./StartBar.module.css";

const StartBar = () => {
  return (
    <div className={styles.bluebar}>
      <div style={{ outline: "none" }} className={styles.startbtn}></div>
      <div className="tabbar"></div>
      <div className="icontray"></div>
    </div>
  );
};

export default StartBar;
