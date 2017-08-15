import axios from 'axios';

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const RECEIVE_CHARAS = 'RECEIVE_CHARAS';

// request movies
export function requestMovies() {
  return dispatch => (dispatch(fetchMovies()));
}

// fetch movies
function fetchMovies() {
  return dispatch => {
    return axios.get('https://swapi.co/api/films/')
      .then((res) => {
        const movies = res.data.results.map(obj => obj.title);
        dispatch(receiveMovies(movies));
      });
  }
}

// receive movies
// store movies in movieLists
function receiveMovies(json) {
  return {
    type: RECEIVE_MOVIES,
    movieLists: json
  }
}

// request characters
export function requestCharas(index) {
  return dispatch => (dispatch(fetchMovieUrls(index)));
}

// fetch urls of movie characters
function fetchMovieUrls(index) {
  return dispatch => {
    return axios.get(`https://swapi.co/api/films/${index}`)
      .then(res => dispatch(fetchCharas(res.data.characters)));
  }
}

// fetch movie characters names with urls
function fetchCharas(json) {
  return dispatch => {
    let requests = json.map(obj => axios.get(obj));
    return axios.all(requests)
      .then(results => {
        let charas = results.map(res => res.data.name);
        dispatch(receiveCharas(charas));
      });
  }
}

// receive characters names
// store characters names in charaLists
function receiveCharas(json) {
  return {
    type: RECEIVE_CHARAS,
    charaLists: json
  }
}

