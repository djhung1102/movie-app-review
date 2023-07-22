import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Back from '../icons/Back';
import Heart from '../icons/Heart';
import {useNavigation, useRoute} from '@react-navigation/native';
import {fetchPersonDetails} from '../../api/moviedb';
import {HomeScreenNavigationProp} from '../../type';
import {baseImageUrl} from '../../constants';

type typeMovieProps = {
  profile_path: string;
  name: string;
  biography: string;
};

var {width, height} = Dimensions.get('window');

export default function PersonScreen() {
  const {params} = useRoute<HomeScreenNavigationProp>();
  const navigation = useNavigation();
  const [person, setPerson] = useState<typeMovieProps>();

  useEffect(() => {
    getPersonDetails(params.personId);
  }, [params]);

  const getPersonDetails = async (id: number) => {
    const data = await fetchPersonDetails(id);
    if (data) setPerson(data);
  };

  return (
    <ScrollView
      style={styles.containerPerson}
      contentContainerStyle={{paddingBottom: 20}}>
      <SafeAreaView style={styles.headerMovie}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <Back width={28} height={28} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Heart width={35} height={35} />
        </TouchableOpacity>
      </SafeAreaView>

      <View>
        <View style={styles.person}>
          <View>
            <Image
              source={{uri: `${baseImageUrl}/w500${person?.profile_path}`}}
              style={styles.personImage}
            />
          </View>
          <View>
            <Text style={styles.titlePerson}>{person?.name}</Text>
          </View>
        </View>

        <View style={{marginTop: 32, marginLeft: 16, marginRight: 16}}>
          <Text style={styles.description}>{person?.biography}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerPerson: {
    flex: 1,
    backgroundColor: '#2C2E3A',
  },
  headerMovie: {
    zIndex: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: Platform.OS === 'ios' ? 0 : 12,
  },
  back: {
    padding: 4,
    borderRadius: 16,
    backgroundColor: 'gold',
  },
  person: {
    display: 'flex',
    alignItems: 'center',
    gap: 18,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  personImage: {
    alignItems: 'center',
    borderRadius: 9999,
    width: 288,
    height: 288,
    borderWidth: 1,
    borderColor: 'white',
  },
  titlePerson: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
  },
  description: {
    fontSize: 18,
    color: 'white',
    lineHeight: 24,
  },
});
