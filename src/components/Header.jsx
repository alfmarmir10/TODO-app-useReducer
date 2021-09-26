import React from 'react';
import '../styles/styles_base.css';
import '../styles/Header/styles.css';
import Logo from '../assets/test.svg';

const Header = () => {
  return (
    <div className="width-100percent flex-row-center header-main-container">
      <div className="logo-legend-container">
        <img src={Logo} alt="Logo img" className="box-shadow-normal header-logo border-radious-50percent"/>
        <p className="font-size-md font-weight-bold margin-top-xs logo-legend">Personal TODO´s</p>
      </div>
    </div>
  )
}

export default Header
