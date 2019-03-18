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
            onClick={() => {this.props.handleToggleSideNav(false)}}
          >
            {shop.title}
          </a>
        </li>
      );
    });

    return (
      <div id="sideNav" className="SideNav">
        <div className="top-nav">
          <Logo />
          {/* <div className='brand-text flow-text'>
            Laura Anne Creations
          </div> */}
          <div className="shop-links">
            <div className="shop-link-header">Shop</div>
            <ul>
              <li>
                <a
                  href={`#/`}
                  className={`${window.location.hash === '#/' ? 'highlight-link' : ''}`}
                  onClick={() => {this.props.handleToggleSideNav(false)}}
                >
                  Home
                </a>
              </li>
              {shop_links}
            </ul>
          </div>
        </div>
        <div className="bottom-nav">
          <div className="page-links">
            <ul>
              <li>
                <a href="#/contact" onClick={() => {this.props.handleToggleSideNav(false)}}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#/about" onClick={() => {this.props.handleToggleSideNav(false)}}>
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
