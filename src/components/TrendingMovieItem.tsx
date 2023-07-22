import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {memo} from 'react';
import {baseImageUrl} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  id: number;
  posterPath: string;
  title: string;
  handleClick: (id: number) => void;
};

var width = Dimensions.get('window').width;

const TrendingMovieItem = ({id, posterPath, handleClick, title}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(id)}>
      <View style={styles.item}>
        <Image
          source={{uri: `${baseImageUrl}/w500${posterPath}`}}
          style={{
            width: width * 0.85,
            aspectRatio: 3 / 2,
            borderRadius: 16,
            objectFit: 'cover',
          }}
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.03)', 'rgba(0,0,0,0.6)']}
          style={styles.gradient}
        />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: 16,
    position: 'relative',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 20,
    width: width * 0.85,
    aspectRatio: 3 / 2,
    borderRadius: 16,
  },
  text: {
    width: width * 0.85 - 16,
    position: 'absolute',
    color: 'white',
    zIndex: 20,
    bottom: 20,
    left: 20,
    fontSize: 24,
    fontWeight: '700',
  },
});

export default memo(TrendingMovieItem);
