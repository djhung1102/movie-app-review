import {View, Text} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

export default function Slash({
  width = 10,
  height = 10,
  color = '#ffffff',
}: Props) {
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      color={color}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3l8.735 8.735m0 0a.374.374 0 11.53.53m-.53-.53l.53.53m0 0L21 21M14.652 9.348a3.75 3.75 0 010 5.304m2.121-7.425a6.75 6.75 0 010 9.546m2.121-11.667c3.808 3.807 3.808 9.98 0 13.788m-9.546-4.242a3.733 3.733 0 01-1.06-2.122m-1.061 4.243a6.75 6.75 0 01-1.625-6.929m-.496 9.05c-3.068-3.067-3.664-7.67-1.79-11.334M12 12h.008v.008H12V12z"
      />
    </Svg>
  );
}
