import React, { Component } from 'react';
import Layout from './Layout';
import Prices from './Prices';
import LoginScreen from './Loginscreen';
import TweetsPanels from './TweetPanels'

import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../src/getPageContext';

class App extends Component {
  constructor(props){
    super(props);
    this.pagecontext = getPageContext();
    this.state={
    }
  
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
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
