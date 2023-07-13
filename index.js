const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors({ origin: '*' }));

app.get('/', (_, res) => {
  return res.status(200).json({
    status: 200,
    message: 'Ok',
  });
});

app.listen(80);
