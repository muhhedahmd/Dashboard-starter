import React, { Component } from 'react';
import './style.css'
import { Link, NavLink } from 'react-router-dom';
class Header extends Component {

  state ={
    isExpanded: false,
  }
  render() {
      
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Home</Link>
            </li>
            {!this.props.isAuthorized ? 
            <>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            </>
            :
            ""
          
          }
            <li>
              <NavLink to="/dashboard/info">info</NavLink>
            </li>
            <button onClick={this.props.logout}> logout</button>
          
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
