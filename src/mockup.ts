import axios from 'axios';
import mockAdapter from 'axios-mock-adapter';
import db from './db.json';

const mock = new mockAdapter(axios);

mock.onGet('/employees').reply(200, db.employees);
