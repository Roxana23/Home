import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
//const BUTTONS = ['Default'];

class Navbar extends Component {
    render() {
        return(
        <nav className="navbar navbar-expand-md navbar-dark bg-secondary mb-4">
            <div className="container">
            <Link className="navbar-brand" to="/"><img src={'C:\\Users\\Roxana\\react-app-copy\\src\\images\\crm2.png'}  width="70" height="60"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav m-md-auto">
                    <li className="nav-item ">
                        <Link className="nav-link" to="/Dashboard">Dashboard <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Deals">Deals</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contacts">Contacts</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Tasks">Tasks</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/Notes">Notes</Link>
                    </li>

                </ul>

                  <ul className="navbar-nav ml-auto">
                      <img src={'C:\\Users\\Roxana\\react-app-copy\\src\\images\\prof.png'}  width="45" height="45"/>
                      <li className="dropdown">
                      <Link to="/" className="dropdown-toggle" data-toggle="dropdown">  <span className="caret"> </span></Link>
                          <ul className="dropdown-menu ">
                              <li><Link to="/Profile">My profile</Link> </li>
                              <li><Link to="/Login">LogOut</Link> </li>
                          </ul>
                      </li>


                  </ul>

              </div>
            </div>
        </nav>

        );
    }
}


export default Navbar;
