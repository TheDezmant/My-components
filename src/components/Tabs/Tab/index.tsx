import React from "react";
import "./styles.css";

const Tab = ({ component }: { title: string; component: JSX.Element }) => {
  return <div className="tab-container">{component}</div>;
};

export default Tab;
