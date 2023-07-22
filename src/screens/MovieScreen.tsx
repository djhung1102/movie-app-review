import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Platform,
  Dimensions,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Back from '../icons/Back';
import Heart from '../icons/Heart';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';
import {
  fetchMovieCredits,
  fetchMovieDetail,
  fetchMovieSimilar,
} from '../../api/moviedb';
import {baseImageUrl} from '../../constants';
import {HomeScreenNavigationProp} from '../../type';

var {width, height} = Dimensions.get('window');

type typeMovieProps = {
  poster_path: string;
  title: string;
  overview: string;
};

export default function MovieScreen() {
  const {params} = useRoute<HomeScreenNavigationProp>();
  const navigation = useNavigation();
  const [movie, setMovie] = useState<typeMovieProps>();
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([1, 2, 3, 4, 5, 6]);

  useEffect(() => {
    getMovieDetail(params?.item);
    getMovieCredits(params?.item);
    getMovieSimilar(params?.item);
  }, [params, params.item]);

  const getMovieDetail = async (id: number) => {
    const data = await fetchMovieDetail(id);
    if (data) setMovie(data);
  };
  const getMovieCredits = async (id: number) => {
    const data = await fetchMovieCredits(id);
    if (data && data.cast) setCast(data.cast);
  };
  const getMovieSimilar = async (id: number) => {
    const data = await fetchMovieSimilar(id);
    if (data && data.results) setSimilar(data.results);
  };

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 20}}
      style={styles.containerMovieScreen}>
      <View style={{width: '100%'}}>
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
          <Image
            source={{uri: `${baseImageUrl}/w500${movie?.poster_path}`}}
            style={{width: width, height: height * 0.55, objectFit: 'cover'}}
          />
        </View>
      </View>

      <View style={{marginTop: 12, marginLeft: 'auto', marginRight: 'auto'}}>
        <Text style={{color: 'white', fontSize: 28, fontWeight: '700'}}>
          {movie?.title}
        </Text>
      </View>

      <Text
        style={{
          marginTop: 16,
          marginLeft: 16,
          marginRight: 16,
          color: 'darkgray',
          fontSize: 16,
          lineHeight: 22,
        }}>
        {movie?.overview}
      </Text>

      <View>
        {cast.length > 0 && <Cast navigation={navigation} cast={cast} />}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerMovieScreen: {
    flex: 1,
    backgroundColor: '#2C2E3A',
  },
  headerMovie: {
    position: 'absolute',
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
});
