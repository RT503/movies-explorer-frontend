import React from 'react';
import LogoProfile from '../LogoProfile/LogoProfile';
import './Header.css';
import NavTab from '../NavTab/NavTab';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        { <LogoProfile /> }
        <NavTab/>
      </div>
    </header>
  );
}

export default Header;
