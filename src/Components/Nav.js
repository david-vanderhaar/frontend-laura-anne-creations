import React, { Component } from 'react';
import SideNav from './SideNav';
import HeaderNav from './HeaderNav';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <HeaderNav />
        <SideNav shops={this.props.shops}/>
      </div>
    );
  }
}

export default Nav;
