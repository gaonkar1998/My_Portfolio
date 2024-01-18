import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h2>Hello I'm</h2>
        <h1>Akshata Nilo Gaonkar</h1>
        <h2 className="text-light">Full-Stack Developer</h2>
        <CTA />
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
