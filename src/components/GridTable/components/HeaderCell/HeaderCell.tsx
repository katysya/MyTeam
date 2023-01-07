import cn from 'classnames';
import React, { FC, PropsWithChildren } from 'react';
import './HeaderCell.scss';

interface HeaderCellProps extends PropsWithChildren {
  sort: boolean;
  onClick?: () => void;
  sortActive: string;
  elField: string;
}
const HeaderCell: FC<HeaderCellProps> = ({
  children,
  onClick,
  sort,
  sortActive,
  elField,
}) => {
  return sort ? (
    <th className="headerCell">
      <div className="headerCell__data" onClick={onClick}>
        {children}
        <span
          className={cn(
            'headerCell__img',
            sortActive === elField && 'headerCell__img active',
          )}></span>
      </div>
    </th>
  ) : (
    <th className="headerCell">{children}</th>
  );
};

export default HeaderCell;
