import React, { Component } from 'react';

import './App.css';
import LoginScreen from './Loginscreen';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var _loginPage =[];
    _loginPage.push(<LoginScreen appContext={this}/>);
    this.setState({
                  loginPage:_loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}

export default App;
