const { readingGetModel, readingPostModel } = require('../models/readings.model');

const readingGetController = (request, response, next) => {
  const {product_id: productId} = request.params;

  const data = readingGetModel(productId);

  response.status(200).json({data});
};

const readingPostController = (request, response, next) => {
  console.log(request);

  const data = readingPostModel("OK");

  response.status(200).json({test: data});
}

module.exports = { readingGetController, readingPostController };