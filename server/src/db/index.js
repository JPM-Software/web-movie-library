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

export function initializeDatabase() {
  return DBPool.connect((err, client, done) => {
    const shouldAbort = err => {
      if (err) {
        // eslint-disable-next-line
        console.error('Error in transaction', err.stack);
        client.query('ROLLBACK', err => {
          if (err) {
            // eslint-disable-next-line
            console.error('Error rolling back client', err.stack);
          }
          done();
        });
      }
      return !!err;
    };

    client.query('BEGIN', err => {
      if (shouldAbort(err)) return;

      client.query(databaseStructure, (err, res) => {
        if (shouldAbort(err)) return;
        client.query('COMMIT', err => {
          if (err) {
            // eslint-disable-next-line
            console.error('Error committing transaction', err.stack);
          }
          done();
        });
      });
    });
  });
}
