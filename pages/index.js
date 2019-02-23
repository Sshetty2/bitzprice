import Layout from '../components/Layout';
import Prices from '../components/Prices';
import Login from '../components/LoginPage';
import App from '../components/App'
import "isomorphic-fetch"
import TweetsPanels from '../components/TweetPanels'
import getPageContext from '../src/getPageContext';




class MyApp extends App  {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }
  
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
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

// const Index = (props) => ( 
//   <App />
// );


MyApp.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  };
}

export default MyApp;