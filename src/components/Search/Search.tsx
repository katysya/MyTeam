import React, { FC } from 'react';
import './Search.scss';

interface searchProps {
  value: string;
  onChange: any;
}

const Search: FC<searchProps> = ({ value, onChange }) => {
  const searchChange = (event: any) => {
    onChange?.(event.target.value);
  };

  return (
    <form className="search">
      <div>
        <input
          type="text"
          maxLength={40}
          value={value}
          placeholder="Поиск..."
          onChange={searchChange}
        />
        <button className="submit" type="submit"></button>
      </div>
      <button className="reset">Сбросить</button>
    </form>
  );
};

export default Search;
