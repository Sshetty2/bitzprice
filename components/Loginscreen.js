import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';

import LoginPage from './LoginPage';
// import Register from './Register';

const style = {
  margin: 15,
};

class Loginscreen extends Component {
  constructor(props){
    super(props);
    var _loginButtons=[];
    _loginButtons.push(
      <div>
        <div>
           <Button label={"Register as User"} backgroundColor="cornflowerblue" labelColor="white" style={style} onClick={(event) => this.handleClick(event,'user')}/>
       </div>
       <div>
          <Button backgroundColor="cornflowerblue" labelColor="white" label={"Register as Admin"} style={style} onClick={(event) => this.handleClick(event,'admin')}/>
      </div>
      </div>
    )
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      loginButtons: _loginButtons,
      userbuttonLabel:'Register as User',
      adminbuttonLabel:'Register as Admin',
      isLogin:true
    }
  }
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<LoginPage parentContext={this} appContext={this.props.appContext}/>);
    var loginmessage = "Not registered yet, Register Now";
    this.setState({
                  loginscreen:loginscreen,
                  loginmessage:loginmessage
                    })
  }

/// EVENT LISTENER

  handleClick(event,userRole){
    console.log("event",userRole);
    var loginmessage;

/// Beginning Loginscreen logic ///

    if(this.state.isLogin){
      let loginscreen=[];
      loginscreen.push(<Register parentContext={this} appContext={this.props.appContext} role={userRole} />);
      loginmessage = "Already registered.Go to Login";
      let loginButtons=[];
      loginButtons.push(
        <div key="login-button">
          <div>
             <Button label={"Login"} backgroundColor="cornflowerblue" labelColor="white" style={style} onClick={(event) => this.handleClick(event,userRole)}/>
         </div>
        </div>
      )
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     loginButtons:loginButtons,
                     isLogin:false
                   })
    }
    else{
      let loginscreen=[],loginButtons=[];
      loginButtons.push(
        <div >
          <div>
             <Button label={"Register as User"} backgroundColor="cornflowerblue" labelColor="white" style={style} onClick={(event) => this.handleClick(event,'user')}/>
         </div>
         <div>
            <Button label={"Register as Admin"} backgroundColor="cornflowerblue" labelColor="white" style={style} onClick={(event) => this.handleClick(event,'admin')}/>
        </div>

        </div>
      )
      loginscreen.push(<LoginPage parentContext={this} appContext={this.props.appContext} role={userRole}/>);
      loginmessage = "Not Registered yet.Go to registration";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     loginButtons:loginButtons,
                     isLogin:true
                   })
    }
  }

  // EVENT LISTENER END

  render() {
    return (
      <div className="loginscreen" key="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          {this.state.loginButtons}
        </div>
      </div>
    );
  }
}


export default Loginscreen;
