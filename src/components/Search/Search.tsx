import React, { FC, useState } from 'react';
import './Search.scss';

interface searchProps {
  onSubmit: (value: string) => void;
}

const Search: FC<searchProps> = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onSearchChange = (event: any) => {
    setValue?.(event.target.value);
  };

  const onClickSearch = () => {
    onSubmit?.(value);
  };

  const onClickReset = () => {
    setValue('');
    onSubmit?.('');
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search">
      <div>
        <input
          type="text"
          maxLength={40}
          value={value}
          placeholder="Поиск..."
          onChange={onSearchChange}
        />
        <button
          className="submit"
          type="submit"
          onClick={onClickSearch}></button>
      </div>
      <button className="search__reset" onClick={onClickReset}>
        Сбросить
      </button>
    </form>
  );
};

export default Search;
