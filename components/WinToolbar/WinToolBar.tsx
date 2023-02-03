import styles from "./WinToolBar.module.css";
const WinToolBar = () => {
  return (
    <div className={styles.topwindowsbar}>
      <div className={styles.toolbar}>
        <p className={styles.toolbaritem}>File</p>
        <p className={styles.toolbaritem}>Edit</p>
        <p className={styles.toolbaritem}>View</p>
        <p className={styles.toolbaritem}>Favourites</p>
        <p className={styles.toolbaritem}>Tools</p>
        <p className={styles.toolbaritem}>Help</p>
      </div>
      <div className={styles.winlogo} />
    </div>
  );
};

export default WinToolBar;
