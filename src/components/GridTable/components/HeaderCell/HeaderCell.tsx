import cn from 'classnames';
import React, { FC, PropsWithChildren } from 'react';
import { GridSort } from '../../GridTable';
import './HeaderCell.scss';

interface HeaderCellProps extends PropsWithChildren {
  sort: boolean;
  onClick?: () => void;
  sortActive: GridSort;
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
        <div className="headerCell__sort">
          <span
            className={cn(
              'headerCell__img headerCell__img--ascend',
              sortActive.field === elField &&
                sortActive.order === 'asc' &&
                'active',
            )}></span>
          <span
            className={cn(
              'headerCell__img headerCell__img--descend',
              sortActive.field === elField &&
                sortActive.order === 'desc' &&
                'active',
            )}></span>
        </div>
      </div>
    </th>
  ) : (
    <th className="headerCell">{children}</th>
  );
};

export default HeaderCell;
