import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Actor from './Actor';

type Props = {
  data: any;
};

const PopularActors = ({data}: Props) => {
  if (!data.length) {
    return null;
  }

  return (
    <View style={styles.containerTrend}>
      <View>
        <Text style={styles.containerText}>Popular Actors</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Actor id={item.id} profile_path={item.profile_path} />
        )}
        keyExtractor={(item: {id: number; profile_path: string}) =>
          String(item.id)
        }
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 16}}
      />
    </View>
  );
};

export default PopularActors;

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
