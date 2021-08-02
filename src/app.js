const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const db = require('./db');
const routes = require('./routes/readings.routes');

const port = process.env.PORT || 8080;;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/reading", routes);

router.use(function(req, res, next) {
  response = { 
      message: 'URL not found'
  };

  res.status(404).send(response);
});

app.listen(port, function () {
  console.log('Example app listening on ${port}!')
})
