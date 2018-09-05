import React, { Component } from 'react';
import './App.css';
//import SideNav from './components/SideNav/SideNav'
import Dashboard from './components/Dashboard/Dashboard'
import SteamDashboard from './components/Dashboard/Steam/Dashboard/SteamDashboard'
import DOTA from './components/Dashboard/Steam/Dashboard/Games/DOTA/DOTA'
import Login from './components/Login/Login'
import { Switch, Route } from 'react-router-dom'
import test from './test.png';


class App extends Component {
  render() {
    return(
      <div className='App'>
        <Switch>
        <div >
         <Route exact path="/" component={Login} />
         <Route exact path="/Dashboard" component={Dashboard} />
         <Route exact path="/SteamDashboard" component={SteamDashboard} />
         <Route exact path="/Dota" component={DOTA} />
        </div>
       </Switch>
      </div>
    );
  }
}

export default App;
