import express from 'express';
import colors from 'colors';
import morgan from 'morgan';

import { MONOGO_DB, NODE_ENV, PORT } from './config';
import connect from './database/connect';
import transactions from './routes/transcations';

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/transactions', transactions);

app.listen(PORT, async () => {
  console.log(`Server running on ${NODE_ENV} mode on port ${PORT}`.yellow.bold);
  await connect({ db: MONOGO_DB });
});
