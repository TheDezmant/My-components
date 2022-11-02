import React, { useEffect, useState } from "react";
import "./styles.css";
import Light from "./Light";
import { LightMode, TrafficLightProps } from "./types";
import { delayInSec } from "../../utils";

const TrafficLight = ({ rules }: TrafficLightProps) => {
  const [[redOn, yellowOn, greenOn], setLightsOn] = useState<LightMode[]>([]);

  useEffect(() => {
    (async () => {
      while (true) {
        for (const rule of rules) {
          setLightsOn(rule.lights);
          await delayInSec(rule.time);
        }
      }
    })();
  }, []);

  return (
    <div className="tr-wrapper">
      <Light on={!!redOn} color="red" />
      <Light on={!!yellowOn} color="yellow" />
      <Light on={!!greenOn} color="green" />
    </div>
  );
};

export default TrafficLight;
