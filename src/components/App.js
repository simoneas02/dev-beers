import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ListItem from './ListItem';
import DetailItem from './DetailItem';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={ListItem} />
            <Route path='/detail-item' component={DetailItem} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
