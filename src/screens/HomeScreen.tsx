import React, {useEffect, useState} from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Bar3CenterLeft from '../icons/Bar3CenterLeft';
import Search from '../icons/Search';
import TrendingMovies from '../components/TrendingMovies';
import MovieList from '../components/MovieList';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../type';
import {
  fetchPopularActors,
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from '../../api/moviedb';
import PopularActors from '../components/actor/PopularActors';

const HomeScreen = () => {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpComing] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [actor, setActor] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    getTrendingMovies();
    getUpComing();
    getTopRated();
    getActor();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    if (data && data.results) setTrending(data.results);
    setLoading(false);
  };
  const getUpComing = async () => {
    const data = await fetchUpcomingMovies();
    if (data && data.results) setUpComing(data.results);
  };
  const getTopRated = async () => {
    const data = await fetchTopRatedMovies();
    if (data && data.results) setTopRated(data.results);
  };
  const getActor = async () => {
    const data = await fetchPopularActors();
    if (data && data.results) setActor(data.results);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{marginBottom: Platform.OS === 'ios' ? -8 : 12}}>
        <StatusBar barStyle={'light-content'} />
        <View style={styles.header}>
          <Text style={styles.headerText}>Movies</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Search width={30} height={30} color="gold" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 16}}>
        <TrendingMovies data={trending} />

        <PopularActors data={actor} />

        <MovieList title="Upcoming" data={upcoming} />

        <MovieList title="Top Rated" data={topRated} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2E3A',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 16,
  },
  headerText: {
    color: 'gold',
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 36,
  },
});

export default HomeScreen;
