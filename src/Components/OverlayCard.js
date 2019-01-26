import React, { Component } from 'react';
import { CardPanel } from 'react-materialize';
import '../App.css';

class OverlayCard extends Component {

  render() {
    return (
      <div className="OverlayCard SimpleCard">
        <div className='simple-card-overlay'>
          <div className='overlay-text'>
            <span className="overlay-title">{this.props.title}</span>
            <span className="overlay-subtitle">{this.props.price}</span>
          </div>
        </div>
        <CardPanel>
          <img className='cover-image' src={this.props.image_source} alt="shop" />
        </CardPanel>
      </div>
    );
  }
}

export default OverlayCard;
