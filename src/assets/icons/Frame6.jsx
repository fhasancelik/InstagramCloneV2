import * as React from "react";
import Svg, { Rect, Circle, Path, Line } from "react-native-svg";
export const Frame6 = (props) => (
  <Svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={14} height={14} fill="#EFEFEF" />
    <Circle cx={9} cy={4} r={1.85} stroke="black" strokeWidth={1.3} />
    <Path
      d="M13 12V11C13 9.34315 11.6569 8 10 8H8C6.34315 8 5 9.34315 5 11V12"
      stroke="black"
      strokeWidth={1.3}
    />
    <Line
      x1={3.52494}
      y1={4.65}
      x2={3.52494}
      y2={8.35}
      stroke="black"
      strokeWidth={1.3}
      strokeLinecap="round"
    />
    <Line
      x1={1.65}
      y1={6.44998}
      x2={5.35}
      y2={6.44998}
      stroke="black"
      strokeWidth={1.3}
      strokeLinecap="round"
    />
  </Svg>
);

