import React, { FC } from 'react';
import './Pagination.scss';
import Arrow from '../../img/Pagination/arrow.svg';

interface PaginationProps {
  value?: number;
  total?: number;
  onChange?: (value: number) => void;
}

const Pagination: FC<PaginationProps> = ({ value, total, onChange }) => {
  const onLeftButtonClick = () => value !== undefined && onChange?.(value - 1);

  const onRightButtonClick = () => value !== undefined && onChange?.(value + 1);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li>
          <button className="pagination__button" onClick={onLeftButtonClick}>
            <img className="pagination__left" src={Arrow} alt="Arrow" />
          </button>
        </li>
        <li>
          <span className="pagination__page">{value}</span>
        </li>
        <li>
          <button className="pagination__button" onClick={onRightButtonClick}>
            <img src={Arrow} alt="Arrow" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
