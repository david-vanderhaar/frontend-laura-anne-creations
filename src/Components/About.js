import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import '../App.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <Row>
          <h2 className='center'>About Our Shop</h2>
          <p className='about-text'>
            Hello! My name is Laura Anne and I’m so excited to share my art with you!
            Traveling to interesting and lesser known places in the world
            has shown me that God has created many different forms of art that are waiting to be shared with us all.
            I love capturing unique elements of landscapes and cultures
            because these are the things God has used in my life to reveal Himself to me.
          </p>
        </Row>
        <Row>
          <div className='block-center'>
            <img className='cover-image' src={'./about.jpg'} alt="about" />
          </div>
        </Row>
        <Row>
          <Col s={12}>
            <p className='about-text'>
              I live in Lexington KY with my husband David and our son Israel. 
              Lexington is where I grew up writing music, poems, stories, and painting. 
              I love to create, however it has not been until recently that I have shared my art with others.
              Over the past 3 years I’ve discovered a new found love for watercolor which you will see is mainly what I use. 
              I love creating custom pieces, illustrations for children, and prints for the home, 
              but I’m always up for new challenges! 
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
