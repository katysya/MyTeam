import React, { FC } from 'react';
import Table from './components/Table/Table';
import Row from './components/Row/Row';
import Cell from './components/Cell/Cell';
import HeaderCell from './components/HeaderCell/HeaderCell';
import './GridTable.scss';
import HeaderTable from './components/HeaderTable/HeaderTable';
import BodyTable from './components/BodyTable/BodyTable';

interface Pagination {
  current: number;
  pageSize: number;
  total: number;
}

interface Sort {
  order: null | 'descend' | 'ascend';
  field: string;
}

interface Column {
  field: string;
  label: string;
}

type RowData = Record<string, string | number>;

interface GridTableProps {
  rows: RowData[];
  columns: Column[];
  pagination?: Pagination;
  onChange?: (pagination: Pagination, sort: Sort) => void;
  className?: string;
}

export const GridTable: FC<GridTableProps> = ({ rows, columns }) => {
  const renderRow = (rowData: RowData, index: number) => {
    console.log(rowData);
    return (
      <Row>
        {columns.map((column, index) => (
          <Cell key={column.field}>{rowData[column.field]}</Cell>
        ))}
      </Row>
    );
  };

  const renderHeaderCell = (el: Column, index: number) => {
    return <HeaderCell key={index}>{el.label}</HeaderCell>;
  };

  return (
    <div className="gridTable">
      <Table>
        <HeaderTable>
          <Row>{columns.map(renderHeaderCell)}</Row>
        </HeaderTable>
        <BodyTable>{rows.map(renderRow)}</BodyTable>
      </Table>
    </div>
  );
};
