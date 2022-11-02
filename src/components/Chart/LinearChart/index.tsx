import { ResponsiveLine, LineSvgProps } from "@nivo/line";
import React from "react";

export default ({ data }: LineSvgProps) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{ type: "linear" }}
  />
);
