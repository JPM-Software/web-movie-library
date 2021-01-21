import { initializeDatabase } from './db';
import MainRouter from './routes';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/', MainRouter);

app.listen(port, () => {
  //eslint-disable-next-line
  console.log(`Server is listening on ${port}`);

  initializeDatabase();
});
