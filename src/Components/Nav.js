import React, { Component } from 'react';
import SideNav from './SideNav';
import HeaderNav from './HeaderNav';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavVisible: false
    }
  }

  handleToggleSideNav(sideNavVisible) {
    let sideNav = document.getElementById('sideNav');
    switch (sideNavVisible) {
      case true:
        sideNav.classList.add("SideNavMobile");
        break;
      case false:
        sideNav.classList.remove("SideNavMobile");
        break;
      default:
    }
    this.setState({sideNavVisible})
  }

  render() {
    return (
      <div className="Nav">
        <HeaderNav  handleToggleSideNav={this.handleToggleSideNav.bind(this)} sideNavVisible={this.state.sideNavVisible}/>
        <SideNav shops={this.props.shops} handleToggleSideNav={this.handleToggleSideNav.bind(this)}/>
      </div>
    );
  }
}

export default Nav;
