const express = require('express');
const app = express();
const router = express.Router();
const db = require('./db');
const bodyParser = require('body-parser');
const sharks = require('./routes/sharks');

const routes = require('./routes/routes');

const path = __dirname + '/views/';
const port = process.env.PORT || 8080;;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', sharks);

app.use("/reading", routes);

app.listen(port, function () {
  console.log('Example app listening on ${port}!')
})
