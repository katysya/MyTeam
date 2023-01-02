import React from 'react';
import { GridTable } from '../GridTable/GridTable';
import './Dashboard.scss';

const Dashboard = () => {
  const columns = [
    { field: 'name', label: 'Name' },
    { field: 'age', label: 'Age' },
    { field: 'address', label: 'Address' },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];

  return (
    <div className="dashboard">
      <GridTable rows={data} columns={columns} />
    </div>
  );
};

export default Dashboard;
