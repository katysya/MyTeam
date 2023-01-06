import React, { FC, PropsWithChildren } from 'react';
import './Cell.scss';

interface CellProps extends PropsWithChildren {}
const Cell: FC<CellProps> = ({ children }) => {
  return <td className="cell">{children}</td>;
};

export default Cell;
