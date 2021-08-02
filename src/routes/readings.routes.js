const express = require('express');
const { readingGetController, readingPostController } = require('../controllers/readings.controller');

const router = express.Router();

router.get('/limit/:limit/offset/:offset/filters/:product_id?/:server_id?', readingGetController);
router.post('/', readingPostController);

module.exports = router;