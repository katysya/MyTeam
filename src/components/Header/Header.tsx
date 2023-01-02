import React from 'react';
import './Header.scss';
import User from '../User/User';

import { BsArrowRightSquareFill } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="header">
      <div>Logo</div>
      <div className="header__profile">
        <User />
        <BsArrowRightSquareFill />
      </div>
    </header>
  );
};

export default Header;
