const express = require('express');
const productRoute = require('./routes/productRoute');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(7000, () => {
  console.log('Listening on port 7000');
});

app.use('/', productRoute);
