import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Back from '../icons/Back';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../type';
import XMark from '../icons/XMark';
import Slash from '../icons/Slash';
import {debounce} from 'lodash';
import {fetchSearchMovie} from '../../api/moviedb';
import {baseImageUrl} from '../../constants';

var {width, height} = Dimensions.get('window');

export default function SearchScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [results, setResults] = useState([]);

  const handleSearch = (value: string) => {
    if (value) {
      fetchSearchMovie(value).then(data => {
        setResults(data.results);
      });
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 500), []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.headerMovie}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <Back width={28} height={28} />
        </TouchableOpacity>
      </SafeAreaView>

      <View style={styles.search}>
        <TextInput
          onChangeText={handleTextDebounce}
          placeholder="Search Movies"
          placeholderTextColor={'lightgray'}
          style={styles.input}
        />
        <TouchableOpacity
          style={{
            borderRadius: 9999,
            padding: 12,
            margin: 4,
            backgroundColor: 'gray',
          }}>
          <XMark width={25} height={25} />
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 22, marginLeft: 16}}>
        <Text
          style={{
            color: 'white',
            fontWeight: '600',
            marginLeft: 4,
            fontSize: 22,
          }}>
          Results
        </Text>
      </View>

      <FlatList
        data={results}
        renderItem={({item}) => <ListSearch item={item} />}
        numColumns={2}
        columnWrapperStyle={styles.searchResult}
        contentContainerStyle={{paddingHorizontal: 16}}
        initialNumToRender={6}
        maxToRenderPerBatch={6}
      />
    </View>
  );
}

const ListSearch = ({item}: any) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <TouchableWithoutFeedback
      key={item.id}
      onPress={() => navigation.push('Movie', {item: item.id})}>
      <View style={{width: width * 0.44}}>
        <Image
          source={{uri: `${baseImageUrl}/w342${item.poster_path}`}}
          style={{
            width: width * 0.44,
            height: height * 0.3,
            borderRadius: 22,
          }}
        />
        <Text
          style={{
            color: 'white',
            marginTop: 8,
            fontSize: 16,
            fontWeight: '500',
          }}>
          {item.title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2E3A',
  },
  headerMovie: {
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
  search: {
    marginLeft: 16,
    marginRight: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 9999,
  },
  input: {
    paddingBottom: 4,
    paddingLeft: 24,
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 1,
  },
  searchResult: {
    marginTop: 22,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    columnGap: 16,
    rowGap: 24,
  },
});
