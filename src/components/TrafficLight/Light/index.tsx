import React from "react";
import "./styles.css";

const Light = ({
  color,
  on,
}: {
  color: "green" | "yellow" | "red";
  on: boolean;
}) => {
  return <div className={"light-wrapper" + (on ? ` light-${color}` : "")} />;
};

export default Light;
