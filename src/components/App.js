import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ListItem from './ListItem';
import DetailItem from './DetailItem';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ListItem} />
          <Route path='/detail-item' component={DetailItem} />
        </Switch>
      </div>
    );
  }
}

export default App;
