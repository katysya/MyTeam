import React, { FC, useState } from 'react';
import Table from './components/Table/Table';
import Row from './components/Row/Row';
import Cell from './components/Cell/Cell';
import HeaderCell from './components/HeaderCell/HeaderCell';
import './GridTable.scss';
import HeaderTable from './components/HeaderTable/HeaderTable';
import BodyTable from './components/BodyTable/BodyTable';
import Parameter from '../Parameter/Parameter';
import Search from '../Search/Search';
import Pagination from '../Pagination/Pagination';

export interface GridPagination {
  current: number;
  pageSize?: number;
  total?: number;
}

export interface GridSort {
  order: null | 'descend' | 'ascend';
  field: string;
}

export interface GridColumn {
  field: string;
  label: string;
}

type RowData = Record<string, string | number>;

interface GridTableProps {
  rows: RowData[];
  columns: GridColumn[];
  pagination: GridPagination;
  onChange?: (
    pagination: GridPagination,
    sort?: GridSort,
    search?: string,
  ) => void;
  className?: string;
}

export const GridTable: FC<GridTableProps> = ({
  rows,
  columns,
  pagination,
  onChange,
}) => {
  const renderRow = (rowData: RowData, index: number) => {
    return (
      <Row>
        {columns.map((column, index) => (
          <Cell key={column.field}>{rowData[column.field]}</Cell>
        ))}
      </Row>
    );
  };

  const renderHeaderCell = (el: GridColumn, index: number) => {
    return <HeaderCell key={index}>{el.label}</HeaderCell>;
  };

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<GridSort>();

  const onChangePageSize = (value: number) => {
    onChange?.(
      {
        ...pagination,
        pageSize: value,
      },
      sort,
      search,
    );
  };

  const onChangePage = (value: number) => {
    onChange?.(
      {
        ...pagination,
        current: value,
      },
      sort,
      search,
    );
  };

  const onSubmitSearch = (value: string) => {
    onChange?.(pagination, sort, value);
    setSearch(value);
  };

  return (
    <div className="gridTable">
      <div className="gridTable__specification">
        <Parameter value={pagination?.pageSize} onChange={onChangePageSize} />
        <Search onSubmit={onSubmitSearch} />
      </div>
      <Table>
        <HeaderTable>
          <Row>{columns.map(renderHeaderCell)}</Row>
        </HeaderTable>
        <BodyTable>
          {rows.length === 0 ? (
            <td className="notData" colSpan={columns.length}>
              Данные не найдены...
            </td>
          ) : (
            rows.map(renderRow)
          )}
        </BodyTable>
      </Table>
      <Pagination
        value={pagination?.current}
        total={pagination?.total}
        onChange={onChangePage}
      />
    </div>
  );
};
