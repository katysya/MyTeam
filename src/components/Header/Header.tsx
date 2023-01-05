import React from 'react';
import './Header.scss';
import User from '../User/User';
import Logo from '../../img/Header/logo.png';

import { BsArrowRightSquareFill } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="Logo" />
      <div className="header__profile">
        <User />
        <BsArrowRightSquareFill />
      </div>
    </header>
  );
};

export default Header;
