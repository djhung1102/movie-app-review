import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import MovieItem from './MovieItem';
import Right from '../icons/Right';

type Props = {
  title: string;
  data: any;
  hideSeeAll?: boolean;
};

export default function MovieList({title, data, hideSeeAll}: Props) {
  if (!data.length) {
    return null;
  }

  return (
    <View style={styles.containerList}>
      <View style={styles.listTitle}>
        <Text style={styles.textTitle}>{title}</Text>
        {!hideSeeAll ? (
          <TouchableOpacity>
            <Right width={30} height={30} />
          </TouchableOpacity>
        ) : null}
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <MovieItem
            id={item.id}
            poster_path={item.poster_path}
            title={item.title}
          />
        )}
        keyExtractor={(item: {
          title: string;
          poster_path: string;
          id: number;
        }) => String(item.id)}
        horizontal
        contentContainerStyle={{paddingHorizontal: 16}}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerList: {
    marginBottom: 32,
  },
  listTitle: {
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: '600',
  },
  textMore: {
    color: 'gold',
    fontSize: 20,
  },
});
