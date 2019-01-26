import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from './Logo.js';

class SideNav extends Component {

  render() {
    let shop_links = this.props.shops.map((shop, index) => {
      return (
        <li key={index}>
          <a 
            href={`#${shop.route}`} 
            className={`${window.location.hash === '#' + shop.route ? 'highlight-link' : ''}`}
          >
            {shop.title}
          </a>
        </li>
      );
    });

    return (
      <div id="sideNav" className="SideNav">
        <Logo />
        <div className="top-nav">
          <div className="shop-links">
            <div className="shop-link-header">Shop</div>
            <ul>
              {shop_links}
            </ul>
          </div>
        </div>
        <div className="bottom-nav">
          <div className="page-links">
            <ul>
              <li>
                <a href="#/contact">
                  Contact
                </a>
              </li>
              <li>
                <a href="#/about">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="social-media-links">
            <a href='https://www.instagram.com/laura_anne_creations/'>
              <FontAwesomeIcon
                icon={['fab', 'instagram']}
                size="2x"
              />
            </a>
            <a href='mailto:laura.anne.creations@gmail.com'>
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
