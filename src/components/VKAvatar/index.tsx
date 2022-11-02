import React, { useState } from "react";
import "./styles.css";
import AvatarPopup from "./Popup";

const POPUP_ITEMS = [
  { id: 1, title: "test1" },
  { id: 2, title: "test2" },
  { id: 3, title: "test3" },
];

const Avatar = ({ src }: { src: string }) => {
  const [displayPopup, setDisplayPopup] = useState(false);

  const showPopup = () => setDisplayPopup(true);
  const hidePopup = () => setDisplayPopup(false);

  return (
    <div
      className="avatar-container"
      onMouseEnter={showPopup}
      onMouseLeave={hidePopup}
    >
      <img src={src} alt="" />
      <AvatarPopup items={POPUP_ITEMS} show={displayPopup} />
    </div>
  );
};

export default Avatar;
