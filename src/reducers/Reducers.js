import {combineReducers} from 'redux';
import {RECEIVE_MOVIES, RECEIVE_CHARAS} from '../actions/Actions';

// receive movies
function receiveMovies(state = [], action) {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return Object.assign({}, state, {
        movieLists: action.movieLists
      })
    default:
      return state
  }
}

// receive characters
function receiveCharas(state = INITIAL_CHARAS_STATE, action) {
  switch (action.type) {
    case RECEIVE_CHARAS:
      // clear the character lists
      if (action.index === 0) {
        let dummy = [];
        return Object.assign({}, state, {
          charaLists: dummy.concat(action.charaLists)
        })
      }
      // add character to the character lists
      return Object.assign({}, state, {
        charaLists: state.charaLists.concat(action.charaLists)
      })
    default:
      return state
  }
}

const INITIAL_CHARAS_STATE = {
  charaLists: []
}

const rootReducer = combineReducers({
  receiveMovies,
  receiveCharas
})

export default rootReducer;


