import React, { FC, PropsWithChildren } from 'react';
import './HeaderTable.scss';

interface HeaderTableProps extends PropsWithChildren {}
const HeaderTable: FC<HeaderTableProps> = ({ children }) => {
  return <thead>{children}</thead>;
};

export default HeaderTable;
