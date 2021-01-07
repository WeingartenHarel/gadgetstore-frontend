import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './AppHeader.scss';

export default function AppHeader() {
  return (
    <div className="app-header flex">
      <section className="logo">
        Gadget Store
      </section>
      <section className="nav-bar">
        <span>About</span>
        <span>Login</span>
          {/* <Link to="/about">About</Link> */}
          {/* <Link to="/login">Login</Link> */}
      </section>
    </div>
  )
}


