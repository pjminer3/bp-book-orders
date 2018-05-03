import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    // Call Redux action creator to fetch data from Poloniex and Bittrex
  }

  render () {
    return (<div>
      Hello World!
    </div>)
  }
}

export default App;