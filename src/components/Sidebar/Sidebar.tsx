import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <li>
          <a className="sidebar__link" href="!#">
            Команда
          </a>
        </li>
        <li>
          <a className="sidebar__link" href="!#">
            Новости
          </a>
        </li>
        <li>
          <a className="sidebar__link" href="!#">
            Отчёты
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
