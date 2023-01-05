import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GridTable } from '../GridTable/GridTable';
import Parameter from '../Parameter/Parameter';
import Search from '../Search/Search';
import './Dashboard.scss';

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
  const [parameter, setParameter] = useState(5); //Количество элементов для отображения
  const [search, setSearch] = useState(''); //поиск

  useEffect(() => {
    const getEmployees = async () => {
      const res = await axios.get(
        'http://localhost:5000/employees?_sort=secondName',
      );
      setEmployees(res.data);
    };
    getEmployees();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard__specification">
        <Parameter value={parameter} onChange={setParameter} />
        <Search value={search} onChange={setSearch} />
      </div>
      <GridTable rows={employees} columns={columns} search={search} />
    </div>
  );
};

export default Dashboard;
