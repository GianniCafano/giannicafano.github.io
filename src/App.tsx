import React, { FC, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './components/pages/Home';

const App: FC = () => {
  const paths = [
    {path:'/', name:'Home'},
    {path:'/about', name:'About'},
    {path: '/contact', name: 'Contact'}
  ];

  return (
    <Fragment>
      <div id="app">
        <Router>
          <Navigation paths={paths} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route exact path="/about">
              <About />
            </Route> */}
            <Route path="*">
              404
            </Route>
          </Switch>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
