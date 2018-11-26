import React, { Component } from 'react';
import SideNav from './SideNav';
import HeaderNav from './HeaderNav';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <HeaderNav />
        <SideNav />
      </div>
    );
  }
}

export default Nav;
