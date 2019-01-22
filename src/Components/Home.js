import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import SimpleCard from './SimpleCard';
import SimpleCarousel from './SimpleCarousel';
import '../App.css';

class Home extends Component {
  render() {
    let shops = this.props.shops.map((shop, index) => {
      return (
        <Col s={12} m={4} key={`col-${index}`}>
          <SimpleCard title={shop.title} image_source={shop.image_source} />
        </Col>
      )
    });
    return (
      <div className="Home">
        <Row>
          <div className="center">
            <SimpleCarousel duration={10000} images={[
              'https://lorempixel.com/800/400/food/1',
              'https://lorempixel.com/800/400/food/2',
              'https://lorempixel.com/800/400/food/3',
              'https://lorempixel.com/800/400/food/4',
              'https://lorempixel.com/800/400/food/5'
            ]} />
          </div>
        </Row>
        <Row>
          { shops }
        </Row>
      </div>
    );
  }
}

export default Home;
