import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  GridTable,
  GridSort,
  GridPagination,
  RowData,
} from '../GridTable/GridTable';
import './Dashboard.scss';
import Avatar from '../../img/GridTable/avatar.jpg';

interface TableParameters {
  pagination: GridPagination;
  sort?: GridSort;
  search?: string;
}

const Dashboard = () => {
  const columns = [
    { field: 'id', label: 'ID', sort: true, hidden: true },
    { field: 'additionally', label: '', sort: false },
    { field: 'secondName', label: 'Фамилия', sort: true },
    { field: 'name', label: 'Имя', sort: true },
    { field: 'patronymic', label: 'Отчество', sort: true },
    { field: 'position', label: 'Должность', sort: false },
    { field: 'email', label: 'Почта', sort: true },
    { field: 'phone', label: 'Номер телефона', sort: false },
    { field: 'status', label: 'Статус', sort: true },
  ];

  const [employees, setEmployees] = useState([]); //Сотрудники
  const [parameters, setParameters] = useState<TableParameters>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const renderActiveRow = (row: RowData) => (
    <div className="information__cell">
      <img className="information__image" src={Avatar} alt="Сотрудник" />
      <div className="information__data">
        <p>Адрес: {row['address']}</p>
        <p>День рождения: {row['birth']}</p>
        <p>Дата начала работы: {row['workDate']}</p>
        <p>З/п: {row['salary']}</p>
      </div>
    </div>
  );

  const getEmployeesData = async () => {
    return await axios
      .get(`${process.env.REACT_APP_BACKEND}/employees`, {
        params: {
          _page: parameters.pagination.current,
          _limit: parameters.pagination.pageSize,
          _sort: parameters.sort?.field || 'id',
          _order: parameters.sort?.order,
          q: parameters.search,
        },
      })
      .then((response) => {
        setEmployees(response.data);
        setParameters({
          ...parameters,
          pagination: {
            ...parameters.pagination,
            total: Math.ceil(
              Number(response.headers['x-total-count']) /
                parameters.pagination.pageSize,
            ),
          },
        });
        console.log(parameters);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getEmployeesData();
  }, [
    parameters.pagination.current,
    parameters.pagination.pageSize,
    parameters.sort,
    parameters.search,
  ]);

  const onChange = (
    pagination: GridPagination,
    sort?: GridSort,
    search?: string,
  ) => {
    console.log({ pagination, sort, search });
    setParameters({
      pagination,
      sort,
      search,
    });
  };

  return (
    <div className="dashboard">
      <GridTable
        rows={employees}
        columns={columns}
        pagination={parameters.pagination}
        onChange={onChange}
        renderActiveRow={renderActiveRow}
      />
    </div>
  );
};

export default Dashboard;
