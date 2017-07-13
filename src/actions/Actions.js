import fetch from 'isomorphic-fetch';

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const RECEIVE_CHARAS = 'RECEIVE_CHARAS';

// request movies
export function requestMovies() {
  return dispatch => (dispatch(fetchMovies()));
}

// fetch movies
function fetchMovies() {
  return dispatch => {
    return fetch('http://swapi.co/api/films/')
      .then((response) => response.json())
      .then((json) => dispatch(receiveMovies(json)));
  }
}

// receive movies
// store movies in movieLists
function receiveMovies(json) {
  return {
    type: RECEIVE_MOVIES,
    movieLists: json.results.map(item => item.title)
  }
}

// request characters
export function requestCharas(index) {
  return dispatch => (dispatch(fetchMovieUrls(index)));
}

// fetch characters
function fetchMovieUrls(index) {
  return dispatch => {
    return fetch(`http://swapi.co/api/films/${index}`)
      .then(response => response.json())
      .then(json => dispatch(receiveMovieUrls(json)));
  }
}

// fetch characters urls
function receiveMovieUrls(json) {
  return dispatch => {
    json.characters.map((item, index) => dispatch(fetchChara(item, index)));
  }
}

// fetch character
function fetchChara(url, index) {
  return dispatch => {
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveChara(json, index)));
  }
}

// receive character
// store character in charaLists
function receiveChara(json, index) {
  return {
    type: RECEIVE_CHARAS,
    charaLists: json.name,
    index: index
  }
}
