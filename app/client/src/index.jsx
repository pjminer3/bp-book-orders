const React = require('react');
const ReactDOM = require('react-dom');

console.log('hell world');

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

ReactDOM.render(<App />, document.getElementById('app'));