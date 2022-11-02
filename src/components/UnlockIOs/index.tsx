import React, { useRef, useState } from "react";
import "./styles.css";

const UnlockIos = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  const [x, setX] = useState(0);
  const [pushed, setPushed] = useState(false);
  const [startX, setStartX] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

  const onMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const currentTargetRect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.pageX - currentTargetRect.left;
    if (event.target === imgRef.current) {
      setStartX(mouseX);
      setPushed(true);
    }
  };

  const onMouseUp = () => {
    setPushed(false);
    setX(0);
  };

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const currentTargetRect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.pageX - currentTargetRect.left;
    const shiftX = mouseX - startX;
    if (pushed && shiftX > 0) setX(shiftX);

    if (x > currentTargetRect.width - (imgRef.current?.width || 0) - 10) {
      setUnlocked(true);
    }
  };

  return unlocked ? (
    <div>Unlocked!</div>
  ) : (
    <div
      className="unlock-wrapper"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <img
        ref={imgRef}
        className="unlock-icon"
        draggable={false}
        alt=""
        src="assets/icons/unlock-icon.png"
        style={{ left: `${x}px` }}
      />

      <span className="unlock-text">Slide to unlock</span>
    </div>
  );
};

export default UnlockIos;
