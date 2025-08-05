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
import sliderleft from "../../assets/slider_left.png";
import sliderright from "../../assets/slider_right.png";

interface Props {
  id: number;
}

const MyGallery = ({ id }: Props) => {
  const [currDisplay, setCurrDisplay] = useState<GalleryImage>({
    id: 0,
    title: "",
    desc: "",
    location: "",
    date: "",
    img: pictureicon,
  });

  useEffect(() => {
    setCurrDisplay(PhotoCollection[0]);
  }, []);

  const setDisplay = (id: number) => {
    setCurrDisplay(PhotoCollection[id]);
  };

  const handlePreviousImage = () => {
    if (currDisplay.id === 0) {
      setCurrDisplay(PhotoCollection[PhotoCollection.length - 1]);
      return;
    }
    setCurrDisplay(PhotoCollection[currDisplay.id - 1]);
  };

  const handleNextImage = () => {
    if (currDisplay.id === PhotoCollection.length - 1) {
      setCurrDisplay(PhotoCollection[0]);
      return;
    }
    setCurrDisplay(PhotoCollection[currDisplay.id + 1]);
  };

  return (
    <div className={styles.main}>
      <div className={styles.leftpanel}>
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
            <WinAccordion key={index} title={title}>
              {PhotoCollection.filter((f) => currDisplay.id === f.id).map(
                (e, index) => {
                  return (
                    <div className={styles.image_detail} key={index}>
                      <div style={{ fontWeight: "700" }}>{e.title}</div>
                      <div>{e.desc}</div>
                      <div>
                        <div>Location: {e.location}</div>
                        <div>Date: {e.date}</div>
                      </div>
                    </div>
                  );
                }
              )}
            </WinAccordion>
          ))}
        </div>
      </div>
      <div className={styles.rightpanel}>
        <div className={styles.display_container}>
          <Image
            src={currDisplay.img}
            alt={currDisplay.title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "95%", height: "90%", objectFit: "contain" }}
          />
          <div className={styles.control_container}>
            <div className={styles.control_icon} onClick={handlePreviousImage}>
              <Image src={sliderleft} alt="left control" height={25} />
            </div>
            <div className={styles.control_icon} onClick={handleNextImage}>
              <Image src={sliderright} alt="right control" height={25} />
            </div>
          </div>
        </div>
        <div className={styles.slider_container}>
          <div className={styles.slider}>
            {PhotoCollection.map((e) => (
              <GallerySliderIcon
                key={e.id}
                img={e.img}
                text={e.title}
                showImage={() => setDisplay(e.id)}
                sliderSelected={currDisplay.id === e.id}
              />
            ))}
          </div>
          <Image
            src={pictureshadow}
            alt="Image background shadow"
            width={100}
            height={100}
            style={{
              position: "fixed",
              bottom: -15,
              right: 4,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MyGallery;
