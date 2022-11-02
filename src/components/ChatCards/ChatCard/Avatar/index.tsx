import React from "react";

import "./styles.css";

import "./styles.css";

const Avatar = ({ url }: { url: string }) => {
  return (
    <div className="chat-card-avatar">
      <img className="avatar-image" src={url} alt="" />
    </div>
  );
};

export default Avatar;
