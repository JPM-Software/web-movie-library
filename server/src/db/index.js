import addInitialData from './sql/addInitialData';
import databaseStructure from './sql/databaseStructure';

import { Pool } from 'pg';

require('dotenv').config();

const DBPool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

export default DBPool;

export const query = async (text, params) => await DBPool.query(text, params);

export const initializeDatabase = async () => {
  let client = null;
  try {
    client = await DBPool.connect();
  } catch (error) {
    // eslint-disable-next-line
    console.log('A client pool error occurred:', error);
    return error;
  }

  try {
    // eslint-disable-next-line
    console.log('Initializing database...');
    await client.query('BEGIN');
    await client.query(databaseStructure);
    await client.query(addInitialData);
    await client.query('COMMIT');
  } catch (error) {
    try {
      await client.query('ROLLBACK');
    } catch (rollbackError) {
      // eslint-disable-next-line
      console.log('A rollback error occurred:', rollbackError);
    }
    // eslint-disable-next-line
    console.log('An error occurred:', error);
    return error;
  } finally {
    // eslint-disable-next-line
    console.log('Initialized databse successfuly!');
    client.release();
  }
};
