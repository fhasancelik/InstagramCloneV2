import * as React from "react";
import Svg, { Circle } from "react-native-svg";
export const Options = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={6.5} cy={11.5} r={1.5} fill="black" />
    <Circle cx={12} cy={11.5} r={1.5} fill="black" />
    <Circle cx={17.5} cy={11.5} r={1.5} fill="black" />
  </Svg>
);

