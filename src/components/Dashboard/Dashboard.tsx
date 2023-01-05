import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GridTable, GridSort, GridPagination } from '../GridTable/GridTable';
import Parameter from '../Parameter/Parameter';
import Search from '../Search/Search';
import Pagination from '../Pagination/Pagination';
import './Dashboard.scss';

interface TableParameters {
  pagination: GridPagination;
  sort?: GridSort;
  search?: string;
}

const Dashboard = () => {
  const columns = [
    { field: 'secondName', label: 'Фамилия' },
    { field: 'name', label: 'Имя' },
    { field: 'patronymic', label: 'Отчество' },
    { field: 'position', label: 'Должность' },
    { field: 'email', label: 'Почта' },
    { field: 'phone', label: 'Номер телефона' },
    { field: 'status', label: 'Статус' },
  ];

  const [employees, setEmployees] = useState([]); //Сотрудники
  const [parameters, setParameters] = useState<TableParameters>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  //Пагинация
  // const [parameter, setParameter] = useState(5); //Количество элементов для отображения

  const [search, setSearch] = useState(''); //Поиск

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
        setEmployees(response.data);
        setParameters({
          ...parameters,
          pagination: {
            ...parameters.pagination,
            total: 30,
          },
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getEmployeesData();
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
