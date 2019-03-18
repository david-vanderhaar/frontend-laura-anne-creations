import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './Logo.js';

class HeaderNav extends Component {

  onToggleSideNav () {
    this.props.handleToggleSideNav(!this.props.sideNavVisible);
  }

  render() {
    const sideNavToggle = this.props.sideNavVisible
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
              onClick={this.onToggleSideNav.bind(this)}
            >
              <span>
                { sideNavToggle }
              </span>
            </li>
          </ul>
          <div 
            className="brand-logo center"
            onClick={() => { this.props.handleToggleSideNav(false) }}
          >
            <Logo />
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderNav;
