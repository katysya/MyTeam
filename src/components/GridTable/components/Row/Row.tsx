import React, { FC, PropsWithChildren } from 'react';
import './Row.scss';

interface RowProps extends PropsWithChildren {}
const Row: FC<RowProps> = ({ children }) => {
  return <tr>{children}</tr>;
};

export default Row;
