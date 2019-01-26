import React, { Component } from 'react';
import { CardPanel } from 'react-materialize';
import '../App.css';

class SimpleCard extends Component {

  render() {
    return (
      <div className="SimpleCard">
        <CardPanel>
          <img className='cover-image' src={this.props.image_source} alt="shop"/>
          <span className=''>{this.props.title}</span>
        </CardPanel>
      </div>
    );
  }
}

export default SimpleCard;
