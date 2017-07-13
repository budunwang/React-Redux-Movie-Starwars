import React, {Component} from 'react';

export default class CharList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let charas_dummy = [];
    const {charaLists} = this.props.charaLists;
    if (charaLists === undefined) {
      return null;
    }
    charaLists.forEach((item, i) => {
      charas_dummy.push(
        <div className="col-sm-6 col-md-5" key={i}>
          <li>
            <label>{item}</label>
          </li>
        </div>
      )
    });

    return (
      <div className="container">
        <div className="col-sm-12 col-md-10">
          <h2>Characters</h2>
          <ul>
            {charas_dummy}
          </ul>
        </div>
      </div>
    );
  }
}
