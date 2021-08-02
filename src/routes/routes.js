const express = require('express');
const { readingGetController, readingPostController } = require('../controllers/readings.controller');

const router = express.Router();

router.get('/product/:product_id', readingGetController);
router.post('/', readingPostController);

router.use(function(req, res, next) {
  response = { 
      message: 'URL not found'
  };

  res.status(404).send(response);
});

module.exports = router;