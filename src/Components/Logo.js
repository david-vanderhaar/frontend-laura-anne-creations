import React, { Component } from 'react';
import logo from '../logo.svg';

class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <img
          src={logo}
          className="logo"
          alt="logo"
          onClick={() => {window.location.hash = '/'}}
        />
      </div>
    );
  }
}

export default Logo;
