import React from 'react';
import LogoProfile from '../LogoProfile/LogoProfile';
import './Header.css';

function Header({ children, mod = '' }) {
  return (
    <header className="header">
      <div className ={`header__container ${mod}`}>
        { <LogoProfile /> }
        {children}
      </div>
    </header>
  );
}

export default Header;
