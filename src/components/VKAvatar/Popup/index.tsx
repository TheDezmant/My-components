import React from "react";
import "./styles.css";

const AvatarPopup = ({
  items,
  show,
}: {
  items: { id: number; title: string }[];
  show: boolean;
}) => {
  return (
    <ul className={`popup-container ${show && "popup-display"}`}>
      {items.map((item) => (
        <li key={item.id} className="popup-item">
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default AvatarPopup;
