import styles from "./WinToolBar.module.css";
import Image, { StaticImageData } from "next/image";
import back from "../../assets/toolbar/back.png";
import forward from "../../assets/toolbar/forward.png";
import folder from "../../assets/toolbar/folder.png";
import search from "../../assets/toolbar/search.png";
import arrow_down from "../../assets/toolbar/arrow_down.png";
import folders from "../../assets/toolbar/folders.png";
import go from "../../assets/toolbar/go.png";
import thumbnail from "../../assets/toolbar/thumbnail.png";
import tooldropdown from "../../assets/toolbar/tooldropdown.png";
import { App, RootState } from "@/types";
import store from "@/redux/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setBackBtn } from "@/redux/tabSlice";
interface props {
  title: string;
  icon: StaticImageData;
  programType: App;
  id: number;
}

const WinToolBar = ({ title, icon, programType, id }: props) => {
  const handleBackClick = () => {
    store.dispatch(setBackBtn({ id: id, backBtnActive: false }));
  };
  const backBtnActive = useSelector(
    (state: RootState) =>
      state.tab.tray[state.tab.tray.findIndex((tab) => tab.id === id)]
        .backBtnActive
  );
  return (
    <>
      <div className={styles.topwindowsbar}>
        <div className={styles.toolbar}>
          <p className={styles.toolbaritem}>File</p>
          <p className={styles.toolbaritem}>Edit</p>
          <p className={styles.toolbaritem}>View</p>
          {programType !== App.OUTLOOK ? (
            <div style={{ display: "flex" }}>
              <p className={styles.toolbaritem}>Favourites</p>
              <p className={styles.toolbaritem}>Tools</p>
            </div>
          ) : (
            <div style={{ display: "flex" }}>
              <p className={styles.toolbaritem}>Insert</p>
              <p className={styles.toolbaritem}>Format</p>
              <p className={styles.toolbaritem}>Tools</p>
              <p className={styles.toolbaritem}>Message</p>
            </div>
          )}
          <p className={styles.toolbaritem}>Help</p>
        </div>
        <div className={styles.winlogo} />
      </div>

      {programType !== App.OUTLOOK && (
        <div>
          <div className={styles.toolbar_icon}>
            <div
              className={
                backBtnActive ? styles.back_enabled : styles.back_disabled
              }
              onClick={handleBackClick}
            >
              <Image alt="back" width={25} height={25} src={back.src} />
              <p style={{ margin: "0 5px" }}>Back</p>
              <hr className={styles.button_line} />
              <Image
                style={{ margin: "0 4px" }}
                alt="arrow_down"
                width={6}
                height={6}
                src={arrow_down.src}
              />
            </div>
            <div className={styles.forward}>
              <Image
                style={{ margin: "0 6px" }}
                alt="forward"
                width={25}
                height={25}
                src={forward.src}
              />
              <Image
                style={{ margin: "0 4px" }}
                alt="arrow_down"
                width={6}
                height={6}
                src={arrow_down.src}
              />
            </div>
            <Image
              alt="folder"
              style={{ margin: "0 5px" }}
              width={25}
              height={25}
              src={folder.src}
            />
            <div className={styles.vertical_line} />
            <div className={styles.search}>
              <Image
                style={{ margin: "0 6px" }}
                alt="search"
                width={25}
                height={25}
                src={search.src}
              />
              <p>Search</p>
            </div>
            <div className={styles.folders}>
              <Image
                style={{ margin: "0 6px" }}
                alt="folders"
                width={25}
                height={25}
                src={folders.src}
              />
              <p>Folders</p>
            </div>
            <div className={styles.vertical_line} />
            <Image
              style={{ margin: "0 6px" }}
              alt="thumbnail"
              width={25}
              height={25}
              src={thumbnail.src}
            />
            <Image alt="arrow_down" width={6} height={6} src={arrow_down.src} />
          </div>
          <div className={styles.bottomwindowsbar}>
            <div className={styles.go}>
              <p style={{ color: "#7f7c73", fontSize: "11px", width: "55px" }}>
                Address
              </p>
              <div className={styles.addressbar}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Image
                    style={{ margin: "0px 3px" }}
                    alt="icon"
                    width={18}
                    height={18}
                    src={icon.src}
                  ></Image>
                  {title}
                </div>
                <Image
                  alt="dropdown"
                  className={styles.dropdownIcon}
                  width={16}
                  height={18}
                  src={tooldropdown.src}
                ></Image>
              </div>
              <Image
                alt="go"
                className={styles.goIcon}
                width={20}
                height={20}
                src={go.src}
              ></Image>
              <p>Go</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WinToolBar;
