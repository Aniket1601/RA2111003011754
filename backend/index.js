const express = require('express');
const productRoute = require('./routes/productRoute');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

app.use('/', productRoute);
