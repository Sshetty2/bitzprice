import Layout from '../components/Layout';
import Prices from '../components/Prices';
import Login from '../components/LoginPage';
import App from '../components/App'
import "isomorphic-fetch"
import TweetsPanels from '../components/TweetPanels'


const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to Dapp Twitter</h1>
      <p>Check current Bitcoin rate</p>
      <TweetsPanels />
    </div>
  </Layout>
);


// const Index = (props) => ( 
//   <App />
// );

Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  };
}

export default Index;