import React from "react";
import ChatCard from "./ChatCard";
import "./styles.css";
import { CardProps } from "./ChatCard/types";

const ChatCards = ({ list }: { list: CardProps[] }) => {
  // const list = useSelector(geCards)
  return (
    <div className="chat-cards-container">
      {list.map((card) => (
        <ChatCard key={card.title} {...card} />
      ))}
    </div>
  );
};

export default ChatCards;
