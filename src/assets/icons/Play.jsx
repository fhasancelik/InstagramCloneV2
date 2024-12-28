import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
export const Play = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.24 14.3268C15.5867 14.5334 15.5867 15.0499 15.24 15.2565L9.78 18.5106C9.43333 18.7172 9 18.459 9 18.0457L9 11.5376C9 11.1244 9.43333 10.8661 9.78 11.0727L15.24 14.3268Z"
      fill="#C4C4C4"
    />
    <Path d="M6 2L10 8" stroke="#C4C4C4" strokeWidth={1.8} />
    <Path d="M13 2L17 8" stroke="#C4C4C4" strokeWidth={1.8} />
    <Rect
      x={1.9}
      y={1.9}
      width={20.2}
      height={20.2}
      rx={5.1}
      stroke="#C4C4C4"
      strokeWidth={1.8}
    />
    <Path d="M2 8H22" stroke="#C4C4C4" strokeWidth={1.8} />
  </Svg>
);

