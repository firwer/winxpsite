import { GalleryAccordionTitles, PhotoCollection } from "@/appData";
import { WorkContent, RootState, GalleryImage } from "@/types";
import styles from "./MyGallery.module.css";
import WinAccordion from "components/WinAccordion/WinAccordion";
import Image from "next/image";
import accordionbtnd from "../../assets/workaccordion/accordionbtnd.png";
import pictureicon from "../../assets/workaccordion/pictureicon.png";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import pictureshadow from "../../assets/pictureshadow.png";
import GallerySliderIcon from "components/GallerySliderIcon/GallerySliderIcon";

interface Props {
  id: number;
}

const MyGallery = ({ id }: Props) => {
  const [currDisplay, setCurrDisplay] = useState<GalleryImage>({
    id: 0,
    title: "",
    img: pictureicon,
  });

  const setDisplay = (id: number) => {
    setCurrDisplay(PhotoCollection[id]);
  };
  return (
    <div className={styles.main}>
      <div className={styles.leftpanel}>
        <div>
          <div className={styles.accordion}>
            <div className={styles.accordion_title}>
              <div className={styles.title_group}>
                <Image
                  alt="pictureicon"
                  src={pictureicon.src}
                  height={32}
                  width={32}
                />
                <p className={styles.title_text}>{"Picture Tasks"}</p>
              </div>
              <div>
                <Image
                  alt="accordionbtnd"
                  src={accordionbtnd.src}
                  height={20}
                  width={20}
                />
              </div>
            </div>
            {GalleryAccordionTitles.map((title, index) => (
              <WinAccordion key={index} title={title} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.rightpanel}>
        <div className={styles.display_container}></div>
        <div className={styles.slider_container}>
          <div className={styles.slider}>
            {PhotoCollection.map((e) => (
              <GallerySliderIcon key={e.id} img={e.img} text={e.title} />
            ))}
          </div>
          <Image
            src={pictureshadow}
            alt="Image background shadow"
            width={100}
            height={100}
            style={{ position: "absolute", bottom: 0, right: 0 }}
          />
        </div>
      </div>
    </div>
  );
};

export default MyGallery;
