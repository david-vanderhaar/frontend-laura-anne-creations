import React from 'react';
import {BrowserRouter as Router, Route, HashRouter} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Home from './Components/Home.js';
import Nav from './Components/Nav.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)

const App = () => (
  <HashRouter>
  <div>
    <header id="header">
      <Nav />
    </header>
    <main id="main">
      <Route exact path={'/'} component={Home} />
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="fade"
      >
        <Route path={'/game'} component={Home} />
        <Route path={'/battlesim'} component={Home} />
      </AnimatedSwitch>
    </main>
  </div>
  </HashRouter>
)

export default App;
