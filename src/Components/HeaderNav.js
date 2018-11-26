import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './Logo.js';

class HeaderNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sideNavVisible: false
    }
  }

  toggleSideNav() {
    let sideNav = document.getElementById('sideNav');
    switch (this.state.sideNavVisible) {
      case true:
        sideNav.classList.remove("SideNavMobile");
        break;
      case false:
        sideNav.classList.add("SideNavMobile");
        break;
      default:
    }
    this.setState({
      sideNavVisible: !this.state.sideNavVisible
    })
  }

  render() {
    const sideNavToggle = this.state.sideNavVisible
      ? (
        <FontAwesomeIcon
          icon={['fas', 'times']}
        />
      )
      : (
        <FontAwesomeIcon
          icon={['fas', 'bars']}
        />
      )
    return (
      <nav className="HeaderNav">
        <div className="nav-wrapper">
          <ul className="left">
            <li
              className="side-nav-trigger"
              onClick={this.toggleSideNav.bind(this)}
            >
              <span>
                { sideNavToggle }
              </span>
            </li>
          </ul>
          <div className="brand-logo right"><Logo /></div>
        </div>
      </nav>
    );
  }
}

export default HeaderNav;
