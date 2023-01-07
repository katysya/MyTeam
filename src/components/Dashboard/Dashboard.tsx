import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GridTable, GridSort, GridPagination } from '../GridTable/GridTable';
import './Dashboard.scss';

interface TableParameters {
  pagination: GridPagination;
  sort?: GridSort;
  search?: string;
}

const Dashboard = () => {
  const columns = [
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
  const [countTotal, setCountTotal] = useState(50);
  const [parameters, setParameters] = useState<TableParameters>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const getCountData = async () => {
    return await axios
      .get('http://localhost:5000/employees')
      .then((response) => {
        setCountTotal(response.data.length);
      })
      .catch((err) => console.log(err));
  };

  const getEmployeesData = async () => {
    return await axios
      .get('http://localhost:5000/employees', {
        params: {
          _page: parameters.pagination.current,
          _limit: parameters.pagination.pageSize,
          _sort: parameters.sort?.field,
          _order: parameters.sort?.order,
          q: parameters.search,
        },
      })
      .then((response) => {
        console.log('сработала');
        setEmployees(response.data);
        setParameters({
          ...parameters,
          pagination: {
            ...parameters.pagination,
            total: Math.ceil(countTotal / parameters.pagination.pageSize),
          },
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getEmployeesData();
    getCountData();
  }, [JSON.stringify(parameters)]);

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
      />
    </div>
  );
};

export default Dashboard;
