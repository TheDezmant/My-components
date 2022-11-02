export type LightMode = 0 | 1;

export interface TrafficLightProps {
  rules: {
    lights: [LightMode, LightMode, LightMode];
    time: number;
  }[];
}
