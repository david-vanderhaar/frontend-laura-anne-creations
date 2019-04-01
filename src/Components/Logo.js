import React, { Component } from 'react';
import laura_logo from '../laura-logo-l.jpg';

class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <img
          src={laura_logo}
          className="logo"
          alt="logo"
          onClick={() => {window.location.hash = '/'}}
        />
      </div>
    );
  }
}

export default Logo;
