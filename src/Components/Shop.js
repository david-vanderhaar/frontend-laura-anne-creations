import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import SimpleCard from './SimpleCard';
import '../App.css';

class Shop extends Component {
  render() {
    let products = this.props.products.data.map((product, index) => {
      if (product.categories.find(category => category.name === this.props.category))
      return (
        <Col s={12} m={4} key={`col-${index}`}>
          <SimpleCard title='' image_source={product.media.source} />
        </Col>
      )
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
