import React, {Component} from 'react';
import {connect} from 'react-redux';
import {requestMovies, requestCharas} from '../actions/Actions';
import MovieList from '../components/MovieList';
import CharList from '../components/CharList';

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // load movie lists
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(requestMovies());
  }

  // movie click handle
  // load character lists
  handleClick(index) {
    const {dispatch} = this.props;
    dispatch(requestCharas(index, 0));
  }

  render() {
    const {receiveMovies, receiveCharas} = this.props;
    return (
      <div className="container">
        <div className="center-block">
          <h1>StarWar</h1>
          <hr/>
          <MovieList movieLists={ receiveMovies }
                     clickEvent={this.handleClick}/>
          <hr />
          <CharList charaLists={ receiveCharas }/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {receiveMovies, receiveCharas} = state;
  return {
    receiveMovies,
    receiveCharas
  }
}

export default connect(mapStateToProps)(Main);
