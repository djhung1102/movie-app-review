import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';

var {width, height} = Dimensions.get('window');

export default function Loading() {
  return (
    <View style={styles.containerLoading}>
      <Progress.Bar progress={0.3} width={200} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerLoading: {
    width: width,
    height: height,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
