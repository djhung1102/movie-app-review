import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../type';
import {baseImageUrl} from '../../constants';

type Props = {
  cast: any;
  navigation: NavigationProp<HomeScreenNavigationProp>;
};

export default function Cast({cast, navigation}: Props) {
  return (
    <View style={styles.containerCast}>
      <Text style={styles.titleCast}>Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {cast &&
          cast.map(
            (
              item: {id: number; profile_path: string; original_name: string},
              index: number,
            ) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    marginRight: 16,
                    alignItems: 'center',
                  }}
                  onPress={() =>
                    navigation.navigate('Person', {personId: item.id})
                  }>
                  <Image
                    source={{uri: `${baseImageUrl}/w185${item.profile_path}`}}
                    style={{
                      borderWidth: 1,
                      borderColor: 'white',
                      borderRadius: 9999,
                      width: 120,
                      height: 120,
                      objectFit: 'cover',
                    }}
                  />
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 14,
                      marginTop: 8,
                      width: 120,
                      textAlign: 'center',
                    }}>
                    {item.original_name}
                  </Text>
                </TouchableOpacity>
              );
            },
          )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCast: {
    marginTop: 24,
    marginBottom: 24,
  },
  titleCast: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 20,
  },
});
