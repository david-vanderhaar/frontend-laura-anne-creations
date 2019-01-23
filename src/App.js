import React, { Component } from 'react';
import * as Commerce from './helpers/Commerce';
import {BrowserRouter as Router, Route, HashRouter} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Home from './Components/Home.js';
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
        if (!shops.includes(category.name)) {
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
            </AnimatedSwitch>
          </main>
        </div>
      </HashRouter>
    )
  }
}
// const App = () => (
//   <HashRouter>
//   <div>
//     <header id="header">
//       <Nav />
//     </header>
//     <main id="main">
//       <Route exact path={'/'} component={Home} />
//       <AnimatedSwitch
//         atEnter={{ opacity: 0 }}
//         atLeave={{ opacity: 0 }}
//         atActive={{ opacity: 1 }}
//         className="fade"
//       >
//         <Route path={'/game'} component={Home} />
//         <Route path={'/battlesim'} component={Home} />
//       </AnimatedSwitch>
//     </main>
//   </div>
//   </HashRouter>
// )

export default App;
