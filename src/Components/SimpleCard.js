import React, { Component } from 'react';
import { CardPanel } from 'react-materialize';
import '../App.css';

class SimpleCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'title',
      image_url: 'https://i.ytimg.com/vi/sJC5VSEbFyY/maxresdefault.jpg',
    }
  }

  render() {
    return (
      <div className="SimpleCard">
        <CardPanel>
          <img className='cover-image' src={this.props.image_source} alt="shop"/>
          <span className='flow-text'>{this.props.title}</span>
        </CardPanel>
      </div>
    );
  }
}

export default SimpleCard;
