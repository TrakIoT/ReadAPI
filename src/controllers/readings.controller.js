const { ReadingSchema } = require('../models/readings.model');

const readingGetController = (request, response, next) => {
  const {limit, offset, product_id, server_id} = request.params;

  const filters = {
    ...product_id && ({product_id}),
    ...server_id && ({server_id}),
  };

  const ubication = {
    skip: parseInt(offset), 
    limit: parseInt(limit)
  };

  ReadingSchema.find(filters, null, ubication).exec(function (err, readings) {
    if (err) {
      return response.status(500).send(err);
    }
    response.status(200).json({readings});
  });
};

const readingPostController = (request, response, next) => {
  const reading = request.body;

  const newReading = new ReadingSchema(reading);

  newReading.save((err) => {
    if(err) {
      response.status(400).send('READING_POST_ERROR');
    } else {
      response.status(200).json({ reading_id: newReading.register_id });
    }
  });
}

module.exports = { readingGetController, readingPostController };