import Layout from '../components/Layout';
import Prices from '../components/Prices';
import Login from '../components/LoginPage';
import App from '../components/App'
import "isomorphic-fetch"


// const Index = (props) => (
//   <Layout>
//     <div>
//       <h1>Welcome to BitzPrice</h1>
//       <p>Check current Bitcoin rate</p>
//       <Prices bpi={props.bpi}/>
//     </div>
//   </Layout>
// );


const Index = (props) => ( 
  <App />
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  };
}

export default Index;