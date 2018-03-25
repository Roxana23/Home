import React, { Component } from 'react';
//import Navbar from '../components/Navbar.jsx';
//import Jumbotron from '../components/Jumbotron';

class Login extends Component {


    render() {
        return (
            <div className="container">
                <ul>
                    <li>
                        <label>
                            User:
                            <input type="text" />
                        </label> </li>
                    <li> <label>
                        Password:
                        <input type="text"  />
                    </label> </li>

                    <button>
                        Login
                    </button>
                </ul>
            </div>
        );
    }
}


export default Login;