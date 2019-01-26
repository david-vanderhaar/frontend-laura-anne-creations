import React, { Component } from 'react';
import * as Commerce from './helpers/Commerce';
import {BrowserRouter as Router, Route, HashRouter} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Shop from './Components/Shop.js';
import Nav from './Components/Nav.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)

class App extends Component {

  constructor() {
    super();
    this.state = {
      products: [],
      shops: [],
    }
  }

  async componentDidMount() {
    let products = await Commerce.getProducts();
    let shops = [];

    products.data.forEach(product => {
      product.categories.forEach(category => {
        if (!shops.some((shop) => shop.title === category.name)) {
          shops.push(
            {
              title: category.name,
              image_source: product.media.source,
              route: `/${category.slug}`,
            }
          );
        }
      });
    });

    this.setState({ products, shops }, console.log(products));
  }

  render() {
    let shop_routes = this.state.shops.map((shop, index) => {      
      return (
        <Route key={`route-${index}`} path={shop.route} render={(props) => <Shop products={this.state.products} category={shop.title} />} />
      )
    });

    return (
      <HashRouter>
        <div>
          <header id="header">
            <Nav shops={this.state.shops}/>
          </header>
          <main id="main">
            <Route exact path={'/'} render={(props) => <Home shops={this.state.shops}/>} />
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="fade"
            >
              {shop_routes}
              <Route path={'/contact'} component={Contact} />
              <Route path={'/about'} component={About} />
            </AnimatedSwitch>
          </main>
          <footer id="footer">
            <div className="footer-copyright">
              <div className="container grey-text">
                © {(new Date()).getFullYear()} Laura Anne Creations, any artwork and images of artwork are sole property of Laura A. Rogers and may not be reproduced or used for profit without artist's permission
              </div>
            </div>
          </footer>
        </div>
      </HashRouter>
    )
  }
}

export default App;
