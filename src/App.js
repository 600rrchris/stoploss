import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../src/pages/LoginPage'
import SignupPage  from '../src/pages/SignupPage/SignupPage'
import userService from '../src/utils/userServices';
import NavBar from './components/NavBar/NavBar';
import Stock from './components/Stocks/Stock'

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: userService.getUser(),
      symbol: null
    }
  }
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }
  render() {
  return (
    <div className="HomePage">
      <Switch>
  <Route exact path='/' render={() =>
      <NavBar />    
  } />
  <Route exact path='/Stocks' render={() =>
      <Stock />    
  } />
  <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignup={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({history}) => 
            <LoginPage
              history={history}
              handleLogin={this.handleSignupOrLogin}
            />
          }/>
      </Switch>
    <div>
      <Stock />
    </div>
    </div>   
  )
 }
}

export default App;
