import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useCallback} from 'react';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../type';
import {baseImageUrl} from '../../constants';
import TrendingMovieItem from './TrendingMovieItem';

type Props = {
  data: any;
};

export default function TrendingMovies({data}: Props) {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const handleClick = (item: number) => {
    navigation.navigate('Movie', {item});
  };

  if (!data.length) {
    return null;
  }

  return (
    <View style={styles.containerTrend}>
      <Text style={styles.containerText}>Trending</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TrendingMovieItem
            id={item.id}
            posterPath={item.poster_path}
            title={item.title}
            handleClick={handleClick}
          />
        )}
        keyExtractor={(item: {
          title: string;
          poster_path: string;
          id: number;
        }) => String(item.id)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 16}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerTrend: {
    marginBottom: 32,
  },
  containerText: {
    color: 'white',
    fontSize: 28,
    fontWeight: '600',
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 16,
  },
});
