import React from 'react';
import './User.scss';
import { BsPersonCircle } from 'react-icons/bs';

const User = () => {
  return (
    <div className="user">
      <BsPersonCircle />
      <p className="name">Иванов И.И.</p>
    </div>
  );
};

export default User;
