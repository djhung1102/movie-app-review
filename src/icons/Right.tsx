import {View, Text} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

export default function Right({
  width = 10,
  height = 10,
  color = '#ffffff',
}: Props) {
  return (
    <Svg
      width={width}
      height={height}
      color={color}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor">
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </Svg>
  );
}
