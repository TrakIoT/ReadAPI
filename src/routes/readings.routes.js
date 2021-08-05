const express = require('express');
const { readingGetByIdController, readingsGetController, readingPostController } = require('../controllers/readings.controller');

const router = express.Router();

router.get('/:register_id', readingGetByIdController);
router.get('/limit/:limit/offset/:offset', readingsGetController);
router.get('/limit/:limit/offset/:offset/filters/:product_id', readingsGetController);
router.get('/limit/:limit/offset/:offset/filters/:product_id/:server_id', readingsGetController);
router.post('/', readingPostController);

module.exports = router;