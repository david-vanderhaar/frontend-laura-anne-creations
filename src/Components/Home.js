import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import SimpleCard from './SimpleCard';
import SimpleCarousel from './SimpleCarousel';
import '../App.css';

class Home extends Component {
  render() {
    let shops_cards = this.props.shops.map((shop, index) => {
      return (
        <Col s={12} m={4} key={`col-${index}`}>
          <a href={`#${shop.route}`}>
            <SimpleCard title={shop.title} image_source={shop.image_source} />
          </a>
        </Col>
      )
    });
    // let shop_images = this.props.shops.map((shop) => {
    //   return (shop.image_source)
    // });    
    return (
      <div className="Home">
        {/* <Row>
          <div className="center">
            <SimpleCarousel duration={10000} images={shop_images} shops={this.props.shops} />
          </div>
        </Row> */}
        <Row>
          { shops_cards }
        </Row>
      </div>
    );
  }
}

export default Home;
