import React from 'react';
import {Path, Svg} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const Search = ({width = 10, height = 10, color = '#ffffff'}: Props) => {
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
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </Svg>
  );
};

export default Search;
