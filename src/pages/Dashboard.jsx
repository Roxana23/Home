import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
//import Jumbotron from '../components/Jumbotron';

class Dashboard extends Component {
    render() {
        return(
            <div>
                <Navbar/>;
                <div className="container">
                    <h2>Dashboard</h2>
                    <p>
                        <img src={'C:\\Users\\Roxana\\react-app-copy\\src\\images\\crm.png'}  width="450" height="190"/>
                    </p>
                    <p>

                    </p>
                </div>
            </div>
        );
    }
}


export default Dashboard;