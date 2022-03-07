import path from 'path';
import express from 'express';
import colors from 'colors';
import morgan from 'morgan';

import { MONOGO_DB, NODE_ENV, PORT } from './config';
import connect from './database/connect';
import transactions from './routes/transcations';

const app = express();

app.use(express.json());

if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/transactions', transactions);

if (NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
  );
}

app.listen(PORT, async () => {
  console.log(`Server running on ${NODE_ENV} mode on port ${PORT}`.yellow.bold);
  await connect({ db: MONOGO_DB });
});
