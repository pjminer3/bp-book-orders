import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Recent Transactions from Bittrex and Poloniex</h1>
        <p>(Image will go here)</p>
        <input type="text"></input>
      </div>
    )
  }
}

export default Title;