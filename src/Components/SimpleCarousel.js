import React, { Component } from 'react';
import Fade from '@material-ui/core/Fade';
import '../App.css';

class SimpleCarousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      timer: null,
    }
  }

  componentDidMount () {
    let index = this.state.index;
    let timer = setInterval(() => {
      if (index < this.props.shops.length - 1) {
        index += 1;
      } else {
        index = 0;
      }      
      this.setState({index});
    }, this.props.duration);

    this.setState({timer});
  }

  componentWillUnmount () {
    clearInterval(this.state.timer);
  }

  render() {
    let shops = this.props.shops.map((shop, index) => {
      let is_visible = this.state.index === index;
      let display = is_visible ? 'block' : 'none';
      return (
        <Fade key={index} in={is_visible} timeout={1000}>
          <a href={`#${shop.route}`}>
            <div style={{display}}>
                <img className='carousel-image' src={shop.image_source} alt="shop" />
            </div>
          </a>
        </Fade>
      )
    });

    return (
      <div className="SimpleCarousel">
        {shops}
      </div>
    );
  }
}

export default SimpleCarousel;
