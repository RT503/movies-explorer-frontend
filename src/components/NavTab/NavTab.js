import React from 'react';
import './NavTab.css';
import { HashLink as Link } from 'react-router-hash-link';

function NavTab() {
  return (
    <button className="nav-tab">
      <Link to="#about-project" className="nav-tab__link">Узнать больше</Link>
    </button>
  );
}

export default NavTab;
