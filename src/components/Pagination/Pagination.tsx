import React, { FC } from 'react';
import './Pagination.scss';
import Arrow from '../../img/Pagination/arrow.svg';
import cn from 'classnames';

interface PaginationProps {
  value?: number;
  total?: number;
  onChange?: (value: number) => void;
}

const Pagination: FC<PaginationProps> = ({ value, total, onChange }) => {
  console.log(`total = ${total}`);
  const onLeftButtonClick = () => value !== undefined && onChange?.(value - 1);

  const onRightButtonClick = () => value !== undefined && onChange?.(value + 1);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li>
          <button
            className={cn(
              'pagination__button',
              value === 1 && 'pagination__button hidden',
            )}
            onClick={onLeftButtonClick}>
            <img className="pagination__left" src={Arrow} alt="Arrow" />
          </button>
        </li>
        <li>
          <span className="pagination__page">
            {value} из {total}
          </span>
        </li>
        <li>
          <button
            className={cn(
              'pagination__button',
              value === total && 'pagination__button hidden',
            )}
            onClick={onRightButtonClick}>
            <img src={Arrow} alt="Arrow" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
