import React from "react";
import "./styles.css";
import { CardProps } from "./types";
import Avatar from "./Avatar";

const ChatCard = ({ title, lastMsg, avatarUrl }: CardProps) => {
  return (
    <div className="chat-card-container">
      <div className="chat-card-left-side">
        <Avatar url={avatarUrl} />
      </div>
      <div className="chat-card-right-side">
        <div className="chat-card-content">
          <span className={"chat-card-title"}>{title}</span>
          <span className={"chat-card-msg"}>{lastMsg}</span>
        </div>
        <span>...</span>
      </div>
    </div>
  );
};

export default ChatCard;
