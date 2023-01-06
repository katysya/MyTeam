import cn from 'classnames';
import React, { FC, PropsWithChildren, useState } from 'react';
import './HeaderCell.scss';

interface HeaderCellProps extends PropsWithChildren {
  sort: boolean;
  onClick?: () => void;
}
const HeaderCell: FC<HeaderCellProps> = ({ children, onClick, sort }) => {
  const [active, setActive] = useState(false);

  return sort ? (
    <th className="headerCell">
      <div className="headerCell__data" onClick={onClick}>
        {children}
        <span
          className={cn(
            'headerCell__img',
            active && 'headerCell__img active',
          )}></span>
      </div>
    </th>
  ) : (
    <th className="headerCell">{children}</th>
  );
};

export default HeaderCell;
