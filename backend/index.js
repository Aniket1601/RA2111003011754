const express = require('express');
const app = express();


const productRoute = require('./routes/productRoute');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

app.use('/', productRoute);
