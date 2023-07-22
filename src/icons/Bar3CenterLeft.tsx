import React from 'react';
import {Path, Svg} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const Bar3CenterLeft = ({
  width = 10,
  height = 10,
  color = '#ffffff',
}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      fill="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      color={color}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
      />
    </Svg>
  );
};

export default Bar3CenterLeft;
