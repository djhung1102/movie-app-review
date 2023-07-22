import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {memo} from 'react';
import {baseImageUrl} from '../../../constants';
import {HomeScreenNavigationProp} from '../../../type';
import {useNavigation} from '@react-navigation/native';

type Props = {
  id: number;
  profile_path: string;
};

var width = Dimensions.get('window').width;

const Actor = ({id, profile_path}: Props) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Person', {personId: id})}>
      <View style={{marginRight: 16}}>
        <Image
          source={{uri: `${baseImageUrl}/w185${profile_path}`}}
          style={styles.imageActor}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  imageActor: {
    width: width * 0.3,
    aspectRatio: 1 / 1,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: 'white',
    objectFit: 'cover',
  },
});

export default memo(Actor);
