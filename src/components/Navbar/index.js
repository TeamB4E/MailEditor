import React, { Component } from 'react';

import './index.css';
import LOGO from './logo-full.png';

export default class Navbar extends Component {
  render() {
    return (
      <section className="ee-navbar-container">
        <nav className="ee-navbar">
          <img src={LOGO} alt="Editor" />
        </nav>
      </section>
    );
  }
}
