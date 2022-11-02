import React, { FC } from "react";
import { AvatarProps } from "./types";
import "./style.css";

const Avatar: FC<AvatarProps> = ({ alt, imageUrl }) => {
  return <img className={"m-avatar"} src={imageUrl} alt={alt} />;
};

export default Avatar;
