import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from './Logo.js';

class SideNav extends Component {

  render() {
    // window.location.hash = '/game';
    return (
      <div id="sideNav" className="SideNav">
        <Logo />
        <div className="top-nav">
          <div className="shop-links">
            <div className="shop-link-header">Shop</div>
            <ul>
              <li>
                <a href="#">
                  Shop 1
                </a>
              </li>
              <li>
                <a href="#">
                  Shop 2
                </a>
              </li>
              <li>
                <a href="#">
                  Shop 3
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-nav">
          <div className="page-links">
            <ul>
              <li>
                <a href="#">
                  Page 1
                </a>
              </li>
              <li>
                <a href="#">
                  Page 2
                </a>
              </li>
              <li>
                <a href="#">
                  Page 3
                </a>
              </li>
            </ul>
          </div>
          <div className="social-media-links">
            <a href='https://github.com/david-vanderhaar'>
              <FontAwesomeIcon
                icon={['fab', 'github-square']}
                size="2x"
              />
            </a>
            <a href='https://twitter.com/classicwook'>
              <FontAwesomeIcon
                icon={['fab', 'twitter-square']}
                size="2x"
              />
            </a>
            <a href='mailto:d.vanderhaarhunter@gmail.com'>
              <FontAwesomeIcon
                icon={['fas', 'envelope-square']}
                size="2x"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
