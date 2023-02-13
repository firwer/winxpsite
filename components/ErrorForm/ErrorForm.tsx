import { useRef } from "react";
import Draggable from "react-draggable";
import errorIcon from "../../assets/error.png";
const ErrorForm = (props: { title: string; width: string; body: String }) => {
  const nodeRef = useRef(null);
  return (
    <Draggable ref={nodeRef} bounds="parent">
      <div
        className="window"
        style={{ width: props.width + "px", zIndex: "1" }}
        ref={nodeRef}
      >
        <div className="title-bar">
          <div className="title-bar-text">{props.title}</div>
          <div className="title-bar-controls">
            <button aria-label="Close"></button>
          </div>
        </div>
        <div
          style={{
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="window-body"
        >
          <img src={errorIcon.src} />
          {props.body}
        </div>
      </div>
    </Draggable>
  );
};
export default ErrorForm;
