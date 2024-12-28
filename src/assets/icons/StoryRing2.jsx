import * as React from "react";
import Svg, { Circle } from "react-native-svg";
export const StoryRing2 = (props) => (
  <Svg
    width={60}
    height={60}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={30} cy={30} r={29.5} stroke="#C4C4C4" />
  </Svg>
);

