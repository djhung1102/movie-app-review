import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Movie: {id: number};
  Person: {personId: number};
  Search: undefined;
};

export type HomeScreenNavigationProp = NativeStackScreenProps<
  HomeStackNavigatorParamList,
  HomeScreenNavigationProp,
  Movie,
  Person,
  Search
>;
