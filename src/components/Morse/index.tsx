import React, { useState } from "react";
import Button from "../Button";
import { delayInSec } from "../../utils";

const Morse = () => {
  const [light, setLight] = useState(false);
  const [value, setValue] = useState("");

  const onBlinkClick = async () => {
    if (!value) return;

    for (let symbol of value.split("")) {
      if (symbol === ".") {
        setLight(true);
        await delayInSec(0.3);
        setLight(false);
        await delayInSec(0.3);
      } else if (symbol === "-") {
        setLight(true);
        await delayInSec(0.8);
        setLight(false);
        await delayInSec(0.3);
      }
    }
  };

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={onBlinkClick}>Проморгать</Button>
      <div
        style={{
          width: "50px",
          height: "50px",
          border: "1px solid black",
          background: light ? "#cccc00" : undefined,
          boxShadow: light ? "0 0 20px #cccc00" : undefined,
        }}
      />
    </div>
  );
};

export default Morse;
