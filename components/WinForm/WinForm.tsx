import Draggable from "react-draggable";

const WinForm = (props: { title: string; width: string; body: string }) => {
  return (
    <Draggable bounds="parent">
      <div
        className="window"
        style={{ width: props.width + "px", zIndex: "1" }}
      >
        <div className="title-bar">
          <div className="title-bar-text">{props.title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <progress max="100" value="30"></progress>
          <p>{props.body}</p>
        </div>
      </div>
    </Draggable>
  );
};
export default WinForm;
