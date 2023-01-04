import React from 'react';
import './Search.scss';

const Search = () => {
  return (
    <form className="search">
      <div>
        <input type="text" maxLength={40} placeholder="Поиск..." />
        <button className="submit" type="submit"></button>
      </div>
      <button className="reset">Сбросить</button>
    </form>
  );
};

export default Search;
