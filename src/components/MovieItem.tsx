import {
  Dimensions,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {memo} from 'react';
import {baseImageUrl} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../type';

type Props = {
  id: number;
  poster_path: string;
  title: string;
};

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const MovieItem = ({id, poster_path, title}: Props) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.push('Movie', {item: id})}>
      <View style={{marginRight: 16}}>
        <Image
          source={{uri: `${baseImageUrl}/w342${poster_path}`}}
          style={{
            width: width * 0.33,
            height: height * 0.22,
            borderRadius: 24,
            objectFit: 'cover',
          }}
        />
        <Text
          numberOfLines={1}
          style={{
            color: 'white',
            marginTop: 8,
            fontWeight: '600',
            fontSize: 16,
            width: width * 0.33,
          }}>
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default memo(MovieItem);
