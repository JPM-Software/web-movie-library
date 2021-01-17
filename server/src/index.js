import pool from './db';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(logger('common'));

app.listen(port, () => {
  //eslint-disable-next-line
  console.log(`server is listening on ${port}`);

  pool.query('SELECT NOW()', (err, res) => {
    //eslint-disable-next-line
    console.log(err, res);
    pool.end();
  });
});
