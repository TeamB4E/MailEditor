import React from 'react';

import './index.css';
import LOGO from './logo-full-inversed.png';

const Footer = () => {
  return (
    <div className="ee-footer-wrapper">
      <div className="ee-footer">
        <img src={LOGO} alt="logo" />
      </div>
    </div>
  )
}

export default Footer;
