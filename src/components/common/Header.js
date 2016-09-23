import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                  <IndexLink to="/" className="navbar-brand">React Demo</IndexLink>
                </div>
                <ul className="nav navbar-nav">
                  <li><IndexLink to="/">Home</IndexLink></li>
                  <li><Link to="employee">Employee</Link></li>
                  <li><Link to="about">About</Link></li>
                </ul>
          </div>
        </nav>
    );
};

export default Header;