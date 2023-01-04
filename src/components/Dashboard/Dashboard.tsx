import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GridTable } from '../GridTable/GridTable';
import './Dashboard.scss';

interface employeesProps {
  id: number;
  name: string;
  secondName: string;
  patronymic: string;
  position: string;
  phone: string;
  email: string;
  address: string;
  birth: string;
  workDate: string;
  status: string;
  salary: number;
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

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      const res = await axios.get('http://localhost:5000/employees');
      setEmployees(res.data);
    };
    getEmployees();
  }, []);

  return (
    <div className="dashboard">
      <GridTable rows={employees} columns={columns} />
    </div>
  );
};

export default Dashboard;
