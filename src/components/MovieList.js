import React, {Component} from 'react';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // click movie list
  handleClick(i) {
    const {clickEvent} = this.props;
    clickEvent(i + 1);
  }

  render() {
    let movies_dummy = [];
    const {movieLists} = this.props.movieLists;
    if (movieLists === undefined) {
      return null;
    }
    movieLists.forEach((item, i) => {
      movies_dummy.push(
        <div className="col-sm-6 col-md-5" key={i}>
          <li>
            <label onClick={this.handleClick.bind(null, i)}>{item}</label>
          </li>
        </div>
      )
    });

    return (
      <div className="container">
        <div className="col-sm-12 col-md-10">
          <h2>Movies</h2>
          <ul>
            {movies_dummy}
          </ul>
        </div>
      </div>
    );
  }
}
