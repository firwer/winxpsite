import { useState, useEffect, useRef } from "react";
import styles from "./Resizer.module.css";

interface Props {
  children: React.ReactNode;
}

const ResizableComponent = ({ children }: Props) => {
  const [isResizing, setIsResizing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [width, setWidth] = useState(650);
  const [height, setHeight] = useState(750);
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      if (!isResizing) return;
      const dx = event.clientX - startX;
      const dy = event.clientY - startY;
      setWidth((prevWidth) => prevWidth + dx);
      setHeight((prevHeight) => prevHeight + dy);
      setStartX(event.clientX);
      setStartY(event.clientY);
    };
    const handleMouseUp = () => {
      setIsResizing(false);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing, startX, startY]);

  return (
    <div
      ref={ref}
      className={styles.resizable}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        className={styles.handle}
        onMouseDown={(event) => {
          setIsResizing(true);
          setStartX(event.clientX);
          setStartY(event.clientY);
        }}
      ></div>
      {children}
    </div>
  );
};

export default ResizableComponent;
