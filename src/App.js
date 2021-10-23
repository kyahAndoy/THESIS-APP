import React from 'react';

import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";


import Home from './Home';
import Videos from './Videos';
import Images from './Images';
import Downloads from './Downloads';
import BottomNav from './components/BottomNav';

function App() {
  return (
 
      <div className='container'>
        <Router>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/videos" component={Videos} />
                  <Route path="/images" component={Images} />
                  <Route path="/downloads" component={Downloads} />
                </Switch>
            <BottomNav />
       </Router>
        </div>
  

  );
}

export default App;
