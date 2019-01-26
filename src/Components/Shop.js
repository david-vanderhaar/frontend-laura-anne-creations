import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import SimpleCard from './SimpleCard';
import OverlayCard from './OverlayCard';
import '../App.css';

class Shop extends Component {
  render() {
    let products = this.props.products.data.map((product, index) => {
      if (product.categories.find(category => category.name === this.props.category)) {
        return (
          <Col s={12} m={4} key={`col-${index}`}>
            <a href={`${product.checkout_url.display}`} target={'blank'}>
              <OverlayCard title={product.name} price={product.price.formatted_with_symbol} image_source={product.media.source} />
            </a>
          </Col>
        )
      }
    });
    return (
      <div className="Shop">
        <Row>
          {products}
        </Row>
      </div>
    );
  }
}

export default Shop;
