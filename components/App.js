import React, { Component } from 'react';
import Layout from './Layout';
import Prices from './Prices';
import LoginScreen from './Loginscreen';
import TweetsPanels from './TweetPanels'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  render() {
    return (
    <Layout>
      <div>
        <h1>Welcome to Dapp Twitter</h1>
        <p>Check current Bitcoin rate</p>
        <TweetsPanels />
      </div>
    </Layout>
    );
  }
}

export default App;
