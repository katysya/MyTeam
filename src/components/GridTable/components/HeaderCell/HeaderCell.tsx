import React, { FC, PropsWithChildren } from 'react';
import './HeaderCell.scss';

interface HeaderCellProps extends PropsWithChildren {
  sort: boolean;
}
const HeaderCell: FC<HeaderCellProps> = ({ children, sort }) => {
  return sort ? (
    <th className="headerCell">
      <div className="headerCell__data">
        {children}
        <span className="headerCell__img"></span>
      </div>
    </th>
  ) : (
    <th className="headerCell">{children}</th>
  );
};

export default HeaderCell;
