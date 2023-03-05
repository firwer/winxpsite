import { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "./Carousel.module.css";
import Spinner from "components/Spinner/Spinner";
interface Props {
  images: StaticImageData[];
}

const Carousel = ({ images }: Props) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handlePrevClick = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage((prev) => prev - 1);
    }
  };
  const handleNextClick = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage((prev) => prev + 1);
    }
  };
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className={styles.carousel}>
      {isLoading && <Spinner />}
      <div className={styles.imageContainer}>
        <Image
          src={images[currentImage]}
          alt="carousel"
          onLoadingComplete={handleLoadingComplete}
        />
      </div>
      <div className={styles.controls}>
        <div
          className={styles.controlButton}
          onClick={handlePrevClick}
          aria-label="Previous Image"
        >
          &#10094;
        </div>
        <div
          className={styles.controlButton}
          onClick={handleNextClick}
          aria-label="Next Image"
        >
          &#10095;
        </div>
      </div>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              currentImage === index ? styles.active : ""
            }`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
