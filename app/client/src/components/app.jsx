import React from 'react';

import Header from './header.jsx';
import Title from './title.jsx';
import Data from './data.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    // Call Redux action creator to fetch data from Poloniex and Bittrex
  }

  render () {
    return (
      <div>
        <Header />
        <Title />
        <Data />
      </div>
    )
  }
}

export default App;