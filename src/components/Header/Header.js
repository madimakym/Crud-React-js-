import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href>CRUD</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <NavLink exact to='/' className="nav-link" activeClassName="active">HOME</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to='/create' className="nav-link" activeClassName="active">CREATE PERSON</NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </nav>

    );
  }
}

export default Header;
