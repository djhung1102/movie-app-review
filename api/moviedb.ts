import axios from 'axios';
import {apiKey} from '../constants';

const baseUrl = 'https://api.themoviedb.org/3';
const trendingMoviesEndpoint = `${baseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMoviesEndpoint = `${baseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndpoint = `${baseUrl}/movie/top_rated?api_key=${apiKey}`;
const popularActorsEndpoint = `${baseUrl}/person/popular?api_key=${apiKey}`;

//https://api.themoviedb.org/3/movie/movie_id
const movieDetailEndpoint = (id: number) =>
  `${baseUrl}/movie/${id}?api_key=${apiKey}`;
const movieCreditsEndpoint = (id: number) =>
  `${baseUrl}/movie/${id}/credits?api_key=${apiKey}`;
const similarMoviesEndpoint = (id: number) =>
  `${baseUrl}/movie/${id}/similar?api_key=${apiKey}`;

const personDetailEndpoint = (id: number) =>
  `${baseUrl}/person/${id}?api_key=${apiKey}`;

const searchMovieEndpoint = () => `${baseUrl}/search/movie?api_key=${apiKey}`;

const apiCall = async (endpoint: string, params?: {query: string}) => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params ? params : {},
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesEndpoint);
};
export const fetchUpcomingMovies = () => {
  return apiCall(upcomingMoviesEndpoint);
};
export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMoviesEndpoint);
};
export const fetchPopularActors = () => {
  return apiCall(popularActorsEndpoint);
};

export const fetchMovieDetail = (id: number) => {
  return apiCall(movieDetailEndpoint(id));
};
export const fetchMovieCredits = (id: number) => {
  return apiCall(movieCreditsEndpoint(id));
};
export const fetchMovieSimilar = (id: number) => {
  return apiCall(similarMoviesEndpoint(id));
};
export const fetchPersonDetails = (id: number) => {
  return apiCall(personDetailEndpoint(id));
};
export const fetchSearchMovie = (value: string) => {
  return apiCall(searchMovieEndpoint(), {query: value});
};
