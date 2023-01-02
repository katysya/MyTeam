import React, { FC, PropsWithChildren } from 'react';
import './HeaderCell.scss';

interface HeaderCellProps extends PropsWithChildren {}
const HeaderCell: FC<HeaderCellProps> = ({ children }) => {
  return <th>{children}</th>;
};

export default HeaderCell;
