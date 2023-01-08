import React, { FC, ReactNode, useState } from 'react';
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
import Arrow from '../../img/Cell/arrow.svg';
import cn from 'classnames';

export interface GridPagination {
  current: number;
  pageSize: number;
  total?: number;
}

export interface GridSort {
  // order: null | 'descend' | 'ascend';
  order: null | string;
  field: string;
}

export interface GridColumn {
  field: string;
  label: string;
  sort: boolean;
  hidden?: boolean;
}

export type RowData = Record<string, string | number>;

interface GridTableProps {
  rows: RowData[];
  columns: GridColumn[];
  pagination: GridPagination;
  onChange?: (
    pagination: GridPagination,
    sort?: GridSort,
    search?: string,
  ) => void;
  renderActiveRow?: (row: RowData) => ReactNode;
  className?: string;
}

export const GridTable: FC<GridTableProps> = ({
  rows,
  columns,
  pagination,
  onChange,
  renderActiveRow,
}) => {
  const [activeEmployee, setActiveEmployee] = useState([-1]);

  const onClickActiveEmployee = (indexRow: number) => {
    activeEmployee.indexOf(indexRow) === -1
      ? setActiveEmployee([...activeEmployee, indexRow])
      : setActiveEmployee(
          activeEmployee.filter(
            (_, i) => i !== activeEmployee.indexOf(indexRow),
          ),
        );
  };

  const renderRow = (rowData: RowData, indexRow: number) => {
    return (
      <BodyTable>
        <Row className={'tableRow'}>
          {columns.map((column, index) =>
            !column.hidden ? (
              <Cell key={column.field}>
                {index === 0 ? (
                  <img
                    className={cn(
                      'cell__img',
                      activeEmployee.includes(indexRow) && 'cell__img active',
                    )}
                    src={Arrow}
                    onClick={() => onClickActiveEmployee(indexRow)}
                    alt="Arrow"
                  />
                ) : (
                  rowData[column.field]
                )}
              </Cell>
            ) : (
              ''
            ),
          )}
        </Row>
        {activeEmployee.includes(indexRow) && (
          <Row>
            <td colSpan={columns.length}>{renderActiveRow?.(rowData)}</td>
          </Row>
        )}
      </BodyTable>
    );
  };

  const renderHeaderCell = (el: GridColumn, index: number) => {
    const onSort = () => {
      const value = {
        // order: 'descend' as const,
        order:
          el.field !== sort.field
            ? 'desc'
            : el.field === sort.field && sort.order === 'desc'
            ? 'asc'
            : null,
        // field: sort.field === el.field && sort.order === 'descend' ? el.field : el.,
        field: sort.field === el.field && sort.order === 'asc' ? '' : el.field,
      };
      onChange?.(pagination, value, search);
      setSort(value);
    };
    return !el.hidden ? (
      <HeaderCell
        key={index}
        onClick={onSort}
        sort={el.sort}
        sortActive={sort}
        elField={el.field}>
        {el.label}
      </HeaderCell>
    ) : (
      ''
    );
  };

  const [search, setSearch] = useState('');

  const [sort, setSort] = useState<GridSort>({
    order: null,
    field: '',
  });

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
        {rows.length === 0 ? (
          <td className="notData" colSpan={columns.length}>
            Данные не найдены...
          </td>
        ) : (
          rows.map(renderRow)
        )}
      </Table>
      {pagination.total !== 0 && pagination.total !== undefined ? (
        <Pagination
          value={pagination?.current}
          total={pagination?.total}
          onChange={onChangePage}
        />
      ) : (
        ''
      )}
    </div>
  );
};
