import React, { Component } from 'react';

import ListItem from './ListItem';
import DetailItem from './DetailItem';

class App extends Component {
  render() {
    return (
      <div>
        <DetailItem />
        <ListItem />
      </div>
    );
  }
}

export default App;
