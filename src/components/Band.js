import React, { Component } from 'react';

class Band extends Component {

  delete = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  }
  render() {
    return(
      <div>
        <li id={this.props.id}>{this.props.band.text}</li>
        <button onClick={this.delete}></button>
      </div>
    );
  }
};

export default Band;
