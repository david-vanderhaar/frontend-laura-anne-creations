import React, { Component } from 'react';
import Fade from '@material-ui/core/Fade';
import '../App.css';

class SimpleCarousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      length: this.props.images.length,
      timer: null,
    }
  }

  componentDidMount () {
    let index = this.state.index;
    let timer = setInterval(() => {
      if (index < this.state.length - 1) {
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
    let images = this.props.images.map((src, index) => {
      let is_visible = this.state.index === index;
      let display = is_visible ? 'block' : 'none';
      return (
        <Fade key={index} in={is_visible} timeout={1000}>
          <div style={{display}}>
            <img className='carousel-image' src={src} alt="shop" />
          </div>
        </Fade>
      )
    });

    return (
      <div className="SimpleCarousel">
        {images}
      </div>
    );
  }
}

export default SimpleCarousel;
