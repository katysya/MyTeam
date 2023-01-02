import React, { FC, PropsWithChildren } from 'react';
import './BodyTable.scss';

interface BodyTableProps extends PropsWithChildren {}
const BodyTable: FC<BodyTableProps> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export default BodyTable;
