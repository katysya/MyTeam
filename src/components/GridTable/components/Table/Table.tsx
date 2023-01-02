import React, { FC, PropsWithChildren } from 'react';
import './Table.scss';

interface TableProps extends PropsWithChildren {}
const Table: FC<TableProps> = ({ children }) => {
  return <table className="table">{children}</table>;
};

export default Table;
