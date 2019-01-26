import React, { Component } from 'react';
import { Row } from 'react-materialize';
import '../App.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <Row>
          <h2 className='center'>Contact</h2>
        </Row>
        <Row>
          <p className='flow-text'>
            Interested in custom illustrations or getting in touch? Reach out <a href='https://www.instagram.com/laura_anne_creations/'>@laura_anne_creations</a> or email us at <a href='mailto:laura.anne.creations@gmail.com'>laura.anne.creations@gmail.com</a>
          </p>
        </Row>
        <Row>
          <div className='block-center'>
            <img className='cover-image' src={'./about.jpg'} alt="about" />
          </div>
        </Row>
      </div>
    );
  }
}

export default Contact;
