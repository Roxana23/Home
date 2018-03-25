import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Deals from './pages/Deals';
import Contacts from './pages/Contacts';
import Notes from './pages/Notes';
import Profile from './pages/Profile';
import Login from  './pages/Login';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/Dashboard" component={Dashboard} />
                <Route path="/Tasks" component={Tasks} />
                <Route path="/Deals" component={Deals} />
                <Route path="/Contacts" component={Contacts} />
                <Route path="/Notes" component={Notes} />
                <Route path="/Profile" component={Profile} />
                <Route path="/Login" component={Login} />


            </div>
        </Router>

    );
  }
}

export default App;
