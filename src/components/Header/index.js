import React from 'react';

import logo from 'src/assets/images/pokémon-logo.svg.png';
import './style.scss';

const Header = () => (
  <header className="header">
    <img className="header-logo" src={logo} alt="Pokemon Trading Card Game API" />
  </header>
);

export default Header;
