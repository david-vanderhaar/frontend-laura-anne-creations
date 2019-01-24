import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import '../App.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <Row>
          <h2 className='center'>About Our Shop</h2>
        </Row>
        <Row>
          <div className='block-center'>
            <img className='cover-image' src={'/about.jpg'} alt="about" />
          </div>
        </Row>
        <Row>
          <Col s={12} m={6}>
            <h5>Section 1</h5>
            <p className='about-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nullam mattis risus non velit maximus elementum. 
              Mauris dignissim consequat ante nec blandit. 
              Maecenas convallis tellus sed metus euismod, ac luctus justo imperdiet. 
              Vestibulum quis erat eget massa mollis efficitur. 
              Curabitur maximus et nisi sit amet dictum. 
              In non vehicula ipsum. 
              Pellentesque venenatis purus et congue gravida. 
              Maecenas auctor finibus ante, vestibulum condimentum neque congue non. 
              Donec eleifend quam non ornare facilisis. 
              Quisque molestie vehicula placerat.
            </p>
          </Col>
          <Col s={12} m={6}>
            <h5>Section 2</h5>
            <p className='about-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nullam mattis risus non velit maximus elementum. 
              Mauris dignissim consequat ante nec blandit. 
              Maecenas convallis tellus sed metus euismod, ac luctus justo imperdiet. 
              Vestibulum quis erat eget massa mollis efficitur. 
              Curabitur maximus et nisi sit amet dictum. 
              In non vehicula ipsum. 
              Pellentesque venenatis purus et congue gravida. 
              Maecenas auctor finibus ante, vestibulum condimentum neque congue non. 
              Donec eleifend quam non ornare facilisis. 
              Quisque molestie vehicula placerat.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
