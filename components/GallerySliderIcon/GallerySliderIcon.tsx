import { useEffect, useRef, useState } from "react";
import styles from "./GallerySliderIcon.module.css";
import Image, { StaticImageData } from "next/image";

interface Props {
  img: StaticImageData;
  text: string;
  showImage: () => void;
  sliderSelected: boolean;
}

// Function: To be used in my photography section slider container

const GallerySliderIcon = ({ img, text, showImage, sliderSelected }: Props) => {
  const [selected, setSelected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelected(sliderSelected);
  }, [sliderSelected]);

  const handleClick = () => {
    HighlightIcon();
    showImage();
  };

  const HighlightIcon = () => {
    setSelected(!selected);
  };

  const handleClickOutside = (event: { target: any }) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setSelected(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      onClick={handleClick}
      className={selected ? styles.icon_selected : styles.icon}
      ref={ref}
    >
      <Image width={75} height={75} src={img.src} alt="icon" />
      <div className={selected ? styles.iconlabel_selected : styles.iconlabel}>
        {text}
      </div>
    </div>
  );
};

export default GallerySliderIcon;
